import React from 'react';
import { motion } from 'framer-motion';
import AppointmentModal from './AppointmentModal';

const JourneySection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const phoneNumber = "66897798028"; // Provided in AboutPage
  const message = "Hello, I would like to book a hypnotherapy session or know more about your services.";

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      
      <div className="container mx-auto px-6 text-center max-w-4xl space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-12 bg-[#A67C52]" />
            <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
              ( BEGIN YOUR JOURNEY )
            </span>
            <div className="h-[1px] w-12 bg-[#A67C52]" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-brand-blue leading-tight max-w-3xl mx-auto">
            If you feel ready to <span className="serif text-[#A67C52]">explore deeper change</span>
          </h2>
          
          <div className="h-1 w-20 bg-[#A67C52]/30 mx-auto rounded-full" />
          
          <div className="space-y-6 text-[#15202B] text-[17px] md:text-[20px] max-w-3xl mx-auto leading-relaxed font-normal">
            <p>
              Many people reach a point where they realise they do not need more advice or more analysis. What they need is a <span className="text-[#A67C52] font-medium italic underline decoration-[#A67C52]/20 underline-offset-8">safe space</span> to understand the deeper emotional patterns shaping their lives.
            </p>
            <p>
              Hypnotherapy offers a <span className="text-[#A67C52] font-medium italic">gentle but powerful way</span> to reconnect with yourself and begin shifting those patterns. <strong className="text-[#15202B] font-semibold border-b-2 border-[#A67C52]/20 pb-1">Sessions are available in Bangkok and online.</strong>
            </p>
          </div>

        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-2">
          {/* Liquid Button: Book a Session */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative px-12 py-5 bg-[#15202B] text-white rounded-full font-bold shadow-2xl overflow-hidden transition-all active:scale-95 text-[11px] tracking-[0.3em] uppercase w-full md:w-auto text-center border border-white/10"
          >
            <span className="relative z-10 group-hover:text-[#15202B] transition-colors duration-500">BOOK A SESSION</span>
            <div className="absolute inset-0 bg-[#A67C52] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-white/20 rounded-[40%] animate-[spin_10s_linear_infinite] translate-y-full group-hover:translate-y-[-30%] transition-transform duration-700 ease-out pointer-events-none" />
          </button>

          {/* Liquid Button: WhatsApp */}
          <a 
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-5 border-2 border-[#15202B] text-[#15202B] rounded-full font-bold overflow-hidden transition-all active:scale-95 text-[11px] tracking-[0.3em] uppercase w-full md:w-auto text-center"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">MESSAGE ON WHATSAPP</span>
            <div className="absolute inset-0 bg-[#15202B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-white/10 rounded-[40%] animate-[spin_10s_linear_infinite] translate-y-full group-hover:translate-y-[-30%] transition-transform duration-700 ease-out pointer-events-none" />
          </a>
        </div>


        {/* Conclusion Message */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-24 space-y-10"
        >
           <p className="text-2xl md:text-3xl font-serif text-brand-blue leading-relaxed max-w-3xl mx-auto italic">
            "Whatever you are experiencing, please know that you do not have to navigate it alone. I am here to help you understand what is happening beneath the surface, so that you can begin to move forward with a greater sense of clarity, calm, and inner peace."
          </p>
          <div className="space-y-2">
            <p className="text-[#A67C52] font-serif text-2xl">Pooja</p>
            <p className="text-[#15202B] font-bold tracking-widest text-xs uppercase bg-[#A67C52]/5 px-6 py-2 rounded-full inline-block border border-[#A67C52]/10">Founder of Tranceform with Pooja</p>
          </div>
        </motion.div>
      </div>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default JourneySection;
