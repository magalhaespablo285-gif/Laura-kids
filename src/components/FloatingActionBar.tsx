import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsApp3DLogo, Instagram3DLogo } from './OfficialLogos3D';
import { OFFICIAL_LINKS } from '../types';

export const FloatingActionBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal floating bar once user scrolls past hero section (~350px)
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          id="floating-quick-contact-bar"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
        >
          <div className="pointer-events-auto flex items-center gap-2 p-2 rounded-full bg-white/95 backdrop-blur-md shadow-[0_16px_32px_rgba(0,0,0,0.2),0_4px_12px_rgba(225,29,72,0.15)] border border-rose-200/80 max-w-sm w-full">
            {/* WhatsApp Quick Trigger */}
            <a
              id="floating-whatsapp-btn"
              href={OFFICIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xs sm:text-sm shadow-md hover:brightness-105 active:scale-98 transition-all"
            >
              <WhatsApp3DLogo size="sm" className="w-6 h-6" />
              <span>Chamar no WhatsApp</span>
            </a>

            {/* Instagram Quick Icon */}
            <a
              id="floating-instagram-btn"
              href={OFFICIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-2 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-md hover:scale-105 active:scale-95 transition-all"
              aria-label="Instagram Laura Kids"
            >
              <Instagram3DLogo size="sm" className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
