import { Link } from 'react-router-dom';
import { ArrowRight, Battery, Zap, Shield } from 'lucide-react';
import WatchCanvas from '../components/WatchCanvas';
import React from 'react';

const HomePage: React.FC = React.memo(() => {
  const features = [
    {
      icon: Battery,
      name: 'Solar'
    },
    {
      icon: Zap,
      name: 'Smart'
    },
    {
      icon: Shield,
      name: 'Durable'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* 3D Watch Display */}
        <div className="absolute inset-0 z-10">
          <WatchCanvas
            enableControls={true}
            autoRotate={false}
            cameraPosition={[0, 0, 4]}
            watchId="1"
            enableZoom={false}
          />
        </div>
        {/* Content Overlay */}
        <div className=" relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-6 shadow-lg border border-white/10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black font-sans">
              Welcome to{' '} <br />
              <span className="text-gray-300">Brandtownfashion</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-6">
              Premium timepieces with elegance & innovation.
            </p>
            
            {/* Features Section */}
            <div className="mb-6">
              <h2 className="text-lg font-bold text-black font-sans mb-4">
                Crafted for <span className="text-gray-600">Perfection</span>
              </h2>
              <div className="flex justify-center items-center gap-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-100/50 to-gray-200/50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-gray-600" />
                      </div>
                      <h3 className="text-sm font-semibold text-black">{feature.name}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/products"
                className="group inline-flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                <span>Explore</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/watch/1"
                className="group inline-flex items-center space-x-2 border border-gray-600 hover:border-gray-700 text-gray-600 hover:text-gray-700 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 bg-white/60"
              >
                <span>Details</span>
              </Link>
            </div>
          </div>
        </div>
     
      </section>
    </div>
  );
});

export default HomePage;