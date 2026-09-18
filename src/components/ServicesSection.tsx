import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Dumbbell, Flame, Activity, Apple, Users, Video, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/gymData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Apple':
        return <Apple className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      default:
        return <Dumbbell className="w-5 h-5" />;
    }
  };

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#09090d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-0.5 bg-[#c6ff00]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c6ff00]">
              CORE DISCIPLINES
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            COMPREHENSIVE FITNESS <br />
            <span className="text-neutral-400">SERVICES AT LAHORE.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every fitness journey requires a distinct strategy. Discover the full spectrum of professional training, nutrition, and group conditioning offered at Physique Freak GYM.
          </p>
        </div>

        {/* Dynamic Dual-Layout: Interactive Service Navigator + High-Detail Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Service Selector List */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {SERVICES.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-900 border-[#c6ff00] shadow-[0_0_25px_rgba(198,255,0,0.12)]'
                      : 'bg-neutral-950/60 border-white/5 hover:border-white/20 hover:bg-neutral-900/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#c6ff00] text-black shadow-[0_0_15px_rgba(198,255,0,0.4)]'
                          : 'bg-neutral-900 text-neutral-400'
                      }`}
                    >
                      {getIconComponent(service.icon)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-heading font-black text-base sm:text-lg uppercase tracking-tight ${
                            isSelected ? 'text-white' : 'text-neutral-300'
                          }`}
                        >
                          {service.title}
                        </span>
                        {service.badge && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#c6ff00]/15 text-[#c6ff00] border border-[#c6ff00]/30">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                        {service.shortDesc}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#c6ff00] translate-x-1' : 'text-neutral-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Highlight Showcase Panel */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-neutral-900/80 border border-white/15 backdrop-blur-xl relative overflow-hidden shadow-2xl"
            >
              {/* Top glow accent */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#c6ff00]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#c6ff00]/15 border border-[#c6ff00]/30 text-[#c6ff00] flex items-center justify-center">
                  {getIconComponent(activeService.icon)}
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#c6ff00]">
                    SERVICE SPECIFICATION
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                {activeService.fullDesc}
              </p>

              {/* Feature checkmark pills */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                  Key Training Components:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-950/60 border border-white/5 text-xs text-neutral-200 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c6ff00] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Banner */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-neutral-400 font-medium">
                    Ready to book this discipline?
                  </div>
                  <div className="text-white text-sm font-bold">
                    Direct WhatsApp dispatch & scheduling
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(activeService.title)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#c6ff00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#d8ff33] transition-all shadow-[0_0_20px_rgba(198,255,0,0.3)] active:scale-95 cursor-pointer"
                >
                  <span>BOOK {activeService.title.toUpperCase()}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
