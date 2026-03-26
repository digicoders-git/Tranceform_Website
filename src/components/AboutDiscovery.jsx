import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Zap, ShieldCheck } from 'lucide-react';

const AboutDiscovery = () => {



  const features = [
    {
      icon: <Brain className="w-8 h-8 text-white/80" />,
      title: "Clinical Hypnosis",
      desc: "Scientific induction techniques to reach a therapeutic state of focused attention."
    },
    {
      icon: <Zap className="w-8 h-8 text-white/80" />,
      title: "Mind Reprogramming",
      desc: "Identify and resolve deep-seated patterns and old habits at their root."
    },
    {
      icon: <Heart className="w-8 h-8 text-white/80" />,
      title: "Emotional Healing",
      desc: "Guided inner-child healing and regressive therapy for lasting peace."
    }
  ];

  return (
    <section className="relative">
      {/* Top Dark Section */}
      <div className="bg-[#15202B] pt-20 pb-28 md:pb-32 overflow-hidden relative">
        {/* Decorative Background Text (Restored to larger size) */}
        <div className="absolute top-10 -right-10 text-[18rem] font-serif text-white/5 select-none pointer-events-none">
          Story
        </div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#A67C52]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-[1px] w-12 bg-[#A67C52]" />
                  <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
                    ( MY APPROACH )
                  </span>
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight font-medium">
                  A deeply personalised <br />
                  <span className="text-[#A67C52] font-medium serif">approach to hypnotherapy</span>
                </h2>
              </div>
              <div className="text-white/95 text-lg md:text-xl font-normal leading-relaxed max-w-lg space-y-5 border-l-2 border-[#A67C52]/40 pl-8">
                <p>
                  Every person who comes to see me has their own story, emotional history, and inner world. <span className="text-[#A67C52] font-medium italic">Because of this, my sessions are never one-size-fits-all.</span>
                </p>
                <p>
                  Rather than using the same script for everyone, I work closely with each client to understand the deeper emotional patterns behind what they are experiencing.
                </p>
              </div>
            </motion.div>
 
            <div className="grid grid-cols-1 gap-12 pt-10 md:pt-16 lg:pt-0">
              <div className="space-y-10 pt-10 border-t border-white/10 lg:border-0 lg:pt-0">
                <div className="space-y-4">
                  <p className="text-[#A67C52] font-serif text-xl md:text-2xl italic">Our sessions often explore themes such as:</p>
                  <div className="h-1 w-20 bg-[#A67C52]/30 rounded-full" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "anxiety and nervous system regulation",
                    "inner child healing",
                    "subconscious beliefs about self-worth",
                    "relationship patterns and attachment",
                    "emotional trauma and unresolved experiences",
                    "habits and behaviours rooted in deeper emotions"
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10, backgroundColor: 'rgba(166,124,82,0.1)' }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-[#A67C52]/30 transition-all duration-300 cursor-default"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#A67C52] shadow-[0_0_10px_rgba(166,124,82,0.5)]" />
                      <span className="text-white/80 group-hover:text-white transition-colors capitalize text-sm md:text-[15px] font-normal tracking-wide leading-snug">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div 
                whileInView={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-white/95 font-normal text-lg md:text-xl leading-relaxed border-l-4 border-[#A67C52] pl-8 py-2 bg-gradient-to-r from-[#A67C52]/5 to-transparent rounded-r-3xl"
              >
                The goal is not simply to manage symptoms, but to <span className="text-[#A67C52] font-medium serif italic">understand and shift</span> the deeper patterns that created them.
              </motion.div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="container mx-auto px-6 md:px-12 max-w-2xl -mt-20 md:-mt-28 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] overflow-hidden shadow-3xl group border-[8px] border-white ring-1 ring-black/5"
        >
          <img 
            src="/images/image5.png" 
            alt="Hypnotherapy Session" 
            loading="lazy"
            className="w-full h-[250px] md:h-[320px] object-cover transition-transform duration-[2000ms] group-hover:scale-105"
          />
        </motion.div>
      </div>
 
 
      {/* What a session feels like (Section 5) */}
      <div className="bg-white pt-16 pb-8 md:pt-24 md:pb-12 border-b border-gray-50 relative overflow-hidden">
         <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[80%] h-[80%] bg-[#A67C52]/[0.02] rounded-full blur-3xl pointer-events-none" />
         
         <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 md:gap-8 items-start">
             
             {/* Left Column */}
             <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="space-y-6"
             >
               <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
                 ( WHAT A SESSION FEELS LIKE )
               </span>
               <h2 className="text-4xl md:text-6xl font-serif text-brand-blue leading-tight font-medium">
                 A safe and collaborative <br />
                 <span className="text-[#A67C52] font-medium serif">process</span>
               </h2>
               <div className="h-1.5 w-16 bg-[#A67C52]/20 rounded-full" />
             </motion.div>

             {/* Right Column */}
             <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-3.5 md:space-y-4 text-[#15202B] font-normal text-lg md:text-xl leading-relaxed border-l-4 border-[#A67C52]/40 pl-8"
              >
                <p>
                  Many people feel unsure about hypnotherapy before their first session. In reality, the experience is <span className="text-[#A67C52] font-medium italic">calm, collaborative, and deeply grounding.</span>
                </p>
                <p>
                  You remain aware during the process. Hypnosis is simply a focused and relaxed state where the mind becomes more receptive to meaningful change.
                </p>
                
                <div className="pt-6 space-y-4">
                  <p className="text-[#15202B] font-medium text-xl md:text-2xl font-serif italic">Sessions often include:</p>
                  <ul className="space-y-4">
                    {[
                      "exploring what is currently happening in your life",
                      "identifying patterns that may be operating beneath the surface",
                      "guided hypnotherapy to access the subconscious mind",
                      "gentle emotional integration and new perspectives"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-2 w-2 h-2 rounded-full bg-[#A67C52] shrink-0" />
                        <span className="text-[#15202B]/90 font-light italic text-base md:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-gray-100 italic">
                  <p className="text-[#15202B] font-serif text-2xl md:text-3xl leading-relaxed">
                    "Clients often leave sessions feeling lighter, clearer, and more connected to themselves."
                  </p>
                </div>
              </motion.div>

           </div>
         </div>
      </div>
    </section>
  );
};

export default AboutDiscovery;
