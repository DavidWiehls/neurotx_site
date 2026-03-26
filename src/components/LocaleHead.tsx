import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isLocale, type Locale } from '../i18n';

const LOCALE_LANG_MAP: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-Hans',
  ja: 'ja',
  de: 'de',
};

const LOCALES: Locale[] = ['en', 'zh', 'ja', 'de'];

export function LocaleHead() {
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    const currentLocale: Locale = firstSegment && isLocale(firstSegment) ? firstSegment : 'en';
    document.documentElement.lang = LOCALE_LANG_MAP[currentLocale];
  }, [location.pathname]);

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const pathWithoutLocale =
      pathSegments.length > 0 && isLocale(pathSegments[0])
        ? '/' + pathSegments.slice(1).join('/')
        : '';

    const existing = document.head.querySelectorAll('link[rel="alternate"][hreflang]');
    existing.forEach((el) => el.remove());

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

    LOCALES.forEach((loc) => {
      const href = loc === 'en' ? `${baseUrl}/en${pathWithoutLocale}` : `${baseUrl}/${loc}${pathWithoutLocale}`;
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = loc;
      link.href = href;
      document.head.appendChild(link);
    });
  }, [location.pathname]);

  return null;
}
