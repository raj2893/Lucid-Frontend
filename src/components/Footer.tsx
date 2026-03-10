import Link from 'next/link';
import SchemaOrg from './SchemaOrg';
import styles from './Footer.module.css';
import Image from 'next/image';

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'MedicalOrganization'],
  name: 'Lucid Pharmatech LLP',
  url: 'https://www.lucidllp.com',
  logo: 'https://www.lucidllp.com/logo.png',
  description:
    'Lucid Pharmatech LLP delivers quality pharmaceutical products at affordable prices — committed to healthcare for all.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lucid Pharmatech LLP',
  url: 'https://www.lucidllp.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.lucidllp.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function Footer() {
  return (
    <>
      <SchemaOrg schema={orgSchema} />
      <SchemaOrg schema={websiteSchema} />
      <footer className={styles.footer} role="contentinfo">
        <div className={styles.top}>
          <div className="container">
            <div className={styles.grid}>
              {/* Brand column */}
              <div className={styles.brand}>
                <Link href="/" className={styles.logo}>
                  <Image src="/favicon.ico" alt="Lucid Pharmatech Logo" width={28} height={28} className={styles.logoMark} />
                  <span className={styles.logoText}>
                    <span className={styles.logoMain}>Lucid Pharmatech LLP</span>
                    <span className={styles.logoSub}>Quality Healthcare For All</span>
                  </span>
                </Link>
                <p className={styles.desc}>
                  Our vision is to provide quality pharmaceutical products at affordable
                  prices to the ailing humanity — guided by compassion, ethics, and
                  scientific excellence.
                </p>
                <p className={styles.parent}>
                  A proud enterprise of <strong>Tablets (India) Limited</strong>, Chennai.
                </p>
              </div>

              {/* Quick Links */}
              <div className={styles.col}>
                <h3 className={styles.colTitle}>Company</h3>
                <ul className={styles.linkList}>
                  {[
                    { href: '/', label: 'Home' },
                    { href: '/about', label: 'About Us' },
                    { href: '/vision', label: 'Vision & Values' },
                    { href: '/strengths', label: 'Capabilities' },
                    { href: '/quality', label: 'Quality Excellence' },
                    { href: '/ethics', label: 'Ethics & Commitment' },
                    { href: '/blog', label: 'Content Blogs' },
                  ].map(l => (
                    <li key={l.href}>
                      <Link href={l.href} className={styles.footLink}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className={styles.col}>
                <h3 className={styles.colTitle}>Legal</h3>
                <ul className={styles.linkList}>
                  {[
                    { href: '/privacy', label: 'Privacy Policy' },
                    { href: '/terms', label: 'Terms & Compliance' },
                    { href: '/sitemap-page', label: 'Sitemap' },
                  ].map(l => (
                    <li key={l.href}>
                      <Link href={l.href} className={styles.footLink}>{l.label}</Link>
                    </li>
                  ))}
                </ul>

                <h3 className={styles.colTitle} style={{ marginTop: '28px' }}>Contact</h3>
                <ul className={styles.contactList}>
                  <li>
                    <Link href="/contact" className={styles.footLink}>Get in Touch</Link>
                  </li>
                  <li className={styles.contactItem}>
                    <span className={styles.contactLabel}>Email</span>
                    <a href="mailto:info@lucidllp.com" className={styles.footLink}>
                      info@lucidllp.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className="container">
            <div className={styles.bottomInner}>
              <p className={styles.copy}>
                © {new Date().getFullYear()} Lucid Pharmatech LLP. All rights reserved.
              </p>
              <p className={styles.group}>
                An enterprise of <strong>Tablets (India) Limited</strong>, Chennai, India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}