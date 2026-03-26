import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { assets } from '../lib/assets';
import { useLocale } from '../hooks/useLocale';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation('common');
  const { path } = useLocale();

  const links = [
    { nameKey: 'nav.home', path: '/' },
    { nameKey: 'nav.about', path: '/about' },
    { nameKey: 'nav.product', path: '/product' },
    { nameKey: 'nav.pricing', path: '/pricing' },
    { nameKey: 'nav.caseStudies', path: '/case-studies' },
    { nameKey: 'nav.market', path: '/market' },
    { nameKey: 'nav.investors', path: '/investors' },
    { nameKey: 'nav.partners', path: '/partners' },
    { nameKey: 'nav.schools', path: '/schools' },
    { nameKey: 'nav.contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (linkPath: string) => {
    const fullPath = path(linkPath);
    return location.pathname === fullPath || (linkPath === '/' && location.pathname === '/en');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={path('/')} className="flex items-center space-x-2 group">
            <img
              src={assets.brand.logo}
              alt={t('brand')}
              className="h-8 w-auto"
            />
            <span className="text-white font-bold text-xl tracking-tight">{t('brand')}</span>
          </Link>

          <div className="hidden xl:flex items-center gap-4">
            <div className="flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.nameKey}
                  to={path(link.path)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t(link.nameKey)}
                </Link>
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          <div className="xl:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.nameKey}
                  to={path(link.path)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t(link.nameKey)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
