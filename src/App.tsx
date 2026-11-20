/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { Language } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { ServicesBento } from './components/ServicesBento';
import { ProcessSection } from './components/ProcessSection';
import { CaseStudies } from './components/CaseStudies';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('web-saas');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const scrollToContact = useCallback(() => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSelectServiceForContact = useCallback(
    (serviceId: string) => {
      setSelectedServiceId(serviceId);
      scrollToContact();
    },
    [scrollToContact]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-[#0F172A]">
        <Navbar lang={lang} onStartProject={scrollToContact} />

        <main className="flex-1">
          <Hero
            lang={lang}
            onLanguageChange={setLang}
            onStartProject={scrollToContact}
          />

          <TechMarquee lang={lang} />

          <ServicesBento
            lang={lang}
            onSelectServiceForContact={handleSelectServiceForContact}
          />

          <ProcessSection lang={lang} />

          <CaseStudies lang={lang} onStartProject={scrollToContact} />

          <ContactSection
            lang={lang}
            selectedServiceId={selectedServiceId}
            onSelectServiceId={setSelectedServiceId}
          />
        </main>

        <Footer lang={lang} />
      </div>
    </MotionConfig>
  );
}
