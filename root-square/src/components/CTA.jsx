import { PHONE } from '../constants'

export default function CTA() {
  return (
    <section className="cta">
      <div className="section cta-inner">
        <div className="cta-text">
          <h2>Ready to take care of your trees?</h2>
          <p>
            Call us today for a free, no-obligation estimate. We serve residential
            and commercial customers — same-day service available for emergencies.
          </p>
          <a className="btn btn-accent" href={`tel:${PHONE}`}>
            Call {PHONE}
          </a>
        </div>
        <img src="/work-tree.jpeg" alt="Clean Canopy Tree Service crew at work" className="cta-img" />
      </div>
    </section>
  )
}
