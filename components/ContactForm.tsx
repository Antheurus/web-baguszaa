// components/ContactForm.tsx
'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function ContactForm() {
  const { t } = useLanguage()
  const f = t.form

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="contact-name">{f.name}</label>
          <input id="contact-name" className="form-input" type="text" placeholder={f.namePlaceholder} />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="contact-company">{f.company}</label>
          <input id="contact-company" className="form-input" type="text" placeholder={f.companyPlaceholder} />
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-email">{f.email}</label>
        <input id="contact-email" className="form-input" type="email" placeholder={f.emailPlaceholder} />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-service">{f.service}</label>
        <select id="contact-service" className="form-select">
          <option value="">{f.serviceDefault}</option>
          <option value="performance">{f.performance}</option>
          <option value="creative">{f.creative}</option>
          <option value="strategy">{f.strategy}</option>
          <option value="brand">{f.brand}</option>
          <option value="full">{f.full}</option>
        </select>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-brief">{f.brief}</label>
        <textarea
          id="contact-brief"
          className="form-textarea"
          placeholder={f.briefPlaceholder}
        />
      </div>

      <button type="submit" className="form-submit">
        {f.submit}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  )
}
