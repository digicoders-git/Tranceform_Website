import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AppointmentModal from './AppointmentModal';
import heroImage from '../assets/hero.png';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="relative w-full bg-[#0d161f] flex flex-col overflow-hidden">
      {/* Background Decor - Isolated Overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-[#00A79D]/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-orange/15 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 opacity-[0.03] grayscale" style={{ backgroundImage: 'url("/images/image.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </div>

      <div className="relative z-30 w-full max-w-[1500px] mx-auto flex flex-col justify-start pt-[120px] lg:pt-[140px] pb-0 lg:pb-0 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end w-full">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3 lg:pr-2 pb-12 lg:pb-16 pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-3 text-center lg:text-left"
            >
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="h-[1px] w-12 bg-[#00A79D] block" />
                <span className="text-[#00A79D] text-[10px] md:text-[12px] font-bold tracking-[0.4em] uppercase">
                  ( TRANCEFORM WITH POOJA )
                </span>
                <span className="hidden lg:block h-[1px] w-12 bg-[#00A79D]" />
              </div>

              <h1 className="text-white text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[46px] font-serif font-bold leading-[1.1] tracking-normal drop-shadow-lg">
                Hypnotherapy in <span className="text-[#00A79D] italic drop-shadow-[0_0_15px_rgba(0,167,157,0.3)]">Bangkok</span> for deep emotional healing and lasting inner change
              </h1>

              <p className="text-[#00A79D] text-xs md:text-sm lg:text-[17px] font-medium leading-snug opacity-95">
                Helping you understand and gently shift the subconscious patterns behind anxiety, self-sabotage, relationship struggles, and emotional overwhelm.
              </p>

              <div className="text-gray-200 text-xs md:text-sm lg:text-[14px] font-light leading-relaxed space-y-1.5 opacity-90">
                <p>
                  Many people who come to see me are thoughtful, capable, and self-aware. They have spent years trying to understand themselves and make positive changes in their lives. And yet certain patterns continue to repeat:
                </p>
                
                <ul className="text-left max-w-md mx-auto lg:mx-0 space-y-1 py-1">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A79D] mt-1.5 shrink-0 shadow-[0_0_8px_rgba(0,167,157,0.8)]" />
                    <span>Anxiety returns.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A79D] mt-1.5 shrink-0 shadow-[0_0_8px_rgba(0,167,157,0.8)]" />
                    <span>Relationships feel complicated.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A79D] mt-1.5 shrink-0 shadow-[0_0_8px_rgba(0,167,157,0.8)]" />
                    <span>Self-doubt appears at the very moment confidence is needed.</span>
                  </li>
                </ul>
                
                <p className="pt-1">
                  Often this is not because you are doing something wrong. It is because the deeper emotional patterns beneath the surface have not yet been fully understood. <strong className="text-white font-medium border-b border-[#00A79D]">This is where hypnotherapy can help.</strong>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative overflow-hidden bg-[#00A79D] text-white px-6 md:px-8 py-3.5 font-bold text-[10px] tracking-[0.2em] uppercase transition-all duration-500 shadow-[0_15px_30px_rgba(0,167,157,0.25)] w-full sm:w-auto hover:bg-white hover:text-gray-900 active:scale-95"
              >
                <span className="relative z-10 transition-colors duration-500">Book a Session</span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
              <Link
                to="/hypnotherapy"
                className="group relative overflow-hidden border border-white/30 text-white px-6 md:px-8 py-3.5 font-bold text-[10px] tracking-[0.1em] uppercase transition-all duration-500 w-full sm:w-auto hover:bg-white hover:text-gray-900 active:scale-95 text-center flex items-center justify-center"
              >
                <span className="relative z-10 transition-colors duration-500">Learn More About My Work</span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex items-end justify-center relative w-full h-full min-h-[350px] lg:min-h-[500px] mt-4 lg:mt-0"
          >
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[#00A79D]/20 blur-[130px] rounded-full pointer-events-none" />
            
            {/* Image Container taking up exactly the space needed */}
            <div className="relative w-full h-full flex items-end justify-center pb-0">
              <img 
                src={heroImage} 
                alt="Expert Hypnotherapy" 
                className="w-auto h-auto max-w-[120%] sm:max-w-[100%] max-h-[500px] lg:max-h-[85vh] object-contain filter brightness-110 contrast-105 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform lg:scale-115 transition-all duration-1000 origin-bottom"
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
