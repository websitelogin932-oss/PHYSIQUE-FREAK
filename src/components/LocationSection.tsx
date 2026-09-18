import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageSquare, ExternalLink, Compass } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative py-24 sm:py-32 bg-[#09090d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-0.5 bg-[#c6ff00]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c6ff00]">
              FACILITY LOCATION
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            TRAIN WITH US <br />
            <span className="text-neutral-400">IN LAHORE.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Shahtaj Colony right off Walton Road. Easy access, dedicated late-night hours, and focused environment.
          </p>
        </div>

        {/* Location Details + Custom Dark Map Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours, and Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl">
            <div>
              <div className="flex items-center gap-2.5 text-[#c6ff00] text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-4 h-4" />
                <span>Primary Training Facility</span>
              </div>

              <h3 className="font-heading font-black text-2xl text-white uppercase tracking-tight mb-3">
                Shahtaj Colony, Lahore
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-medium">
                {GYM_DETAILS.address.fullFormatted}
              </p>

              {/* Specific landmark guidance */}
              <div className="p-3.5 rounded-xl bg-neutral-950/70 border border-white/5 mb-6 text-xs text-neutral-400">
                <strong className="text-white font-semibold">Landmark guidance:</strong> Located on Walton Road near Hahvery & Gate Street Number 1 in Shah Taj Colony.
              </div>

              {/* Hours of Operation */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-[#c6ff00]" />
                  <span>Business Hours</span>
                </div>
                {GYM_DETAILS.openingHours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                    <span className="text-neutral-300">{h.days}</span>
                    <span className="text-[#c6ff00] font-semibold">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions: Directions, Call, WhatsApp */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-directions-btn"
                className="w-full py-3.5 rounded-xl bg-[#c6ff00] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#d8ff33] transition-all shadow-[0_0_20px_rgba(198,255,0,0.3)] active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${GYM_DETAILS.phoneTel}`}
                  className="py-2.5 px-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-white/10 text-xs font-semibold text-neutral-200 flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c6ff00]" />
                  <span>Call 0321 4265565</span>
                </a>
                <a
                  href={GYM_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs font-semibold text-[#25D366] flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Dark Map-Inspired Visual Panel */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden border border-white/15 bg-[#0e0e13] shadow-2xl flex flex-col justify-between p-6 sm:p-8">
            {/* Architectural Grid & Road Coordinates Lines */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            {/* Geometric stylized map vector lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="180" x2="100%" y2="180" stroke="#333340" strokeWidth="6" />
              <line x1="220" y1="0" x2="220" y2="100%" stroke="#333340" strokeWidth="8" />
              <line x1="0" y1="340" x2="100%" y2="340" stroke="#252530" strokeWidth="4" />
              <line x1="450" y1="0" x2="450" y2="100%" stroke="#252530" strokeWidth="4" />

              {/* Walton Road highlighted artery */}
              <path
                d="M 50 400 L 220 180 L 450 180 L 650 90"
                stroke="#c6ff00"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
              />
            </svg>

            {/* Top Bar of Map Panel */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#c6ff00]">
                <Compass className="w-3.5 h-3.5" />
                <span>31.4828° N, 74.3705° E · LAHORE</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-bold text-neutral-300">
                Walton Road District
              </div>
            </div>

            {/* Center Pin & Pulsing Gym Marker */}
            <div className="relative z-10 my-auto flex flex-col items-center text-center">
              <div className="relative">
                <span className="animate-ping absolute -inset-2 rounded-full bg-[#c6ff00]/40" />
                <div className="relative w-14 h-14 rounded-2xl bg-black border-2 border-[#c6ff00] shadow-[0_0_30px_rgba(198,255,0,0.5)] flex items-center justify-center text-white">
                  <MapPin className="w-7 h-7 text-[#c6ff00]" />
                </div>
              </div>

              <div className="mt-4 px-4 py-2 rounded-xl bg-black/90 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="font-heading font-black text-white text-base sm:text-lg uppercase tracking-wide">
                  PHYSIQUE FREAK GYM
                </div>
                <div className="text-[11px] text-[#c6ff00] font-semibold">
                  Gate St #1, Near Hahvery, Shahtaj Colony
                </div>
              </div>
            </div>

            {/* Bottom Floating Bar */}
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 bg-black/60 backdrop-blur-md -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 px-6 sm:px-8">
              <div className="text-xs text-neutral-400">
                Live Google Maps Location Sync
              </div>
              <a
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c6ff00] hover:underline"
              >
                <span>Launch in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
