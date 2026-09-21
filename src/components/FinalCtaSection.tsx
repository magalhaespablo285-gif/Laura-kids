import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Send, ExternalLink } from 'lucide-react';
import { LauraKidsLogo } from './LauraKidsLogo';
import { WhatsApp3DLogo, Instagram3DLogo } from './OfficialLogos3D';
import { OFFICIAL_LINKS } from '../types';
import { DecorativeParticles } from './DecorativeParticles';

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      id="secao-chamada-final"
      className="relative pt-16 pb-14 px-6 bg-gradient-to-b from-red-600 via-rose-700 to-red-800 text-white rounded-t-[2.5rem] shadow-[0_-12px_40px_rgba(185,28,28,0.25)] overflow-hidden"
    >
      <DecorativeParticles />

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center text-center">
        {/* LAURA KIDS Logo Spotlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-5"
        >
          <LauraKidsLogo size="lg" withGlow={true} withFloat={true} themeVariant="badge" />
        </motion.div>

        {/* Brand Name & Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2 mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-semibold text-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Laura Kids</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif tracking-tight text-white drop-shadow-sm">
            Laura Kids
          </h2>

          <p className="text-base sm:text-lg font-medium text-amber-100/95 max-w-xs mx-auto leading-snug">
            “Looks com amor de mãe para vestir, brincar e encantar.”
          </p>

          <p className="text-xs text-rose-100/80 max-w-xs mx-auto pt-1 leading-relaxed">
            Venha fazer parte da nossa família. Estamos esperando você no WhatsApp e no Instagram!
          </p>
        </motion.div>

        {/* Two Official Action Buttons: WhatsApp and Instagram */}
        <div className="w-full space-y-3.5">
          {/* WhatsApp Button */}
          <motion.a
            id="btn-final-whatsapp"
            href={OFFICIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 text-white shadow-[0_12px_28px_rgba(16,185,129,0.45)] border-2 border-emerald-300/60 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-xl pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="shrink-0 bg-white/20 p-1.5 rounded-xl border border-white/30 backdrop-blur-sm">
                <WhatsApp3DLogo size="sm" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold text-emerald-100 tracking-wider">
                  Atendimento Online
                </span>
                <span className="block text-base sm:text-lg font-extrabold text-white">
                  WhatsApp
                </span>
              </div>
            </div>

            <div className="relative z-10 w-9 h-9 rounded-xl bg-white text-emerald-700 flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
              <Send className="w-4 h-4 -rotate-12 fill-emerald-600 text-emerald-600" />
            </div>
          </motion.a>

          {/* Instagram Button */}
          <motion.a
            id="btn-final-instagram"
            href={OFFICIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white shadow-[0_12px_28px_rgba(225,48,108,0.45)] border-2 border-pink-300/50 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-xl pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="shrink-0 bg-white/20 p-1.5 rounded-xl border border-white/30 backdrop-blur-sm">
                <Instagram3DLogo size="sm" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold text-pink-100 tracking-wider">
                  Siga no Instagram
                </span>
                <span className="block text-base sm:text-lg font-extrabold text-white">
                  Instagram
                </span>
              </div>
            </div>

            <div className="relative z-10 w-9 h-9 rounded-xl bg-white text-rose-600 flex items-center justify-center shadow-md group-hover:translate-x-1 transition-transform">
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>
        </div>

        {/* Brand Signoff */}
        <div className="mt-10 pt-6 border-t border-white/20 w-full flex flex-col items-center gap-2 text-xs text-rose-200/90">
          <div className="flex items-center gap-1.5 text-amber-200 font-medium">
            <span>Feito com</span>
            <Heart className="w-3.5 h-3.5 fill-rose-300 text-rose-300 inline" />
            <span>para a sua família</span>
          </div>
          <p className="text-[11px] text-white/60">
            © {new Date().getFullYear()} Laura Kids • Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};
