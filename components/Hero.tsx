export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-coords">
        22.3193° N, 114.1694° E — Hong Kong SAR
      </div>

      <div className="hero-tag">Est. 2012 — Bagusaz Limited</div>

      <h1 className="hero-wordmark">
        MIR<span>A</span>NHA
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
