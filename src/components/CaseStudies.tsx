import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Check } from 'lucide-react';
import { CASE_STUDIES, CaseStudy, Language, TESTIMONIALS, UI_COPY } from '../data/content';
import { CASE_THEMES } from '../data/themes';
import { SafeImage } from './SafeImage';

interface CaseStudiesProps {
  lang: Language;
  onStartProject: () => void;
}

type CategoryFilter = 'all' | 'fintech' | 'ecommerce' | 'enterprise';

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function CaseStudies({ lang, onStartProject }: CaseStudiesProps) {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filteredStudies =
    filter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === filter);

  return (
    <section id="work" className="py-16 sm:py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 via-emerald-600 to-violet-600 bg-clip-text text-transparent">
              {UI_COPY.workSection.kicker[lang]}
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-slate-950 tracking-tight [text-wrap:balance]">
              {UI_COPY.workSection.heading[lang]}
            </h2>
          </div>

          {/* Interactive Segmented Filter Control with animated layoutId indicator */}
          <div
            role="group"
            aria-label="Filter case studies"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start md:self-auto"
          >
            {UI_COPY.workSection.filters.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`relative px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    active ? 'text-white' : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="case-filter-active"
                      transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
                      className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 shadow-xs"
                    />
                  )}
                  <span className="relative z-10">{tab.label[lang]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <motion.div
          layout
          className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study) => {
              const theme = CASE_THEMES[study.category];
              return (
                <motion.article
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.26, ease: EASE_OUT_EXPO }}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-slate-300 shadow-xs transition-colors"
                >
                  <div>
                    <div
                      aria-hidden="true"
                      className={`h-1 w-full bg-gradient-to-r ${theme.gradientBar}`}
                    />
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100 border-b border-slate-200/80">
                      <SafeImage
                        src={study.image}
                        alt={study.imageAlt[lang]}
                        fallbackTitle={study.title[lang]}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className={`font-medium ${theme.accentText}`}>
                          {study.categoryLabel[lang]}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{study.year}</span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{study.client[lang]}</span>
                      </div>

                      <h3 className="mt-3 font-display text-lg sm:text-xl font-semibold text-slate-950 tracking-tight leading-snug">
                        {study.title[lang]}
                      </h3>

                      <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                        {study.summary[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div>
                      <div className={`font-display text-xl font-bold tabular-nums ${theme.accentText}`}>
                        {study.metricValue}
                      </div>
                      <div className="text-xs text-slate-500">{study.metricLabel[lang]}</div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedCase(study)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${theme.softBg} ${theme.softBorder} ${theme.accentText}`}
                    >
                      <span>{UI_COPY.workSection.viewDetails[lang]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Adjacent Client Testimonials */}
        <div className="mt-16 sm:mt-20 pt-14 border-t border-slate-200/90">
          <div className="max-w-2xl mb-8">
            <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent">
              {UI_COPY.testimonialsSection.kicker[lang]}
            </p>
            <h3 className="mt-2 font-display text-xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              {UI_COPY.testimonialsSection.heading[lang]}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <motion.blockquote
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
                className="relative overflow-hidden bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-xs"
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                    idx === 0
                      ? 'from-blue-600 via-indigo-500 to-cyan-500'
                      : 'from-emerald-500 via-teal-500 to-violet-500'
                  }`}
                />
                <p className="text-base text-slate-700 leading-relaxed pt-1">
                  &ldquo;{item.quote[lang]}&rdquo;
                </p>
                <footer className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-display text-sm font-semibold text-slate-950">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {item.role[lang]} · {item.company}
                    </div>
                  </div>
                  <div
                    className={`text-xs font-semibold tabular-nums ${
                      idx === 0 ? 'text-blue-600' : 'text-emerald-600'
                    }`}
                  >
                    {item.outcome[lang]}
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCase(null)}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-slate-200 rounded-xl max-w-2xl w-full overflow-hidden shadow-xl my-8"
            >
              <div
                aria-hidden="true"
                className={`h-1.5 w-full bg-gradient-to-r ${CASE_THEMES[selectedCase.category].gradientBar}`}
              />
              <div className="aspect-[16/9] max-h-[280px] w-full overflow-hidden bg-slate-100 relative">
                <SafeImage
                  src={selectedCase.image}
                  alt={selectedCase.imageAlt[lang]}
                  fallbackTitle={selectedCase.title[lang]}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedCase(null)}
                  aria-label={UI_COPY.workSection.closeLabel[lang]}
                  className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/95 border border-slate-200 text-slate-800 hover:bg-white flex items-center justify-center shadow-sm cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className={`font-medium ${CASE_THEMES[selectedCase.category].accentText}`}>
                      {selectedCase.categoryLabel[lang]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{selectedCase.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedCase.client[lang]}</span>
                  </div>
                  <h3
                    id="case-modal-title"
                    className="mt-2 font-display text-2xl font-bold text-slate-950 tracking-tight"
                  >
                    {selectedCase.title[lang]}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500">
                      {UI_COPY.workSection.challengeLabel[lang]}
                    </h4>
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                      {selectedCase.challenge[lang]}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500">
                      {UI_COPY.workSection.solutionLabel[lang]}
                    </h4>
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                      {selectedCase.solution[lang]}
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-200">
                  <h4 className="text-xs font-semibold text-slate-500 mb-3">
                    {UI_COPY.workSection.impactLabel[lang]}
                  </h4>
                  <ul className="space-y-2">
                    {selectedCase.impactDetails[lang].map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-slate-800">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${CASE_THEMES[selectedCase.category].accentText}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500">
                    {selectedCase.stack.map((tech, idx) => (
                      <span key={tech} className="inline-flex items-center gap-2">
                        <span>{tech}</span>
                        {idx < selectedCase.stack.length - 1 && (
                          <span aria-hidden="true" className="text-slate-300">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCase(null);
                      onStartProject();
                    }}
                    className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {UI_COPY.nav.cta[lang]}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
