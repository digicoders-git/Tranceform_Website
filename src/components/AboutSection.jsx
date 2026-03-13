import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Image (Vertical) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full"
          >
            <div className="relative rounded-[30px] overflow-hidden shadow-2xl">
              <img 
                src="/a2.jpg" 
                alt="Therapy Session" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </motion.div>

          {/* Middle Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <span className="text-brand-orange text-[13px] font-bold tracking-[0.2em] uppercase">
                ( MIND INTELLECTS )
              </span>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight text-brand-blue">
                Transform your <br />
                <span className="text-brand-orange italic">mental health</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
              <p>
                Experience the profound clinical power of the subconscious mind to heal, transform, and empower. Our expert-guided sessions provide a safe sanctuary for mental liberation.
              </p>
              <p>
                We believe in a holistic approach where every individual finds their own path to clarity, strength, and inner peace through professional support.
              </p>
            </div>

            <div className="pt-6">
              <span className="text-4xl font-serif italic text-brand-orange opacity-80 select-none">
                Tranceform*
              </span>
            </div>
          </motion.div>

          {/* Right Images (Stacked) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full flex flex-col gap-8"
          >
            <div className="rounded-[30px] overflow-hidden shadow-xl">
              <img 
                src="/a1.jpg" 
                alt="Group Therapy" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-[30px] overflow-hidden shadow-xl lg:ml-12">
              <img 
                src="/a3.jpg" 
                alt="Individual Session" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
