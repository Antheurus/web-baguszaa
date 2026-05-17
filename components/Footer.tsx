export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="divider" />
      <div className="footer">
        <div className="footer-logo">MIRANHA</div>

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
