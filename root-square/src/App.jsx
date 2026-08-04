import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Approach from './components/Approach'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import TermsModal from './components/TermsModal'
import PrivacyModal from './components/PrivacyModal'

export default function App() {
  const [modal, setModal] = useState(null) // 'terms' | 'privacy' | null

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Approach />
        <Team />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer onTerms={() => setModal('terms')} onPrivacy={() => setModal('privacy')} />
      <CookieBanner />
      {modal === 'terms' && <TermsModal onClose={() => setModal(null)} />}
      {modal === 'privacy' && <PrivacyModal onClose={() => setModal(null)} />}
    </>
  )
}
