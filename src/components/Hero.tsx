import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, MapPin, Clock, ArrowRight, ShieldCheck, Flame, Dumbbell, Sparkles } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] sm:min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden bg-[#070709]"
    >
      {/* Background Decorative Architecture */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

        {/* Large blurred atmospheric orbs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#c6ff00]/8 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px]" />
        <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-violet-600/5 rounded-full blur-[180px]" />

        {/* Oversized background brand typography watermark */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[14vw] font-heading font-black text-white/[0.02] tracking-tighter whitespace-nowrap select-none">
          PHYSIQUE FREAK
        </div>

        {/* Subtle geometric contour curves */}
        <svg
          className="absolute right-0 top-12 w-[650px] h-[750px] opacity-25 text-white/5 pointer-events-none hidden lg:block"
          viewBox="0 0 700 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 0 C 350 200, 650 350, 700 800"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M 220 0 C 420 220, 680 420, 750 800"
            stroke="#c6ff00"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
          <circle cx="480" cy="300" r="3" fill="#c6ff00" />
          <circle cx="610" cy="520" r="3" fill="#c6ff00" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography & Conversion Engine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 w-fit mb-4 sm:mb-6 shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-neutral-300">
                PHYSIQUE FREAK GYM · LAHORE
              </span>
              <span className="text-[10px] font-semibold text-[#c6ff00] px-1.5 py-0.5 rounded bg-[#c6ff00]/10 border border-[#c6ff00]/20">
                SHAHTAJ COLONY
              </span>
            </motion.div>

            {/* Powerful Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-white tracking-tight uppercase leading-[0.95] mb-5 sm:mb-6"
            >
              TRAIN HARD. <br />
              <span className="relative inline-block text-white">
                BECOME
                <span className="mx-2 sm:mx-3 text-[#c6ff00] inline-block underline decoration-[#c6ff00]/40 decoration-wavy decoration-2">
                  UNSTOPPABLE.
                </span>
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-neutral-300 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed mb-7 sm:mb-8"
            >
              Push your limits in a focused training environment built for strength, fitness and consistency. Expert personal guidance, Olympic gear, and high-energy conditioning right in Shahtaj Colony.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9 sm:mb-10"
            >
              <button
                onClick={onOpenBooking}
                id="hero-primary-cta"
                className="group relative inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-4 rounded-xl bg-[#c6ff00] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#d8ff33] hover:shadow-[0_0_35px_rgba(198,255,0,0.45)] active:scale-95 cursor-pointer"
              >
                <span>BOOK YOUR SESSION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#programs"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/15 hover:border-[#c6ff00]/40 transition-all duration-300 active:scale-95"
              >
                <span>EXPLORE PROGRAMS</span>
              </a>

              <a
                href={GYM_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-cta"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-4 rounded-xl bg-neutral-950/60 hover:bg-neutral-900 text-neutral-300 hover:text-white border border-white/10 text-xs font-semibold tracking-wide transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                <span>WhatsApp Chat</span>
              </a>
            </motion.div>

            {/* Above-The-Fold Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="pt-5 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs text-neutral-300"
            >
              {/* Rating Trust */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center text-[#c6ff00]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c6ff00]" />
                  ))}
                  {/* Accurate 4.2 star representation: 4 full + 1 partial */}
                  <div className="relative w-4 h-4">
                    <Star className="w-4 h-4 text-neutral-600" />
                    <div className="absolute inset-0 overflow-hidden w-[20%]">
                      <Star className="w-4 h-4 fill-[#c6ff00] text-[#c6ff00]" />
                    </div>
                  </div>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-white text-sm">4.2 / 5</span>
                  <span className="text-neutral-400 font-medium">(176 Reviews)</span>
                </div>
              </div>

              {/* Status / Timing */}
              <div className="flex items-center gap-2 text-neutral-300">
                <Clock className="w-4 h-4 text-[#c6ff00]" />
                <span className="font-semibold text-white">Open Today</span>
                <span className="text-neutral-400">· Closes 12 AM</span>
              </div>

              {/* Location indicator */}
              <div className="flex items-center gap-2 text-neutral-400 hidden sm:flex">
                <MapPin className="w-4 h-4 text-neutral-500" />
                <span>Walton Rd, Shahtaj Colony</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dominant Asymmetric Gym Imagery with Floating Glass Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Ambient Background Aura behind Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#c6ff00]/20 via-emerald-600/10 to-transparent rounded-3xl blur-2xl opacity-60 -z-10" />

            {/* Asymmetric Framed Main Image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-neutral-900 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]">
              {/* Corner decorative accent tag */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-[#c6ff00] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>ELITE PERFORMANCE</span>
              </div>

              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden">
                <img
                  src={GYM_DETAILS.images.hero}
                  alt="Athlete training with intensity at Physique Freak GYM Lahore"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle dark vignette & gradient overlay to merge image with black canvas */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/40 via-transparent to-transparent" />
              </div>

              {/* Bottom image caption bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black via-black/80 to-transparent z-20 flex items-center justify-between border-t border-white/5">
                <div>
                  <div className="text-white text-xs sm:text-sm font-bold tracking-wide">
                    Focused Lifting Floor
                  </div>
                  <div className="text-neutral-400 text-[11px]">
                    Shahtaj Colony · Lahore
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#c6ff00] bg-[#c6ff00]/10 px-2.5 py-1 rounded-md border border-[#c6ff00]/25">
                  <Flame className="w-3.5 h-3.5" />
                  <span>HIGH INTENSITY</span>
                </div>
              </div>
            </div>

            {/* Floating Glass UI Card 1: Rating & Social Proof */}
            <motion.div
              initial={{ opacity: 0, x: -25, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 -left-3 sm:-left-6 z-30 p-3.5 sm:p-4 rounded-xl glass-panel shadow-2xl border border-white/15 max-w-[190px] sm:max-w-[210px]"
              style={{
                transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`,
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl sm:text-2xl font-black text-white leading-none">4.2</span>
                <div className="flex text-[#c6ff00]">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c6ff00]" />
                  ))}
                  <Star className="w-3.5 h-3.5 text-neutral-500 fill-neutral-500" />
                </div>
              </div>
              <div className="text-[11px] font-bold tracking-wider text-neutral-300 uppercase">
                176 GOOGLE REVIEWS
              </div>
              <div className="text-[10px] text-neutral-400 mt-0.5">
                Verified Visitor Score
              </div>
            </motion.div>

            {/* Floating Glass UI Card 2: Hours & Open Status */}
            <motion.div
              initial={{ opacity: 0, x: 25, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-5 -right-2 sm:-right-6 z-30 p-3.5 sm:p-4 rounded-xl glass-panel shadow-2xl border border-white/15 min-w-[180px] sm:min-w-[200px]"
              style={{
                transform: `translate(${mousePos.x * 14}px, ${mousePos.y * 14}px)`,
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c6ff00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c6ff00]"></span>
                </span>
                <span className="text-xs font-black uppercase text-[#c6ff00] tracking-wider">
                  OPEN TODAY
                </span>
              </div>
              <div className="text-sm font-bold text-white leading-none">
                Closes 12 AM (Midnight)
              </div>
              <div className="text-[10px] text-neutral-400 mt-1 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>6 Days / Week Active</span>
              </div>
            </motion.div>

            {/* Floating Glass UI Card 3: Core Disciplines Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-1/2 -right-3 sm:-right-8 -translate-y-1/2 z-30 p-3 rounded-xl glass-panel border border-[#c6ff00]/20 shadow-xl hidden md:block"
              style={{
                transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-[#c6ff00]/15 text-[#c6ff00]">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold uppercase text-white tracking-wider">
                    PERSONAL TRAINING
                  </div>
                  <div className="text-[10px] text-neutral-400 font-medium">
                    Aerobics · Cycling · Nutrition
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
