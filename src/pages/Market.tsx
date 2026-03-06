import { motion } from 'motion/react';
import { TrendingUp, Users, School, Globe } from 'lucide-react';

const Market = () => {
  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Market Assessment</h1>
          <p className="text-xl text-gray-400">
            Quantifying the Ideal Customer Profile for BCI Education Integration Across China's Urban Centers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10">
            <div className="text-gray-400 text-sm mb-2">Total Addressable Market</div>
            <div className="text-3xl font-bold text-white">~1,950</div>
            <div className="text-indigo-400 text-xs mt-1">Qualified Schools</div>
          </div>
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10">
            <div className="text-gray-400 text-sm mb-2">Target Cities</div>
            <div className="text-3xl font-bold text-white">49</div>
            <div className="text-indigo-400 text-xs mt-1">Tier 1, New Tier 1, Tier 2</div>
          </div>
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10">
            <div className="text-gray-400 text-sm mb-2">Global STEM Market</div>
            <div className="text-3xl font-bold text-white">$131B</div>
            <div className="text-indigo-400 text-xs mt-1">By 2030 (Projected)</div>
          </div>
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/10">
            <div className="text-gray-400 text-sm mb-2">Students Studying Abroad</div>
            <div className="text-3xl font-bold text-white">900k+</div>
            <div className="text-indigo-400 text-xs mt-1">From China</div>
          </div>
        </div>

        {/* Segments */}
        <div className="space-y-12">
          <div className="border-l-2 border-indigo-500 pl-8">
            <h2 className="text-2xl font-bold mb-4">Segment I: Premium International & Private Bilingual Schools</h2>
            <p className="text-gray-400 mb-4 max-w-4xl">
              The core Tier 2 market. Schools with high autonomy and wealthy parent bodies seeking elite university portfolios.
            </p>
            <div className="flex gap-4 text-sm font-mono text-gray-500">
              <span>Est. ICP: 600-750 Schools</span>
              <span>•</span>
              <span>Primary Model: Tier 2 (ASA)</span>
            </div>
          </div>

          <div className="border-l-2 border-emerald-500 pl-8">
            <h2 className="text-2xl font-bold mb-4">Segment II: Elite Public High Schools & Foreign Language Academies</h2>
            <p className="text-gray-400 mb-4 max-w-4xl">
              The "Hybrid" market. Institutions needing "hard tech" portfolios to balance linguistic excellence and compete globally.
            </p>
            <div className="flex gap-4 text-sm font-mono text-gray-500">
              <span>Est. ICP: 250-300 Schools</span>
              <span>•</span>
              <span>Primary Model: Tier 2 & 3</span>
            </div>
          </div>

          <div className="border-l-2 border-purple-500 pl-8">
            <h2 className="text-2xl font-bold mb-4">Segment III: MOE AI Bases & Provincial Model High Schools</h2>
            <p className="text-gray-400 mb-4 max-w-4xl">
              The Tier 3 SaaS market. Government-mandated AI integration bases with guaranteed access to capital and modernization grants.
            </p>
            <div className="flex gap-4 text-sm font-mono text-gray-500">
              <span>Est. ICP: 400-500 Schools</span>
              <span>•</span>
              <span>Primary Model: Tier 3 (Neural Campus)</span>
            </div>
          </div>

          <div className="border-l-2 border-orange-500 pl-8">
            <h2 className="text-2xl font-bold mb-4">Segment IV: Special Education Hubs</h2>
            <p className="text-gray-400 mb-4 max-w-4xl">
              Inclusive Neural Rehabilitation. Using Passive BCI for neurofeedback and adaptive learning in state-subsidized pilot zones.
            </p>
            <div className="flex gap-4 text-sm font-mono text-gray-500">
              <span>Est. ICP: 300-400 Schools</span>
              <span>•</span>
              <span>Primary Model: Tier 3 (Neural Campus)</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Market;
