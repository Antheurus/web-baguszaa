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
