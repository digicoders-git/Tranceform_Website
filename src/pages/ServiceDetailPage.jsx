import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Award, Star, ChevronRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import AppointmentModal from '../components/AppointmentModal';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const service = servicesData.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) navigate('/');
  }, [id, service, navigate]);

  if (!service) return null;

  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#15202B] via-[#0F1722] to-[#15202B]">
        {/* Subtle Accent Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A67C52]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#A67C52]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="absolute inset-0 bg-linear-to-t from-[#15202B] via-transparent to-transparent" />

        <div className="relative z-10 w-full container mx-auto px-6 md:px-16 max-w-7xl pt-40 pb-12">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-white/60 text-sm mb-6"
          >
            <span className="hover:text-white cursor-pointer" onClick={() => navigate('/')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/60">Services</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-orange">{service.title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-8 max-w-4xl"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#A67C52]" />
              <span className="text-[#A67C52] text-xs font-medium tracking-[0.4em] uppercase">
                ( OUR SERVICES )
              </span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-serif leading-[1.1]">
              {service.title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl leading-relaxed serif">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* ── Left Column ── */}
            <div className="lg:col-span-8 space-y-16">

              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-[#A67C52]" />
                  <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercaseblock">
                    ( OVERVIEW )
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-[#15202B] leading-snug tracking-tight">
                  What is <span className="text-[#A67C52] serif">{service.title}</span>?
                </h2>
                <p className="text-black/60 font-normal serif text-lg leading-relaxed">
                  {service.fullDesc}
                </p>
              </motion.div>

              {/* Feature Cards */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-8 bg-[#A67C52]" />
                  <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase blocks">
                    ( HOW WE DO IT )
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {service.features.map((f, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.12, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="p-8 bg-white rounded-[32px] border border-gray-100 hover:border-[#A67C52]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
                    >
                      <div className="w-12 h-12 bg-[#A67C52]/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-500 shadow-sm">
                        <Star className="w-5 h-5 text-[#A67C52] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-xl font-serif text-[#15202B] mb-3">{f.title}</h4>
                      <p className="text-black/60 text-sm font-normal serif leading-relaxed">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#15202B] rounded-[48px] p-10 md:p-16 text-white relative overflow-hidden group border border-[#A67C52]/20"
              >
                <div className="absolute inset-0 bg-linear-to-br from-[#A67C52]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-8 bg-[#A67C52]" />
                  <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase">
                    ( KEY BENEFITS )
                  </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-serif mb-12 text-white">
                  What you'll gain from <br /><span className="text-[#A67C52] serif">this journey</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                  {service.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-start"
                    >
                      <div className="mt-1 p-1 rounded-full bg-[#A67C52]/50 shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/80 font-normal serif text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── Right Sidebar ── */}
            <div className="lg:col-span-4 space-y-6 sticky top-32">
              {/* Booking CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-12 bg-white border border-[#A67C52]/10 rounded-[48px] shadow-3xl shadow-gray-200/40 space-y-10 text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#A67C52]/5 rounded-bl-[100px] transition-transform duration-700 group-hover:scale-150" />
                
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif text-[#15202B]">
                    Ready to <span className="text-[#A67C52] serif">Transform?</span>
                  </h3>
                  <p className="text-black/50 text-sm font-normal serif">
                    Your journey to a better self begins here.
                  </p>
                </div>

                <div className="space-y-4 text-left bg-gray-50/50 rounded-[32px] p-8 border border-gray-100">

                  <div className="flex items-center gap-4 text-black/70 serif">
                    <ShieldCheck className="w-5 h-5 text-[#A67C52] shrink-0" />
                    <span className="text-sm font-medium">100% Safe & Confidential</span>
                  </div>
                  <div className="flex items-center gap-4 text-black/70 serif">
                    <Award className="w-5 h-5 text-[#A67C52] shrink-0" />
                    <span className="text-sm font-medium">VHC Certified Therapists</span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="w-full py-6 bg-[#A67C52] text-white rounded-full font-medium text-xs tracking-[0.3em] uppercase hover:bg-[#15202B] transition-all duration-500 flex items-center justify-center gap-3 group shadow-2xl hover:shadow-[#A67C52]/20 transform hover:-translate-y-1 active:scale-95"
                >
                  BOOK APPOINTMENT
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>


            </div>
          </div>
        </div>
      </section>

      {/* ─── Other Services ─── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="text-center mb-12 space-y-3">
            <span className="text-brand-orange text-[13px] font-medium tracking-[0.3em] uppercase">
              ( EXPLORE MORE )
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-blue">
              Other Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData
              .filter(s => s.id !== id)
              .map((s) => (
                <div
                  key={s.id}
                  onClick={() => { navigate(`/services/${s.id}`); window.scrollTo(0, 0); }}
                  className="group relative p-8 bg-white rounded-[32px] border border-gray-100 hover:border-[#A67C52]/30 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#A67C52]/5 rounded-bl-[40px] transition-transform duration-500 group-hover:scale-150" />
                  <h4 className="text-xl font-serif text-[#15202B] mb-4 group-hover:text-[#A67C52] transition-colors">{s.title}</h4>
                  <div className="flex items-center gap-2 text-[#A67C52] text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => setIsAppointmentModalOpen(false)} 
      />
    </div>
  );
};

export default ServiceDetailPage;
