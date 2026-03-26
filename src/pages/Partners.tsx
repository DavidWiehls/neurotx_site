import { Link } from 'react-router-dom';
import { Cpu, School, Building2, CircuitBoard } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import { useLocale } from '../hooks/useLocale';

const PARTNERSHIP_KEYS = ['hardware', 'steam', 'institutional', 'hosting'] as const;
const ICONS = [CircuitBoard, Cpu, Building2, School] as const;

function Partners() {
  const { t } = useTranslation('partners');
  const { path } = useLocale();

  const schoolItemsRaw = t('schools', { returnObjects: true });
  const strategicItemsRaw = t('strategicPartners', { returnObjects: true });
  const schoolItems = Array.isArray(schoolItemsRaw) ? schoolItemsRaw : [];
  const strategicItems = Array.isArray(strategicItemsRaw) ? strategicItemsRaw : [];

  const toStr = (v: unknown): string => {
    if (v == null) return '';
    if (typeof v === 'string') return v;
    if (typeof v === 'number' || typeof v === 'boolean') return String(v);
    return '';
  };

  const getItemName = (item: unknown): string => {
    if (typeof item === 'string') return item;
    if (item && typeof item === 'object' && 'name' in item) return toStr((item as { name: unknown }).name);
    return '';
  };

  const getItemBadge = (item: unknown): string => {
    if (item && typeof item === 'object' && 'badge' in item) return toStr((item as { badge: unknown }).badge);
    return '';
  };

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader title={toStr(t('title'))} subtitle={toStr(t('subtitle'))} />

        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8 text-indigo-400">{toStr(t('opportunities.title'))}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERSHIP_KEYS.map((typeKey, idx) => {
              const Icon = ICONS[idx];
              return (
                <div key={typeKey} className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/20 transition-colors">
                  <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{toStr(t(`opportunities.${typeKey}.title`))}</h3>
                  <p className="text-gray-400 text-sm mb-4">{toStr(t(`opportunities.${typeKey}.desc`))}</p>
                  <Link to={path('/contact')} className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                    {toStr(t(`opportunities.${typeKey}.cta`))} &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-indigo-400">{toStr(t('network.title'))}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-8 text-white border-b border-white/10 pb-4">{toStr(t('network.educational'))}</h3>
            <ul className="space-y-4">
              {schoolItems.map((item, i) => {
                const name = getItemName(item);
                const badge = getItemBadge(item);
                return (
                  <li key={i} className="flex flex-col gap-1">
                    <div className="flex items-start gap-3 text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-2.5 flex-shrink-0" />
                      <span>{name}</span>
                    </div>
                    {badge ? <span className="ml-4 text-xs text-indigo-400 font-mono">{badge}</span> : null}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-8 text-white border-b border-white/10 pb-4">{toStr(t('network.strategic'))}</h3>
            <ul className="space-y-4">
              {strategicItems.map((item, i) => {
                const name = getItemName(item);
                const badge = getItemBadge(item);
                return (
                  <li key={i} className="flex flex-col gap-1">
                    <div className="flex items-start gap-3 text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-2.5 flex-shrink-0" />
                      <span>{name}</span>
                    </div>
                    {badge ? <span className="ml-4 text-xs text-indigo-400 font-mono">{badge}</span> : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
