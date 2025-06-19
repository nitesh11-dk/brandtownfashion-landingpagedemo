import React, { useRef, Suspense, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { Html } from '@react-three/drei';
import { getWatchConfig, getDefaultConfig } from '../data/watchConfig';
import { useLoader as useGlobalLoader } from '../context/LoaderContext';

interface WatchModelProps {
  modelPath: string;
  watchId?: string;
  dynamicConfig?: {
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    scale: number;
  };
}

const LoadingSpinner = () => (
  <Html center>
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
    </div>
  </Html>
);

const ModelFallback = () => (
  <Html center>
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p className="text-sm text-gray-600">3D Model Loading...</p>
    </div>
  </Html>
);

const WatchModel: React.FC<WatchModelProps> = React.memo(({ modelPath, watchId, dynamicConfig }) => {
  const groupRef = useRef<Group>(null);
  const [ModelComponent, setModelComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const globalLoader = useGlobalLoader();

  // Custom drag state
  const dragState = useRef({ dragging: false, lastX: 0, lastY: 0 });

  // Get watch configuration
  const config = watchId ? getWatchConfig(watchId) || getDefaultConfig() : getDefaultConfig();
  
  // Use dynamic config if provided, otherwise use default config
  const finalConfig = dynamicConfig || {
    position: config.position,
    rotation: config.rotation,
    scale: config.scale
  };

  // Local rotation state for drag
  const [dragRotation, setDragRotation] = useState({ x: finalConfig.rotation.x, y: finalConfig.rotation.y });

  // Keep dragRotation in sync with config changes
  useEffect(() => {
    setDragRotation({ x: finalConfig.rotation.x, y: finalConfig.rotation.y });
  }, [finalConfig.rotation.x, finalConfig.rotation.y]);

  // Drag handlers
  const onPointerDown = (e: any) => {
    dragState.current.dragging = true;
    dragState.current.lastX = e.clientX;
    dragState.current.lastY = e.clientY;
    // Prevent default to avoid unwanted selection
    e.target.setPointerCapture && e.target.setPointerCapture(e.pointerId);
  };
  const onPointerUp = (e: any) => {
    dragState.current.dragging = false;
    e.target.releasePointerCapture && e.target.releasePointerCapture(e.pointerId);
  };
  const onPointerMove = (e: any) => {
    if (!dragState.current.dragging) return;
    const deltaX = e.clientX - dragState.current.lastX;
    const deltaY = e.clientY - dragState.current.lastY;
    dragState.current.lastX = e.clientX;
    dragState.current.lastY = e.clientY;
    // Sensitivity factor
    setDragRotation(prev => ({
      x: Math.max(-Math.PI / 2, Math.min(Math.PI / 2, prev.x + deltaY * 0.01)),
      y: prev.y + deltaX * 0.01
    }));
  };

  // Apply drag rotation to group
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = dragRotation.x;
      groupRef.current.rotation.y = dragRotation.y;
      groupRef.current.rotation.z = finalConfig.rotation.z;
    }
  });

  // Dynamically import the appropriate 3D model component based on watch ID
  useEffect(() => {
    const loadModel = async () => {
      setIsLoading(true);
      setHasError(false);
      globalLoader.increment();
      try {
        let modelModule;
        switch (watchId) {
          case '1':
            modelModule = await import('./Chronograph_watch_mudmaster');
            break;
          case '2':
            modelModule = await import('./Digital_watch');
            break;
          case '3':
            modelModule = await import('./Digital_watch');
            break;
          case '4':
            modelModule = await import('./Apple_watch_series_7_-_free_watch-face_sdctm');
            break;
          case '5':
            modelModule = await import('./Timex_expedition_watch');
            break;
          case '6':
            modelModule = await import('./Chronograph_watch_mudmaster');
            break;
          default:
            setModelComponent(null);
            setHasError(true);
            setIsLoading(false);
            globalLoader.decrement();
            return;
        }
        setModelComponent(() => modelModule.Model);
        setIsLoading(false);
        globalLoader.decrement();
      } catch (error) {
        console.error('Error loading 3D model:', error);
        setModelComponent(null);
        setHasError(true);
        setIsLoading(false);
        globalLoader.decrement();
      }
    };
    loadModel();
  }, [watchId]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <group position={[finalConfig.position.x, finalConfig.position.y, finalConfig.position.z]} scale={finalConfig.scale}>
        <group
          ref={groupRef}
          // rotation handled by drag logic
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerOut={onPointerUp}
          onPointerMove={onPointerMove}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : hasError || !ModelComponent ? (
            <ModelFallback />
          ) : (
            <ModelComponent />
          )}
        </group>
        {/* Set cursor style via Html overlay for grab effect */}
        <Html center style={{ pointerEvents: 'none' }}>
          <style>{`canvas { cursor: grab !important; }`}</style>
        </Html>
      </group>
    </Suspense>
  );
});

export default WatchModel;