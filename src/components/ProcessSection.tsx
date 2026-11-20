import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Language, PROCESS_STEPS, UI_COPY } from '../data/content';
import { PROCESS_THEMES } from '../data/themes';

interface ProcessSectionProps {
  lang: Language;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ProcessSection({ lang }: ProcessSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStep = PROCESS_STEPS[activeIndex];
  const activeTheme = PROCESS_THEMES[currentStep.id] || PROCESS_THEMES.discovery;
  const progressRatio = (activeIndex + 1) / PROCESS_STEPS.length;

  return (
    <section
      id="process"
      className="relative overflow-hidden py-16 sm:py-24 bg-[#0B0F19] text-slate-100"
    >
      {/* Subtle multi-color dark canvas aura */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -15, 10, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-violet-600/20 via-blue-500/15 to-emerald-500/15 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="max-w-3xl"
        >
          <p className="text-xs sm:text-sm font-medium tracking-wide bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            {UI_COPY.processSection.kicker[lang]}
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-4xl font-semibold text-white tracking-tight [text-wrap:balance]">
            {UI_COPY.processSection.heading[lang]}
          </h2>
        </motion.div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Interactive Step List */}
          <div className="lg:col-span-5 space-y-2.5">
            {PROCESS_STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              const stepTheme = PROCESS_THEMES[step.id] || PROCESS_THEMES.discovery;

              return (
                <motion.button
                  key={step.id}
                  type="button"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.16 }}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left p-5 rounded-xl border transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? 'bg-slate-900/95 border-slate-700 text-white'
                      : 'bg-slate-900/30 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="process-active-ring"
                      transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                      className={`absolute inset-0 rounded-xl border ${stepTheme.darkBorder} pointer-events-none`}
                    />
                  )}
                  <div className="relative flex items-baseline justify-between gap-4">
                    <span className={`font-mono text-xs font-medium tabular-nums ${stepTheme.darkText}`}>
                      {step.number}
                    </span>
                    <span className="text-xs text-slate-400 tabular-nums">
                      {step.duration[lang]}
                    </span>
                  </div>
                  <div className="relative mt-2 font-display text-lg font-medium tracking-wide">
                    {step.title[lang]}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Animated Stage Panel */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/75 p-6 sm:p-10 min-h-[340px] flex flex-col justify-between">
              {/* Animated colorful step progress track */}
              <div className="absolute inset-x-0 top-0 h-1 bg-slate-800">
                <motion.div
                  className={`h-full w-full origin-left bg-gradient-to-r ${activeTheme.gradientBar}`}
                  animate={{ scaleX: progressRatio }}
                  transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                />
              </div>

              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br ${activeTheme.darkGlow} blur-2xl`}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.26, ease: EASE_OUT_EXPO }}
                  className="relative"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className={`tabular-nums font-medium ${activeTheme.darkText}`}>
                      {currentStep.number}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">
                      ·
                    </span>
                    <span className="text-slate-300">{currentStep.duration[lang]}</span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                    {currentStep.title[lang]}
                  </h3>

                  <p className="mt-4 text-base text-slate-300 leading-relaxed tracking-wide">
                    {currentStep.summary[lang]}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <p className="text-xs font-medium tracking-wide text-slate-400 mb-4">
                      {UI_COPY.processSection.outputsLabel[lang]}
                    </p>
                    <ul className="space-y-3">
                      {currentStep.outputs[lang].map((output, idx) => (
                        <motion.li
                          key={output}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.22, delay: idx * 0.06, ease: EASE_OUT_EXPO }}
                          className="flex items-start gap-3 text-sm sm:text-base text-slate-200 tracking-wide"
                        >
                          <CheckCircle2 className={`w-4 h-4 mt-1 shrink-0 ${activeTheme.darkText}`} />
                          <span>{output}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
