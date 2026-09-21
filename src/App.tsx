/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './components/HeroSection';
import { BrandStorySection } from './components/BrandStorySection';
import { WhatsAppSection } from './components/WhatsAppSection';
import { InstagramSection } from './components/InstagramSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FloatingActionBar } from './components/FloatingActionBar';

export default function App() {
  const handleScrollToContent = () => {
    const target = document.getElementById('secao-proposta');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-800 flex justify-center selection:bg-red-500 selection:text-white">
      {/* Background ambient lighting for desktop viewport */}
      <div className="fixed inset-0 pointer-events-none opacity-40 overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-red-600/30 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-rose-500/20 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full bg-amber-500/15 blur-[130px]" />
      </div>

      {/* Main Biosite Container — Mobile-First Precision */}
      <main
        id="laura-kids-biosite-container"
        className="w-full max-w-md md:max-w-lg min-h-screen bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] relative flex flex-col transition-all"
      >
        {/* SEÇÃO 1 — CAPA */}
        <HeroSection onExploreClick={handleScrollToContent} />

        {/* SEÇÃO 2 — DESTAQUE DA MARCA */}
        <BrandStorySection />

        {/* SEÇÃO 3 — WHATSAPP */}
        <WhatsAppSection />

        {/* SEÇÃO 4 — INSTAGRAM */}
        <InstagramSection />

        {/* SEÇÃO 5 — CHAMADA FINAL */}
        <FinalCtaSection />

        {/* FLOATING ACTION BAR FOR INSTANT MOBILE ACCESS */}
        <FloatingActionBar />
      </main>
    </div>
  );
}
