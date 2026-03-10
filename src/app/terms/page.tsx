import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '../inner.module.css';

export const metadata: Metadata = {
  title: 'Terms & Compliance | Lucid Pharmatech LLP',
  description:
    'Terms of use and compliance information for the Lucid Pharmatech LLP website.',
  alternates: { canonical: 'https://www.lucidllp.com/terms' },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Terms & Compliance', href: '/terms' }]} />
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>Legal</span>
          <h1>Terms &amp; Compliance</h1>
          <p className={styles.heroDesc}>Last updated: January 2025</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Lucid Pharmatech LLP website
              (www.lucidllp.com), you accept and agree to be bound by these Terms
              and Compliance guidelines. If you do not agree, please discontinue use of
              this website.
            </p>

            <h2>2. Website Purpose</h2>
            <p>
              This website is provided for informational purposes only. The content
              herein does not constitute medical advice, pharmaceutical recommendations,
              or a solicitation of investment. For medical advice, please consult a
              qualified healthcare professional.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and design
              elements, is the property of Lucid Pharmatech LLP and is protected by
              applicable intellectual property laws. Unauthorized reproduction or use
              is prohibited.
            </p>

            <h2>4. Regulatory Compliance</h2>
            <p>
              Lucid Pharmatech LLP is committed to full compliance with all applicable
              pharmaceutical regulations under the Drugs and Cosmetics Act, CDSCO
              guidelines, and other relevant regulatory frameworks governing pharmaceutical
              operations in India.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              Lucid Pharmatech LLP shall not be liable for any indirect, incidental, or
              consequential damages arising from the use or inability to use this website
              or its content. We reserve the right to modify website content at any time
              without notice.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be
              subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu.
            </p>

            <h2>7. Contact</h2>
            <p>
              For any legal queries, please contact us at{' '}
              <a href="mailto:info@lucidllp.com">info@lucidllp.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}