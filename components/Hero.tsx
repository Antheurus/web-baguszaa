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
        preload="none"
        poster="/hk-tower.jpg"
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
