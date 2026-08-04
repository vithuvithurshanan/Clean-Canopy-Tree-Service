import plantRootImg from '../assets/pricing-plant-root.avif'
import rootSquareImg from '../assets/pricing-root-square.avif'
import beyondSquareImg from '../assets/pricing-beyond-square.avif'
import { PHONE } from '../constants'

const tiers = [
  {
    img: plantRootImg,
    name: 'Basic Trim',
    tagline: 'Perfect for routine maintenance on smaller trees and shrubs.',
    price: '$149',
    unit: '/visit',
    features: [
      'Up to 3 trees (under 20 ft)',
      'Crown thinning & shaping',
      'Dead branch removal',
      'Debris hauled away',
      'On-site safety assessment',
    ],
  },
  {
    img: rootSquareImg,
    name: 'Full Service',
    tagline: 'Our most popular package — trimming, removal, and cleanup all in one.',
    price: '$349',
    unit: '/visit',
    popular: true,
    promo: 'Save 10% when you book 2+ services',
    features: [
      'Up to 5 trees (any size)',
      'Trimming, pruning & shaping',
      'One tree removal included',
      'Stump grinding (1 stump)',
      'Complete debris removal',
      'ISA-certified arborist on site',
      'Post-job yard cleanup',
    ],
  },
  {
    img: beyondSquareImg,
    name: 'Property Clear',
    tagline: 'Full lot clearing, storm cleanup, and large-scale tree work.',
    price: 'Custom',
    unit: ' quote',
    features: [
      'Unlimited trees',
      'Full lot clearing available',
      'Emergency storm response',
      'Multiple stump grindings',
      'Haul-away & chip service',
      'Crew of 4+ on site',
      'Priority scheduling',
      'Detailed written estimate',
      'Insurance documentation provided',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="section">
        <div className="pricing-head">
          <h2>Simple, honest <span className="pricing-underline">pricing</span></h2>
          <p>No hidden fees. Free estimates on every job.</p>
        </div>

        <div className="pricing-grid">
          {tiers.map((t) => (
            <div key={t.name} className={`pricing-card${t.popular ? ' pricing-card-popular' : ''}`}>
              {t.popular && <span className="pricing-badge">&#9733; Most popular</span>}
              <img src={t.img} alt="" className="pricing-card-img" />
              <h3>{t.name}</h3>
              <p className="pricing-tagline">{t.tagline}</p>
              <p className="pricing-price">{t.price}<span>{t.unit}</span></p>
              <ul className="pricing-features">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              {t.promo && <p className="pricing-promo">{t.promo}</p>}
              <div className="pricing-card-footer">
                <a className="btn btn-primary" href={`tel:${PHONE}`} style={{ width: '100%', justifyContent: 'center' }}>
                  Get a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
