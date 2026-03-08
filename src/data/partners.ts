import { assets } from '../lib/assets';

export const wechatUrls = {
  hangzhouNo2: 'https://mp.weixin.qq.com/s/hE2bai_ASl91InvxFqyvlw',
  wenling: 'https://mp.weixin.qq.com/s/H2aGYxX1h-dyorgjyC7AmQ',
} as const;

export const trustSchools = [
  {
    en: 'Hangzhou Chongwen Century City Experimental School',
    zh: '杭州市萧山崇文实验学校',
    badge: 'Official br41n.io Hosting Institution',
    initials: 'CC',
    logo: assets.partners.chongwen,
  },
  {
    en: 'Hangzhou Xuejun Wenyuan Experimental School',
    zh: '杭州学军文渊实验科学',
    initials: 'XW',
    logo: assets.partners.xuejun,
  },
  {
    en: 'Hangzhou Wahaha Bilingual School',
    zh: '杭州娃哈哈双语学校',
    initials: 'WH',
    logo: assets.partners.wahaha,
  },
  {
    en: 'Hangzhou Entel Foreign Language School',
    zh: '杭州英特外国语学校',
    initials: 'ET',
    logo: assets.partners.entel,
  },
  {
    en: 'Hangzhou No.2 High School Qianjiang',
    zh: '杭州第二中学钱江',
    initials: 'HZ',
    logo: assets.partners.hangerqiangjiang,
  },
  {
    en: 'Zhejiang Wenling High School',
    zh: '浙江省温岭中学',
    initials: 'WL',
    logo: assets.partners.wenjing,
  },
  {
    en: 'Overseas Chinese Academy of Concord Suzhou (OCAC)',
    zh: '苏州工业园区海归人才子女学校',
    initials: 'OC',
    logo: assets.partners.ocac,
  },
  {
    en: 'Britannia International School in Guangzhou (BIS)',
    zh: '广州市英伦外籍人员子女学校',
    initials: 'BI',
    logo: assets.partners.bisguangzhou,
  },
  {
    en: 'Canadian International School of Guangzhou (CIS)',
    zh: '广州市加拿大外籍人员子女学校',
    initials: 'CI',
    logo: assets.partners.cisguangzhou,
  },
  {
    en: 'Foshan No.1 High School',
    zh: '佛山市第一中学',
    initials: 'FS',
    logo: assets.partners.foshandiyi,
  },
  {
    en: 'EtonHouse International Education Group',
    zh: '新加坡伊顿国际教育集团',
    initials: 'EH',
    logo: assets.partners.etonhouse,
  },
  {
    en: 'Canada Kent School',
    zh: '加拿大肯特学校',
    initials: 'CK',
    logo: assets.partners.kentcanada,
  },
];

export const institutionalPartners = [
  { en: 'Zhejiang University Science Park', zh: '浙大科技园', logo: assets.partners.zhejiangsciencepark },
  {
    en: 'Zhejiang University of Science and Technology (ZUST)',
    zh: '浙江科技大学',
    logo: assets.partners.zust,
  },
  {
    en: 'Qizhen Brain-Computer Intelligence Industrialization Base',
    zh: '启真脑机智能产业化基地',
    logo: assets.partners.qizhenbciindustrialization,
  },
  {
    en: 'Zhejiang Science Popularization Federation (Sci2U)',
    zh: '浙江省科普联合会',
    logo: assets.partners.scien2you,
  },
  {
    en: 'China-Germany Foshan Industry Park',
    zh: '佛山中德工业服务区',
    logo: assets.partners.chinagermanyfoshanindustripark,
  },
  {
    en: 'Suzhou Innovation Center of Shanghai University',
    zh: '苏州上海大学创新中心',
    logo: assets.partners.suzhouinno,
  },
];
