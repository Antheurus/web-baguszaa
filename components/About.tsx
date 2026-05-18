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

            <div className="partner-badges">
              <div className="partner-badge">
                <div className="partner-badge-icon partner-badge-icon--meta">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11C2 7.4 4.1 5 7 5C8.8 5 10.2 6.2 11 7.8C11.8 6.2 13.2 5 15 5C17.9 5 20 7.4 20 11C20 14.6 17.9 17 15 17C13.2 17 11.8 15.8 11 14.2C10.2 15.8 8.8 17 7 17C4.1 17 2 14.6 2 11Z" fill="#0082FB"/>
                  </svg>
                </div>
                <div>
                  <div className="partner-badge-name">Meta</div>
                  <div className="partner-badge-title">Business Partner</div>
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
                  <div className="partner-badge-name">TikTok</div>
                  <div className="partner-badge-title">Marketing Partner</div>
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
