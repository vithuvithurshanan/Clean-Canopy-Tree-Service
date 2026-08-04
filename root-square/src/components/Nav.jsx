import { useState, useEffect } from 'react'
import { PHONE } from '../constants'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#approach' },
  { label: 'Team', href: '#team' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = links.map((l) => l.href.replace('#', ''))

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -45% 0px', threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">
          <img src="/logo-96.webp" alt="Clean Canopy Tree Service logo" width="36" height="36" style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <span>Clean Canopy</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => {
            const id = l.href.replace('#', '')
            return (
              <a
                key={l.label}
                href={l.href}
                className={activeId === id ? 'nav-link-active' : ''}
              >
                {l.label}
              </a>
            )
          })}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary nav-cta" href={`tel:${PHONE}`}>
            Call Now
          </a>
          <button
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile">
          {links.map((l) => {
            const id = l.href.replace('#', '')
            return (
              <a
                key={l.label}
                href={l.href}
                className={activeId === id ? 'nav-link-active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            )
          })}
          <a className="btn btn-primary" href={`tel:${PHONE}`}>
            Call Now
          </a>
        </div>
      )}
    </header>
  )
}
