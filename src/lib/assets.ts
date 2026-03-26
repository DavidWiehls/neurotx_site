/**
 * Asset paths for media served from public/assets/.
 * Files in public/ are served at root during dev and copied to dist root in production.
 */
const R2_PUBLIC_BASE_URL = 'https://pub-742ce4a3a0dc44c29d8903927e64ad48.r2.dev';
const r2Asset = (path: string) => `${R2_PUBLIC_BASE_URL}/${path}`;

export const assets = {
  videos: {
    introvideo: r2Asset('assets/introvideo.mp4'),
    fathersonbci: r2Asset('assets/fathersonbci.mp4'),
    cyborgfoundation: r2Asset('assets/cyborgfoundation.mp4'),
    bcijourneymain: r2Asset('assets/bcijourneydemos/bcijourneymain.mp4'),
    bcijourneylisten: r2Asset('assets/bcijourneydemos/bcijourneylisten.mp4'),
    bcijourneylab: r2Asset('assets/bcijourneydemos/bcijourneylab.mp4'),
    talkmode: r2Asset('assets/bcijourneydemos/talkmode.mp4'),
  },
  partners: {
    chongwen: '/assets/partners/chongwen.jpg',
    xuejun: '/assets/partners/xuejun.jpg',
    wahaha: '/assets/partners/wahaha.jpg',
    entel: '/assets/partners/entel.jpg',
    hangerqiangjiang: '/assets/partners/hangerqiangjiang.jpg',
    wenjing: '/assets/partners/wenjing.jpg',
    ocac: '/assets/partners/ocac.jpg',
    bisguangzhou: '/assets/partners/bisguangzhou.jpg',
    cisguangzhou: '/assets/partners/cisguangzhou.jpg',
    foshandiyi: '/assets/partners/foshandiyi.jpg',
    etonhouse: '/assets/partners/etonhouse.jpg',
    kentcanada: '/assets/partners/kentcanada.jpg',
    zhejiangsciencepark: '/assets/partners/zhejiangsciencepark.jpg',
    zust: '/assets/partners/zust.jpg',
    qizhenbciindustrialization: '/assets/partners/qizhenbciindustrialization.jpg',
    scien2you: '/assets/partners/scien2you.jpg',
    chinagermanyfoshanindustripark: '/assets/partners/chinagermanyfoshanindustripark.jpg',
    suzhouinno: '/assets/partners/suzhouinno.jpg',
    casestudy_hangerqiangjiang: '/assets/partners/casestudy_hangerqiangjiang.jpg',
    casestudy_wenling: '/assets/partners/casestudy_wenling.png',
    casestudy_entel: '/assets/partners/casestudy_entel.jpg',
    casestudy_ocac: '/assets/partners/casestudy_ocac.jpg',
  },
  brand: {
    logo: '/assets/brand/Logoneurotx.png',
    wechatQr: '/assets/brand/wechat-qr.jpg',
    whatsappQr: '/assets/brand/whtasapp-qr.jpg',
  },
  company: {
    davidProfile: '/assets/company-information/David_profile.JPG',
  },
} as const;
