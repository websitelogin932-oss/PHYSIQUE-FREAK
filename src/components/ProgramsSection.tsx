import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Dumbbell, Flame, UserCheck, Wind, Bike, Laptop } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';

interface ProgramsSectionProps {
  onSelectProgram: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'prog-1':
        return <Dumbbell className="w-5 h-5 text-[#c6ff00]" />;
      case 'prog-2':
        return <Flame className="w-5 h-5 text-[#c6ff00]" />;
      case 'prog-3':
        return <UserCheck className="w-5 h-5 text-[#c6ff00]" />;
      case 'prog-4':
        return <Wind className="w-5 h-5 text-[#c6ff00]" />;
      case 'prog-5':
        return <Bike className="w-5 h-5 text-[#c6ff00]" />;
      case 'prog-6':
        return <Laptop className="w-5 h-5 text-[#c6ff00]" />;
      default:
        return <Dumbbell className="w-5 h-5 text-[#c6ff00]" />;
    }
  };

  return (
    <section id="programs" className="relative py-24 sm:py-32 bg-[#07070a] border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#c6ff00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-0.5 bg-[#c6ff00]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c6ff00]">
                STRUCTURED REGIMES
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              TRAIN WITH <br />
              <span className="text-[#c6ff00]">PURPOSE.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md">
            Six systematic training methodologies engineered to transform athletic capability, cardiovascular stamina, and functional power.
          </p>
        </div>

        {/* Asymmetric / Grid Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              onMouseEnter={() => setActiveCard(program.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => onSelectProgram(program.title)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900/60 border border-white/10 hover:border-[#c6ff00]/50 transition-all duration-500 flex flex-col justify-between cursor-pointer shadow-xl hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)] hover:-translate-y-1.5"
            >
              {/* Image Preview Header with Gradient Mask */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                <img
                  src={program.image}
                  alt={program.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                {/* Number & Icon Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <div className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono font-bold text-[#c6ff00]">
                    {program.number}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center group-hover:border-[#c6ff00]/40 transition-colors">
                    {getIcon(program.id)}
                  </div>
                </div>

                {/* Animated Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#c6ff00] transition-colors duration-300" />
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#c6ff00] mb-1">
                    {program.tagline}
                  </div>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-tight mb-2.5 group-hover:text-[#c6ff00] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                </div>

                {/* Target Focus & CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[11px] text-neutral-400 font-medium">
                    <span className="text-neutral-500 font-bold uppercase">Focus:</span> {program.targetFocus.split(',')[0]}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-[#c6ff00] group-hover:text-black transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
