export type Language = 'bn' | 'en';

export interface ServiceItem {
  id: string;
  number: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  deliverables: Record<Language, string[]>;
  stack: string[];
  spanClass: string;
  timeline: Record<Language, string>;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: Record<Language, string>;
  duration: Record<Language, string>;
  summary: Record<Language, string>;
  outputs: Record<Language, string[]>;
}

export interface CaseStudy {
  id: string;
  category: 'fintech' | 'ecommerce' | 'enterprise';
  categoryLabel: Record<Language, string>;
  year: string;
  title: Record<Language, string>;
  client: Record<Language, string>;
  metricValue: string;
  metricLabel: Record<Language, string>;
  summary: Record<Language, string>;
  challenge: Record<Language, string>;
  solution: Record<Language, string>;
  impactDetails: Record<Language, string[]>;
  stack: string[];
  image: string;
  imageAlt: Record<Language, string>;
}

export interface Testimonial {
  id: string;
  quote: Record<Language, string>;
  name: string;
  role: Record<Language, string>;
  company: string;
  outcome: Record<Language, string>;
}

export const COMPANY_CONTACT = {
  brand: 'It BD Limited',
  phoneDisplay: '01314940236',
  phoneHref: 'tel:+8801314940236',
  whatsappHref: 'https://wa.me/8801314940236',
  email: 'rakibakonsdrax@gmail.com',
  emailHref: 'mailto:rakibakonsdrax@gmail.com',
  location: {
    bn: 'ঢাকা, বাংলাদেশ',
    en: 'Dhaka, Bangladesh',
  },
  hours: {
    bn: 'রবিবার – বৃহস্পতিবার · সকাল ১০:০০ – সন্ধ্যা ৭:০০',
    en: 'Sun – Thu · 10:00 AM – 7:00 PM BST',
  },
};

