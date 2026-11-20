import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe,
  Smartphone,
  Database,
  CloudCog,
} from 'lucide-react';
import { Language, SERVICES, UI_COPY } from '../data/content';
import { SERVICE_THEMES } from '../data/themes';

interface ServicesBentoProps {
  lang: Language;
  onSelectServiceForContact: (serviceId: string) => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const SERVICE_ICONS: Record<string, typeof Globe> = {
  'web-saas': Globe,
  'mobile-apps': Smartphone,
  'enterprise-erp': Database,
  'cloud-uiux': CloudCog,
};

export function ServicesBento({ lang, onSelectServiceForContact }: ServicesBentoProps) {
  const [expandedId, setExpandedId] = useState<string>('web-saas');

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="max-w-3xl"
        >
          <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
            {UI_COPY.servicesSection.kicker[lang]}
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-slate-950 tracking-tight [text-wrap:balance]">
            {UI_COPY.servicesSection.heading[lang]}
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {UI_COPY.servicesSection.description[lang]}
          </p>
        </motion.div>

        {/* Colorful Asymmetric Bento Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-6 gap-5">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedId === service.id;
            const theme = SERVICE_THEMES[service.id] || SERVICE_THEMES['web-saas'];
            const Icon = SERVICE_ICONS[service.id] || Globe;

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: EASE_OUT_EXPO }}
                className={`${service.spanClass} relative overflow-hidden rounded-xl border transition-colors duration-200 ${
                  isExpanded
                    ? `bg-white ${theme.softBorder} shadow-sm`
                    : 'bg-white/85 border-slate-200/90 hover:bg-white hover:border-slate-300'
                }`}
              >
                {/* Colorful top accent bar */}
                <div
                  aria-hidden="true"
                  className={`h-1 w-full bg-gradient-to-r ${theme.gradientBar}`}
                />

                <div className="p-6 sm:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setExpandedId(service.id)}
                        className="text-left flex-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div
                            whileHover={{ rotate: 6, scale: 1.06 }}
                            transition={{ duration: 0.2 }}
                            className={`w-10 h-10 rounded-lg ${theme.iconBg} ${theme.iconText} flex items-center justify-center shrink-0`}
                          >
                            <Icon className="w-5 h-5" />
                          </motion.div>
                          <span className={`font-mono text-xs font-medium tabular-nums ${theme.accentText}`}>
                            {service.number} · {service.timeline[lang]}
                          </span>
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-950 tracking-tight">
                          {service.title[lang]}
                        </h3>
                      </button>

                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? '' : service.id)}
                        aria-expanded={isExpanded}
                        aria-label={`Toggle details for ${service.title[lang]}`}
                        className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors shrink-0 cursor-pointer ${
                          isExpanded
                            ? `${theme.softBg} ${theme.softBorder} ${theme.accentText}`
                            : 'border-slate-200 bg-white text-slate-600 hover:text-slate-950'
                        }`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.summary[lang]}
                    </p>

                    {/* Clean unboxed tech stack list with middle-dot separators */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-500">
                      {service.stack.map((tech, idx) => (
                        <span key={tech} className="inline-flex items-center gap-2">
                          <span>{tech}</span>
                          {idx < service.stack.length - 1 && (
                            <span aria-hidden="true" className="text-slate-300">
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
                        className="mt-6 pt-6 border-t border-slate-200/80 space-y-4"
                      >
                        <div>
                          <p className="text-xs font-semibold text-slate-500 mb-3">
                            {UI_COPY.servicesSection.deliverablesLabel[lang]}
                          </p>
                          <ul className="space-y-2.5">
                            {service.deliverables[lang].map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-sm text-slate-700"
                              >
                                <Check className={`w-4 h-4 mt-0.5 shrink-0 ${theme.accentText}`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2">
                          <motion.button
                            type="button"
                            whileHover={{ x: 2 }}
                            onClick={() => onSelectServiceForContact(service.id)}
                            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${theme.accentText}`}
                          >
                            <span>{UI_COPY.servicesSection.discussAction[lang]}</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
