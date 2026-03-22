import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const services = [
  {
    title: "Anxiety",
    image: "/images/anxiety.png",
    desc: `Anxiety isn’t always obvious. 

Sometimes it looks like overthinking, needing control, or constantly preparing for what might go wrong. Many of the people I work with are highly aware. They understand their patterns, yet their body still feels on edge. 

In our work together, we gently explore what your anxiety is trying to protect. When the nervous system begins to feel safe again, the need to stay constantly alert starts to soften.`
  },
  {
    title: "Relationship Patterns",
    image: "/images/relationship.png",
    desc: `You may notice that even when the person changes, the feeling doesn’t. 

The same fears, the same doubts, the same emotional responses keep showing up, whether it’s fear of abandonment, over-giving, or pulling away when things get close. 

These patterns often begin much earlier in life. 

Through hypnotherapy, we begin to understand the deeper emotional blueprint behind your relationships, so you can start responding from a place that feels calmer, clearer, and more secure.`
  },
  {
    title: "Self-Sabotage",
    image: "/images/self_sabotage.png",
    desc: `You know what to do. And yet, something holds you back. 

This isn’t a lack of discipline, it’s often a protective pattern. At some point, being visible, confident, or fully yourself may not have felt safe. 

So a part of you learned to pause, doubt, or pull back. 

In our work, we understand that part instead of fighting it. And when it no longer needs to protect you, change begins to happen more naturally.`
  },
  {
    title: "Inner Child Healing",
    image: "/images/healing.png",
    desc: `There is often a younger part of you still carrying feelings that were never fully processed. 

Not being seen.
Not feeling enough.
Feeling responsible too early. 

These parts don’t disappear, they quietly influence how you feel about yourself even today. 

Through gentle hypnotherapy, we reconnect with these parts, not to relive the past, but to finally give them the safety, understanding, and support they needed.`
  },
  {
    title: "Trauma & Emotional Healing",
    image: "/images/trauma_healing.png",
    desc: `Trauma doesn’t always look dramatic. 

Sometimes it lives in how quickly you feel overwhelmed, how hard it is to trust, or how your body reacts even when you know you’re safe. 

Your mind may understand that the past is over, but your nervous system may still be holding onto it. 

Our work focuses on creating safety first, then gently allowing your system to release what it no longer needs to carry.`
  },
  {
    title: "Addiction / Smoking",
    image: "/images/addiction.png",
    desc: `Habits like smoking or other dependencies are rarely just about the habit itself. 

They are often connected to moments of stress, loneliness, boredom, or emotional discomfort. 

Part of you knows you want to stop. Another part still turns toward it. 

In our sessions, we work with both parts, understanding the need behind the habit while gently creating new ways for your mind and body to respond.`
  },
  {
    title: "Self-Worth & Validation",
    image: "/images/image.png",
    desc: `Many people I work with appear confident on the outside, yet internally they still question themselves. 

They seek validation, overthink their decisions, or feel like they are never quite enough. 

This often comes from early experiences where love or approval felt conditional. 

Through hypnotherapy, we begin shifting that internal relationship so your sense of worth feels more stable, more grounded, and less dependent on others.`
  },
  {
    title: "High Performers & Burnout",
    image: "/images/burnout.png",
    desc: `Some of the most driven, capable individuals struggle the most with slowing down. 

They are used to being in control, solving problems, and achieving results even in their healing. 

But over time, this creates exhaustion. 

In our work, we gently move from control to awareness. From constant doing to deeper understanding. 

And often, that’s where real change begins.`
  },
  {
    title: "Panic & Fear Responses",
    image: "/images/image2.png",
    desc: `Panic can feel sudden and overwhelming. 

Even when you know logically that you’re safe, your body reacts as if something is wrong. 

This is not a failure, it’s a learned response. 

Together, we work with the nervous system, helping it feel safe again so that these intense reactions begin to reduce and eventually release.`
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
        <div className="text-center md:text-left max-w-4xl">
          <span className="text-white/80 text-[13px] font-semibold tracking-[0.3em] uppercase">
            ( AREAS I WORK WITH )
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white mt-4">
            How hypnotherapy can help
          </h2>
          <p className="text-white/90 text-lg font-light mt-4">
            People come to see me for many different reasons, including the areas below. Often these challenges are connected to deeper emotional patterns that can be worked with effectively through hypnotherapy.
          </p>
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
                className={`relative flex-shrink-0 w-[300px] md:w-[380px] h-[550px] md:h-[650px] rounded-[40px] overflow-hidden group shadow-2xl transition-all duration-500 ${
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-10 left-8 right-8 text-white z-10">
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {service.title}
                  </h3>
                  <p className="text-[13px] md:text-sm text-white/95 leading-relaxed font-light line-clamp-2 md:line-clamp-none drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)] whitespace-pre-line">
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
