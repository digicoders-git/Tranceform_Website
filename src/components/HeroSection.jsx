import React from 'react';
import { motion } from 'framer-motion';
import AppointmentModal from './AppointmentModal';
import heroImage from '../assets/hero.png';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="relative w-full bg-[#0d161f] overflow-hidden">
      {/* Background Decor - Isolated Overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00A79D]/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-orange/20 blur-[150px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] grayscale" style={{ backgroundImage: 'url("/images/image.png")', backgroundSize: 'cover' }} />
      </div>

      <div className="w-full relative z-30 pt-28 lg:pt-36 flex items-start">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-start px-6 md:px-16 lg:pl-32 lg:pr-8 pt-0 pb-2 lg:py-8 space-y-4 lg:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 lg:space-y-6"
            >
              <div className="flex items-center gap-3 lg:gap-4 justify-center lg:justify-start">
                <span className="h-[1px] w-8 lg:w-12 bg-[#00A79D]" />
                <span className="text-[#00A79D] text-[10px] lg:text-[13px] font-bold tracking-[0.5em] uppercase">
                  ( SCIENCE OF THE MIND )
                </span>
                <span className="lg:hidden h-[1px] w-8 bg-[#00A79D]" />
              </div>

              <h1 className="text-white text-[28px] sm:text-[36px] md:text-5xl lg:text-6xl font-sans font-bold leading-[1.2] tracking-tight text-center lg:text-left">
                Unlock Your <br className="hidden md:block" />
                <span className="text-[#00A79D] drop-shadow-[0_0_15px_rgba(0,167,157,0.3)]">Potential,</span> <br />
                <span className="text-white">Transform Your Life</span>
              </h1>

              <p className="text-gray-400 text-sm md:text-lg max-w-lg mx-auto lg:mx-0 text-center lg:text-left font-light leading-relaxed">
                Expert clinical hypnotherapy in London to help you overcome anxiety, manage pain, and manifest the life you deserve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6 pt-4"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative overflow-hidden bg-white text-gray-900 px-8 md:px-12 py-3.5 md:py-5 lg:py-4 rounded-none font-bold text-[11px] md:text-xs lg:text-sm tracking-[0.2em] uppercase transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span className="relative z-10">Book a Session</span>
                <div className="absolute inset-0 bg-[#00A79D] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#00A79D] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Image Block (Transparent PNG) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-end justify-center relative w-full mt-10 lg:mt-16 px-4 md:px-0"
          >
            {/* Visual glow behind the image */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-[#00A79D]/30 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative w-full h-full flex items-end justify-center">
              <img 
                src={heroImage} 
                alt="Expert Hypnotherapy" 
                className="w-auto max-h-[380px] sm:max-h-[500px] md:max-h-[550px] lg:max-h-[70vh] object-contain filter brightness-110 contrast-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-[1.05] lg:scale-120 hover:scale-110 lg:hover:scale-125 transition-all duration-1000 ease-out z-10 origin-bottom"
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
