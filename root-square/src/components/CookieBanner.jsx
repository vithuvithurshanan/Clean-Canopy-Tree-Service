import { useEffect, useState } from 'react'

const STORAGE_KEY = 'clean-canopy-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
    const reopen = () => setVisible(true)
    window.addEventListener('open-cookie-settings', reopen)
    return () => window.removeEventListener('open-cookie-settings', reopen)
  }, [])

  const choose = (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie settings">
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
