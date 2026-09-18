import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = 'Hi Physique Freak GYM, I’m interested in joining the gym. Please share your membership and training details.';
  const whatsappLink = `https://wa.me/923214265565?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover / desktop */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/90 border border-white/20 text-xs font-semibold text-white shadow-2xl transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        aria-label="Chat with Physique Freak GYM on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0f1912] hover:bg-[#152a1c] border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.9),0_0_35px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="animate-ping absolute inset-0 rounded-2xl bg-[#25D366]/20 opacity-60" />
        <MessageSquare className="w-6 h-6 fill-[#25D366]/20 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
