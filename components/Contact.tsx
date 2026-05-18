// components/Contact.tsx
'use client'

import RevealOnScroll from './RevealOnScroll'
import ContactForm from './ContactForm'
import { useLanguage } from '@/lib/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const c = t.contact

  const infoItems = [
    { label: c.newBusiness, val: <a href="mailto:hello@mirahha.com">hello@mirahha.com</a> },
    { label: c.careers,     val: <a href="mailto:work@mirahha.com">work@mirahha.com</a> },
    { label: c.hqAddress,   val: 'Flat 5, 4/F Won Hing Building, 74–78 Stanley Street, Central, Hong Kong' },
    { label: c.phone,       val: <a href="tel:+85221234567">+852 2123 4567</a> },
  ]

  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact-inner">
        <RevealOnScroll>
          <div>
            <div className="section-label">{c.label}</div>
            <h2 className="contact-heading">
              {c.headingLines[0]}<br />{c.headingLines[1]}<br /><span className="line-pink">{c.headingLines[2]}</span>
            </h2>
            <p className="contact-sub">{c.sub}</p>

            <div className="contact-info">
              {infoItems.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <span className="contact-info-label">{item.label}</span>
                  <span className="contact-info-val">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <ContactForm />
        </RevealOnScroll>
      </div>

      <div className="contact-map">
        <iframe
          src="https://maps.google.com/maps?q=22.2835252,114.1545226&z=17&output=embed&hl=en"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mirahha Agency HK"
        />
      </div>
    </section>
  )
}
