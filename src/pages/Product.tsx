import { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, Monitor, Cpu, Code, Shield, Eye, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import { r2AssetUrl } from '../r2PublicUrl';

const Product = () => {
  const [aiMentorsMuted, setAiMentorsMuted] = useState(true);

  const toggleAiMentorsMute = () => setAiMentorsMuted(prev => !prev);
  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The Neural Architect</h1>
          <p className="text-xl text-gray-400">
            We don't just teach coding; we teach System Design. From block-based logic to AI-assisted Python architecture.
          </p>
        </div>

        {/* 16-Week Syllabus Overview */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-indigo-500 pl-4">16-Week Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                phase: "Phase 1",
                title: "Foundations & Ethics",
                weeks: "Weeks 1-4",
                desc: "Establish neural literacy, data privacy, and signal logic. Transition from blocks to AI prompts.",
                icon: <Shield className="h-12 w-12" />
              },
              {
                phase: "Phase 2",
                title: "Passive BCI",
                weeks: "Weeks 5-8",
                desc: "Understanding the 'Input' side. Cognitive state detection, focus metrics, and neurofeedback.",
                icon: <Eye className="h-12 w-12" />
              },
              {
                phase: "Phase 3",
                title: "Reactive BCI",
                weeks: "Weeks 9-12",
                desc: "Evoked Potentials (P300/SSVEP). Using automatic brain responses to trigger digital actions.",
                icon: <Layers className="h-12 w-12" />
              },
              {
                phase: "Phase 4",
                title: "Active BCI & Capstone",
                weeks: "Weeks 13-16",
                desc: "Motor Imagery (MI). Using thought-of-movement to control physical robots (VEX/LEGO).",
                icon: <Cpu className="h-12 w-12" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 border border-white/10 p-6 rounded-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {item.icon}
                </div>
                <div className="text-indigo-400 text-sm font-mono mb-2">{item.phase} • {item.weeks}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Tech Stack</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white">
                  <Monitor className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    <a
                      href="https://davidwiehls.github.io/BCI-Journey/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-indigo-400 transition-colors inline-flex items-center gap-2"
                    >
                      BCI Journey <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <p className="text-gray-400 mb-3">Our interactive learning platform: 3D neuroanatomy, AI tutors (Synapse & Spark), Somas & leaderboards, and the BCI Lab — connect Unicorn Hybrid Black via Bluetooth to run 12 real experiments (P300, Motor Imagery, SSVEP, and more) with 8-channel EEG, all in-browser. Features a "Readiness Gate" to ensure students master theory before accessing hardware.</p>
                  <a
                    href="https://davidwiehls.github.io/BCI-Journey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Try BCI Journey <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hardware: Unicorn Hybrid Black</h3>
                  <p className="text-gray-400">Research-grade 8-channel EEG headset. The industry standard for university hackathons, provided by our partner g.tec.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-12 w-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI-Assisted Coding</h3>
                  <p className="text-gray-400">We teach students to be System Architects. Using Natural Language Prompts to generate Python pipelines for FFT and Classifiers.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-white/10 p-2 overflow-hidden">
             <video
                src={r2AssetUrl('fathersonbci.mp4')}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl w-full h-full object-cover"
                aria-label="Father and son using BCI"
             />
          </div>
        </div>

        {/* Learning Platform & Hardware */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0.6, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="aspect-video bg-black">
              <video
                src={r2AssetUrl('bcijourneydemos/talkmode.mp4')}
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">AI Assistants 24/7</h3>
              <p className="text-gray-400">
                The BCI Journey learning platform features AI tutors available around the clock to support your learning process. Get instant help with concepts, coding, and neurotechnology — whenever you need it.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.6, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="aspect-video bg-black">
              <video
                src={r2AssetUrl('introvideo.mp4')}
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Hardware in Action</h3>
              <p className="text-gray-400">
                See the hardware component of our curriculum — research-grade EEG headsets, hands-on BCI experiments, and students bridging the gap between brain and machine in real classroom settings.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Platform Demos */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-indigo-500 pl-4">Platform Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Platform Overview', src: 'bcijourneymain.mp4', desc: 'Explore 3D neuroanatomy, interactive simulations, and the full learning experience.' },
              { title: 'BCI Lab: Real Experiments', src: 'bcijourneylab.mp4', desc: 'Connect the Unicorn Hybrid Black headset and run live EEG experiments in-browser.' },
              { title: 'AI Mentors: Synapse & Spark', src: 'bcijourneylisten.mp4', desc: 'Voice conversations with AI tutors available 24/7 for personalized support.', hasMuteButton: true },
            ].map((demo) => (
              <motion.div
                key={demo.src}
                whileHover={{ y: -4 }}
                className="bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="aspect-video bg-black relative">
                  <video
                    src={r2AssetUrl(`bcijourneydemos/${demo.src}`)}
                    autoPlay
                    loop
                    playsInline
                    muted={demo.hasMuteButton ? aiMentorsMuted : undefined}
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                  {demo.hasMuteButton && (
                    <button
                      type="button"
                      onClick={toggleAiMentorsMute}
                      className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white transition-colors"
                      aria-label={aiMentorsMuted ? 'Unmute' : 'Mute'}
                    >
                      {aiMentorsMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </button>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{demo.title}</h3>
                  <p className="text-gray-400 text-sm">{demo.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experiment List */}
        <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-2 text-center">Master List of Experiments</h2>
          <p className="text-gray-400 text-sm text-center mb-8 max-w-2xl mx-auto">
            Delivered via BCI Journey's BCI Lab module — connect your Unicorn Hybrid Black headset and run these paradigms in-browser.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-indigo-400 font-mono mb-4 text-sm uppercase tracking-wider">Passive BCI</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• The Magic Mirror (Artifact Detection)</li>
                <li>• Focus Power Dash (Beta Waves)</li>
                <li>• The Calm Down Room (Neurofeedback)</li>
                <li>• Adaptive Math Quiz (Cognitive Load)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-indigo-400 font-mono mb-4 text-sm uppercase tracking-wider">Reactive BCI</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• The Sorting Hat (Classifiers)</li>
                <li>• Mind Painter (SSVEP)</li>
                <li>• The Mind Keyboard (P300)</li>
                <li>• API Bridging (Python to Robot)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-indigo-400 font-mono mb-4 text-sm uppercase tracking-wider">Active BCI</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>• Digital Block Push (Calibration)</li>
                <li>• Drive the Bug (Single-class MI)</li>
                <li>• VEX Obstacle Course (Two-class MI)</li>
                <li>• Robotic Manipulation (Multi-class MI)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
