import { Mail, MapPin } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { assets } from '../lib/assets';

const Contact = () => {
  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader
          title="Get in Touch"
          subtitle="Ready to bring the future of neurotechnology to your school?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400">davidwiehls@neurotx.education</p>
                  <p className="text-gray-500 text-sm mt-2">For partnership inquiries and consultations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Headquarters</h3>
                  <p className="text-gray-400">Hangzhou, China</p>
                  <p className="text-gray-500 text-sm mt-2">Operating across the Yangtze River Delta and Greater Bay Area.</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-4">Scan to connect</h3>
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={assets.brand.wechatQr}
                      alt="WeChat QR code"
                      className="w-32 h-32 rounded-lg border border-white/10 object-contain bg-white"
                    />
                    <span className="text-sm text-gray-400">WeChat</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={assets.brand.whatsappQr}
                      alt="WhatsApp QR code"
                      className="w-32 h-32 rounded-lg border border-white/10 object-contain bg-white"
                    />
                    <span className="text-sm text-gray-400">WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-zinc-900/30 border border-white/10 rounded-2xl">
              <h3 className="font-bold text-white mb-4">For Schools & Partners</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                We are currently expanding our BCI hackathon pipeline. If you are a STEM Director or Principal interested in establishing a partnership, please reach out directly to schedule a demo.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input type="text" id="name" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@school.edu" />
                </div>
              </div>
              
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-400 mb-2">School / Organization</label>
                <input type="text" id="school" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="International School of..." />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">I'm interested in...</label>
                <select id="interest" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors">
                  <option>Tier 1: Workshop</option>
                  <option>Tier 2: After-School Activity</option>
                  <option>Tier 3: Full Campus Integration</option>
                  <option>Investor Inquiry</option>
                  <option>Partnership / Cooperation</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell us about your school's needs..."></textarea>
              </div>

              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
