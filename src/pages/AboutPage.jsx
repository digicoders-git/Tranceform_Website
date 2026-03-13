import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import AboutDiscovery from '../components/AboutDiscovery';
import HowItWorks from '../components/HowItWorks';
import TestimonialsSection from '../components/TestimonialsSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/slider1.png")', // Using slider1.png as it's typically high quality
            backgroundPosition: 'center top' 
          }}
        >
          {/* subtle overlay to let image show through while keeping text readable */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-6 px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-7xl md:text-[120px] font-serif italic font-bold leading-tight drop-shadow-2xl"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="h-1 w-24 bg-brand-orange mx-auto rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-white text-xl md:text-3xl font-light tracking-wide drop-shadow-lg italic"
          >
            "Get the right care from the people who care"
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Discovery Section */}
      <AboutDiscovery />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default AboutPage;
