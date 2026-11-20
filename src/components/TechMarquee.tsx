import { motion } from 'motion/react';
import { Language } from '../data/content';

interface TechMarqueeProps {
  lang: Language;
}

const TECH_STACK = [
  { name: 'React 19', color: 'text-sky-400' },
  { name: 'Next.js', color: 'text-white' },
  { name: 'TypeScript', color: 'text-blue-400' },
  { name: 'Node.js', color: 'text-emerald-400' },
  { name: 'Flutter', color: 'text-cyan-400' },
  { name: 'React Native', color: 'text-indigo-400' },
  { name: 'PostgreSQL', color: 'text-amber-400' },
  { name: 'AWS Cloud', color: 'text-orange-400' },
  { name: 'Docker', color: 'text-sky-300' },
  { name: 'Figma Systems', color: 'text-fuchsia-400' },
];

export function TechMarquee({ lang }: TechMarqueeProps) {
  const repeated = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="bg-[#0B0F19] border-y border-slate-800 py-4 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center justify-between">
        <span className="text-[11px] font-medium tracking-wide text-slate-400">
          {lang === 'bn'
            ? 'আমাদের প্রোডাকশন টেকনোলজি স্ট্যাক'
            : 'Production Engineering Stack'}
        </span>
        <span className="text-[11px] font-mono text-slate-500">
          It BD Limited
        </span>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex shrink-0 items-center gap-10 pr-10"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {repeated.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3 whitespace-nowrap shrink-0"
            >
              <span className={`font-display text-sm sm:text-base font-semibold ${item.color}`}>
                {item.name}
              </span>
              <span aria-hidden="true" className="text-slate-600 text-xs">
                /
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
