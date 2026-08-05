import { PHONE, EMAIL } from '../constants'

export default function Hero() {
  return (
    <section className="hero hero-fullscreen" id="hero">
      <div className="hero-bg" style={{ backgroundImage: 'url(/opt_home.webp)' }} aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-fullscreen-inner">
        <span className="eyebrow eyebrow-light">Licensed &amp; Insured · Free Estimates</span>
        <h1 className="hero-fullscreen-title">Your trees deserve expert care</h1>
        <p className="hero-fullscreen-sub">
          Professional tree trimming, removal, and stump grinding for
          residential and commercial properties. Safe, clean, and done right
          the first time.
        </p>
        <div className="hero-fullscreen-actions">
          <a className="btn btn-accent" href={`tel:${PHONE}`}>
            Get a Free Quote
          </a>
          <a className="btn btn-white" href={`mailto:${EMAIL}`}>
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}
