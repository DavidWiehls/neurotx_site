import { assets } from '../lib/assets';

export const wechatUrls = {
  hangzhouNo2: 'https://mp.weixin.qq.com/s/hE2bai_ASl91InvxFqyvlw',
  wenling: 'https://mp.weixin.qq.com/s/H2aGYxX1h-dyorgjyC7AmQ',
} as const;

export type LocaleKey = 'en' | 'zh' | 'ja' | 'de';

export interface TrustSchool {
  en: string;
  zh: string;
  ja: string;
  de: string;
  badge?: string;
  initials: string;
  logo: string;
}

export interface InstitutionalPartner {
  en: string;
  zh: string;
  ja: string;
  de: string;
  logo: string;
}

export const trustSchools: TrustSchool[] = [
  { en: 'Hangzhou Chongwen Century City Experimental School', zh: '杭州市萧山崇文实验学校', ja: '杭州崇文センチュリーシティ実験学校', de: 'Hangzhou Chongwen Century City Experimental School', badge: 'Official br41n.io Hosting Institution', initials: 'CC', logo: assets.partners.chongwen },
  { en: 'Hangzhou Xuejun Wenyuan Experimental School', zh: '杭州学军文渊实验科学', ja: '杭州学軍文淵実験学校', de: 'Hangzhou Xuejun Wenyuan Experimental School', initials: 'XW', logo: assets.partners.xuejun },
  { en: 'Hangzhou Wahaha Bilingual School', zh: '杭州娃哈哈双语学校', ja: '杭州娃哈哈バイリンガルスクール', de: 'Hangzhou Wahaha Bilingual School', initials: 'WH', logo: assets.partners.wahaha },
  { en: 'Hangzhou Entel Foreign Language School', zh: '杭州英特外国语学校', ja: '杭州英特外国語学校', de: 'Hangzhou Entel Foreign Language School', initials: 'ET', logo: assets.partners.entel },
  { en: 'Hangzhou No.2 High School Qianjiang', zh: '杭州第二中学钱江', ja: '杭州第二中学銭江校', de: 'Hangzhou No.2 High School Qianjiang', initials: 'HZ', logo: assets.partners.hangerqiangjiang },
  { en: 'Zhejiang Wenling High School', zh: '浙江省温岭中学', ja: '浙江省温嶺中学', de: 'Zhejiang Wenling High School', initials: 'WL', logo: assets.partners.wenjing },
  { en: 'Overseas Chinese Academy of Concord Suzhou (OCAC)', zh: '苏州工业园区海归人才子女学校', ja: '蘇州工業園区帰国子女アカデミー（OCAC）', de: 'Overseas Chinese Academy of Concord Suzhou (OCAC)', initials: 'OC', logo: assets.partners.ocac },
  { en: 'Britannia International School in Guangzhou (BIS)', zh: '广州市英伦外籍人员子女学校', ja: '広州ブリタニア・インターナショナルスクール（BIS）', de: 'Britannia International School in Guangzhou (BIS)', initials: 'BI', logo: assets.partners.bisguangzhou },
  { en: 'Canadian International School of Guangzhou (CIS)', zh: '广州市加拿大外籍人员子女学校', ja: '広州カナダ・インターナショナルスクール（CIS）', de: 'Canadian International School of Guangzhou (CIS)', initials: 'CI', logo: assets.partners.cisguangzhou },
  { en: 'Foshan No.1 High School', zh: '佛山市第一中学', ja: '仏山市第一中学', de: 'Foshan No.1 High School', initials: 'FS', logo: assets.partners.foshandiyi },
  { en: 'EtonHouse International Education Group', zh: '新加坡伊顿国际教育集团', ja: 'シンガポール・イートンハウス国際教育グループ', de: 'EtonHouse International Education Group', initials: 'EH', logo: assets.partners.etonhouse },
  { en: 'Canada Kent School', zh: '加拿大肯特学校', ja: 'カナダ・ケント・スクール', de: 'Canada Kent School', initials: 'CK', logo: assets.partners.kentcanada },
];

export const institutionalPartners: InstitutionalPartner[] = [
  { en: 'Zhejiang University Science Park', zh: '浙大科技园', ja: '浙江大学サイエンスパーク', de: 'Zhejiang University Science Park', logo: assets.partners.zhejiangsciencepark },
  { en: 'Zhejiang University of Science and Technology (ZUST)', zh: '浙江科技大学', ja: '浙江科学技術大学（ZUST）', de: 'Zhejiang University of Science and Technology (ZUST)', logo: assets.partners.zust },
  { en: 'Qizhen Brain-Computer Intelligence Industrialization Base', zh: '启真脑机智能产业化基地', ja: '啓真ブレイン・コンピュータ知能産業化基地', de: 'Qizhen Brain-Computer Intelligence Industrialization Base', logo: assets.partners.qizhenbciindustrialization },
  { en: 'Zhejiang Science Popularization Federation (Sci2U)', zh: '浙江省科普联合会', ja: '浙江省科学普及連合会（Sci2U）', de: 'Zhejiang Science Popularization Federation (Sci2U)', logo: assets.partners.scien2you },
  { en: 'China-Germany Foshan Industry Park', zh: '佛山中德工业服务区', ja: '佛山中独工業サービス区', de: 'China-Deutschland Foshan Industriegebiet', logo: assets.partners.chinagermanyfoshanindustripark },
  { en: 'Suzhou Innovation Center of Shanghai University', zh: '苏州上海大学创新中心', ja: '蘇州上海大学イノベーションセンター', de: 'Suzhou Innovation Center der Shanghai University', logo: assets.partners.suzhouinno },
];
