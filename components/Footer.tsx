export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="divider" />
      <div className="footer">
        <a href="/" className="footer-logo" aria-label="Mirahha — Home">
          <svg viewBox="0 0 560 88" height="28" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: 'auto' }}>
            <defs>
              <linearGradient id="footer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1f6e" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <g transform="scale(0.5)">
              <rect x="30" y="110" width="16" height="40" rx="4" fill="url(#footer-grad)" />
              <rect x="55" y="80" width="16" height="70" rx="4" fill="url(#footer-grad)" />
              <rect x="80" y="40" width="16" height="110" rx="4" fill="url(#footer-grad)" />
              <rect x="105" y="20" width="16" height="150" rx="4" fill="url(#footer-grad)" />
              <rect x="130" y="50" width="16" height="40" rx="4" fill="url(#footer-grad)" />
              <rect x="155" y="65" width="16" height="25" rx="4" fill="url(#footer-grad)" />
              <rect x="130" y="120" width="16" height="40" rx="4" fill="url(#footer-grad)" />
              <rect x="155" y="120" width="16" height="15" rx="4" fill="url(#footer-grad)" />
            </g>
            <text x="100" y="66" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="62" fontWeight="800" letterSpacing="-1">
              <tspan fill="#ede9de">mirahha</tspan><tspan fill="#ff1f6e">.</tspan>
            </text>
          </svg>
        </a>

        <div className="footer-copy">
          &copy; {year} Bagusaz Limited. All rights reserved.<br />
          Flat 5, 4/F Won Hing Building, 74–78 Stanley Street, Central, Hong Kong SAR
        </div>

        <ul className="footer-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}
