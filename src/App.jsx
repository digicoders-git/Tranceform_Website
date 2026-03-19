import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'
import Header from './components/Header'
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
        
        {/* Modern Footer */}
        <footer className="bg-[#1E2A3A] text-white pt-16 pb-10">
          <div className="container mx-auto px-6 md:px-16 max-w-7xl">
            {/* Top Newsletter / CTA Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10 mb-12">
              <div className="max-w-xl">
                <h3 className="text-white text-2xl font-serif mb-1">Join our community</h3>
                <p className="text-white font-light text-[14px]">
                  Subscribe for insights on hypnotherapy, mental wellness, and exclusive offers.
                </p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-full w-full md:w-72 focus:outline-none focus:border-brand-orange transition-colors"
                />
                <button className="bg-brand-orange hover:bg-[#E68A2E] text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            {/* Main Links Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
              {/* Branding */}
              <div className="md:col-span-12 lg:col-span-4 space-y-5">
                <div className="bg-white inline-block p-3 rounded-xl w-full max-w-[220px]">
                   <img src="/logo.png" alt="Tranceform Logo" className="w-full h-auto object-contain" />
                </div>
                <p className="text-white text-[15px] leading-relaxed font-light pr-4">
                  Empowering minds through professional hypnotherapy. Experience clinical depth and lasting transformation.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: <Twitter className="w-4 h-4" />, url: '#' },
                    { icon: <Facebook className="w-4 h-4" />, url: '#' },
                    { icon: <Instagram className="w-4 h-4" />, url: '#' },
                    { icon: <Linkedin className="w-4 h-4" />, url: '#' }
                  ].map((social, i) => (
                    <a key={i} href={social.url} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 cursor-pointer text-white">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
                <h4 className="text-white font-medium tracking-widest text-[11px] uppercase mb-4">Explore</h4>
                <ul className="space-y-3 text-white text-[14px] font-light">
                  <li><Link to="/" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-transform duration-300">Home</Link></li>
                  <li><Link to="/about" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-transform duration-300">About Us</Link></li>
                  <li><Link to="/services/hypnotherapy-for-reducing-pain" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-transform duration-300">Services</Link></li>
                  <li><Link to="/blog" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-transform duration-300">Blog Insights</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div className="md:col-span-4 lg:col-span-2">
                <h4 className="text-white font-medium tracking-widest text-[11px] uppercase mb-4">Support</h4>
                <ul className="space-y-3 text-white text-[14px] font-light">
                  <li><Link to="/faqs" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-transform duration-300">FAQs</Link></li>
                  <li><Link to="/testimonials" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-transform duration-300">Testimonials</Link></li>
                  <li><Link to="/contact" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-transform duration-300">Contact Us</Link></li>
                  <li><Link to="/privacy" className="hover:text-brand-orange hover:translate-x-1 inline-block transition-transform duration-300">Privacy Policy</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="md:col-span-4 lg:col-span-3">
                <h4 className="text-white font-medium tracking-widest text-[11px] uppercase mb-4">Connect</h4>
                <div className="space-y-4 text-[14px] font-light">
                  <div>
                    <span className="block text-white mb-0 font-medium text-[12px] uppercase tracking-wide opacity-50">Email</span>
                    <a href="mailto:info@tranceform.com" className="text-white hover:text-brand-orange transition-colors">info@tranceform.com</a>
                  </div>
                  <div>
                    <span className="block text-white mb-0 font-medium text-[12px] uppercase tracking-wide opacity-50">Phone</span>
                    <a href="tel:+442071234567" className="text-white hover:text-brand-orange transition-colors">+44 (0) 20 7123 4567</a>
                  </div>
                  <div>
                    <span className="block text-white mb-0 font-medium text-[12px] uppercase tracking-wide opacity-50">Clinic</span>
                    <p className="text-white">12 Harley Street<br />London, W1G 9PF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-white text-[11px] ml-12 md:ml-0 tracking-[0.3em] uppercase font-medium opacity-60">
                Transform your mind • Transform your life
              </p>
              <p className="text-white text-sm md:text-md font-light opacity-60">
                &copy; {new Date().getFullYear()} Tranceform Hypnotherapy. All rights reserved. || Crafted with ❤️ by <span className="text-brand-orange hover:text-white transition-colors cursor-pointer font-semibold"><a href="https://digicoders.in">#TeamDigiCoders</a></span>
              </p>
            </div>
          </div>
        </footer>

        {/* Global Floating Buttons */}
        <BackToTop />
        <WhatsAppButton />
        <CallFloatingButton />
      </div>
    </Router>
  )
}

export default App
