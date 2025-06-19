import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import WatchDetailPage from './pages/WatchDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/watch/:id" element={<WatchDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;