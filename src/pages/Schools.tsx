import { motion } from 'motion/react';
import { CheckCircle, Award, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Schools = () => {
  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Elevate STEM Prestige</h1>
          <p className="text-xl text-gray-400">
            A Turnkey Pathway to Elite University Portfolios via the Global br41n.io Hackathon.
          </p>
        </div>

        {/* Value Prop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
            <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Ivy League Admissions</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Admissions officers are flooded with standard "robotics club" applications. A portfolio showcasing applied neuroscience and global hackathon participation instantly elevates a student.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
            <div className="h-12 w-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Institutional Prestige</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Becoming an official hub for neurotechnology positions your school as the undisputed regional leader in futuristic education.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
            <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Interdisciplinary Excellence</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              BCI inherently breaks down academic silos, seamlessly blending Computer Science, Biology, Neuroscience, Data Math, and Ethics.
            </p>
          </div>
        </div>

        {/* The Solution Section */}
        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Schools Cannot Do This Alone</h2>
              <p className="text-gray-400 mb-6">
                Entering a global BCI hackathon is incredibly complex. It requires expensive research-grade hardware, highly specialized instructors, and complex algorithmic architecture.
              </p>
              <h3 className="text-xl font-bold text-white mb-4">The NeuroTX Solution:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-500 mt-1" />
                  <div>
                    <span className="font-semibold text-white">Insider Mentorship:</span>
                    <p className="text-gray-400 text-sm">Led by David Wiehls, Official China Host Partner and Global Jury Member for the br41n.io Hackathon.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-500 mt-1" />
                  <div>
                    <span className="font-semibold text-white">Hardware Provided:</span>
                    <p className="text-gray-400 text-sm">We supply the research-grade Unicorn Hybrid Black headsets. Zero procurement risk.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-500 mt-1" />
                  <div>
                    <span className="font-semibold text-white">Zero Staff Burden:</span>
                    <p className="text-gray-400 text-sm">We manage the pedagogical heavy lifting through our specialized teachers or PD certification.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-full min-h-[300px] bg-black rounded-2xl overflow-hidden border border-white/10">
               <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop" 
                  alt="Students collaborating" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to establish your pipeline?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all">
            Schedule a Consultation
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Schools;
