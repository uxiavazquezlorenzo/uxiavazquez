/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { BenefitsSection } from './components/BenefitsSection.tsx';
import { AuthoritySection } from './components/AuthoritySection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { SocialProofSection } from './components/SocialProofSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { LastCallSection } from './components/LastCallSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';

const BOOKING_URL = 'https://calendar.app.google/ZF7g8QW8wLK3eqVz7';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f3efe8] text-[#4e5b3c] flex flex-col font-sora-regular selection:bg-[#fc9246]/20 selection:text-[#4e5b3c]">
      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} bookingUrl={BOOKING_URL} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection bookingUrl={BOOKING_URL} onOpenBooking={handleOpenBooking} />

        {/* 2. Sección de Beneficios */}
        <BenefitsSection bookingUrl={BOOKING_URL} />

        {/* 3. Sección de Autoridad & Filosofía */}
        <AuthoritySection />

        {/* 3b. Servicios específicos (Grupal, Individual, Programación) */}
        <ServicesSection bookingUrl={BOOKING_URL} />

        {/* 4. Sección de Prueba Social (2 testimonios con foto circular) */}
        <SocialProofSection />

        {/* Preguntas Frecuentes (Eliminación de fricción pre-conversión) */}
        <FaqSection />

        {/* 5. Sección Final (Last Call con fondo oscuro) */}
        <LastCallSection bookingUrl={BOOKING_URL} onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer bookingUrl={BOOKING_URL} />

      {/* Interactive Booking & Info Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        bookingUrl={BOOKING_URL}
      />
    </div>
  );
}
