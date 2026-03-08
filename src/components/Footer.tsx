import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { assets } from '../lib/assets';
import { useLocale } from '../hooks/useLocale';

const Footer = () => {
  const { t } = useTranslation('common');
  const { path } = useLocale();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to={path('/')} className="flex items-center space-x-2 mb-4">
              <img
                src={assets.brand.logo}
                alt={t('brand')}
                className="h-8 w-auto"
              />
              <span className="text-white font-bold text-xl tracking-tight">{t('brand')}</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.platform')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to={path('/product')} className="hover:text-white transition-colors">{t('footer.curriculum')}</Link></li>
              <li><Link to={path('/product')} className="hover:text-white transition-colors">{t('footer.hardware')}</Link></li>
              <li><Link to={path('/pricing')} className="hover:text-white transition-colors">{t('footer.pricing')}</Link></li>
              <li><Link to={path('/schools')} className="hover:text-white transition-colors">{t('footer.forSchools')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to={path('/case-studies')} className="hover:text-white transition-colors">{t('footer.caseStudies')}</Link></li>
              <li><Link to={path('/market')} className="hover:text-white transition-colors">{t('footer.marketData')}</Link></li>
              <li><Link to={path('/investors')} className="hover:text-white transition-colors">{t('footer.investors')}</Link></li>
              <li><Link to={path('/about')} className="hover:text-white transition-colors">{t('footer.missionEthics')}</Link></li>
              <li><Link to={path('/partners')} className="hover:text-white transition-colors">{t('footer.partners')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.connect')}</h3>
            <div className="flex space-x-4">
              <Link to={path('/contact')} title="WeChat" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <Link to={path('/contact')} className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                {t('footer.contactUs')} &rarr;
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-gray-500 text-xs">
            <Link to={path('/data-ethics')} className="hover:text-gray-300">{t('footer.dataEthics')}</Link>
            <span className="text-gray-600">{t('footer.privacyPolicy')}</span>
            <span className="text-gray-600">{t('footer.termsOfService')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
