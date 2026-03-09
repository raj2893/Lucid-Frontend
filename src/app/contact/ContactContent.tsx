'use client';

import { useState } from 'react';
import styles from '../inner.module.css';
import contactStyles from './contact.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactContent() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      first_name: (form.elements.namedItem('first_name') as HTMLInputElement).value,
      last_name:  (form.elements.namedItem('last_name')  as HTMLInputElement).value,
      email:       (form.elements.namedItem('email')       as HTMLInputElement).value,
      organization:(form.elements.namedItem('organization')as HTMLInputElement).value,
      subject:     (form.elements.namedItem('subject')     as HTMLSelectElement).value,
      message:     (form.elements.namedItem('message')     as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className={styles.content}>
      <div className="container">
        <div className={contactStyles.contactGrid}>
          {/* Left column — unchanged */}
          <div>
            <h2>Partnership &amp; Business Enquiries</h2>
            <p>
              Whether you are a pharmaceutical distributor, a healthcare institution,
              or a business collaborator seeking to partner with a quality-first pharma
              company, we would be glad to hear from you.
            </p>
            <div className={contactStyles.infoBlocks}>
              <div className={contactStyles.infoBlock}>
                <h3>Email</h3>
                <a href="mailto:info@lucidllp.com" className={contactStyles.infoValue}>
                  info@lucidllp.com
                </a>
              </div>
              <div className={contactStyles.infoBlock}>
                <h3>Registered Under</h3>
                <p className={contactStyles.infoValue}>
                  Tablets (India) Limited<br />Chennai, India
                </p>
              </div>
              <div className={contactStyles.infoBlock}>
                <h3>Business Hours</h3>
                <p className={contactStyles.infoValue}>
                  Monday – Friday: 9:00 AM – 6:00 PM IST<br />
                  Saturday: 9:00 AM – 1:00 PM IST
                </p>
              </div>
            </div>
          </div>

          {/* Right column — form card */}
          <div className={contactStyles.formCard}>
            <h2>Send an Enquiry</h2>

            {status === 'success' ? (
              <div className={contactStyles.successMsg}>
                <p>✅ Thank you! Your enquiry has been received. We'll respond within 2 business days.</p>
              </div>
            ) : (
              <>
                <p style={{ marginBottom: '28px', fontSize: '0.9rem' }}>
                  Fill in the form below and our team will respond within 2 business days.
                </p>
                <form className={contactStyles.form} onSubmit={handleSubmit}>
                  <div className={contactStyles.formRow}>
                    <div className={contactStyles.formGroup}>
                      <label htmlFor="first-name">First Name</label>
                      <input type="text" id="first-name" name="first_name" required placeholder="John" />
                    </div>
                    <div className={contactStyles.formGroup}>
                      <label htmlFor="last-name">Last Name</label>
                      <input type="text" id="last-name" name="last_name" required placeholder="Smith" />
                    </div>
                  </div>
                  <div className={contactStyles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="john@company.com" />
                  </div>
                  <div className={contactStyles.formGroup}>
                    <label htmlFor="organization">Organization</label>
                    <input type="text" id="organization" name="organization" placeholder="Your company or institution" />
                  </div>
                  <div className={contactStyles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject">
                      <option value="">Select a topic</option>
                      <option value="Distribution Partnership">Distribution Partnership</option>
                      <option value="Business Collaboration">Business Collaboration</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Other Enquiry">Other Enquiry</option>
                    </select>
                  </div>
                  <div className={contactStyles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} required placeholder="Tell us about your enquiry..." />
                  </div>

                  {status === 'error' && (
                    <p className={contactStyles.errorMsg}>
                      ⚠️ Something went wrong. Please try emailing us directly at info@lucidllp.com
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending…' : 'Submit Enquiry'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}