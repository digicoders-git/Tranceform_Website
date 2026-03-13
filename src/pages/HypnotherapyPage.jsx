import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, ShieldCheck, Zap, Heart, CheckCircle2 } from 'lucide-react';

const HypnotherapyPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* 1. Page Hero Section */}
      <section className="relative py-24 bg-[#FAFAFA] overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <div className="max-w-3xl space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-orange text-[13px] font-bold tracking-[0.2em] uppercase block"
            >
              ( SCIENCE OF THE MIND )
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif text-brand-blue leading-[1.1]"
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
              Hypnotherapy is a state of focused attention and increased suggestibility. It’s a natural process that allows us to access the subconscious mind to create lasting positive changes in thoughts, feelings, and behaviors.
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
                src="/a1.jpg" 
                alt="Meditation" 
                className="rounded-[40px] shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#B97758] p-12 rounded-[40px] shadow-2xl hidden md:block">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif text-brand-blue leading-tight">
                  A bridge to your <br />
                  <span className="text-[#B97758] italic uppercase tracking-wider text-3xl">Subconscious</span>
                </h2>
                <div className="w-20 h-1 bg-brand-orange" />
              </div>

              <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                <p>
                  Most of our daily habits, automated responses, and deep-seated beliefs reside in our subconscious mind. While the conscious mind is logical and analytical, the subconscious is the emotional storehouse.
                </p>
                <p>
                  Clinical hypnotherapy bypasses the "critical factor" of the conscious mind, allowing us to plant seeds of positive suggestion directly where they can take root and grow into new, healthier patterns.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-3">
                  <h4 className="text-brand-blue font-bold text-lg">90% Power</h4>
                  <p className="text-sm text-gray-500 font-light">The subconscious mind controls 90% of our daily actions.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-brand-blue font-bold text-lg">Fast Relief</h4>
                  <p className="text-sm text-gray-500 font-light">Studies show hypnotherapy works faster than traditional talk therapy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Benefits Grid */}
      <section className="py-24 bg-[#B97758] text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <span className="text-white/60 text-[13px] font-bold tracking-[0.2em] uppercase">
              ( DISCOVER MORE )
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              Why choose <span className="italic">Hypnotherapy?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap />, 
                title: "Rapid Change", 
                desc: "Target the root cause of issues directly for faster results compared to traditional methods." 
              },
              { 
                icon: <Sparkles />, 
                title: "Internal Shift", 
                desc: "Change your internal dialogue and automatic habit responses at a fundamental level." 
              },
              { 
                icon: <ShieldCheck />, 
                title: "Clinical Safe", 
                desc: "A completely drug-free, non-invasive treatment that puts you in full control of your progress." 
              },
              { 
                icon: <Heart />, 
                title: "Emotional Healing", 
                desc: "Release deep-seated traumas and emotional blockages that hold you back from full happiness." 
              },
              { 
                icon: <Brain />, 
                title: "Mental Clarity", 
                desc: "Eliminate brain fog and mental clutter, allowing you to focus on your true potential." 
              },
              { 
                icon: <CheckCircle2 />, 
                title: "Lasting Habits", 
                desc: "Create permanent neural pathways for success, health, and positive life choices." 
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-md p-10 rounded-[30px] border border-white/10 group cursor-default"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-white transition-colors group-hover:bg-brand-orange">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4">{benefit.title}</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Session Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <span className="text-brand-orange text-[13px] font-bold tracking-[0.2em] uppercase">
              ( STEP BY STEP )
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-blue leading-tight">
              The <span className="text-brand-orange italic">Session Process</span>
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
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-sm font-bold text-gray-400">
                      ?
                    </div>
                    <div className="space-y-2">
                       <h5 className="font-bold text-brand-blue border-l-4 border-[#B97758] pl-4 uppercase tracking-tighter text-sm">Myth: {item.myth}</h5>
                       <p className="text-gray-600 font-light italic pl-4">Reality: {item.reality}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 relative">
               <div className="grid grid-cols-2 gap-4">
                 <img src="/a2.jpg" alt="Therapy" className="rounded-3xl h-80 w-full object-cover shadow-xl" />
                 <img src="/service-2.jpg" alt="Mental Peace" className="rounded-3xl h-80 w-full object-cover mt-12 shadow-xl" />
               </div>
               <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EBC9B4] rounded-full blur-[80px] opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 text-center max-w-4xl space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif text-brand-blue leading-[1.2]">
            Ready to experience the <br />
            <span className="text-brand-orange italic uppercase tracking-widest text-3xl">Mental Breakthrough?</span>
          </h2>
          <p className="text-gray-500 font-light text-xl">
            Book your discovery call today and start rewiring your mind for the success you deserve.
          </p>
          <div className="pt-6">
            <button className="px-12 py-5 bg-[#333] hover:bg-[#15202B] text-white rounded-full font-bold text-[16px] transition-all duration-300 shadow-2xl transform hover:scale-105">
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HypnotherapyPage;
