import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Modal from '../components/ui/Modal';
import PageHeader from '../components/ui/PageHeader';
import { caseStudyMeta } from '../data/caseStudies';
import { useLocale } from '../hooks/useLocale';

const CASE_IDS_WITH_DETAIL = ['hangzhouNo2', 'wenling', 'entel'] as const;

function CaseStudyDetailContent({ caseId }: { caseId: string }) {
  const { t } = useTranslation('caseStudies');
  const base = `detail.${caseId}`;

  return (
    <div className="space-y-6 text-left">
      <h2 className="text-2xl font-bold">{t(`${base}.title`)}</h2>
      <p className="text-gray-300 font-medium">{t(`${base}.subtitle`)}</p>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">{t(`${base}.challengeTitle`)}</h3>
        <p className="text-gray-400 leading-relaxed">{t(`${base}.challengeContent`)}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">{t(`${base}.phase1Title`)}</h3>
        <p className="text-gray-400 leading-relaxed mb-3">{t(`${base}.phase1P1`)}</p>
        <p className="text-gray-400 leading-relaxed mb-3">{t(`${base}.phase1P2`)}</p>
        {t(`${base}.phase1P3`) !== `${base}.phase1P3` && (
          <p className="text-gray-400 leading-relaxed">{t(`${base}.phase1P3`)}</p>
        )}
        <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
          <li>{t(`${base}.phase1Bullet`)}</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">{t(`${base}.phase2Title`)}</h3>
        <p className="text-gray-400 italic mb-2">{t(`${base}.phase2Italic`)}</p>
        <p className="text-gray-400 leading-relaxed mb-3">{t(`${base}.phase2P1`)}</p>
        {t(`${base}.phase2P2`) !== `${base}.phase2P2` && (
          <p className="text-gray-400 leading-relaxed mb-3">{t(`${base}.phase2P2`)}</p>
        )}
        {(() => {
          const list = t(`${base}.phase2List`, { returnObjects: true }) as string[];
          const bullet = t(`${base}.phase2Bullet`);
          if (Array.isArray(list) && list.length > 0) {
            return (
              <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
                {list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
          if (bullet && bullet !== `${base}.phase2Bullet`) {
            return (
              <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
                <li>{bullet}</li>
              </ul>
            );
          }
          return null;
        })()}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">{t(`${base}.phase3Title`)}</h3>
        {t(`${base}.phase3Status`) !== `${base}.phase3Status` && (
          <p className="text-gray-400 mb-2"><em>{t(`${base}.phase3Status`)}</em></p>
        )}
        <p className="text-gray-400 leading-relaxed mb-3">{t(`${base}.phase3P1`)}</p>
        <p className="text-gray-400 leading-relaxed mb-3">{t(`${base}.phase3P2`)}</p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
          {(t(`${base}.phase3List`, { returnObjects: true }) as string[]).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">{t(`${base}.resultTitle`)}</h3>
        <p className="text-gray-400 leading-relaxed mb-3">{t(`${base}.resultP`)}</p>
        <ol className="list-decimal list-inside text-gray-400 space-y-2 ml-2">
          {(t(`${base}.resultList`, { returnObjects: true }) as string[]).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>

      <p className="text-gray-300 italic">{t(`${base}.ctaQuestion`)}</p>
      <p className="text-gray-400">{t(`${base}.ctaP`)}</p>
    </div>
  );
}

const CaseStudies = () => {
  const [openCaseId, setOpenCaseId] = useState<string | null>(null);
  const { t } = useTranslation('caseStudies');
  const { path } = useLocale();
  const cases = caseStudyMeta;

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="space-y-16">
          {cases.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                  <img 
                    src={study.image} 
                    alt={t(`studies.${study.id}.school`)} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-indigo-400">
                    {t(`studies.${study.id}.type`)}
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm uppercase tracking-wider">{t(`studies.${study.id}.school`)}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{t(`studies.${study.id}.title`)}</h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  {t(`studies.${study.id}.summary`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {(t(`studies.${study.id}.tags`, { returnObjects: true }) as string[]).map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {CASE_IDS_WITH_DETAIL.includes(study.id as typeof CASE_IDS_WITH_DETAIL[number]) ? (
                    <button
                      onClick={() => setOpenCaseId(study.id)}
                      className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 group"
                    >
                      {t('readFull')} <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </button>
                  ) : (
                    <Link to={path('/contact')} className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 group">
                      {t('readFull')} <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  )}
                  {study.wechatUrl && (
                    <a
                      href={study.wechatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#07C160]/20 hover:bg-[#07C160]/30 text-[#07C160] border border-[#07C160]/30 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t('wechatPost')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <Modal
        isOpen={!!openCaseId && CASE_IDS_WITH_DETAIL.includes(openCaseId as typeof CASE_IDS_WITH_DETAIL[number])}
        onClose={() => setOpenCaseId(null)}
      >
        {openCaseId && CASE_IDS_WITH_DETAIL.includes(openCaseId as typeof CASE_IDS_WITH_DETAIL[number]) && (
          <>
            <CaseStudyDetailContent caseId={openCaseId} />
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
              {cases.find((c) => c.id === openCaseId)?.wechatUrl && (
                <a
                  href={cases.find((c) => c.id === openCaseId)!.wechatUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#07C160]/20 hover:bg-[#07C160]/30 text-[#07C160] border border-[#07C160]/30 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t('viewWechat')}
                </a>
              )}
              <Link
                to={path('/contact')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
              >
                {t('contactUs')}
              </Link>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default CaseStudies;
