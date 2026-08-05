import { useEffect } from 'react'

export default function PrivacyModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="legal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Privacy Policy">
      <div className="legal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="legal-modal-header legal-modal-header-bg">
          <img src="/privacy-policy.jpeg" alt="" className="legal-header-img" />
          <div className="legal-header-overlay" />
          <div className="legal-header-banner">
            <h2>Privacy Policy</h2>
            <button className="legal-close" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>
        <div className="legal-modal-body">
          <p className="legal-meta">Effective Date: January 19, 2025 | Last Updated: July 9, 2026</p>
          <p>Clean Canopy Tree Service ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data.</p>

          <h3>1. Information We Collect</h3>
          <p>We may collect the following categories of personal information:</p>
          <ul>
            <li>Full name</li>
            <li>Mailing or service address</li>
            <li>Email address</li>
            <li>Mobile phone number</li>
            <li>Service request details and project descriptions</li>
            <li>Communication history and preferences</li>
          </ul>

          <h3>2. SMS / Text Message Communications</h3>

          <h4>2a. How We Collect Your Mobile Number</h4>
          <p>We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS communications from Clean Canopy Tree Service.</p>

          <h4>2b. Types of Messages We Send</h4>
          <ul>
            <li>Free estimate confirmations and appointment reminders</li>
            <li>Project status updates and scheduling notifications</li>
            <li>Customer support and follow-up communications</li>
            <li>Promotional offers and seasonal service announcements</li>
          </ul>

          <h4>2c. Message Frequency</h4>
          <p>You may receive up to 4–8 messages per month depending on your service activity.</p>

          <h4>2d. Message &amp; Data Rates</h4>
          <p>Message and data rates may apply. Clean Canopy Tree Service is not responsible for any charges incurred from your mobile carrier.</p>

          <h4>2e. How to Opt Out (STOP)</h4>
          <p>You may cancel SMS messages at any time by replying STOP to any text message you receive from us.</p>

          <h4>2f. How to Get Help (HELP)</h4>
          <p>Reply HELP to any message, or contact us at:<br />Phone: 716-869-6464<br />Email: info@woodcresttreebuffalo.com</p>

          <h3>3. Mobile Information &amp; SMS Consent — No Third-Party Sharing</h3>
          <p>No mobile information (including your mobile phone number and SMS opt-in consent data) will be shared with third parties or affiliates for marketing or promotional purposes. This information will not be shared with any third parties under any circumstances.</p>

          <h3>4. How We Use Your Information</h3>
          <ul>
            <li>Provide and manage tree care services</li>
            <li>Respond to inquiries and service requests</li>
            <li>Schedule appointments and send reminders</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Improve our website and service quality</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>

          <h3>5. Cookies and Tracking Technologies</h3>
          <p>We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. By continuing to use this website, you consent to our use of cookies.</p>

          <h3>6. Data Security</h3>
          <p>We implement reasonable administrative, technical, and physical security measures to protect your personal data. However, no method of electronic transmission or storage is 100% secure.</p>

          <h3>7. Data Retention</h3>
          <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law.</p>

          <h3>8. Your Privacy Rights</h3>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate personal data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data</li>
            <li><strong>Opt-Out of SMS:</strong> Reply STOP to any text message at any time</li>
            <li><strong>Opt-Out of Marketing:</strong> Contact us directly to be removed from marketing lists</li>
          </ul>
          <p>To exercise any of these rights, contact us at info@woodcresttreebuffalo.com or call 716-869-6464.</p>

          <h3>9. Changes to This Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.</p>

          <h3>10. Contact Information</h3>
          <p>
            Clean Canopy Tree Service<br />
            388 Lisbon Ave, Buffalo, NY 14215<br />
            Phone: 716-869-6464<br />
            Email: info@woodcresttreebuffalo.com
          </p>
        </div>
      </div>
    </div>
  )
}
