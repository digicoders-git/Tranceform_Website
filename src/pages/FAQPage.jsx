import React, { useState } from 'react';
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

  const currentFaqs = faqCategories.find(c => c.id === activeCategory)?.faqs || [];

  return (
    <div className="min-h-screen bg-white">

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden bg-[#1E2A3A]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/slider1.png)' }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-7xl pt-36 pb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-5 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
              Help Centre
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-serif italic leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 text-lg font-light max-w-xl">
              Everything you need to know about hypnotherapy, our process, and what to expect from your sessions.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-8 pt-4"
          >
            {[
              { value: '4.2K+', label: 'Sessions Conducted' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '15+', label: 'Years Experience' },
              { value: '24h', label: 'Response Time' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-serif text-brand-orange">{stat.value}</div>
                <div className="text-white/50 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Category Tabs ─── */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="flex overflow-x-auto scrollbar-none gap-1 py-3">
            {faqCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setActiveIndex(null); }}
                className={`shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-brand-orange text-white shadow-md shadow-orange-200'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Accordion ─── */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="mb-12 space-y-2">
            <span className="text-brand-orange text-[12px] font-bold tracking-[0.2em] uppercase block">
              ( {faqCategories.find(c => c.id === activeCategory)?.label?.toUpperCase()} )
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-blue italic leading-snug">
              Common questions we get asked
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
                  className="w-full py-8 flex items-start justify-between text-left gap-6 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-brand-orange/40 font-mono text-sm font-bold mt-1 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-xl md:text-2xl font-serif transition-colors duration-300 leading-snug ${
                      activeIndex === index ? 'text-brand-orange' : 'text-brand-blue group-hover:text-brand-orange'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 mt-1 ${
                    activeIndex === index
                      ? 'bg-brand-orange border-brand-orange text-white rotate-45'
                      : 'border-gray-200 text-gray-400 group-hover:border-brand-orange group-hover:text-brand-orange'
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
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-10 pb-8 pr-16 text-gray-500 text-lg font-light leading-relaxed">
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
      <section className="py-24 bg-[#B97758]">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-white/60 text-[12px] font-bold tracking-[0.2em] uppercase block">
              ( READY TO START? )
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white italic leading-tight">
              Your transformation begins with a single session
            </h2>
            <p className="text-white/70 text-lg font-light max-w-xl mx-auto">
              Join thousands of people who have already transformed their lives through the power of clinical hypnotherapy.
            </p>
          </motion.div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-10 py-4 bg-white text-brand-orange rounded-full font-bold text-base hover:bg-[#15202B] hover:text-white transition-all duration-300 shadow-lg">
              BOOK A SESSION
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-base hover:bg-white hover:text-brand-orange transition-all duration-300">
              FREE DISCOVERY CALL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
