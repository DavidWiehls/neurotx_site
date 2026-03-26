import { assets } from '../lib/assets';
import { wechatUrls } from './partners';

export interface CaseStudyMeta {
  id: string;
  image: string;
  wechatUrl: string | null;
}

export const caseStudyMeta: CaseStudyMeta[] = [
  { id: 'hangzhouNo2', image: assets.partners.casestudy_hangerqiangjiang, wechatUrl: wechatUrls.hangzhouNo2 },
  { id: 'wenling', image: assets.partners.casestudy_wenling, wechatUrl: wechatUrls.wenling },
  { id: 'entel', image: assets.partners.casestudy_entel, wechatUrl: null },
  { id: 'ocac', image: assets.partners.casestudy_ocac, wechatUrl: null },
];
