'use client'

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="contact-name">Name</label>
          <input id="contact-name" className="form-input" type="text" placeholder="Your name" />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="contact-company">Company</label>
          <input id="contact-company" className="form-input" type="text" placeholder="Company name" />
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-email">Email</label>
        <input id="contact-email" className="form-input" type="email" placeholder="you@company.com" />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-service">Service Interest</label>
        <select id="contact-service" className="form-select">
          <option value="">Select a service</option>
          <option value="performance">Performance Marketing</option>
          <option value="creative">Creative Production</option>
          <option value="strategy">Digital Strategy</option>
          <option value="brand">Brand Amplification</option>
          <option value="full">Full-Service Partnership</option>
        </select>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-brief">Brief</label>
        <textarea
          id="contact-brief"
          className="form-textarea"
          placeholder="Tell us about your brand and what you're trying to achieve..."
        />
      </div>

      <button type="submit" className="form-submit">
        Send Brief
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  )
}
