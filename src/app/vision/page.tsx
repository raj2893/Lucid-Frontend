import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '../inner.module.css';

export const metadata: Metadata = {
  title: 'Vision & Values | Lucid Pharmatech LLP',
  description:
    'Lucid Pharmatech LLP vision: quality pharmaceutical products at affordable prices for all. Discover our core values of compassion, integrity, and excellence.',
  alternates: { canonical: 'https://www.lucidpharmatech.com/vision' },
};

export default function VisionPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Vision & Values', href: '/vision' }]} />
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>Vision & Values</span>
          <h1>What We Stand For</h1>
          <p className={styles.heroDesc}>
            Our vision is more than a statement — it is the operating principle behind
            every decision we make and every product we create.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <h2>Our Vision</h2>
            <p>
              <em>
                &ldquo;The biggest reward is the smile of relief on the face of suffering humanity.
                Our Vision is to provide Quality products at an affordable price to the ailing humanity.&rdquo;
              </em>
            </p>
            <p>
              This vision is not aspirational language — it is the foundation upon which
              every operational decision at Lucid Pharmatech is made. We measure our
              success not by sales volume alone, but by the access to quality healthcare
              that our products enable.
            </p>

            <h2>Core Values</h2>
            <ul>
              <li><strong>Quality Without Compromise:</strong> Every product must meet the highest standards of pharmaceutical excellence before it reaches any patient.</li>
              <li><strong>Affordability as a Right:</strong> Quality healthcare should not be a luxury. We price our products to maximize reach, not margins.</li>
              <li><strong>Scientific Integrity:</strong> All our formulations are evidence-based, regulatory-compliant, and transparently developed.</li>
              <li><strong>Human Compassion:</strong> Behind every prescription is a person seeking relief. We never lose sight of that human reality.</li>
              <li><strong>Ethical Conduct:</strong> We operate with honesty and transparency in all business dealings, with every stakeholder.</li>
              <li><strong>Continuous Improvement:</strong> We invest in people, processes, and technology to continuously elevate our pharmaceutical capabilities.</li>
            </ul>

            <h2>Our Commitment to Society</h2>
            <p>
              We recognize that pharmaceutical companies wield significant influence over
              public health outcomes. We take this responsibility seriously — maintaining
              ethical pricing, supporting access to essential medicines, and operating with
              a sense of duty to the communities we serve.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}