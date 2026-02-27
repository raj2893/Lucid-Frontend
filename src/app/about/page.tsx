import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaOrg from '@/components/SchemaOrg';
import styles from '../inner.module.css';

export const metadata: Metadata = {
  title: 'About Us | Lucid Pharmatech LLP',
  description:
    'Learn about Lucid Pharmatech LLP — our history, mission, leadership philosophy, and commitment to affordable quality pharmaceutical products.',
  alternates: { canonical: 'https://www.lucidpharmatech.com/about' },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Lucid Pharmatech LLP',
  url: 'https://www.lucidpharmatech.com/about',
  description: 'About Lucid Pharmatech LLP — our mission, values, and pharmaceutical heritage.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Lucid Pharmatech LLP',
    url: 'https://www.lucidpharmatech.com',
  },
};

export default function AboutPage() {
  return (
    <>
      <SchemaOrg schema={schema} />
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'About Us', href: '/about' }]} />

      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>About Us</span>
          <h1>Our Story &amp; Mission</h1>
          <p className={styles.heroDesc}>
            Lucid Pharmatech LLP is a pharmaceutical company built on the principle that
            quality healthcare must be accessible to every individual — not just the privileged few.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <h2>Founded on Human Values</h2>
            <p>
              Lucid Pharmatech LLP was established with a clear vision: to bridge the gap
              between pharmaceutical quality and affordability. In a landscape where the cost
              of healthcare often determines access to treatment, we chose a different path —
              one guided by compassion, scientific integrity, and a deep commitment to
              human welfare.
            </p>
            <p>
              Our founders recognized that the pharmaceutical industry holds a unique
              responsibility. Every tablet, every capsule, every product that leaves our
              facility represents a promise — a promise of relief to someone who is
              suffering. That weight is not taken lightly.
            </p>

            <h2>Our Pharmaceutical Philosophy</h2>
            <p>
              We believe quality and affordability are not mutually exclusive. Through
              efficient manufacturing processes, responsible sourcing, and a lean,
              purpose-driven operations model, we deliver pharmaceutical products that
              meet the highest standards without unnecessary cost burden on the patient.
            </p>
            <p>
              Our approach to pharmaceuticals is holistic. We do not merely manufacture
              products — we develop solutions. From formulation to packaging, from
              regulatory compliance to distribution strategy, every element of our
              operation is designed with the end patient in mind.
            </p>

            <h2>Institutional Backing &amp; Trust</h2>
            <p>
              Lucid Pharmatech operates under the umbrella of{' '}
              <strong>Tablets (India) Limited</strong>, a name with a long-standing
              reputation in pharmaceutical manufacturing. This backing gives us the
              financial strength, operational depth, and institutional credibility to
              invest in quality without compromise.
            </p>

            <h2>Where We Are Headed</h2>
            <p>
              We are actively building the infrastructure to expand our pharmaceutical
              portfolio while also entering the dermatology and beauty segment — areas
              where science and wellness intersect. Our future roadmap reflects a company
              that thinks beyond today&apos;s market while staying grounded in our core purpose.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link href="/vision" className="btn-primary">Our Vision &amp; Values</Link>
            <Link href="/contact" className={styles.secondaryLink}>Get in Touch →</Link>
          </div>
        </div>
      </section>
    </>
  );
}