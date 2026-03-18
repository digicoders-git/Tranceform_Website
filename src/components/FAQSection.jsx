import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer online therapy options?",
    answer: "Yes, we provide comprehensive online hypnotherapy sessions via secure video conferencing. These sessions are just as effective as in-person visits and allow you to receive expert care from the comfort of your own home."
  },
  {
    question: "Are your services covered by insurance?",
    answer: "Coverage varies depending on your insurance provider and specific plan. We recommend contacting your insurance company directly to inquire about 'out-of-network' mental health services. We can provide you with detailed invoices for reimbursement purposes."
  },
  {
    question: "What kind of therapy services do you offer?",
    answer: "We specialize in clinical hypnotherapy for stress management, anxiety relief, habit transformation, confidence building, and depression support. Our approach is holistic and tailored to each individual's unique needs."
  },
  {
    question: "Can I choose my therapist?",
    answer: "During your initial consultation, we will match you with a therapist who best suits your goals and personality. However, if you have a preference or would like to switch at any point, we are more than happy to accommodate your request."
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
                <span className={`text-xl md:text-2xl font-serif transition-colors duration-500 tracking-tight leading-snug ${activeIndex === index ? 'text-[#A67C52]' : 'text-brand-blue group-hover:text-[#A67C52]'}`}>
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
                    <div className="pb-6 text-black/80 leading-relaxed max-w-4xl text-lg font-normal serif">
                      {faq.answer}
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
