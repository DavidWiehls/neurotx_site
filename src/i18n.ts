import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const supportedLngs = ['en', 'zh', 'ja', 'de'] as const;
export type Locale = (typeof supportedLngs)[number];

export const isLocale = (value: string): value is Locale =>
  supportedLngs.includes(value as Locale);

const resources = (() => {
  const modules = import.meta.glob<{ default: Record<string, unknown> }>(
    './locales/*/*.json',
    { eager: true }
  );
  const result: Record<string, Record<string, Record<string, unknown>>> = {};
  for (const [path, mod] of Object.entries(modules)) {
    const match = path.match(/\.\/locales\/([^/]+)\/([^/]+)\.json$/);
    if (match) {
      const [, lng, ns] = match;
      const data = mod && typeof mod === 'object' && 'default' in mod ? (mod as { default: Record<string, unknown> }).default : mod;
      if (!result[lng]) result[lng] = {};
      result[lng][ns] = (data || mod) as Record<string, unknown>;
    }
  }
  return result;
})();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: [...supportedLngs],
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: [
      'common',
      'home',
      'about',
      'product',
      'pricing',
      'caseStudies',
      'market',
      'investors',
      'partners',
      'schools',
      'contact',
      'dataEthics',
    ],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 1,
      lookupFromSubdomainIndex: 0,
      caches: ['localStorage'],
    },
  });

export default i18n;
