import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import Swal from 'sweetalert2';
import API_URL from '../config';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed');
      
      Swal.fire({
        title: 'Message Sent!',
        text: 'Thank you for reaching out. We will get back to you shortly.',
        icon: 'success',
        confirmButtonColor: '#A67C52',
        background: '#fff',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        borderRadius: '20px'
      });

      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#15202B'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+66 89 779 8028"],
      color: "text-[#A67C52]",
      bg: "bg-[#A67C52]/5"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["hello@tranceform.com", "bookings@tranceform.com"],
      color: "text-[#A67C52]",
      bg: "bg-[#A67C52]/5"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Clinic Location",
      details: ["UnionSpace Sukhumvit 61", "Bangkok, Thailand"],
      color: "text-[#A67C52]",
      bg: "bg-[#A67C52]/5"
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#15202B]">


        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-7xl pt-40 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#A67C52]" />
              <span className="text-[#A67C52] text-xs font-medium tracking-[0.4em] uppercase">
                ( GET IN TOUCH )
              </span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-serif leading-[1.1]">
              Let's start your <br />
              <span className="text-[#A67C52]">transformation.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed serif">
              Whether you have a question, need to book an appointment, or want to arrange a free discovery call, we are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Main Content Area ─── */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-10"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-[#A67C52]" />
                  <span className="text-[#A67C52] text-[12px] font-medium tracking-[0.4em] uppercase block">
                    ( CONNECT )
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-brand-blue leading-tight tracking-tight">
                  We'd love to <br /><span className="text-[#A67C52] serif">hear from you</span>
                </h2>
                <p className="text-black/60 font-normal serif text-base leading-relaxed">
                  Reach out to us using the form, or contact our clinic directly. We aim to respond to all enquiries within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="space-y-5 group">
                    <div className={`w-14 h-14 ${info.bg} ${info.color} rounded-2xl flex items-center justify-center border border-[#A67C52]/10 group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-[#A67C52]/20`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-[#15202B] text-lg mb-2">{info.title}</h4>
                      {info.details.map((line, i) => (
                        <p key={i} className="text-black/60 text-sm font-normal serif leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social or extra banner */}
              <div className="p-8 bg-[#15202B] rounded-[32px] text-white space-y-5 relative overflow-hidden group border border-[#A67C52]/20">
                <div className="absolute inset-0 bg-linear-to-br from-[#A67C52]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <h4 className="text-2xl font-serif text-[#A67C52]">Free 15-Min Discovery Call</h4>
                <p className="text-white/70 font-normal serif text-base leading-relaxed">
                  Unsure if hypnotherapy is right for you? Speak directly with me before booking.
                </p>
                <button className="flex items-center gap-3 text-white font-medium text-xs tracking-[0.3em] uppercase hover:text-[#A67C52] transition-all duration-300">
                  BOOK CALL <ArrowRight className="w-4 h-4 text-[#A67C52]" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7"
            >
              <div className="bg-white p-10 md:p-14 rounded-[48px] shadow-3xl shadow-gray-200/40 border border-gray-100/50">
                <h3 className="text-3xl font-serif text-brand-blue mb-10 tracking-tight">Send us a <span className="text-[#A67C52] serif">message</span></h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-medium text-[#A67C52] tracking-[0.2em] uppercase ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50/50 border border-gray-100 text-brand-blue rounded-2xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#A67C52]/20 focus:border-[#A67C52] transition-all duration-500 serif"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-medium text-[#A67C52] tracking-[0.2em] uppercase ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50/50 border border-gray-100 text-brand-blue rounded-2xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#A67C52]/20 focus:border-[#A67C52] transition-all duration-500 serif"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-medium text-[#A67C52] tracking-[0.2em] uppercase ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-50/50 border border-gray-100 text-brand-blue rounded-2xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#A67C52]/20 focus:border-[#A67C52] transition-all duration-500 serif"
                        placeholder="+66 ..."
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-medium text-[#A67C52] tracking-[0.2em] uppercase ml-1">Subject / Service</label>
                      <div className="relative">
                        <select 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-gray-50/50 border border-gray-100 text-brand-blue rounded-2xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#A67C52]/20 focus:border-[#A67C52] transition-all duration-500 appearance-none serif cursor-pointer"
                        >
                          <option value="">Select a subject...</option>
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Anxiety & Stress">Anxiety & Stress</option>
                          <option value="Stop Smoking">Stop Smoking</option>
                          <option value="Pain Management">Pain Management</option>
                          <option value="Past Life Regression">Past Life Regression</option>
                          <option value="Other">Other / Not sure</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                           <ArrowRight className="w-4 h-4 text-[#A67C52] rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-medium text-[#A67C52] tracking-[0.2em] uppercase ml-1">Your Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-gray-50/50 border border-gray-100 text-brand-blue rounded-[32px] px-6 py-5 focus:outline-none focus:ring-1 focus:ring-[#A67C52]/20 focus:border-[#A67C52] transition-all duration-500 resize-none serif"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#A67C52] text-white rounded-full px-8 py-6 font-medium text-xs tracking-[0.2em] uppercase hover:bg-[#15202B] hover:shadow-2xl hover:shadow-[#A67C52]/20 hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:transform-none active:scale-95"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">Processing...</span>
                    ) : (
                      <span className="flex items-center gap-3">Send Message <ArrowRight className="w-4 h-4" /></span>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
