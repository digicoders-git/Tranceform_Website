import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Zap, ShieldCheck } from 'lucide-react';

const AboutDiscovery = () => {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);

  const stats = [
    { value: "15+", label: "Years Of Experience" },
    { value: "4.2K+", label: "Transformative Sessions" },
    { value: "10+", label: "Certified Specialists" },
    { value: "99%", label: "Success Rate" }
  ];

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
      <div className="bg-[#15202B] pt-32 pb-48 md:pb-64 overflow-hidden relative">
        {/* Decorative Background Text */}
        <div className="absolute top-10 -right-10 text-[20rem] font-serif text-white/5 select-none pointer-events-none">
          Story
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4"
                >
                  <div className="h-[1px] w-12 bg-[#A67C52]" />
                  <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
                    ( MORE ABOUT )
                  </span>
                </motion.div>
                <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight font-medium">
                  A deeply personalised <br />
                  <span className="text-[#A67C52] font-medium serif">approach to healing</span>
                </h2>
              </div>
              <div className="text-white/70 text-xl font-normal leading-relaxed max-w-lg space-y-6">
                <p>
                  Anxiety returns. Relationships feel complicated. Self-doubt appears at the very moment confidence is needed.
                </p>
                <p>
                  Often this is not because you are doing something wrong. It is because the deeper emotional patterns beneath the surface have not yet been fully understood.
                </p>
              </div>
            </motion.div>
 
            <div className="grid grid-cols-1 gap-12">
              <p className="text-white/90 font-normal text-xl leading-relaxed border-l-4 border-[#A67C52]/30 pl-8">
                Every person who comes to see me has their own story, emotional history, and inner world. Because of this, my sessions are never one-size-fits-all.
              </p>
              <div className="space-y-6 pt-8 border-t border-white/10">
                <p className="text-[#A67C52] font-serif text-2xl">Our sessions often explore:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-white/70 font-normal text-lg">
                  {[
                    "Anxiety & nervous system regulation",
                    "Inner child healing",
                    "Subconscious beliefs & self-worth",
                    "Relationship patterns & attachment",
                    "Unresolved emotional trauma",
                    "Root-cause behavior change"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group cursor-default">
                      <div className="w-2 h-2 rounded-full bg-[#A67C52] group-hover:scale-150 transition-transform" />
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* Floating Video/Image Card */}
      <div className="container mx-auto px-6 md:px-12 max-w-3xl -mt-24 md:-mt-32 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => setIsVideoOpen(true)}
          className="relative rounded-[40px] overflow-hidden shadow-3xl group cursor-pointer border-[8px] border-white ring-1 ring-black/5"
        >
          <img 
            src="/images/image5.png" 
            alt="Hypnotherapy Session" 
            loading="lazy"
            className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-[2000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#15202B]/20 flex items-center justify-center transition-colors group-hover:bg-[#15202B]/40">
            <div className="relative">
              {/* Pulsating Ripples */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ 
                    scale: [1, 1.5, 2],
                    opacity: [0.5, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.6,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 bg-white rounded-full"
                />
              ))}
              
              {/* Main Play Button */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl z-10"
              >
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#A67C52] border-b-[10px] border-b-transparent ml-1.5" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
 
      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-6xl aspect-video rounded-[40px] overflow-hidden shadow-2xl bg-[#15202B] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1" 
              title="Hypnotherapy Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
            <button 
              className="absolute top-6 right-6 text-white hover:bg-white hover:text-[#15202B] transition-all bg-white/10 rounded-full p-4 group"
              onClick={() => setIsVideoOpen(false)}
            >
              <ShieldCheck className="w-8 h-8 rotate-45 group-hover:rotate-0 transition-transform" /> 
            </button>
          </motion.div>
        </div>
      )}
 
      {/* Bottom Stats Section */}
      <div className="bg-white py-32 border-b border-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4 group"
              >
                <div className="h-[1px] w-8 bg-[#A67C52]/30 mx-auto group-hover:w-16 transition-all duration-500" />
                <h3 className="text-5xl md:text-7xl font-serif text-brand-blue group-hover:text-[#A67C52] transition-colors">{stat.value}</h3>
                <p className="text-black/40 text-[11px] font-medium tracking-[0.4em] uppercase font-sans">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDiscovery;
