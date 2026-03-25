import { motion } from 'motion/react';
import { Shield, Lock } from 'lucide-react';
import { r2AssetUrl } from '../r2PublicUrl';

const About = () => {
  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The "Cyborg" Foundation</h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            We view neurotechnology not just as an external tool, but as the eventual, seamless extension of the human spirit.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">Our Mission</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-white">Demystify Neural Integration</h3>
                  <p className="text-gray-400 text-sm mt-1">Transition BCI from "science fiction" to a foundational life skill.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-white">Cognitive Evolution</h3>
                  <p className="text-gray-400 text-sm mt-1">Enable students to acquire skills through non-traditional, direct neural pathways (Input/Neurofeedback).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-white">Positive Future Acceptance</h3>
                  <p className="text-gray-400 text-sm mt-1">Cultivate a generation that views the "Cyborg Future" with agency, ethics, and optimism.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">Ethical Stance</h2>
            <p className="text-gray-300 mb-6">
              Neural data is the most intimate form of personal property. Our privacy framework is uncompromising.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-emerald-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Institutional Responsibility</h3>
                  <p className="text-gray-400 text-sm">We operate strictly B2B. The educational institution remains the legal and ethical steward of the students' neural data.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-emerald-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Collaborative Protection</h3>
                  <p className="text-gray-400 text-sm">We partner with schools to create a fortified, closed-loop environment. Data never enters the commercial wild.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-mono mb-4 w-fit">FOUNDER & LEAD</div>
              <h2 className="text-3xl font-bold mb-4">David Wiehls</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                German engineer, Official China Host Partner, and Global Jury Member for the br41n.io Hackathon. An RWTH Aachen graduate dedicated to bridging the gap between pure neuroscience and applied robotics in K-12 education.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.linkedin.com/in/david-wiehls/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-indigo-500/30 transition-colors">RWTH Aachen Alumnus</a>
                <a href="https://www.br41n.io/Spring-School-2026" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-indigo-500/30 transition-colors">br41n.io Jury Member</a>
              </div>
            </div>
            <div className="bg-zinc-800 h-64 md:h-auto relative">
               <img 
                src={r2AssetUrl('company-information/David_profile.JPG')}
                alt="David Wiehls"
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
