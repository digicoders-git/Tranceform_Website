import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ShieldCheck, Heart } from 'lucide-react';

const WhatIsHypnotherapy = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A67C52]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#15202B]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Interactive Image & Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group max-w-[500px] mx-auto">
              <div className="absolute -inset-4 bg-[#A67C52]/10 rounded-[48px] blur-2xl group-hover:bg-[#A67C52]/20 transition-all duration-700 -z-10" />
              <img 
                src="/images/hypnotherapy_whatis.png" 
                alt="Serene Hypnotherapy Session" 
                className="w-full h-[450px] md:h-[550px] object-cover rounded-[40px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[32px] shadow-2xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#A67C52] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#A67C52]/30">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[#15202B] font-bold text-lg leading-tight tracking-tight">Gentle Mind</p>
                    <p className="text-gray-400 text-xs font-medium tracking-widest uppercase mt-1">Subconscious Work</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Compelling Content */}
          <div className="space-y-4">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-12 bg-[#A67C52]" />
                <span className="text-[#A67C52] text-[11px] font-bold tracking-[0.4em] uppercase block">
                  ( AN INTRODUCTION )
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-serif text-[#15202B] leading-tight tracking-tight"
              >
                What is <br />
                <span className="text-[#A67C52] serif">Hypnotherapy?</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-[#15202B] font-normal leading-relaxed"
            >
              <div className="relative">
                <p className="text-lg md:text-[19px] font-serif text-[#15202B] leading-relaxed italic border-l-4 border-[#A67C52] pl-8 py-1 bg-[#A67C52]/5 rounded-r-2xl">
                  Hypnotherapy is a gentle way of working with the <span className="text-[#A67C52] font-semibold not-italic underline decoration-wavy decoration-[#A67C52]/30 underline-offset-4">subconscious mind</span>, the part of you where your patterns, habits, emotional responses, and beliefs are stored.
                </p>
              </div>

              <div className="space-y-3 text-base text-black/70 font-sans tracking-wide">
                <p>
                  Many of the challenges we experience in life are <span className="font-semibold text-[#15202B]">not just logical</span>. Even when we understand them, we still find ourselves repeating them. 
                </p>
                <p className="bg-gray-50 p-3 rounded-2xl border-l-2 border-[#15202B]/10 text-sm md:text-base">
                  This is because the deeper patterns live <span className="italic text-[#15202B]">beneath conscious awareness</span>.
                </p>
                <p>
                  Hypnotherapy allows us to access that deeper layer in a <span className="text-[#A67C52] font-bold">safe and relaxed state</span>, so we can begin to understand and shift what has been holding you back.
                </p>
              </div>

              {/* Fast Fact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  { icon: <Sparkles className="w-5 h-5" />, label: "Empowers Change" },
                  { icon: <ShieldCheck className="w-5 h-5" />, label: "Safe & Relaxed" },
                  { icon: <Heart className="w-5 h-5" />, label: "Gentle Process" },
                  { icon: <Brain className="w-5 h-5" />, label: "Subconscious Shift" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-2.5 bg-gray-50/50 rounded-xl border border-gray-100/50 hover:bg-white hover:border-[#A67C52]/20 transition-all duration-300"
                  >
                    <div className="text-[#A67C52] shrink-0">{item.icon}</div>
                    <span className="text-[13px] font-medium tracking-wide text-[#15202B]">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsHypnotherapy;
