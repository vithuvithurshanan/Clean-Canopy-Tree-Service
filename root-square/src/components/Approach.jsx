import { PHONE } from '../constants'

const steps = [
  { num: 1, title: 'Free Estimate', text: 'we assess your trees and give you a clear, no-obligation quote' },
  { num: 2, title: 'Schedule', text: 'pick a date that works — we arrive on time, every time' },
  { num: 3, title: 'We do the work', text: 'fully equipped crew handles everything safely and efficiently' },
  { num: 4, title: 'Clean up', text: 'we haul away every branch, chip, and piece of debris — your yard is spotless' },
]

const badges = ['Licensed & Insured', 'Certified Arborists', 'Same-Day Service', 'Free Estimates']

export default function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="section approach-inner">
        <div className="approach-card">
          <h3>How a job gets done</h3>
          <p>
            No surprises, no hidden fees. Just a straightforward process from
            first call to final cleanup.
          </p>
          <ol className="approach-steps">
            {steps.map((s) => (
              <li key={s.num}>
                <span className="approach-step-num">{s.num}</span>
                <span><strong>{s.title}:</strong> {s.text}</span>
              </li>
            ))}
          </ol>
          <img src="https://images.pexels.com/photos/30387775/pexels-photo-30387775.jpeg" alt="Clean Canopy crew on a job site" className="approach-banner" width="600" height="338" />
        </div>

        <div className="approach-text">
          <h2>The expertise behind every cut</h2>
          <p>
            ISA-certified arborists, years of hands-on experience, and the right
            equipment for every job — from a single trim to full lot clearing.
          </p>
          <a className="btn btn-primary" href={`tel:${PHONE}`}>
            Get a Free Estimate
          </a>
          <div className="approach-badges">
            {badges.map((b) => (
              <span key={b} className="chip">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
