import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { r2AssetUrl } from '../r2PublicUrl';

const wechatUrl = {
  hangzhouNo2: 'https://mp.weixin.qq.com/s/hE2bai_ASl91InvxFqyvlw',
  wenling: 'https://mp.weixin.qq.com/s/H2aGYxX1h-dyorgjyC7AmQ',
};

const fullCaseStudyContent: Record<string, ReactNode> = {
  hangzhouNo2: (
    <div className="space-y-6 text-left">
      <h2 className="text-2xl font-bold">The Global Neuroscience Pathway</h2>
      <p className="text-gray-300 font-medium">How Hangzhou No.2 High School Qianjiang Connected Year 12 Students to the World's Leading Brain-Computer Interface Researchers</p>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">The Challenge: Standing Out in the Global Applicant Pool</h3>
        <p className="text-gray-400 leading-relaxed">
          For the elite Year 12 students at the international division of Hangzhou No.2 High School Qianjiang, standard academic excellence is a given. However, as these students prepared their university applications for highly competitive neuroscience, pre-med, and engineering programs in China and abroad, they faced a critical hurdle: <em>How do you prove genuine research capability and international collaboration before even entering university?</em> The school administration needed a program that moved beyond standard robotics to offer authentic, cross-border academic networking.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">Phase 1: The Catalyst & Global Collaboration (April – May 2025)</h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          The journey began in April 2025 with a NeuroTX &quot;Neuro-Discovery&quot; Workshop. In just two days, students were introduced to the fundamentals of Brain-Computer Interfaces (BCI), visualizing their own EEG signals and understanding the 50/50 Input/Output paradigm.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          The engagement was so profound that these Year 12 students immediately formed teams to enter the <strong>May 2025 br41n.io Global Hackathon</strong>.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
          <li><strong>The Breakthrough:</strong> Because the hackathon is a global, virtual-hybrid event, the Hangzhou No.2 High School students were placed in collaborative projects alongside international teams. They spent 48 hours architecting algorithms and troubleshooting Python code with peers and mentors from across the globe, dealing with real clinical data and live BCI hardware.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">Phase 2: The European Academic Expedition (Summer 2025)</h3>
        <p className="text-gray-400 italic mb-2">Bridging the gap between the classroom and the research lab.</p>
        <p className="text-gray-400 leading-relaxed mb-3">
          Leveraging their school's international mobility program and their new status as br41n.io competitors, the students traveled to Europe in the summer of 2025. Because of their connection through NeuroTX, this wasn't just a standard study tour.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          The students physically visited official <strong>Hosting Institutes of the international BCI hackathon</strong> across Europe.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
          <li>They stepped inside world-class neuroscience labs.</li>
          <li>They saw advanced research-grade hardware in action.</li>
          <li>Most importantly, they stood face-to-face with the very researchers and professors who had judged their hackathon projects weeks earlier.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">Phase 3: The Deep Dive & Career Acceleration (Current: 2025 – 2026)</h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Returning to Hangzhou transformed, these students recognized that BCI was their definitive career path. They enrolled in ongoing, advanced NeuroTX BCI lessons to master signal acquisition, artifact filtering, and machine learning classifiers.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          <strong>The Objective:</strong> The students are currently undertaking rigorous preparation for the upcoming <strong>April 2026 br41n.io Spring School and Hackathon</strong>.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
          <li>Rather than entering as beginners, they are now entering as veteran competitors.</li>
          <li>They are utilizing the NeuroTX LMS and AI-assisted coding platforms to design highly advanced projects.</li>
          <li>Their ultimate goal is to use the 2026 event to directly network with specific university professors to secure admissions and undergraduate research placements in top-tier neuroscience programs in both China and abroad.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">The Result: Unmatched ROI for the School and the Students</h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Through the NeuroTX pipeline, Hangzhou No.2 High School Qianjiang provided its students with a priceless academic asset:
        </p>
        <ol className="list-decimal list-inside text-gray-400 space-y-2 ml-2">
          <li><strong>Verifiable International Collaboration:</strong> Students possess documented proof of working on global tech teams to solve real-world neuro-medical problems.</li>
          <li><strong>Direct Academic Networking:</strong> By bridging the virtual hackathon with physical European lab visits, the school facilitated direct networking between its high schoolers and elite university faculty.</li>
          <li><strong>Definitive Career Trajectories:</strong> The program solidified the students' ambitions, giving them a massive competitive edge for university admissions in highly selective STEM and neuroscience tracks.</li>
        </ol>
      </div>

      <p className="text-gray-300 italic">Does your school have ambitious students aiming for the world's top STEM universities?</p>
      <p className="text-gray-400">NeuroTX provides the exact curriculum, hardware, and global network needed to get them there. Contact David Wiehls today to establish your school's pipeline to the international br41n.io network.</p>
    </div>
  ),
  wenling: (
    <div className="space-y-6 text-left">
      <h2 className="text-2xl font-bold">Bridging Local Excellence with Global Neuroscience</h2>
      <p className="text-gray-300 font-medium">How Zhejiang Wenling High School Catapulted Its Top Students into International BCI Research Networks</p>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">The Challenge: Elevating Public School STEM to the Global Stage</h3>
        <p className="text-gray-400 leading-relaxed">
          Zhejiang Wenling High School is renowned for its rigorous academic standards and exceptional student talent. However, for their most ambitious senior students aiming to pursue elite careers in neuroscience, medicine, and advanced AI, traditional high school physics and computer science classes were no longer enough. To compete with applicants from elite international academies for top university spots—both within China and abroad—these students needed verifiable, hands-on experience in cutting-edge research and cross-border academic collaboration.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">Phase 1: The Spark and the Sprint (April – May 2025)</h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          In April 2025, NeuroTX introduced a specialized Tier 1 &quot;Neuro-Discovery&quot; Workshop to a select cohort of senior students at Wenling. The introduction to the 50/50 Input/Output world of Brain-Computer Interfaces (BCI) was an instant catalyst.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          Driven by this new frontier, these students boldly enrolled in the <strong>May 2025 br41n.io Global Hackathon</strong> just weeks later.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
          <li><strong>Global Integration:</strong> Rather than competing in an isolated local bracket, the Wenling High School cohort was integrated into international project teams. They collaborated virtually with peers and university mentors from around the world, applying AI classifiers and Python logic to real-world BCI challenges using data from the Unicorn Hybrid Black headset.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">Phase 2: The European Research Expedition (Summer 2025)</h3>
        <p className="text-gray-400 italic mb-2">From virtual collaboration to physical immersion.</p>
        <p className="text-gray-400 leading-relaxed mb-3">
          To capitalize on their hackathon momentum, the Wenling cohort participated in a specialized international academic mobility program in the summer of 2025. Traveling to Europe, they didn't just tour campuses—they visited the official <strong>Hosting Institutes of the international BCI hackathon</strong>.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
          <li><strong>The Academic ROI:</strong> Students stepped inside authentic, world-class neurotechnology laboratories. They interacted face-to-face with the esteemed European professors, researchers, and engineers who had evaluated their hackathon projects just months prior. This transformed a virtual competition into genuine, career-defining academic networking (<em>Guanxi</em>).</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">Phase 3: The Deep Dive & The 2026 Campaign (Current)</h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Returning to Zhejiang with a crystallized vision of their futures, these students fully committed to the NeuroTX advanced curriculum. They recognized that BCI was not just an extracurricular activity, but their definitive career pathway.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          <strong>Current Objective:</strong> The Wenling cohort is currently immersed in intensive NeuroTX BCI lessons, mastering signal acquisition and machine learning architecture in preparation for the <strong>April 2026 br41n.io Spring School and Hackathon</strong>.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
          <li><strong>Career Trajectory:</strong> Instead of entering as novices, they are returning to the global stage as experienced competitors. Their ultimate goal is to leverage this 2026 hackathon to solidify relationships with leading neuroscience researchers, securing vital recommendations and undergraduate research placements at top-tier universities in China and internationally.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">The Result: A Paradigm Shift for Public High School STEM</h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Through the NeuroTX pipeline, Zhejiang Wenling High School successfully bridged the gap between local academic rigor and global scientific innovation:
        </p>
        <ol className="list-decimal list-inside text-gray-400 space-y-2 ml-2">
          <li><strong>Elite University Portfolios:</strong> Students now possess unmatched application portfolios featuring international tech collaboration, applied machine learning, and advanced neurobiology.</li>
          <li><strong>Global Academic Mobility:</strong> The program provided public school students with a direct, verifiable bridge to European research institutes and global university faculty.</li>
          <li><strong>Future-Proof Career Paths:</strong> The school successfully launched its top STEM talent into the highly exclusive pipeline of global neuroscience and neuro-engineering.</li>
        </ol>
      </div>

      <p className="text-gray-300 italic">Is your high school ready to connect its top STEM talent to the world's leading neuroscience researchers?</p>
      <p className="text-gray-400">NeuroTX provides the hardware, the curriculum, and the international network. Contact David Wiehls today to establish your school's pipeline to the br41n.io global hackathon.</p>
    </div>
  ),
  entel: (
    <div className="space-y-6 text-left">
      <h2 className="text-2xl font-bold">The Sino-German Tech Bridge</h2>
      <p className="text-gray-300 font-medium">How Hangzhou Entel Foreign Language School Connected 50+ Students to Germany's Elite Engineering Universities</p>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">The Challenge: Pairing Linguistic Excellence with &quot;Hard&quot; Tech</h3>
        <p className="text-gray-400 leading-relaxed">
          Hangzhou Entel Foreign Language School consistently produces students with exceptional cross-cultural communication skills and international ambitions. Many of these students specifically target Germany for its world-renowned, tuition-free engineering and tech universities. However, German university admissions—especially for institutions like the TU9—are notoriously rigorous regarding technical foundations. Entel administrators realized that fluency in German and English wasn't enough; their students needed a highly advanced STEM portfolio featuring verifiable research and engineering experience to stand out to European admissions committees.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">Phase 1: The High-Volume Tech Activation (Spring 2025)</h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          To bridge this gap, Entel partnered with NeuroTX to introduce Brain-Computer Interfaces (BCI) to the student body. The response was massive.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          Over 50 students enrolled in the initial NeuroTX workshops. Drawn by the intersection of biology, computer science, and international collaboration, these students rapidly transitioned from learning basic Python to visualizing their own brainwaves.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Capitalizing on this momentum, a large cohort of these students officially entered the <strong>2025 br41n.io Global Hackathon</strong>. They worked on international teams, collaborating virtually to solve complex neuro-data challenges—proving to future universities that they could operate in a high-stakes, cross-border technical environment.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">Phase 2: The Direct Pipeline to Germany's Top Institutes</h3>
        <p className="text-gray-400 leading-relaxed mb-3 italic">This is where the NeuroTX network fundamentally changed the students' trajectories.</p>
        <p className="text-gray-400 leading-relaxed mb-3">
          Because NeuroTX has deep European roots and is deeply integrated into the br41n.io hackathon network, the Entel students were granted exclusive networking access to some of Germany's most prestigious institutions.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          Through their hackathon participation and NeuroTX's partner network, the students directly connected with researchers, mentors, and official hosting institutes associated with:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-1 ml-2">
          <li><strong>RWTH Aachen University</strong> (One of Europe's leading technical universities and the alma mater of NeuroTX's founder)</li>
          <li><strong>Technical University of Munich (TUM)</strong></li>
          <li><strong>Karlsruhe Institute of Technology (KIT)</strong></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">Phase 3: Securing the Future (The 2026 Campaign)</h3>
        <p className="text-gray-400 mb-2"><em>Current Status: March 2026</em></p>
        <p className="text-gray-400 leading-relaxed mb-3">
          The 2025 hackathon was just the beginning. Realizing the immense value of these European academic connections, the Entel students have continued their advanced BCI coursework with NeuroTX throughout the academic year.
        </p>
        <p className="text-gray-400 leading-relaxed">
          <strong>The Objective:</strong> These students are currently in intensive training for the upcoming <strong>April 2026 br41n.io Spring School and Hackathon</strong>. Their goal is to use their advanced BCI projects—ranging from medical data analysis to robotic control—as the centerpiece of their application portfolios for TUM, RWTH Aachen, and KIT, leveraging the relationships they have built over the past year to secure admissions into Germany's elite STEM programs.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-indigo-400">The Result: The Ultimate International Applicant</h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Through the NeuroTX program, Hangzhou Entel Foreign Language School provided its students with a critical competitive advantage:
        </p>
        <ol className="list-decimal list-inside text-gray-400 space-y-2 ml-2">
          <li><strong>The &quot;Linguist-Engineer&quot; Profile:</strong> Students successfully combined their foreign language fluency with applied machine learning and neuroscience, creating a uniquely powerful university applicant profile.</li>
          <li><strong>Direct European Networking:</strong> The school bypassed traditional, generic study-abroad agencies and connected students directly to researchers at Germany's top technical institutes.</li>
          <li><strong>High-Volume Engagement:</strong> Scaling the program to 50+ students proved that advanced neurotechnology can be successfully deployed to large cohorts, driving massive value for the school's international department.</li>
        </ol>
      </div>

      <p className="text-gray-300 italic">Does your international school want to build a direct bridge to Europe's top technical universities?</p>
      <p className="text-gray-400">NeuroTX provides the curriculum, the hardware, and the exclusive European network. Contact David Wiehls today to establish your school's pipeline to the br41n.io global hackathon.</p>
    </div>
  ),
};

