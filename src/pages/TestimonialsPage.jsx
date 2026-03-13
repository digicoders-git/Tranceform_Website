import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "London, UK",
    service: "Anxiety Treatment",
    rating: 5,
    avatar: "SM",
    color: "bg-rose-400",
    short: "I couldn't leave my house without having a panic attack. After just 3 sessions, I feel like a completely different person.",
    full: "I had been struggling with severe anxiety and panic attacks for over 4 years. I tried medication, CBT, and even meditation apps — nothing gave me lasting relief. A friend recommended Tranceform and honestly it changed my life. After my very first session I slept better than I had in years. By the third session, the panic attacks had virtually stopped. My therapist had an incredible ability to make me feel safe while going deep into the patterns driving my anxiety. I'm now back to doing things I hadn't done in years — travelling, socialising, even public speaking at work. I cannot recommend this enough."
  },
  {
    id: 2,
    name: "James O'Brien",
    location: "Dublin, Ireland",
    service: "Stop Smoking",
    rating: 5,
    avatar: "JO",
    color: "bg-blue-400",
    short: "I smoked for 22 years. After ONE session I walked out and never lit another cigarette. It still amazes me.",
    full: "I was a heavy smoker for 22 years — at my worst, 25 cigarettes a day. I had tried patches, gum, Champix, and cold turkey more times than I can remember. My wife was terrified for my health. I came to Tranceform thinking it probably wouldn't work, but I had nothing left to try. The session was nothing like I expected. I felt deeply relaxed and calm throughout. When I walked out, I genuinely didn't want a cigarette. That was 14 months ago. I've had zero — not one — relapse. My lungs are clearer, my energy is back, and I've saved thousands of pounds. Best investment of my life."
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Birmingham, UK",
    service: "Inner Child Healing",
    rating: 5,
    avatar: "PS",
    color: "bg-purple-400",
    short: "I finally understand why I've always felt 'not enough'. The inner child work unlocked something profound in me.",
    full: "I came to Tranceform after years of therapy that helped intellectually but never truly shifted the deep sense of shame and unworthiness I'd carried since childhood. The inner child sessions were different — profoundly, powerfully different. During one session I was guided back to a memory I had completely forgotten, and I sobbed in a way that felt like releasing something I'd been holding for 30 years. In the weeks that followed, I noticed changes I couldn't explain rationally — I was kinder to myself, less reactive, able to set boundaries I'd never managed before. My relationships improved. My therapist was exceptional throughout. I am in awe of this process."
  },
  {
    id: 4,
    name: "Michael Chen",
    location: "Manchester, UK",
    service: "Hypnotherapy For Reducing Pain",
    rating: 5,
    avatar: "MC",
    color: "bg-teal-400",
    short: "Living with fibromyalgia was exhausting. Hypnotherapy cut my pain levels in half without adding another pill.",
    full: "I was diagnosed with fibromyalgia 6 years ago and had been managing it entirely through medication — which helped, but not enough, and came with side effects I hated. My pain consultant suggested I try hypnotherapy as a complementary therapy. I was cynical but desperate. Within 4 sessions the chronic background pain had reduced dramatically. I also learned self-hypnosis techniques I now use daily — they take 15 minutes and give me real relief within minutes. I've since been able to reduce one of my medications in consultation with my doctor. Tranceform has given me a quality of life I thought I'd lost forever."
  },
  {
    id: 5,
    name: "Emma Lawson",
    location: "Edinburgh, Scotland",
    service: "Past Life Regression",
    rating: 5,
    avatar: "EL",
    color: "bg-[#1E2A3A]mber-400",
    short: "I had a lifelong, unexplained fear of water. One PLR session revealed its origin and it simply dissolved.",
    full: "I have been terrified of deep water my entire life — irrationally and completely. I couldn't even stand near the edge of a swimming pool. After hearing about past life regression, I approached it with curiosity rather than expectation. What I experienced during the session was extraordinary — vivid, emotionally real, and clearly connected to my present phobia. I don't want to share the details publicly, but what I will say is this: I cried deeply, felt a powerful sense of release, and when I left I felt lighter than I had in decades. Within a month, I was swimming. I still can't fully explain it — but I don't need to. The fear is gone."
  },
  {
    id: 6,
    name: "Rachel Thompson",
    location: "Bristol, UK",
    service: "Stress Management",
    rating: 5,
    avatar: "RT",
    color: "bg-green-400",
    short: "My cortisol levels, my sleep, my mood — all transformed. Hypnotherapy was the missing piece of my wellness puzzle.",
    full: "I'm a GP and approached hypnotherapy with evidence-based scepticism. My own chronic stress had begun affecting my sleep, immune system, and ability to be present with my family. I tried hypnotherapy as a last resort before considering medication myself. The sessions were extraordinary from a clinical perspective — I could observe exactly what was happening neurologically even as I was experiencing it. My therapist used a combination of direct suggestion, visualisation, and parts therapy. By session three my sleep had normalised completely. My resting heart rate dropped 8 points. Colleagues have noticed a change. I now refer patients to hypnotherapy regularly."
  },
  {
    id: 7,
    name: "David Okafor",
    location: "Leeds, UK",
    service: "Eliminate Anxiety & Stress",
    rating: 5,
    avatar: "DO",
    color: "bg-indigo-400",
    short: "I was on the verge of quitting a career I loved because of presentation anxiety. Hypnotherapy saved it.",
    full: "I'm a senior consultant and my job requires frequent client presentations. For 3 years I had been suffering debilitating performance anxiety — heart racing, voice shaking, mind going blank. It was getting worse and I was seriously considering switching careers. A colleague mentioned she had used hypnotherapy for public speaking nerves with incredible results. I booked a session feeling embarrassed and sceptical. The transformation was swift and undeniable. My therapist worked not just on the surface symptoms but on the deep-rooted belief driving the anxiety. Within 6 weeks I had delivered the best presentation of my career. I've since spoken to 300 people at a conference. No medication, no notes, no panic. Just me."
  },
  {
    id: 8,
    name: "Anita Patel",
    location: "Leicester, UK",
    service: "Manage Phobias And Addictions",
    rating: 5,
    avatar: "AP",
    color: "bg-pink-400",
    short: "My needle phobia was stopping me from getting essential medical care. Two sessions and it's completely gone.",
    full: "I have a severe phobia of needles going back to childhood. It had reached a point where I was refusing blood tests, vaccinations, and even dental procedures — my health was suffering as a result. I'd tried exposure therapy twice with limited success. My doctor suggested hypnotherapy as a genuinely effective alternative. The sessions focused on the original root of the fear and completely reframed how my subconscious processed needles. After the second session, I had a blood test done. I won't say it was enjoyable — but the panic was simply not there. I was calm. The nurse couldn't believe it when I told her where I'd been six months earlier. Genuinely life-changing."
  },
  {
    id: 9,
    name: "Tom Bradley",
    location: "Cardiff, Wales",
    service: "Heal Your Inner Child",
    rating: 5,
    avatar: "TB",
    color: "bg-orange-400",
    short: "I've been in therapy for years. Nothing touched the depth of healing that two sessions of inner child work achieved.",
    full: "As a man in my 40s, I came to hypnotherapy feeling slightly embarrassed about 'inner child work'. I left those sessions having experienced something I struggle to put into words. I grew up in a household where I learned very early to suppress emotion, be 'strong', and never ask for help. Those patterns had quietly destroyed two marriages and countless friendships. In the sessions, I encountered a version of myself I hadn't seen since I was very small — and felt something shift on a level I'd never accessed through any other form of therapy. I am more emotionally available to my children now. I understand myself. I actually ask for help. Don't let pride stop you from doing this work. It's the most important thing I've ever done."
  }
];

