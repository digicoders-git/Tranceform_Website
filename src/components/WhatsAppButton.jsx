import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
    <path d="M12.004 2.01C6.486 2.01 2 6.495 2 12.015c0 1.765.46 3.483 1.332 5.003L2 22l5.122-1.343A9.957 9.957 0 0012.004 22c5.518 0 10.004-4.486 10.004-10.005S17.522 2.01 12.004 2.01zm5.186 14.542c-.22.617-1.282 1.18-1.782 1.235-.41.045-.94.136-3.085-.75-2.58-1.066-4.24-3.702-4.37-3.876-.13-.173-1.046-1.39-1.046-2.653 0-1.263.66-1.886.89-2.132.23-.245.503-.306.67-.306s.334 0 .47-.008h.001c.15-.01.353-.058.552.423.21.503.712 1.737.772 1.86.06.122.1.266.02.43-.08.163-.12.266-.24.41-.12.144-.253.308-.363.41-.12.112-.25.234-.11.478.14.244.622 1.033 1.336 1.673.92.825 1.697 1.082 1.943 1.194.246.112.39.092.534-.07.144-.164.622-.725.79-1.02.168-.296.336-.246.562-.163.226.08 1.433.674 1.678.796.245.122.408.183.47.286.06.102.06.59-.16 1.207z" />
  </svg>
);

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "442071234567"; // Can be replaced with actual WhatsApp number
  const message = "Hello, I would like to book a quick consultation or know more about Tranceform Hypnotherapy.";

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
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 left-8 z-[99] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon />
          
          {/* Tooltip on Hover */}
          <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-xl border border-gray-100 whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
