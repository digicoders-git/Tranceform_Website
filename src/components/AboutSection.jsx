import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-16 lg:gap-24">
          
          {/* Right Side: Images with Decorative Element */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative group">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-[#A67C52]/5 rounded-[40px] transform rotate-3 transition-transform group-hover:rotate-0 duration-700" />
              
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10">
                <img 
                  src="/images/image.png" 
                  alt="Therapy Session" 
                  loading="lazy"
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
 
              {/* Small floating detail badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  initial: { delay: 0.5 },
                  y: { 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
                className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white p-5 md:p-8 rounded-[24px] md:rounded-[30px] shadow-xl z-20 hidden md:block border border-gray-100"
              >
                <div className="text-center">
                  <span className="block text-3xl font-serif text-[#A67C52] mb-1">Tranceform*</span>
                  <span className="text-[11px] tracking-[0.4em] uppercase text-black/40 font-medium font-sans">with Pooja</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
 
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full space-y-10"
          >
            <div className="space-y-6">
              <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
                ( MIND INTELLECTS )
              </span>
              <h2 className="text-5xl md:text-6xl font-serif leading-[1.1] text-brand-blue font-medium">
                When life looks fine but <br />
                <span className="text-[#A67C52] font-medium">something still feels stuck...</span>
              </h2>
              <div className="h-1.5 w-24 bg-[#A67C52]/20 rounded-full" />
            </div>
 
            <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-black text-[22px] md:text-[25px] font-sans font-medium leading-relaxed border-l-4 border-[#A67C52]/30 pl-8 py-3 tracking-tight">
                You may appear calm and capable to others, yet internally you feel a disconnect that's difficult to explain...
              </p>
            </div>
            </div>
 
            <div className="pt-6">
              <button 
                className="px-10 py-5 bg-[#A67C52] text-white rounded-full font-medium hover:bg-brand-blue transition-all shadow-xl active:scale-95 text-xs tracking-[0.2em] uppercase"
              >
                BOOK A SESSION
              </button>
            </div>
          </motion.div>
 
        </div>
      </div>
    </section>
  );
};


export default AboutSection;

