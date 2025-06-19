import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { LoaderProvider, useLoader } from './context/LoaderContext';
import LoaderOverlay from './components/LoaderOverlay';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const WatchDetailPage = lazy(() => import('./pages/WatchDetailPage'));

const AppContent = () => {
  const { loading } = useLoader();
  return (
    <>
      {loading && <LoaderOverlay />}
      <Router>
        <div className="min-h-screen bg-dark-900 text-white">
          <Header />
          <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-lg text-gray-700">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/watch/:id" element={<WatchDetailPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
};

function App() {
  return (
    <LoaderProvider>
      <AppContent />
    </LoaderProvider>
  );
}

export default App;