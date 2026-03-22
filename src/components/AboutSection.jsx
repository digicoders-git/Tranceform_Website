import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, UserX, RefreshCcw, Lock } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const points = [
    {
      icon: <Activity className="w-5 h-5" />,
      text: "anxious or overwhelmed at times"
    },
    {
      icon: <RefreshCcw className="w-5 h-5" />,
      text: "caught in repeating relationship patterns"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      text: "unsure why certain emotional reactions feel so strong"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      text: "stuck in cycles of overthinking"
    },
    {
      icon: <UserX className="w-5 h-5" />,
      text: "disconnected from your own sense of safety or self-worth"
    }
  ];

  return (
    <section className="bg-white relative overflow-hidden flex items-center py-4 lg:py-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A67C52]/5 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#15202B]/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image with Premium Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-[40%] w-full relative"
          >
            <div className="relative group">
              {/* Complex decorative frame */}
              <div className="absolute -inset-3 border border-[#A67C52]/20 rounded-[32px] transform rotate-2 transition-transform group-hover:rotate-0 duration-1000" />
              <div className="absolute -inset-3 border-l border-b border-[#A67C52]/40 rounded-[32px] transform -rotate-1 transition-transform group-hover:rotate-0 duration-1000 delay-100" />
              
              <div className="relative rounded-[24px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] z-10 aspect-[4/5] lg:aspect-auto h-[320px] lg:h-[520px]">
                <img 
                  src="/images/image4.png" 
                  alt="Therapy Session" 
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-[3000ms] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Detail Floating Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  scale: { duration: 0.8 },
                  y: { 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }
                }}
                className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 bg-white p-6 rounded-[20px] shadow-2xl z-20 hidden md:block border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#A67C52]/10 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#A67C52]" />
                  </div>
                  <div>
                    <span className="block text-xl font-serif text-[#15202B]">Deep Healing</span>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#A67C52] font-bold">Inner Peace</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-[60%] w-full space-y-3 md:space-y-3.5"
          >
            <div className="space-y-1 md:space-y-1.5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-12 bg-[#A67C52]" />
                <span className="text-[#A67C52] text-[12px] font-bold tracking-[0.4em] uppercase block">
                  ( RECOGNISING THE PATTERN )
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-[2.75rem] font-serif leading-tight text-[#15202B] font-medium">
                You may recognise <br />
                <span className="text-[#A67C52] italic">yourself here...</span>
              </h2>
              <p className="text-[#15202B]/80 text-sm md:text-lg font-normal leading-relaxed max-w-lg">
                You may be someone who appears calm and capable to others, yet internally you feel:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-3.5 p-2.5 md:p-3 bg-white border border-gray-100 rounded-[16px] shadow-sm hover:shadow-xl hover:border-[#A67C52]/30 transition-all duration-500 group cursor-default ${index === 4 ? 'md:col-span-2' : ''}`}
                >
                  <div className="w-9 h-9 bg-gray-50 group-hover:bg-[#A67C52] rounded-full flex items-center justify-center shrink-0 transition-colors duration-500">
                    <div className="text-[#A67C52] group-hover:text-white transition-colors duration-500 scale-85">
                      {point.icon}
                    </div>
                  </div>
                  <span className="text-[#15202B]/90 text-sm md:text-[14px] leading-snug font-normal">
                    {point.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="pt-0.5 space-y-3 md:space-y-4">
              <div className="text-[#15202B]/90 font-normal text-xs md:text-[15px] leading-relaxed border-l-4 border-[#A67C52]/40 pl-6 max-w-xl space-y-2">
                <p>You may understand your patterns logically, but still feel them operating beneath the surface.</p>
                <p>This can be frustrating. Insight alone is not always enough. The deeper emotional layers also need attention.</p>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative overflow-hidden px-12 py-5 bg-[#15202B] text-white rounded-full font-bold text-[11px] tracking-[0.3em] uppercase transition-all duration-500 hover:shadow-2xl active:scale-95"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#15202B]">Book a Session</span>
                <div className="absolute inset-0 bg-[#A67C52] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default AboutSection;
