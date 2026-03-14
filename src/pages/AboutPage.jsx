import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import AboutDiscovery from '../components/AboutDiscovery';
import HowItWorks from '../components/HowItWorks';
import TestimonialsSection from '../components/TestimonialsSection';
import ProcessSection from '../components/ProcessSection';
import FAQSection from '../components/FAQSection';
import AppointmentModal from '../components/AppointmentModal';

const AboutPage = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const phoneNumber = "442071234567"; // Replace with actual number
  const message = "Hello, I would like to book a hypnotherapy session or know more about your services.";
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/images/about.jpg")', // Using high quality transformation image
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
            className="text-white text-6xl md:text-[90px] font-serif italic font-semibold leading-tight drop-shadow-2xl"
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

      {/* 5. About Pooja (Section 7) */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img 
                src="/images/image3.png" 
                alt="Pooja - Transformed Mind" 
                className="rounded-[40px] shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange p-10 rounded-[30px] shadow-xl text-white">
                <span className="text-3xl font-serif italic">Tranceform with Pooja</span>
              </div>
            </motion.div>

            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-brand-orange text-[13px] font-medium tracking-[0.3em] uppercase">
                  ( BIO )
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-blue font-medium">About Pooja</h2>
              </div>
              <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                <p>
                  My work is rooted in the belief that many of the struggles we carry in adult life are connected to earlier emotional experiences and subconscious beliefs that were formed long ago.
                </p>
                <p>
                  Over the years I have had the privilege of working with clients from many different backgrounds, each bringing their own unique story and inner world. What matters most to me is that each person who sits across from me feels safe, understood, and genuinely supported.
                </p>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-brand-blue font-medium italic">
                    "Healing is not about forcing yourself to change. It is about understanding the deeper patterns that shaped you, meeting them with compassion, and creating space for something new to emerge."
                  </p>
                </div>
                <p>
                  This is the heart of the work I do through Tranceform with Pooja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process Section */}
      <ProcessSection />

      {/* 7. Gentle Closing (Section 10) */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="container mx-auto px-6 text-center max-w-3xl space-y-8">
          <p className="text-2xl md:text-3xl font-serif text-brand-blue italic leading-relaxed">
            "Real transformation does not happen by forcing yourself to be different. It begins by understanding yourself more deeply."
          </p>
          <p className="text-gray-500 font-light text-lg">
            When the mind and nervous system finally feel safe enough, change often happens more naturally than we expect.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
            <button 
              onClick={() => setIsAppointmentModalOpen(true)}
              className="px-10 py-4 bg-brand-orange text-white rounded-full font-medium hover:bg-brand-blue transition-all shadow-lg active:scale-95"
            >
              BOOK A SESSION
            </button>
            <a 
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-brand-orange text-brand-orange rounded-full font-medium hover:bg-brand-orange hover:text-white transition-all active:scale-95 text-center"
            >
              MESSAGE ON WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default AboutPage;
