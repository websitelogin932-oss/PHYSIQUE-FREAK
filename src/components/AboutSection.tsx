import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, Clock, Shield, ArrowUpRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#09090d] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#c6ff00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative background watermark */}
      <div className="absolute top-8 right-6 text-[11vw] font-heading font-black text-white/[0.015] select-none pointer-events-none tracking-tight leading-none">
        PURPOSE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Multi-Image Composition with Overlapping Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Large Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={GYM_DETAILS.images.strength}
                  alt="Physique Freak GYM Heavy Training Floor"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#c6ff00] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-[#c6ff00]/30">
                  HEAVY LIFTING RIGS
                </span>
                <h4 className="font-heading font-black text-white text-lg sm:text-xl uppercase mt-1">
                  Strength & Barbell Floor
                </h4>
              </div>
            </div>

            {/* Smaller Overlapping Detail Image */}
            <div className="absolute -bottom-10 -right-4 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden border-2 border-[#09090d] shadow-2xl bg-neutral-900 hidden sm:block">
              <div className="aspect-square w-full">
                <img
                  src={GYM_DETAILS.images.dumbbells}
                  alt="Cast iron dumbbells detail at Physique Freak GYM"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] font-bold text-neutral-200">
                  Precision Weights & Dumbbells
                </div>
              </div>
            </div>

            {/* Organic Floating Metric Pill */}
            <div className="absolute -top-6 -left-3 sm:-left-6 px-4 py-2.5 rounded-xl bg-neutral-900/90 border border-white/15 backdrop-blur-md shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#c6ff00]/15 flex items-center justify-center text-[#c6ff00]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-black text-white uppercase tracking-wider">
                  UNTIL 12:00 AM
                </div>
                <div className="text-[10px] text-neutral-400">
                  Late Night Training Hours
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy & Pillar Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center pt-6 sm:pt-0"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-0.5 bg-[#c6ff00]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c6ff00]">
                ABOUT THE GYM
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-[1.05] mb-6">
              MORE THAN A WORKOUT. <br />
              <span className="text-neutral-400 font-extrabold">
                A PLACE TO BUILD YOURSELF.
              </span>
            </h2>

            {/* Narrative Body */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Located at Shahtaj Colony on Walton Road in Lahore, <strong className="text-white font-semibold">Physique Freak GYM</strong> was created for those who take their physical transformation seriously. We offer a disciplined, energy-fueled facility designed to eliminate distractions and accelerate your athletic progress.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether your focus is progressive heavy resistance, high-output spin conditioning, personalized technique coaching, or structured dietary clarity, our floor is equipped to support your daily commitment to self-mastery.
            </p>

            {/* Core Values Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/10 flex items-start gap-3.5 hover:border-[#c6ff00]/40 transition-colors">
                <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">
                    Deliberate Intensity
                  </h4>
                  <p className="text-neutral-400 text-xs leading-normal">
                    Equipment arranged for seamless supersets, compound lifting, and zero downtime.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/60 border border-white/10 flex items-start gap-3.5 hover:border-[#c6ff00]/40 transition-colors">
                <div className="p-2 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">
                    Multi-Discipline Fitness
                  </h4>
                  <p className="text-neutral-400 text-xs leading-normal">
                    From aerobics and cycling to youth training and online routines under one roof.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#c6ff00] hover:bg-[#d8ff33] px-6 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(198,255,0,0.25)] active:scale-95"
              >
                <span>VISIT PHYSIQUE FREAK</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white px-4 py-3 underline decoration-white/20 underline-offset-4 transition-colors"
              >
                View Services →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
