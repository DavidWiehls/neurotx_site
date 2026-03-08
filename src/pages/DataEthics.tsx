import { motion } from 'motion/react';
import { Shield, Lock, Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';

const DataEthics = () => {
  const { t } = useTranslation('dataEthics');

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold">{t('guardian.title')}</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('guardian.desc')}
            </p>
          </div>

          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                <Lock className="h-6 w-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold">{t('collaborative.title')}</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('collaborative.desc')}
            </p>
          </div>

          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">{t('deletion.title')}</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('deletion.desc')}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default DataEthics;
