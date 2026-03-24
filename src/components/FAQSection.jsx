import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Will I lose control during hypnosis?",
    answer: "No, you remain fully aware and in control throughout the session.\n\nHypnosis is not something that is done to you. It is a state you enter with guidance. You can hear everything, respond if you want to, and come out of it at any time.\n\nIt is a very natural state, similar to being deeply absorbed in your thoughts or a memory."
  },
  {
    question: "Can you erase my memories?",
    answer: "No, and that is not the goal of this work.\n\nYour experiences are part of your story. What we work on is how those memories are held within you, the emotional charge, the patterns, and the responses connected to them.\n\nAs those shift, the memory often feels lighter, less triggering, and no longer in control of your present."
  },
  {
    question: "Will I remember what happens in the session?",
    answer: "Yes, most people remember everything.\n\nYou may feel deeply relaxed or absorbed at times, but you remain aware of the process. Some parts may feel dream-like, but not lost or forgotten."
  },
  {
    question: "What if I can’t be hypnotised?",
    answer: "Most people can enter a hypnotic state.\n\nIt is not about being “hypnotisable”. It is about your ability to focus and relax, which most people naturally can.\n\nThere is no pressure to “do it right.” I guide you gently, and we move at a pace that feels comfortable for you."
  },
  {
    question: "Will you make me do something I don’t want to do?",
    answer: "No.\n\nHypnotherapy does not override your values, beliefs, or boundaries. You cannot be made to do anything against your will.\n\nThis work is collaborative. Your mind will always protect you."
  },
  {
    question: "Is hypnotherapy like what I’ve seen on stage or in movies?",
    answer: "No, that is entertainment.\n\nStage hypnosis is designed for performance. Therapeutic hypnotherapy is a completely different process. It is safe, respectful, and focused on your wellbeing."
  },
  {
    question: "How many sessions will I need?",
    answer: "This varies from person to person.\n\nSome people notice shifts quickly, while others benefit from a few sessions to work through deeper patterns.\n\nWe focus on meaningful, lasting change rather than rushing the process."
  },
  {
    question: "What if I feel emotional during the session?",
    answer: "That is completely okay.\n\nEmotions are often part of the healing process. You will be supported throughout, and nothing is forced or rushed.\n\nWe move in a way that feels safe and manageable for you."
  },
  {
    question: "Can hypnotherapy help if I already understand my problem?",
    answer: "Yes, this is actually very common.\n\nMany people I work with are already self-aware. They understand their patterns, but still feel stuck.\n\nHypnotherapy helps bridge the gap between understanding something logically and shifting it emotionally and subconsciously."
  },
  {
    question: "Is this a safe process?",
    answer: "Yes.\n\nCreating a sense of safety is at the core of the work. We do not push you into anything you are not ready for.\n\nThe process is gentle, grounded, and guided with care."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 space-y-3">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-8 bg-[#A67C52]" />
            <span className="text-[#A67C52] text-[11px] font-medium tracking-[0.4em] uppercase">
              ( QUESTIONS & ANSWERS )
            </span>
            <div className="h-[1px] w-8 bg-[#A67C52]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-brand-blue leading-tight tracking-tight">
            Any <span className="text-[#A67C52] serif">questions?</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-0 border-t border-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                className="w-full py-6 flex items-center justify-between text-left group gap-8"
              >
                <span className={`text-xl md:text-2xl font-serif font-bold transition-colors duration-500 tracking-tight leading-snug ${activeIndex === index ? 'text-[#A67C52]' : 'text-brand-blue group-hover:text-[#A67C52]'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 p-2 rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-[#A67C52] text-white rotate-180 shadow-md shadow-[#A67C52]/30' : 'bg-gray-100 text-gray-400 group-hover:bg-[#A67C52] group-hover:text-white'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-black/80 leading-relaxed max-w-4xl text-lg font-normal serif space-y-3">
                      {faq.answer.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
