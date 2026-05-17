import RevealOnScroll from './RevealOnScroll'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="contact-wrapper">
      <div className="contact-inner">
        <RevealOnScroll>
          <div>
            <div className="section-label">Get In Touch</div>
            <h2 className="contact-heading">
              Let&apos;s build<br />something<br /><span className="line-pink">that lands.</span>
            </h2>
            <p className="contact-sub">
              Tell us about your brand, your market, and your goal.
              We&apos;ll get back within one business day with a frank view
              of what&apos;s possible.
            </p>

            <div className="contact-info">
              {[
                { label: 'New Business', val: <a href="mailto:hello@miranha.com">hello@miranha.com</a> },
                { label: 'Careers',      val: <a href="mailto:work@miranha.com">work@miranha.com</a> },
                { label: 'HQ Address',   val: 'Flat 5, 4/F Won Hing Building, 74–78 Stanley Street, Central, Hong Kong' },
                { label: 'Phone',        val: <a href="tel:+85221234567">+852 2123 4567</a> },
              ].map((item) => (
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
    </section>
  )
}
