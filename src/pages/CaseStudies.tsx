import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      school: "Hangzhou No.2 High School Qianjiang",
      type: "Elite International Division",
      title: "The Global Neuroscience Pathway",
      summary: "Connecting Year 12 students to the world's leading BCI researchers. Students traveled to Europe to visit official Hosting Institutes and networked with hackathon judges.",
      tags: ["International Mobility", "Research Networking", "Elite Admissions"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
    },
    {
      school: "Zhejiang Wenling High School",
      type: "Top-Tier Public High School",
      title: "Bridging Local Excellence with Global Neuroscience",
      summary: "Elevating public school STEM to the global stage. A select cohort of senior students integrated into international hackathon teams, proving capability to elite domestic and foreign universities.",
      tags: ["Public School Innovation", "Global Competition", "Hard Tech Portfolio"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      school: "Hangzhou Entel Foreign Language School",
      type: "Foreign Language School",
      title: "The Sino-German Tech Bridge",
      summary: "Pairing linguistic excellence with 'Hard' Tech. 50+ students used the program to build portfolios for Germany's elite TU9 engineering universities (RWTH Aachen, TUM, KIT).",
      tags: ["Sino-German Bridge", "High Volume", "Engineering Focus"],
      image: "https://images.unsplash.com/photo-1592280771884-131186570d96?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-gray-400">
            Real-world impact across International, Public, and Foreign Language schools.
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                  <img 
                    src={study.image} 
                    alt={study.school} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-indigo-400">
                    {study.type}
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm uppercase tracking-wider">{study.school}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  {study.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 group">
                  Read Full Case Study <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CaseStudies;
