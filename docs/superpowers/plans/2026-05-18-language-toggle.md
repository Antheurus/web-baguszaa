# Language Toggle (EN / ZH) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an EN ↔ Simplified Chinese language toggle to the Mirahha website navbar, translating all visible text across all 9 components.

**Architecture:** TypeScript locale files in `locales/` export a typed `Translations` object. A React context (`lib/LanguageContext.tsx`) holds `lang` state and exposes a `useLanguage()` hook. All components that render user-visible text become `'use client'` and consume `useLanguage()` directly. The toggle button lives in the Navbar.

**Tech Stack:** Next.js 14 App Router, TypeScript, React Context — zero new dependencies.

---

### Task 1: Create `locales/en.ts`

**Files:**
- Create: `locales/en.ts`

- [ ] **Step 1: Create the file with all English strings**

```typescript
// locales/en.ts

export type Translations = {
  nav: {
    services: string
    work: string
    about: string
    cta: string
  }
  hero: {
    coords: string
    tag: string
    taglineStrong: string
    taglineRest: string
    ctaPrimary: string
    ctaOutline: string
    scroll: string
  }
  services: {
    label: string
    title: string
    items: Array<{ name: string; desc: string }>
  }
  stats: {
    labels: [string, string, string, string]
  }
  portfolio: {
    label: string
    title: string
    ctaPrimary: string
    projects: Array<{ title: string; desc: string; resultLabel: string }>
  }
  about: {
    label: string
    displayLines: [string, string, string, string]
    detailKeys: {
      founded: string
      legalEntity: string
      address: string
      markets: string
      team: string
    }
    detailVals: {
      founded: string
      legalEntity: string
      address: string
      markets: string
      team: string
    }
    metaTitle: string
    metaBadge: string
    tiktokTitle: string
    tiktokBadge: string
    awardsLabel: string
    body1Strong: string
    body1Rest: string
    body2Strong: string
    body2Rest: string
    bagusazLabel: string
  }
  contact: {
    label: string
    headingLines: [string, string, string]
    sub: string
    newBusiness: string
    careers: string
    hqAddress: string
    phone: string
  }
  form: {
    name: string
    namePlaceholder: string
    company: string
    companyPlaceholder: string
    email: string
    emailPlaceholder: string
    service: string
    serviceDefault: string
    performance: string
    creative: string
    strategy: string
    brand: string
    full: string
    brief: string
    briefPlaceholder: string
    submit: string
  }
  footer: {
    rights: string
    services: string
    work: string
    about: string
    contact: string
  }
}

const en: Translations = {
  nav: {
    services: 'Services',
    work: 'Work',
    about: 'About',
    cta: 'Get Started',
  },
  hero: {
    coords: '22.3193° N, 114.1694° E — Hong Kong SAR',
    tag: 'Est. 2012 — Bagusaz Limited',
    taglineStrong: 'Amplify your signal',
    taglineRest: " in Asia's most competitive market. Performance advertising and brand creation from the heart of Hong Kong.",
    ctaPrimary: 'Start a Campaign',
    ctaOutline: 'View Our Work',
    scroll: 'Scroll',
  },
  services: {
    label: 'What We Do',
    title: 'Full-spectrum\nadvertising capability',
    items: [
      {
        name: 'Performance Marketing',
        desc: 'Data-driven campaigns across paid search, social, and programmatic that turn ad spend into measurable, compounding growth.',
      },
      {
        name: 'Creative Production',
        desc: "Campaign concepts, copywriting, motion, and production that cut through Hong Kong's visual noise and lodge in memory.",
      },
      {
        name: 'Digital Strategy',
        desc: 'Market research, audience mapping, and channel strategy built for the realities of the Greater Bay Area consumer landscape.',
      },
      {
        name: 'Brand Amplification',
        desc: "PR, influencer partnerships, and earned media that scale a brand's footprint beyond what paid can reach alone.",
      },
    ],
  },
  stats: {
    labels: ['Ad Spend Managed', 'Brands Launched', 'Industry Awards', 'In the HK Market'],
  },
  portfolio: {
    label: 'Our Work',
    title: 'Campaigns that\nmove numbers',
    ctaPrimary: 'Start Your Campaign',
    projects: [
      {
        title: 'The Feeling of Flying — Global Brand Campaign',
        desc: 'End-to-end campaign spanning OOH, digital, and CTV across 14 markets.',
        resultLabel: 'Brand Recall Lift',
      },
      {
        title: 'Every Journey Matters',
        desc: 'Integrated commuter experience campaign across all 93 stations.',
        resultLabel: 'Impressions Delivered',
      },
      {
        title: 'Lunar New Year Luxe',
        desc: 'Seasonal campaign driving 40% of annual luxury retail revenue in 6 weeks.',
        resultLabel: 'Return on Ad Spend',
      },
      {
        title: 'Digital Banking Relaunch',
        desc: 'Performance push to drive app downloads across Gen Z and Millennial segments.',
        resultLabel: 'New App Installs',
      },
      {
        title: 'Tap Into More — Lifestyle Platform',
        desc: 'Repositioning campaign transitioning from transit card to lifestyle superapp.',
        resultLabel: 'Merchant Partner Growth',
      },
      {
        title: 'Art Meets Commerce',
        desc: 'Influencer and editorial campaign fusing cultural credibility with retail performance.',
        resultLabel: 'Earned Social Reach',
      },
    ],
  },
  about: {
    label: 'About Mirahha',
    displayLines: ['Built for', 'Hong Kong.', 'Wired for', 'the world.'],
    detailKeys: {
      founded: 'Founded',
      legalEntity: 'Legal Entity',
      address: 'Address',
      markets: 'Markets',
      team: 'Team',
    },
    detailVals: {
      founded: '2012, Central, Hong Kong',
      legalEntity: 'Bagusaz Limited',
      address: 'Flat 5, 4/F Won Hing Building, 74–78 Stanley Street, Central',
      markets: 'HK · GBA · SEA · APAC',
      team: '80+ Specialists',
    },
    metaTitle: 'Meta',
    metaBadge: 'Business Partner',
    tiktokTitle: 'TikTok',
    tiktokBadge: 'Marketing Partner',
    awardsLabel: 'Industry\nAwards',
    body1Strong: 'Hong Kong deserves advertising that matches its ambition',
    body1Rest:
      ". Too often, international agencies parachute generic playbooks into one of the world's most sophisticated consumer markets and wonder why the numbers disappoint.",
    body2Strong: 'Hong Kong-native agency',
    body2Rest:
      '. We understand the bilingual media landscape, the compressed attention windows of Central commuters, the taste-making power of Causeway Bay, and the emerging pull of the Greater Bay Area. Every campaign we build is architected for this specific geography — then exported globally when the brief demands it.',
    bagusazLabel: 'Bagusaz Limited',
  },
  contact: {
    label: 'Get In Touch',
    headingLines: ["Let's build", 'something', 'that lands.'],
    sub: "Tell us about your brand, your market, and your goal. We'll get back within one business day with a frank view of what's possible.",
    newBusiness: 'New Business',
    careers: 'Careers',
    hqAddress: 'HQ Address',
    phone: 'Phone',
  },
  form: {
    name: 'Name',
    namePlaceholder: 'Your name',
    company: 'Company',
    companyPlaceholder: 'Company name',
    email: 'Email',
    emailPlaceholder: 'you@company.com',
    service: 'Service Interest',
    serviceDefault: 'Select a service',
    performance: 'Performance Marketing',
    creative: 'Creative Production',
    strategy: 'Digital Strategy',
    brand: 'Brand Amplification',
    full: 'Full-Service Partnership',
    brief: 'Brief',
    briefPlaceholder: "Tell us about your brand and what you're trying to achieve...",
    submit: 'Send Brief',
  },
  footer: {
    rights: 'All rights reserved.',
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
  },
}

export default en
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1 | head -20
```

