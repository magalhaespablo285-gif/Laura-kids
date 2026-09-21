import React from 'react';
import { motion } from 'motion/react';

export const DecorativeParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft floating pastel stars and sparkles */}
      <motion.div
        animate={{ y: [-10, 10, -10], opacity: [0.35, 0.75, 0.35], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' as const }}
        className="absolute top-12 left-6 text-amber-200/60 text-xl"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8], opacity: [0.25, 0.65, 0.25], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' as const, delay: 1 }}
        className="absolute top-28 right-8 text-yellow-100/70 text-2xl"
      >
        ★
      </motion.div>

      <motion.div
        animate={{ y: [-12, 12, -12], x: [-4, 4, -4], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' as const, delay: 2 }}
        className="absolute top-1/2 left-4 text-pink-200/50 text-base"
      >
        ♥
      </motion.div>

      <motion.div
        animate={{ y: [6, -14, 6], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' as const, delay: 0.5 }}
        className="absolute top-2/3 right-6 text-amber-200/55 text-lg"
      >
        ✦
      </motion.div>

      <motion.div
        animate={{ y: [-8, 8, -8], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' as const, delay: 1.5 }}
        className="absolute bottom-24 left-10 text-yellow-200/40 text-xl"
      >
        ★
      </motion.div>

      {/* Gentle pastel ambient orbs */}
      <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-amber-300/15 blur-3xl" />
      <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full bg-rose-400/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl" />
    </div>
  );
};
