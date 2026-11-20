import { Mail, Phone } from 'lucide-react';
import { COMPANY_CONTACT, Language, UI_COPY } from '../data/content';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-[#0B0F19] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          <div className="md:col-span-5">
            <a
              href="#top"
              className="font-display text-xl font-bold text-white tracking-tight"
            >
              It BD Limited
            </a>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-sm">
              {UI_COPY.footer.tagline[lang]}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5 text-sm">
            <a
              href="#services"
              className="block text-slate-300 hover:text-white transition-colors"
            >
              {UI_COPY.nav.services[lang]}
            </a>
            <a
              href="#process"
              className="block text-slate-300 hover:text-white transition-colors"
            >
              {UI_COPY.nav.process[lang]}
            </a>
            <a
              href="#work"
              className="block text-slate-300 hover:text-white transition-colors"
            >
              {UI_COPY.nav.work[lang]}
            </a>
            <a
              href="#contact"
              className="block text-slate-300 hover:text-white transition-colors"
            >
              {UI_COPY.nav.contact[lang]}
            </a>
          </div>

          <div className="md:col-span-4 space-y-3 text-sm">
            <a
              href={COMPANY_CONTACT.phoneHref}
              className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={COMPANY_CONTACT.emailHref}
              className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors break-all"
            >
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
            <div className="text-xs text-slate-400 pt-1">
              {COMPANY_CONTACT.location[lang]} · {COMPANY_CONTACT.hours[lang]}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <span>{UI_COPY.footer.rights[lang]}</span>
          <span>{COMPANY_CONTACT.email}</span>
        </div>
      </div>
    </footer>
  );
}
