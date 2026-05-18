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
