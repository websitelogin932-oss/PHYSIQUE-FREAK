import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Dumbbell, Activity, ShieldAlert, Wifi, Bath } from 'lucide-react';
import { FACILITIES } from '../data/gymData';

export const FacilitiesSection: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState(0);

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Dumbbell className="w-4 h-4 text-[#c6ff00]" />;
      case 1:
        return <Activity className="w-4 h-4 text-[#c6ff00]" />;
      case 2:
        return <Sparkles className="w-4 h-4 text-[#c6ff00]" />;
      case 3:
        return <Bath className="w-4 h-4 text-[#c6ff00]" />;
      case 4:
        return <Wifi className="w-4 h-4 text-[#c6ff00]" />;
      default:
        return <Dumbbell className="w-4 h-4 text-[#c6ff00]" />;
    }
  };

  const current = FACILITIES[selectedFacility];

  return (
    <section id="facilities" className="relative py-24 sm:py-32 bg-[#09090d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-0.5 bg-[#c6ff00]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c6ff00]">
              PREMISES & GEAR
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            EQUIPPED FOR <br />
            <span className="text-neutral-400">UNCOMPROMISING TRAINING.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Tour the functional zones, clean hygiene facilities, and specialized workout areas engineered for serious lifters and daily fitness enthusiasts.
          </p>
        </div>

        {/* Facility Navigator Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {FACILITIES.map((fac, idx) => (
            <button
              key={fac.id}
              onClick={() => setSelectedFacility(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                selectedFacility === idx
                  ? 'bg-[#c6ff00] text-black border-[#c6ff00] shadow-[0_0_20px_rgba(198,255,0,0.3)]'
                  : 'bg-neutral-900/80 text-neutral-400 border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {getIcon(idx)}
              <span>{fac.title.split(' ')[0]} {fac.title.split(' ')[1]}</span>
            </button>
          ))}
        </div>

        {/* Highlight Feature Showcase with Large Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Large Facility Photo */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl group">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
              <motion.img
                key={current.id}
                initial={{ scale: 1.05, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={current.image}
                alt={current.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent" />
            </div>

            {/* Bottom Overlay Info */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
              <div className="inline-block px-2.5 py-1 rounded bg-[#c6ff00]/20 text-[#c6ff00] text-[10px] font-mono uppercase tracking-widest font-bold mb-2">
                ZONE 0{selectedFacility + 1}
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
                {current.title}
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm max-w-xl line-clamp-2">
                {current.description}
              </p>
            </div>
          </div>

          {/* Details & Feature Checklist Card */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl">
              <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c6ff00]" />
                ZONE SPECIFICATIONS
              </h4>

              <div className="space-y-3">
                {current.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-950/60 border border-white/5 text-xs text-neutral-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#c6ff00]/15 text-[#c6ff00] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hygienic Washroom & Facility Care Highlight Card */}
            <div className="p-5 rounded-2xl bg-neutral-950/70 border border-white/10 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#c6ff00]/10 text-[#c6ff00] shrink-0">
                <Bath className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                  Clean Washroom Facilities
                </h5>
                <p className="text-neutral-400 text-xs mt-1">
                  Maintained regularly for member comfort, hygiene, and freshening up post-workout.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
