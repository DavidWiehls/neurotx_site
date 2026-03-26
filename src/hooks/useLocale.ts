import { useNavigate, useLocation } from 'react-router-dom';
import i18n from '../i18n';
import { useCallback, useEffect } from 'react';
import { isLocale, type Locale } from '../i18n';

const LOCALE_STORAGE_KEY = 'neurotx-locale';

export function useLocale(): {
  locale: Locale;
  setLocale: (l: Locale) => void;
  path: (p: string) => string;
} {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const locale: Locale =
    pathSegments.length > 0 && isLocale(pathSegments[0]) ? (pathSegments[0] as Locale) : 'en';

  useEffect(() => {
    const lng = locale === 'en' ? 'en' : locale;
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }, [locale]);

  const setLocale = useCallback(
    (newLocale: Locale) => {
      const pathname = location.pathname;
      const pathSegments = pathname.split('/').filter(Boolean);
      const pathWithoutLocale =
        pathSegments.length > 0 && isLocale(pathSegments[0])
          ? '/' + pathSegments.slice(1).join('/')
          : pathname || '/';
      const newPath =
        newLocale === 'en'
          ? `/en${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
          : `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
      navigate(newPath);
    },
    [location.pathname, navigate]
  );

  const path = useCallback(
    (p: string) => {
      const cleanPath = p.startsWith('/') ? p : `/${p}`;
      if (locale === 'en') return `/en${cleanPath === '/' ? '' : cleanPath}`;
      return `/${locale}${cleanPath}`;
    },
    [locale]
  );

  return { locale, setLocale, path };
}
