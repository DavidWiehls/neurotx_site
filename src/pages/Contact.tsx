import { Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader';
import { assets } from '../lib/assets';

const Contact = () => {
  const { t } = useTranslation('contact');

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-2xl font-bold mb-8">{t('info.title')}</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{t('info.email.title')}</h3>
                  <p className="text-gray-400">{t('info.email.value')}</p>
                  <p className="text-gray-500 text-sm mt-2">{t('info.email.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{t('info.hq.title')}</h3>
                  <p className="text-gray-400">{t('info.hq.value')}</p>
                  <p className="text-gray-500 text-sm mt-2">{t('info.hq.desc')}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4">{t('info.scan')}</h3>
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={assets.brand.wechatQr}
                      alt="WeChat QR code"
                      className="w-32 h-32 rounded-lg border border-white/10 object-contain bg-white"
                    />
                    <span className="text-sm text-gray-400">{t('info.wechat')}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={assets.brand.whatsappQr}
                      alt="WhatsApp QR code"
                      className="w-32 h-32 rounded-lg border border-white/10 object-contain bg-white"
                    />
                    <span className="text-sm text-gray-400">{t('info.whatsapp')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-zinc-900/30 border border-white/10 rounded-2xl">
              <h3 className="font-bold text-white mb-4">{t('schoolsBox.title')}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t('schoolsBox.desc')}
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">{t('form.title')}</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">{t('form.name')}</label>
                  <input type="text" id="name" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder={t('form.namePlaceholder')} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">{t('form.email')}</label>
                  <input type="email" id="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder={t('form.emailPlaceholder')} />
                </div>
              </div>
              
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-400 mb-2">{t('form.school')}</label>
                <input type="text" id="school" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder={t('form.schoolPlaceholder')} />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">{t('form.interest')}</label>
                <select id="interest" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors">
                  {(t('form.interests', { returnObjects: true }) as string[]).map((opt, i) => (
                    <option key={i}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">{t('form.message')}</label>
                <textarea id="message" rows={4} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder={t('form.messagePlaceholder')}></textarea>
              </div>

              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-colors">
                {t('form.submit')}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
