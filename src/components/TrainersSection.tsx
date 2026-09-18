import React from 'react';
import { motion } from 'motion/react';
import { Compass, BarChart3, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface TrainersSectionProps {
  onOpenBooking: () => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onOpenBooking }) => {
  const coachingPillars = [
    {
      icon: <Compass className="w-5 h-5 text-[#c6ff00]" />,
      title: 'Personal Guidance',
      desc: 'Hands-on correction of lifting mechanics, posture, and movement patterns to build strength without injury.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#c6ff00]" />,
      title: 'Structured Workouts',
      desc: 'Systematic progression plans instead of random exercises, ensuring each week compounds into measurable gains.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#c6ff00]" />,
      title: 'Goal-Focused Training',
      desc: 'Targeted routines tailored to your specific aspirations — whether heavy strength, lean muscle, or aerobic conditioning.',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#c6ff00]" />,
      title: 'Supportive Environment',
      desc: 'An authentic fitness community on Walton Road where hard work, camaraderie, and discipline thrive together.',
    },
  ];

  return (
    <section id="trainers" className="relative py-24 sm:py-32 bg-[#07070a] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#c6ff00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Guiding Philosophy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-0.5 bg-[#c6ff00]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c6ff00]">
                COACHING PHILOSOPHY
              </span>
            </div>
            
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-6">
              TRAIN WITH <br />
              <span className="text-[#c6ff00]">FOCUS.</span>
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              At <strong className="text-white">Physique Freak GYM</strong>, we believe real physical transformation does not happen through quick fixes or guesswork. It happens through consistent, disciplined execution under watchful, focused direction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {coachingPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-900/60 border border-white/10 hover:border-[#c6ff00]/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-950 border border-white/10 flex items-center justify-center mb-3">
                    {pillar.icon}
                  </div>
                  <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-xl bg-[#c6ff00] text-black hover:bg-[#d8ff33] transition-all shadow-[0_0_25px_rgba(198,255,0,0.3)] active:scale-95"
            >
              <span>CONNECT WITH A COACH</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: High Quality Coaching Photography Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-neutral-900">
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <img
                  src={GYM_DETAILS.images.personalTraining}
                  alt="Personal Training and Coaching at Physique Freak GYM Lahore"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070a] via-transparent to-transparent" />
              </div>

              {/* Bottom Coach Motto Badge */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#c6ff00]">
                      FLOOR CULTURE
                    </span>
                    <div className="text-white font-heading font-black text-lg uppercase tracking-wide">
                      Accountability · Respect · Intensity
                    </div>
                  </div>
                  <span className="text-xs font-bold text-neutral-400 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
                    Shahtaj Colony
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