const stats = [
  { value: '4.9/5', label: 'Average Rating', sub: 'Across 1,200+ reviews' },
  { value: '98%', label: 'Would Recommend', sub: 'To friends and family' },
  { value: '4.2K+', label: 'Lives Transformed', sub: 'Since 2009' },
  { value: '93%', label: 'See Results', sub: 'Within 3 sessions' },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-brand-bluember-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`} />
    ))}
  </div>
);

const TestimonialsPage = () => {
  const [expanded, setExpanded] = useState(null);
  const [featured, setFeatured] = useState(0);

  const prev = () => setFeatured(f => (f - 1 + testimonials.length) % testimonials.length);
  const next = () => setFeatured(f => (f + 1) % testimonials.length);
  const ft = testimonials[featured];

  return (
    <div className="min-h-screen bg-white">

      {/* ─── Hero ─── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-[#1E2A3A]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: 'url(/slider2.png)' }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-7xl pt-36 pb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-5 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full">
              Client Stories
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-serif italic leading-tight">
              Real People. Real Transformations.
            </h1>
            <p className="text-white/70 text-lg font-light max-w-xl">
              Hear directly from the people whose lives have been changed through the power of clinical hypnotherapy at Tranceform.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-10 pt-4"
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-serif text-brand-orange">{s.value}</div>
                <div className="text-white font-semibold text-sm">{s.label}</div>
                <div className="text-white/40 text-xs">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ─── All Reviews Grid ─── */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="mb-16 space-y-3">
            <span className="text-brand-orange text-[12px] font-bold tracking-[0.2em] uppercase block">
              ( ALL REVIEWS )
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-blue italic leading-snug">
              Every story matters
            </h2>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                viewport={{ once: true }}
                className="break-inside-avoid bg-white rounded-[28px] p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 space-y-5 inline-block w-full"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${t.color} rounded-2xl flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue text-sm">{t.name}</h4>
                      <p className="text-gray-400 text-xs">{t.location}</p>
                    </div>
                  </div>
                  <StarRating rating={t.rating} />
                </div>

                {/* Service badge */}
                <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-full">
                  {t.service}
                </span>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  "{expanded === t.id ? t.full : t.short}"
                </p>

                <button
                  onClick={() => setExpanded(expanded === t.id ? null : t.id)}
                  className="text-brand-orange text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {expanded === t.id ? 'Show less ↑' : 'Read full story →'}
                </button>

                {/* Verified badge */}
                <div className="flex items-center gap-1.5 text-gray-400 text-xs pt-1 border-t border-gray-50">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  Verified client
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-[#B97758]">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-white/60 text-[12px] font-bold tracking-[0.2em] uppercase block">
              ( YOUR STORY STARTS HERE )
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white italic leading-tight">
              The next success story could be yours
            </h2>
            <p className="text-white/70 text-lg font-light max-w-xl mx-auto">
              Join thousands of people who chose to invest in themselves. Your first step begins with a single session.
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

export default TestimonialsPage;
