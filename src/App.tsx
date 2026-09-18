/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ServicesSection } from './components/ServicesSection';
import { TrainersSection } from './components/TrainersSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('Personal Training');

  const handleOpenBookingModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForBooking(serviceName);
    }
    setIsModalOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForBooking(serviceTitle);
    // Smooth scroll down to booking or open modal
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  const handleSelectProgram = (programTitle: string) => {
    setSelectedServiceForBooking(programTitle);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-[#c6ff00] selection:text-black antialiased overflow-x-hidden relative">
      {/* Sticky Header */}
      <Navbar onOpenBooking={() => handleOpenBookingModal()} />

      <main>
        {/* Hero Section — Rich Above The Fold Viewport */}
        <Hero onOpenBooking={() => handleOpenBookingModal()} />

        {/* Horizontal Trust Metrics Strip */}
        <TrustStrip />

        {/* Editorial About Section */}
        <AboutSection onOpenBooking={() => handleOpenBookingModal()} />

        {/* Programs: Train With Purpose (01 - 06) */}
        <ProgramsSection onSelectProgram={handleSelectProgram} />

        {/* Comprehensive Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Trainers / Coaching Philosophy: Train With Focus */}
        <TrainersSection onOpenBooking={() => handleOpenBookingModal()} />

        {/* Visual Facilities & Hygiene Tour */}
        <FacilitiesSection />

        {/* Interactive Editorial Gallery with Lightbox */}
        <GallerySection />

        {/* Authentic 4.2 / 5 Google Reviews Proof */}
        <ReviewsSection />

        {/* Direct WhatsApp Booking Engine */}
        <BookingSection initialService={selectedServiceForBooking} />

        {/* Lahore Location & Custom Dark Map Visual */}
        <LocationSection />

        {/* Final High-Conversion Contact Banner */}
        <ContactCta onOpenBooking={() => handleOpenBookingModal()} />
      </main>

      {/* Oversized Luxury Footer */}
      <Footer onOpenBooking={() => handleOpenBookingModal()} />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Global Quick Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedServiceForBooking}
      />
    </div>
  );
}
