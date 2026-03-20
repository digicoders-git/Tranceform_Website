import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Brain, Heart, Zap, ShieldCheck, Clock, Users } from 'lucide-react';

const faqCategories = [
  {
    id: 'general',
    label: 'General',
    icon: <Brain className="w-5 h-5" />,
    faqs: [
      {
        question: "What exactly is hypnotherapy?",
        answer: "Hypnotherapy is a therapeutic technique that uses guided hypnosis — a state of focused attention and deep relaxation — to access the subconscious mind. In this receptive state, a trained hypnotherapist can help you explore and resolve emotional patterns, habits, fears, and beliefs that are difficult to reach through the conscious mind alone. It is safe, evidence-based, and widely used in clinical settings worldwide."
      },
      {
        question: "Is hypnotherapy safe?",
        answer: "Yes, absolutely. Clinical hypnotherapy is a completely safe, non-invasive therapeutic modality. You remain fully aware and in control throughout every session. You cannot be made to say or do anything against your will. Our hypnotherapists are certified professionals who adhere to the highest ethical and clinical standards."
      },
      {
        question: "Can anyone be hypnotised?",
        answer: "The vast majority of people can experience hypnosis to varying degrees. Contrary to myth, hypnotisability is not a sign of weakness — in fact, highly intelligent and imaginative individuals tend to be excellent subjects. The key is willingness and trust. Our therapists are skilled at creating the right environment for you to enter a comfortable, relaxed state."
      },
      {
        question: "Will I lose control during hypnosis?",
        answer: "No. This is one of the most common misconceptions about hypnotherapy. You are not asleep, unconscious, or under anyone's 'control'. You are in a state of relaxed, focused awareness — much like being absorbed in a film or daydream. You can hear everything, respond to questions, and choose to exit the state at any time."
      },
      {
        question: "How is hypnotherapy different from meditation?",
        answer: "While both involve relaxation and focused attention, they serve different purposes. Meditation is generally a self-directed practice for calming the mind. Hypnotherapy is a clinically guided process with specific therapeutic goals — such as resolving trauma, breaking habits, or overcoming phobias. A trained therapist actively guides the session towards measurable outcomes."
      }
    ]
  },
  {
    id: 'sessions',
    label: 'Sessions & Process',
    icon: <Clock className="w-5 h-5" />,
    faqs: [
      {
        question: "How long does a hypnotherapy session last?",
        answer: "A standard session at Tranceform lasts between 60 and 90 minutes. Your first session is typically slightly longer as it includes an in-depth consultation to understand your goals, history, and expectations. Follow-up sessions are focused and goal-directed, typically around 60 minutes."
      },
      {
        question: "How many sessions will I need?",
        answer: "It depends on your specific goals and the complexity of the issue. Many clients experience powerful shifts in as few as 1–3 sessions for issues like smoking cessation or simple phobias. Deeper work — such as trauma processing, inner child healing, or long-standing anxiety — may require 4–8 sessions. Your therapist will recommend a personalised programme after your initial consultation."
      },
      {
        question: "What happens in my first session?",
        answer: "Your first session begins with a thorough consultation where your therapist takes the time to understand your goals, background, and any relevant medical or emotional history. This is followed by a brief explanation of the hypnotic process, addressing any questions you may have. The actual hypnotherapy then takes place in the second half of the session. You will leave feeling relaxed, clear-headed, and informed about your path forward."
      },
      {
        question: "Do you offer online sessions?",
        answer: "Yes! We offer fully effective online hypnotherapy sessions via secure video conferencing. Research and clinical experience confirm that online sessions are equally effective as in-person visits. All you need is a quiet, comfortable space, a reliable internet connection, and a device with a camera. Many clients prefer the convenience and comfort of sessions from their own home."
      },
      {
        question: "What should I do to prepare for a session?",
        answer: "Simply arrive (or log in) on time and with an open mind. Avoid alcohol or heavy meals for a few hours beforehand. Wear comfortable clothing. It helps to have already thought about what you'd like to work on, though your therapist will guide you through this. Most importantly — trust the process. The more relaxed and open you are, the more effective your session will be."
      }
    ]
  },
  {
    id: 'treatments',
    label: 'Treatments',
    icon: <Zap className="w-5 h-5" />,
    faqs: [
      {
        question: "What conditions can hypnotherapy help with?",
        answer: "Hypnotherapy has a strong evidence base for a wide range of conditions including: anxiety and panic attacks, stress and burnout, phobias and fears, smoking and other addictions, chronic pain management, sleep disorders, IBS and digestive issues, confidence and self-esteem, weight management, trauma and PTSD, grief and bereavement, and performance anxiety in sports, public speaking, or exams."
      },
      {
        question: "Can hypnotherapy help with physical pain?",
        answer: "Yes. Clinical hypnotherapy is one of the most effective non-pharmacological approaches to pain management. Neuroimaging studies have shown that hypnosis literally changes how the brain processes pain signals. It has been used successfully in cancer care, post-surgical recovery, fibromyalgia, arthritis, and many other chronic pain conditions. Clients are also often taught self-hypnosis techniques for ongoing management."
      },
      {
        question: "Is hypnotherapy effective for stopping smoking?",
        answer: "Hypnotherapy consistently outperforms most other smoking cessation methods in research studies — including nicotine patches, gum, and medication. A well-known meta-analysis in the New Scientist found hypnotherapy to have a success rate around 30% for single sessions, rising considerably with multiple sessions. It works by targeting the subconscious associations, triggers, and identity beliefs that keep you smoking."
      },
      {
        question: "Can hypnotherapy treat depression?",
        answer: "Hypnotherapy can be a valuable complementary approach for depression, particularly when combined with other therapeutic support. It helps by addressing the subconscious negative thought loops, rebuilding hope and positive expectation, and restoring motivation and energy. We always recommend that clients with clinical depression also maintain regular contact with their GP or psychiatrist."
      },
      {
        question: "What is Past Life Regression and is it real?",
        answer: "Past Life Regression (PLR) uses deep hypnosis to access what appears to be memories from previous lifetimes. Whether approached from a spiritual or purely psychological lens, clients consistently report vivid, emotionally meaningful experiences that bring genuine healing. PLR has been found helpful for unexplained phobias, recurring relationship patterns, and existential questions. We make no definitive claims about the literal reality of past lives, but we do affirm the profound therapeutic value of the experience."
      }
    ]
  },
  {
    id: 'safety',
    label: 'Safety & Ethics',
    icon: <ShieldCheck className="w-5 h-5" />,
    faqs: [
      {
        question: "Are your hypnotherapists certified?",
        answer: "Yes. All Tranceform hypnotherapists are fully certified members of recognised professional bodies, including the VHC (Vedic Hypnotherapy Council). They complete rigorous training in clinical hypnotherapy, ethics, and continuing professional development. Your safety and wellbeing are always our highest priority."
      },
      {
        question: "Is what I share in sessions kept confidential?",
        answer: "Absolutely. Everything you share during your sessions is held in strict confidence. The only exceptions — which are required by professional ethical guidelines — are if there is a risk of serious harm to you or others. Our therapists adhere to the highest standards of professional confidentiality and discretion."
      },
      {
        question: "Can hypnotherapy be harmful?",
        answer: "When conducted by a trained, ethical professional, hypnotherapy is extremely safe. It does not involve any drugs, physical contact, or invasive procedures. In rare cases, individuals with certain conditions (such as active psychosis or very severe dissociative disorders) may need modified approaches, which our therapists are trained to identify and accommodate."
      },
      {
        question: "Is hypnotherapy suitable for children?",
        answer: "Yes, hypnotherapy can be wonderfully effective for children and adolescents, often more so than for adults, as younger minds tend to have a very natural capacity for imaginative focus. We offer age-appropriate sessions for children dealing with anxiety, bed-wetting, sleep issues, exam stress, and more. Parental consent and involvement is always part of our process for younger clients."
      }
    ]
  },
  {
    id: 'cost',
    label: 'Cost & Booking',
    icon: <Heart className="w-5 h-5" />,
    faqs: [
      {
        question: "How much does a session cost?",
        answer: "Session fees vary depending on the type and duration of therapy. We offer single sessions as well as discounted multi-session packages for ongoing programmes. Please contact us or visit our pricing page for current rates. We are committed to making hypnotherapy as accessible as possible."
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes. We offer a complimentary 15-minute discovery call for all new clients. This gives you the opportunity to speak with one of our therapists, ask any questions you may have, and determine whether hypnotherapy is the right path for you — completely free of charge and with no obligation to book."
      },
      {
        question: "What is your cancellation policy?",
        answer: "We kindly ask for at least 24 hours' notice if you need to cancel or reschedule an appointment. Cancellations made with less than 24 hours' notice may incur a partial session fee. We understand that life happens and always aim to be as flexible and accommodating as possible."
      },
      {
        question: "How do I book my first session?",
        answer: "Booking is simple. You can use the 'Book Appointment' button on our website, email us at info@tranceform.com, or call us directly. We'll match you with the right therapist for your needs and schedule a time that suits you — including evenings and weekends."
      }
    ]
  }
];

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [activeIndex, setActiveIndex] = useState(null);
  const [allCategories, setAllCategories] = useState(faqCategories);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    fetch(`${API_URL}/api/faqs`)
      .then(r => r.json())
      .then(data => {
        if (!Array.isArray(data) || data.length === 0) return;
        setAllCategories(prev => {
          const updated = prev.map(cat => ({ ...cat, faqs: [...cat.faqs] }));
          data.forEach(faq => {
            const catId = faq.category?.toLowerCase().replace(/\s+/g, '-') || 'general';
            const existing = updated.find(c => c.id === catId || c.label.toLowerCase() === faq.category?.toLowerCase());
            if (existing) {
              // avoid duplicates by question text
              const alreadyExists = existing.faqs.some(f => f.question === faq.question);
              if (!alreadyExists) existing.faqs.push({ question: faq.question, answer: faq.answer });
            } else {
              // new category from API
              updated.push({
                id: catId,
                label: faq.category,
                icon: <Brain className="w-5 h-5" />,
                faqs: [{ question: faq.question, answer: faq.answer }]
              });
            }
          });
          return updated;
        });
      })
      .catch(() => {});
  }, []);

  const currentFaqs = allCategories.find(c => c.id === activeCategory)?.faqs || [];

  return (
    <div className="min-h-screen bg-white">

      {/* ─── Hero Section ─── */}
      <section className="relative flex items-center overflow-hidden bg-[#15202B]">


        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-7xl pt-36 pb-8 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6 max-w-3xl"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#A67C52]" />
              <span className="text-[#A67C52] text-xs font-medium tracking-[0.4em] uppercase">
                ( HELP CENTRE )
              </span>
            </div>
            <h1 className="text-white text-3xl md:text-5xl font-serif leading-[1.1]">
              Frequently Asked <br />
              <span className="text-[#A67C52]">Questions</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed serif">
              Everything you need to know about hypnotherapy, our process, and what to expect from your sessions.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 w-full"
          >
            {[
              { value: '4.2K+', label: 'Sessions Conducted' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '15+', label: 'Years Experience' },
              { value: '24h', label: 'Response Time' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2 text-center md:text-left border-r last:border-r-0 border-white/10 pr-4 last:pr-0">
                <div className="text-3xl md:text-4xl font-serif text-[#A67C52] tracking-tighter">{stat.value}</div>
                <div className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-semibold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="flex overflow-x-auto scrollbar-none gap-3 py-4">
            {allCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setActiveIndex(null); }}
                className={`shrink-0 flex items-center gap-3 px-6 py-3 rounded-full text-xs font-medium tracking-wider transition-all duration-500 ${
                  activeCategory === cat.id
                    ? 'bg-[#A67C52] text-white shadow-xl shadow-[#A67C52]/20'
                    : 'text-gray-500 hover:text-brand-blue hover:bg-gray-50'
                }`}
              >
                <span className={activeCategory === cat.id ? 'text-white' : 'text-[#A67C52]'}>
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="mb-10 space-y-3">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#A67C52]" />
              <span className="text-[#A67C52] text-[11px] font-medium tracking-[0.4em] uppercase block">
                ( {allCategories.find(c => c.id === activeCategory)?.label?.toUpperCase()} )
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-blue leading-tight tracking-tight">
              Common <span className="text-[#A67C52] serif">questions</span> we get asked
            </h2>
          </div>

          <div className="space-y-0 border-t border-gray-100">
            {currentFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-100"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full py-7 flex items-start justify-between text-left gap-8 group"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[#A67C52]/40 font-serif text-base mt-1 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-xl md:text-2xl font-serif transition-colors duration-500 leading-snug tracking-tight ${
                      activeIndex === index ? 'text-[#A67C52]' : 'text-brand-blue group-hover:text-[#A67C52]'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 mt-0.5 ${
                    activeIndex === index
                      ? 'bg-[#A67C52] border-[#A67C52] text-white rotate-45 shadow-lg shadow-[#A67C52]/20'
                      : 'border-gray-200 text-gray-300 group-hover:border-[#A67C52] group-hover:text-[#A67C52] group-hover:bg-[#A67C52]/5'
                  }`}>
                    <span className="text-xl font-light leading-none">+</span>
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-14 pb-8 pr-20 text-black text-lg font-normal leading-relaxed serif opacity-80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-32 bg-[#15202B] relative overflow-hidden">


        <div className="container mx-auto px-6 max-w-4xl text-center space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-[#A67C52]/50" />
              <span className="text-[#A67C52] text-[12px] font-medium tracking-[0.4em] uppercase block">
                ( READY TO START? )
              </span>
              <div className="h-[1px] w-12 bg-[#A67C52]/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Your transformation begins with a <span className="text-[#A67C52] serif">single session</span>
            </h2>
            <p className="text-white/70 text-xl font-light max-w-2xl mx-auto leading-relaxed serif">
              Join thousands of people who have already transformed their lives through the power of clinical hypnotherapy.
            </p>
          </motion.div>
          
          <div className="flex gap-6 justify-center flex-wrap pt-4">
            <button className="px-14 py-6 bg-[#A67C52] text-white rounded-full font-medium text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-brand-blue transition-all duration-500 shadow-3xl active:scale-95">
              BOOK A SESSION
            </button>
            <button className="px-14 py-6 bg-transparent border border-white/30 text-white rounded-full font-medium text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-brand-blue hover:border-white transition-all duration-500 active:scale-95">
              FREE DISCOVERY CALL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
