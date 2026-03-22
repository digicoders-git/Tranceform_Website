import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCcw, BellRing, BrainCircuit, RotateCw } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  const points = [
    "needing control in order to feel safe",
    "expecting abandonment or disappointment",
    "feeling anxious even when life is stable",
    "struggling to fully trust yourself or others"
  ];

  return (
    <section className="py-20 bg-[#FAFAFA] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-12 bg-[#A67C52]" />
            <span className="text-[#A67C52] text-[13px] font-bold tracking-[0.4em] uppercase block">
              ( THE PATTERN CYCLE )
            </span>
            <div className="h-[1px] w-12 bg-[#A67C52]" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#15202B] leading-tight font-medium max-w-3xl mx-auto">
            The subconscious mind remembers <br />
            <span className="text-[#A67C52] italic text-2xl md:text-4xl">what the conscious mind forgets</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 text-[#15202B] text-lg md:text-xl leading-relaxed font-normal border-l-4 border-[#A67C52]/40 pl-8"
          >
            <p>
              Much of what we experience as adults is influenced by emotional patterns that developed earlier in life.
            </p>
            <p>
              The mind and nervous system learn how to respond to love, stress, conflict, disappointment, safety, and connection.
            </p>
            <p>
              If those early experiences were confusing, overwhelming, or emotionally unsupported, the nervous system adapts in order to cope.
            </p>
            <p className="font-medium text-[#A67C52]">
              Years later, those same patterns may continue quietly in the background.
            </p>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100"
          >
            <h3 className="text-[#15202B] font-serif text-2xl mb-8">You may find yourself:</h3>
            <ul className="space-y-5">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1.5 w-5 h-5 rounded-full border border-[#A67C52] flex items-center justify-center shrink-0 group-hover:bg-[#A67C52] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#A67C52] rounded-full group-hover:bg-white" />
                  </div>
                  <span className="text-black/80 font-normal">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 pt-8 border-t border-gray-100 text-[#A67C52] font-serif text-lg italic">
              Hypnotherapy allows us to work gently with the subconscious layers where these patterns live.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 bg-[#15202B] rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A67C52]/10 rounded-full blur-[100px]" />
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <h3 className="text-white font-serif text-2xl md:text-3xl">Ready to break the cycle?</h3>
            <p className="text-white/60 font-light text-base md:text-lg">
              Understanding the root pattern is the first step toward lasting freedom. Let's work together to address the source.
            </p>
          </div>
          <motion.button 
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            animate={{ 
              boxShadow: [
                "0 0 0px rgba(166,124,82,0)", 
                "0 0 20px rgba(166,124,82,0.6)", 
                "0 0 0px rgba(166,124,82,0)"
              ]
            }}
            transition={{
              boxShadow: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
            className="px-10 py-5 bg-[#A67C52] text-white rounded-full font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-[#15202B] transition-all duration-500 shadow-xl active:scale-95 whitespace-nowrap relative z-10"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HowItWorks;
