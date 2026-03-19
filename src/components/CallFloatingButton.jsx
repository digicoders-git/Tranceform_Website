import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

const CallFloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+442071234567";

  useEffect(() => {
    // Show after 1.5s delay to let the initial animation play out
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          href={`tel:${phoneNumber}`}
          className="fixed bottom-40 left-0 z-[99] flex items-center bg-[#A67C52] text-white rounded-r-full shadow-[0_10px_30px_rgba(166,124,82,0.4)] hover:bg-[#8B6543] hover:shadow-[0_15px_40px_rgba(166,124,82,0.6)] transition-all duration-500 group -translate-x-[calc(100%-64px)] hover:translate-x-0 pr-4 pl-10 py-3 whitespace-nowrap overflow-hidden"
          aria-label="Call us"
        >
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[12px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              CALL US
            </span>
            <Phone className="w-6 h-6" />
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default CallFloatingButton;
