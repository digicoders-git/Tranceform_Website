import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import API_URL from '../config';

const staticTestimonials = [
  {
    id: 18,
    name: "Sherry Grandmaison",
    location: "Global",
    service: "Smoking Cessation",
    rating: 5,
    avatar: "SG",
    color: "bg-red-400",
    short: "I have tried for years to quit smoking. It's only been a few days and currently I am smoke free!!",
    full: "I met with pooja on Saturday Feb2, 2020 and was very impressed with her approach. I have tried for years to quit smoking using various methods but went back to it. It's only been a few days and currently I am smoke free!! I see it differently now due to Pooja and her methods. Needless to say I was VERY impressed!!! Thank You Pooja for your help!"
  },
  {
    id: 19,
    name: "Stacey Chuang - Happy Soul",
    location: "International",
    service: "Subconscious Discovery",
    rating: 5,
    avatar: "SC",
    color: "bg-orange-400",
    short: "It was so easy to follow her voice to go to the subconscious level to discover yourself.",
    full: "It was a pleasant journey with Pooja. Forget about what you have been searching on the internet. With Pooja was totally different experience. Pooja started with conversation to understand what's the problem and what kind of help I need. And most importantly if I have strong will to make the change. it was so easy to follow her voice to go to the subconscious level to discover yourself. And woke up seeing her smiling face, I know that the thing I was worry about will be alright."
  },
  {
    id: 20,
    name: "Valentina - Happy Soul",
    location: "International",
    service: "Confidence & Pain Relief",
    rating: 5,
    avatar: "VA",
    color: "bg-yellow-400",
    short: "She managed to bring back my confidence and I have no longer any kind of physical pain.",
    full: "Just after two sessions with Pooja I can say that I feel like a new me, she managed to bring back my confidence, she made me forget about stress and anxiety and more than that, to have no longer any kind of physical pain. I learned to love and appreciate myself, things that I never did before. I'm really grateful of meeting Pooja, she is a great listener and incredibly empathetic."
  },
  {
    id: 21,
    name: "Johan - Happy Soul",
    location: "International",
    service: "Focus & Sleep Improvement",
    rating: 5,
    avatar: "JO",
    color: "bg-green-400",
    short: "Now I sleep better every night. I feel much more positive, optimistic, resilient, and calmer than before.",
    full: "First of all, thank you very much. I felt great after a session and that feeling persisted. Now I sleep better every night. I feel much more positive, optimistic, resilient, and calmer than before. You helped and guided me clear away the unimportant things and focus on what needed to be done."
  },
  {
    id: 22,
    name: "Anonymous - Housewife",
    location: "International",
    service: "Perception & Control",
    rating: 5,
    avatar: "HW",
    color: "bg-blue-400",
    short: "Cleared a lot of my dilemmas and gave a better way to accept and approach people and situations.",
    full: "The few sessions I had with Pooja (Tranceform Hypnotherapy), cleared a lot of my dilemmas and gave a better way to accept and approach people and situations. Perception of situations improved. Feel in control of myself. I would definitely recommend a few sessions with her. She is very caring and puts a person at ease. So one enjoys these sittings... and does ultimately feel the change."
  },
  {
    id: 23,
    name: "Ms.R - Happy Soul",
    location: "International",
    service: "Subconscious Power",
    rating: 5,
    avatar: "MR",
    color: "bg-indigo-400",
    short: "Never imagined how provoking it is to alter your subconscious mind. Necessary for everyday life.",
    full: "Wonderful experience as a first-timer. Never imagined how provoking it is to alter your subconscious mind. It makes you realise its understated yet powerful effects on the conscious mind - necessary for your everyday life. And with Pooja’s voice, it’s definitely a must-try!"
  },
  {
    id: 24,
    name: "Anonymous - Student",
    location: "International",
    service: "Stress & Anxiety Relief",
    rating: 5,
    avatar: "ST",
    color: "bg-purple-400",
    short: "With just one session my mind was put to rest and weight was lifted off my shoulders.",
    full: "Can't quite describe how enlightening the entire process was. Pooja's soothing voice allowed me to go in deep. With just one session my mind was put to rest and weight was lifted off my shoulders. Would highly recommend for anyone dealing with stress or anxiety."
  },
  {
    id: 14,
    name: "Anonymous - Crypto Trader",
    location: "Global",
    service: "Mental Focus & Ancestral Healing",
    rating: 5,
    avatar: "CT",
    color: "bg-yellow-500",
    short: "Pooja managed to realign my focus making incredible trades once again. Mind blowing.",
    full: "As a Crypto Trader I found myself with some mental blocks, Pooja managed to realign my focus making incredible trades once's again. It truly is mind blowing how our ancestors have an effect on our current state, in so many ways. I can highly recommend Pooja as a therapist, the after care and continued support."
  },
  {
    id: 15,
    name: "Anonymous - Happy Soul",
    location: "International",
    service: "Self-Awareness & Growth",
    rating: 5,
    avatar: "HS",
    color: "bg-indigo-400",
    short: "This therapy has been one of the best investment I made in my life. My life improved. A lot.",
    full: "Like many I thought I was strong enough to deal with my own issues. Turned out it's not about strength, it's all about awareness. While I was a bit sceptical, I felt like giving hypnotherapy a chance and I am incredibly happy I did that. This therapy has been one of the best investment I made in my life. It took in my case less than two months to make a difference and notice a different approach I have with myself, people and life. Mrs Pooja is not only a great therapist but as well a beautiful human being. I always felt comfortable talking with her and she always checked on me during the week to see how I was feeling. My life improved. A lot. Couldn't be more happy to share here my experience. Good luck to you all."
  },
  {
    id: 16,
    name: "Jatarat Ongtilarnon - Happy Soul",
    location: "Global",
    service: "Professional Hypnotherapy",
    rating: 5,
    avatar: "JO",
    color: "bg-rose-400",
    short: "Now I feel that I trust her as an old close friend cause she brought me to see key success.",
    full: "I can say that I am very lucky to know Pooja. She is very kind lady who have the good mind, professional experience and intention to help her customers to solve the problems and find happiness on her therapy ways. Now I feel that I trust her as an old close friend cause she brought me to see what is the key success to pass the problems with what is important for life with her good warm care."
  },
  {
    id: 17,
    name: "Anonymous - Happy Soul",
    location: "International",
    service: "Healing & Mindset Evolution",
    rating: 5,
    avatar: "HS",
    color: "bg-teal-400",
    short: "I found out there is much more in me that I need to heal. All I say now is it's working.",
    full: "I went to see Pooja for something I think it was a big deal, however, after sitting and talking with her for the first session I found out there is much more in me that I need to heal so I committed to 4 more sessions with her, after 2 sessions I can tell the different. I become happier than I was. Pooja is very caring and attentive even outside the session. Thank you for your kind help, I'm still healing, but all I say now is it's working."
  },
  {
    id: 11,
    name: "Anonymous - Joyful Spirit",
    location: "London, UK",
    service: "Self-Love & Clarity",
    rating: 5,
    avatar: "JS",
    color: "bg-pink-400",
    short: "Two sessions with Pooja gave me lot of clarity about me expressing, loving and valuing myself.",
    full: "Getting a session with Pooja was a wonderful experience. I have been always on giving side in all my relationships and two sessions with pooja gave me lot of clarity about me expressing, loving and valuing myself. Thank u dear. Highly recommend to do sessions with her."
  },
  {
    id: 12,
    name: "Anonymous - Happy Soul",
    location: "London, UK",
    service: "Meditation & Coaching",
    rating: 5,
    avatar: "HS",
    color: "bg-cyan-400",
    short: "She brought me on some very beautiful, vulnerable and healing journeys through deep meditations.",
    full: "I was in a place where I felt stuck regarding several aspects of my life, and I had been curious about hypnotherapy for a while. After a short searching I was pulled to Tranceform and the energy and vibe I got from the other reviews here. I knew from my first talk with Pooja that I had come to the right place, and she brought me on some very beautiful, vulnerable and healing journeys through deep meditations and coaching questions. After a few sessions I did feel some blockages go away and on our last call I was in a very different state compared to our first. I will forever hold some of the tools and images our sessions together brought me and would warmly recommend hypnotherapy with Pooja and Tranceform."
  },
  {
    id: 13,
    name: "Anonymous - Happy Soul",
    location: "London, UK",
    service: "Burnout Recovery",
    rating: 5,
    avatar: "HS",
    color: "bg-emerald-400",
    short: "Pooja helped me to take a step back, relax and build awareness by going deep into my own thinking patterns.",
    full: "I had gone to Pooja in very drained state. I was plagued with burnout from overworking & my own stresses/pressures. Pooja helped me to take a step back, relax and build awareness by going deep into my own thinking patterns in my life, which I had no idea of. She's helped me to go back & look at specific issues in my life and reframe them with a positive & more constructive outlook. I never had knowledge of these tools before & I found them so useful. Pooja as a hypnotherapist was also very patient & kind with me. She was able to discern what was going on & guide me specifically with written exercises that helped me to unravel and understand some of the issues I was dealing with and find productive ways to come unstuck and move forward. I am super grateful to have met her. Thank you Pooja <3"
  },
  {
    id: 10,
    name: "N Goh - Contented Being",
    location: "Singapore / Bangkok",
    service: "Trauma Healing & Personal Growth",
    rating: 5,
    avatar: "NG",
    color: "bg-amber-400",
    short: "I've been practicing what were taught and it is definitely helping me turn my life around slowly.",
    full: "I like to think that I met Pooja by fate & curiosity. I Was traveling to Bangkok for work from Singapore in July 2023 and was searching for meaningful activities to do for myself. Having always been curious about hypnotherapy, I decided to try a session with Pooja as I was going through a rough patch with my family and trying to heal from past trauma. During the first session, she gave a thorough explanation of how the therapy sessions would be like, and explained that the outcome is for me to learn tools and techniques so I can cope better on my own, instead of constantly having to head back for therapy. I found that the homework prescribed helped tremendously on my mental recovery, as it forced me to confront the past and address issues I've been burying. Throughout the sessions that I had with her, I felt safe to express my truest thoughts without fear of being judged. I've been practicing what were taught and it is definitely helping me turn my life around slowly. I'm truly grateful for this experience and am very happy I found both a therapist and a friend in Pooja."
  },
  {
    id: 1,
    name: "Anonymous - Radiant Soul",
    location: "London, UK",
    service: "Smoking Cessation",
    rating: 5,
    avatar: "RS",
    color: "bg-rose-400",
    short: "After just two sessions, I feel like a completely different person. I'm finally smoke-free.",
    full: "I cannot express enough gratitude for the incredible experience I had. I went to Pooja with the intention of finally putting an end to my smoking habit, and I can confidently say that after just two sessions, I feel like a completely different person. From the moment I walked into her office, she made me feel welcomed and understood. She has this amazing ability to listen attentively. Thank you for giving me the tools and support I needed to finally let go of smoking and embrace a healthier, smoke-free life."
  },
  {
    id: 2,
    name: "J O - Exuberant Heart",
    location: "London, UK",
    service: "Mindset & Subconscious Work",
    rating: 5,
    avatar: "JO",
    color: "bg-blue-400",
    short: "Working with Pooja was life-changing. I'm amazed by the results and the insight provided.",
    full: "Working with Pooja was life-changing. I'm amazed by the results! The insight she provided me, the sessions, and tools to shift my mindset were highly useful and have really had an impact in removing some issues I was having with negative self-talk and being stuck. I now feel more empowered and clear-headed than ever before."
  },
  {
    id: 3,
    name: "Anonymous - Cheerful Heart",
    location: "Manchester, UK",
    service: "Emotional & Spiritual Healing",
    rating: 5,
    avatar: "AC",
    color: "bg-purple-400",
    short: "I am in so much of a better place emotionally, spiritually and physically.",
    full: "I just want to say thank you for the help and guidance you have given me so far. I was reflecting on it this morning and I am in so much if a better place emotionally, spiritually and physically. I'm looking forward to working with you more. The transformation has been profound and deep."
  },
  {
    id: 4,
    name: "Anonymous - Positive Energy",
    location: "Birmingham, UK",
    service: "Growth & Positive Mindset",
    rating: 5,
    avatar: "PE",
    color: "bg-teal-400",
    short: "Her guidance has truly transformed my internal narrative into a much more positive one.",
    full: "I have had the privilege of working with Pooja for the past couple of months, and her guidance has truly transformed my internal narrative into a much more positive one. Pooja's dedication goes beyond our regular sessions; she frequently checks in between sessions, demonstrating her genuine investment in my growth and healing. Her commitment to my wellbeing has been both inspiring and instrumental in my journey towards a more positive mindset. I highly recommend Pooja to anyone seeking meaningful and compassionate support."
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
    name: "Anonymous - Radiant Soul",
    location: "London, UK",
    service: "Self-Esteem & Awareness",
    rating: 5,
    avatar: "RS",
    color: "bg-indigo-400",
    short: "My self esteem gets better and my anxiety has reduced significantly.",
    full: "Mrs Pooja is a real professional when it comes to hypnotherapy. My self esteem gets better, reduce anxiety. I can say that I'm more aware and knowing myself more through therapies. And she's always there for me professionally when I need her help. Thank you for the incredible support and guidance."
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
  { value: '4.9/5', label: 'Average Rating', sub: 'ACROSS 1,200+ REVIEWS' },
  { value: '98%', label: 'Would Recommend', sub: 'TO FRIENDS AND FAMILY' },
  { value: '4.2K+', label: 'Lives Transformed', sub: 'SINCE 2009' },
  { value: '93%', label: 'See Results', sub: 'WITHIN 3 SESSIONS' },
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
  const [apiTestimonials, setApiTestimonials] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/testimonials`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setApiTestimonials(data.map(t => ({
            id: t._id,
            name: t.name,
            location: t.location || '',
            service: t.service || '',
            rating: t.rating || 5,
            avatar: t.avatar || t.name.slice(0, 2).toUpperCase(),
            color: t.color || 'bg-brand-orange',
            short: t.short || t.text || '',
            full: t.full || t.text || '',
          })));
        }
      })
      .catch(() => {});
  }, []);

  const testimonials = [...staticTestimonials, ...apiTestimonials];

  const prev = () => setFeatured(f => (f - 1 + testimonials.length) % testimonials.length);
  const next = () => setFeatured(f => (f + 1) % testimonials.length);
  const ft = testimonials[featured];

  return (
    <div className="min-h-screen">

      {/* ─── Hero ─── */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-linear-to-br from-[#15202B] via-[#0F1722] to-[#15202B]">
        {/* Subtle Accent Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A67C52]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A67C52]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="absolute inset-0 bg-linear-to-t from-[#15202B] via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-7xl pt-40 pb-12 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-4 max-w-3xl"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#A67C52]" />
              <span className="text-[#A67C52] text-xs font-medium tracking-[0.4em] uppercase">
                ( CLIENT STORIES )
              </span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-serif leading-[1.1]">
              Real People. <br />
              <span className="text-[#A67C52]">Real Transformations.</span>
            </h1>
          </motion.div>
        </div>
      </section>




      {/* ─── All Reviews Grid ─── */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="mb-16 space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#A67C52]" />
              <span className="text-[#A67C52] text-[12px] font-medium tracking-[0.4em] uppercase block">
                ( ALL REVIEWS )
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-brand-blue leading-tight tracking-tight">
              Every story <span className="text-[#A67C52] serif">matters</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col h-full bg-white rounded-[40px] p-10 border border-gray-100/80 hover:border-[#A67C52]/40 hover:shadow-[0_40px_80px_-15px_rgba(166,124,82,0.12)] hover:-translate-y-3 transition-all duration-700 space-y-7 group relative overflow-hidden"
              >
                {/* Decorative Hover Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A67C52]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2" />
                
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 ${t.color.includes('#1E2A3A') ? 'bg-[#15202B]' : t.color} rounded-2xl flex items-center justify-center text-white text-base font-serif shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-serif text-brand-blue text-lg tracking-tight group-hover:text-[#A67C52] transition-colors duration-300">{t.name}</h4>
                    </div>
                  </div>
                  <Quote className="w-10 h-10 text-[#A67C52]/10 group-hover:text-[#A67C52]/20 group-hover:scale-110 transition-all duration-500 self-start" />
                </div>

                {/* Service badge */}
                <span className="inline-block px-4 py-1.5 bg-[#A67C52]/5 text-[#A67C52] text-[10px] font-medium tracking-widest uppercase rounded-full border border-[#A67C52]/10 group-hover:bg-[#A67C52]/10 group-hover:border-[#A67C52]/20 transition-colors duration-500">
                  {t.service}
                </span>

                {/* Quote */}
                <div className="relative flex-grow">
                  <p className="text-black/80 text-xl font-normal leading-relaxed serif">
                    "{expanded === t.id ? t.full : t.short}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setExpanded(expanded === t.id ? null : t.id)}
                    className="text-[#A67C52] text-xs font-medium tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  >
                    {expanded === t.id ? 'Show less ↑' : 'Read full story →'}
                  </button>
                  
                  {/* Verified badge */}
                  <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-medium tracking-widest uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A67C52]" />
                    Verified
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-32 bg-[#15202B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A67C52] blur-[150px] rounded-full" />
        </div>

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
                ( YOUR STORY STARTS HERE )
              </span>
              <div className="h-[1px] w-12 bg-[#A67C52]/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              The next success story <br />
              could be <span className="text-[#A67C52] serif">yours</span>
            </h2>
            <p className="text-white/70 text-xl font-light max-w-2xl mx-auto leading-relaxed serif">
              Join thousands of people who chose to invest in themselves. Your first step begins with a single session.
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

export default TestimonialsPage;
