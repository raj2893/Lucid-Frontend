import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '../inner.module.css';

export const metadata: Metadata = {
  title: 'Strengths & Capabilities | Lucid Pharmatech LLP',
  description:
    'Discover the core strengths of Lucid Pharmatech LLP — innovative packaging, dedicated professionals, and a strong pharmaceutical foundation.',
  alternates: { canonical: 'https://www.lucidllp.com/strengths' },
};

const strengths = [
  {
    icon: '📦',
    title: 'Innovative & Sophisticated Product Packaging',
    body: `Our packaging philosophy goes beyond aesthetics. We design packaging systems that protect product integrity, ensure patient compliance, and communicate brand trust — all while meeting stringent pharmaceutical packaging regulations. From blister packs to unit-dose solutions, our packaging innovation gives our products a market edge while serving the patient's best interest.`,
  },
  {
    icon: '👥',
    title: 'Dedicated & Committed Professional Team',
    body: `Our team is our greatest asset. Lucid Pharmatech is built on the expertise of quality assurance professionals, and business leaders — all unified by a shared commitment to our mission. We invest in continuous professional development and maintain a culture of accountability and excellence.`,
  }
];

export default function StrengthsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Capabilities', href: '/strengths' }]} />
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>Our Strengths</span>
          <h1>Capabilities That Define Us</h1>
          <p className={styles.heroDesc}>
            The pillars that enable Lucid Pharmatech to deliver pharmaceutical excellence
            reliably, ethically, and at scale.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.cardGrid}>
            {strengths.map(s => (
              <article key={s.title} className={styles.infoCard}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}