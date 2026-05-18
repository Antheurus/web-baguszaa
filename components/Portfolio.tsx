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
