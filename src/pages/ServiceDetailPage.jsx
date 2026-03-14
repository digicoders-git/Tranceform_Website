import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Award, Star, ChevronRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

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
    <div className="min-h-screen bg-white">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 w-full container mx-auto px-6 md:px-16 max-w-7xl pt-36 pb-20">
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
            className="space-y-4 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 backdrop-blur-md border border-brand-orange/30 text-brand-orange text-xs font-medium tracking-[0.3em] uppercase px-4 py-2 rounded-full">
              Our Services
            </div>
            <h1 className="text-white text-4xl md:text-7xl font-serif italic leading-tight">
              {service.title}
            </h1>
            <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl">
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
                <span className="text-brand-orange text-[13px] font-medium tracking-[0.3em] uppercase">
                  ( OVERVIEW )
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-blue leading-snug">
                  What is <span className="italic text-brand-orange">{service.title}</span>?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  {service.fullDesc}
                </p>
              </motion.div>

              {/* Feature Cards */}
              <div>
                <span className="text-brand-orange text-[13px] font-medium tracking-[0.3em] uppercase">
                  ( HOW WE DO IT )
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {service.features.map((f, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.12, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="p-8 bg-[#FAFAFA] rounded-[28px] border border-gray-100 hover:border-brand-orange/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                        <Star className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-xl font-serif text-brand-blue mb-3">{f.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#B97758] rounded-[40px] p-10 md:p-16 text-white"
              >
                <span className="text-white/60 text-[13px] font-medium tracking-[0.3em] uppercase block mb-4">
                  ( KEY BENEFITS )
                </span>
                <h3 className="text-3xl md:text-4xl font-serif italic mb-12">
                  What you'll gain from this journey
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-start"
                    >
                      <div className="mt-1 p-1 rounded-full bg-white/20 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white/90 font-light text-lg">{benefit}</span>
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
                className="p-10 bg-white border border-gray-100 rounded-[36px] shadow-2xl shadow-gray-100 space-y-8 text-center"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-brand-blue">
                    Ready to Transform?
                  </h3>
                  <p className="text-gray-400 text-sm font-light">
                    Book your first session today.
                  </p>
                </div>

                <div className="space-y-3 text-left bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="text-sm font-medium">60 – 90 Minute Sessions</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="text-sm font-medium">100% Safe & Confidential</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Award className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="text-sm font-medium">VHC Certified Therapists</span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="w-full py-4 bg-brand-orange text-white rounded-full font-medium text-base hover:bg-[#15202B] transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-orange-200"
                >
                  BOOK APPOINTMENT
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Stats Card */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '99%', label: 'Success Rate' },
                  { value: '15+', label: 'Years Expert' },
                  { value: '4.2K+', label: 'Sessions Done' },
                  { value: '10+', label: 'Specialists' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100">
                    <h4 className="text-2xl font-serif text-brand-orange">{stat.value}</h4>
                    <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
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
            <h2 className="text-3xl md:text-4xl font-serif text-brand-blue italic">
              Other Services
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {servicesData
              .filter(s => s.id !== id)
              .map((s) => (
                <button
                  key={s.id}
                  onClick={() => { navigate(`/services/${s.id}`); window.scrollTo(0,0); }}
                  className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:border-brand-orange hover:text-brand-orange hover:shadow-md transition-all duration-300 font-medium text-sm"
                >
                  {s.title}
                </button>
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