export const UI_COPY = {
  nav: {
    services: { bn: 'সেবাসমূহ', en: 'Services' },
    process: { bn: 'কর্মপদ্ধতি', en: 'Process' },
    work: { bn: 'প্রজেক্টসমূহ', en: 'Projects' },
    contact: { bn: 'যোগাযোগ', en: 'Contact' },
    cta: { bn: 'প্রজেক্ট শুরু করুন', en: 'Start a Project' },
  },
  hero: {
    kicker: {
      bn: 'সফটওয়্যার ইঞ্জিনিয়ারিং ও ক্লাউড আর্কিটেকচার · ঢাকা, বাংলাদেশ',
      en: 'Software Engineering & Cloud Architecture · Dhaka, Bangladesh',
    },
    headline: {
      bn: 'আপনার ব্যবসার জন্য নির্ভরযোগ্য ও আধুনিক সফটওয়্যার সমাধান',
      en: 'Dependable software engineered for modern business operations',
    },
    subheadline: {
      bn: 'It BD Limited কাস্টম ওয়েব অ্যাপ্লিকেশন, মোবাইল অ্যাপ, এন্টারপ্রাইজ ইআরপি এবং ক্লাউড সিস্টেম তৈরি করে—যাতে আপনার টিম দ্রুত ও নির্ভুলভাবে কাজ পরিচালনা করতে পারে।',
      en: 'It BD Limited designs and builds custom web applications, native mobile apps, enterprise ERP platforms, and resilient cloud infrastructure tailored to your operational workflows.',
    },
    primaryCta: {
      bn: 'ফ্রি কনসালটেশন নিন',
      en: 'Schedule Consultation',
    },
    secondaryCta: {
      bn: 'সরাসরি কল করুন: 01314940236',
      en: 'Call Direct: 01314940236',
    },
    studioCaption: {
      bn: 'It BD Limited ইঞ্জিনিয়ারিং স্টুডিও · প্রোডাকশন-গ্রেড সফটওয়্যার ডেভেলপমেন্ট',
      en: 'It BD Limited Engineering Studio · Production-Grade Delivery',
    },
  },
  metrics: [
    {
      value: '48+',
      label: {
        bn: 'সফল সফটওয়্যার ডেলিভারি (২০২২–২০২৬)',
        en: 'Production Deployments (2022–2026)',
      },
    },
    {
      value: '99.94%',
      label: {
        bn: 'অ্যাভারেজ প্রোডাকশন আপটাইম এসএলএ',
        en: 'Measured Production Uptime SLA',
      },
    },
    {
      value: '14 Days',
      label: {
        bn: 'প্রতি স্প্রিন্টে ডেলিভারি সাইকেল',
        en: 'Sprint Delivery & Demo Cadence',
      },
    },
    {
      value: '24/7',
      label: {
        bn: 'সরাসরি ইঞ্জিনিয়ারিং সাপোর্ট রেসপন্স',
        en: 'Direct Engineering Support Window',
      },
    },
  ],
  servicesSection: {
    kicker: {
      bn: 'আমাদের মূল দক্ষতা · ফুল-সাইকেল ডেভেলপমেন্ট',
      en: 'Core Capabilities · Full-Cycle Engineering',
    },
    heading: {
      bn: 'ব্যবসায়িক প্রয়োজন অনুযায়ী নির্মিত ডিজিটাল সিস্টেম',
      en: 'Software architecture aligned with measurable business goals',
    },
    description: {
      bn: 'প্রতিটি প্রজেক্ট আমরা ক্লিন আর্কিটেকচার, স্কেলেবল ডাটাবেজ এবং ব্যবহারবান্ধব ইন্টারফেস দিয়ে তৈরি করি। যেকোনো সার্ভিস কার্ডে ক্লিক করে বিস্তারিত টেক-স্ট্যাক দেখুন।',
      en: 'Every engagement pairs clean system architecture with accessible interfaces and predictable sprint delivery. Select any capability below to inspect deliverables.',
    },
    discussAction: {
      bn: 'এই সার্ভিস নিয়ে কথা বলুন',
      en: 'Discuss This Service',
    },
    deliverablesLabel: {
      bn: 'মূল ডেলিভারেবলসমূহ',
      en: 'Key Deliverables',
    },
  },
  processSection: {
    kicker: {
      bn: 'স্বচ্ছ ইঞ্জিনিয়ারিং প্রক্রিয়া',
      en: 'Structured Delivery Workflow',
    },
    heading: {
      bn: 'আইডিয়া থেকে প্রোডাকশন লঞ্চ পর্যন্ত চারটি সুনির্দিষ্ট ধাপ',
      en: 'Four structured phases from discovery to production launch',
    },
    outputsLabel: {
      bn: 'এই ধাপে যা পাচ্ছেন',
      en: 'Phase Outputs',
    },
  },
  workSection: {
    kicker: {
      bn: 'প্রমাণিত ফলাফল · কেস স্টাডি',
      en: 'Verified Outcomes · Selected Work',
    },
    heading: {
      bn: 'আমাদের নির্মিত সফটওয়্যার যা বাস্তব ফলাফল এনেছে',
      en: 'Software platforms built for speed, reliability, and scale',
    },
    filters: [
      { id: 'all', label: { bn: 'সব প্রজেক্ট', en: 'All Projects' } },
      { id: 'fintech', label: { bn: 'ফিনটেক', en: 'Fintech' } },
      { id: 'ecommerce', label: { bn: 'ই-কমার্স ও মোবাইল', en: 'E-Commerce' } },
      { id: 'enterprise', label: { bn: 'এন্টারপ্রাইজ', en: 'Enterprise' } },
    ] as const,
    viewDetails: {
      bn: 'বিস্তারিত কেস স্টাডি দেখুন',
      en: 'Inspect Case Study',
    },
    challengeLabel: { bn: 'সমস্যা ও প্রেক্ষাপট', en: 'Operational Challenge' },
    solutionLabel: { bn: 'আমাদের সমাধান', en: 'Engineered Solution' },
    impactLabel: { bn: 'পরিমাপযোগ্য ফলাফল', en: 'Measured Impact' },
    closeLabel: { bn: 'বন্ধ করুন', en: 'Close' },
  },
  testimonialsSection: {
    kicker: {
      bn: 'ক্লায়েন্ট অভিজ্ঞতা',
      en: 'Client Perspectives',
    },
    heading: {
      bn: 'যারা আমাদের ওপর আস্থা রেখেছেন',
      en: 'Trusted by operational leaders across Bangladesh',
    },
  },
  contactSection: {
    kicker: {
      bn: 'সহজ ও সরাসরি যোগাযোগ',
      en: 'Direct Client Consultation',
    },
    heading: {
      bn: 'আপনার প্রজেক্ট নিয়ে আজই কথা বলুন',
      en: 'Start a conversation about your next software system',
    },
    subtext: {
      bn: 'ফোন, হোয়াটসঅ্যাপ, জিমেইল অথবা নিচের ফর্মের মাধ্যমে সরাসরি যোগাযোগ করুন। আমরা ২৪ ঘণ্টার মধ্যে আপনার প্রজেক্ট রোডম্যাপ ও বাজেট প্রস্তাবনা শেয়ার করব।',
      en: 'Reach our engineering desk directly by phone, WhatsApp, Gmail, or the project brief form. We respond within one business day with a clear scope and timeline.',
    },
    phoneLabel: { bn: 'সরাসরি ফোন / হোয়াটসঅ্যাপ', en: 'Direct Phone / WhatsApp' },
    emailLabel: { bn: 'অফিশিয়াল জিমেইল', en: 'Official Gmail' },
    officeLabel: { bn: 'অফিস ও সময়সূচি', en: 'Studio & Hours' },
    copyBtn: { bn: 'কপি করুন', en: 'Copy' },
    copiedBtn: { bn: 'কপি হয়েছে', en: 'Copied' },
    callNowBtn: { bn: 'কল করুন', en: 'Call Now' },
    whatsappBtn: { bn: 'হোয়াটসঅ্যাপ', en: 'WhatsApp' },
    sendEmailBtn: { bn: 'মেইল পাঠান', en: 'Send Email' },
    form: {
      title: { bn: 'প্রজেক্ট তথ্য পাঠান', en: 'Send Project Brief' },
      nameLabel: { bn: 'আপনার নাম', en: 'Your Name' },
      namePlaceholder: { bn: 'যেমন: রাকিব হাসান', en: 'e.g. Rakib Hasan' },
      contactLabel: { bn: 'ফোন নাম্বার বা ইমেইল', en: 'Phone Number or Email' },
      contactPlaceholder: { bn: '013XXXXXXXX অথবা name@company.com', en: '013XXXXXXXX or name@company.com' },
      serviceLabel: { bn: 'কোন ধরনের সফটওয়্যার প্রয়োজন?', en: 'Select Service Scope' },
      messageLabel: { bn: 'প্রজেক্ট সম্পর্কে সংক্ষিপ্ত বিবরণ', en: 'Project Details' },
      messagePlaceholder: {
        bn: 'আপনার ব্যবসার ধরন, ফিচার বা সম্ভাব্য সময়সীমা সম্পর্কে লিখুন...',
        en: 'Briefly describe your workflow, core features, or target launch date...',
      },
      submitBtn: { bn: 'প্রজেক্ট অনুরোধ পাঠান', en: 'Submit Project Inquiry' },
      successTitle: {
        bn: 'আপনার প্রজেক্ট তথ্য সফলভাবে গৃহীত হয়েছে',
        en: 'Your project brief has been prepared',
      },
      successBody: {
        bn: 'সরাসরি আমাদের ইনবক্সে পাঠাতে নিচের "জিমেইল দিয়ে পাঠান" বাটনে ক্লিক করুন অথবা জরুরি প্রয়োজনে 01314940236 নাম্বারে কল করুন।',
        en: 'Click below to dispatch directly via Gmail to rakibakonsdrax@gmail.com, or call 01314940236 for immediate consultation.',
      },
      openMailClient: {
        bn: 'জিমেইল (rakibakonsdrax@gmail.com) এ পাঠান',
        en: 'Open in Gmail (rakibakonsdrax@gmail.com)',
      },
      sendAnother: {
        bn: 'নতুন তথ্য পাঠান',
        en: 'Send Another Inquiry',
      },
      validationName: {
        bn: 'অনুগ্রহ করে আপনার নাম লিখুন (কমপক্ষে ২ অক্ষর)।',
        en: 'Please enter your name (at least 2 characters).',
      },
      validationContact: {
        bn: 'অনুগ্রহ করে সঠিক বাংলাদেশি মোবাইল নাম্বার অথবা ইমেইল ঠিকানা দিন।',
        en: 'Please enter a valid phone number or email address.',
      },
      validationMessage: {
        bn: 'অনুগ্রহ করে প্রজেক্ট সম্পর্কে কমপক্ষে ১০ অক্ষরের বিবরণ লিখুন।',
        en: 'Please provide at least 10 characters describing your project.',
      },
    },
  },
  footer: {
    tagline: {
      bn: 'বাংলাদেশ থেকে বিশ্বমানের ওয়েব, মোবাইল ও এন্টারপ্রাইজ সফটওয়্যার সল্যুশন।',
      en: 'Custom web, mobile, and enterprise software engineering from Dhaka.',
    },
    rights: {
      bn: '© ২০২৬ It BD Limited. সর্বস্বত্ব সংরক্ষিত।',
      en: '© 2026 It BD Limited. All rights reserved.',
    },
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-saas',
    number: '01',
    title: {
      bn: 'কাস্টম ওয়েব অ্যাপ্লিকেশন ও SaaS প্ল্যাটফর্ম',
      en: 'Custom Web Applications & SaaS Platforms',
    },
    summary: {
      bn: 'হাই-পারফরম্যান্স ওয়েব পোর্টাল, মাল্টি-টেন্যান্ট SaaS প্রোডাক্ট এবং আধুনিক ই-কমার্স সিস্টেম যা হাজার হাজার সমসাময়িক ব্যবহারকারীর চাপ সামলাতে সক্ষম।',
      en: 'High-speed web portals, multi-tenant SaaS products, and custom commerce architectures engineered for sub-second response times and concurrent traffic.',
    },
    deliverables: {
      bn: [
        'রোল-ভিত্তিক অ্যাডমিন ড্যাশবোর্ড ও রিয়েল-টাইম অ্যানালিটিক্স',
        'বিকাশ, নগদ, SSLCommerz এবং আন্তর্জাতিক পেমেন্ট গেটওয়ে ইন্টিগ্রেশন',
        'সার্চ-ইঞ্জিন অপ্টিমাইজড (SEO) সার্ভার-রেন্ডারড আর্কিটেকচার',
      ],
      en: [
        'Role-based admin dashboards with real-time reporting',
        'Local (bKash, Nagad, SSLCommerz) & global payment gateway integration',
        'SEO-ready server-rendered architecture with automated CI/CD',
      ],
    },
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    spanClass: 'md:col-span-4',
    timeline: { bn: '৪ – ৮ সপ্তাহ', en: '4 – 8 Weeks' },
  },
  {
    id: 'mobile-apps',
    number: '02',
    title: {
      bn: 'অ্যান্ড্রয়েড ও আইওএস মোবাইল অ্যাপ',
      en: 'Android & iOS Mobile Apps',
    },
    summary: {
      bn: 'মসৃণ অ্যানিমেশন, অফলাইন ডাটা সিঙ্ক এবং পুশ নোটিফিকেশনসহ ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন।',
      en: 'Native-feel cross-platform mobile applications with offline-first sync, biometric auth, and low battery overhead.',
    },
    deliverables: {
      bn: [
        'প্লে স্টোর ও অ্যাপ স্টোর পাবলিশিং সাপোর্ট',
        'জিপিএস লাইভ ট্র্যাকিং ও ইন-অ্যাপ অর্ডার ম্যানেজমেন্ট',
        '৬০ এফপিএস নেটিভ ইন্টারঅ্যাকশন ও সিকিউর এপিআই',
      ],
      en: [
        'Google Play & Apple App Store release management',
        'Live geolocation tracking & instant push notifications',
        'Encrypted local storage with 60fps native transitions',
      ],
    },
    stack: ['React Native', 'Flutter', 'Kotlin', 'Firebase'],
    spanClass: 'md:col-span-2',
    timeline: { bn: '৬ – ১০ সপ্তাহ', en: '6 – 10 Weeks' },
  },
  {
    id: 'enterprise-erp',
    number: '03',
    title: {
      bn: 'এন্টারপ্রাইজ ERP, POS ও অটোমেশন',
      en: 'Enterprise ERP, POS & Automation',
    },
    summary: {
      bn: 'ইনভেন্টরি, অ্যাকাউন্টিং, এইচআর পেরোল এবং মাল্টি-ব্রাঞ্চ সেলস অটোমেশনের জন্য সম্পূর্ণ কাস্টমাইজড বিজনেস সফটওয়্যার।',
      en: 'Unified inventory, VAT-compliant accounting, HR payroll, and multi-branch POS systems built around your exact business rules.',
    },
    deliverables: {
      bn: [
        'মাল্টি-ওয়্যারহাউস স্টক ট্র্যাকিং ও অটো-ইনভয়েসিং',
        'বারকোড স্ক্যানার ও থার্মাল প্রিন্টার সরাসরি সাপোর্ট',
        'অডিট লগ এবং কাস্টম এক্সেল/পিডিএফ রিপোর্ট এক্সপোর্ট',
      ],
      en: [
        'Multi-warehouse stock ledger & automated VAT invoicing',
        'Thermal printer & barcode hardware integration',
        'Immutable audit logs with instant PDF/Excel exports',
      ],
    },
    stack: ['TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    spanClass: 'md:col-span-2',
    timeline: { bn: '৬ – ১২ সপ্তাহ', en: '6 – 12 Weeks' },
  },
  {
    id: 'cloud-uiux',
    number: '04',
    title: {
      bn: 'UI/UX ডিজাইন সিস্টেম ও ক্লাউড ডেভঅপস',
      en: 'UI/UX Design Systems & Cloud DevOps',
    },
    summary: {
      bn: 'ইউজার রিসার্চ-ভিত্তিক প্রোডাক্ট ডিজাইন, ডিজাইন সিস্টেম এবং অটোমেটেড ব্যাকআপসহ হাই-অ্যাভেইলেবিলিটি ক্লাউড সার্ভার কনফিগারেশন।',
      en: 'Research-backed interface design systems paired with automated zero-downtime cloud deployments, daily encrypted backups, and security hardening.',
    },
    deliverables: {
      bn: [
        'ফিগমা ইন্টারেক্টিভ প্রোটোটাইপ ও কম্পোনেন্ট লাইব্রেরি',
        'AWS / GCP / DigitalOcean অটো-স্কেলিং ও SSL সিকিউরিটি',
        '২৪/৭ সার্ভার হেলথ মনিটরিং ও ডাটাবেজ অপটিমাইজেশন',
      ],
      en: [
        'Interactive Figma prototypes & accessible component libraries',
        'AWS / Google Cloud auto-scaling & WAF security setup',
        'Automated encrypted backups & query latency tuning',
      ],
    },
    stack: ['Figma', 'AWS', 'Docker', 'Nginx', 'GitHub Actions'],
    spanClass: 'md:col-span-4',
    timeline: { bn: '২ – ৫ সপ্তাহ', en: '2 – 5 Weeks' },
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discovery',
    number: '01',
    title: {
      bn: 'ডিসকভারি ও সিস্টেম আর্কিটেকচার',
      en: 'Discovery & System Architecture',
    },
    duration: { bn: 'সপ্তাহ ১', en: 'Week 1' },
    summary: {
      bn: 'আপনার ব্যবসার বর্তমান প্রক্রিয়া, চ্যালেঞ্জ এবং লক্ষ্য বিশ্লেষণ করে আমরা ডাটাবেজ স্কিমা, ইউজার ফ্লো এবং টেকনিক্যাল রোডম্যাপ চূড়ান্ত করি।',
      en: 'We map your operational bottlenecks, user roles, and compliance needs into a concrete database schema, API contract, and delivery roadmap.',
    },
    outputs: {
      bn: [
        'পূর্ণাঙ্গ প্রজেক্ট স্কোপ ও বাজেট ডকুমেন্ট',
        'সিস্টেম আর্কিটেকচার ও ডাটাবেজ ডিজাইন',
        'মাইলস্টোন-ভিত্তিক ডেলিভারি শিডিউল',
      ],
      en: [
        'Signed technical scope & transparent budget',
        'Entity-relationship & cloud topology blueprint',
        'Milestone-based sprint calendar',
      ],
    },
  },
  {
    id: 'prototyping',
    number: '02',
    title: {
      bn: 'ইন্টারেক্টিভ UI/UX ও প্রোটোটাইপিং',
      en: 'Interactive UI/UX & Prototyping',
    },
    duration: { bn: 'সপ্তাহ ২', en: 'Week 2' },
    summary: {
      bn: 'কোডিং শুরুর আগেই আপনার সফটওয়্যারের প্রতিটি স্ক্রিন ও অ্যানিমেশন ফ্লো ক্লিকেবল প্রোটোটাইপ হিসেবে দেখানো হয়, যাতে কোনো বিভ্রান্তি না থাকে।',
      en: 'Before writing production code, every screen, navigation state, and interaction pattern is validated with you via a clickable prototype.',
    },
    outputs: {
      bn: [
        'ডেস্কটপ ও মোবাইল রেসপন্সিভ UI ডিজাইন',
        'ডিজাইন সিস্টেম ও টাইপোগ্রাফি গাইড',
        'ইউজার টেস্টিং ও ফিডব্যাক সংশোধন',
      ],
      en: [
        'Desktop & mobile responsive interface screens',
        'Reusable design tokens & component kit',
        'Stakeholder sign-off prior to engineering',
      ],
    },
  },
  {
    id: 'engineering',
    number: '03',
    title: {
      bn: 'অ্যাজাইল ফুল-স্ট্যাক ইঞ্জিনিয়ারিং',
      en: 'Agile Full-Stack Engineering',
    },
    duration: { bn: 'সপ্তাহ ৩ – ৬', en: 'Weeks 3 – 6' },
    summary: {
      bn: 'প্রতি দুই সপ্তাহে একটি করে লাইভ স্টেজিং লিংক শেয়ার করা হয়। আপনি সরাসরি অগ্রগতি পরীক্ষা করতে পারেন এবং তাৎক্ষণিক মতামত দিতে পারেন।',
      en: 'Every 14-day sprint ships a live staging build so your team can test real workflows and provide feedback continuously.',
    },
    outputs: {
      bn: [
        'টাইপসেফ ফ্রন্টএন্ড ও সিকিউর এপিআই ব্যাকএন্ড',
        'লাইভ স্টেজিং সার্ভার প্রিভিউ অ্যাক্সেস',
        'কোড রিভিউ ও পারফরম্যান্স প্রোফাইলিং',
      ],
      en: [
        'Type-safe frontend & hardened REST/GraphQL APIs',
        'Continuous staging environment preview access',
        'Automated integration tests & latency profiling',
      ],
    },
  },
  {
    id: 'launch',
    number: '04',
    title: {
      bn: 'QA টেস্টিং, সিকিউরিটি ও লঞ্চ',
      en: 'QA Hardening, Training & Launch',
    },
    duration: { bn: 'সপ্তাহ ৭+', en: 'Week 7+' },
    summary: {
      bn: 'লোড টেস্টিং, সিকিউরিটি অডিট এবং আপনার টিমের ট্রেনিং সম্পন্ন করে আমরা প্রোডাকশন সার্ভারে লাইভ করি—সাথে থাকে দীর্ঘমেয়াদী টেকনিক্যাল সাপোর্ট।',
      en: 'Following load testing, security auditing, and hands-on staff training, we deploy to production with dedicated post-launch maintenance.',
    },
    outputs: {
      bn: [
        'জিরো-ডাউনটাইম প্রোডাকশন ডিপ্লয়মেন্ট',
        'অ্যাডমিন ও স্টাফ ট্রেনিং সেশন',
        '১ বছরের ওয়ারেন্টি ও ডেডিকেটেড সাপোর্ট চ্যানেল',
      ],
      en: [
        'Zero-downtime production cutover & SSL setup',
        'Hands-on operator training & documentation',
        'Dedicated support SLA via phone & email',
      ],
    },
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'artha-ledger',
    category: 'fintech',
    categoryLabel: { bn: 'ফিনটেক', en: 'Fintech' },
    year: '2026',
    title: {
      bn: 'অর্থ-লেজার: কর্পোরেট ট্রেজারি ও রিকনসিলিয়েশন পোর্টাল',
      en: 'ArthaLedger: Corporate Treasury & Settlement Portal',
    },
    client: {
      bn: 'মেট্রো ডিস্ট্রিবিউশন গ্রুপ, ঢাকা',
      en: 'Metro Distribution Group, Dhaka',
    },
    metricValue: '+62%',
    metricLabel: {
      bn: 'দ্রুত দৈনিক অ্যাকাউন্টস রিকনসিলিয়েশন',
      en: 'Faster Daily Settlement Reconciliation',
    },
    summary: {
      bn: '৩৫টি আঞ্চলিক ডিপোর ব্যাংক ট্রান্সফার, বিকাশ মার্চেন্ট পেমেন্ট এবং ইনভয়েস অটোমেটিক ম্যাচিংয়ের জন্য রিয়েল-টাইম ফিন্যান্সিয়াল ড্যাশবোর্ড।',
      en: 'Real-time treasury platform automating bank transfers, mobile merchant settlements, and ledger matching across 35 regional depots.',
    },
    challenge: {
      bn: 'প্রতিদিন ৪,০০০+ লেনদেন ম্যানুয়াল স্প্রেডশিটে মেলাতে গিয়ে অ্যাকাউন্টস টিমের ৬ ঘণ্টা সময় নষ্ট হতো এবং ভুলের ঝুঁকি থাকত।',
      en: 'Reconciling 4,000+ daily transactions across manual spreadsheets took the finance team 6 hours daily with frequent discrepancies.',
    },
    solution: {
      bn: 'It BD Limited অটোমেটেড ব্যাংক স্টেটমেন্ট পার্সার, রোল-ভিত্তিক অ্যাপ্রুভাল এবং রিয়েল-টাইম ক্যাশ-ফ্লো ফোরকাস্টিং ইঞ্জিন তৈরি করে।',
      en: 'It BD Limited engineered an automated settlement parser, dual-signature approval engine, and real-time cash-flow dashboard.',
    },
    impactDetails: {
      bn: [
        'দৈনিক হিসাব মেলানোর সময় ৬ ঘণ্টা থেকে কমে ৪৫ মিনিটে নেমেছে',
        '৯৯.৯৮% ট্রানজেকশন ম্যাচিং অ্যাকুরেসি নিশ্চিত হয়েছে',
        'মাসিক অডিট রিপোর্ট জেনারেট হয় মাত্র ১ ক্লিকে',
      ],
      en: [
        'Cut daily reconciliation time from 6 hours to 45 minutes',
        'Achieved 99.98% automated transaction matching accuracy',
        'Single-click monthly audit pack export for compliance',
      ],
    },
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    image: '/src/assets/images/case_fintech_platform_1794583423294.jpg',
    imageAlt: {
      bn: 'ল্যাপটপ স্ক্রিনে অর্থ-লেজার ফিন্যান্সিয়াল অ্যানালিটিক্স ড্যাশবোর্ড',
      en: 'Laptop displaying financial analytics dashboard for ArthaLedger',
    },
  },
  {
    id: 'deshcart-omni',
    category: 'ecommerce',
    categoryLabel: { bn: 'ই-কমার্স ও মোবাইল', en: 'E-Commerce' },
    year: '2025',
    title: {
      bn: 'দেশকার্ট অমনি: মাল্টি-ভেন্ডর কমার্স ও কুরিয়ার ইন্টিগ্রেশন',
      en: 'DeshCart Omni: Multi-Vendor Commerce & Logistics Suite',
    },
    client: {
      bn: 'দেশকার্ট রিটেইল লিমিটেড',
      en: 'DeshCart Retail Ltd.',
    },
    metricValue: '3.4x',
    metricLabel: {
      bn: 'পিক ক্যাম্পেইন অর্ডার প্রসেসিং ক্ষমতা',
      en: 'Peak Campaign Order Throughput',
    },
    summary: {
      bn: 'ওয়েব, মোবাইল অ্যাপ এবং ওয়্যারহাউস ট্যাবলেটের মধ্যে রিয়েল-টাইম স্টক সিঙ্ক ও স্টেডফাস্ট/পাঠাও কুরিয়ার অটো-বুকিং সিস্টেম।',
      en: 'Synchronized web storefront, customer mobile app, and warehouse tablet system with automated local courier booking.',
    },
    challenge: {
      bn: 'ফ্ল্যাশ সেল ক্যাম্পেইনের সময় অতিরিক্ত ভিজিটরে পুরনো সাইট স্লো হয়ে যেত এবং ইনভেন্টরি ওভারসেলিং হতো।',
      en: 'During flash campaigns, legacy servers slowed under peak traffic and caused frequent stock overselling.',
    },
    solution: {
      bn: 'ইভেন্ট-ড্রিভেন ইনভেন্টরি লকিং, ক্যাশিং এবং নেটিভ মোবাইল অ্যাপের মাধ্যমে তাৎক্ষণিক অর্ডার ট্র্যাকিং যুক্ত করা হয়।',
      en: 'Implemented atomic inventory locking, edge caching, and unified courier label generation across web and tablet apps.',
    },
    impactDetails: {
      bn: [
        'ক্যাম্পেইন সময়ে ১৮,০০০+ সমসাময়িক ইউজারেও পেজ লোড ০.৮ সেকেন্ডের নিচে',
        'ভুল স্টক ডেলিভারি ও অর্ডার ক্যান্সেলেশন ৭৪% কমেছে',
        'মোবাইল অ্যাপ থেকে রিপিট অর্ডার বেড়েছে ৪৯%',
      ],
      en: [
        'Maintained sub-800ms page loads at 18,000+ concurrent shoppers',
        'Reduced stock-out order cancellations by 74%',
        'Increased repeat customer mobile orders by 49% in Q4',
      ],
    },
    stack: ['Next.js', 'React Native', 'PostgreSQL', 'Docker', 'AWS'],
    image: '/src/assets/images/case_ecommerce_cloud_1794583423710.jpg',
    imageAlt: {
      bn: 'স্মার্টফোন ও ট্যাবলেটে দেশকার্ট ইনভেন্টরি ও কমার্স ইন্টারফেস',
      en: 'Smartphone and tablet showing DeshCart inventory and commerce UI',
    },
  },
  {
    id: 'medflow-enterprise',
    category: 'enterprise',
    categoryLabel: { bn: 'এন্টারপ্রাইজ', en: 'Enterprise' },
    year: '2025',
    title: {
      bn: 'মেডফ্লো ক্লিনিক্যাল: হসপিটাল ও ডায়াগনস্টিক ম্যানেজমেন্ট',
      en: 'MedFlow Clinical: Multi-Branch Hospital Operations Suite',
    },
    client: {
      bn: 'সেবা ডায়াগনস্টিক অ্যান্ড হসপিটাল নেটওয়ার্ক',
      en: 'Sheba Diagnostic & Hospital Network',
    },
    metricValue: '-48%',
    metricLabel: {
      bn: 'রোগীর অ্যাপয়েন্টমেন্ট ও রিপোর্ট ডেলিভারি সময়',
      en: 'Reduction in Patient Queue & Report Wait Time',
    },
    summary: {
      bn: '৬টি শাখার ডাক্তার সিরিয়াল, ল্যাব টেস্ট বারকোড ট্র্যাকিং, ই-প্রেসক্রিপশন এবং অনলাইন রিপোর্ট ডাউনলোড পোর্টাল।',
      en: 'Centralized scheduling, lab sample barcode tracking, e-prescription, and patient report portal across 6 clinical branches.',
    },
    challenge: {
      bn: 'শাখাগুলোর মধ্যে সেন্ট্রাল ডাটাবেজ না থাকায় ল্যাব রিপোর্ট ভেরিফিকেশন ও রোগীর হিস্ট্রি খুঁজতে দীর্ঘ সময় লাগত।',
      en: 'Disconnected branch databases delayed lab report verification and forced patients to collect physical printouts.',
    },
    solution: {
      bn: 'সেন্ট্রাল ক্লাউড ডাটাবেজ, এসএমএস অ্যালার্ট ও সিকিউর পিডিএফ রিপোর্ট পোর্টাল তৈরি করে পুরো অপারেশন ডিজিটালাইজ করা হয়।',
      en: 'Built a centralized clinical ledger with automated SMS notifications and verified online PDF lab report delivery.',
    },
    impactDetails: {
      bn: [
        'রোগীদের গড় অপেক্ষার সময় ৪৮% হ্রাস পেয়েছে',
        'প্রতিদিন ১,২০০+ ডিজিটাল ল্যাব রিপোর্ট অটো-ডেলিভারি হয়',
        'ডাক্তার ও ল্যাব টেকনিশিয়ানদের ডাটা এন্ট্রি সময় অর্ধেকে নেমেছে',
      ],
      en: [
        'Reduced average patient waiting time by 48%',
        'Delivers 1,200+ verified digital lab reports daily via SMS link',
        'Cut clinician data-entry overhead in half across 6 branches',
      ],
    },
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Nginx'],
    image: '/src/assets/images/case_healthcare_portal_1794583422865.jpg',
    imageAlt: {
      bn: 'এন্টারপ্রাইজ ক্লিনিক্যাল শিডিউলিং সফটওয়্যার ওয়ার্কস্টেশন',
      en: 'Enterprise workstation displaying MedFlow clinical scheduling portal',
    },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: {
      bn: 'It BD Limited আমাদের ৩৫টি ডিপোর ম্যানুয়াল হিসাব পদ্ধতি সম্পূর্ণ অটোমেট করে দিয়েছে। এখন প্রতিদিন ৪৫ মিনিটের মধ্যেই পুরো কোম্পানির ফিন্যান্সিয়াল ক্লোজিং সম্পন্ন হয়।',
      en: 'It BD Limited replaced our manual depot spreadsheets with a unified settlement portal. Our finance team now completes full daily closing in 45 minutes instead of six hours.',
    },
    name: 'তানভীর আহমেদ চৌধুরী',
    role: { bn: 'হেড অব ফিন্যান্স', en: 'Head of Finance' },
    company: 'Metro Distribution Group',
    outcome: {
      bn: '+৬২% দ্রুত অ্যাকাউন্টস রিকনসিলিয়েশন',
      en: '+62% Faster Daily Reconciliation',
    },
  },
  {
    id: 't2',
    quote: {
      bn: 'তাদের ইঞ্জিনিয়ারিং টিম প্রতিটি স্প্রিন্টে সময়মতো কাজ বুঝিয়ে দিয়েছে এবং ফোনে বা ইমেইলে যেকোনো প্রয়োজনে তাৎক্ষণিক সাপোর্ট পাওয়া যায়।',
      en: 'Their engineers hit every two-week sprint milestone on schedule, and direct communication with their lead team kept our campaign launch completely stress-free.',
    },
    name: 'ফারহানা ইসলাম',
    role: { bn: 'চিফ অপারেটিং অফিসার', en: 'Chief Operating Officer' },
    company: 'DeshCart Retail Ltd.',
    outcome: {
      bn: 'পিক ট্র্যাফিকে ০.৮ সেকেন্ড লোড টাইম',
      en: 'Sub-800ms Load at Peak Traffic',
    },
  },
];
