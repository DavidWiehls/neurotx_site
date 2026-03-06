import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cpu, School, Building2, CircuitBoard } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      category: "Educational Vanguard (Piloting & Partner Schools)",
      items: [
        { name: "Hangzhou Chongwen Century City Experimental School", badge: "Official br41n.io Hosting Institution" },
        "Hangzhou Xuejun Wenyuan Experimental School",
        "Hangzhou Wahaha Bilingual School",
        "Hangzhou Entel Foreign Language School",
        "Hangzhou No.2 High School Qianjiang",
        "Zhejiang Wenling High School",
        "Overseas Chinese Academy of Concord Suzhou (OCAC)",
        "Britannia International School in Guangzhou (BIS)",
        "Canadian International School of Guangzhou (CIS)",
        "Foshan No.1 High School",
        "EtonHouse International Education Group",
        "Canada Kent School"
      ]
    },
    {
      category: "Strategic & Institutional Partners",
      items: [
        { name: "g.tec medical engineering", badge: "Hardware Partner · Unicorn Hybrid Black EEG" },
        "Zhejiang University Science Park",
        "Zhejiang University of Science and Technology (ZUST)",
        "Qizhen Brain-Computer Intelligence Industrialization Base",
        "Zhejiang Science Popularization Federation (Sci2U)",
        "China-Germany Foshan Industry Park",
        "Suzhou Innovation Center of Shanghai University"
      ]
    }
  ];

  const partnershipTypes = [
    { icon: CircuitBoard, title: "Hardware Partners", desc: "We work with g.tec and other research-grade BCI hardware providers. The Unicorn Hybrid Black 8-channel EEG is the industry standard.", cta: "Explore hardware integration" },
    { icon: Cpu, title: "STEAM & Robotics (Plugin Strategy)", desc: "BCI curricula integrate with VEX Robotics, LEGO, and ROS. We design curricula that plug into hardware schools already own.", cta: "Become a STEAM partner" },
    { icon: Building2, title: "Institutional Partners", desc: "Universities, government innovation hubs, and science popularization committees. We host free BCI lectures and hackathons.", cta: "Partner with us" },
    { icon: School, title: "Hosting Schools", desc: "Official br41n.io hosting institutions. Host regional or national hackathon events and position your school as a neurotechnology hub.", cta: "Become a hosting institution" }
  ];

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Trust Network</h1>
          <p className="text-xl text-gray-400">
            Our operational success is supported by a robust network of top-tier universities, government innovation hubs, and elite schools.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold mb-8 text-indigo-400">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipTypes.map((type, idx) => (
              <div key={idx} className="bg-zinc-900/30 border border-white/10 rounded-2xl p-6 hover:border-indigo-500/20 transition-colors">
                <div className="h-12 w-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
                  <type.icon className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{type.desc}</p>
                <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">{type.cta} &rarr;</Link>
              </div>
            ))}
          </div>
        </motion.div>

        <h2 className="text-2xl font-bold mb-8 text-indigo-400">Our Network</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {partners.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-8 text-white border-b border-white/10 pb-4">{section.category}</h3>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <div className="flex items-start gap-3 text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-2.5 flex-shrink-0" />
                      <span>{typeof item === 'string' ? item : item.name}</span>
                    </div>
                    {typeof item === 'object' && item.badge && (
                      <span className="ml-4 text-xs text-indigo-400 font-mono">{item.badge}</span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Partners;
