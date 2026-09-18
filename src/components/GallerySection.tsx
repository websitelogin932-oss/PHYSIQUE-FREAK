import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Equipment', 'Strength', 'Training', 'Atmosphere'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#07070a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-0.5 bg-[#c6ff00]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#c6ff00]">
                VISUAL SHOWCASE
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              THE TRAINING <br />
              <span className="text-[#c6ff00]">FLOOR.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#c6ff00] text-black shadow-[0_0_15px_rgba(198,255,0,0.3)]'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[260px] sm:auto-rows-[300px]">
          {filteredItems.map((item, idx) => {
            // Apply varied editorial spans based on item index or aspect
            const isSpan2Col = idx === 0 || idx === 5;
            const isSpan2Row = idx === 1;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(idx)}
                className={`group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-[#c6ff00]/40 transition-all duration-300 cursor-pointer shadow-xl ${
                  isSpan2Col ? 'sm:col-span-2' : ''
                } ${isSpan2Row ? 'sm:row-span-2' : ''}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Vignette & Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Tag & Title on hover */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#c6ff00] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-[#c6ff00]/30 inline-block mb-1.5">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-black text-white text-base sm:text-lg uppercase tracking-wide drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 group-hover:border-[#c6ff00]/60">
                    <Maximize2 className="w-4 h-4 text-[#c6ff00]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-neutral-900/80 border border-white/20 text-white hover:text-[#c6ff00] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-neutral-900/80 border border-white/20 text-white hover:text-[#c6ff00] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-neutral-900/80 border border-white/20 text-white hover:text-[#c6ff00] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Modal Image */}
            <div
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#c6ff00]">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <div className="text-white font-heading font-black text-lg uppercase">
                    {filteredItems[lightboxIndex].title}
                  </div>
                </div>
                <span className="text-xs text-neutral-400 font-mono">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
