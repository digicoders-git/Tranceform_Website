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
    <section className="py-24 bg-[#B97758] text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 mb-20"
        >
          <span className="text-white/60 text-[13px] font-bold tracking-[0.2em] uppercase block">
            ( OUR PROCESS )
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Mental <span className="italic">health</span> starts with you
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative py-10 md:py-0 px-0 md:px-12 flex flex-col items-start space-y-8 ${
                idx !== 0 ? 'md:border-l md:border-white/20' : ''
              }`}
            >
              {/* Number Box */}
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#B97758] font-bold text-xl shadow-lg">
                {step.id}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif">{step.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">
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
