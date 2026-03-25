import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Nadira Ernestine",
    text: "I've been doing hypnotherapy with Mrs. Pooja, and this was my 4th session with her. We've been working on healing and processing childhood trauma, and I honestly didn't realize how deeply this work would touch me. Every time we finish a session, I feel like a massive weight has been lifted off my shoulders. Mrs. Pooja creates a space that feels incredibly safe and supportive..."
  },
  {
    name: "Sandy - Sandra Herewini",
    text: "I am so glad I came across Pooja's services and highly recommend her to anyone wanting to have clarity and make sense of why they make decisions in their lives. Pooja is professional, yet friendly and easy to talk to and understand. Pooja uses both life coaching and hypnotherapy to help learn and change."
  },
  {
    name: "Garreth Vault",
    text: "If anyone is curious about hypnotherapy it is really worth while having a session with Pooja. She was very patient and explained everything before hand and made it a very relaxing and safe environment. I felt really at ease and would recommend her to anyone."
  },
  {
    name: "Twinkle Khurana",
    text: "My experience with Pooja has been lifechanging. I did come from a place where i needed a lot of internal reflection and to understand and process my own issues and childhood traumas. Talking to her and discussing things with her has been a truly healing journey."
  },
  {
    name: "Navin Jotsinghani",
    text: "I was recommended Pooja by a close friend... found the hypnotherapy sessions extremely beneficial. Pooja is very intuitive and creates a safe place to explore deeper issues. I feel much more clear and focused."
  },
  {
    name: "N Goh",
    text: "I like to think that I met Pooja by fate & curiosity... Having always been curious about hypnotherapy, I decided to try a session with Pooja as I was going through a rough patch with my family and trying to heal from past trauma. During the first session, she gave a thorough explanation... throughout the sessions that I had with her, I felt safe to express my truest thoughts without fear of being judged."
  },
  {
    name: "Jatarat Ongtilarnon",
    text: "I can say that I am very lucky to know Pooja. She is very kind lady who have the good mind, professional experience and intention to help her customers to solve the problems and find happiness on her therapy ways."
  },
  {
    name: "Mantis Le Sin",
    text: "Like many I thought I was strong enough to deal with my own issues. Turned out it's not about strength, it's all about awareness. While I was a bit sceptical, I felt like giving hypnotherapy a chance and I am incredibly happy I did that. This therapy has been one of the best investments I made in my life."
  },
  {
    name: "Valentina",
    text: "Just after two sessions with Pooja I can say that I feel like a new me, she managed to bring back my confidence, she made me forget about stress and anxiety and more than that, to have no longer any kind of physical pain. I learned to love and appreciate myself, things that I never did before."
  },
  {
    name: "Nehal Bellani",
    text: "I have had the privilege for working with Pooja for the past couple of months, and her guidance has truly transformed my internal narrative into a much more positive one. Pooja's dedication goes beyond our regular sessions; she frequently checks in between sessions, demonstrating her genuine investment in my growth and healing."
  }
];

const TestimonialCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const isLong = item.text.length > maxLength;

  return (
    <motion.div
      className={`w-full bg-white rounded-[40px] p-8 md:p-10 border border-[#A67C52]/10 shadow-lg flex flex-col shrink-0 ${isExpanded ? 'h-auto' : 'min-h-[340px] md:min-h-[300px]'}`}
      whileHover={{ y: -8, borderColor: "rgba(166, 124, 82, 0.4)" }}
    >
      <div className="flex-grow">
        <p className={`text-black font-normal leading-relaxed text-base md:text-lg ${!isExpanded && isLong ? 'line-clamp-6' : ''}`}>
          "{item.text}"
        </p>
        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-brand-orange text-sm font-semibold mt-4 hover:underline focus:outline-none"
          >
            {isExpanded ? 'Read Less' : 'Read More...'}
          </button>
        )}
      </div>
      <h4 className="text-brand-blue font-bold text-lg mt-6">
        {item.name}
      </h4>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardMetrics, setCardMetrics] = useState({ width: 340, gap: 24, visible: 3 });
  const containerRef = React.useRef(null);

  const handleNext = useCallback(() => {
    setIndex((prev) => {
      const max = testimonials.length - cardMetrics.visible;
      if (prev >= max) return 0;
      return prev + 1;
    });
  }, [cardMetrics.visible]);

  const handlePrev = useCallback(() => {
    setIndex((prev) => {
      const max = testimonials.length - cardMetrics.visible;
      if (prev <= 0) return max;
      return prev - 1;
    });
  }, [cardMetrics.visible]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  useEffect(() => {
    const updateMetrics = () => {
      const w = window.innerWidth;
      const gap = 24;
      const totalWidth = Math.min(w, 1280);
      const innerContainerWidth = totalWidth - (w < 640 ? 48 : 48); // account for px-6 on container
      
      let visible, cardWidth;
      if (w < 640) {
        visible = 1;
        cardWidth = innerContainerWidth;
      } else if (w < 1024) {
        visible = 2;
        cardWidth = (innerContainerWidth - gap) / 2;
      } else {
        visible = 3;
        cardWidth = (innerContainerWidth - (gap * 2)) / 3;
      }
      setIndex(0); // Reset on resize
      setCardMetrics({ width: cardWidth, gap, visible });
    };
    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  return (
    <section className="pt-12 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-blue leading-tight">
            <span className="text-[#B97758] font-medium">Google reviews</span> from clients consulted & helped.
          </h2>
        </div>

        {/* Slidable Cards Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 bg-[#B97758] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-brand-blue transition-all duration-300 active:scale-95 group-hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-14 md:h-14 bg-[#B97758] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-brand-blue transition-all duration-300 active:scale-95 group-hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
          </button>

          <div ref={containerRef} className="overflow-hidden py-10 px-0">
            <motion.div
              className="flex items-start"
              style={{ gap: cardMetrics.gap }}
              animate={{ x: -(index * (cardMetrics.width + cardMetrics.gap)) }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              {testimonials.map((item, i) => (
                <div key={i} style={{ minWidth: cardMetrics.width, width: cardMetrics.width }}>
                  <TestimonialCard item={item} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.slice(0, testimonials.length - cardMetrics.visible + 1).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${i === index ? 'w-8 bg-[#B97758]' : 'w-2 bg-gray-200'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
