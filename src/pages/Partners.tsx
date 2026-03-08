import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cpu, School, Building2, CircuitBoard } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import { useLocale } from '../hooks/useLocale';

const Partners = () => {
  const { t } = useTranslation('partners');
  const { path } = useLocale();

  const partnershipTypes = [
    { icon: CircuitBoard, typeKey: 'hardware' },
    { icon: Cpu, typeKey: 'steam' },
    { icon: Building2, typeKey: 'institutional' },
    { icon: School, typeKey: 'hosting' },
  ] as const;

  const schoolRaw = t('schools', { returnObjects: true });
  const strategicRaw = t('strategicPartners', { returnObjects: true });
  const schoolItems = Array.isArray(schoolRaw) ? schoolRaw : [];
  const strategicItems = Array.isArray(strategicRaw) ? strategicRaw : [];

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold mb-8 text-indigo-400">{t('opportunities.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipTypes.map(({ icon: Icon, typeKey }) => (
              <div key={typeKey} className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/20 transition-colors">
                <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t(`opportunities.${typeKey}.title`)}</h3>
                <p className="text-gray-400 text-sm mb-4">{t(`opportunities.${typeKey}.desc`)}</p>
                <Link to={path('/contact')} className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">{t(`opportunities.${typeKey}.cta`)} &rarr;</Link>
              </div>
            ))}
          </div>
        </motion.div>

        <h2 className="text-2xl font-bold mb-8 text-indigo-400">{t('network.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-8 text-white border-b border-white/10 pb-4">{t('network.educational')}</h3>
            <ul className="space-y-4">
              {schoolItems.map((item, i) => {
                const name = typeof item === 'string' ? item : (item && typeof item === 'object' && 'name' in item ? String((item as { name: string }).name) : '');
                const badge = typeof item === 'object' && item !== null && 'badge' in item ? (item as { badge: string }).badge : null;
                return (
                  <li key={i} className="flex flex-col gap-1">
                    <div className="flex items-start gap-3 text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-2.5 flex-shrink-0" />
                      <span>{name}</span>
                    </div>
                    {badge && <span className="ml-4 text-xs text-indigo-400 font-mono">{badge}</span>}
                  </li>
                );
              })}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-8 text-white border-b border-white/10 pb-4">{t('network.strategic')}</h3>
            <ul className="space-y-4">
              {strategicItems.map((item, i) => {
                const name = typeof item === 'string' ? item : (item && typeof item === 'object' && 'name' in item ? String((item as { name: string }).name) : '');
                const badge = typeof item === 'object' && item !== null && 'badge' in item ? (item as { badge: string }).badge : null;
                return (
                  <li key={i} className="flex flex-col gap-1">
                    <div className="flex items-start gap-3 text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-2.5 flex-shrink-0" />
                      <span>{name}</span>
                    </div>
                    {badge && <span className="ml-4 text-xs text-indigo-400 font-mono">{badge}</span>}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
