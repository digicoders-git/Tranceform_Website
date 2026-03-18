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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#15202B] via-[#0F1722] to-[#15202B]">
        {/* Subtle Accent Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A67C52]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A67C52]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="absolute inset-0 bg-linear-to-b from-[#15202B]/20 via-transparent to-[#15202B]/40" />
 
        {/* Content */}
        <div className="relative z-10 text-center space-y-8 px-6 max-w-5xl pt-40 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-6 mb-4"
          >
            <div className="h-[1px] w-12 bg-[#A67C52]/50" />
            <span className="text-[#A67C52] text-sm md:text-base font-medium tracking-[0.4em] uppercase">
              ( OUR STORY )
            </span>
            <div className="h-[1px] w-12 bg-[#A67C52]/50" />
          </motion.div>
 
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-4xl md:text-6xl font-serif leading-[0.9] drop-shadow-2xl"
          >
            About <span className="serif text-[#A67C52]">Us</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-white/80 text-lg md:text-xl font-light tracking-wide serif max-w-3xl mx-auto leading-relaxed"
          >
            "Get the right care from the people who care"
          </motion.p>
        </div>
      </section>

      {/* 5. About Pooja (Now Section 1) */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative group max-w-[420px] mx-auto lg:ml-12 lg:mr-0"
            >
              <div className="absolute -inset-4 border border-[#A67C52]/20 rounded-[50px] transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-700" />
              <img 
                src="/images/image3.png" 
                alt="Pooja - Transformed Mind" 
                loading="lazy"
                className="rounded-[40px] shadow-2xl w-full h-[450px] object-cover object-top ring-1 ring-black/5 bg-gray-50"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#A67C52] p-8 rounded-[25px] shadow-2xl text-white transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-2xl font-serif block">Tranceform*</span>
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">with Pooja</span>
              </div>
            </motion.div>
 
            <div className="space-y-10">
              <div className="space-y-6">
                <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
                  ( THE FOUNDER )
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-brand-blue leading-tight">About Pooja</h2>
                <div className="h-1.5 w-20 bg-[#A67C52]/20 rounded-full" />
              </div>
              <div className="space-y-6 text-black font-normal text-lg leading-relaxed tracking-tight">
                <p>
                  My work is rooted in the belief that many of the struggles we carry in adult life are connected to earlier emotional experiences and subconscious beliefs that were formed long ago.
                </p>
                <p>
                  Over the years I have had the privilege of working with clients from many different backgrounds, each bringing their own unique story and inner world. What matters most to me is that each person who sits across from me feels safe, understood, and genuinely supported.
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-brand-blue font-serif text-xl leading-relaxed">
                    "Healing is not about forcing yourself to change. It is about understanding the deeper patterns that shaped you, meeting them with compassion, and creating space for something new to emerge."
                  </p>
                </div>
                <p className="text-black/60 font-light">
                  This is the heart of the work I do through Tranceform with Pooja.
                </p>
              </div>
            </div>
          </div>
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

      {/* 6. Process Section */}
      <ProcessSection />
 
      {/* 7. Gentle Closing (Section 10) */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-gray-100 to-transparent" />
        
        <div className="container mx-auto px-6 text-center max-w-4xl space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <p className="text-3xl md:text-5xl font-serif text-brand-blue leading-[1.2] max-w-3xl mx-auto">
              "Real transformation does not happen by forcing yourself to be different. It begins by understanding yourself more deeply."
            </p>
            <div className="h-1 w-20 bg-[#A67C52]/30 mx-auto rounded-full" />
            <p className="text-black font-normal text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              When the mind and nervous system finally feel safe enough, change often happens more naturally than we expect.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-6">
            <button 
              onClick={() => setIsAppointmentModalOpen(true)}
              className="px-12 py-5 bg-[#A67C52] text-white rounded-full font-medium shadow-2xl hover:bg-brand-blue transition-all active:scale-95 text-xs tracking-[0.2em] uppercase"
            >
              BOOK A SESSION
            </button>
            <a 
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 border-2 border-brand-blue text-brand-blue rounded-full font-medium hover:bg-brand-blue hover:text-white transition-all active:scale-95 text-center text-xs tracking-[0.2em] uppercase"
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