Expected: no errors from `locales/en.ts`.

---

### Task 2: Create `locales/zh.ts`

**Files:**
- Create: `locales/zh.ts`

- [ ] **Step 1: Create the file with all Simplified Chinese strings**

```typescript
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
      },
      {
        name: '创意制作',
        desc: '广告策划、文案创作、动态设计与全流程制作，突破香港视觉噪音，深入人心，令人难忘。',
      },
      {
        name: '数字战略',
        desc: '市场调研、受众图谱及渠道策略，专为大湾区消费市场的实际环境量身打造。',
      },
      {
        name: '品牌扩张',
        desc: '公关、KOL合作及自然流量媒体，将品牌影响力延伸至付费广告触达范围之外。',
      },
    ],
  },
  stats: {
    labels: ['管理广告投放额', '品牌项目', '行业奖项', '深耕香港市场'],
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
    awardsLabel: '行业\n奖项',
    body1Strong: '香港值得拥有与其雄心相匹配的广告',
    body1Rest:
      '。太多国际代理商将千篇一律的方案空降至全球最成熟的消费市场之一，却对业绩的失望百思不得其解。',
    body2Strong: '香港本土代理商',
    body2Rest:
      '。我们深谙双语媒体生态、中环通勤族高度压缩的注意力窗口、铜锣湾的潮流引领力，以及大湾区的新兴消费吸引力。我们打造的每一个营销活动，都精准适配这一特定市场——并在客户需求延伸至全球时，随之向外输出。',
    bagusazLabel: 'Bagusaz Limited',
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
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

---

### Task 3: Create `lib/LanguageContext.tsx`

**Files:**
- Create: `lib/LanguageContext.tsx`

- [ ] **Step 1: Create the context and hook**

```typescript
// lib/LanguageContext.tsx
'use client'

