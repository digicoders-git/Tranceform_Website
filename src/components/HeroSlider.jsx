import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: '/slider1.png',
    title: 'Transform Your Life',
    subtitle: 'Expert Hypnotherapy for a Better You',
  },
  {
    id: 2,
    image: '/slider2.png',
    title: 'Find Inner Peace',
    subtitle: 'Relaxation and Mental Clarity Sessions',
  },
  {
    id: 3,
    image: '/slider3.png',
    title: 'New Beginnings',
    subtitle: 'Overcome Challenges with Professional Support',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          
          {/* Overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Floating Icons (Matching the user's reference image style) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-1 z-20">
            <div className="w-10 h-10 bg-[#FF9933] flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-[#e68a2e] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <div className="w-10 h-10 bg-[#FF9933] flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-[#e68a2e] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div className="w-10 h-10 bg-[#FF9933] flex items-center justify-center text-white shadow-lg cursor-pointer hover:bg-[#e68a2e] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
            </div>
          </div>

          {/* Slider Content */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="max-w-7xl w-full px-4 text-center md:text-left">
              <motion.h2 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-7xl font-bold text-[#FDFDFD] drop-shadow-2xl mb-4"
              >
                {slides[current].title}
              </motion.h2>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-lg"
              >
                {slides[current].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? 'bg-[#FF9933] scale-125' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
