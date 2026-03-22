import React from 'react';
import { motion } from 'framer-motion';

const AreasIWorkWith = () => {
  return (
    <section className="py-12 bg-[#15202B] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A67C52]/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Large Decorative Text (Smaller) */}
      <div className="absolute -top-10 -right-10 text-[10rem] font-serif text-white/5 select-none pointer-events-none">
        Care
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-12 bg-[#A67C52]" />
            <span className="text-[#A67C52] text-[12px] font-bold tracking-[0.4em] uppercase block">
              ( AREAS I WORK WITH )
            </span>
            <div className="h-[1px] w-12 bg-[#A67C52]" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight font-medium max-w-3xl mx-auto">
            How hypnotherapy <span className="text-[#A67C52] italic">can help</span>
          </h2>
          <p className="text-white/60 font-light text-base max-w-2xl mx-auto line-clamp-2 md:line-clamp-none">
            Addressing the root causes and emotional patterns through dedicated, safe, and effective sessions.
          </p>
        </div>

        <div className="relative overflow-hidden -mx-6 md:-mx-12">
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex gap-4 py-2 px-6 md:px-12"
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                duration: 30, // Slightly faster for fewer items
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
              hover={{ animationPlayState: 'paused' }}
              style={{ width: "max-content", display: "flex" }}
            >
              {[
                { 
                  title: "Anxiety & Nervous System Safety", 
                  image: "/images/anxiety.png",
                  desc: "Anxiety isn’t always obvious. Sometimes it looks like overthinking, needing control, or constantly preparing for what might go wrong. We gently explore what your anxiety is trying to protect."
                },
                { 
                  title: "Relationship Patterns & Attachment", 
                  image: "/images/relationship.png",
                  desc: "You may notice that even when the person changes, the feeling doesn’t. We begin to understand the deeper emotional blueprint behind your relationships to start responding from a place that feels calmer."
                },
                { 
                  title: "Self-Sabotage & Protection", 
                  image: "/images/self_sabotage.png",
                  desc: "This isn’t a lack of discipline, it’s often a protective pattern. We understand why being visible or fully yourself may not have felt safe, helping change happen more naturally."
                },
                { 
                  title: "Inner Child Healing", 
                  image: "/images/healing.png",
                  desc: "Reconnecting with younger parts of you still carrying feelings that were never fully processed, finally giving them the safety, understanding, and support they needed."
                },
                { 
                  title: "Trauma & Emotional Healing", 
                  image: "/images/trauma_healing.png",
                  desc: "Trauma lives in how quickly you feel overwhelmed or how your body reacts even when you know you’re safe. We focus on creating safety first, then gently release what is no longer needed."
                },
                { 
                  title: "Addiction & Behavioral Change", 
                  image: "/images/addiction.png",
                  desc: "Habits are rarely just about the habit itself—they are connected to stress or discomfort. We understand the need behind the habit while creating new ways for your mind and body to respond."
                }
              ].map((area, idx) => (
                <div 
                  key={idx}
                  className="w-[240px] md:w-[320px] h-[320px] md:h-[400px] shrink-0 relative rounded-[28px] overflow-hidden group/card shadow-2xl"
                >
                  <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#15202B] via-[#15202B]/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover content (Slides up) */}
                  <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <div className="space-y-3">
                      <h4 className="text-xl md:text-2xl font-serif text-white">{area.title}</h4>
                      <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light line-clamp-4">
                        {area.desc}
                      </p>
                      <div className="w-10 h-[2px] bg-[#A67C52]" />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate items for infinite scroll effect (one more time for the 6 items) */}
              {[
                { 
                  title: "Anxiety & Nervous System Safety", 
                  image: "/images/anxiety.png",
                  desc: "Anxiety isn’t always obvious. Sometimes it looks like overthinking, needing control, or constantly preparing for what might go wrong. We gently explore what your anxiety is trying to protect."
                },
                { 
                  title: "Relationship Patterns & Attachment", 
                  image: "/images/relationship.png",
                  desc: "You may notice that even when the person changes, the feeling doesn’t. We begin to understand the deeper emotional blueprint behind your relationships to start responding from a place that feels calmer."
                },
                { 
                  title: "Self-Sabotage & Protection", 
                  image: "/images/self_sabotage.png",
                  desc: "This isn’t a lack of discipline, it’s often a protective pattern. We understand why being visible or fully yourself may not have felt safe, helping change happen more naturally."
                },
                { 
                  title: "Inner Child Healing", 
                  image: "/images/healing.png",
                  desc: "Reconnecting with younger parts of you still carrying feelings that were never fully processed, finally giving them the safety, understanding, and support they needed."
                },
                { 
                  title: "Trauma & Emotional Healing", 
                  image: "/images/trauma_healing.png",
                  desc: "Trauma lives in how quickly you feel overwhelmed or how your body reacts even when you know you’re safe. We focus on creating safety first, then gently release what is no longer needed."
                },
                { 
                  title: "Addiction & Behavioral Change", 
                  image: "/images/addiction.png",
                  desc: "Habits are rarely just about the habit itself—they are connected to stress or discomfort. We understand the need behind the habit while creating new ways for your mind and body to respond."
                }
              ].map((area, idx) => (
                <div 
                  key={`dup-${idx}`}
                  className="w-[240px] md:w-[320px] h-[320px] md:h-[400px] shrink-0 relative rounded-[28px] overflow-hidden group/card shadow-2xl"
                >
                  <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-[#15202B] via-[#15202B]/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover content (Slides up) */}
                  <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out z-20">
                    <div className="space-y-3">
                      <h4 className="text-xl md:text-2xl font-serif text-white">{area.title}</h4>
                      <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light line-clamp-4">
                        {area.desc}
                      </p>
                      <div className="w-10 h-[2px] bg-[#A67C52]" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-16 flex justify-center opacity-40">
          <span className="text-white text-sm font-medium tracking-[0.2em] uppercase">Safe • Confidential • Science-based</span>
        </div>
      </div>
    </section>
  );
};

export default AreasIWorkWith;