import { createContext, useContext, useState } from 'react'
import en, { type Translations } from '@/locales/en'
import zh from '@/locales/zh'

type Lang = 'en' | 'zh'

const locales: Record<Lang, Translations> = { en, zh }

interface LanguageContextValue {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  t: en,
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggleLang = () => setLang((l) => (l === 'en' ? 'zh' : 'en'))
  return (
    <LanguageContext.Provider value={{ lang, t: locales[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

---

### Task 4: Wire up `LanguageProvider` in layout + add toggle CSS

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Wrap body with LanguageProvider in `app/layout.tsx`**

Replace the full file with:

```typescript
// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Mirahha — Hong Kong Advertising Agency',
  description: 'Bagusaz Limited. Performance advertising & brand amplification from the heart of Hong Kong.',
  metadataBase: new URL('https://mirahha.com'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg',          type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: 'Mirahha — Hong Kong Advertising Agency',
    description: 'Performance advertising & brand amplification from the heart of Hong Kong.',
    siteName: 'Mirahha',
    locale: 'en_HK',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Add `.nav-lang` button styles to `app/globals.css`**

Find the `.nav-cta:hover` block (ends around line 119) and insert after it:

```css
.nav-lang {
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-mid);
  transition: color 0.2s;
  padding: 0;
}

.nav-lang:hover { color: var(--text); }
```

- [ ] **Step 3: Verify build**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

---

### Task 5: Update `components/Navbar.tsx`

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] **Step 1: Replace file with translated version + toggle button**

```typescript
// components/Navbar.tsx
'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, t, toggleLang } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="Mirahha — Home">
          <svg viewBox="0 0 560 88" height="32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: 'auto' }}>
            <defs>
              <linearGradient id="nav-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1f6e" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <g transform="scale(0.5)">
              <rect x="30" y="110" width="16" height="40" rx="4" fill="url(#nav-grad)" />
              <rect x="55" y="80" width="16" height="70" rx="4" fill="url(#nav-grad)" />
              <rect x="80" y="40" width="16" height="110" rx="4" fill="url(#nav-grad)" />
              <rect x="105" y="20" width="16" height="150" rx="4" fill="url(#nav-grad)" />
              <rect x="130" y="50" width="16" height="40" rx="4" fill="url(#nav-grad)" />
              <rect x="155" y="65" width="16" height="25" rx="4" fill="url(#nav-grad)" />
              <rect x="130" y="120" width="16" height="40" rx="4" fill="url(#nav-grad)" />
              <rect x="155" y="120" width="16" height="15" rx="4" fill="url(#nav-grad)" />
              <circle cx="138" cy="70" r="5" fill="none" />
            </g>
            <text x="100" y="66" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="62" fontWeight="800" letterSpacing="-1">
              <tspan fill="#ede9de">mirahha</tspan><tspan fill="#ff1f6e">.</tspan>
            </text>
          </svg>
        </a>
        <ul className="nav-links">
          <li><a href="#services">{t.nav.services}</a></li>
          <li><a href="#work">{t.nav.work}</a></li>
          <li><a href="#about">{t.nav.about}</a></li>
          <li>
            <button className="nav-lang" onClick={toggleLang} aria-label="Toggle language">
              {lang === 'en' ? '中文' : 'EN'}
            </button>
          </li>
          <li><a href="#contact" className="nav-cta">{t.nav.cta}</a></li>
        </ul>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

---

### Task 6: Update `components/Hero.tsx`

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Replace file with translated version**

```typescript
// components/Hero.tsx
'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero-video-web.mp4" type="video/mp4" />
      </video>
      <div className="hero-bg" />

      <div className="hero-coords">{t.hero.coords}</div>

      <div className="hero-tag">{t.hero.tag}</div>

      <h1 className="hero-wordmark">
        mirahha<span>.</span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-tagline">
          <strong>{t.hero.taglineStrong}</strong>{t.hero.taglineRest}
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            {t.hero.ctaPrimary}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#work" className="btn-outline">
            {t.hero.ctaOutline}
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>{t.hero.scroll}</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

---

### Task 7: Update `components/Services.tsx`

**Files:**
- Modify: `components/Services.tsx`

- [ ] **Step 1: Replace file with translated version**

The `tags` arrays are technical labels (Google Ads, Meta, TikTok, etc.) — they stay in English in both locales and remain hardcoded in the component.

```typescript
// components/Services.tsx
'use client'

import RevealOnScroll from './RevealOnScroll'
import { useLanguage } from '@/lib/LanguageContext'

const tagsByIndex = [
  ['Google Ads', 'Meta', 'TikTok', 'Programmatic', 'Attribution'],
  ['Concepting', 'Video', 'OOH', 'Copy', 'Motion'],
  ['Research', 'Audience', 'GBA', 'Positioning', 'Roadmap'],
  ['PR', 'KOL', 'Earned Media', 'Events', 'Partnerships'],
]

const nums = ['01', '02', '03', '04']

export default function Services() {
  const { t } = useLanguage()

  return (
    <section className="section" id="services">
      <RevealOnScroll>
        <div className="section-label">{t.services.label}</div>
        <h2 className="section-title">
          {t.services.title.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h2>
      </RevealOnScroll>

      <div className="services-grid">
        {t.services.items.map((s, i) => (
          <RevealOnScroll key={nums[i]} delay={i * 80}>
            <div className="service-card">
              <div className="service-number">{nums[i]}</div>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {tagsByIndex[i].map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

---

### Task 8: Update `components/Stats.tsx`

**Files:**
- Modify: `components/Stats.tsx`

- [ ] **Step 1: Replace file with translated version**

The numeric values and their `prefix`/`suffix` stay hardcoded. Only the `label` per stat comes from the locale.

```typescript
// components/Stats.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

interface CounterProps {
  target: number
  prefix?: string
  suffix?: string
  decimals?: number
}

function Counter({ target, prefix = '', suffix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const spanRef = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = spanRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const duration = 1800
        const steps = 72
        const interval = duration / steps
        let step = 0

        const timer = setInterval(() => {
          step++
          const progress = step / steps
          const eased = 1 - Math.pow(1 - progress, 3)
          const value = eased * target

          setCount(parseFloat(value.toFixed(decimals)))

          if (step >= steps) {
            setCount(target)
            clearInterval(timer)
          }
        }, interval)
      },
      { threshold: 0.6 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, decimals])

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString()

  return <span ref={spanRef}>{prefix}{display}{suffix}</span>
}

const statValues = [
  { value: 2.4,  prefix: 'HK$', suffix: 'B+', decimals: 1 },
  { value: 340,  prefix: '',    suffix: '+',  decimals: 0 },
  { value: 18,   prefix: '',    suffix: '',   decimals: 0 },
  { value: 12,   prefix: '',    suffix: ' Yrs', decimals: 0 },
]

export default function Stats() {
  const { t } = useLanguage()

  return (
    <div className="stats-wrapper">
      <div className="stats-grid">
        {statValues.map((s, i) => (
          <div key={t.stats.labels[i]} className="stat-item">
            <div className="stat-value">
              <Counter
                target={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.decimals}
              />
            </div>
            <div className="stat-label">{t.stats.labels[i]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

---

### Task 9: Update `components/Portfolio.tsx`

**Files:**
- Modify: `components/Portfolio.tsx`

- [ ] **Step 1: Replace file with translated version**

The `slug`, `image`, `imagePosition`, `client`, and `result` fields are proper nouns / data — they stay hardcoded. Only `title`, `desc`, and `resultLabel` come from the locale (matched by index).

```typescript
// components/Portfolio.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from './RevealOnScroll'
import { useLanguage } from '@/lib/LanguageContext'

const projectData = [
  { slug: 'global-brand',      image: '/campaign-global.jpg',   imagePosition: 'center center', client: 'Cathay Pacific',  result: '+34%' },
  { slug: 'every-journey',     image: '/campaign-journey.jpg',  imagePosition: 'center 30%',    client: 'MTR Corporation', result: '2.1B' },
  { slug: 'lunar-new-year',    image: '/campaign-lunar.jpg',    imagePosition: 'center center', client: 'Lane Crawford',   result: '6.2×' },
  { slug: 'digital-banking',   image: '/campaign-banking.jpg',  imagePosition: 'center top',    client: 'HSBC HK',         result: '820K' },
  { slug: 'lifestyle-platform',image: '/campaign-lifestyle.jpg',imagePosition: 'center 40%',    client: 'Octopus Cards',   result: '+58%' },
  { slug: 'art-meets-commerce',image: '/campaign-art.jpg',      imagePosition: 'center center', client: 'K11 Musea',       result: '4.7M' },
]

export default function Portfolio() {
  const { t } = useLanguage()

  return (
    <section className="section" id="work">
      <div className="portfolio-header">
        <RevealOnScroll>
          <div>
            <div className="section-label">{t.portfolio.label}</div>
            <h2 className="section-title">
              {t.portfolio.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>
            {t.portfolio.ctaPrimary}
          </a>
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <div className="portfolio-grid">
          {projectData.map((p, i) => {
            const tx = t.portfolio.projects[i]
            return (
              <Link key={p.slug} href={`/work/${p.slug}`} className="portfolio-card">
                <Image
                  src={p.image}
                  alt={tx.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: p.imagePosition }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="card-pattern" />

                <div className="card-overlay">
                  <div className="card-client">{p.client}</div>
                  <div className="card-title">{tx.title}</div>
                </div>

                <div className="card-hover-overlay">
                  <div className="card-client">{p.client}</div>
                  <p className="card-desc">{tx.desc}</p>
                  <div className="card-result">{p.result}</div>
                  <div className="card-result-label">{tx.resultLabel}</div>
                </div>
              </Link>
            )
          })}
        </div>
      </RevealOnScroll>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

---

### Task 10: Update `components/About.tsx`

**Files:**
- Modify: `components/About.tsx`

- [ ] **Step 1: Replace file with translated version**

```typescript
// components/About.tsx
'use client'

import Image from 'next/image'
import RevealOnScroll from './RevealOnScroll'
import { useLanguage } from '@/lib/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  const detailRows = [
    { key: a.detailKeys.founded,     val: a.detailVals.founded     },
    { key: a.detailKeys.legalEntity, val: a.detailVals.legalEntity },
    { key: a.detailKeys.address,     val: a.detailVals.address     },
    { key: a.detailKeys.markets,     val: a.detailVals.markets     },
    { key: a.detailKeys.team,        val: a.detailVals.team        },
  ]

  return (
    <section id="about">
      <div className="divider" />
      <div className="about-grid">
        <RevealOnScroll>
          <div>
            <div className="section-label">{a.label}</div>
            <div className="about-display">
              {a.displayLines[0]}<br /><em>{a.displayLines[1]}</em><br />{a.displayLines[2]}<br />{a.displayLines[3]}
            </div>

            <div className="about-details">
              {detailRows.map((r) => (
                <div key={r.key} className="about-detail-row">
                  <span className="about-detail-key">{r.key}</span>
                  <span className="about-detail-val">{r.val}</span>
                </div>
              ))}
            </div>

            <div className="partner-badges">
              <div className="partner-badge">
                <div className="partner-badge-icon partner-badge-icon--meta">
                  <svg viewBox="0 0 287.56 191" height="20" xmlns="http://www.w3.org/2000/svg" style={{ width: 'auto' }}>
                    <defs>
                      <linearGradient id="meta-lg-1" x1="62.34" y1="101.45" x2="260.34" y2="91.45" gradientTransform="matrix(1, 0, 0, -1, 0, 192)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#0064e1"/>
                        <stop offset="0.4" stopColor="#0064e1"/>
                        <stop offset="0.83" stopColor="#0073ee"/>
                        <stop offset="1" stopColor="#0082fb"/>
                      </linearGradient>
                      <linearGradient id="meta-lg-2" x1="41.42" y1="53" x2="41.42" y2="126" gradientTransform="matrix(1, 0, 0, -1, 0, 192)" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#0082fb"/>
                        <stop offset="1" stopColor="#0064e0"/>
                      </linearGradient>
                    </defs>
                    <path fill="#0081fb" d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z"/>
                    <path fill="url(#meta-lg-1)" d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z"/>
                    <path fill="url(#meta-lg-2)" d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z"/>
                  </svg>
                </div>
                <div>
                  <div className="partner-badge-name">{a.metaTitle}</div>
                  <div className="partner-badge-title">{a.metaBadge}</div>
                </div>
              </div>

              <div className="partner-badge">
                <div className="partner-badge-icon partner-badge-icon--tiktok">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 4.4a4.4 4.4 0 01-3.4-3.9V0h-3.1v12.3a2.6 2.6 0 01-2.6 2.3 2.6 2.6 0 01-2.6-2.6 2.6 2.6 0 012.6-2.6c.25 0 .49.04.72.1V6.3a5.75 5.75 0 00-.72-.05A5.75 5.75 0 002.65 12a5.75 5.75 0 005.75 5.75A5.75 5.75 0 0014.15 12V6.3a7.4 7.4 0 004.35 1.4V4.55a4.4 4.4 0 01-1-.15z" fill="white"/>
                    <path d="M17.5 4.4a4.4 4.4 0 01-3.4-3.9V0h-3.1v12.3a2.6 2.6 0 01-2.6 2.3 2.6 2.6 0 01-2.6-2.6 2.6 2.6 0 012.6-2.6c.25 0 .49.04.72.1V6.3a5.75 5.75 0 00-.72-.05A5.75 5.75 0 002.65 12a5.75 5.75 0 005.75 5.75A5.75 5.75 0 0014.15 12V6.3a7.4 7.4 0 004.35 1.4V4.55a4.4 4.4 0 01-1-.15z" fill="#69C9D0" opacity="0.5" style={{mixBlendMode: 'screen'}}/>
                  </svg>
                </div>
                <div>
                  <div className="partner-badge-name">{a.tiktokTitle}</div>
                  <div className="partner-badge-title">{a.tiktokBadge}</div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <div className="about-visual">
            <div className="about-visual-box">
              <Image
                src="/hk-tower.jpg"
                alt="International Finance Centre — Hong Kong, owned by Bagusaz Limited"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="about-photo-overlay" />
              <div className="about-visual-text">
                <div className="section-label" style={{ marginBottom: '0.5rem' }}>{a.bagusazLabel}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                  74–78 Stanley Street, Central<br />
                  Hong Kong SAR
                </p>
              </div>
            </div>
            <div className="about-badge">
              <div className="about-badge-num">18</div>
              <div className="about-badge-txt">
                {a.awardsLabel.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem 7rem' }}>
        <RevealOnScroll>
          <p className="about-body">
            Mirahha was founded on a single conviction: that <strong>{a.body1Strong}</strong>{a.body1Rest}
          </p>
          <p className="about-body">
            We are a <strong>{a.body2Strong}</strong>{a.body2Rest}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

---

### Task 11: Update `components/Contact.tsx` and `components/ContactForm.tsx`

**Files:**
- Modify: `components/Contact.tsx`
- Modify: `components/ContactForm.tsx`

- [ ] **Step 1: Replace `components/Contact.tsx`**

```typescript
// components/Contact.tsx
'use client'

import RevealOnScroll from './RevealOnScroll'
import ContactForm from './ContactForm'
import { useLanguage } from '@/lib/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact

  const infoItems = [
    { label: c.newBusiness, val: <a href="mailto:hello@mirahha.com">hello@mirahha.com</a> },
    { label: c.careers,     val: <a href="mailto:work@mirahha.com">work@mirahha.com</a> },
    { label: c.hqAddress,   val: 'Flat 5, 4/F Won Hing Building, 74–78 Stanley Street, Central, Hong Kong' },
    { label: c.phone,       val: <a href="tel:+85221234567">+852 2123 4567</a> },
  ]

  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact-inner">
        <RevealOnScroll>
          <div>
            <div className="section-label">{c.label}</div>
            <h2 className="contact-heading">
              {c.headingLines[0]}<br />{c.headingLines[1]}<br /><span className="line-pink">{c.headingLines[2]}</span>
            </h2>
            <p className="contact-sub">{c.sub}</p>

            <div className="contact-info">
              {infoItems.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <span className="contact-info-label">{item.label}</span>
                  <span className="contact-info-val">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Replace `components/ContactForm.tsx`**

```typescript
// components/ContactForm.tsx
'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function ContactForm() {
  const { t } = useLanguage()
  const f = t.form

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="contact-name">{f.name}</label>
          <input id="contact-name" className="form-input" type="text" placeholder={f.namePlaceholder} />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="contact-company">{f.company}</label>
          <input id="contact-company" className="form-input" type="text" placeholder={f.companyPlaceholder} />
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-email">{f.email}</label>
        <input id="contact-email" className="form-input" type="email" placeholder={f.emailPlaceholder} />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-service">{f.service}</label>
        <select id="contact-service" className="form-select">
          <option value="">{f.serviceDefault}</option>
          <option value="performance">{f.performance}</option>
          <option value="creative">{f.creative}</option>
          <option value="strategy">{f.strategy}</option>
          <option value="brand">{f.brand}</option>
          <option value="full">{f.full}</option>
        </select>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-brief">{f.brief}</label>
        <textarea
          id="contact-brief"
          className="form-textarea"
          placeholder={f.briefPlaceholder}
        />
      </div>

      <button type="submit" className="form-submit">
        {f.submit}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1 | head -20
```

Expected: no errors.

---

### Task 12: Update `components/Footer.tsx`

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Replace file with translated version**

```typescript
// components/Footer.tsx
'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer>
      <div className="divider" />
      <div className="footer">
        <a href="/" className="footer-logo" aria-label="Mirahha — Home">
          <svg viewBox="0 0 560 88" height="28" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: 'auto' }}>
            <defs>
              <linearGradient id="footer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1f6e" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <g transform="scale(0.5)">
              <rect x="30" y="110" width="16" height="40" rx="4" fill="url(#footer-grad)" />
              <rect x="55" y="80" width="16" height="70" rx="4" fill="url(#footer-grad)" />
              <rect x="80" y="40" width="16" height="110" rx="4" fill="url(#footer-grad)" />
              <rect x="105" y="20" width="16" height="150" rx="4" fill="url(#footer-grad)" />
              <rect x="130" y="50" width="16" height="40" rx="4" fill="url(#footer-grad)" />
              <rect x="155" y="65" width="16" height="25" rx="4" fill="url(#footer-grad)" />
              <rect x="130" y="120" width="16" height="40" rx="4" fill="url(#footer-grad)" />
              <rect x="155" y="120" width="16" height="15" rx="4" fill="url(#footer-grad)" />
            </g>
            <text x="100" y="66" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="62" fontWeight="800" letterSpacing="-1">
              <tspan fill="#ede9de">mirahha</tspan><tspan fill="#ff1f6e">.</tspan>
            </text>
          </svg>
        </a>

        <div className="footer-copy">
          &copy; {year} Bagusaz Limited. {f.rights}<br />
          Flat 5, 4/F Won Hing Building, 74–78 Stanley Street, Central, Hong Kong SAR
        </div>

        <ul className="footer-links">
          <li><a href="#services">{f.services}</a></li>
          <li><a href="#work">{f.work}</a></li>
          <li><a href="#about">{f.about}</a></li>
          <li><a href="#contact">{f.contact}</a></li>
        </ul>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Final build check**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bunx tsc --noEmit 2>&1
```

Expected: zero errors.

- [ ] **Step 3: Start dev server and verify toggle works**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && bun run dev
```

Open http://localhost:3000 and:
1. Click "中文" in the navbar — all text switches to Simplified Chinese.
2. Click "EN" — all text switches back to English.
3. Scroll through all sections to confirm no text is left untranslated.

- [ ] **Step 4: Commit**

```bash
cd /Users/macbook/Documents/PROJECT_MISPAQUL_ATTORIQ/web-baguszaa && git add locales/en.ts locales/zh.ts lib/LanguageContext.tsx app/layout.tsx app/globals.css components/Navbar.tsx components/Hero.tsx components/Services.tsx components/Stats.tsx components/Portfolio.tsx components/About.tsx components/Contact.tsx components/ContactForm.tsx components/Footer.tsx && git commit -m "feat: add EN/ZH language toggle with locales/ and React context"
```
