import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '../inner.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lucid Pharmatech LLP',
  description:
    'Privacy Policy for Lucid Pharmatech LLP — how we collect, use, and protect personal data on our website.',
  alternates: { canonical: 'https://www.lucidpharmatech.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Privacy Policy', href: '/privacy' }]} />
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>Legal</span>
          <h1>Privacy Policy</h1>
          <p className={styles.heroDesc}>Last updated: January 2025</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <h2>1. Introduction</h2>
            <p>
              Lucid Pharmatech LLP (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to
              protecting your personal data. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect information you provide directly, such as when you submit a
              contact form, request information, or communicate with us. This may include
              your name, email address, organization name, and the content of your
              communications.
            </p>
            <p>
              We also collect certain technical information automatically, including
              IP address, browser type, pages visited, and time of visit, through
              standard web server logs and analytics tools.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use collected information to respond to your enquiries, improve our
              website and services, ensure website security, and comply with applicable
              legal obligations. We do not sell personal data to third parties.
            </p>

            <h2>4. Data Retention</h2>
            <p>
              We retain personal data for as long as necessary to fulfil the purposes
              for which it was collected, or as required by law. Contact form submissions
              are retained for a period sufficient to address your enquiry and maintain
              business records.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or request deletion of personal
              data we hold about you. To exercise these rights, please contact us at
              info@lucidpharmatech.com.
            </p>

            <h2>6. Contact</h2>
            <p>
              For privacy-related queries, please contact us at{' '}
              <a href="mailto:info@lucidpharmatech.com">info@lucidpharmatech.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}