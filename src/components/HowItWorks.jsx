import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { title: "Define Your Vision", text: "Identify your therapy goals and choose your preferred session type." },
    { title: "Safe Sanctuary", text: "Schedule your discovery or deep-healing session in a safe environment." },
    { title: "Inner Awakening", text: "Begin your journey toward an empowered and harmonious subconscious." },
  ];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-6"
          >
            <div className="h-[1px] w-12 bg-[#A67C52]/40" />
            <span className="text-[#A67C52] text-[14px] font-medium tracking-[0.4em] uppercase">
              ( HOW IT WORKS )
            </span>
            <div className="h-[1px] w-12 bg-[#A67C52]/40" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif text-brand-blue leading-[1.1] font-medium max-w-4xl mx-auto"
          >
            Everyone deserves our <br />
            <span className="text-[#A67C52] font-medium serif">specialised care</span>
          </motion.h2>
          <div className="flex justify-center pt-4">
             <div className="h-1.5 w-24 bg-[#A67C52]/20 rounded-full" />
          </div>
        </div>
 
        {/* Content Layout */}
        <div className="relative mt-12">
          {/* Elegant Shape Background */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full lg:w-[90%] h-[90%] bg-[#A67C52]/[0.02] rounded-[100px] -z-10 border border-[#A67C52]/5" />
          
            {/* Left Column Hidden as requested */}
            
            {/* Right Column: Premium Step List (Now centered and wider) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full max-w-3xl mx-auto space-y-12"
            >
              {/* Step Items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center space-y-4 group"
                  >
                    {/* Number Circle */}
                    <div className="relative z-10 w-[64px] h-[64px] rounded-full border border-[#A67C52]/30 bg-white flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#A67C52] group-hover:border-[#A67C52] transition-all duration-500">
                       <span className="text-2xl font-serif text-[#A67C52] group-hover:text-white transition-colors duration-500">
                         {index + 1}
                       </span>
                    </div>
  
                    <div className="space-y-2">
                      <h4 className="text-xl font-serif text-brand-blue group-hover:text-[#A67C52] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-black/60 font-light leading-relaxed text-base">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
  
              {/* CTA Button */}
              <div className="pt-8 text-center">
                 <button className="inline-flex items-center gap-6 px-12 py-5 bg-[#A67C52] text-white rounded-full font-medium tracking-[0.2em] text-xs uppercase hover:bg-brand-blue transition-all duration-300 group shadow-2xl active:scale-95">
                   Schedule Your Journey
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

