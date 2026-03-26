import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocale } from '../hooks/useLocale';
import type { Locale } from '../i18n';

const locales: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'de', label: 'DE' },
];

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = locales.find((l) => l.code === locale) || locales[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <span>{current.label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 mt-1 py-1 bg-zinc-900 border border-white/10 rounded-lg shadow-xl min-w-[120px] z-50"
        >
          {locales.map(({ code, label }) => (
            <li key={code} role="option" aria-selected={locale === code}>
              <button
                type="button"
                onClick={() => {
                  setLocale(code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                  locale === code ? 'bg-indigo-500/20 text-indigo-400' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
