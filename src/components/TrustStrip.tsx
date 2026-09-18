import React from 'react';
import { Star, Award, CheckCircle2, Globe, MapPin } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: <Star className="w-4 h-4 text-[#c6ff00] fill-[#c6ff00]" />,
      top: '4.2 ★',
      sub: 'Google Rating (Verified)',
    },
    {
      icon: <Award className="w-4 h-4 text-[#c6ff00]" />,
      top: '176',
      sub: 'Genuine Reviews',
    },
    {
      icon: <CheckCircle2 className="w-4 h-4 text-[#c6ff00]" />,
      top: 'PERSONAL TRAINING',
      sub: 'Tailored 1-on-1 Available',
    },
    {
      icon: <Globe className="w-4 h-4 text-[#c6ff00]" />,
      top: 'ONLINE CLASSES',
      sub: 'Remote Guidance Available',
    },
    {
      icon: <MapPin className="w-4 h-4 text-[#c6ff00]" />,
      top: 'LAHORE',
      sub: 'Shahtaj Colony, Walton Rd',
    },
  ];

  return (
    <section className="relative z-20 border-y border-white/10 bg-[#0c0c10] py-6 sm:py-8 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-start lg:items-center text-left lg:text-center px-3 ${
                idx > 0 ? 'pt-4 md:pt-0' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {item.icon}
                <span className="font-heading font-black text-white text-base sm:text-lg tracking-wider uppercase">
                  {item.top}
                </span>
              </div>
              <span className="text-xs font-medium text-neutral-400">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