const CaseStudies = () => {
  const [openCaseId, setOpenCaseId] = useState<string | null>(null);

  const cases = [
    {
      id: 'hangzhouNo2',
      school: "Hangzhou No.2 High School Qianjiang",
      type: "Elite International Division",
      title: "The Global Neuroscience Pathway",
      summary: "Connecting Year 12 students to the world's leading BCI researchers. Students traveled to Europe to visit official Hosting Institutes and networked with hackathon judges.",
      tags: ["International Mobility", "Research Networking", "Elite Admissions"],
      image: r2AssetUrl('partners/casestudy_hangerqiangjiang.jpg'),
      wechatUrl: wechatUrl.hangzhouNo2,
    },
    {
      id: 'wenling',
      school: "Zhejiang Wenling High School",
      type: "Top-Tier Public High School",
      title: "Bridging Local Excellence with Global Neuroscience",
      summary: "Elevating public school STEM to the global stage. A select cohort of senior students integrated into international hackathon teams, proving capability to elite domestic and foreign universities.",
      tags: ["Public School Innovation", "Global Competition", "Hard Tech Portfolio"],
      image: r2AssetUrl('partners/casestudy_wenling.png'),
      wechatUrl: wechatUrl.wenling,
    },
    {
      id: 'entel',
      school: "Hangzhou Entel Foreign Language School",
      type: "Foreign Language School",
      title: "The Sino-German Tech Bridge",
      summary: "Pairing linguistic excellence with 'Hard' Tech. 50+ students used the program to build portfolios for Germany's elite TU9 engineering universities (RWTH Aachen, TUM, KIT).",
      tags: ["Sino-German Bridge", "High Volume", "Engineering Focus"],
      image: r2AssetUrl('partners/casestudy_entel.jpg'),
      wechatUrl: null,
    },
    {
      id: 'ocac',
      school: "Overseas Chinese Academy of Concord Suzhou (OCAC)",
      type: "High-Volume Middle School",
      title: "Scaling the Turnkey ASA Across Middle Grades",
      summary: "OCAC established itself as a regional leader in neurotechnology by deploying the 16-week Turnkey ASA to large middle school cohorts. The program proved that BCI can scale across younger grades, driving institutional FOMO across Suzhou's top-tier international schools.",
      tags: ["Middle School ASA", "Regional Leadership", "Scalable Deployment"],
      image: r2AssetUrl('partners/casestudy_ocac.jpg'),
      wechatUrl: null,
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
              key={study.id}
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
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {fullCaseStudyContent[study.id] ? (
                    <button
                      onClick={() => setOpenCaseId(study.id)}
                      className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 group"
                    >
                      Read Full Case Study <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </button>
                  ) : (
                    <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 group">
                      Read Full Case Study <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </Link>
                  )}
                  {study.wechatUrl && (
                    <a
                      href={study.wechatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#07C160]/20 hover:bg-[#07C160]/30 text-[#07C160] border border-[#07C160]/30 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      WeChat Post
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Case Study Modal */}
      <AnimatePresence>
        {openCaseId && fullCaseStudyContent[openCaseId] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpenCaseId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 border border-white/10 p-8 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenCaseId(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="pr-12">
                {fullCaseStudyContent[openCaseId]}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                {cases.find(c => c.id === openCaseId)?.wechatUrl && (
                  <a
                    href={cases.find(c => c.id === openCaseId)!.wechatUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#07C160]/20 hover:bg-[#07C160]/30 text-[#07C160] border border-[#07C160]/30 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View WeChat Post
                  </a>
                )}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudies;
