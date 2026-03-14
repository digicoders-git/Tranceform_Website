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
                src="/images/image.png" 
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
              <span className="text-brand-orange text-[12px] font-medium tracking-[0.3em] uppercase">
                ( MIND INTELLECTS )
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight text-brand-blue font-medium">
                When life looks fine but <br />
                <span className="text-brand-orange italic font-light">something still feels stuck</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
              <p className="text-brand-blue font-normal leading-relaxed">
                You may recognise yourself here. You may be someone who appears calm and capable to others, yet internally you feel:
              </p>
              <ul className="space-y-3 text-gray-600 font-light text-lg list-disc pl-5">
                <li>Anxious or overwhelmed at times</li>
                <li>Caught in repeating relationship patterns</li>
                <li>Unsure why certain emotional reactions feel so strong</li>
                <li>Stuck in cycles of overthinking</li>
                <li>Disconnected from your own sense of safety or self-worth</li>
              </ul>
              <p className="pt-4">
                You may understand your patterns logically, but still feel them operating beneath the surface. This can be frustrating.
              </p>
              <p>
                Many people reach a point where they realise that insight alone is not always enough. The deeper emotional layers also need attention.
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
                src="/images/image5.png" 
                alt="Therapy Environment" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-[30px] overflow-hidden shadow-xl lg:ml-12">
              <img 
                src="/images/image3.png" 
                alt="The Result of Healing" 
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
