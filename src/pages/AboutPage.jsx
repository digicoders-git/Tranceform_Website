import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import AboutDiscovery from '../components/AboutDiscovery';
import HowItWorks from '../components/HowItWorks';
import TestimonialsSection from '../components/TestimonialsSection';
import ProcessSection from '../components/ProcessSection';
import JourneySection from '../components/JourneySection';
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{ 
                rotateY: 6,
                rotateX: 4,
                scale: 1.02,
                transition: { duration: 0.8, ease: "easeOut" }
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ perspective: "1000px" }}
              className="relative group max-w-[420px] mx-auto lg:ml-12 lg:mr-0 order-1 lg:order-1 cursor-pointer"
            >
              {/* Outer Glow Decor */}
              <div className="absolute -inset-6 bg-[#A67C52]/5 rounded-[60px] blur-2xl group-hover:bg-[#A67C52]/10 transition-colors duration-700" />
              
              <div className="absolute -inset-4 border-2 border-[#A67C52]/10 rounded-[50px] transform translate-x-4 translate-y-4 -z-10 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:border-[#A67C52]/30 duration-700" />
              
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-black/5 bg-gray-50">
                <img 
                  src="/images/image3.png" 
                  alt="Pooja - Transformed Mind" 
                  loading="lazy"
                  className="w-full h-[500px] object-cover object-top transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Floating Brand Badge */}
              <motion.div 
                animate={{
                  y: [0, -12, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-30"
              >
                <div className="bg-[#A67C52] p-7 md:p-9 rounded-[30px] shadow-3xl text-white w-[max-content] min-w-[200px] text-center border-4 border-white">
                  <span className="text-2xl md:text-3xl font-serif block leading-none">Tranceform*</span>
                  <span className="text-[9px] tracking-[0.3em] uppercase opacity-70 mt-2 block">with Pooja</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Right */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10 order-2 lg:order-2"
            >
              <div className="space-y-6">
                <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
                  ( THE FOUNDER )
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-brand-blue leading-tight">About Pooja</h2>
                <div className="h-1.5 w-20 bg-[#A67C52]/20 rounded-full" />
              </div>
              <div className="space-y-4 text-black font-normal text-lg leading-relaxed tracking-tight">
                <p>
                  My work is rooted in the belief that many of the struggles we carry in adult life are connected to earlier emotional experiences and subconscious beliefs that were formed long ago.
                </p>
                <p>
                  Over the years I have had the privilege of working with clients from many different backgrounds, each bringing their own unique story and inner world. What matters most to me is that each person who sits across from me feels safe, understood, and genuinely supported.
                </p>
                <div className="pt-4 border-t border-gray-100 mt-2">
                  <p className="text-brand-blue font-serif text-xl leading-relaxed">
                    "Healing is not about forcing yourself to change. It is about understanding the deeper patterns that shaped you, meeting them with compassion, and creating space for something new to emerge."
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-2">
                  <p className="text-[#15202B] font-medium text-xl md:text-2xl leading-snug">
                    This is the heart of the work I do through
                  </p>
                  <div className="flex items-center gap-6 mt-2">
                    <p className="text-[#A67C52] text-3xl md:text-5xl font-serif font-bold italic leading-none whitespace-nowrap">
                      Tranceform with Pooja*
                    </p>
                    <div className="h-[1px] flex-grow bg-[#A67C52]/20 hidden md:block" />
                  </div>
                </div>
              </div>
            </motion.div>
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

      <ProcessSection />
  
      <JourneySection />

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
