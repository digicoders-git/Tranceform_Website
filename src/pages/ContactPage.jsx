import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+44 (0) 20 7123 4567", "+44 (0) 7700 900077"],
      color: "text-brand-orange",
      bg: "bg-brand-orange/10"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["hello@tranceform.com", "bookings@tranceform.com"],
      color: "text-[#B97758]",
      bg: "bg-[#B97758]/10"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Clinic Location",
      details: ["12 Harley Street", "London, W1G 9PF", "United Kingdom"],
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      details: ["Mon - Fri: 9:00 AM - 8:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed (Online only)"],
      color: "text-purple-600",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden bg-[#1E2A3A]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(/images/image.png)' }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#111] via-black/40 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 md:px-16 max-w-7xl pt-36 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl space-y-5"
          >
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-medium tracking-[0.3em] uppercase px-4 py-2 rounded-full">
              Get In Touch
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-serif italic leading-tight">
              Let's start your transformation.
            </h1>
            <p className="text-white/70 text-lg font-light max-w-xl">
              Whether you have a question, need to book an appointment, or want to arrange a free discovery call, we are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Main Content Area ─── */}
      <section className="py-24 relative z-20 -mt-10">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h2 className="text-4xl font-serif text-brand-blue leading-tight mb-4">
                  We'd love to hear from you
                </h2>
                <p className="text-gray-500 font-light text-lg">
                  Reach out to us using the form, or contact our clinic directly. We aim to respond to all enquiries within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className={`w-14 h-14 ${info.bg} ${info.color} rounded-2xl flex items-center justify-center`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-blue text-lg mb-2">{info.title}</h4>
                      {info.details.map((line, i) => (
                        <p key={i} className="text-gray-500 text-sm font-light leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social or extra banner */}
              <div className="p-8 bg-[#B97758] rounded-[32px] text-white space-y-4">
                <h4 className="text-2xl font-serif italic">Free 15-Min Discovery Call</h4>
                <p className="text-white/80 font-light text-sm">
                  Unsure if hypnotherapy is right for you? Speak directly with a therapist before booking.
                </p>
                <button className="flex items-center gap-2 text-white font-medium text-sm tracking-wide hover:gap-3 transition-all pt-2">
                  BOOK CALL <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7"
            >
              <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-2xl shadow-gray-200/50 border border-gray-100">
                <h3 className="text-3xl font-serif text-brand-blue mb-8">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                        placeholder="+44 7000 000000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 ml-1">Subject / Service</label>
                      <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all appearance-none"
                      >
                        <option value="">Select a subject...</option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Anxiety & Stress">Anxiety & Stress</option>
                        <option value="Stop Smoking">Stop Smoking</option>
                        <option value="Pain Management">Pain Management</option>
                        <option value="Past Life Regression">Past Life Regression</option>
                        <option value="Other">Other / Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Your Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all resize-none"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-brand-orange text-white rounded-2xl px-8 py-5 font-medium text-lg hover:bg-[#E68A2E] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">Sending...</span>
                    ) : submitted ? (
                      <span className="flex items-center gap-2">Message Sent <CheckCircle2 className="w-5 h-5" /></span>
                    ) : (
                      <span className="flex items-center gap-2">Send Message <Send className="w-5 h-5" /></span>
                    )}
                  </button>
                  
                  {submitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="p-4 bg-green-50 text-green-700 rounded-xl text-center text-sm font-medium border border-green-100"
                    >
                      Thank you! Your message has been received. We'll be in touch shortly.
                    </motion.div>
                  )}
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
