import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import logo from '../assets/Tranceform LOGO JPEG.jpg.png';

const Footer = () => {
  return (
    <footer className="bg-[#1E2A3A] text-white pt-16 pb-10">
      <div className="container mx-auto px-6 md:px-16 max-w-7xl">

        {/* Main Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Branding */}
          <div className="md:col-span-12 lg:col-span-4 space-y-5">
            <div className="bg-white inline-block p-3 rounded-xl w-full max-w-[220px]">
               <img src={logo} alt="Tranceform Logo" className="w-full h-auto object-contain" />
            </div>
            <p className="text-white text-[15px] leading-relaxed font-light pr-4">
              Tranceform with Pooja: Professional clinical hypnotherapy in Bangkok. Experience deep healing and lasting transformation.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, url: 'https://www.facebook.com/share/1CQKVypGhT/?mibextid=wwXIfr' },
                { icon: <Instagram className="w-4 h-4" />, url: 'https://www.instagram.com/tranceform.today?igsh=MWc5czY0czRldGs4cg%3D%3D&utm_source=qr' }
              ].map((social, i) => (
                <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 cursor-pointer text-white">
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
                <a href="mailto:gujralp@hotmail.com" className="text-white hover:text-brand-orange transition-colors">gujralp@hotmail.com</a>
              </div>
              <div>
                <span className="block text-white mb-0 font-medium text-[12px] uppercase tracking-wide opacity-50">Phone</span>
                <a href="tel:+66897798028" className="text-white hover:text-brand-orange transition-colors">+66 89 779 8028</a>
              </div>
              <div>
                <span className="block text-white mb-0 font-medium text-[12px] uppercase tracking-wide opacity-50">Clinic</span>
                <p className="text-white">30 Sukhumvit 61, Khwaeng Khlong Tan Nuea,<br />Watthana, Bangkok, Thailand 10110</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white text-[11px] ml-12 md:ml-0 tracking-[0.2em] uppercase font-medium opacity-80 max-w-xl">
            Real change doesn’t come from forcing yourself to be different. It begins by understanding yourself more deeply.
          </p>
          <p className="text-white text-sm md:text-md font-bold opacity-90">
            &copy; {new Date().getFullYear()} Tranceform Hypnotherapy. All rights reserved. || Crafted with ❤️ by <span className="text-brand-orange hover:text-white transition-colors cursor-pointer"><a href="https://digicoders.in" target="_blank" rel="noopener noreferrer">#TeamDigiCoders</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
