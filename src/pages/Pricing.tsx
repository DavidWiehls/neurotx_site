import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Partnership Models</h1>
          <p className="text-xl text-gray-400">
            Standardized partnership tiers designed for seamless integration into International, Bilingual, and Elite Public Schools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tier 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-lg font-medium text-indigo-400 mb-2">Tier 1</h3>
              <h2 className="text-3xl font-bold text-white">Neuro-Discovery</h2>
              <p className="text-gray-400 text-sm mt-2">The low-friction entry point. Perfect for STEM Weeks.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">¥5,000</span>
              <span className="text-gray-500"> / day</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>1-to-2 day intensive boot camp</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>On-site NeuroTX Specialized Teacher</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>All BCI hardware included</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>Up to 200 participants per day</span>
              </li>
            </ul>
            <Link to="/contact" className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 text-center transition-colors font-medium">
              Book Workshop
            </Link>
          </motion.div>

          {/* Tier 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-zinc-900 border border-indigo-500/30 rounded-2xl p-8 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-indigo-600 text-xs font-bold px-3 py-1 rounded-bl-xl text-white">POPULAR</div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-indigo-400 mb-2">Tier 2</h3>
              <h2 className="text-3xl font-bold text-white">Turnkey ASA</h2>
              <p className="text-gray-400 text-sm mt-2">Complete 16-week extracurricular program.</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">¥49,000</span>
              <span className="text-gray-500"> / semester</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>Full 16-week curriculum</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>Weekly instruction by NeuroTX Expert</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>Full LMS student access</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>Max cohort size of 25 students</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>br41n.io Hackathon preparation</span>
              </li>
            </ul>
            <Link to="/contact" className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-center transition-colors font-medium">
              Start ASA Program
            </Link>
          </motion.div>

          {/* Tier 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-lg font-medium text-indigo-400 mb-2">Tier 3</h3>
              <h2 className="text-3xl font-bold text-white">Neural Campus</h2>
              <p className="text-gray-400 text-sm mt-2">Full academic year integration & teacher certification.</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">¥55,000</span>
              <span className="text-gray-500"> / year (base)</span>
            </div>
            <div className="mb-6 text-sm text-gray-400">
              <span>+ ¥12,000 Teacher PD · + ¥700/student seat</span>
              <span className="block text-indigo-400/80 mt-1">Example: 100 students ≈ ¥137,000/year</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>Annual Software License</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>"Neural Guide" Teacher Certification (PD: ¥12,000)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>Hardware procurement consulting</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>2 on-site expert visits per semester</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Check className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                <span>Sustainable, long-term capability</span>
              </li>
            </ul>
            <Link to="/contact" className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/10 text-center transition-colors font-medium">
              Contact for Licensing
            </Link>
          </motion.div>

        </div>

        <div className="mt-16 bg-zinc-900/30 border border-white/5 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">For Parents</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Looking for the 16-week After-School Activity? The ASA program costs approximately ¥1,960 - ¥3,000 per student depending on your school's hosting fee.
          </p>
          <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Request Parent Brochure &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
