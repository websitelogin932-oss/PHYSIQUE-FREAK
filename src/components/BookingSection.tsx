import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Calendar, Clock, User, Phone, Dumbbell, MessageSquare, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
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

interface BookingSectionProps {
  initialService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    service: initialService || SERVICES_OPTIONS[1], // default Personal Training
    preferredDate: '',
    preferredTime: 'Evening (5:00 PM – 9:00 PM)',
    goal: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Sync initialService if changed externally
  React.useEffect(() => {
    if (initialService) {
      // Find closest match or assign
      const match = SERVICES_OPTIONS.find((s) =>
        s.toLowerCase().includes(initialService.toLowerCase()) ||
        initialService.toLowerCase().includes(s.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone or WhatsApp number';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.service) {
      newErrors.service = 'Please choose a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsRedirecting(true);

    // Format the WhatsApp message exactly as requested
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

    // Give a brief pleasant feedback moment before opening WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsRedirecting(false);
    }, 450);
  };

  return (
    <section id="booking" className="relative py-24 sm:py-32 bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#c6ff00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-0.5 bg-[#c6ff00]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c6ff00]">
                DIRECT BOOKING & ENQUIRY
              </span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
              READY TO <br />
              <span className="text-[#c6ff00]">START?</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
              Book your next session and take the first step toward a stronger routine. Choose your training discipline and submit your request directly to our desk on WhatsApp.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#c6ff00]/15 flex items-center justify-center text-[#c6ff00] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>No automated bots — direct response from gym management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#c6ff00]/15 flex items-center justify-center text-[#c6ff00] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Open 6 days a week until 12:00 AM (Midnight)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#c6ff00]/15 flex items-center justify-center text-[#c6ff00] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Direct phone assistance available: <strong className="text-white">0321 4265565</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-neutral-900/90 border border-white/15 backdrop-blur-2xl shadow-2xl relative">
              <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1.5 rounded-full bg-[#c6ff00] text-black text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                Official Desk Dispatch
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="fullName"
                        id="booking-name"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Hamza Ali"
                        className="w-full pl-10 pr-4 py-3 bg-neutral-950/80 border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c6ff00] focus:ring-1 focus:ring-[#c6ff00] transition-colors"
                      />
                    </div>
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        id="booking-phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0321 XXXXXXX"
                        className="w-full pl-10 pr-4 py-3 bg-neutral-950/80 border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c6ff00] focus:ring-1 focus:ring-[#c6ff00] transition-colors"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Select Discipline / Service *
                  </label>
                  <div className="relative">
                    <Dumbbell className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      name="service"
                      id="booking-service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-neutral-950/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#c6ff00] focus:ring-1 focus:ring-[#c6ff00] transition-colors cursor-pointer appearance-none"
                    >
                      {SERVICES_OPTIONS.map((srv) => (
                        <option key={srv} value={srv} className="bg-neutral-900 text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Preferred Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        name="preferredDate"
                        id="booking-date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-neutral-950/80 border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c6ff00] focus:ring-1 focus:ring-[#c6ff00] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        name="preferredTime"
                        id="booking-time"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-neutral-950/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#c6ff00] focus:ring-1 focus:ring-[#c6ff00] transition-colors cursor-pointer appearance-none"
                      >
                        <option value="Morning (6:00 AM – 10:00 AM)">Morning (6:00 AM – 10:00 AM)</option>
                        <option value="Midday (10:00 AM – 2:00 PM)">Midday (10:00 AM – 2:00 PM)</option>
                        <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                        <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                        <option value="Night (9:00 PM – 12:00 AM)">Night (9:00 PM – 12:00 AM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Fitness Goal / Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Fitness Goal / Message (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
                    <textarea
                      name="goal"
                      id="booking-goal"
                      rows={3}
                      value={formData.goal}
                      onChange={handleChange}
                      placeholder="e.g. Looking to gain lean muscle, improve cardiovascular endurance, or inquire about personal training packages."
                      className="w-full pl-10 pr-4 py-3 bg-neutral-950/80 border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#c6ff00] focus:ring-1 focus:ring-[#c6ff00] transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="booking-submit-btn"
                  disabled={isRedirecting}
                  className="w-full py-4 rounded-xl bg-[#c6ff00] hover:bg-[#d8ff33] text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(198,255,0,0.35)] active:scale-[0.98] cursor-pointer disabled:opacity-75"
                >
                  {isRedirecting ? (
                    <span>DISPATCHING TO WHATSAPP...</span>
                  ) : (
                    <>
                      <span>REQUEST BOOKING VIA WHATSAPP</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-neutral-400 font-medium">
                  Clicking sends your details directly to Physique Freak GYM at <strong>0321 4265565</strong>.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
