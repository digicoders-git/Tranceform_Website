import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'HYPNOTHERAPY', href: '/hypnotherapy' },
    { name: 'ABOUT US', href: '/about' },
    { 
      name: 'SERVICES', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Hypnotherapy For Reducing Pain', href: '/services/hypnotherapy-for-reducing-pain' },
        { name: 'Manage Phobias And Addictions', href: '/services/manage-phobias-and-addictions' },
        { name: 'Past Life Regression', href: '/services/past-life-regression' },
        { name: 'Eliminate Anxiety & Stress', href: '/services/eliminate-anxiety-and-stress' },
        { name: 'Heal Your Inner Child', href: '/services/heal-your-inner-child' },
        { name: 'Stop Smoking', href: '/services/stop-smoking' },
      ]
    },
    { name: 'BLOG', href: '/blog' },
    { name: 'FAQS', href: '/faqs' },
    { name: 'TESTIMONIALS', href: '/testimonials' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <div className="absolute top-8 left-0 right-0 z-50 px-4 md:px-10">
      <header className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] py-4 px-8 md:px-12 flex items-center justify-between border border-white/20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Tranceform Logo" 
            className="h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer" 
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden xl:flex items-center gap-x-5">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
            >
              {item.hasDropdown ? (
                <button
                  className={`text-[13px] font-medium tracking-widest flex items-center gap-1.5 py-4 transition-all duration-300 ${
                    isServicesOpen ? 'text-brand-orange' : 'text-gray-700 hover:text-brand-orange'
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="whitespace-nowrap text-[13px] font-medium tracking-widest flex items-center gap-1.5 py-4 transition-all duration-300 text-gray-700 hover:text-brand-orange"
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-72 bg-[#1E2A3A] rounded-2xl shadow-2xl overflow-hidden py-4 border border-white/10"
                    >
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-6 py-3 text-[14px] text-gray-300 hover:text-brand-orange hover:bg-white/5 transition-colors duration-200 font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Get Started Button */}
        <div className="hidden lg:block">
          <button 
            onClick={() => setIsAppointmentModalOpen(true)}
            className="px-8 py-3 bg-brand-orange text-white rounded-full text-[14px] font-medium shadow-lg shadow-orange-200 hover:bg-[#15202B] hover:shadow-none transition-all duration-300 transform active:scale-95"
          >
            BOOK A SESSION
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden p-2 text-brand-blue hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-28 left-4 right-4 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 xl:hidden z-50"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[15px] font-medium text-brand-blue hover:text-brand-orange block py-2"
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-orange-100">
                      {item.dropdownItems.map((subItem) => (
                        <Link key={subItem.href} to={subItem.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[14px] text-gray-500 hover:text-brand-orange py-1">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsAppointmentModalOpen(true);
                }}
                className="mt-4 w-full py-4 bg-brand-orange text-white text-[15px] rounded-2xl font-medium hover:bg-[#15202B] transition-colors"
              >
                BOOK A SESSION
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Appointment Modal */}
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </div>
  );
};

export default Header;
