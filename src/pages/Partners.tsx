import { motion } from 'motion/react';

const Partners = () => {
  const partners = [
    {
      category: "Educational Vanguard (Piloting & Partner Schools)",
      items: [
        "Hangzhou Chongwen Century City Experimental School",
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
        "Zhejiang University Science Park",
        "Zhejiang University of Science and Technology (ZUST)",
        "Qizhen Brain-Computer Intelligence Industrialization Base",
        "Zhejiang Science Popularization Federation (Sci2U)",
        "China-Germany Foshan Industry Park",
        "Suzhou Innovation Center of Shanghai University"
      ]
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {partners.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/30 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-8 text-indigo-400 border-b border-white/10 pb-4">{section.category}</h2>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-white/50 mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
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
