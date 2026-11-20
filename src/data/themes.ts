export interface ColorTheme {
  accentText: string;
  softBg: string;
  softBorder: string;
  solidBg: string;
  gradientBar: string;
  iconBg: string;
  iconText: string;
  darkBorder: string;
  darkText: string;
  darkGlow: string;
}

export const SERVICE_THEMES: Record<string, ColorTheme> = {
  'web-saas': {
    accentText: 'text-blue-600',
    softBg: 'bg-blue-50/80',
    softBorder: 'border-blue-200',
    solidBg: 'bg-blue-600',
    gradientBar: 'from-blue-600 via-indigo-500 to-cyan-500',
    iconBg: 'bg-blue-600/10',
    iconText: 'text-blue-600',
    darkBorder: 'border-blue-400/70',
    darkText: 'text-blue-400',
    darkGlow: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
  'mobile-apps': {
    accentText: 'text-emerald-600',
    softBg: 'bg-emerald-50/80',
    softBorder: 'border-emerald-200',
    solidBg: 'bg-emerald-600',
    gradientBar: 'from-emerald-500 via-teal-500 to-cyan-500',
    iconBg: 'bg-emerald-600/10',
    iconText: 'text-emerald-600',
    darkBorder: 'border-emerald-400/70',
    darkText: 'text-emerald-400',
    darkGlow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  'enterprise-erp': {
    accentText: 'text-amber-600',
    softBg: 'bg-amber-50/80',
    softBorder: 'border-amber-200',
    solidBg: 'bg-amber-600',
    gradientBar: 'from-amber-500 via-orange-500 to-rose-500',
    iconBg: 'bg-amber-600/10',
    iconText: 'text-amber-600',
    darkBorder: 'border-amber-400/70',
    darkText: 'text-amber-400',
    darkGlow: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  'cloud-uiux': {
    accentText: 'text-violet-600',
    softBg: 'bg-violet-50/80',
    softBorder: 'border-violet-200',
    solidBg: 'bg-violet-600',
    gradientBar: 'from-violet-600 via-purple-500 to-fuchsia-500',
    iconBg: 'bg-violet-600/10',
    iconText: 'text-violet-600',
    darkBorder: 'border-violet-400/70',
    darkText: 'text-violet-400',
    darkGlow: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
  },
};

export const PROCESS_THEMES: Record<string, ColorTheme> = {
  discovery: SERVICE_THEMES['web-saas'],
  prototyping: SERVICE_THEMES['cloud-uiux'],
  engineering: SERVICE_THEMES['mobile-apps'],
  launch: SERVICE_THEMES['enterprise-erp'],
};

export const CASE_THEMES: Record<'fintech' | 'ecommerce' | 'enterprise', ColorTheme> = {
  fintech: SERVICE_THEMES['web-saas'],
  ecommerce: SERVICE_THEMES['mobile-apps'],
  enterprise: SERVICE_THEMES['cloud-uiux'],
};

export const METRIC_BAR_GRADIENTS = [
  'from-blue-600 to-indigo-500',
  'from-emerald-500 to-teal-500',
  'from-violet-600 to-fuchsia-500',
  'from-amber-500 to-rose-500',
];
