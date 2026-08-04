import { PHONE } from '../constants'

const services = [
  {
    img: '/svc-trimming.webp',
    title: 'Tree Trimming & Pruning',
    desc: 'Regular trimming keeps your trees healthy, safe, and looking their best. We shape, thin, and lift canopies to improve light and airflow.',
    bullets: ['Crown thinning & shaping', 'Dead branch removal', 'Canopy lifting', 'Vista pruning'],
  },
  {
    img: '/svc-removal.webp',
    title: 'Tree Removal',
    desc: 'Dead, diseased, or dangerously positioned trees removed safely and efficiently — from small yard trees to large hardwoods.',
    bullets: ['Full tree takedown', 'Sectional felling', 'Crane-assisted removal', 'Root ball extraction'],
  },
  {
    img: '/svc-stump.webp',
    title: 'Stump Grinding',
    desc: 'We grind stumps below ground level so you can replant, lay turf, or pave — leaving your yard clean and flat.',
    bullets: ['Grinding below grade', 'Debris & chip cleanup', 'Multiple stumps', 'Same-day available'],
  },
  {
    img: '/svc-lot.webp',
    title: 'Lot Clearing',
    desc: 'Full land clearing for new construction, landscaping projects, or overgrown properties. We handle trees, brush, and stumps in one visit.',
    bullets: ['Residential & commercial', 'Brush & underbrush', 'Haul-away included', 'Large acreage'],
  },
  {
    img: '/svc-storm.webp',
    title: 'Storm Damage Cleanup',
    desc: 'Fast response after storms. We remove fallen trees, clear debris, and make your property safe — available for emergency call-outs.',
    bullets: ['24/7 emergency response', 'Fallen tree removal', 'Hazard limb clearing', 'Insurance documentation'],
  },
  {
    img: '/about-climber.webp',
    title: 'Tree Health & Cabling',
    desc: 'Proactive care to extend the life of your valuable trees. We assess, treat, and structurally support trees at risk of failure.',
    bullets: ['ISA arborist assessment', 'Structural cabling', 'Disease & pest treatment', 'Fertilisation programs'],
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section">
        <div className="services-head">
          <span className="eyebrow">What We Do</span>
          <h2>Professional tree care, start to finish</h2>
          <p>Every service is performed by ISA-certified arborists with the right equipment for the job.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-card-img-wrap">
                <img src={s.img} alt={s.title} className="service-card-img" />
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.desc}</p>
                <ul className="service-card-list">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a className="btn btn-primary service-card-btn" href={`tel:${PHONE}`}>
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
