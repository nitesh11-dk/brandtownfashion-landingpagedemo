export interface WatchConfig {
  id: string;
  name: string;
  modelComponent: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    x: number;
    y: number;
    z: number;
  };
  scale: number;
  cameraPosition: [number, number, number];
  cameraTarget?: [number, number, number];
}

export const watchConfigs: WatchConfig[] = [
  {
    id: '1',
    name: 'Chrono Solar Elite',
    modelComponent: 'Chronograph_watch_mudmaster',
    position: {
      x: 0,
      y: 0,
      z: -4.5
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0
    },
    scale: 1.0,
    cameraPosition: [0, 0, 3]
  },
  {
    id: '2',
    name: 'Apex Diver Pro',
    modelComponent: 'Apple_watch_series_7',
    position: {
      x: 0,
      y: 0.2,
      z: -12.5
    },
    rotation: {
      x: 0,
      y: -1.74,
      z: 0
    },
    scale: 1.2,
    cameraPosition: [0, 0, 3.5]
  },
  {
    id: '3',
    name: 'Urban Smart Classic',
    modelComponent: 'Digital_watch',
    position: {
      x: 0,
      y: -0.1,
      z: -12.5
    },
    rotation: {
      x: 0,
      y: -1.74,
      z: 0
    },
    scale: 0.8,
    cameraPosition: [0, 0, 2.5]
  },
  {
    id: '4',
    name: 'Lunar Phase Master',
    modelComponent: 'Apple_watch_series_7_-_free_watch-face_sdctm',
    position: {
      x: 0.1,
      y: 0,
      z: 2.75
    },
    rotation: {
      x: 0.26,
      y: -0.1,
      z: 0
    },
    scale: 3.0,
    cameraPosition: [0, 0, 3.2]
  },
  {
    id: '5',
    name: 'Carbon Fiber Racer',
    modelComponent: 'Timex_expedition_watch',
    position: {
      x: -0.1,
      y: 0.1,
      z: -27.0
    },
    rotation: {
      x: 0.05,
      y: 0.15,
      z: 0
    },
    scale: 1.0,
    cameraPosition: [0, 0, 2.8]
  },
  {
    id: '6',
    name: 'Vintage Heritage GMT',
    modelComponent: 'Metaretail_watch_1',
    position: {
      x: 0,
      y: 0,
      z: -4.5
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0
    },
    scale: 1.0,
    cameraPosition: [0, 0, 3]
  }
];

// Helper function to get config by watch ID
export const getWatchConfig = (watchId: string): WatchConfig | undefined => {
  return watchConfigs.find(config => config.id === watchId);
};

// Helper function to get default config
export const getDefaultConfig = (): WatchConfig => {
  return {
    id: 'default',
    name: 'Default Watch',
    modelComponent: 'generic',
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: 1.0,
    cameraPosition: [0, 0, 3]
  };
}; 