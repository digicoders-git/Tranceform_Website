import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate an API Booking Request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', date: '', service: '', message: '' });
        onClose();
      }, 4000);
    }, 1500);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-white rounded-[32px] shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div className="relative bg-[#1E2A3A] p-8 text-center shrink-0">
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors bg-white/10 rounded-full p-2"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-3xl font-serif text-white mb-2">Book Your Session</h3>
                <p className="text-white/60 text-sm font-light">Take the first step towards your transformation.</p>
              </div>

              {/* Body */}
              <div className="p-8 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-serif text-brand-blue mb-2">Booking Requested!</h4>
                    <p className="text-gray-500 font-light mb-6">We'll review your details and contact you shortly to confirm your appointment time.</p>
                    <button onClick={onClose} className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-colors">
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                          <User className="w-4 h-4 text-brand-orange" /> Full Name
                        </label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                          <Mail className="w-4 h-4 text-brand-orange" /> Email Address
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-brand-orange" /> Phone Number
                        </label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all" placeholder="+44 7000 000000" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-brand-orange" /> Preferred Date
                        </label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Condition / Service Setup</label>
                      <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all appearance-none cursor-pointer">
                        <option value="">Select a service...</option>
                        <option value="Free Discovery Call">Free 15-Min Discovery Call</option>
                        <option value="Reducing Pain">Hypnotherapy For Reducing Pain</option>
                        <option value="Phobias & Addictions">Manage Phobias And Addictions</option>
                        <option value="Past Life Regression">Past Life Regression</option>
                        <option value="Anxiety & Stress">Eliminate Anxiety & Stress</option>
                        <option value="Inner Child">Heal Your Inner Child</option>
                        <option value="Stop Smoking">Stop Smoking</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-brand-orange" /> Additional Notes (Optional)
                      </label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full bg-gray-50 border border-gray-200 text-brand-blue rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all resize-none" placeholder="Is there anything specific we should know before your session?"></textarea>
                    </div>

                    <div className="pt-2 shrink-0">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-brand-orange text-white rounded-2xl px-8 py-4 font-semibold text-[15px] hover:bg-[#15202B] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:transform-none"
                      >
                        {isSubmitting ? 'Processing request...' : 'CONFIRM BOOKING'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
