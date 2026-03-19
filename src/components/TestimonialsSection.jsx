import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "N Goh - Contented Being",
    text: "I like to think that I met Pooja by fate & curiosity. I Was traveling to Bangkok for work from Singapore in July 2023 and was searching for meaningful activities to do for myself. Having always been curious about hypnotherapy, I decided to try a session with Pooja as I was going through a rough patch with my family and trying to heal from past trauma. During the first session, she gave a thorough explanation of how the therapy sessions would be like, and explained that the outcome is for me to learn tools and techniques so I can cope better on my own, instead of constantly having to head back for therapy. I found that the homework prescribed helped tremendously on my mental recovery, as it forced me to confront the past and address issues I've been burying. Throughout the sessions that I had with her, I felt safe to express my truest thoughts without fear of being judged. I've been practicing what were taught and it is definitely helping me turn my life around slowly. I'm truly grateful for this experience and am very happy I found both a therapist and a friend in Pooja."
  },
  {
    name: "Anonymous - Radiant Soul",
    text: "I cannot express enough gratitude for the incredible experience I had. I went to Pooja with the intention of finally putting an end to my smoking habit, and I can confidently say that after just two sessions, I feel like a completely different person. From the moment I walked into her office, she made me feel welcomed and understood. She has this amazing ability to listen attentively. Thank you for giving me the tools and support I needed to finally let go of smoking and embrace a healthier, smoke-free life."
  },
  {
    name: "Anonymous - Cheerful Heart",
    text: "I just want to say thank you for the help and guidance you have given me so far. I was reflecting on it this morning and I am in so much if a better place emotionally, spiritually and physically. I'm looking forward to working with you more."
  },
  {
    name: "J O - Exuberant Heart",
    text: "Working with Pooja was life-changing. I'm amazed by the results! The insight she provided me, the sessions, and tools to shift my mindset were highly useful and have really had an impact in removing some issues I was having with negative self-talk and being stuck."
  },
  {
    name: "Anonymous - Radiant Soul",
    text: "Mrs Pooja is a real professional when it comes to hypnotherapy. My self esteem gets better, reduce anxiety. I can say that I'm more aware and knowing myself more through therapies. And she's always there for me professionally when I need her help. Thank you."
  },
  {
    name: "Anonymous - Positive Energy",
    text: "I have had the privilege of working with Pooja for the past couple of months, and her guidance has truly transformed my internal narrative into a much more positive one. Pooja's dedication goes beyond our regular sessions; she frequently checks in between sessions, demonstrating her genuine investment in my growth and healing. Her commitment to my wellbeing has been both inspiring and instrumental in my journey towards a more positive mindset. I highly recommend Pooja to anyone seeking meaningful and compassionate support."
  },
  {
    name: "Anonymous - Joyful Spirit",
    text: "Getting a session with Pooja was a wonderful experience. I have been always on giving side in all my relationships and two sessions with pooja gave me lot of clarity about me expressing, loving and valuing myself. Thank u dear. Highly recommend to do sessions with her."
  },
  {
    name: "Anonymous - Happy Soul",
    text: "I was in a place where I felt stuck regarding several aspects of my life, and I had been curious about hypnotherapy for a while. After a short searching I was pulled to Tranceform and the energy and vibe I got from the other reviews here. I knew from my first talk with Pooja that I had come to the right place, and she brought me on some very beautiful, vulnerable and healing journeys through deep meditations and coaching questions. After a few sessions I did feel some blockages go away and on our last call I was in a very different state compared to our first. I will forever hold some of the tools and images our sessions together brought me and would warmly recommend hypnotherapy with Pooja and Tranceform."
  },
  {
    name: "Anonymous - Happy Soul",
    text: "I had gone to Pooja in very drained state. I was plagued with burnout from overworking & my own stresses/pressures. Pooja helped me to take a step back, relax and build awareness by going deep into my own thinking patterns in my life, which I had no idea of. She's helped me to go back & look at specific issues in my life and reframe them with a positive & more constructive outlook. I never had knowledge of these tools before & I found them so useful. Pooja as a hypnotherapist was also very patient & kind with me. She was able to discern what was going on & guide me specifically with written exercises that helped me to unravel and understand some of the issues I was dealing with and find productive ways to come unstuck and move forward. I am super grateful to have met her. Thank you Pooja <3"
  },
  {
    name: "Anonymous - Crypto Trader",
    text: "As a Crypto Trader I found myself with some mental blocks, Pooja managed to realign my focus making incredible trades once's again. It truly is mind blowing how our ancestors have an effect on our current state, in so many ways. I can highly recommend Pooja as a therapist, the after care and continued support."
  },
  {
    name: "Anonymous - Happy Soul",
    text: "Like many I thought I was strong enough to deal with my own issues. Turned out it's not about strength, it's all about awareness. While I was a bit sceptical, I felt like giving hypnotherapy a chance and I am incredibly happy I did that. This therapy has been one of the best investment I made in my life. It took in my case less than two months to make a difference and notice a different approach I have with myself, people and life. Mrs Pooja is not only a great therapist but as well a beautiful human being. I always felt comfortable talking with her and she always checked on me during the week to see how I was feeling. My life improved. A lot. Couldn't be more happy to share here my experience. Good luck to you all."
  },
  {
    name: "Jatarat Ongtilarnon - Happy Soul",
    text: "I can say that I am very lucky to know Pooja. She is very kind lady who have the good mind, professional experience and intention to help her customers to solve the problems and find happiness on her therapy ways. Now I feel that I trust her as an old close friend cause she brought me to see what is the key success to pass the problems with what is important for life with her good warm care."
  },
  {
    name: "Anonymous - Happy Soul",
    text: "I went to see Pooja for something I think it was a big deal, however, after sitting and talking with her for the first session I found out there is much more in me that I need to heal so I committed to 4 more sessions with her, after 2 sessions I can tell the different. I become happier than I was. Pooja is very caring and attentive even outside the session. Thank you for your kind help, I'm still healing, but all I say now is it's working."
  },
  {
    name: "Sherry Grandmaison - IHA Hypnotherapy",
    text: "I met with pooja on Saturday Feb2, 2020 and was very impressed with her approach. I have tried for years to quit smoking using various methods but went back to it. It's only been a few days and currently I am smoke free!! I see it differently now due to Pooja and her methods. Needless to say I was VERY impressed!!! Thank You Pooja for your help!"
  },
  {
    name: "Stacey Chuang - Happy Soul",
    text: "It was a pleasant journey with Pooja. Forget about what you have been searching on the internet. With Pooja was totally different experience. Pooja started with conversation to understand what's the problem and what kind of help I need. And most importantly if I have strong will to make the change. it was so easy to follow her voice to go to the subconscious level to discover yourself. And woke up seeing her smiling face, I know that the thing I was worry about will be alright."
  },
  {
    name: "Valentina - Happy Soul",
    text: "Just after two sessions with Pooja I can say that I feel like a new me, she managed to bring back my confidence, she made me forget about stress and anxiety and more than that, to have no longer any kind of physical pain. I learned to love and appreciate myself, things that I never did before. I'm really grateful of meeting Pooja, she is a great listener and incredibly empathetic."
  },
  {
    name: "Johan - Happy Soul",
    text: "First of all, thank you very much. I felt great after a session and that feeling persisted. Now I sleep better every night. I feel much more positive, optimistic, resilient, and calmer than before. You helped and guided me clear away the unimportant things and focus on what needed to be done."
  },
  {
    name: "Anonymous - Housewife",
    text: "The few sessions I had with Pooja (Tranceform Hypnotherapy), cleared a lot of my dilemmas and gave a better way to accept and approach people and situations. Perception of situations improved. Feel in control of myself. I would definitely recommend a few sessions with her. She is very caring and puts a person at ease. So one enjoys these sittings... and does ultimately feel the change."
  },
  {
    name: "Ms.R - Happy Soul",
    text: "Wonderful experience as a first-timer. Never imagined how provoking it is to alter your subconscious mind. It makes you realise its understated yet powerful effects on the conscious mind - necessary for your everyday life. And with Pooja’s voice, it’s definitely a must-try!"
  },
  {
    name: "Anonymous - Student",
    text: "Can't quite describe how enlightening the entire process was. Pooja's soothing voice allowed me to go in deep. With just one session my mind was put to rest and weight was lifted off my shoulders. Would highly recommend for anyone dealing with stress or anxiety."
  }
];

const TestimonialCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const isLong = item.text.length > maxLength;

  return (
    <motion.div
      className={`w-full bg-gray-50/50 rounded-[30px] p-6 md:p-10 border border-gray-100 shadow-sm flex flex-col shrink-0 ${isExpanded ? 'h-auto' : 'min-h-[360px] md:min-h-[320px]'}`}
      whileHover={{ y: -10 }}
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
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  useEffect(() => {
    const updateMetrics = () => {
      const w = window.innerWidth;
      const gap = 24;
      let visible, cardWidth;
      if (w < 640) {
        visible = 1;
        cardWidth = Math.min(w - 48, 320);
      } else if (w < 1024) {
        visible = 2;
        // fit 2 cards + 1 gap inside container (container = w - 48px padding)
        cardWidth = Math.floor((w - 48 - gap) / 2);
      } else {
        visible = 3;
        cardWidth = 340;
      }
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
            <span className="text-[#B97758] font-medium">15+ people</span> have been consulted & helped.
          </h2>
        </div>

        {/* Slidable Cards Container */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg hover:bg-brand-orange hover:text-white transition-all duration-300 active:scale-95 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg hover:bg-brand-orange hover:text-white transition-all duration-300 active:scale-95 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div ref={containerRef} className="overflow-hidden py-10 px-2">
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
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
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
