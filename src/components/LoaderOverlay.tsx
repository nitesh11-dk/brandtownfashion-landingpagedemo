import React from 'react';

const LoaderOverlay: React.FC = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-b-4 border-blue-200 mb-6"></div>
      <h2 className="text-2xl font-bold text-gray-700 mb-2 font-sans">Loading <span className="text-blue-600">Brandtownfashion</span>...</h2>
      <p className="text-gray-500">Please wait while we load your experience.</p>
    </div>
  </div>
);

export default LoaderOverlay; 