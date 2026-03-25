import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import HypnotherapyPage from './pages/HypnotherapyPage'
import AboutPage from './pages/AboutPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import FAQPage from './pages/FAQPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'
import CallFloatingButton from './components/CallFloatingButton'
import Preloader from './components/Preloader'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial site-wide load delay for preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader isLoading={loading} />
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden">
        {/* Header */}
        <Header />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hypnotherapy" element={<HypnotherapyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        
        {/* Footer */}
        <Footer />

        {/* Global Floating Buttons */}
        <BackToTop />
        <WhatsAppButton />
        <CallFloatingButton />
      </div>
    </Router>
  )
}

export default App
