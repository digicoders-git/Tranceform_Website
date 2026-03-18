import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ShieldCheck, Zap, Heart, CheckCircle2 } from 'lucide-react';
import AppointmentModal from '../components/AppointmentModal';

const HypnotherapyPage = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const phoneNumber = "442071234567"; // Replace with actual number
  const message = "Hello, I would like to book a hypnotherapy session or know more about your services.";
  return (
    <div className="min-h-screen">
      {/* 1. Page Hero Section ─── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#15202B] via-[#0F1722] to-[#15202B]">
        {/* Subtle Accent Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A67C52]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A67C52]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="absolute inset-0 bg-linear-to-t from-[#15202B] via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-7xl pt-40 pb-12">
          <div className="max-w-4xl space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-[#A67C52]" />
              <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
                ( SCIENCE OF THE MIND )
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-white leading-tight"
            >
              Understand <br />
              <span className="text-[#A67C52] font-medium">Hypnotherapy</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl leading-relaxed font-sans font-normal max-w-2xl border-l-4 border-[#A67C52] pl-8"
            >
              Many people who come to see me are thoughtful, capable, and self-aware. They have spent years trying to understand themselves and make positive changes in their lives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. What is Hypnotherapy Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
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
                loading="lazy"
                className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#A67C52] p-12 rounded-[40px] shadow-2xl hidden md:block">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-[#A67C52]" />
                  <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase">
                    ( DEEPER UNDERSTANDING )
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-[#15202B] leading-tight tracking-tight">
                  The subconscious mind remembers <br />
                  <span className="text-[#A67C52] serif">what the conscious mind forgets</span>
                </h2>
              </div>

              <div className="space-y-8 text-black font-normal text-xl leading-relaxed">
                <p>
                  Much of what we experience as adults is influenced by emotional patterns that developed earlier in life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How Hypnotherapy Can Help */}
      <section className="py-20 bg-[#15202B] relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute -top-12 -right-12 text-[20rem] font-serif text-white/5 select-none pointer-events-none">
          Areas
        </div>
        
        <div className="container mx-auto px-6 md:px-16 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="space-y-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="h-[1px] w-12 bg-[#A67C52]" />
                <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
                  ( AREAS I WORK WITH )
                </span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight font-medium">
                How hypnotherapy <br />
                <span className="text-[#A67C52] font-medium serif">can help you</span>
              </h2>
            </div>
            <p className="text-white/60 font-normal text-lg max-w-md pb-2 border-l border-white/10 pl-8 leading-relaxed">
              These challenges are often connected to deeper emotional patterns that can be worked with effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {[
              "Anxiety and emotional overwhelm", "Panic or fear responses", "Self-sabotage", 
              "Inner child healing", "Relationship patterns", "Low self-worth and self-doubt", 
              "Trauma and emotional pain", "Smoking cessation", "Stress and burnout", 
              "Feeling stuck despite self-awareness"
            ].map((area, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                className="bg-white/5 backdrop-blur-xl p-6 rounded-[28px] border border-white/10 flex flex-col justify-between group transition-all duration-500 hover:border-[#A67C52]/50 hover:shadow-2xl hover:shadow-black/40 relative overflow-hidden"
              >
                <div className="space-y-3 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#A67C52]/10 flex items-center justify-center text-[#A67C52] group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-500 shadow-md">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg md:text-xl font-serif text-white/95 leading-tight group-hover:text-white transition-colors">
                    {area}
                  </h4>
                </div>
                
                <div className="w-0 h-[2px] bg-[#A67C52] mt-8 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Trust Row */}
          <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-between items-center gap-12 opacity-40">
            <span className="text-white text-sm font-medium tracking-[0.2em] uppercase">Trusted by 15+ years of clinical excellence</span>
            <div className="h-[1px] flex-1 bg-white/10 hidden md:block" />
            <span className="text-white text-sm font-medium tracking-[0.2em] uppercase">Safe • Confidential • Science-based</span>
          </div>
        </div>
      </section>

      {/* 4. Session Process Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="text-center mb-20 space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-[#A67C52]" />
              <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase">
                ( STEP BY STEP )
              </span>
              <div className="h-[1px] w-12 bg-[#A67C52]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#15202B] leading-tight tracking-tight">
              A safe and <span className="text-[#A67C52] serif">collaborative process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Discovery", desc: "A brief conversation to understand your goals and explain how the process works." },
              { step: "02", title: "Induction", desc: "Gentle guided relaxation to shift your focus from the external world to your inner self." },
              { step: "03", title: "Transformation", desc: "Collaboratively planting positive suggestions and rewiring old thought patterns." },
              { step: "04", title: "Integration", desc: "Emerging with a renewed perspective and resources to handle life's challenges." }
            ].map((proc, idx) => (
              <div key={idx} className="bg-gray-50/50 p-12 rounded-[40px] border border-gray-100 relative group overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500">
                <span className="text-7xl font-serif text-gray-200 absolute -top-2 -left-2 tracking-tighter group-hover:text-[#A67C52]/10 transition-colors">
                  {proc.step}
                </span>
                <div className="relative z-10 pt-16">
                  <h4 className="text-2xl font-serif text-brand-blue mb-4">{proc.title}</h4>
                  <p className="text-black/70 font-normal leading-relaxed text-lg">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Myths vs Reality */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-[#A67C52]" />
                    <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase">
                      ( DEBUNKING )
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif text-[#15202B] leading-tight tracking-tight">
                    Common <span className="text-[#A67C52] serif">Hypnotherapy Myths</span>
                  </h2>
                </div>
              </div>

              <div className="space-y-8">
                {[
                  { myth: "I will lose control.", reality: "You are always in complete control and can wake yourself up at any time." },
                  { myth: "It's like mind control.", reality: "A hypnotherapist cannot make you do anything that goes against your values." },
                  { myth: "I might not wake up.", reality: "Hypnosis is a natural state (like daydreaming). It's impossible to get 'stuck'." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <div className="w-10 h-10 rounded-full bg-[#A67C52]/10 flex items-center justify-center shrink-0 text-lg font-serif text-[#A67C52] group-hover:bg-[#A67C52] group-hover:text-white transition-all">
                      ?
                    </div>
                    <div className="space-y-2">
                       <h5 className="font-serif text-lg text-brand-blue border-l-4 border-[#A67C52] pl-5 uppercase tracking-tight">Myth: {item.myth}</h5>
                       <p className="text-black/80 font-normal pl-5 text-base leading-relaxed">Reality: {item.reality}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 relative">
               <div className="grid grid-cols-2 gap-4 scale-95 md:scale-100">
                 <img src="/images/image2.png" alt="Zen Balance" loading="lazy" className="rounded-[32px] h-[350px] w-full object-cover shadow-2xl" />
                 <img src="/images/image3.png" alt="Peace of Mind" loading="lazy" className="rounded-[32px] h-[350px] w-full object-cover mt-12 shadow-2xl border-4 border-white" />
               </div>
               <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A67C52]/10 rounded-full blur-[100px] opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("/images/image.png")', backgroundSize: 'cover' }} />
        <div className="container mx-auto px-6 text-center max-w-5xl space-y-12 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-[#A67C52]" />
              <span className="text-[#A67C52] text-[12px] font-medium tracking-[0.4em] uppercase">
                ( START TODAY )
              </span>
              <div className="h-[1px] w-12 bg-[#A67C52]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#15202B] leading-tight tracking-tight">
              Begin your <span className="text-[#A67C52] serif">journey inward</span>
            </h2>
          </div>
          
          <div className="space-y-10 max-w-3xl mx-auto">
            <p className="text-[#15202B] font-light text-xl md:text-2xl leading-relaxed serif border-l-4 border-[#A67C52]/30 px-10">
              "Real transformation does not happen by forcing yourself to be different. It begins by understanding yourself more deeply."
            </p>
            <p className="text-black/60 font-normal serif text-lg leading-relaxed">
              Many people reach a point where they realise they do not need more advice or more analysis. What they need is a safe space to understand the deeper emotional patterns shaping their lives.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6">
            <button 
              onClick={() => setIsAppointmentModalOpen(true)}
              className="px-14 py-6 bg-[#A67C52] hover:bg-[#15202B] text-white rounded-full font-medium text-xs tracking-[0.3em] uppercase transition-all duration-500 shadow-2xl hover:shadow-[#A67C52]/20 transform hover:-translate-y-1 active:scale-95"
            >
              BOOK A SESSION
            </button>
            <a 
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-14 py-6 bg-white border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-full font-medium text-xs tracking-[0.3em] uppercase transition-all duration-500 shadow-xl transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              WHATSAPP ME
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
