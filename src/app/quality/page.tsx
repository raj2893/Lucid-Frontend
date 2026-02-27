import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '../inner.module.css';

export const metadata: Metadata = {
  title: 'Quality & Manufacturing Excellence | Lucid Pharmatech LLP',
  description:
    'Lucid Pharmatech LLP maintains the highest pharmaceutical quality standards — GMP-aligned manufacturing, rigorous QC, and a commitment to product safety.',
  alternates: { canonical: 'https://www.lucidpharmatech.com/quality' },
};

export default function QualityPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Quality', href: '/quality' }]} />
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>Quality</span>
          <h1>Manufacturing Excellence</h1>
          <p className={styles.heroDesc}>
            Our quality commitment is not a marketing statement — it is a system of
            processes, standards, and people that ensures every product is safe, effective,
            and consistently excellent.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.prose}>
            <h2>Our Quality Philosophy</h2>
            <p>
              At Lucid Pharmatech, quality is built into our products — not tested into
              them. This distinction is fundamental. We implement Quality by Design (QbD)
              principles, ensuring that quality considerations are embedded at every stage
              of product development and manufacturing, rather than being an afterthought
              at the end of production.
            </p>

            <h2>GMP-Aligned Manufacturing</h2>
            <p>
              All manufacturing operations at Lucid Pharmatech are aligned with Good
              Manufacturing Practice (GMP) guidelines. Our processes are designed to
              minimize risk, prevent contamination, and ensure batch-to-batch consistency
              across all product lines.
            </p>
            <ul>
              <li>Rigorous raw material qualification and testing</li>
              <li>Controlled manufacturing environments with environmental monitoring</li>
              <li>Comprehensive in-process controls and checkpoints</li>
              <li>Final product testing against established specifications</li>
              <li>Stability programs to validate product shelf life</li>
            </ul>

            <h2>Quality Control Systems</h2>
            <p>
              Our Quality Control function operates independently from manufacturing,
              ensuring objective evaluation of all products. We maintain comprehensive
              documentation, traceability records, and deviation management systems that
              enable us to identify, investigate, and resolve quality issues promptly and
              transparently.
            </p>

            <h2>Continuous Improvement</h2>
            <p>
              We are committed to ongoing improvement of our quality systems through
              regular internal audits, training programs, and adoption of evolving
              pharmaceutical best practices. Our quality team stays current with
              regulatory guidelines from major authorities including the CDSCO and
              internationally recognized standards.
            </p>

            <h2>Packaging Quality</h2>
            <p>
              Quality extends to our packaging. We ensure all primary and secondary
              packaging materials are qualified, tested, and compatible with our
              pharmaceutical formulations — protecting product integrity from manufacturing
              through to the patient.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}