import { useEffect } from 'react'

export default function TermsModal({ onClose }) {
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
    <div className="legal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Terms and Conditions">
      <div className="legal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="legal-modal-header legal-modal-header-bg">
          <img src="/terms.jpeg" alt="" className="legal-header-img" />
          <div className="legal-header-overlay" />
          <div className="legal-header-banner">
            <h2>Terms &amp; Conditions</h2>
            <button className="legal-close" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>
        <div className="legal-modal-body">
          <p className="legal-meta">Effective Date: January 19, 2025 | Last Updated: July 9, 2026</p>
          <p>Welcome to Clean Canopy Tree Service. By accessing this website or using our services, you agree to be bound by these Terms and Conditions.</p>

          <h3>1. Business Identity</h3>
          <p>These Terms and Conditions govern your use of the services provided by Clean Canopy Tree Service, located at 388 Lisbon Ave, Buffalo, NY 14215. Contact: 716-869-6464 | info@woodcresttreebuffalo.com.</p>

          <h3>2. Age Requirement (18+)</h3>
          <p>By using this website or enrolling in our services, including SMS messaging, you confirm that you are at least 18 years of age. Our SMS program is not directed to individuals under 18.</p>

          <h3>3. Terminology</h3>
          <p>"Client," "You," and "Your" refers to the user of this website. "The Company," "We," "Our," and "Us" refers to Clean Canopy Tree Service.</p>

          <h3>4. SMS Messaging Terms of Service</h3>

          <h4>4a. Program Description &amp; Message Types</h4>
          <p>By providing your phone number and checking the SMS consent checkbox on our contact forms, you agree to receive recurring automated text messages from Clean Canopy Tree Service. Messages may include:</p>
          <ul>
            <li>Free estimate confirmations and scheduling notifications</li>
            <li>Appointment reminders and project status updates</li>
            <li>Customer support and service follow-up communications</li>
            <li>Promotional offers and seasonal announcements related to our tree care services</li>
          </ul>

          <h4>4b. Message Frequency</h4>
          <p>Message frequency varies based on your service activity and interactions with us. You may receive up to 4–8 messages per month. Frequency may increase during active service periods.</p>

          <h4>4c. Message &amp; Data Rates</h4>
          <p>Message and data rates may apply for any messages sent to you from us and to us from you. Charges are determined by your mobile carrier and your individual service plan. Clean Canopy Tree Service is not responsible for any carrier charges.</p>

          <h4>4d. How to Opt Out (STOP)</h4>
          <p>You can opt out of receiving SMS messages at any time by replying STOP to any message we send. After opting out, you will receive a one-time confirmation message and will no longer receive SMS messages from us unless you re-enroll.</p>

          <h4>4e. How to Get Help (HELP)</h4>
          <p>For help with our SMS program, reply HELP to any message or contact us directly at:<br />Phone: 716-869-6464<br />Email: info@woodcresttreebuffalo.com</p>

          <h4>4f. Carrier Liability Disclaimer</h4>
          <p>Mobile carriers are not liable for delayed or undelivered messages. Clean Canopy Tree Service cannot guarantee delivery of SMS messages.</p>

          <h4>4g. Supported Carriers</h4>
          <p>Our SMS program is supported by all major U.S. wireless carriers including AT&amp;T, Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.</p>

          <h3>5. Cookies</h3>
          <p>We use cookies in accordance with our Privacy Policy to improve user experience and website functionality.</p>

          <h3>6. Intellectual Property &amp; License</h3>
          <p>Unless otherwise stated, Clean Canopy Tree Service owns the intellectual property rights for all content on this website. You may not copy, reproduce, republish, sell, or redistribute any material without prior written permission.</p>

          <h3>7. Comments &amp; User Content</h3>
          <p>Clean Canopy Tree Service reserves the right to monitor and remove any comments or user-generated content on our platforms that are inappropriate, offensive, or violate these terms.</p>

          <h3>8. Content Liability</h3>
          <p>We are not responsible for content that appears on external websites linking to us. You agree to defend and protect Clean Canopy Tree Service against any claims arising from your website or digital properties.</p>

          <h3>9. Disclaimer</h3>
          <p>To the maximum extent permitted by applicable law, Clean Canopy Tree Service excludes all warranties, representations, and conditions relating to our website and services. We are not liable for any loss or damage arising from the use of our website or services.</p>

          <h3>10. Changes to These Terms</h3>
          <p>We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised "Last Updated" date. Continued use of our website or services constitutes acceptance of the updated terms.</p>

          <h3>11. Contact Information</h3>
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
