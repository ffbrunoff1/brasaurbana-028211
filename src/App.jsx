import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import ProductDetail from './pages/ProductDetail';
import Gallery from './pages/Gallery';
import Contact from './components/Contact';
import OrderOnline from './pages/OrderOnline';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <main className="overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="/produto/:slug" element={<ProductDetail />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/pedidos" element={<OrderOnline />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
