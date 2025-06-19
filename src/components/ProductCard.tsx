import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Watch } from '../data/watches';

interface ProductCardProps {
  watch: Watch;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({ watch }) => {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/90 transition-all duration-300 hover:shadow-xl border border-white/20 shadow-lg">
      {/* Image/3D Preview */}
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <img
          src={watch.image}
          alt={watch.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors">
          {watch.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {watch.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-800">
            ${watch.price.toLocaleString()}
          </span>
          
          <Link
            to={`/watch/${watch.id}`}
            className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors group/button shadow-md"
          >
            <span className="text-sm font-medium">View Details</span>
            <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;