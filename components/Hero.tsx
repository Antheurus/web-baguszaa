export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero-video-web.mp4" type="video/mp4" />
      </video>
      <div className="hero-bg" />

      <div className="hero-coords">
        22.3193° N, 114.1694° E — Hong Kong SAR
      </div>

      <div className="hero-tag">Est. 2012 — Bagusaz Limited</div>

      <h1 className="hero-wordmark">
        <svg className="hero-wordmark-icon" viewBox="20 15 155 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="hero-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff1f6e" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>
          <rect x="30" y="110" width="16" height="40" rx="4" fill="url(#hero-icon-grad)" />
          <rect x="55" y="80" width="16" height="70" rx="4" fill="url(#hero-icon-grad)" />
          <rect x="80" y="40" width="16" height="110" rx="4" fill="url(#hero-icon-grad)" />
          <rect x="105" y="20" width="16" height="150" rx="4" fill="url(#hero-icon-grad)" />
          <rect x="130" y="50" width="16" height="40" rx="4" fill="url(#hero-icon-grad)" />
          <rect x="155" y="65" width="16" height="25" rx="4" fill="url(#hero-icon-grad)" />
          <rect x="130" y="120" width="16" height="40" rx="4" fill="url(#hero-icon-grad)" />
          <rect x="155" y="120" width="16" height="15" rx="4" fill="url(#hero-icon-grad)" />
        </svg>
        mirahha<span>.</span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-tagline">
          <strong>Amplify your signal</strong> in Asia's most competitive
          market. Performance advertising and brand creation from the
          heart of Hong Kong.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Start a Campaign
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#work" className="btn-outline">
            View Our Work
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
