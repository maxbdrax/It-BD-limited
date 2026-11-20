import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { COMPANY_CONTACT, Language, UI_COPY } from '../data/content';
import { METRIC_BAR_GRADIENTS } from '../data/themes';
import { SafeImage } from './SafeImage';

interface HeroProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onStartProject: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero({ lang, onLanguageChange, onStartProject }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [0, 28]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20"
    >
      {/* Animated multi-spectrum ambient aurora orbs (compositor transform & opacity only) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 24, -12, 0],
            y: [0, -18, 14, 0],
            scale: [1, 1.06, 0.96, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-400/25 via-indigo-400/20 to-cyan-300/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -28, 16, 0],
            y: [0, 20, -14, 0],
            scale: [1, 0.95, 1.07, 1],
          }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-12 right-0 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-violet-400/20 via-fuchsia-300/15 to-amber-300/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 18, -18, 0],
            y: [0, 14, -10, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-emerald-300/20 via-teal-300/15 to-sky-300/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Language selector bar inside hero canvas */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-700 via-violet-700 to-teal-700 bg-clip-text text-transparent">
            {UI_COPY.hero.kicker[lang]}
          </p>

          <div
            role="group"
            aria-label="Language switch"
            className="inline-flex items-center p-1 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-lg shadow-xs"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('bn')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'bn'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              বাংলা
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                className="font-display font-bold text-slate-950 tracking-tight leading-[1.12] [text-wrap:balance]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.65rem)' }}
              >
                {lang === 'bn' ? (
                  <>
                    আপনার ব্যবসার জন্য{' '}
                    <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
                      নির্ভরযোগ্য ও আধুনিক
                    </span>{' '}
                    সফটওয়্যার সমাধান
                  </>
                ) : (
                  <>
                    Dependable{' '}
                    <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
                      software engineered
                    </span>{' '}
                    for modern business operations
                  </>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08, ease: EASE_OUT_EXPO }}
                className="mt-6 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl"
              >
                {UI_COPY.hero.subheadline[lang]}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: EASE_OUT_EXPO }}
              className="mt-8 pt-6 border-t border-slate-200/90 space-y-5"
            >
              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  onClick={onStartProject}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <span>{UI_COPY.hero.primaryCta[lang]}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.a
                  href={COMPANY_CONTACT.phoneHref}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.16 }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium text-slate-800 bg-white/95 border border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50/50 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span className="tabular-nums">{UI_COPY.hero.secondaryCta[lang]}</span>
                </motion.a>
              </div>

              {/* Clean unboxed direct contact metadata strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600">
                <a
                  href={COMPANY_CONTACT.emailHref}
                  className="inline-flex items-center gap-1.5 hover:text-rose-600 transition-colors font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-500" />
                  <span>{COMPANY_CONTACT.email}</span>
                </a>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <span>{COMPANY_CONTACT.hours[lang]}</span>
              </div>
            </motion.div>
          </div>

          {/* Right visual anchor: 16:9 Architectural Studio Photograph with scroll parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="lg:col-span-5"
          >
            <div className="p-[2px] h-full rounded-xl bg-gradient-to-br from-blue-500/40 via-violet-500/35 to-emerald-500/40">
              <div className="relative h-full min-h-[260px] lg:min-h-[400px] rounded-[10px] overflow-hidden bg-slate-900 group">
                <motion.div style={{ y: imageParallaxY }} className="w-full h-full">
                  <SafeImage
                    src="/src/assets/images/hero_software_studio_1794583421675.jpg"
                    alt="It BD Limited software engineering studio in Dhaka"
                    fallbackTitle="It BD Limited Software Studio"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </motion.div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-xs sm:text-sm font-medium text-white/95">
                    {UI_COPY.hero.studioCaption[lang]}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Quantified Proof Strip with colorful top bars */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {UI_COPY.metrics.map((item, idx) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.45, delay: idx * 0.07, ease: EASE_OUT_EXPO }}
              className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 backdrop-blur-sm p-5 sm:p-6 shadow-xs"
            >
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${METRIC_BAR_GRADIENTS[idx % METRIC_BAR_GRADIENTS.length]}`}
              />
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-950 tabular-nums tracking-tight">
                {item.value}
              </div>
              <div className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-snug">
                {item.label[lang]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
