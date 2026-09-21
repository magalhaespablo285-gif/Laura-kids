import React, { useState } from 'react';
import { motion } from 'motion/react';
import { OFFICIAL_LINKS } from '../types';

interface LauraKidsLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  withGlow?: boolean;
  withFloat?: boolean;
  themeVariant?: 'on-red' | 'on-white' | 'badge';
}

export const LauraKidsLogo: React.FC<LauraKidsLogoProps> = ({
  size = 'md',
  className = '',
  withGlow = true,
  withFloat = true,
  themeVariant = 'badge',
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Dynamic sizing
  const dimensions = {
    sm: { container: 'w-24 h-24', img: 'max-h-20', badgePad: 'p-2' },
    md: { container: 'w-40 h-40', img: 'max-h-36', badgePad: 'p-3' },
    lg: { container: 'w-52 h-52', img: 'max-h-48', badgePad: 'p-4' },
    hero: { container: 'w-64 h-64 sm:w-72 sm:h-72', img: 'max-h-60 sm:max-h-64', badgePad: 'p-4 sm:p-5' },
  }[size];

  const floatingTransition = withFloat
    ? {
        y: [-4, 5, -4],
        rotate: [-0.5, 0.5, -0.5],
        transition: {
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        },
      }
    : undefined;

  return (
    <motion.div
      animate={floatingTransition}
      className={`relative inline-flex items-center justify-center shrink-0 ${dimensions.container} ${className}`}
      id={`laura-kids-logo-${size}`}
    >
      {/* 3D Depth Backing & Glow Rings */}
      {withGlow && (
        <>
          {/* Ambient Warm Golden-Pastel Radiance */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-300/35 via-rose-300/30 to-yellow-200/40 blur-xl scale-110 pointer-events-none transform -z-10 animate-pulse" />
          {/* Subtle Outer Drop Shadow */}
          <div className="absolute -inset-1 rounded-full bg-red-950/15 blur-md transform translate-y-3 pointer-events-none -z-10" />
        </>
      )}

      {/* Finished Badge Container with 3D Embossed Edge & Crisp Pure Backing */}
      {themeVariant === 'badge' ? (
        <div className={`relative w-full h-full rounded-full bg-white/95 backdrop-blur-md ${dimensions.badgePad} flex items-center justify-center shadow-[0_16px_36px_-6px_rgba(225,29,72,0.3),0_8px_16px_-4px_rgba(0,0,0,0.12),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-3px_6px_rgba(244,63,94,0.15)] border-2 border-white/80 ring-4 ring-rose-100/60`}>
          {/* Subtle 3D Glass Gleam Accent */}
          <div className="absolute top-1 left-1/4 right-1/4 h-3 bg-gradient-to-b from-white/90 to-transparent rounded-full pointer-events-none opacity-80" />

          <img
            src={OFFICIAL_LINKS.logoUrl}
            alt="LAURA KIDS — Moda Infantil"
            className={`w-full h-full object-contain ${dimensions.img} transition-all duration-500 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-80 scale-95'
            } filter drop-shadow-[0_6px_10px_rgba(185,28,28,0.18)]`}
            loading="eager"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setHasError(true)}
          />
        </div>
      ) : themeVariant === 'on-red' ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-2 rounded-full bg-white/20 blur-sm pointer-events-none" />
          <img
            src={OFFICIAL_LINKS.logoUrl}
            alt="LAURA KIDS — Moda Infantil"
            className={`w-full h-full object-contain ${dimensions.img} filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)]`}
            loading="eager"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={OFFICIAL_LINKS.logoUrl}
            alt="LAURA KIDS — Moda Infantil"
            className={`w-full h-full object-contain ${dimensions.img} filter drop-shadow-[0_8px_16px_rgba(225,29,72,0.15)]`}
            loading="eager"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setHasError(true)}
          />
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 rounded-full bg-red-100 flex flex-col items-center justify-center p-2 text-center text-red-700 font-bold text-xs">
          <span>LAURA KIDS</span>
          <span className="text-[9px] text-red-500 font-normal">Moda Infantil</span>
        </div>
      )}
    </motion.div>
  );
};
