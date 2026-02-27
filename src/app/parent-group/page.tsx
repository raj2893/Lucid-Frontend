import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '../inner.module.css';

export const metadata: Metadata = {
  title: 'Parent Group — Jhaver Group & Tablets India Ltd | Lucid Pharmatech',
  description:
    'Lucid Pharmatech LLP is a proud enterprise of Tablets (India) Limited, flagship of the Jhaver Group — a diversified industrial conglomerate based in Chennai.',
  alternates: { canonical: 'https://www.lucidpharmatech.com/parent-group' },
};

const divisions = [
  { icon: '💊', name: 'Pharmaceuticals', desc: 'Core healthcare manufacturing operations across generics and specialty segments.' },
  { icon: '🌿', name: 'Agrochemicals', desc: 'Agricultural science solutions supporting crop protection and productivity.' },
  { icon: '🔗', name: 'Zippers', desc: 'Industrial and consumer zipper manufacturing with strong domestic and export presence.' },
  { icon: '🧵', name: 'Technical Textiles', desc: 'Advanced textile solutions for technical and industrial applications.' },
  { icon: '💻', name: 'Software', desc: 'Technology and software services supporting group operations and external clients.' },
];

export default function ParentGroupPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Parent Group', href: '/parent-group' }]} />
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>Parent Group</span>
          <h1>The Jhaver Group Legacy</h1>
          <p className={styles.heroDesc}>
            Lucid Pharmatech LLP is part of a multi-generational industrial legacy —
            the Jhaver Group — channelled through Tablets (India) Limited, a name
            synonymous with reliability in Indian industry.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <h2>Tablets (India) Limited</h2>
            <p>
              Tablets (India) Limited is the flagship enterprise of the Jhaver Group,
              headquartered in Chennai. It represents decades of pharmaceutical
              manufacturing excellence in the Indian market and serves as the parent
              organization for Lucid Pharmatech LLP.
            </p>
            <p>
              The company&apos;s pharmaceutical heritage means that Lucid Pharmatech
              inherits not just financial strength, but deep institutional knowledge
              of pharmaceutical operations, regulatory environments, and the discipline
              required to build a trusted healthcare brand.
            </p>

            <h2>The Jhaver Group</h2>
            <p>
              The Jhaver Group is a diversified industrial conglomerate with a significant
              and long-standing presence across multiple sectors. Headquartered in Chennai,
              the Group has built a reputation for institutional governance, operational
              excellence, and responsible business leadership across its varied enterprises.
            </p>
            <p>
              The Group&apos;s global operational footprint, combined with its strong
              domestic manufacturing roots, provides Lucid Pharmatech with both the
              stability of an established conglomerate and the agility to grow in
              emerging market segments.
            </p>
          </div>

          <h2 style={{ marginTop: '48px', marginBottom: '24px', fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
            Group Business Divisions
          </h2>
          <div className={styles.cardGrid}>
            {divisions.map(d => (
              <div key={d.name} className={styles.infoCard}>
                <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{d.icon}</div>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.highlight}>
            <h2>Backed by Strength. Driven by Purpose.</h2>
            <p>
              Lucid Pharmatech leverages the full institutional weight of the Jhaver Group
              to deliver on its mission of quality, affordable pharmaceutical care.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}