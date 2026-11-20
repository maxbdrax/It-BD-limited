import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Copy,
  Check,
  MessageSquare,
  AlertCircle,
  Send,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_CONTACT, Language, SERVICES, UI_COPY } from '../data/content';
import { SERVICE_THEMES } from '../data/themes';

interface ContactSectionProps {
  lang: Language;
  selectedServiceId: string;
  onSelectServiceId: (id: string) => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function ContactSection({
  lang,
  selectedServiceId,
  onSelectServiceId,
}: ContactSectionProps) {
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async (value: string, field: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedContact = contactInfo.trim();
    const trimmedMessage = message.trim();

    if (trimmedName.length < 2) {
      setErrorMsg(UI_COPY.contactSection.form.validationName[lang]);
      return;
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact);
    const isPhone = /^[+\d\s-]{8,16}$/.test(trimmedContact);
    if (!isEmail && !isPhone) {
      setErrorMsg(UI_COPY.contactSection.form.validationContact[lang]);
      return;
    }

    if (trimmedMessage.length < 10) {
      setErrorMsg(UI_COPY.contactSection.form.validationMessage[lang]);
      return;
    }

    setErrorMsg(null);
    setSubmitted(true);
  };

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const mailtoInquiryHref = `mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${selectedService.title.en} — ${name || 'New Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nContact: ${contactInfo}\nService: ${selectedService.title.en}\n\nProject Details:\n${message}`
  )}`;

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 border-t border-slate-200/90 bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-24 right-0 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-blue-100/70 via-violet-100/60 to-emerald-100/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
          className="max-w-3xl"
        >
          <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-emerald-600 via-blue-600 to-rose-600 bg-clip-text text-transparent">
            {UI_COPY.contactSection.kicker[lang]}
          </p>
          <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold text-slate-950 tracking-tight [text-wrap:balance]">
            {UI_COPY.contactSection.heading[lang]}
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {UI_COPY.contactSection.subtext[lang]}
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Vibrant Direct Phone & Gmail Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Phone / WhatsApp Channel (Emerald & Teal theme) */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
              className="relative overflow-hidden p-6 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/40 shadow-xs"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
              />
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-emerald-700">
                  {UI_COPY.contactSection.phoneLabel[lang]}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_CONTACT.phoneDisplay, 'phone')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-emerald-300 rounded-md transition-colors cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{UI_COPY.contactSection.copiedBtn[lang]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>{UI_COPY.contactSection.copyBtn[lang]}</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={COMPANY_CONTACT.phoneHref}
                className="mt-3 block font-display text-2xl sm:text-3xl font-bold text-slate-950 tabular-nums hover:text-emerald-700 transition-colors"
              >
                {COMPANY_CONTACT.phoneDisplay}
              </a>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <motion.a
                  href={COMPANY_CONTACT.phoneHref}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg transition-all whitespace-nowrap shrink-0"
                >
                  <Phone className="w-4 h-4" />
                  <span>{UI_COPY.contactSection.callNowBtn[lang]}</span>
                </motion.a>
                <motion.a
                  href={COMPANY_CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-800 bg-white border border-emerald-200 hover:border-emerald-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>{UI_COPY.contactSection.whatsappBtn[lang]}</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Official Gmail Channel (Rose & Amber theme) */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
              className="relative overflow-hidden p-6 rounded-xl border border-rose-200 bg-gradient-to-br from-rose-50/60 via-white to-amber-50/40 shadow-xs"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500"
              />
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold text-rose-700">
                  {UI_COPY.contactSection.emailLabel[lang]}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(COMPANY_CONTACT.email, 'email')}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-rose-300 rounded-md transition-colors cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{UI_COPY.contactSection.copiedBtn[lang]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>{UI_COPY.contactSection.copyBtn[lang]}</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={COMPANY_CONTACT.emailHref}
                className="mt-3 block font-display text-lg sm:text-xl font-semibold text-slate-950 break-all hover:text-rose-700 transition-colors"
              >
                {COMPANY_CONTACT.email}
              </a>

              <div className="mt-5">
                <motion.a
                  href={COMPANY_CONTACT.emailHref}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 rounded-lg transition-all whitespace-nowrap shrink-0"
                >
                  <Mail className="w-4 h-4" />
                  <span>{UI_COPY.contactSection.sendEmailBtn[lang]}</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Studio Hours & Location (Violet accent) */}
            <div className="relative overflow-hidden p-6 rounded-xl border border-violet-200/80 bg-gradient-to-br from-violet-50/40 via-white to-indigo-50/40">
              <div className="text-xs font-semibold text-violet-700">
                {UI_COPY.contactSection.officeLabel[lang]}
              </div>
              <div className="mt-2 flex items-start gap-2.5 text-sm font-medium text-slate-900">
                <MapPin className="w-4 h-4 text-violet-600 mt-0.5 shrink-0" />
                <div>
                  <div>{COMPANY_CONTACT.location[lang]}</div>
                  <div className="mt-1 text-xs font-normal text-slate-600">
                    {COMPANY_CONTACT.hours[lang]}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden p-6 sm:p-8 rounded-xl border border-slate-200 bg-[#F8F9FB] shadow-xs">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-500"
              />
              <h3 className="font-display text-xl font-semibold text-slate-950">
                {UI_COPY.contactSection.form.title[lang]}
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                  className="mt-6 p-6 rounded-xl bg-white border border-emerald-200 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-slate-950">
                        {UI_COPY.contactSection.form.successTitle[lang]}
                      </h4>
                      <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                        {UI_COPY.contactSection.form.successBody[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={mailtoInquiryHref}
                      className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{UI_COPY.contactSection.form.openMailClient[lang]}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setContactInfo('');
                        setMessage('');
                      }}
                      className="px-4 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    >
                      {UI_COPY.contactSection.form.sendAnother[lang]}
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="client-name"
                        className="block text-sm font-medium text-slate-800 mb-1.5"
                      >
                        {UI_COPY.contactSection.form.nameLabel[lang]}
                      </label>
                      <input
                        id="client-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={UI_COPY.contactSection.form.namePlaceholder[lang]}
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="client-contact"
                        className="block text-sm font-medium text-slate-800 mb-1.5"
                      >
                        {UI_COPY.contactSection.form.contactLabel[lang]}
                      </label>
                      <input
                        id="client-contact"
                        type="text"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        placeholder={UI_COPY.contactSection.form.contactPlaceholder[lang]}
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-medium text-slate-800 mb-2">
                      {UI_COPY.contactSection.form.serviceLabel[lang]}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((srv) => {
                        const active = srv.id === selectedServiceId;
                        const theme = SERVICE_THEMES[srv.id] || SERVICE_THEMES['web-saas'];
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => onSelectServiceId(srv.id)}
                            className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-all cursor-pointer ${
                              active
                                ? `bg-gradient-to-r ${theme.gradientBar} text-white border-transparent shadow-xs`
                                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {srv.title[lang]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="client-message"
                      className="block text-sm font-medium text-slate-800 mb-1.5"
                    >
                      {UI_COPY.contactSection.form.messageLabel[lang]}
                    </label>
                    <textarea
                      id="client-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={UI_COPY.contactSection.form.messagePlaceholder[lang]}
                      className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-lg text-slate-950 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 p-3.5 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800"
                    >
                      <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
                    <motion.button
                      type="submit"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{UI_COPY.contactSection.form.submitBtn[lang]}</span>
                    </motion.button>

                    <span className="text-xs text-slate-500 tabular-nums">
                      {COMPANY_CONTACT.phoneDisplay} · {COMPANY_CONTACT.email}
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
