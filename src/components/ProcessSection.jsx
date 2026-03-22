import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Current exploration",
      desc: "Discussing what is currently happening in your life and your goals for the session."
    },
    {
      id: "02",
      title: "Pattern identification",
      desc: "Identifying patterns that may be operating beneath the surface of your conscious awareness."
    },
    {
      id: "03",
      title: "Guided hypnotherapy",
      desc: "Accessing the subconscious mind in a focused and relaxed state to facilitate meaningful change."
    },
    {
      id: "04",
      title: "Emotional integration",
      desc: "Gentle integration of new perspectives, leaving you feeling lighter, clearer, and more connected."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#15202B] text-white overflow-hidden relative">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 mb-12 md:mb-16 text-center"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] w-8 bg-[#A67C52]" />
            <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
              ( YOUR SESSION )
            </span>
            <div className="h-[1px] w-8 bg-[#A67C52]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight max-w-3xl mx-auto text-white">
            A safe and <span className="serif text-[#c5a07d]">collaborative process</span>
          </h2>

        </motion.div>
 
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:border-t md:border-white/10 pt-8 md:pt-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`relative py-8 md:py-10 px-6 flex flex-col items-center text-center space-y-6 group ${
                idx !== 0 ? 'md:border-l md:border-white/10' : ''
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-[#A67C52]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#A67C52] font-serif text-2xl shadow-xl relative z-10 group-hover:bg-[#A67C52]/20 group-hover:border-[#A67C52]/50 transition-all duration-700">
                  {step.id}
                </div>
              </div>
 
              <div className="space-y-4 relative z-10">
                <h3 className="text-xl md:text-2xl font-serif text-white/95 group-hover:text-[#A67C52] transition-colors duration-500 uppercase tracking-wide">{step.title}</h3>
                <p className="text-white/80 font-normal leading-relaxed text-base md:text-lg italic group-hover:text-white transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
