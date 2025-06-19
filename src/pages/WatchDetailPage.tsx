import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Heart, Share, Star } from 'lucide-react';
import WatchCanvas from '../components/WatchCanvas';
import LevelControls from '../components/LevelControls';
import { watches } from '../data/watches';
import { getWatchConfig, getDefaultConfig } from '../data/watchConfig';

const WatchDetailPage: React.FC = React.memo(() => {
  const { id } = useParams<{ id: string }>();
  const watch = watches.find(w => w.id === id);
  
  const [selectedColor, setSelectedColor] = React.useState(0);
  const [selectedMaterial, setSelectedMaterial] = React.useState(0);
  const [isLiked, setIsLiked] = React.useState(false);
  const [dynamicConfig, setDynamicConfig] = React.useState(() => {
    const config = id ? getWatchConfig(id) || getDefaultConfig() : getDefaultConfig();
    return {
      position: config.position,
      rotation: config.rotation,
      scale: config.scale
    };
  });

  if (!watch) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Watch not found</h1>
          <Link to="/products" className="text-gray-600 hover:text-gray-800">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-gray-500 hover:text-gray-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Collection</span>
        </Link>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* 3D Viewer - Full Width on Mobile */}
          <div className="lg:col-span-1 order-1">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <WatchCanvas
                  enableControls={true}
                  autoRotate={false}
                  watchId={watch.id}
                  dynamicConfig={dynamicConfig}
                />
              </div>
              
              {/* 3D Viewer Controls */}
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-md border border-white/20">
                <p className="text-xs text-gray-600">
                  🖱️ Drag to rotate • 🔍 Scroll to zoom • 🖱️ 
                </p>
              </div>
            </div>
          </div>

          {/* Product Details - Full Width on Mobile */}
          <div className="lg:col-span-1 order-2 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">{watch.name}</h1>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">(4.9 reviews)</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-colors ${
                      isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-500 hover:text-red-500 border border-white/20'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full bg-white/80 text-gray-500 hover:text-gray-700 transition-colors border border-white/20">
                    <Share className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">{watch.description}</p>
            </div>

            {/* Color & Material Selection - Stacked */}
            <div className="space-y-6">
              {/* Color Selection - Circular Radio Buttons */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-gray-700">Color</h3>
                <div className="flex items-center space-x-3">
                  {watch.colors.map((color, index) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(index)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === index
                          ? 'border-gray-800 scale-110 shadow-md'
                          : 'border-gray-300 hover:border-gray-500'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Material Selection - Short Buttons */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-gray-700">Material</h3>
                <div className="flex items-center space-x-2">
                  {watch.materials.map((material, index) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(index)}
                      className={`px-3 py-1 rounded-lg border text-xs transition-colors ${
                        selectedMaterial === index
                          ? 'border-gray-800 bg-gray-800/10 text-gray-800'
                          : 'border-gray-300 text-gray-600 hover:border-gray-500 bg-white/80'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold text-gray-800">
              ${watch.price.toLocaleString()}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-4 px-8 rounded-lg font-semibold transition-colors shadow-md">
                Add to Cart
              </button>
              <button className="flex-1 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white py-4 px-8 rounded-lg font-semibold transition-colors">
                Buy Now
              </button>
            </div>
          </div>

          {/* Features - Full Width on Mobile */}
          <div className="lg:col-span-2 order-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {watch.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Level Controls - Only show for watch models 2, 3, 4, and 5 */}
      {(watch.id === '2' || watch.id === '3' || watch.id === '4' || watch.id === '5') && (
        <LevelControls
          initialConfig={dynamicConfig}
          onConfigChange={setDynamicConfig}
        />
      )}
    </div>
  );
});

export default WatchDetailPage;