import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    // Load the KD Lead form embed script once
    if (!document.getElementById('kdlead-script')) {
      const script = document.createElement('script')
      script.id = 'kdlead-script'
      script.src = 'https://link.kdlead.com/js/form_embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="contact" id="contact">
      <div className="section contact-inner">
        <div className="contact-image-wrap">
          <img src="/contact-form.jpeg" alt="Clean Canopy Tree Service team at work" className="contact-image" />
          <div className="contact-image-badge">
            <span className="contact-badge-icon">🌲</span>
            <div>
              <p className="contact-badge-title">Free Estimates</p>
              <p className="contact-badge-sub">No obligation, ever</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap">
          <span className="eyebrow">Get in Touch</span>
          <h2>Request a free quote</h2>
          <p className="contact-lead">
            Fill out the form and we&rsquo;ll get back to you within a few hours.
            Same-day service available for emergencies.
          </p>
          <div className="contact-form-frame">
            <iframe
              src="https://link.kdlead.com/widget/form/IKGTvR9ZcYvlniQ2Qrtn"
              style={{ width: '100%', height: '875px', border: 'none', borderRadius: '8px' }}
              id="inline-IKGTvR9ZcYvlniQ2Qrtn"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Clean Canopy Tree Service"
              data-height="875"
              data-layout-iframe-id="inline-IKGTvR9ZcYvlniQ2Qrtn"
              data-form-id="IKGTvR9ZcYvlniQ2Qrtn"
              title="Clean Canopy Tree Service"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
