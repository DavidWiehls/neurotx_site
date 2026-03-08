import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import { useLocale } from '../hooks/useLocale';

const Pricing = () => {
  const { t } = useTranslation('pricing');
  const { path } = useLocale();

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-lg font-medium text-indigo-400 mb-2">{t('tier1.label')}</h3>
              <h2 className="text-3xl font-bold text-white">{t('tier1.name')}</h2>
              <p className="text-gray-400 text-sm mt-2">{t('tier1.desc')}</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">{t('tier1.price')}</span>
              <span className="text-gray-500"> {t('tier1.unit')}</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {([0, 1, 2, 3] as const).map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                  <span>{t(`tier1.features.${i}`)}</span>
                </li>
              ))}
            </ul>
            <Link to={path('/contact')} className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 text-center transition-colors font-medium">
              {t('tier1.cta')}
            </Link>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-zinc-900 border border-indigo-500/30 rounded-2xl p-8 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-indigo-600 text-xs font-bold px-3 py-1 rounded-bl-xl text-white">{t('tier2.badge')}</div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-indigo-400 mb-2">{t('tier2.label')}</h3>
              <h2 className="text-3xl font-bold text-white">{t('tier2.name')}</h2>
              <p className="text-gray-400 text-sm mt-2">{t('tier2.desc')}</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">{t('tier2.price')}</span>
              <span className="text-gray-500"> {t('tier2.unit')}</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {([0, 1, 2, 3, 4] as const).map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                  <span>{t(`tier2.features.${i}`)}</span>
                </li>
              ))}
            </ul>
            <Link to={path('/contact')} className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-center transition-colors font-medium">
              {t('tier2.cta')}
            </Link>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-lg font-medium text-indigo-400 mb-2">{t('tier3.label')}</h3>
              <h2 className="text-3xl font-bold text-white">{t('tier3.name')}</h2>
              <p className="text-gray-400 text-sm mt-2">{t('tier3.desc')}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">{t('tier3.price')}</span>
              <span className="text-gray-500"> {t('tier3.unit')}</span>
            </div>
            <div className="mb-6 text-sm text-gray-400">
              <span>{t('tier3.note')}</span>
              <span className="block text-indigo-400/80 mt-1">{t('tier3.example')}</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {([0, 1, 2, 3, 4] as const).map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                  <span>{t(`tier3.features.${i}`)}</span>
                </li>
              ))}
            </ul>
            <Link to={path('/contact')} className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 text-center transition-colors font-medium">
              {t('tier3.cta')}
            </Link>
          </motion.div>

        </div>

        <div className="mt-16 bg-zinc-900/30 border border-white/5 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">{t('parents.title')}</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            {t('parents.desc')}
          </p>
          <Link to={path('/contact')} className="text-indigo-400 hover:text-indigo-300 font-medium">
            {t('parents.cta')} &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
