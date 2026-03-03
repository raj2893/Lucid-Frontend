import type { Metadata } from 'next';
import Link from 'next/link';
import SchemaOrg from '@/components/SchemaOrg';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'Lucid Pharmatech LLP | Quality Pharmaceutical Products at Affordable Prices',
  description:
    'Lucid Pharmatech LLP delivers quality pharmaceutical products at affordable prices — committed to accessible healthcare for all.',
  alternates: { canonical: 'https://www.lucidpharmatech.com' },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lucid Pharmatech LLP - Home',
  url: 'https://www.lucidpharmatech.com',
  description:
    'Quality pharmaceutical products at affordable prices for the ailing humanity.',
  isPartOf: { '@type': 'WebSite', name: 'Lucid Pharmatech LLP', url: 'https://www.lucidpharmatech.com' },
};

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={homeSchema} />

      {/* Hero */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroOverlay} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.heroEyebrow}>Lucid Pharmatech LLP</p>
          <h1 id="hero-heading" className={styles.heroHeading}>
            Healthcare That
            <br />
            <em>Humanity Deserves</em>
          </h1>
          <p className={styles.heroSub}>
            Quality pharmaceutical products at affordable prices —<br />
            because the greatest reward is relief on the face of suffering humanity.
          </p>
          <div className={styles.heroCTA}>
            <Link href="/about" className="btn-primary">Discover Our Story</Link>
            <Link href="/contact" className="btn-outline">Partner With Us</Link>
          </div>
          <div className={styles.heroStats}>
            {[
              { value: 'Quality', label: 'First Principle' },
              { value: 'Affordable', label: 'Healthcare Access' },
              { value: 'Ethical', label: 'Manufacturing' },
              { value: 'Trusted', label: 'Heritage' },
            ].map(s => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span />
        </div>
      </section>

      {/* Vision Quote */}
      <section className={styles.visionBand} aria-labelledby="vision-quote">
        <div className="container">
          <div className={styles.visionInner}>
            <span className={styles.quoteIcon}>&ldquo;</span>
            <blockquote id="vision-quote" className={styles.visionQuote}>
              The biggest reward is the smile of relief on the face of suffering humanity.
              Our Vision is to provide{' '}
              <strong>Quality products at an affordable price</strong>{' '}
              to the ailing humanity.
            </blockquote>
            <cite className={styles.visionCite}>— Lucid Pharmatech LLP, Founding Vision</cite>
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className={styles.about} aria-labelledby="about-heading">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutLeft}>
              <span className="section-label">Who We Are</span>
              <div className="divider" />
              <h2 id="about-heading">A Pharmaceutical Company Built on Purpose</h2>
              <p>
                Lucid Pharmatech LLP was established with a singular mission: to make
                quality healthcare accessible to every individual, regardless of their
                economic standing. We combine sophisticated pharmaceutical science with
                a compassionate business philosophy.
              </p>
              <p>
                Backed by decades of institutional pharmaceutical knowledge and a
                commitment to operational excellence, we bring stability, credibility,
                and a quality-first mindset to everything we manufacture.
              </p>
              <Link href="/about" className="btn-primary" style={{ marginTop: '8px' }}>
                Learn More About Us
              </Link>
            </div>
            <div className={styles.aboutRight}>
              <div className={styles.aboutCard}>
                <div className={styles.aboutCardIcon}>🏭</div>
                <h3>Pharmaceutical Excellence</h3>
                <p>Manufacturing products to the highest standards of quality, safety, and efficacy.</p>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.aboutCardIcon}>♥</div>
                <h3>Affordable Healthcare</h3>
                <p>Committed to fair pricing so quality medicines reach every patient who needs them.</p>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.aboutCardIcon}>🔬</div>
                <h3>Scientific Foundation</h3>
                <p>Evidence-based formulations developed with rigorous quality management systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className={styles.strengths} aria-labelledby="strengths-heading">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">Our Strengths</span>
            <div className="divider divider-center" />
            <h2 id="strengths-heading">Built On Solid Foundations</h2>
            <p className={styles.sectionDesc}>
              Three core pillars define our operational excellence and distinguish Lucid
              Pharmatech in the competitive pharmaceutical landscape.
            </p>
          </div>
          <div className={styles.strengthsGrid}>
            {[
              {
                icon: '📦',
                title: 'Innovative Product Packaging',
                desc: 'Sophisticated, patient-centric packaging that ensures product integrity, compliance, and brand distinction in the market.',
                link: '/strengths',
              },
              {
                icon: '👥',
                title: 'Dedicated Professional Team',
                desc: 'A committed, qualified team of pharmaceutical scientists, quality experts, and business professionals united by a common purpose.',
                link: '/strengths',
              },
            ].map(s => (
              <article key={s.title} className={styles.strengthCard}>
                <div className={styles.strengthIcon} aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href={s.link} className={styles.cardLink}>
                  Explore <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Ethics */}
      <section className={styles.commitments} aria-labelledby="commit-heading">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-label">Our Promise</span>
            <div className="divider divider-center" />
            <h2 id="commit-heading">Quality, Ethics & Compliance</h2>
            <p className={styles.sectionDesc}>
              Every product we make, every decision we take is governed by an unwavering
              commitment to pharmaceutical excellence and corporate integrity.
            </p>
          </div>
          <div className={styles.commitGrid}>
            {[
              { href: '/quality', icon: '✓', title: 'Quality Manufacturing', desc: 'GMP-aligned processes with rigorous quality control at every step of production.' },
              { href: '/ethics', icon: '⚖', title: 'Ethical Operations', desc: 'Business practices grounded in honesty, transparency, and social responsibility.' },
              { href: '/vision', icon: '◎', title: 'Affordable Access', desc: 'Pricing philosophy that puts patient welfare ahead of profit maximization.' },
            ].map(c => (
              <Link href={c.href} key={c.title} className={styles.commitCard}>
                <div className={styles.commitIcon}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className={styles.future} aria-labelledby="future-heading">
        <div className="container">
          <div className={styles.futureInner}>
            <div>
              <span className="section-label">Coming Soon</span>
              <div className="divider" />
              <h2 id="future-heading">Expanding Into Beauty &amp; Dermatology</h2>
              <p>
                Lucid Pharmatech is preparing to launch an expanded portfolio spanning
                beauty and dermatology products — bringing our quality-first philosophy
                into personal care. Our product catalog is currently in development.
              </p>
            </div>
            <div className={styles.futureBadges}>
              {['Pharma Generics', 'Dermatology', 'Beauty & Skincare', 'OTC Products'].map(b => (
                <span key={b} className={styles.futureBadge}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 id="cta-heading">Ready to Partner With Us?</h2>
            <p>
              We welcome partnerships with distributors, healthcare institutions, and
              business collaborators who share our vision for affordable, quality healthcare.
            </p>
            <Link href="/contact" className="btn-primary">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}