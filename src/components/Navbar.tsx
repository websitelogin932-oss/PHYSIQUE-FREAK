import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROGRAMS', href: '#programs' },
    { label: 'SERVICES', href: '#services' },
    { label: 'TRAINERS', href: '#trainers' },
    { label: 'FACILITIES', href: '#facilities' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'LOCATION', href: '#location' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0ded]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80 py-3.5'
          : 'bg-gradient-to-b from-[#070709]/95 to-transparent border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#home"
          id="nav-logo"
          className="group flex items-center gap-3 select-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 border border-white/15 overflow-hidden transition-all duration-300 group-hover:border-[#c6ff00]/60 group-hover:shadow-[0_0_20px_rgba(198,255,0,0.25)]">
            <span className="font-heading font-black text-xl text-white tracking-tighter">PF</span>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#c6ff00] rounded-tl-md rotate-45 transition-transform group-hover:scale-125" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-base sm:text-lg tracking-wider text-white leading-none group-hover:text-[#c6ff00] transition-colors">
              PHYSIQUE FREAK
            </span>
            <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-semibold leading-tight">
              GYM · LAHORE
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-7 text-xs font-semibold tracking-wider text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase()}`}
              className="relative py-1 transition-colors duration-200 hover:text-white group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c6ff00] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${GYM_DETAILS.phoneTel}`}
            id="nav-phone-link"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-white rounded-lg border border-white/10 hover:border-white/25 transition-all bg-neutral-900/60"
          >
            <Phone className="w-3.5 h-3.5 text-[#c6ff00]" />
            <span>0321 4265565</span>
          </a>
          <button
            onClick={onOpenBooking}
            id="nav-book-btn"
            className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-[#c6ff00] text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#d8ff33] hover:shadow-[0_0_25px_rgba(198,255,0,0.4)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              BOOK A SESSION
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            id="mobile-nav-book-btn"
            className="px-3 py-1.5 text-[11px] font-bold uppercase rounded-md bg-[#c6ff00] text-black tracking-wider"
          >
            BOOK
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="xl:hidden bg-[#0a0a0eed] backdrop-blur-2xl border-b border-white/15 px-6 pt-6 pb-8 transition-all animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <div className="flex flex-col space-y-3 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold tracking-wider text-neutral-200 hover:text-[#c6ff00] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg bg-[#c6ff00] text-black font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(198,255,0,0.3)]"
            >
              <span>BOOK A SESSION</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${GYM_DETAILS.phoneTel}`}
                className="py-2.5 px-3 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center gap-2 text-neutral-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#c6ff00]" />
                <span>Call Gym</span>
              </a>
              <a
                href={GYM_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center gap-2 text-[#25D366] font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
