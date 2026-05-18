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

              <div className="partner-badge">
                <div className="partner-badge-icon partner-badge-icon--google">
                  <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
                    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
                    <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
                    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
                  </svg>
                </div>
                <div>
                  <div className="partner-badge-name">{a.googleTitle}</div>
                  <div className="partner-badge-title">{a.googleBadge}</div>
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
                  {a.overlayAddressLine1}<br />
                  {a.overlayAddressLine2}
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
            {a.body1Lead}<strong>{a.body1Strong}</strong>{a.body1Rest}
          </p>
          <p className="about-body">
            {a.body2Lead}<strong>{a.body2Strong}</strong>{a.body2Rest}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
