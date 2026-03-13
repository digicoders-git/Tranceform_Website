import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const features = [
    {
      title: "Free Consultation",
      desc: "Unlock the power of your mind with a complimentary discovery session to discuss your personal growth goals."
    },
    {
      title: "Basic Therapy",
      desc: "Comprehensive guided hypnotherapy sessions focused on immediate relief and positive behavioral shifts."
    },
    {
      title: "Free E-Book",
      desc: "Exclusive access to our mental wellness guide with self-hypnosis techniques you can practice daily."
    },
    {
      title: "24/7 Full Support",
      desc: "Priority messaging support to guide you through your transformation journey outside of regular sessions."
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#FF9933] text-[13px] font-bold tracking-[0.2em] uppercase">
            ( PRICING PLAN )
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-blue leading-tight">
            Affordable <span className="text-[#FF9933] italic">pricing packages</span> for everyone
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 md:gap-24">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full max-w-[450px] bg-white rounded-[40px] shadow-2xl p-10 md:p-14 border border-gray-100 flex flex-col items-start relative overflow-hidden"
          >
             {/* Icon/Logo Background */}
             <div className="w-16 h-16 bg-[#333] rounded-full flex items-center justify-center mb-8 shrink-0">
               <span className="text-white text-2xl font-bold italic">X</span>
             </div>

             <div className="space-y-4 mb-10">
               <h3 className="text-4xl md:text-5xl font-serif text-brand-blue leading-tight">
                 Individual <br /> Therapy
               </h3>
               <p className="text-[#FF9933] font-medium text-sm italic tracking-wide">
                 It's time you own your health.
               </p>
             </div>

             <div className="mb-10">
               <div className="flex items-baseline gap-2">
                 <span className="text-5xl md:text-6xl font-bold text-brand-blue">$150</span>
                 <span className="text-gray-500 font-medium tracking-tight">/ session</span>
               </div>
               <p className="text-gray-400 text-xs mt-3 italic">*Terms and Conditions apply</p>
             </div>

             <button className="w-full py-5 bg-[#B97758] hover:bg-[#A6664B] text-white rounded-[20px] font-bold text-[16px] transition-all duration-300 transform active:scale-95 shadow-lg shadow-[#B97758]/20">
               Get Started
             </button>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-[550px] flex flex-col gap-10"
          >
            <div className="space-y-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="p-1 rounded-md text-[#333] mt-1 shrink-0">
                    <Check className="w-6 h-6 stroke-[3px]" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl md:text-2xl font-serif text-brand-blue font-medium">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 font-light leading-relaxed text-[15px] md:text-[16px]">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="px-10 py-4 bg-[#333] hover:bg-[#15202B] text-white rounded-full font-bold text-[14px] transition-all duration-300 shadow-xl">
                View All Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
