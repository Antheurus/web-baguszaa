'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo" aria-label="Miranha — Home">
          <svg viewBox="0 0 380 88" height="32" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: 'auto' }}>
            <defs>
              <linearGradient id="nav-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1f6e" />
                <stop offset="100%" stopColor="#00d4ff" />
              </linearGradient>
            </defs>
            <g transform="scale(0.5)">
              <rect x="30" y="110" width="16" height="40" rx="4" fill="url(#nav-grad)" />
              <rect x="55" y="80" width="16" height="70" rx="4" fill="url(#nav-grad)" />
              <rect x="80" y="40" width="16" height="110" rx="4" fill="url(#nav-grad)" />
              <rect x="105" y="20" width="16" height="150" rx="4" fill="url(#nav-grad)" />
              <rect x="130" y="50" width="16" height="40" rx="4" fill="url(#nav-grad)" />
              <rect x="155" y="65" width="16" height="25" rx="4" fill="url(#nav-grad)" />
              <rect x="130" y="120" width="16" height="40" rx="4" fill="url(#nav-grad)" />
              <rect x="155" y="120" width="16" height="15" rx="4" fill="url(#nav-grad)" />
              <circle cx="138" cy="70" r="5" fill="none" />
            </g>
            <text x="100" y="66" fontFamily="'Syne', sans-serif" fontSize="62" fontWeight="800" letterSpacing="-1">
              <tspan fill="#ede9de">miranha</tspan><tspan fill="#ff1f6e">.</tspan>
            </text>
          </svg>
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="nav-cta">Get Started</a></li>
        </ul>
      </div>
    </nav>
  )
}
