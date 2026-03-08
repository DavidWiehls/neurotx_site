import { motion } from 'motion/react';
import { TrendingUp, Layers, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import { useLocale } from '../hooks/useLocale';

const Investors = () => {
  const { t } = useTranslation('investors');
  const { path } = useLocale();

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {(['tam', 'tier3', 'stem', 'abroad'] as const).map((key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 p-6 rounded-xl border border-white/10"
            >
              <div className="text-gray-400 text-sm mb-2">{t(`stats.${key}.label`)}</div>
              <div className="text-3xl font-bold text-white">{t(`stats.${key}.value`)}</div>
              <div className="text-indigo-400 text-xs mt-1">{t(`stats.${key}.sublabel`)}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4">{t('revenue.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
              <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('revenue.stem.title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t('revenue.stem.desc')}</p>
            </div>
            <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
              <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('revenue.grants.title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t('revenue.grants.desc')}</p>
            </div>
            <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
              <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('revenue.private.title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t('revenue.private.desc')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4">{t('unitEconomics.title')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">{t('unitEconomics.tier2.title')}</h3>
              <p className="text-gray-400 mb-4">{t('unitEconomics.tier2.desc')}</p>
              <div className="text-sm font-mono text-gray-500">{t('unitEconomics.tier2.tag')}</div>
            </div>
            <div className="bg-zinc-900/30 border border-indigo-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">{t('unitEconomics.tier3.title')}</h3>
              <p className="text-gray-400 mb-4">{t('unitEconomics.tier3.desc')}</p>
              <div className="text-sm font-mono text-indigo-400">{t('unitEconomics.tier3.tag')}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4">{t('logistics.title')}</h2>
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8 md:p-12">
            <p className="text-gray-400 mb-6 max-w-3xl">{t('logistics.desc')}</p>
            <ul className="space-y-3 text-gray-300">
              {([0, 1, 2] as const).map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                  {t(`logistics.items.${i}`)}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-4">{t('government.title')}</h2>
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
            <p className="text-gray-400 mb-6 max-w-4xl">{t('government.desc')}</p>
          </div>
        </motion.div>

        <div className="text-center">
          <Link to={path('/contact')} className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all">
            {t('cta')}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Investors;
