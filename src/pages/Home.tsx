import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Brain, Cpu, ExternalLink, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const R2_BASE_URL = 'https://pub-742ce4a3a0dc44c29d8903927e64ad48.r2.dev';

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={`${R2_BASE_URL}/assets/introvideo.mp4`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 via-black/70 to-black z-[1]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">The Future of K-12 Education</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Demystifying <br />
              <span className="text-indigo-500">Neural Integration</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              We transition Brain-Computer Interfaces (BCI) from science fiction to a foundational life skill. 
              Empowering the next generation of Neural Architects.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              <Link to="/schools" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                For Schools <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/product" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
                Explore Curriculum
              </Link>
              <Link to="/investors" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
                For Investors
              </Link>
              <Link to="/partners" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Impact Across Schools</h2>
            <p className="text-gray-400 text-lg">
              From elite international divisions to top-tier public high schools — see how NeuroTX is transforming STEM education and connecting students to global research networks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { school: 'Hangzhou No.2 High School Qianjiang', outcome: 'Global neuroscience pathway to European labs', type: 'Elite International', wechatUrl: 'https://mp.weixin.qq.com/s/hE2bai_ASl91InvxFqyvlw' },
              { school: 'Zhejiang Wenling High School', outcome: 'Public school students onto the global BCI stage', type: 'Top-Tier Public', wechatUrl: 'https://mp.weixin.qq.com/s/H2aGYxX1h-dyorgjyC7AmQ' },
              { school: 'Hangzhou Entel Foreign Language School', outcome: '50+ students to Germany\'s TU9 universities', type: 'Foreign Language', wechatUrl: null },
              { school: 'OCAC Suzhou', outcome: 'Scaling BCI across middle school cohorts', type: 'Middle School ASA', wechatUrl: null },
            ].map((study) => (
              <motion.div
                key={study.school}
                initial={{ opacity: 0.6, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
              >
                <span className="text-xs font-mono text-indigo-400">{study.type}</span>
                <h3 className="font-bold mt-2 mb-1">{study.school}</h3>
                <p className="text-gray-400 text-sm mb-3">{study.outcome}</p>
                {study.wechatUrl && (
                  <a
                    href={study.wechatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#07C160]/20 hover:bg-[#07C160]/30 text-[#07C160] border border-[#07C160]/30 text-xs font-medium transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    WeChat Post
                  </a>
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all"
            >
              <BookOpen className="h-5 w-5" />
              Read Full Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Grid */}
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
              <h3 className="text-xl font-bold mb-3">Cognitive Evolution</h3>
              <p className="text-gray-400 leading-relaxed">
                Enabling students to acquire skills through non-traditional, direct neural pathways via 50/50 Input/Output philosophy.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5"
            >
              <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">School-as-Guardian</h3>
              <p className="text-gray-400 leading-relaxed">
                Uncompromising privacy. Neural data is the most intimate form of personal property. We operate strictly B2B to protect students.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5"
            >
              <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Pathway</h3>
              <p className="text-gray-400 leading-relaxed">
                Direct pipelines to elite universities and the br41n.io hackathon. From local classrooms to European research labs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BCI Journey Learning Platform */}
      <section className="py-24 border-y border-white/5 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-4">Our Learning Platform</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">BCI Journey</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                An interactive educational platform that brings brain-computer interfaces to life through 3D visualization, AI mentors, and real hardware experiments — all in your browser.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  '3D neuroanatomy & immersive simulations — no VR headset required',
                  'AI-powered mentors (Synapse & Spark) for 24/7 voice support',
                  'Somas & global leaderboards — earn rewards and compete',
                  'BCI Lab: connect Unicorn Hybrid Black, run 12 real experiments in-browser',
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    </div>
                    <span className="text-gray-300">{item}</span>
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
                  Try BCI Journey <ExternalLink className="h-4 w-4" />
                </a>
                <Link to="/product" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
                  Explore Curriculum <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
              <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-2 overflow-hidden">
                <video
                  src={`${R2_BASE_URL}/assets/bcijourneydemos/bcijourneymain.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-xl w-full h-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-20 border-y border-white/5 bg-zinc-900/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-sm font-mono text-indigo-400 uppercase tracking-widest">Trusted by Educational Vanguards</p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">
            {(() => {
              const trustSchools = [
                { en: 'Hangzhou Chongwen Century City Experimental School', zh: '杭州市萧山崇文实验学校', badge: 'Official br41n.io Hosting Institution', initials: 'CC', logo: new URL('../../assets/partners/chongwen.jpg', import.meta.url).href },
                { en: 'Hangzhou Xuejun Wenyuan Experimental School', zh: '杭州学军文渊实验科学', initials: 'XW', logo: new URL('../../assets/partners/xuejun.jpg', import.meta.url).href },
                { en: 'Hangzhou Wahaha Bilingual School', zh: '杭州娃哈哈双语学校', initials: 'WH', logo: new URL('../../assets/partners/wahaha.jpg', import.meta.url).href },
                { en: 'Hangzhou Entel Foreign Language School', zh: '杭州英特外国语学校', initials: 'ET', logo: new URL('../../assets/partners/entel.jpg', import.meta.url).href },
                { en: 'Hangzhou No.2 High School Qianjiang', zh: '杭州第二中学钱江', initials: 'HZ', logo: new URL('../../assets/partners/hangerqiangjiang.jpg', import.meta.url).href },
                { en: 'Zhejiang Wenling High School', zh: '浙江省温岭中学', initials: 'WL', logo: new URL('../../assets/partners/wenjing.jpg', import.meta.url).href },
                { en: 'Overseas Chinese Academy of Concord Suzhou (OCAC)', zh: '苏州工业园区海归人才子女学校', initials: 'OC', logo: new URL('../../assets/partners/ocac.jpg', import.meta.url).href },
                { en: 'Britannia International School in Guangzhou (BIS)', zh: '广州市英伦外籍人员子女学校', initials: 'BI', logo: new URL('../../assets/partners/bisguangzhou.jpg', import.meta.url).href },
                { en: 'Canadian International School of Guangzhou (CIS)', zh: '广州市加拿大外籍人员子女学校', initials: 'CI', logo: new URL('../../assets/partners/cisguangzhou.jpg', import.meta.url).href },
                { en: 'Foshan No.1 High School', zh: '佛山市第一中学', initials: 'FS', logo: new URL('../../assets/partners/foshandiyi.jpg', import.meta.url).href },
                { en: 'EtonHouse International Education Group', zh: '新加坡伊顿国际教育集团', initials: 'EH', logo: new URL('../../assets/partners/etonhouse.jpg', import.meta.url).href },
                { en: 'Canada Kent School', zh: '加拿大肯特学校', initials: 'CK', logo: new URL('../../assets/partners/kentcanada.jpg', import.meta.url).href },
              ];
              return [...trustSchools, ...trustSchools].map((school, i) => (
              <motion.div
                key={`${school.en}-${i}`}
                initial={{ opacity: 0.6 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                className="flex-shrink-0 w-64 mx-4 rounded-xl bg-zinc-900/50 border border-white/5 p-6 flex flex-col items-center justify-center group hover:border-indigo-500/20 hover:bg-zinc-900/80 transition-all duration-300"
              >
                {/* Dummy logo - replace src with actual logo URL when available */}
                <div className="h-16 w-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-indigo-500/30 transition-colors overflow-hidden">
                  {school.logo ? (
                    <img src={school.logo} alt={school.en} className="h-full w-full object-contain p-1" />
                  ) : (
                    <span className="text-lg font-bold text-indigo-400/80 group-hover:text-indigo-400">{school.initials}</span>
                  )}
                </div>
                <span className="text-sm font-semibold text-white text-center mb-1 line-clamp-2">{school.en}</span>
                <span className="text-xs text-gray-500 text-center">{school.zh}</span>
                {school.badge && (
                  <span className="mt-2 text-[10px] text-indigo-400 font-mono px-2 py-0.5 rounded bg-indigo-500/10">
                    {school.badge}
                  </span>
                )}
              </motion.div>
            ));
            })()}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The "Cyborg" Foundation</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                We view neurotechnology not just as an external tool, but as the eventual, seamless extension of the human spirit.
              </p>
              <ul className="space-y-4">
                {[
                  'Demystify Neural Integration',
                  'Transition BCI from Sci-Fi to Reality',
                  'Cultivate Agency & Ethics',
                  'Open-Source Architecture'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/about" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2">
                  Read our Manifesto <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
              <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-2 overflow-hidden">
                <video
                  src={`${R2_BASE_URL}/assets/cyborgfoundation.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-xl w-full h-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic & Institutional Partners */}
      <section className="py-20 border-y border-white/5 bg-zinc-900/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-sm font-mono text-indigo-400 uppercase tracking-widest">Strategic & Institutional Partners</p>
          <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
            Supported by top-tier universities, government innovation hubs, and science popularization committees
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { en: 'Zhejiang University Science Park', zh: '浙大科技园', logo: new URL('../../assets/partners/zhejiangsciencepark.jpg', import.meta.url).href },
              { en: 'Zhejiang University of Science and Technology (ZUST)', zh: '浙江科技大学', logo: new URL('../../assets/partners/zust.jpg', import.meta.url).href },
              { en: 'Qizhen Brain-Computer Intelligence Industrialization Base', zh: '启真脑机智能产业化基地', logo: new URL('../../assets/partners/qizhenbciindustrialization.jpg', import.meta.url).href },
              { en: 'Zhejiang Science Popularization Federation (Sci2U)', zh: '浙江省科普联合会', logo: new URL('../../assets/partners/scien2you.jpg', import.meta.url).href },
              { en: 'China-Germany Foshan Industry Park', zh: '佛山中德工业服务区', logo: new URL('../../assets/partners/chinagermanyfoshanindustripark.jpg', import.meta.url).href },
              { en: 'Suzhou Innovation Center of Shanghai University', zh: '苏州上海大学创新中心', logo: new URL('../../assets/partners/suzhouinno.jpg', import.meta.url).href },
            ].map((partner, i) => (
              <motion.div
                key={partner.en}
                initial={{ opacity: 0.6, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/20 hover:bg-zinc-900/80 transition-all duration-300 group"
              >
                <div className="h-16 w-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-indigo-500/30 transition-colors overflow-hidden flex-shrink-0">
                  <img src={partner.logo} alt={partner.en} className="h-full w-full object-contain p-1" />
                </div>
                <span className="text-sm font-semibold text-white text-center mb-1">{partner.en}</span>
                <span className="text-xs text-gray-500 text-center">{partner.zh}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
