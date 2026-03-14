import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ShieldCheck, Zap, Heart, CheckCircle2 } from 'lucide-react';
import AppointmentModal from '../components/AppointmentModal';

const HypnotherapyPage = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const phoneNumber = "442071234567"; // Replace with actual number
  const message = "Hello, I would like to book a hypnotherapy session or know more about your services.";
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Page Hero Section */}
      <section className="relative py-24 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="max-w-3xl space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-orange text-[13px] font-medium tracking-[0.3em] uppercase block"
            >
              ( SCIENCE OF THE MIND )
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif text-brand-blue leading-[1.1]"
            >
              Understand <br />
              <span className="text-[#B97758] italic">Hypnotherapy</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed font-light"
            >
              Many people who come to see me are thoughtful, capable, and self-aware. They have spent years trying to understand themselves and make positive changes in their lives.
            </motion.p>
          </div>
        </div>
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 -right-64 w-[600px] h-[600px] bg-[#EBC9B4]/20 rounded-full blur-[120px] z-0" />
      </section>

      {/* 2. What is Hypnotherapy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/image4.png" 
                alt="Emotional Healing" 
                className="rounded-[40px] shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#B97758] p-12 rounded-[40px] shadow-2xl hidden md:block">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif text-brand-blue leading-tight font-medium">
                  The subconscious mind remembers <br />
                  <span className="text-[#B97758] italic font-light uppercase tracking-[0.1em] text-3xl">what the conscious mind forgets</span>
                </h2>
                <div className="w-20 h-1 bg-brand-orange" />
              </div>

              <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                <p>
                  Much of what we experience as adults is influenced by emotional patterns that developed earlier in life. The mind and nervous system learn how to respond to love, stress, conflict, disappointment, safety, and connection.
                </p>
                <p>
                  If those early experiences were confusing, overwhelming, or emotionally unsupported, the nervous system adapts in order to cope. Years later, those same patterns may continue quietly in the background.
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <p className="text-brand-blue font-semibold">You may find yourself:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-500 font-light text-base list-disc pl-5">
                  <li>Needing control in order to feel safe</li>
                  <li>Expecting abandonment or disappointment</li>
                  <li>Feeling anxious even when life is stable</li>
                  <li>Struggling to fully trust yourself or others</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How Hypnotherapy Can Help (Section 6) */}
      <section className="py-24 bg-[#B97758] text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <span className="text-white/60 text-[13px] font-medium tracking-[0.3em] uppercase">
              ( AREAS I WORK WITH )
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white font-medium italic">
              How hypnotherapy can help
            </h2>
            <p className="text-white/70 font-light max-w-2xl mx-auto">
              People come to see me for many different reasons. Often these challenges are connected to deeper emotional patterns that can be worked with effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Anxiety and emotional overwhelm", "Panic or fear responses", "Self-sabotage", 
              "Inner child healing", "Relationship patterns", "Low self-worth and self-doubt", 
              "Trauma and emotional pain", "Smoking cessation", "Stress and burnout", 
              "Feeling stuck despite self-awareness"
            ].map((area, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/5 flex items-center gap-4 group hover:bg-white/20 transition-all cursor-default">
                <div className="w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                <span className="text-lg font-light leading-snug">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Session Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <span className="text-brand-orange text-[13px] font-medium tracking-[0.3em] uppercase">
              ( STEP BY STEP )
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-blue leading-tight font-medium">
              A safe and <span className="text-brand-orange italic font-light">collaborative process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {[
              { step: "01", title: "Discovery", desc: "A brief conversation to understand your goals and explain how the process works." },
              { step: "02", title: "Induction", desc: "Gentle guided relaxation to shift your focus from the external world to your inner self." },
              { step: "03", title: "Transformation", desc: "Collaboratively planting positive suggestions and rewiring old thought patterns." },
              { step: "04", title: "Integration", desc: "Emerging with a renewed perspective and resources to handle life's challenges." }
            ].map((proc, idx) => (
              <div key={idx} className="bg-[#FAFAFA] p-10 rounded-[40px] border border-gray-100 relative group overflow-hidden">
                <span className="text-6xl font-serif text-gray-200 absolute -top-2 -left-2 tracking-tighter group-hover:text-brand-orange/10 transition-colors">
                  {proc.step}
                </span>
                <div className="relative z-10 pt-12">
                  <h4 className="text-2xl font-serif text-brand-blue mb-4">{proc.title}</h4>
                  <p className="text-gray-500 font-light leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Myths vs Reality */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif text-brand-blue leading-tight">
                  Debunking the <br />
                  <span className="text-brand-orange italic">Common Myths</span>
                </h2>
                <div className="w-20 h-1 bg-[#B97758]" />
              </div>

              <div className="space-y-8">
                {[
                  { myth: "I will lose control.", reality: "You are always in complete control and can wake yourself up at any time." },
                  { myth: "It's like mind control.", reality: "A hypnotherapist cannot make you do anything that goes against your values." },
                  { myth: "I might not wake up.", reality: "Hypnosis is a natural state (like daydreaming). It's impossible to get 'stuck'." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-sm font-semibold text-gray-400">
                      ?
                    </div>
                    <div className="space-y-2">
                       <h5 className="font-semibold text-brand-blue border-l-4 border-[#B97758] pl-4 uppercase tracking-tighter text-sm">Myth: {item.myth}</h5>
                       <p className="text-gray-600 font-light italic pl-4">Reality: {item.reality}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 relative">
               <div className="grid grid-cols-2 gap-4">
                 <img src="/images/image2.png" alt="Zen Balance" className="rounded-3xl h-80 w-full object-cover shadow-xl" />
                 <img src="/images/image3.png" alt="Peace of Mind" className="rounded-3xl h-80 w-full object-cover mt-12 shadow-xl" />
               </div>
               <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EBC9B4] rounded-full blur-[80px] opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 text-center max-w-4xl space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-blue leading-[1.2] font-medium">
            Begin your <br />
            <span className="text-brand-orange italic uppercase tracking-widest text-3xl font-light">journey inward</span>
          </h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-gray-500 font-light text-xl">
              Many people reach a point where they realise they do not need more advice or more analysis. What they need is a safe space to understand the deeper emotional patterns shaping their lives.
            </p>
            <p className="text-brand-blue font-medium italic text-lg pt-4 border-t border-gray-200">
               "Real transformation does not happen by forcing yourself to be different. It begins by understanding yourself more deeply."
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
            <button 
              onClick={() => setIsAppointmentModalOpen(true)}
              className="px-12 py-5 bg-brand-orange hover:bg-brand-blue text-white rounded-full font-medium text-[16px] transition-all duration-300 shadow-xl transform hover:scale-105 active:scale-95"
            >
              BOOK A SESSION
            </button>
            <a 
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium text-[16px] transition-all duration-300 shadow-xl transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              MESSAGE ON WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </div>
  );
};

export default HypnotherapyPage;
