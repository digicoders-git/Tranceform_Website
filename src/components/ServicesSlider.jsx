import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: "Stress Management",
    image: "/images/image.png",
    desc: "Release tension and find lasting inner calm by accessing the transformative power of your subconscious mind through guided relaxation."
  },
  {
    title: "Anxiety Treatment",
    image: "/images/image2.png",
    desc: "Rewire your brain's response to fear and panic with clinical hypnotherapy designed to restore control and confidence in every situation."
  },
  {
    title: "Individual Therapy",
    image: "/images/image3.png",
    desc: "Deeply personalized hypnotherapy sessions that uncover and resolve the root causes of internal barriers to help you thrive."
  },
  {
    title: "Couples Counseling",
    image: "/images/image4.png",
    desc: "Strengthen emotional bonds and heal relationship patterns by exploring shared subconscious dynamics in a safe, therapeutic environment."
  },
  {
    title: "Depression Support",
    image: "/images/image8.png",
    desc: "Lift the weight of persistent sadness by utilizing direct suggestion and visualization to rebuild hope and emotional resilience from within."
  }
];

const ServicesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (services.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (services.length - 2)) % (services.length - 2));
  };

  return (
    <section className="bg-[#B97758] py-24 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-16">
        <div className="text-center md:text-left">
          <span className="text-white/80 text-[13px] font-semibold tracking-[0.3em] uppercase">
            ( OUR SERVICES )
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white mt-4 italic">
            Let's all fight <span className="font-semibold not-italic">mental illness</span>
          </h2>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-visible px-4 md:px-10">
        <div className="flex justify-center">
          <motion.div 
            className="flex gap-6 md:gap-10"
            animate={{ x: -currentIndex * 420 }} // Approximate width of card + gap
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative flex-shrink-0 w-[300px] md:w-[380px] h-[500px] md:h-[600px] rounded-[40px] overflow-hidden group shadow-2xl transition-all duration-500 ${
                  index === currentIndex + 1 ? 'scale-105 z-10' : 'scale-95 opacity-80'
                }`}
              >
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Dark Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-10 left-8 right-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-serif italic mb-4 drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed font-light line-clamp-2 md:line-clamp-none">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-16">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#B97758] transition-all duration-300 active:scale-90"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#B97758] transition-all duration-300 active:scale-90"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
