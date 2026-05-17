import RevealOnScroll from './RevealOnScroll'

const services = [
  {
    num: '01',
    name: 'Performance Marketing',
    desc: 'Data-driven campaigns across paid search, social, and programmatic that turn ad spend into measurable, compounding growth.',
    tags: ['Google Ads', 'Meta', 'TikTok', 'Programmatic', 'Attribution'],
  },
  {
    num: '02',
    name: 'Creative Production',
    desc: 'Campaign concepts, copywriting, motion, and production that cut through Hong Kong\'s visual noise and lodge in memory.',
    tags: ['Concepting', 'Video', 'OOH', 'Copy', 'Motion'],
  },
  {
    num: '03',
    name: 'Digital Strategy',
    desc: 'Market research, audience mapping, and channel strategy built for the realities of the Greater Bay Area consumer landscape.',
    tags: ['Research', 'Audience', 'GBA', 'Positioning', 'Roadmap'],
  },
  {
    num: '04',
    name: 'Brand Amplification',
    desc: 'PR, influencer partnerships, and earned media that scale a brand\'s footprint beyond what paid can reach alone.',
    tags: ['PR', 'KOL', 'Earned Media', 'Events', 'Partnerships'],
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <RevealOnScroll>
        <div className="section-label">What We Do</div>
        <h2 className="section-title">
          Full-spectrum<br />advertising capability
        </h2>
      </RevealOnScroll>

      <div className="services-grid">
        {services.map((s, i) => (
          <RevealOnScroll key={s.num} delay={i * 80}>
            <div className="service-card">
              <div className="service-number">{s.num}</div>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span key={t} className="service-tag">{t}</span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
