import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ isLoading }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const characters = "TRANCEFORM".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#15202B] overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A67C52] blur-[120px] rounded-full animate-pulse" />
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-12">
            {/* Animated Logo/Symbol */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.1, 1],
                opacity: 1,
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="relative w-24 h-24 mb-4"
            >
              <div className="absolute inset-0 border-2 border-[#A67C52] rounded-full opacity-20 scale-150 animate-ping" />
              <div className="absolute inset-0 border border-[#A67C52] rounded-full" />
              <div className="absolute inset-2 border-2 border-[#A67C52]/50 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-1 h-12 bg-[#A67C52] rounded-full rotate-45 absolute" />
                 <div className="w-12 h-1 bg-[#A67C52] rounded-full rotate-45 absolute" />
              </div>
            </motion.div>

            {/* Letter by Letter Animation */}
            <div className="flex space-x-2">
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    repeatType: "reverse"
                  }}
                  className="text-white text-3xl md:text-5xl font-serif tracking-[0.2em] serif"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Progress line */}
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-[#A67C52]"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-[#A67C52] text-[10px] tracking-[0.5em] uppercase font-medium pt-4"
            >
              Transforming Lives Since 2009
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
