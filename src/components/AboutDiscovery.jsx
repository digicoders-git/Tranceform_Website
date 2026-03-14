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
      {/* Top Brown Section */}
      <div className="bg-[#B97758] pt-24 pb-48 md:pb-64">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-white/60 text-[13px] font-medium tracking-[0.3em] uppercase block">
                  ( MORE ABOUT )
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight font-medium">
                  A deeply personalised <br />
                  <span className="text-white italic font-light">approach to hypnotherapy</span>
                </h2>
              </div>
              <div className="text-white/70 text-lg font-light leading-relaxed max-w-lg space-y-4">
                <p>
                  Anxiety returns. Relationships feel complicated. Self-doubt appears at the very moment confidence is needed.
                </p>
                <p>
                  Often this is not because you are doing something wrong. It is because the deeper emotional patterns beneath the surface have not yet been fully understood.
                </p>
              </div>
            </motion.div>

              <div className="grid grid-cols-1 gap-8">
                <p className="text-white/80 font-light text-lg">
                  Every person who comes to see me has their own story, emotional history, and inner world. Because of this, my sessions are never one-size-fits-all.
                </p>
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <p className="text-white font-medium">Our sessions often explore themes such as:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-white/60 font-light text-sm list-disc pl-5">
                    <li>Anxiety and nervous system regulation</li>
                    <li>Inner child healing</li>
                    <li>Subconscious beliefs about self-worth</li>
                    <li>Relationship patterns and attachment</li>
                    <li>Emotional trauma and unresolved experiences</li>
                    <li>Habits and behaviours rooted in deeper emotions</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Floating Video/Image Card */}
      <div className="container mx-auto px-6 md:px-12 max-w-5xl -mt-32 md:-mt-48 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => setIsVideoOpen(true)}
          className="relative rounded-[40px] overflow-hidden shadow-3xl group cursor-pointer"
        >
          <img 
            src="/images/image5.png" 
            alt="Hypnotherapy Session" 
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-[#15202B]/30">
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
                className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl z-10"
              >
                <div className="w-0 h-0 border-t-12 border-t-transparent border-l-22 border-l-[#B97758] border-b-12 border-b-transparent ml-1" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        {isVideoOpen && (
          <div 
            className="absolute inset-0 bg-black/90 flex items-center justify-center p-4 pointer-events-auto"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-[#15202B]"
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
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-white/10 rounded-full p-2"
                onClick={() => setIsVideoOpen(false)}
              >
                <ShieldCheck className="w-6 h-6 rotate-45" /> {/* Using an icon as placeholder for X if Lucide doesn't have it loaded here */}
              </button>
            </motion.div>
          </div>
        )}
      </div>

      {/* Bottom Stats Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-2"
              >
                <h3 className="text-4xl md:text-5xl font-serif text-brand-blue">{stat.value}</h3>
                <p className="text-gray-400 text-[12px] font-medium tracking-[0.3em] uppercase">
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
