import React from 'react';
import { motion } from 'framer-motion';
import AppointmentModal from './AppointmentModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="relative w-full h-[100vh] min-h-[750px] overflow-hidden flex flex-col justify-end pb-20 md:pb-28">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-top md:bg-center bg-no-repeat z-0 scale-105"
        style={{ backgroundImage: 'url("/hero-bg.png")' }}
      >
        {/* Professional Overlays for Depth */}
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        {/* Layout: Centered Content at Bottom */}
        <div className="flex flex-col items-center text-center">
          
          {/* Paragraph (Middle/Top of the content block) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl mb-8"
          >
            <p className="text-white/90 text-[16px] md:text-[18px] font-medium leading-relaxed tracking-wide drop-shadow-md">
              Experience the profound clinical power of the subconscious mind to heal, transform, and empower. 
              Our expert-guided hypnotherapy sessions provide a safe sanctuary for mental liberation and lasting emotional wellness.
            </p>
          </motion.div>
          
          {/* Main Title (Bottom-most) */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-white text-6xl md:text-8xl lg:text-[120px] font-serif italic font-bold leading-[0.9] tracking-tight drop-shadow-2xl"
          >
            Begin your <span className="block mt-2 italic">inner peace journey</span>
          </motion.h1>

          {/* Floating Get Started Button (Right-aligned relative to container) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 80 }}
            className="hidden lg:block absolute right-0 bottom-10"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-40 h-40 rounded-full bg-white flex flex-col items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.3)] hover:bg-[#FF9933] transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 group"
            >
              <span className="text-brand-blue group-hover:text-white font-bold text-[16px] tracking-tight transition-colors duration-500 text-center px-4 leading-tight">
                Get Started
              </span>
            </button>
          </motion.div>

        </div>
      </div>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;
