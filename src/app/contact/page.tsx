import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaOrg from '@/components/SchemaOrg';
import styles from '../inner.module.css';
import contactStyles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | Lucid Pharmatech LLP',
  description:
    'Contact Lucid Pharmatech LLP for partnership enquiries, business collaboration, or general information about our pharmaceutical products and services.',
  alternates: { canonical: 'https://www.lucidpharmatech.com/contact' },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Lucid Pharmatech LLP',
  url: 'https://www.lucidpharmatech.com/contact',
  description: 'Contact page for Lucid Pharmatech LLP partnership and business enquiries.',
};

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={contactSchema} />
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>Contact Us</span>
          <h1>Get In Touch</h1>
          <p className={styles.heroDesc}>
            We welcome enquiries from business partners, healthcare distributors,
            and institutions aligned with our mission of affordable quality healthcare.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={contactStyles.contactGrid}>
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
                  <a href="mailto:info@lucidpharmatech.com" className={contactStyles.infoValue}>
                    info@lucidpharmatech.com
                  </a>
                </div>
                <div className={contactStyles.infoBlock}>
                  <h3>Registered Under</h3>
                  <p className={contactStyles.infoValue}>
                    Tablets (India) Limited<br />
                    Chennai, India
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

            <div className={contactStyles.formCard}>
              <h2>Send an Enquiry</h2>
              <p style={{ marginBottom: '28px', fontSize: '0.9rem' }}>
                Fill in the form below and our team will respond within 2 business days.
              </p>
              <form className={contactStyles.form} action="#" method="POST">
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
                    <option value="distribution">Distribution Partnership</option>
                    <option value="business">Business Collaboration</option>
                    <option value="products">Product Information</option>
                    <option value="other">Other Enquiry</option>
                  </select>
                </div>
                <div className={contactStyles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Tell us about your enquiry..." />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}