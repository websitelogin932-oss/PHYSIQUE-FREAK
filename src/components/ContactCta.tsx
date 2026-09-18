import React from 'react';
import { Phone, MessageSquare, Calendar, Navigation, ArrowUpRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface ContactCtaProps {
  onOpenBooking: () => void;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Dynamic Background Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#c6ff00]/10 via-emerald-600/5 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-white/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-pulse" />
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-neutral-300">
            START YOUR TRANSFORMATION TODAY
          </span>
        </div>

        <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-[0.92] mb-6 max-w-4xl mx-auto">
          YOUR NEXT LEVEL <br />
          <span className="text-[#c6ff00]">STARTS HERE.</span>
        </h2>

        <p className="text-neutral-300 text-base sm:text-xl max-w-xl mx-auto mb-8 font-normal">
          Train with purpose. Stay consistent. Keep moving forward.
        </p>

        {/* Large Prominent Phone Display */}
        <div className="mb-10">
          <a
            href={`tel:${GYM_DETAILS.phoneTel}`}
            className="inline-flex items-center gap-3 text-2xl sm:text-4xl md:text-5xl font-heading font-black text-white hover:text-[#c6ff00] tracking-wider transition-colors duration-300 group"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-neutral-900 border border-white/15 flex items-center justify-center text-[#c6ff00] group-hover:border-[#c6ff00] group-hover:shadow-[0_0_25px_rgba(198,255,0,0.3)] transition-all">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span>0321 4265565</span>
          </a>
        </div>

        {/* 4 Essential Action Buttons: CALL NOW, WHATSAPP, BOOK A SESSION, GET DIRECTIONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto">
          <a
            href={`tel:${GYM_DETAILS.phoneTel}`}
            id="contact-call-btn"
            className="flex-1 min-w-[150px] py-4 px-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-extrabold text-xs uppercase tracking-wider border border-white/15 hover:border-[#c6ff00]/40 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#c6ff00]" />
            <span>CALL NOW</span>
          </a>

          <a
            href={GYM_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp-btn"
            className="flex-1 min-w-[150px] py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,211,102,0.3)] active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-black" />
            <span>WHATSAPP</span>
          </a>

          <button
            onClick={onOpenBooking}
            id="contact-book-btn"
            className="flex-1 min-w-[160px] py-4 px-6 rounded-xl bg-[#c6ff00] hover:bg-[#d8ff33] text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(198,255,0,0.35)] active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK A SESSION</span>
          </button>

          <a
            href={GYM_DETAILS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-directions-btn"
            className="flex-1 min-w-[150px] py-4 px-6 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-extrabold text-xs uppercase tracking-wider border border-white/15 hover:border-[#c6ff00]/40 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Navigation className="w-4 h-4 text-[#c6ff00]" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

      </div>
    </section>
  );
};
