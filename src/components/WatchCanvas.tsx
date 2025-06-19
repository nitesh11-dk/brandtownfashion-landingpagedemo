import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Html } from '@react-three/drei';
import WatchModel from './WatchModel';
import { getWatchConfig, getDefaultConfig } from '../data/watchConfig';

interface WatchCanvasProps {
  modelPath?: string;
  enableControls?: boolean;
  autoRotate?: boolean;
  className?: string;
  cameraPosition?: [number, number, number];
  watchId?: string;
  enableZoom?: boolean;
  dynamicConfig?: {
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    scale: number;
  };
  forceRerenderKey?: string | number;
}

const LoadingSpinner = () => (
  <Html center>
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
    </div>
  </Html>
);

// Helper to detect mobile
const getIsMobile = () => (typeof window !== 'undefined' ? window.innerWidth < 768 : false);

const WatchCanvas: React.FC<WatchCanvasProps> = React.memo(({
  modelPath = '/models/watch.glb',
  enableControls = true,
  autoRotate = false,
  className = '',
  cameraPosition,
  watchId,
  enableZoom = true,
  dynamicConfig,
  forceRerenderKey
}) => {
  const config = watchId ? getWatchConfig(watchId) || getDefaultConfig() : getDefaultConfig();
  const finalCameraPosition = cameraPosition || config.cameraPosition;
  // Memoize dpr for device, always as tuple [number, number]
  const dpr = useMemo(() => {
    const mobile = getIsMobile();
    return mobile ? ([1, 1.5] as [number, number]) : ([1, 2] as [number, number]);
  }, []);

  return (
    <div className={`w-full h-full ${className}`}> 
      <Canvas
        key={forceRerenderKey}
        camera={{ position: finalCameraPosition, fov: 45 }}
        dpr={dpr}
        shadows
        frameloop="demand"
      >
        <Suspense fallback={<LoadingSpinner />}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} />
          <pointLight position={[-10, -10, -10]} />
          <Environment preset="city" />
          <WatchModel 
            modelPath={modelPath} 
            watchId={watchId} 
            dynamicConfig={dynamicConfig}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate={autoRotate}
            autoRotateSpeed={0.5}
            minDistance={1}
            maxDistance={10}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            dampingFactor={0.05}
            enableDamping={true}
          />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        </Suspense>
      </Canvas>
    </div>
  );
});

export default WatchCanvas;