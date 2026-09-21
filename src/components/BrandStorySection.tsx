import React from 'react';
import { motion } from 'motion/react';
import { Heart, Smile, Sparkles, ShieldCheck, Sun } from 'lucide-react';
import { BrandPillar } from '../types';

const PILLARS: BrandPillar[] = [
  {
    title: 'Amor de Mãe em Cada Peça',
    description: 'Tecidos nobres, toques macios e aconchego pensado especialmente para a pele sensível dos pequenos.',
    pastelBg: 'bg-rose-50 border-rose-200/70 text-rose-950',
    accentColor: 'text-rose-500 bg-rose-100/80',
    badge: 'Conforto',
  },
  {
    title: 'Feito para Brincar com Alegria',
    description: 'Modelagens leves que dão total liberdade de movimento para correr, pular, sonhar e se divertir.',
    pastelBg: 'bg-amber-50 border-amber-200/70 text-amber-950',
    accentColor: 'text-amber-500 bg-amber-100/80',
    badge: 'Liberdade',
  },
  {
    title: 'Qualidade & Durabilidade',
    description: 'Roupas que mantêm a vivacidade das cores e a maciez lavagem após lavagem, acompanhando o crescimento.',
    pastelBg: 'bg-emerald-50 border-emerald-200/70 text-emerald-950',
    accentColor: 'text-emerald-500 bg-emerald-100/80',
    badge: 'Confiança',
  },
  {
    title: 'Looks que Encantam',
    description: 'Estilo infantil lúdico e delicado, perfeito tanto para o dia a dia quanto para momentos inesquecíveis.',
    pastelBg: 'bg-sky-50 border-sky-200/70 text-sky-950',
    accentColor: 'text-sky-500 bg-sky-100/80',
    badge: 'Estilo',
  },
];

export const BrandStorySection: React.FC = () => {
  return (
    <section id="secao-proposta" className="relative py-14 px-5 bg-white overflow-hidden">
      {/* Soft pastel ambient gradient circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-rose-50/70 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-6 -right-12 w-64 h-64 rounded-full bg-amber-50/80 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-md mx-auto">
        {/* Header Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 font-semibold text-xs tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            Nossa Proposta de Amor
          </span>
        </div>

        {/* Central Slogan Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <div className="relative inline-block p-5 rounded-3xl bg-gradient-to-br from-rose-50 via-white to-amber-50/60 border border-rose-100 shadow-[0_10px_25px_-5px_rgba(244,63,94,0.1)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full shadow-sm">
              Propósito Laura Kids
            </div>
            <p className="text-xl sm:text-2xl font-serif font-bold text-red-600 leading-snug">
              “Looks com amor de mãe
            </p>
            <p className="text-lg sm:text-xl font-serif font-medium text-neutral-800 leading-snug mt-1">
              Para vestir, brincar e encantar.”
            </p>
            <div className="w-12 h-1 bg-amber-400 rounded-full mx-auto mt-3" />
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed mt-4 px-2">
            Na <strong className="text-red-600 font-semibold">Laura Kids</strong>, cada roupinha é escolhida pensando no sorriso do seu filho e na tranquilidade do seu coração de mãe. Moda infantil de verdade: fofa, confortável e feita para viver as melhores memórias da infância.
          </p>
        </motion.div>

        {/* Grid of 4 Brand Value Cards (Pastel Tones + Vibrant Contrast) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className={`p-4 rounded-2xl border ${pillar.pastelBg} shadow-sm relative flex flex-col justify-between transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold ${pillar.accentColor}`}>
                    {idx === 0 && <Heart className="w-4 h-4 fill-current" />}
                    {idx === 1 && <Smile className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 3 && <Sparkles className="w-4 h-4" />}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/80 border border-neutral-200/60 text-neutral-600">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-neutral-900 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-5 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/60 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-200/80 flex items-center justify-center shrink-0 text-amber-800">
            <Sun className="w-5 h-5" />
          </div>
          <p className="text-xs text-amber-900 leading-snug">
            Atendimento carinhoso e personalizado para ajudar você a encontrar o tamanho e look ideal.
          </p>
        </div>
      </div>
    </section>
  );
};
