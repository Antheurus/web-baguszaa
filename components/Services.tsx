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
