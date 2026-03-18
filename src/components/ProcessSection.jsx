import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Make an appointment",
      desc: "Schedule your initial discovery call to discuss your goals and understand how hypnotherapy can help you."
    },
    {
      id: "02",
      title: "Begin Your Consultation",
      desc: "Experience your first deep-dive session where we bridge the gap between your conscious and subconscious mind."
    },
    {
      id: "03",
      title: "Get The Positive Result",
      desc: "Achieve lasting emotional freedom and behavioral changes through our proven clinical techniques."
    }
  ];

  return (
    <section className="py-24 bg-[#15202B] text-white overflow-hidden relative">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 mb-24 text-center"
        >
          <div className="flex justify-center items-center gap-4">
            <div className="h-[1px] w-8 bg-[#A67C52]" />
            <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
              ( OUR PROCESS )
            </span>
            <div className="h-[1px] w-8 bg-[#A67C52]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight max-w-3xl mx-auto">
            Mental <span className="serif text-[#A67C52]">health</span> starts with you
          </h2>
        </motion.div>
 
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative py-16 md:py-12 px-0 md:px-12 flex flex-col items-center text-center space-y-8 group ${
                idx !== 0 ? 'md:border-l md:border-white/10' : ''
              }`}
            >
              {/* Number Box - Premium Style */}
              <div className="relative">
                <div className="absolute -inset-4 bg-[#A67C52]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-[#A67C52] font-serif text-3xl shadow-2xl relative z-10 group-hover:border-[#A67C52]/50 transition-all duration-500">
                  {step.id}
                </div>
              </div>
 
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif group-hover:text-[#A67C52] transition-colors duration-500">{step.title}</h3>
                <p className="text-white/60 font-light leading-relaxed text-lg max-w-sm">
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
