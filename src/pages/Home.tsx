import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Brain, ExternalLink, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { assets } from '../lib/assets';
import { trustSchools, institutionalPartners } from '../data/partners';
import type { LocaleKey } from '../data/partners';
import { useLocale } from '../hooks/useLocale';

const localeMap = { en: 'en' as LocaleKey, zh: 'zh' as LocaleKey, ja: 'ja' as LocaleKey, de: 'de' as LocaleKey };

const Home = () => {
  const { t, i18n } = useTranslation(['home', 'common']);
  const { path } = useLocale();
  const locale: LocaleKey = localeMap[i18n.language as keyof typeof localeMap] || 'en';
  const studyKeys = ['hangzhouNo2', 'wenling', 'entel', 'ocac'] as const;
  const wechatUrls: Record<string, string | null> = {
    hangzhouNo2: 'https://mp.weixin.qq.com/s/hE2bai_ASl91InvxFqyvlw',
    wenling: 'https://mp.weixin.qq.com/s/H2aGYxX1h-dyorgjyC7AmQ',
    entel: null,
    ocac: null,
  };

  return (
    <div className="bg-black text-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={assets.videos.introvideo}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-black/70 to-black z-[1]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">{t('home:hero.badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
              {t('home:hero.title')} <br />
              <span className="text-indigo-500">{t('home:hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('home:hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <Link to={path('/schools')} className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                {t('home:hero.ctaSchools')} <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to={path('/product')} className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
                {t('home:hero.ctaCurriculum')}
              </Link>
              <Link to={path('/investors')} className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
                {t('home:hero.ctaInvestors')}
              </Link>
              <Link to={path('/partners')} className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
                {t('home:hero.ctaPartners')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">{t('home:caseStudies.label')}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home:caseStudies.title')}</h2>
            <p className="text-gray-400 text-lg">
              {t('home:caseStudies.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {studyKeys.map((key) => (
              <motion.div
                key={key}
                initial={{ opacity: 0.6, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
              >
                <span className="text-xs font-mono text-indigo-400">{t(`home:caseStudies.items.${key}.type`)}</span>
                <h3 className="font-bold mt-2 mb-1">{t(`home:caseStudies.items.${key}.school`)}</h3>
                <p className="text-gray-400 text-sm mb-3">{t(`home:caseStudies.items.${key}.outcome`)}</p>
                {wechatUrls[key] && (
                  <a
                    href={wechatUrls[key]!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#07C160]/20 hover:bg-[#07C160]/30 text-[#07C160] border border-[#07C160]/30 text-xs font-medium transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t('home:caseStudies.wechatPost')}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to={path('/case-studies')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all"
            >
              <BookOpen className="h-5 w-5" />
              {t('home:caseStudies.readFull')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5"
            >
              <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home:mission.cognitiveEvolution.title')}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t('home:mission.cognitiveEvolution.desc')}
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5"
            >
              <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home:mission.schoolGuardian.title')}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t('home:mission.schoolGuardian.desc')}
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5"
            >
              <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home:mission.globalPathway.title')}</h3>
              <p className="text-gray-400 leading-relaxed">
                {t('home:mission.globalPathway.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-white/5 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">{t('home:bciJourney.label')}</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home:bciJourney.title')}</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {t('home:bciJourney.subtitle')}
              </p>
              <ul className="space-y-4 mb-8">
                {([0, 1, 2, 3] as const).map((i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    </div>
                    <span className="text-gray-300">{t(`home:bciJourney.features.${i}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://davidwiehls.github.io/BCI-Journey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all"
                >
                  {t('home:bciJourney.tryBci')} <ExternalLink className="h-4 w-4" />
                </a>
                <Link to={path('/product')} className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
                  {t('home:bciJourney.exploreCurriculum')} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
              <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-2 overflow-hidden">
                <video
                  src={assets.videos.bcijourneymain}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="rounded-xl w-full h-auto"
                >
                  {t('home:bciJourney.videoFallback')}
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-white/5 bg-zinc-900/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-sm font-mono text-indigo-400 uppercase tracking-widest">{t('home:trust.label')}</p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">
            {[...trustSchools, ...trustSchools].map((school, i) => (
              <motion.div
                key={`${school.en}-${i}`}
                initial={{ opacity: 0.6 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                className="flex-shrink-0 w-64 mx-4 rounded-xl bg-zinc-900/50 border border-white/5 p-6 flex flex-col items-center justify-center group hover:border-indigo-500/20 hover:bg-zinc-900/80 transition-all duration-300"
              >
                <div className="h-16 w-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-indigo-500/30 transition-colors overflow-hidden">
                  {school.logo ? (
                    <img src={school.logo} alt={school[locale]} className="h-full w-full object-contain p-1" />
                  ) : (
                    <span className="text-lg font-bold text-indigo-400/80 group-hover:text-indigo-400">{school.initials}</span>
                  )}
                </div>
                <span className="text-sm font-semibold text-white text-center mb-1 line-clamp-2">{school[locale]}</span>
                <span className="text-xs text-gray-500 text-center">{locale === 'zh' ? school.en : school.zh}</span>
                {school.badge && (
                  <span className="mt-2 text-[10px] text-indigo-400 font-mono px-2 py-0.5 rounded bg-indigo-500/10">
                    {school.badge}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home:cyborg.title')}</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {t('home:cyborg.subtitle')}
              </p>
              <ul className="space-y-4">
                {([0, 1, 2, 3] as const).map((i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    </div>
                    <span className="text-gray-300">{t(`home:cyborg.items.${i}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to={path('/about')} className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2">
                  {t('home:cyborg.readManifesto')} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
              <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-2 overflow-hidden">
                <video
                  src={assets.videos.cyborgfoundation}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="rounded-xl w-full h-auto"
                >
                  {t('home:bciJourney.videoFallback')}
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-white/5 bg-zinc-900/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-sm font-mono text-indigo-400 uppercase tracking-widest">{t('home:partners.label')}</p>
          <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
            {t('home:partners.subtitle')}
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {institutionalPartners.map((partner) => (
              <motion.div
                key={partner.en}
                initial={{ opacity: 0.6, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/20 hover:bg-zinc-900/80 transition-all duration-300 group"
              >
                <div className="h-16 w-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-indigo-500/30 transition-colors overflow-hidden flex-shrink-0">
                  <img src={partner.logo} alt={partner[locale]} className="h-full w-full object-contain p-1" />
                </div>
                <span className="text-sm font-semibold text-white text-center mb-1">{partner[locale]}</span>
                <span className="text-xs text-gray-500 text-center">{locale === 'zh' ? partner.en : partner.zh}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
