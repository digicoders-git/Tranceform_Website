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
                  <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
                    ( OVERVIEW )
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-[#15202B] leading-snug tracking-tight">
                  What is <span className="text-[#A67C52] serif">{service.title}</span>?
                </h2>
                <p className="text-black/60 font-normal serif text-lg leading-relaxed text-justify">
                  {service.fullDesc}
                </p>
              </motion.div>

              {/* Feature Cards */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-8 bg-[#A67C52]" />
                  <span className="text-[#A67C52] text-[13px] font-medium tracking-[0.4em] uppercase block">
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
            </div>

            {/* ── Right Column (Sidebar) ── */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 bg-white/80 backdrop-blur-xl border border-[#A67C52]/20 rounded-[48px] shadow-[0_30px_60px_-15px_rgba(21,32,43,0.1)] space-y-8 text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#A67C52]/10 rounded-bl-[120px] transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#A67C52]/5 rounded-tr-[80px]" />
                
                <div className="space-y-4 relative z-10">
                  <h3 className="text-3xl font-serif text-[#15202B]">
                    Ready to <span className="text-[#A67C52] serif italic">Transform?</span>
                  </h3>
                  <p className="text-[#15202B]/60 text-sm font-normal serif leading-relaxed px-2">
                    Start your healing journey with expert guidance today.
                  </p>
                </div>

                <div className="space-y-4 text-left bg-[#15202B]/[0.02] rounded-[32px] p-7 border border-[#15202B]/5 relative z-10">
                  <div className="flex items-center gap-4 text-[#15202B]/70 serif group/item cursor-default">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform group-hover/item:scale-110">
                      <ShieldCheck className="w-4 h-4 text-[#A67C52]" />
                    </div>
                    <span className="text-[13px] font-medium tracking-tight">100% Safe & Confidential</span>
                  </div>
                  <div className="flex items-center gap-4 text-[#15202B]/70 serif group/item cursor-default">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform group-hover/item:scale-110">
                      <Award className="w-4 h-4 text-[#A67C52]" />
                    </div>
                    <span className="text-[13px] font-medium tracking-tight">IHA Certified Therapists</span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="w-full py-5 bg-[#A67C52] text-white rounded-full font-bold text-[10px] tracking-[0.3em] uppercase hover:bg-[#15202B] transition-all duration-700 flex items-center justify-center gap-3 group/btn shadow-[0_20px_40px_-10px_rgba(166,124,82,0.4)] hover:shadow-[#15202B]/30 transform hover:-translate-y-1 active:scale-95 relative z-10"
                >
                  BOOK APPOINTMENT
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* ── Key Benefits (Full Width Card) ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 bg-linear-to-br from-[#FEFDFB] via-white to-[#FDFBF9] rounded-[48px] p-10 md:p-14 border-2 border-[#A67C52]/5 shadow-[0_25px_60px_-15px_rgba(166,124,82,0.1)] relative overflow-hidden group text-center"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A67C52]/[0.02] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#A67C52]/10 rounded-tl-[48px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#A67C52]/10 rounded-br-[48px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col items-center gap-2 mb-10">
                <span className="text-[#A67C52] text-[11px] font-bold tracking-[0.5em] uppercase px-4 py-1.5 bg-[#A67C52]/5 rounded-full">
                  ( KEY BENEFITS )
                </span>
                <h3 className="text-3xl md:text-5xl font-serif text-[#15202B] leading-tight mt-4">
                  What you'll gain from <span className="text-[#A67C52] italic font-medium">this transformation</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-7 text-left max-w-6xl mx-auto px-4">
                {service.benefits.map((benefit, idx) => (
                  <motion.div key={idx} className="flex gap-4 items-center group/item">
                    <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100 transition-all duration-500 group-hover/item:bg-[#A67C52] group-hover/item:border-[#A67C52] group-hover/item:shadow-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A67C52] group-hover/item:bg-white shadow-[0_0_8px_rgba(166,124,82,0.4)]" />
                    </div>
                    <span className="text-[#15202B]/80 font-normal serif text-[16px] leading-snug group-hover/item:text-[#15202B] transition-colors">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Other Services ─── */}
      <section className="py-24 bg-linear-to-b from-gray-50/50 to-white">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="flex items-center justify-center mb-16 text-center">
            <div className="space-y-4">
              <span className="text-[#A67C52] text-[11px] font-bold tracking-[0.4em] uppercase block">
                ( EXPLORE MORE )
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#15202B]">
                Other <span className="text-[#A67C52] italic">Services</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData
              .filter(s => s.id !== id)
              .map((s) => (
                <div
                  key={s.id}
                  onClick={() => { navigate(`/services/${s.id}`); window.scrollTo(0, 0); }}
                  className="group relative p-10 bg-white rounded-[40px] border border-gray-100 hover:border-[#A67C52]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-700 cursor-pointer overflow-hidden shadow-sm"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#A67C52]/5 rounded-bl-[60px] transition-transform duration-1000 group-hover:scale-150" />
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <h4 className="text-2xl font-serif text-[#15202B] mb-6 group-hover:text-[#A67C52] transition-colors leading-tight">{s.title}</h4>
                      <p className="text-black/40 text-sm serif line-clamp-2 mb-8">{s.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-3 text-[#A67C52] text-[11px] font-bold tracking-[0.3em] uppercase group-hover:translate-x-2 transition-transform duration-500">
                      LEARN MORE <ArrowRight className="w-5 h-5" />
                    </div>
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
