import React from 'react';
import { ArrowUpRight, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Services', href: '#services' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050507] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Huge Background Typography Watermark */}
      <div className="absolute -bottom-10 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-5">
        <div className="text-[18vw] font-heading font-black tracking-tighter text-white whitespace-nowrap text-center">
          PHYSIQUE FREAK
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 border border-[#c6ff00]/40">
                <span className="font-heading font-black text-xl text-white">PF</span>
              </div>
              <div>
                <span className="font-heading font-black text-xl text-white tracking-wider">
                  PHYSIQUE FREAK GYM
                </span>
                <div className="text-[10px] tracking-[0.25em] text-[#c6ff00] uppercase font-bold">
                  LAHORE · PAKISTAN
                </div>
              </div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
              A high-standard fitness center located in Shahtaj Colony, Lahore. Built for individuals dedicated to strength, personal health, and consistent training.
            </p>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#c6ff00] text-black text-xs font-bold uppercase tracking-wider hover:bg-[#d8ff33] transition-all shadow-[0_0_20px_rgba(198,255,0,0.3)] active:scale-95"
            >
              <span>BOOK A SESSION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-white mb-5">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#c6ff00] transition-colors flex items-center justify-between py-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#c6ff00]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-white mb-5">
              LOCATION & CONTACT
            </h4>

            <div className="flex items-start gap-3 text-xs text-neutral-400">
              <MapPin className="w-4 h-4 text-[#c6ff00] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Shahtaj Colony, Walton Road</strong>
                <p className="mt-0.5 text-neutral-400">Gate Street Number 1, near Hahvery, Lahore, 54000</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-neutral-400">
              <Phone className="w-4 h-4 text-[#c6ff00] shrink-0 mt-0.5" />
              <div>
                <a href={`tel:${GYM_DETAILS.phoneTel}`} className="text-white hover:text-[#c6ff00] transition-colors font-semibold">
                  {GYM_DETAILS.phoneDisplay}
                </a>
                <p className="text-[11px] text-neutral-500">Available for calls & WhatsApp enquiries</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-neutral-400">
              <Clock className="w-4 h-4 text-[#c6ff00] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Open · Closes 12 AM (Midnight)</strong>
                <p className="text-[11px] text-neutral-500">Monday to Saturday regular schedule</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} Physique Freak GYM. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Shahtaj Colony, Lahore</span>
            <span>·</span>
            <span>Google Rating 4.2 ★ (176 Reviews)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
