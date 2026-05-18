// locales/zh.ts
import type { Translations } from './en'

const zh: Translations = {
  nav: {
    services: '服务',
    work: '作品',
    about: '关于',
    cta: '立即开始',
  },
  hero: {
    coords: '22.3193° N, 114.1694° E — 香港特别行政区',
    tag: '成立于2012年 — Bagusaz Limited',
    taglineStrong: '放大您的声量',
    taglineRest: '，在亚洲竞争最激烈的市场中脱颖而出。效果广告与品牌创建，源自香港核心。',
    ctaPrimary: '开启广告投放',
    ctaOutline: '查看我们的案例',
    scroll: '滑动',
  },
  services: {
    label: '我们的服务',
    title: '全方位\n广告能力',
    items: [
      {
        name: '效果营销',
        desc: '跨付费搜索、社交媒体及程序化广告的数据驱动型营销活动，将广告投入转化为可量化的持续增长。',
        tags: ['谷歌广告', 'Meta', 'TikTok', '程序化', '归因'],
      },
      {
        name: '创意制作',
        desc: '广告策划、文案创作、动态设计与全流程制作，突破香港视觉噪音，深入人心，令人难忘。',
        tags: ['概念策划', '视频', '户外广告', '文案', '动态'],
      },
      {
        name: '数字战略',
        desc: '市场调研、受众图谱及渠道策略，专为大湾区消费市场的实际环境量身打造。',
        tags: ['调研', '受众', '大湾区', '定位', '路线图'],
      },
      {
        name: '品牌扩张',
        desc: '公关、KOL合作及自然流量媒体，将品牌影响力延伸至付费广告触达范围之外。',
        tags: ['公关', 'KOL', '自然流量', '活动', '合作'],
      },
    ],
  },
  stats: {
    labels: ['管理广告投放额', '品牌项目', '行业奖项', '深耕香港市场'],
    yearsSuffix: '年',
  },
  portfolio: {
    label: '我们的案例',
    title: '驱动数据增长\n的营销战役',
    ctaPrimary: '开启您的广告战役',
    projects: [
      {
        title: '飞翔的感觉 — 全球品牌战役',
        desc: '跨OOH、数字及CTV的端到端营销活动，覆盖14个市场。',
        resultLabel: '品牌记忆度提升',
      },
      {
        title: '每段旅程都值得',
        desc: '覆盖全线93个车站的整合通勤体验营销活动。',
        resultLabel: '曝光量',
      },
      {
        title: '农历新年奢享',
        desc: '季节性活动，在6周内带动全年奢侈品零售收入的40%。',
        resultLabel: '广告投资回报',
      },
      {
        title: '数字银行重新出发',
        desc: '以效果为导向，推动Gen Z及千禧一代应用下载量增长。',
        resultLabel: '新增应用安装量',
      },
      {
        title: '解锁更多 — 生活方式平台',
        desc: '品牌重塑战役，助力其从交通卡转型为生活方式超级应用。',
        resultLabel: '商户合作方增长',
      },
      {
        title: '艺术与商业的融合',
        desc: 'KOL与编辑内容营销活动，将文化影响力与零售效果融为一体。',
        resultLabel: '自然社交媒体触达',
      },
    ],
  },
  about: {
    label: '关于 Mirahha',
    displayLines: ['根植', '香港。', '连接', '世界。'],
    detailKeys: {
      founded: '成立时间',
      legalEntity: '法律实体',
      address: '地址',
      markets: '市场覆盖',
      team: '团队规模',
    },
    detailVals: {
      founded: '2012年，香港中环',
      legalEntity: 'Bagusaz Limited',
      address: '香港中环士丹利街74-78号宏兴大厦4楼5室',
      markets: 'HK · GBA · SEA · APAC',
      team: '80+名专业人员',
    },
    metaTitle: 'Meta',
    metaBadge: '商业合作伙伴',
    tiktokTitle: 'TikTok',
    tiktokBadge: '营销合作伙伴',
    googleTitle: 'Google',
    googleBadge: 'Ads合作伙伴',
    awardsLabel: '行业\n奖项',
    body1Lead: 'Mirahha 自创立起便抱持一个信念：',
    body1Strong: '香港值得拥有与其雄心相匹配的广告',
    body1Rest:
      '。太多国际代理商将千篇一律的方案空降至全球最成熟的消费市场之一，却对业绩的失望百思不得其解。',
    body2Lead: '我们是',
    body2Strong: '香港本土代理商',
    body2Rest:
      '。我们深谙双语媒体生态、中环通勤族高度压缩的注意力窗口、铜锣湾的潮流引领力，以及大湾区的新兴消费吸引力。我们打造的每一个营销活动，都精准适配这一特定市场——并在客户需求延伸至全球时，随之向外输出。',
    bagusazLabel: 'Bagusaz Limited',
    overlayAddressLine1: '香港中环士丹利街74–78号',
    overlayAddressLine2: '香港特别行政区',
  },
  contact: {
    label: '联系我们',
    headingLines: ['打造真正', '落地的', '营销战役。'],
    sub: '告诉我们您的品牌、目标市场和营销目标。我们将在一个工作日内，坦诚地与您分享可能性。',
    newBusiness: '新业务咨询',
    careers: '加入我们',
    hqAddress: '总部地址',
    phone: '电话',
  },
  form: {
    name: '姓名',
    namePlaceholder: '您的姓名',
    company: '公司',
    companyPlaceholder: '公司名称',
    email: '邮箱',
    emailPlaceholder: 'you@company.com',
    service: '服务意向',
    serviceDefault: '请选择服务',
    performance: '效果营销',
    creative: '创意制作',
    strategy: '数字战略',
    brand: '品牌扩张',
    full: '全案合作',
    brief: '项目简介',
    briefPlaceholder: '请介绍您的品牌及营销目标……',
    submit: '发送需求',
  },
  footer: {
    rights: '保留所有权利。',
    services: '服务',
    work: '作品',
    about: '关于',
    contact: '联系',
  },
}

export default zh
