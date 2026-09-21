import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles, CheckCircle2, Send } from 'lucide-react';
import { WhatsApp3DLogo } from './OfficialLogos3D';
import { OFFICIAL_LINKS } from '../types';

export const WhatsAppSection: React.FC = () => {
  return (
    <section
      id="secao-whatsapp"
      className="relative py-14 px-5 bg-gradient-to-b from-white via-emerald-50/30 to-emerald-50/60 overflow-hidden"
    >
      {/* Ambient glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-300/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-md mx-auto text-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-xs tracking-wider uppercase mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          Atendimento Direto & Exclusivo
        </motion.div>

        {/* 3D WhatsApp Spotlight Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-5"
        >
          <div className="relative group p-4 rounded-3xl bg-white/90 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.35)] border border-emerald-100">
            <WhatsApp3DLogo size="xl" />
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-sm whitespace-nowrap">
              WhatsApp Oficial
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
            Tire Dúvidas & Peça Catálogo
          </h2>
          <p className="text-base font-semibold text-emerald-700">
            “Entre em contato e confira nossos produtos.”
          </p>
          <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed">
            Estamos prontos para atender você com todo o carinho, tirar medidas e mostrar as novidades disponíveis.
          </p>
        </motion.div>

        {/* Huge Prominent 3D WhatsApp Button */}
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
            id="btn-whatsapp-principal"
            href={OFFICIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full flex items-center justify-between p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 text-white shadow-[0_16px_36px_-6px_rgba(16,185,129,0.5),0_8px_16px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_42px_-4px_rgba(16,185,129,0.6)] border-2 border-emerald-300/60 transition-all duration-300 cursor-pointer overflow-hidden text-left"
          >
            {/* 3D Specular Sheen */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-2xl pointer-events-none" />

            <div className="flex items-center gap-3.5 relative z-10">
              <div className="shrink-0 bg-white/20 p-2.5 rounded-2xl backdrop-blur-sm border border-white/30 shadow-inner">
                <WhatsApp3DLogo size="sm" />
              </div>
              <div>
                <span className="block text-[11px] font-bold tracking-wider uppercase text-emerald-100">
                  Clique para Iniciar Conversa
                </span>
                <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-white drop-shadow-sm">
                  Fale conosco pelo WhatsApp
                </span>
              </div>
            </div>

            <div className="shrink-0 relative z-10 w-11 h-11 rounded-2xl bg-white text-emerald-700 flex items-center justify-center shadow-md group-hover:translate-x-1 group-hover:scale-105 transition-all">
              <Send className="w-5 h-5 -rotate-12 fill-emerald-600 text-emerald-600" />
            </div>
          </a>
        </motion.div>

        {/* Benefits Micro-List */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-neutral-600">
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Resposta rápida
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Fotos dos looks reais
          </span>
          <span className="inline-flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Ajuda com numeração
          </span>
        </div>
      </div>
    </section>
  );
};
