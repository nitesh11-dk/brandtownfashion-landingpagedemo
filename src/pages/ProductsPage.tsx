import ProductCard from '../components/ProductCard';
import { watches } from '../data/watches';
import React, { useMemo } from 'react';

const ProductsPage: React.FC = React.memo(() => {
  const memoWatches = useMemo(() => watches, []);
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black font-sans">
            Our{' '}
            <span className="text-gray-600">Collection</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Discover timepieces that blend traditional craftsmanship with modern innovation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memoWatches.map((watch) => (
            <ProductCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProductsPage;