import React from 'react';
import { motion } from 'framer-motion';
import AppointmentModal from './AppointmentModal';
import heroImage from '../assets/hero.png';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="relative w-full h-[100vh] min-h-[750px] overflow-hidden flex items-center bg-[#0d161f]">
      {/* Background Layer with Teal Accents */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-[#00A79D]/20 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 opacity-[0.05] grayscale" style={{ backgroundImage: 'url("/images/image.png")', backgroundSize: 'cover' }} />
      </div>

      <div className="w-full relative z-30 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center px-8 md:px-12 lg:pl-44 lg:pr-8 py-20 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-[#00A79D]" />
                <span className="text-[#00A79D] text-[13px] font-bold tracking-[0.4em] uppercase">
                  ( SCIENCE OF THE MIND )
                </span>
              </div>
              
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-sans font-bold leading-[1.05] tracking-tight">
                Unlock Your <br />
                <span className="text-white">Potential,</span> <br />
                <span className="text-white">Transform Your Life</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-gray-900 px-12 py-5 rounded-none font-bold text-sm tracking-widest uppercase hover:bg-[#00A79D] hover:text-white transition-all duration-500 shadow-2xl"
              >
                Book a Session
              </button>
            </motion.div>
          </div>

          {/* Right Column: Image Block (Transparent PNG) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="hidden lg:flex items-end justify-center relative h-full w-full overflow-hidden"
          >
            <div className="relative w-full h-[92%] flex items-end justify-center pt-28">
              <img 
                src={heroImage} 
                alt="Expert Hypnotherapy" 
                className="w-auto h-full object-contain filter brightness-95 contrast-125 saturate-[1.1] drop-shadow-[0_0_15px_rgba(0,0,0,1)] drop-shadow-[0_0_30px_rgba(0,0,0,1)] scale-120 transition-all duration-700"
              />
            </div>
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
