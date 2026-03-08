import { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Monitor, Cpu, Code, Shield, Eye, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import { assets } from '../lib/assets';

const Product = () => {
  const [aiMentorsMuted, setAiMentorsMuted] = useState(true);
  const { t } = useTranslation('product');
  const toggleAiMentorsMute = () => setAiMentorsMuted((prev) => !prev);

  const phaseIcons = [<Shield key="1" className="h-12 w-12" />, <Eye key="2" className="h-12 w-12" />, <Layers key="3" className="h-12 w-12" />, <Cpu key="4" className="h-12 w-12" />];

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-indigo-500 pl-4">{t('curriculum.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {([0, 1, 2, 3] as const).map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {phaseIcons[i]}
                </div>
                <div className="text-indigo-400 text-sm font-mono mb-2">{t(`curriculum.phases.${i}.phase`)} • {t(`curriculum.phases.${i}.weeks`)}</div>
                <h3 className="text-xl font-bold mb-3">{t(`curriculum.phases.${i}.title`)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(`curriculum.phases.${i}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('techStack.title')}</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    <a
                      href="https://davidwiehls.github.io/BCI-Journey/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-indigo-400 transition-colors inline-flex items-center gap-2"
                    >
                      {t('techStack.bciJourney.title')} <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <p className="text-gray-400 mb-3">{t('techStack.bciJourney.desc')}</p>
                  <a
                    href="https://davidwiehls.github.io/BCI-Journey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    {t('techStack.bciJourney.cta')} <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('techStack.hardware.title')}</h3>
                  <p className="text-gray-400">{t('techStack.hardware.desc')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('techStack.aiCoding.title')}</h3>
                  <p className="text-gray-400">{t('techStack.aiCoding.desc')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-white/10 p-2 overflow-hidden">
             <video
                src={assets.videos.fathersonbci}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="rounded-xl w-full h-full object-cover"
                aria-label={t('aria.video')}
             />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0.6, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="aspect-video bg-black">
              <video
                src={assets.videos.talkmode}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
              >
                {t('videoFallback')}
              </video>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('aiAssistants.title')}</h3>
              <p className="text-gray-400">{t('aiAssistants.desc')}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.6, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="aspect-video bg-black">
              <video
                src={assets.videos.introvideo}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
              >
                {t('videoFallback')}
              </video>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{t('hardwareAction.title')}</h3>
              <p className="text-gray-400">{t('hardwareAction.desc')}</p>
            </div>
          </motion.div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-indigo-500 pl-4">{t('demos.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {([0, 1, 2] as const).map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="aspect-video bg-black relative">
                  <video
                    src={[assets.videos.bcijourneymain, assets.videos.bcijourneylab, assets.videos.bcijourneylisten][i]}
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                    muted={i === 2 ? aiMentorsMuted : undefined}
                    className="w-full h-full object-contain"
                  >
                    {t('videoFallback')}
                  </video>
                  {i === 2 && (
                    <button
                      type="button"
                      onClick={toggleAiMentorsMute}
                      className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white transition-colors"
                      aria-label={aiMentorsMuted ? t('aria.unmute') : t('aria.mute')}
                    >
                      {aiMentorsMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </button>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{t(`demos.items.${i}.title`)}</h3>
                  <p className="text-gray-400 text-sm">{t(`demos.items.${i}.desc`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-2 text-center">{t('experiments.title')}</h2>
          <p className="text-gray-400 text-sm text-center mb-8 max-w-2xl mx-auto">
            {t('experiments.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-indigo-400 font-mono mb-4 text-sm uppercase tracking-wider">{t('experiments.passive')}</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                {([0, 1, 2, 3] as const).map((i) => (
                  <li key={i}>• {t(`experiments.passiveItems.${i}`)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-indigo-400 font-mono mb-4 text-sm uppercase tracking-wider">{t('experiments.reactive')}</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                {([0, 1, 2, 3] as const).map((i) => (
                  <li key={i}>• {t(`experiments.reactiveItems.${i}`)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-indigo-400 font-mono mb-4 text-sm uppercase tracking-wider">{t('experiments.active')}</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                {([0, 1, 2, 3] as const).map((i) => (
                  <li key={i}>• {t(`experiments.activeItems.${i}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
