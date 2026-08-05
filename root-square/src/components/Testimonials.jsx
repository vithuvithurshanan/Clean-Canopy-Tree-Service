import { PHONE, EMAIL } from '../constants'

const reviews = [
  { img: '/work-1-opt2.webp', name: 'Sarah T.', text: 'They removed a massive oak that was leaning over our roof. Professional, fast, and the yard was spotless after.' },
  { img: '/work-2-opt2.webp', name: 'James R.', text: "Best tree service I've ever used. Fair price, showed up on time, and cleaned up perfectly." },
  { img: '/work-3-opt2.webp', name: 'Linda M.', text: 'Trimmed all our trees and ground out three stumps in one afternoon. Amazing work!' },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="reviews">
      <div
        className="testimonials-bg"
        style={{ backgroundImage: 'url(/opt_voices-bg.webp)' }}
        aria-hidden="true"
      />

      <div className="section-narrow testimonials-inner">
        <h2>
          <span className="testimonials-strong">Neighbors</span> who trust<br />
          <span className="testimonials-strong">Clean Canopy</span>
        </h2>
        <p>
          Hundreds of local homeowners and businesses count on us every year
          for safe, professional tree care.
        </p>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.name} className="review-card">
              <img src={r.img} alt={`Job completed for ${r.name}`} className="review-img" width="400" height="300" />
              <p className="review-stars" aria-label="5 stars">★★★★★</p>
              <p className="review-text">&ldquo;{r.text}&rdquo;</p>
              <p className="review-name">— {r.name}</p>
            </div>
          ))}
        </div>

        <div className="testimonials-actions">
          <a className="btn btn-white" href={`tel:${PHONE}`}>Call Now</a>
          <a className="btn btn-outline testimonials-email" href={`mailto:${EMAIL}`}>Email Us</a>
        </div>
      </div>
    </section>
  )
}
