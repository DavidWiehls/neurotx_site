import { motion } from 'motion/react';
import { CheckCircle, Award, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import { useLocale } from '../hooks/useLocale';

const Schools = () => {
  const { t } = useTranslation('schools');
  const { path } = useLocale();

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
            <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t('valueProps.ivy.title')}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('valueProps.ivy.desc')}
            </p>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
            <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t('valueProps.prestige.title')}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('valueProps.prestige.desc')}
            </p>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
            <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t('valueProps.interdisciplinary.title')}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('valueProps.interdisciplinary.desc')}
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('solution.title')}</h2>
              <p className="text-gray-400 mb-6">
                {t('solution.intro')}
              </p>
              <h3 className="text-xl font-bold text-white mb-4">{t('solution.neurotxTitle')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-500 mt-1" />
                  <div>
                    <span className="font-semibold text-white">{t('solution.mentorship.title')}</span>
                    <p className="text-gray-400 text-sm">{t('solution.mentorship.desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-500 mt-1" />
                  <div>
                    <span className="font-semibold text-white">{t('solution.hardware.title')}</span>
                    <p className="text-gray-400 text-sm">{t('solution.hardware.desc')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-500 mt-1" />
                  <div>
                    <span className="font-semibold text-white">{t('solution.staff.title')}</span>
                    <p className="text-gray-400 text-sm">{t('solution.staff.desc')}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-full min-h-[300px] bg-black rounded-2xl overflow-hidden border border-white/10">
               <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop" 
                  alt="Students collaborating" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">{t('cta.title')}</h2>
          <Link to={path('/contact')} className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all">
            {t('cta.button')}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Schools;
