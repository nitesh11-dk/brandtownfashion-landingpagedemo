export interface Watch {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  modelComponent: string;
  specifications: {
    movement: string;
    case: string;
    diameter: string;
    waterResistance: string;
    battery: string;
  };
  features: string[];
  colors: string[];
  materials: string[];
}

export const watches: Watch[] = [
  {
    id: '1',
    name: 'Chrono Solar Elite',
    description: 'Premium solar-powered timepiece with advanced chronograph functionality and titanium construction.',
    price: 2499,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
    modelComponent: 'Chronograph_watch_mudmaster',
    specifications: {
      movement: 'Solar Quartz Chronograph',
      case: 'Titanium with DLC coating',
      diameter: '42mm',
      waterResistance: '200m',
      battery: '6-12 months per charge'
    },
    features: [
      'Solar charging technology',
      'Chronograph with 1/10 second precision',
      'Sapphire crystal glass',
      'Titanium bracelet',
      'Date display',
      'Luminous hands and markers'
    ],
    colors: ['Black', 'Blue', 'Silver'],
    materials: ['Titanium', 'Sapphire Crystal', 'Ceramic']
  },
  {
    id: '2',
    name: 'Apex Diver Pro',
    description: 'Professional diving watch with helium escape valve and unidirectional rotating bezel.',
    price: 1899,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
    modelComponent: 'Apple_watch_series_7',
    specifications: {
      movement: 'Automatic Self-winding',
      case: 'Stainless Steel 316L',
      diameter: '44mm',
      waterResistance: '500m',
      battery: 'Mechanical - 42h power reserve'
    },
    features: [
      'Helium escape valve',
      'Unidirectional rotating bezel',
      'Automatic movement',
      'Screw-down crown',
      'Super-LumiNova coating',
      'Anti-magnetic resistance'
    ],
    colors: ['Black', 'Ocean Blue', 'Deep Green'],
    materials: ['Stainless Steel', 'Ceramic Bezel', 'Rubber Strap']
  },
  {
    id: '3',
    name: 'Urban Smart Classic',
    description: 'Hybrid smartwatch combining traditional aesthetics with modern connectivity features.',
    price: 1299,
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800',
    modelComponent: 'Digital_watch',
    specifications: {
      movement: 'Hybrid Smart Movement',
      case: 'Rose Gold Plated Steel',
      diameter: '40mm',
      waterResistance: '100m',
      battery: '6 months smart features'
    },
    features: [
      'Smartphone notifications',
      'Fitness tracking',
      'Sleep monitoring',
      'Traditional analog display',
      'Wireless charging',
      'Customizable watch faces'
    ],
    colors: ['Rose Gold', 'Silver', 'Black'],
    materials: ['Steel', 'Leather', 'Milanese Mesh']
  },
  {
    id: '4',
    name: 'Lunar Phase Master',
    description: 'Astronomical complications featuring moon phase display and GMT functionality.',
    price: 3299,
    image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=800',
    modelComponent: 'Apple_watch_series_7_-_free_watch-face_sdctm',
    specifications: {
      movement: 'Swiss Automatic GMT',
      case: '18K White Gold',
      diameter: '41mm',
      waterResistance: '50m',
      battery: 'Mechanical - 48h power reserve'
    },
    features: [
      'Moon phase complication',
      'GMT second timezone',
      'Date display',
      'Swiss automatic movement',
      'Leather alligator strap',
      'Exhibition caseback'
    ],
    colors: ['White Gold', 'Yellow Gold', 'Rose Gold'],
    materials: ['18K Gold', 'Alligator Leather', 'Sapphire Crystal']
  },
  {
    id: '5',
    name: 'Carbon Fiber Racer',
    description: 'Lightweight racing-inspired chronograph with carbon fiber case and tachymeter bezel.',
    price: 1799,
    image: 'https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=800',
    modelComponent: 'Timex_expedition_watch',
    specifications: {
      movement: 'Quartz Chronograph',
      case: 'Carbon Fiber Composite',
      diameter: '43mm',
      waterResistance: '100m',
      battery: '3 years'
    },
    features: [
      'Carbon fiber case',
      'Tachymeter bezel',
      'Chronograph function',
      'Lightweight design',
      'Racing-inspired aesthetics',
      'Luminous markers'
    ],
    colors: ['Carbon Black', 'Racing Red', 'Titanium Gray'],
    materials: ['Carbon Fiber', 'Titanium', 'Silicone Strap']
  },
  {
    id: '6',
    name: 'Vintage Heritage GMT',
    description: 'Classic GMT watch with vintage-inspired design and modern Swiss movement.',
    price: 2199,
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800',
    modelComponent: 'Metaretail_watch_1',
    specifications: {
      movement: 'Swiss Automatic GMT',
      case: 'Brushed Stainless Steel',
      diameter: '39mm',
      waterResistance: '150m',
      battery: 'Mechanical - 40h power reserve'
    },
    features: [
      'GMT complication',
      'Vintage-inspired design',
      'Swiss automatic movement',
      'Domed sapphire crystal',
      'Vintage leather strap',
      'Luminous vintage lume'
    ],
    colors: ['Vintage Cream', 'Deep Blue', 'Forest Green'],
    materials: ['Stainless Steel', 'Vintage Leather', 'Sapphire Crystal']
  }
];