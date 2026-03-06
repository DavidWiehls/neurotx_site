import { motion } from 'motion/react';
import { ArrowRight, Brain, Cpu, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-black to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />
        
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
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/schools" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                For Schools <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/product" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm">
                Explore Curriculum
              </Link>
            </div>
          </motion.div>
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

      {/* Stats / Trust Section */}
      <section className="py-20 border-y border-white/5 bg-zinc-900/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <p className="text-sm font-mono text-indigo-400 uppercase tracking-widest">Trusted by Educational Vanguards</p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">
            {[
              { en: 'Hangzhou Chongwen Century City Experimental School', zh: '杭州市萧山崇文实验学校', badge: 'Official br41n.io Hosting Institution', initials: 'CC', logo: null },
              { en: 'Hangzhou Xuejun Wenyuan Experimental School', zh: '杭州学军文渊实验科学', initials: 'XW', logo: null },
              { en: 'Hangzhou Wahaha Bilingual School', zh: '杭州娃哈哈双语学校', initials: 'WH', logo: null },
              { en: 'Hangzhou Entel Foreign Language School', zh: '杭州英特外国语学校', initials: 'ET', logo: null },
              { en: 'Hangzhou No.2 High School Qianjiang', zh: '杭州第二中学钱江', initials: 'HZ', logo: null },
              { en: 'Zhejiang Wenling High School', zh: '浙江省温岭中学', initials: 'WL', logo: null },
              { en: 'Overseas Chinese Academy of Concord Suzhou (OCAC)', zh: '苏州工业园区海归人才子女学校', initials: 'OC', logo: null },
              { en: 'Britannia International School in Guangzhou (BIS)', zh: '广州市英伦外籍人员子女学校', initials: 'BI', logo: null },
              { en: 'Canadian International School of Guangzhou (CIS)', zh: '广州市加拿大外籍人员子女学校', initials: 'CI', logo: null },
              { en: 'Foshan No.1 High School', zh: '佛山市第一中学', initials: 'FS', logo: null },
              { en: 'EtonHouse International Education Group', zh: '新加坡伊顿国际教育集团', initials: 'EH', logo: null },
              { en: 'Canada Kent School', zh: '加拿大肯特学校', initials: 'CK', logo: null },
            ].flatMap((school) => [school, school]).map((school, i) => (
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
            ))}
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
              <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-2">
                <img 
                  src="https://images.unsplash.com/photo-1555664424-778a6902201b?q=80&w=2000&auto=format&fit=crop" 
                  alt="BCI Technology" 
                  className="rounded-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
