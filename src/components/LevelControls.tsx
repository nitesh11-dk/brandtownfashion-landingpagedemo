import React, { useState } from 'react';
import { Settings, RotateCcw, Move, ZoomIn, Layers } from 'lucide-react';

interface LevelControlsProps {
  onConfigChange: (config: {
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    scale: number;
  }) => void;
  initialConfig: {
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    scale: number;
  };
}

const LevelControls: React.FC<LevelControlsProps> = ({ onConfigChange, initialConfig }) => {
  const [config, setConfig] = useState(initialConfig);
  const [isOpen, setIsOpen] = useState(false);

  const updateConfig = (newConfig: Partial<typeof config>) => {
    const updatedConfig = { ...config, ...newConfig };
    setConfig(updatedConfig);
    onConfigChange(updatedConfig);
  };

  const resetToDefault = () => {
    const defaultConfig = {
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: 1.0
    };
    setConfig(defaultConfig);
    onConfigChange(defaultConfig);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/20 hover:bg-white transition-all duration-200"
      >
        <Settings className={`h-5 w-5 text-gray-700 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      {/* Controls Panel */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 w-80">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Level Controls</h3>
            <button
              onClick={resetToDefault}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              title="Reset to Default"
            >
              <RotateCcw className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          {/* Position Controls */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Move className="h-4 w-4 text-gray-600" />
              <h4 className="text-sm font-medium text-gray-700">Position</h4>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-600 block mb-1">X Position</label>
                <input
                  type="range"
                  min="-10"
                  max="10"
                  step="0.1"
                  value={config.position.x}
                  onChange={(e) => updateConfig({
                    position: { ...config.position, x: parseFloat(e.target.value) }
                  })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-gray-500">{config.position.x.toFixed(1)}</span>
              </div>

              <div>
                <label className="text-xs text-gray-600 block mb-1">Y Position</label>
                <input
                  type="range"
                  min="-10"
                  max="10"
                  step="0.1"
                  value={config.position.y}
                  onChange={(e) => updateConfig({
                    position: { ...config.position, y: parseFloat(e.target.value) }
                  })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-gray-500">{config.position.y.toFixed(1)}</span>
              </div>

              <div>
                <label className="text-xs text-gray-600 block mb-1">Z Position (Depth)</label>
                <input
                  type="range"
                  min="-50"
                  max="50"
                  step="0.5"
                  value={config.position.z}
                  onChange={(e) => updateConfig({
                    position: { ...config.position, z: parseFloat(e.target.value) }
                  })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-gray-500">{config.position.z.toFixed(1)}</span>
              </div>
            </div>
          </div>

          {/* Rotation Controls */}
          <div className="space-y-4 mt-6">
            <div className="flex items-center space-x-2">
              <RotateCcw className="h-4 w-4 text-gray-600" />
              <h4 className="text-sm font-medium text-gray-700">Rotation</h4>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-600 block mb-1">X Rotation</label>
                <input
                  type="range"
                  min="-3.14"
                  max="3.14"
                  step="0.1"
                  value={config.rotation.x}
                  onChange={(e) => updateConfig({
                    rotation: { ...config.rotation, x: parseFloat(e.target.value) }
                  })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-gray-500">{config.rotation.x.toFixed(2)}</span>
              </div>

              <div>
                <label className="text-xs text-gray-600 block mb-1">Y Rotation</label>
                <input
                  type="range"
                  min="-3.14"
                  max="3.14"
                  step="0.1"
                  value={config.rotation.y}
                  onChange={(e) => updateConfig({
                    rotation: { ...config.rotation, y: parseFloat(e.target.value) }
                  })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-gray-500">{config.rotation.y.toFixed(2)}</span>
              </div>

              <div>
                <label className="text-xs text-gray-600 block mb-1">Z Rotation</label>
                <input
                  type="range"
                  min="-3.14"
                  max="3.14"
                  step="0.1"
                  value={config.rotation.z}
                  onChange={(e) => updateConfig({
                    rotation: { ...config.rotation, z: parseFloat(e.target.value) }
                  })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs text-gray-500">{config.rotation.z.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Scale Control */}
          <div className="space-y-4 mt-6">
            <div className="flex items-center space-x-2">
              <ZoomIn className="h-4 w-4 text-gray-600" />
              <h4 className="text-sm font-medium text-gray-700">Scale</h4>
            </div>
            
            <div>
              <label className="text-xs text-gray-600 block mb-1">Scale Value</label>
              <input
                type="range"
                min="0.1"
                max="3.0"
                step="0.1"
                value={config.scale}
                onChange={(e) => updateConfig({
                  scale: parseFloat(e.target.value)
                })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs text-gray-500">{config.scale.toFixed(1)}</span>
            </div>
          </div>

          {/* Current Values Display */}
          <div className="mt-6 p-3 bg-gray-50 rounded-lg">
            <h5 className="text-xs font-medium text-gray-700 mb-2">Current Values</h5>
            <div className="text-xs text-gray-600 space-y-1">
              <div>Position: ({config.position.x.toFixed(1)}, {config.position.y.toFixed(1)}, {config.position.z.toFixed(1)})</div>
              <div>Rotation: ({config.rotation.x.toFixed(2)}, {config.rotation.y.toFixed(2)}, {config.rotation.z.toFixed(2)})</div>
              <div>Scale: {config.scale.toFixed(1)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelControls; 