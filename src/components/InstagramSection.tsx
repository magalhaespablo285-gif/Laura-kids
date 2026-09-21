import React from 'react';
import { motion } from 'motion/react';
import { Camera, Sparkles, Heart, ExternalLink, Users } from 'lucide-react';
import { Instagram3DLogo } from './OfficialLogos3D';
import { OFFICIAL_LINKS } from '../types';

export const InstagramSection: React.FC = () => {
  return (
    <section
      id="secao-instagram"
      className="relative py-14 px-5 bg-gradient-to-b from-white via-pink-50/40 to-rose-50/60 overflow-hidden"
    >
      {/* Ambient pink/purple aura */}
      <div className="absolute top-1/3 right-1/2 translate-x-1/2 w-80 h-80 rounded-full bg-pink-400/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-md mx-auto text-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-pink-800 font-semibold text-xs tracking-wider uppercase mb-4"
        >
          <Camera className="w-3.5 h-3.5 text-pink-600" />
          Comunidade & Novidades Diárias
        </motion.div>

        {/* 3D Instagram Spotlight Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5"
        >
          <div className="relative group p-4 rounded-3xl bg-white/90 shadow-[0_20px_40px_-15px_rgba(225,48,108,0.35)] border border-pink-100">
            <Instagram3DLogo size="xl" />
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 text-white text-[11px] font-bold shadow-sm whitespace-nowrap">
              @laurakidsloja00
            </div>
          </div>
        </motion.div>

        {/* Headings & Calls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2 mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Acompanhe a Laura Kids
          </h2>
          <p className="text-base font-semibold text-pink-700">
            Siga nosso perfil e encante-se todos os dias com os looks mais fofos!
          </p>
          <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
            Veja em primeira mão lançamentos, provadores, combinações perfeitas e clientes mirins esbanjando charme.
          </p>
        </motion.div>

        {/* 3 Mini Highlight Pills */}
        <div className="grid grid-cols-3 gap-2 mb-6 text-center">
          <div className="p-2.5 rounded-2xl bg-white/90 border border-pink-100 shadow-sm">
            <Sparkles className="w-4 h-4 text-pink-500 mx-auto mb-1" />
            <span className="block text-[11px] font-bold text-neutral-800">Lançamentos</span>
            <span className="block text-[9px] text-neutral-500">Toda semana</span>
          </div>
          <div className="p-2.5 rounded-2xl bg-white/90 border border-pink-100 shadow-sm">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 mx-auto mb-1" />
            <span className="block text-[11px] font-bold text-neutral-800">Provadores</span>
            <span className="block text-[9px] text-neutral-500">Nos Stories</span>
          </div>
          <div className="p-2.5 rounded-2xl bg-white/90 border border-pink-100 shadow-sm">
            <Users className="w-4 h-4 text-purple-500 mx-auto mb-1" />
            <span className="block text-[11px] font-bold text-neutral-800">Inspiração</span>
            <span className="block text-[9px] text-neutral-500">Looks reais</span>
          </div>
        </div>

        {/* Huge Prominent 3D Instagram Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full"
        >
          <a
            id="btn-instagram-principal"
            href={OFFICIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full flex items-center justify-between p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white shadow-[0_16px_36px_-6px_rgba(225,48,108,0.45),0_8px_16px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_42px_-4px_rgba(225,48,108,0.55)] border-2 border-pink-300/50 transition-all duration-300 cursor-pointer overflow-hidden text-left"
          >
            {/* 3D Specular Sheen */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-2xl pointer-events-none" />

            <div className="flex items-center gap-3.5 relative z-10">
              <div className="shrink-0 bg-white/20 p-2.5 rounded-2xl backdrop-blur-sm border border-white/30 shadow-inner">
                <Instagram3DLogo size="sm" />
              </div>
              <div>
                <span className="block text-[11px] font-bold tracking-wider uppercase text-pink-100">
                  Acesse o Perfil Oficial
                </span>
                <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-white drop-shadow-sm">
                  Conheça nosso Instagram
                </span>
              </div>
            </div>

            <div className="shrink-0 relative z-10 w-11 h-11 rounded-2xl bg-white text-rose-600 flex items-center justify-center shadow-md group-hover:translate-x-1 group-hover:scale-105 transition-all">
              <ExternalLink className="w-5 h-5" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
