import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Heart } from 'lucide-react';
import { LauraKidsLogo } from './LauraKidsLogo';
import { DecorativeParticles } from './DecorativeParticles';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="secao-capa"
      className="relative min-h-[92vh] flex flex-col items-center justify-between px-6 py-10 overflow-hidden bg-gradient-to-b from-red-600 via-rose-600 to-red-700 text-white shadow-2xl rounded-b-[2.5rem]"
    >
      <DecorativeParticles />

      {/* Top micro-badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-semibold tracking-wide text-yellow-100 shadow-sm"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
        <span>Moda Infantil com Carinho & Estilo</span>
        <Heart className="w-3.5 h-3.5 text-rose-200 fill-rose-200" />
      </motion.div>

      {/* Main Center Content: Logo + Slogan */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto max-w-sm w-full pt-4">
        {/* LAURA KIDS Logo in 3D Spotlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 relative"
        >
          <LauraKidsLogo size="hero" withGlow={true} withFloat={true} themeVariant="badge" />
        </motion.div>

        {/* Highlighted Slogan Phrase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3"
        >
          <div className="inline-block">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-white drop-shadow-md leading-tight">
              “Looks com amor de mãe”
            </h1>
            <p className="text-lg sm:text-xl font-medium text-rose-100 tracking-wide mt-1">
              Para vestir, brincar e encantar.
            </p>
          </div>

          <p className="text-xs sm:text-sm text-red-100/90 font-light max-w-xs mx-auto leading-relaxed pt-1">
            Peças selecionadas com conforto absoluto, qualidade impecável e o encanto que a infância merece.
          </p>
        </motion.div>

        {/* Main CTA Button: Conhecer a Loja */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full mt-7"
        >
          <button
            id="btn-conhecer-loja"
            onClick={onExploreClick}
            className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-300 via-amber-400 to-amber-300 text-red-950 font-bold text-base shadow-[0_12px_28px_rgba(251,191,36,0.35),0_4px_8px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_34px_rgba(251,191,36,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-2 border-white/60 cursor-pointer"
          >
            {/* 3D Sheen highlight */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-xl pointer-events-none" />
            
            <Sparkles className="w-5 h-5 text-red-900 group-hover:rotate-12 transition-transform" />
            <span className="tracking-wide">Conhecer a Loja</span>
            <ArrowDown className="w-5 h-5 text-red-900 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Gentle Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const }}
        onClick={onExploreClick}
        className="relative z-10 flex flex-col items-center gap-1 text-white/70 text-xs cursor-pointer hover:text-white pt-4 pb-1"
      >
        <span className="text-[11px] uppercase tracking-widest font-semibold">Role para ver mais</span>
        <ArrowDown className="w-4 h-4 text-amber-200" />
      </motion.div>
    </section>
  );
};
