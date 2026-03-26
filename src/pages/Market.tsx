import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import { useLocale } from '../hooks/useLocale';

const Market = () => {
  const { t } = useTranslation('market');
  const { path } = useLocale();

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10">
            <div className="text-gray-400 text-sm mb-2">{t('stats.tam.label')}</div>
            <div className="text-3xl font-bold text-white">{t('stats.tam.value')}</div>
            <div className="text-indigo-400 text-xs mt-1">{t('stats.tam.sublabel')}</div>
          </div>
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10">
            <div className="text-gray-400 text-sm mb-2">{t('stats.cities.label')}</div>
            <div className="text-3xl font-bold text-white">{t('stats.cities.value')}</div>
            <div className="text-indigo-400 text-xs mt-1">{t('stats.cities.sublabel')}</div>
          </div>
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10">
            <div className="text-gray-400 text-sm mb-2">{t('stats.stem.label')}</div>
            <div className="text-3xl font-bold text-white">{t('stats.stem.value')}</div>
            <div className="text-indigo-400 text-xs mt-1">{t('stats.stem.sublabel')}</div>
          </div>
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10">
            <div className="text-gray-400 text-sm mb-2">{t('stats.abroad.label')}</div>
            <div className="text-3xl font-bold text-white">{t('stats.abroad.value')}</div>
            <div className="text-indigo-400 text-xs mt-1">{t('stats.abroad.sublabel')}</div>
          </div>
        </div>

        <div className="space-y-12">
          {(['1', '2', '3', '4'] as const).map((i) => (
            <div key={i} className={`border-l-2 ${i === '1' ? 'border-indigo-500' : i === '2' ? 'border-emerald-500' : i === '3' ? 'border-purple-500' : 'border-orange-500'} pl-8`}>
              <h2 className="text-2xl font-bold mb-4">{t(`segments.${i}.title`)}</h2>
              <p className="text-gray-400 mb-4 max-w-4xl">
                {t(`segments.${i}.desc`)}
              </p>
              <div className="flex gap-4 text-sm font-mono text-gray-500">
                <span>{t(`segments.${i}.icp`)}</span>
                <span>•</span>
                <span>{t(`segments.${i}.model`)}</span>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-zinc-900/30 border border-indigo-500/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">{t('highlights.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            {t('highlights.desc')}
          </p>
          <Link to={path('/investors')} className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all">
            {t('highlights.cta')}
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Market;
