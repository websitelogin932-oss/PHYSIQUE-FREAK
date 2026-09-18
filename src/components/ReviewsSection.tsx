import React from 'react';
import { Star, ExternalLink, ShieldCheck, CheckCircle, MessageSquareQuote } from 'lucide-react';
import { GYM_DETAILS, REVIEWS_HIGHLIGHTS } from '../data/gymData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-[#09090d] border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c6ff00]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-0.5 bg-[#c6ff00]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c6ff00]">
              AUTHENTIC SOCIAL PROOF
            </span>
            <span className="w-4 h-0.5 bg-[#c6ff00]" />
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            REPUTATION BUILT <br />
            <span className="text-neutral-400">ON CONSISTENCY.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            See what visitors and members are saying about Physique Freak GYM on Google Reviews.
          </p>
        </div>

        {/* Major Social Proof Display Card */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-neutral-900/80 border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden mb-12">
          {/* Subtle lime edge highlight */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#c6ff00] to-transparent" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            {/* Left: 4.2 Star Score */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-6xl sm:text-7xl font-heading font-black text-white leading-none tracking-tight">
                4.2
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1 text-[#c6ff00] mb-2">
                  {/* 4 full stars */}
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#c6ff00]" />
                  ))}
                  {/* 1 partial 20% filled star */}
                  <div className="relative w-6 h-6">
                    <Star className="w-6 h-6 text-neutral-600 fill-neutral-700" />
                    <div className="absolute inset-0 overflow-hidden w-[20%]">
                      <Star className="w-6 h-6 fill-[#c6ff00] text-[#c6ff00]" />
                    </div>
                  </div>
                </div>
                <div className="text-sm font-bold text-neutral-200 uppercase tracking-wider">
                  176 Google Reviews
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  Verified Lahore Gym Rating
                </div>
              </div>
            </div>

            {/* Right: Google Reviews Link Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="reviews-google-link"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/10 hover:border-[#c6ff00]/40 transition-all shadow-lg active:scale-95"
              >
                <span>VIEW GOOGLE REVIEWS</span>
                <ExternalLink className="w-4 h-4 text-[#c6ff00]" />
              </a>
            </div>
          </div>
        </div>

        {/* Authentic Feedback Themes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {REVIEWS_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c6ff00] mb-3">
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>{item.theme}</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-medium pt-4 border-t border-white/5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>{item.verified}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
