import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    { id: '01/', text: "Define your therapy goals and session type" },
    { id: '02/', text: "Connect with our certified clinical hypnotherapist" },
    { id: '03/', text: "Schedule your discovery or deep-healing session" },
    { id: '04/', text: "Complete your safe and secure registration" },
    { id: '05/', text: "Begin your journey to a empowered subconscious" },
  ];

  return (
    <section className="pt-24 pb-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-orange text-[13px] font-bold tracking-[0.2em] uppercase">
            ( HOW IT WORKS )
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-blue leading-tight">
            Everyone deserves our <span className="text-brand-orange italic">special care</span>
          </h2>
        </div>

        {/* The Card Section with specific background layout */}
        <div className="relative mt-20">
          {/* Peach Box: Positioned to the right as per reference */}
          <div className="absolute top-0 right-0 w-full lg:w-[85%] h-full bg-[#EBC9B4] rounded-[40px] -z-10" />

          <div className="flex flex-col lg:flex-row items-stretch min-h-[650px]">
            
            {/* Left Image: Overlapping and vertical */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full lg:w-[45%] p-6 lg:p-0 flex items-center justify-center lg:justify-start"
            >
              <div className="rounded-[40px] overflow-hidden shadow-[30px_30px_60px_rgba(0,0,0,0.15)] w-full max-w-[500px] h-[550px] lg:h-[600px] lg:-ml-12 border-8 border-white">
                <img 
                  src="/works.jpg" 
                  alt="Special Care Session" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </motion.div>

            {/* Right List: Inside the peach box area */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-[55%] flex flex-col justify-center p-10 lg:pl-16 lg:pr-20"
            >
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-brand-blue mb-6 font-serif underline decoration-brand-orange decoration-2 underline-offset-8">
                  How do you get our services
                </h3>
                <p className="text-brand-blue text-lg font-light leading-relaxed max-w-lg">
                  Starting your transformation is simple. We follow a structured approach to ensure your mind is ready for positive suggestions and lasting emotional release.
                </p>
              </div>

              {/* Numbered List matching reference format */}
              <div className="space-y-0">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-8 py-6 border-t border-gray-900/10 group cursor-default"
                  >
                    <span className="text-xl font-bold text-brand-blue/80 w-12 tracking-tighter">{step.id}</span>
                    <div className="w-[1.5px] h-8 bg-brand-orange/40 group-hover:bg-brand-orange transition-colors" />
                    <span className="text-[17px] md:text-[20px] font-serif italic text-brand-blue group-hover:text-brand-orange transition-colors">
                      {step.text}
                    </span>
                  </div>
                ))}
                <div className="border-t border-gray-900/10" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
