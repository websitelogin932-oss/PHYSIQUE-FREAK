import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User, Phone, Dumbbell, Calendar, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { BookingFormData } from '../types';

const SERVICES_OPTIONS = [
  'General Gym Membership',
  'Personal Training',
  'Aerobics',
  'Cycling',
  'Nutrition Consulting',
  'Youth Classes',
  'Online Classes',
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    service: defaultService || SERVICES_OPTIONS[1],
    preferredDate: '',
    preferredTime: 'Evening (5:00 PM – 9:00 PM)',
    goal: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isRedirecting, setIsRedirecting] = useState(false);

  React.useEffect(() => {
    if (defaultService) {
      const match = SERVICES_OPTIONS.find(
        (s) =>
          s.toLowerCase().includes(defaultService.toLowerCase()) ||
          defaultService.toLowerCase().includes(s.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, [defaultService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone / WhatsApp is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsRedirecting(true);

    const message = `Hi Physique Freak GYM,
I would like to request a booking.

Name: ${formData.fullName.trim()}
Phone: ${formData.phone.trim()}
Service: ${formData.service}
Preferred Date: ${formData.preferredDate || 'Earliest Available'}
Preferred Time: ${formData.preferredTime}
Fitness Goal/Message: ${formData.goal.trim() || 'General Fitness & Strength'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923214265565?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
      onClose();
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-neutral-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#c6ff00]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#c6ff00]">
                PHYSIQUE FREAK GYM · LAHORE
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
              BOOK A SESSION
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm mb-6">
              Complete the request below to immediately connect with our desk via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Bilal Ahmed"
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-950 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#c6ff00]"
                  />
                </div>
                {errors.fullName && <span className="text-[11px] text-rose-400 mt-1 block">{errors.fullName}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0321 XXXXXXX"
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-950 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#c6ff00]"
                  />
                </div>
                {errors.phone && <span className="text-[11px] text-rose-400 mt-1 block">{errors.phone}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Service / Discipline
                </label>
                <div className="relative">
                  <Dumbbell className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-950 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#c6ff00] appearance-none"
                  >
                    {SERVICES_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-neutral-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#c6ff00]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-neutral-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#c6ff00] appearance-none"
                  >
                    <option value="Morning (6:00 AM – 10:00 AM)">Morning (6:00 AM – 10:00 AM)</option>
                    <option value="Midday (10:00 AM – 2:00 PM)">Midday (10:00 AM – 2:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                    <option value="Night (9:00 PM – 12:00 AM)">Night (9:00 PM – 12:00 AM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1">
                  Message / Goals (Optional)
                </label>
                <textarea
                  name="goal"
                  rows={2}
                  value={formData.goal}
                  onChange={handleChange}
                  placeholder="Share any specific requirements or goals..."
                  className="w-full px-3 py-2 bg-neutral-950 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#c6ff00] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isRedirecting}
                className="w-full py-3.5 rounded-xl bg-[#c6ff00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#d8ff33] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(198,255,0,0.3)] active:scale-95 disabled:opacity-75 cursor-pointer mt-2"
              >
                {isRedirecting ? (
                  <span>CONNECTING TO WHATSAPP...</span>
                ) : (
                  <>
                    <span>CONFIRM & SEND VIA WHATSAPP</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
