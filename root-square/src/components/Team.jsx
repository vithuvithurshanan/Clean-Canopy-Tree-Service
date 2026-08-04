import { useState } from 'react'
import { PHONE } from '../constants'

const members = [
  {
    tab: 'Arborist',
    img: '/about-climber.webp',
    name: 'Marcus Webb',
    role: 'Lead Arborist · ISA Certified',
    bio: 'Over 15 years of professional tree care experience. ISA Certified Arborist and TCIA member. Specialises in hazard assessment, large tree removal, and storm damage response.',
    stats: [
      { label: 'Experience', value: '15 yrs' },
      { label: 'Certified', value: 'ISA' },
      { label: 'Jobs Done', value: '2,000+' },
    ],
  },
  {
    tab: 'Climber',
    img: '/svc-trimming.webp',
    name: 'Jake Torres',
    role: 'Lead Climber · TCIA Member',
    bio: 'Certified tree climber with 10 years of high-canopy work. Expert in rigging, sectional dismantling, and working in tight residential spaces without damage to property.',
    stats: [
      { label: 'Experience', value: '10 yrs' },
      { label: 'Certified', value: 'TCIA' },
      { label: 'Trees Climbed', value: '5,000+' },
    ],
  },
  {
    tab: 'Crew Lead',
    img: '/work-1.webp',
    name: 'Darnell King',
    role: 'Crew Lead · Ground Operations',
    bio: 'Coordinates ground crew and equipment on every job. 8 years of hands-on tree service experience, specialising in lot clearing, stump grinding, and storm cleanup logistics.',
    stats: [
      { label: 'Experience', value: '8 yrs' },
      { label: 'Specialty', value: 'Clearing' },
      { label: 'Team Size', value: '6 crew' },
    ],
  },
]

export default function Team() {
  const [active, setActive] = useState(0)
  const member = members[active]

  return (
    <section className="team" id="team">
      <div className="section team-inner">
        <div className="team-text">
          <h2>Meet the crew behind the work</h2>
          <p>
            Our arborists are ISA-certified, fully insured, and trained to handle
            every tree job safely — no matter the size or complexity.
          </p>
          <a className="btn btn-primary" href={`tel:${PHONE}`}>
            Talk to Our Team
          </a>
        </div>

        <div className="team-card-wrap">
          <div className="team-tabs">
            {members.map((m, i) => (
              <button
                key={m.tab}
                type="button"
                className={`chip${active === i ? ' chip-active' : ''}`}
                onClick={() => setActive(i)}
              >
                {m.tab}
              </button>
            ))}
          </div>

          <div className="team-card">
            <div className="team-photo">
              <img src={member.img} alt={member.name} />
            </div>

            <div className="team-card-body">
              <p className="team-name">{member.name}</p>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>

              <div className="team-stats">
                {member.stats.map((s) => (
                  <div key={s.label}>
                    <span className="team-stat-label">{s.label}</span>
                    <span>{s.value}</span>
                  </div>
                ))}
              </div>

              <div className="team-card-actions">
                <a className="btn btn-outline" href={`tel:${PHONE}`}>Call Us</a>
                <a className="btn btn-primary" href={`tel:${PHONE}`}>Book Now</a>
              </div>
            </div>
          </div>
          <p className="team-drag-hint">Click a tab to meet the crew</p>
        </div>
      </div>
    </section>
  )
}
