import { PHONE } from '../constants'

const cards = [
  {
    img: 'https://images.pexels.com/photos/34674271/pexels-photo-34674271.jpeg',
    title: 'Tree Trimming & Pruning',
    text: 'Shape, thin, and lift your trees for better health, light, and curb appeal.',
    rotate: -8,
    shift: -150,
  },
  {
    img: 'https://images.pexels.com/photos/2902892/pexels-photo-2902892.jpeg',
    title: 'Tree Removal',
    text: 'Safe, efficient removal of dead, diseased, or hazardous trees — any size.',
    rotate: 0,
    shift: 0,
  },
  {
    img: 'https://images.pexels.com/photos/11118633/pexels-photo-11118633.jpeg',
    title: 'Stump Grinding',
    text: 'Complete stump removal so your yard is clean, flat, and ready to use.',
    rotate: 8,
    shift: 150,
  },
]

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="section why-us-inner">
        <div className="why-us-text">
          <h2>Trees are beautiful. Dangerous ones aren&rsquo;t.</h2>
          <p>
            Overgrown, dead, or storm-damaged trees put your property and family
            at risk. Our certified arborists handle every job safely and cleanly.
          </p>
          <a className="btn btn-primary" href={`tel:${PHONE}`}>
            Schedule a Visit
          </a>
        </div>

        <div className="why-us-cards">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="why-us-card"
              style={{ '--rotate': `${c.rotate}deg`, '--shift': `${c.shift}px`, zIndex: i === 1 ? 2 : 1 }}
            >
              <img src={c.img} alt={c.title} />
              <div className="why-us-card-body">
                <p className="why-us-card-title">{c.title}</p>
                <p className="why-us-card-text">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
