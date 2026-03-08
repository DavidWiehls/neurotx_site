/**
 * Asset paths for media served from public/assets/.
 * Files in public/ are served at root during dev and copied to dist root in production.
 */
export const assets = {
  videos: {
    introvideo: '/assets/introvideo.mp4',
    fathersonbci: '/assets/fathersonbci.mp4',
    cyborgfoundation: '/assets/cyborgfoundation.mp4',
    bcijourneymain: '/assets/bcijourneydemos/bcijourneymain.mp4',
    bcijourneylisten: '/assets/bcijourneydemos/bcijourneylisten.mp4',
    bcijourneylab: '/assets/bcijourneydemos/bcijourneylab.mp4',
    talkmode: '/assets/bcijourneydemos/talkmode.mp4',
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
    wechatQr: '/assets/brand/wechat-qr.jpg',
    whatsappQr: '/assets/brand/whtasapp-qr.jpg',
  },
  company: {
    davidProfile: '/assets/company-information/David_profile.JPG',
  },
} as const;
