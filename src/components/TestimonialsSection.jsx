import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Loky Furgusun",
    text: "The hypnotherapy sessions completely transformed my approach to anxiety. I finally feel in control of my life again after years of struggling."
  },
  {
    name: "Mark Wood",
    text: "Truly a life-changing experience. The expert guidance helped me break free from habits that I thought were permanent. Highly recommended!"
  },
  {
    name: "Joe Root",
    text: "A sanctuary for mental peace. Each session felt deeply personal and targeted exactly what I needed to heal and move forward with confidence."
  },
  {
    name: "David Miller",
    text: "I was skeptical at first, but the results speak for themselves. The subconscious work we did has improved my sleep and overall mood significantly."
  },
  {
    name: "Michal Stark",
    text: "Professional, caring, and effective. The environment is so welcoming, making it easy to open up and achieve real breakthroughs."
  }
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-12 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-blue leading-tight">
            <span className="text-[#B97758] italic font-medium">20,000+ people</span> have been consulted & helped.
          </h2>
        </div>

        {/* Slidable Cards Container */}
        <div className="relative">
          <motion.div 
            className="flex gap-6 md:gap-8"
            animate={{ x: `calc(-${index * 350}px)` }} // Adjust 350px based on card width + gap
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                className="min-w-[300px] md:min-w-[400px] bg-gray-50/50 rounded-[30px] p-10 border border-gray-100 shadow-sm flex flex-col justify-between h-[280px]"
                whileHover={{ y: -10, shadow: "0 20px 40px rgba(0,0,0,0.05)" }}
              >
                <p className="text-gray-600 italic leading-relaxed text-lg">
                  "{item.text}"
                </p>
                <h4 className="text-brand-blue font-medium text-lg mt-6">
                  {item.name}
                </h4>
              </motion.div>
            ))}
            
            {/* Repeat testimonials to ensure smooth infinite-like flow if needed, 
                but for simplicity we'll just slide through the list */}
            {testimonials.map((item, i) => (
              <motion.div
                key={`repeat-${i}`}
                className="min-w-[300px] md:min-w-[400px] bg-gray-50/50 rounded-[30px] p-10 border border-gray-100 shadow-sm flex flex-col justify-between h-[280px]"
              >
                <p className="text-gray-600 italic leading-relaxed text-lg">
                  "{item.text}"
                </p>
                <h4 className="text-brand-blue font-medium text-lg mt-6">
                  {item.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <div 
              key={i}
              className={`h-2 transition-all duration-300 rounded-full ${i === index % testimonials.length ? 'w-8 bg-[#B97758]' : 'w-2 bg-gray-200'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
