import React, { useEffect, useState, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingUI } from './components/FloatingUI';
import { BackToTop } from './components/BackToTop';
import { NoiseTexture } from './components/NoiseTexture';

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const WholesalePage = lazy(() => import('./pages/WholesalePage').then(m => ({ default: m.WholesalePage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));
const CityPage = lazy(() => import('./pages/CityPage').then(m => ({ default: m.CityPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (window.localStorage.getItem('ws-theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('ws-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--cream)' }}>
      <NoiseTexture />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wholesale" element={<WholesalePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/city/:id" element={<CityPage />} />
        <Route path="/city/:id/:kw" element={<CityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <BackToTop />
      <FloatingUI />
    </div>
  );
}
