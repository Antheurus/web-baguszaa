import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from './RevealOnScroll'

interface Project {
  slug: string
  bg?: string
  image?: string
  imagePosition?: string
  client: string
  title: string
  desc: string
  result: string
  resultLabel: string
}

const projects: Project[] = [
  {
    slug: 'global-brand',
    image: '/campaign-global.jpg',
    imagePosition: 'center center',
    client: 'Cathay Pacific',
    title: 'The Feeling of Flying — Global Brand Campaign',
    desc: 'End-to-end campaign spanning OOH, digital, and CTV across 14 markets.',
    result: '+34%', resultLabel: 'Brand Recall Lift',
  },
  {
    slug: 'every-journey',
    image: '/campaign-journey.jpg',
    imagePosition: 'center 30%',
    client: 'MTR Corporation',
    title: 'Every Journey Matters',
    desc: 'Integrated commuter experience campaign across all 93 stations.',
    result: '2.1B', resultLabel: 'Impressions Delivered',
  },
  {
    slug: 'lunar-new-year',
    image: '/campaign-lunar.jpg',
    imagePosition: 'center center',
    client: 'Lane Crawford',
    title: 'Lunar New Year Luxe',
    desc: 'Seasonal campaign driving 40% of annual luxury retail revenue in 6 weeks.',
    result: '6.2×', resultLabel: 'Return on Ad Spend',
  },
  {
    slug: 'digital-banking',
    image: '/campaign-banking.jpg',
    imagePosition: 'center top',
    client: 'HSBC HK',
    title: 'Digital Banking Relaunch',
    desc: 'Performance push to drive app downloads across Gen Z and Millennial segments.',
    result: '820K', resultLabel: 'New App Installs',
  },
  {
    slug: 'lifestyle-platform',
    image: '/campaign-lifestyle.jpg',
    imagePosition: 'center 40%',
    client: 'Octopus Cards',
    title: 'Tap Into More — Lifestyle Platform',
    desc: 'Repositioning campaign transitioning from transit card to lifestyle superapp.',
    result: '+58%', resultLabel: 'Merchant Partner Growth',
  },
  {
    slug: 'art-meets-commerce',
    image: '/campaign-art.jpg',
    imagePosition: 'center center',
    client: 'K11 Musea',
    title: 'Art Meets Commerce',
    desc: 'Influencer and editorial campaign fusing cultural credibility with retail performance.',
    result: '4.7M', resultLabel: 'Earned Social Reach',
  },
]

export default function Portfolio() {
  return (
    <section className="section" id="work">
      <div className="portfolio-header">
        <RevealOnScroll>
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="section-title">
              Campaigns that<br />move numbers
            </h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Start Your Campaign
          </a>
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <div className="portfolio-grid">
          {projects.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="portfolio-card">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: p.imagePosition ?? 'center' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className={`card-bg ${p.bg}`} />
              )}
              <div className="card-pattern" />

              <div className="card-overlay">
                <div className="card-client">{p.client}</div>
                <div className="card-title">{p.title}</div>
              </div>

              <div className="card-hover-overlay">
                <div className="card-client">{p.client}</div>
                <p className="card-desc">{p.desc}</p>
                <div className="card-result">{p.result}</div>
                <div className="card-result-label">{p.resultLabel}</div>
              </div>
            </Link>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}
