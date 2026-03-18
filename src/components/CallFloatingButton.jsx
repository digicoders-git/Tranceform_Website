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
          className="fixed bottom-24 left-8 z-[99] flex items-center justify-center w-14 h-14 bg-[#A67C52] text-white rounded-full shadow-[0_10px_30px_rgba(166,124,82,0.4)] hover:bg-[#8B6543] hover:shadow-[0_15px_40px_rgba(166,124,82,0.6)] hover:-translate-y-1 transition-all duration-300 group"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
          
          {/* Tooltip on Hover */}
          <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-xl border border-gray-100 whitespace-nowrap pointer-events-none">
            Call us now
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default CallFloatingButton;
