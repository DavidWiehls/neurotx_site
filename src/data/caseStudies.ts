import { assets } from '../lib/assets';
import { wechatUrls } from './partners';

export interface CaseStudy {
  id: string;
  school: string;
  type: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  wechatUrl: string | null;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'hangzhouNo2',
    school: 'Hangzhou No.2 High School Qianjiang',
    type: 'Elite International Division',
    title: 'The Global Neuroscience Pathway',
    summary:
      "Connecting Year 12 students to the world's leading BCI researchers. Students traveled to Europe to visit official Hosting Institutes and networked with hackathon judges.",
    tags: ['International Mobility', 'Research Networking', 'Elite Admissions'],
    image: assets.partners.casestudy_hangerqiangjiang,
    wechatUrl: wechatUrls.hangzhouNo2,
  },
  {
    id: 'wenling',
    school: 'Zhejiang Wenling High School',
    type: 'Top-Tier Public High School',
    title: 'Bridging Local Excellence with Global Neuroscience',
    summary:
      'Elevating public school STEM to the global stage. A select cohort of senior students integrated into international hackathon teams, proving capability to elite domestic and foreign universities.',
    tags: ['Public School Innovation', 'Global Competition', 'Hard Tech Portfolio'],
    image: assets.partners.casestudy_wenling,
    wechatUrl: wechatUrls.wenling,
  },
  {
    id: 'entel',
    school: 'Hangzhou Entel Foreign Language School',
    type: 'Foreign Language School',
    title: 'The Sino-German Tech Bridge',
    summary:
      "Pairing linguistic excellence with 'Hard' Tech. 50+ students used the program to build portfolios for Germany's elite TU9 engineering universities (RWTH Aachen, TUM, KIT).",
    tags: ['Sino-German Bridge', 'High Volume', 'Engineering Focus'],
    image: assets.partners.casestudy_entel,
    wechatUrl: null,
  },
  {
    id: 'ocac',
    school: 'Overseas Chinese Academy of Concord Suzhou (OCAC)',
    type: 'High-Volume Middle School',
    title: 'Scaling the Turnkey ASA Across Middle Grades',
    summary:
      "OCAC established itself as a regional leader in neurotechnology by deploying the 16-week Turnkey ASA to large middle school cohorts. The program proved that BCI can scale across younger grades, driving institutional FOMO across Suzhou's top-tier international schools.",
    tags: ['Middle School ASA', 'Regional Leadership', 'Scalable Deployment'],
    image: assets.partners.casestudy_ocac,
    wechatUrl: null,
  },
];
