import { motion } from 'motion/react';
import { TrendingUp, Layers, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Investors = () => {
  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Investment Highlights</h1>
          <p className="text-xl text-gray-400">
            NeuroTX is building the bridge between university-level neurotechnology and K-12 education. Scalable unit economics, clear TAM, and a hybrid logistics model designed for margin preservation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-6 rounded-xl border border-white/10"
          >
            <div className="text-gray-400 text-sm mb-2">Total Addressable Market</div>
            <div className="text-3xl font-bold text-white">1,550–1,950</div>
            <div className="text-indigo-400 text-xs mt-1">Qualified Schools (49 cities)</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-6 rounded-xl border border-white/10"
          >
            <div className="text-gray-400 text-sm mb-2">Tier 3 Example Contract</div>
            <div className="text-3xl font-bold text-white">¥137,000</div>
            <div className="text-indigo-400 text-xs mt-1">Per year (100 students)</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-6 rounded-xl border border-white/10"
          >
            <div className="text-gray-400 text-sm mb-2">Global STEM Market</div>
            <div className="text-3xl font-bold text-white">$131B</div>
            <div className="text-indigo-400 text-xs mt-1">By 2030 (13.7% CAGR)</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-6 rounded-xl border border-white/10"
          >
            <div className="text-gray-400 text-sm mb-2">Students Studying Abroad</div>
            <div className="text-3xl font-bold text-white">900k+</div>
            <div className="text-indigo-400 text-xs mt-1">From China</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4">Triple-Stream Revenue Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
              <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
                <Layers className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">STEM Department Budgets</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Curriculum integrates with existing AI, robotics, and programming classes. Natural fit for annual institutional budgets.
              </p>
            </div>
            <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
              <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Provincial & Government Grants</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Subsidized by local governments and aligned with 184 MOE AI education bases and special education reform.
              </p>
            </div>
            <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
              <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Private Tuition & B2C</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Parents and private schools fund ASA programs. Premium positioning for elite university portfolio building.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4">Unit Economics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Tier 2: Turnkey ASA</h3>
              <p className="text-gray-400 mb-4">¥49,000 per 16-week cohort (max 25 students). High margin with controlled labor. Schools charge parents ~¥3,000/student for ASA; win-win economics.</p>
              <div className="text-sm font-mono text-gray-500">Primary cash cow · br41n.io hackathon pipeline</div>
            </div>
            <div className="bg-zinc-900/30 border border-indigo-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-indigo-400 mb-4">Tier 3: Neural Campus (SaaS Scaling)</h3>
              <p className="text-gray-400 mb-4">Base: ¥55,000 · PD: ¥12,000 · Seat: ¥700/student. Example: 100 students = ¥137,000/year. Pure software and IP margin—school teachers deliver after certification.</p>
              <div className="text-sm font-mono text-indigo-400">Holy Grail tier · Acquisition/VC target</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-indigo-500 pl-4">Hybrid Logistics Model</h2>
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8 md:p-12">
            <p className="text-gray-400 mb-6 max-w-3xl">
              The proprietary Web-LMS delivers theoretical curriculum at scale. Specialized traveling teachers are dispatched only when student cohorts pass the &quot;Readiness Gate.&quot; Preserves margins while scaling nationally across 49 cities.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                LMS handles daily curriculum delivery
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                Readiness Gate ensures high-stakes hardware deployment only when ready
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                Traveling experts for calibration and capstone labs
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-4">Government & Innovation</h2>
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
            <p className="text-gray-400 mb-6 max-w-4xl">
              China&apos;s Ministry of Education has designated <strong className="text-white">184 official AI education bases</strong>. These schools receive specialized grants for innovation, STEM modernization, and hardware procurement. NeuroTX&apos;s curriculum aligns directly with the MOE mandate for advanced digital literacy and AI integration by 2030.
            </p>
          </div>
        </motion.div>

        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all">
            Schedule a Conversation
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Investors;
