import { useEffect, useState } from 'react'

const STORAGE_KEY = 'clean-canopy-cookie-consent'

export default function CookieBanner() {
  // Start as 'hidden' not null — avoids CLS from sudden DOM insertion
  const [state, setState] = useState('hidden') // 'hidden' | 'visible' | 'dismissed'

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Small delay so it doesn't shift content during initial paint
      const t = setTimeout(() => setState('visible'), 1500)
      return () => clearTimeout(t)
    }
    const reopen = () => setState('visible')
    window.addEventListener('open-cookie-settings', reopen)
    return () => window.removeEventListener('open-cookie-settings', reopen)
  }, [])

  const choose = (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    setState('dismissed')
  }

  if (state === 'dismissed') return null

  return (
    <div
      className={`cookie-banner${state === 'visible' ? ' cookie-banner-visible' : ''}`}
      role="dialog"
      aria-label="Cookie settings"
      aria-hidden={state !== 'visible'}
    >
      <p className="cookie-title">Cookie Settings</p>
      <p className="cookie-text">
        We use cookies to personalize content, run ads, and analyze traffic.
      </p>
      <div className="cookie-actions">
        <button className="btn btn-outline" type="button" onClick={() => choose('rejected')}>Reject</button>
        <button className="btn btn-primary" type="button" onClick={() => choose('accepted')}>Accept</button>
      </div>
    </div>
  )
}
