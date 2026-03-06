import { motion } from 'motion/react';
import { Shield, Lock, Building2 } from 'lucide-react';

const DataEthics = () => {
  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Ethics & Privacy</h1>
          <p className="text-xl text-gray-400">
            Neural data is the most intimate form of personal property. Our privacy framework is uncompromising.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold">The &quot;School-as-Guardian&quot; Model</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We operate strictly B2B. Every student must be enrolled and verified by a school. The institution remains the legal and ethical steward of students&apos; neural data. We never commercialize or sell neural data.
            </p>
          </div>

          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                <Lock className="h-6 w-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold">Collaborative Protection</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We partner with schools to create a fortified, closed-loop environment. Data flows from student to school-controlled infrastructure only.
            </p>
          </div>

          <div className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Data Deletion</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              At the end of every semester, student neural models and session data are deleted per mandated protocols. Schools and students retain full control.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default DataEthics;
