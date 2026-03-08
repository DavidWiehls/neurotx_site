import { motion } from 'motion/react';
import { Shield, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import { assets } from '../lib/assets';

const About = () => {
  const { t } = useTranslation('about');

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">{t('mission.title')}</h2>
            <ul className="space-y-6">
              {([0, 1, 2] as const).map((i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">{i + 1}</div>
                  <div>
                    <h3 className="font-semibold text-white">{t(`mission.items.${i}.title`)}</h3>
                    <p className="text-gray-400 text-sm mt-1">{t(`mission.items.${i}.desc`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">{t('ethical.title')}</h2>
            <p className="text-gray-300 mb-6">
              {t('ethical.intro')}
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-emerald-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">{t('ethical.institutional.title')}</h3>
                  <p className="text-gray-400 text-sm">{t('ethical.institutional.desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-emerald-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">{t('ethical.collaborative.title')}</h3>
                  <p className="text-gray-400 text-sm">{t('ethical.collaborative.desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-mono mb-4 w-fit">{t('founder.badge')}</div>
              <h2 className="text-3xl font-bold mb-4">{t('founder.name')}</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('founder.bio')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/david-wiehls/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-indigo-500/30 transition-colors">{t('founder.rwth')}</a>
                <a href="https://www.br41n.io/Spring-School-2026" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-indigo-500/30 transition-colors">{t('founder.br41n')}</a>
              </div>
            </div>
            <div className="bg-zinc-800 h-64 md:h-auto relative">
               <img 
                src={assets.company.davidProfile}
                alt={t('founder.name')}
                className="w-full h-full object-cover object-top"
               />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
