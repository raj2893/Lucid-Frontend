import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '../inner.module.css';

export const metadata: Metadata = {
  title: 'Corporate Ethics & Commitment | Lucid Pharmatech LLP',
  description:
    'Lucid Pharmatech LLP operates with unwavering ethical standards — transparency, compliance, and social responsibility at the core of every business decision.',
  alternates: { canonical: 'https://www.lucidllp.com/ethics' },
};

export default function EthicsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Ethics', href: '/ethics' }]} />
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>Ethics & Commitment</span>
          <h1>Our Corporate Responsibility</h1>
          <p className={styles.heroDesc}>
            Ethical conduct is not a constraint on our business — it is the foundation of
            it. Every policy, every decision, every partnership reflects our commitment
            to doing right by our stakeholders and society.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <h2>Ethical Business Conduct</h2>
            <p>
              Lucid Pharmatech LLP is committed to conducting all business with the
              highest standards of integrity. We maintain clear and transparent
              relationships with customers, suppliers, healthcare professionals, and
              regulatory bodies — built on honesty and mutual respect.
            </p>

            <h2>Regulatory Compliance</h2>
            <p>
              We adhere strictly to all applicable pharmaceutical regulations, licensing
              requirements, and industry standards. Compliance is not viewed as a burden
              but as evidence of our commitment to quality and patient safety. We maintain
              proactive engagement with regulatory requirements and stay ahead of
              evolving compliance frameworks.
            </p>

            <h2>Responsible Marketing</h2>
            <p>
              Our marketing practices are grounded in scientific accuracy and ethical
              intent. We do not make unsubstantiated claims about our products, and we
              engage with healthcare professionals in a transparent, education-first
              manner. Patient welfare always supersedes commercial interest in our
              communication strategy.
            </p>

            <h2>Environmental Responsibility</h2>
            <p>
              We are mindful of our environmental footprint and strive to operate in ways
              that minimize waste, reduce energy consumption, and promote sustainable
              pharmaceutical manufacturing practices. As we grow, we are committed to
              ensuring that growth does not come at the cost of environmental responsibility.
            </p>

            <h2>Social Commitment</h2>
            <p>
              Our commitment to affordable healthcare is itself an act of corporate social
              responsibility. By making quality pharmaceutical products accessible to
              lower-income populations and underserved communities, we contribute
              meaningfully to public health outcomes beyond our commercial mandate.
            </p>

            <h2>Stakeholder Transparency</h2>
            <p>
              We believe in clear, open communication with all our stakeholders — from
              business partners and distributors to the patients who rely on our products.
              Transparency builds trust, and trust is the bedrock of a pharmaceutical
              company&apos;s reputation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}