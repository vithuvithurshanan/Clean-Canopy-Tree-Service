import { EMAIL, INSTAGRAM_URL, PHONE, ADDRESS } from '../constants'

const links = [
    { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#approach' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer({ onTerms, onPrivacy }) {
  return (
    <footer className="footer">
      <div className="section footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="nav-logo footer-logo">
              <img src="/logo-96.webp" alt="" width="28" height="28" style={{ borderRadius: '6px', objectFit: 'cover' }} />
              <span>Clean Canopy Tree Service</span>
            </a>
            <p className="footer-address">{ADDRESS}</p>
            <a href={`tel:${PHONE}`} className="footer-address">{PHONE}</a>
            <a href={`mailto:${EMAIL}`} className="footer-address">{EMAIL}</a>
          </div>

          <nav className="footer-links" aria-label="Footer">
            {links.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div className="footer-actions">
            <a className="btn btn-white" href={`tel:${PHONE}`}>Call Now</a>
            <a className="btn btn-white" href={`mailto:${EMAIL}`}>Email Us</a>
            <a
              className="footer-social"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Clean Canopy Tree Service on Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Clean Canopy Tree Service. All rights reserved.</p>
          <div className="footer-legal">
            <button type="button" className="footer-cookie-btn" onClick={onPrivacy}>
              Privacy Policy
            </button>
            <button type="button" className="footer-cookie-btn" onClick={onTerms}>
              Terms &amp; Conditions
            </button>
            <button
              type="button"
              className="footer-cookie-btn"
              onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
