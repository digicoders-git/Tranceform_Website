import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import Swal from 'sweetalert2';
import API_URL from '../config';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Booking failed');
      
      Swal.fire({
        title: 'Booking Requested!',
        text: 'We have received your request. Our team will contact you shortly to confirm.',
        icon: 'success',
        confirmButtonColor: '#EE6F36',
      });

      setFormData({ name: '', email: '', phone: '', date: '', service: '', message: '' });
      onClose();
    } catch (err) {
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonColor: '#1E2A3A',
      });
    } finally {
      setIsSubmitting(false);
    }
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
              </div>
            </motion.div>
          </div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
