import Image from 'next/image'
import RevealOnScroll from './RevealOnScroll'

export default function About() {
  return (
    <section id="about">
      <div className="divider" />
      <div className="about-grid">
        <RevealOnScroll>
          <div>
            <div className="section-label">About Mirahha</div>
            <div className="about-display">
              Built for<br /><em>Hong Kong.</em><br />Wired for<br />the world.
            </div>

            <div className="about-details">
              {[
                { key: 'Founded',      val: '2012, Central, Hong Kong' },
                { key: 'Legal Entity', val: 'Bagusaz Limited' },
                { key: 'Address',      val: 'Flat 5, 4/F Won Hing Building, 74–78 Stanley Street, Central' },
                { key: 'Markets',      val: 'HK · GBA · SEA · APAC' },
                { key: 'Team',         val: '80+ Specialists' },
              ].map((r) => (
                <div key={r.key} className="about-detail-row">
                  <span className="about-detail-key">{r.key}</span>
                  <span className="about-detail-val">{r.val}</span>
                </div>
              ))}
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
                <div className="section-label" style={{ marginBottom: '0.5rem' }}>Bagusaz Limited</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.7 }}>
                  74–78 Stanley Street, Central<br />
                  Hong Kong SAR
                </p>
              </div>
            </div>
            <div className="about-badge">
              <div className="about-badge-num">18</div>
              <div className="about-badge-txt">Industry<br />Awards</div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 3rem 7rem' }}>
        <RevealOnScroll>
          <p className="about-body">
            Mirahha was founded on a single conviction: that <strong>Hong Kong deserves advertising
            that matches its ambition</strong>. Too often, international agencies parachute generic
            playbooks into one of the world&apos;s most sophisticated consumer markets and wonder why
            the numbers disappoint.
          </p>
          <p className="about-body">
            We are a <strong>Hong Kong-native agency</strong>. We understand the bilingual media
            landscape, the compressed attention windows of Central commuters, the taste-making
            power of Causeway Bay, and the emerging pull of the Greater Bay Area. Every campaign
            we build is architected for this specific geography — then exported globally when the
            brief demands it.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
