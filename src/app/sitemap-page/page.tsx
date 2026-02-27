import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import styles from '../inner.module.css';
import sitemapStyles from './sitemap.module.css';

export const metadata: Metadata = {
  title: 'Sitemap | Lucid Pharmatech LLP',
  description: 'Complete sitemap for the Lucid Pharmatech LLP website.',
  alternates: { canonical: 'https://www.lucidpharmatech.com/sitemap-page' },
};

const pages = [
  { section: 'Main Pages', links: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/vision', label: 'Vision & Values' },
    { href: '/strengths', label: 'Strengths & Capabilities' },
    { href: '/quality', label: 'Quality & Manufacturing Excellence' },
    { href: '/ethics', label: 'Corporate Ethics & Commitment' },
    { href: '/contact', label: 'Contact Us' },
  ]},
  { section: 'Legal & Compliance', links: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Compliance' },
    { href: '/sitemap-page', label: 'Sitemap' },
  ]},
];

export default function SitemapPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Sitemap', href: '/sitemap-page' }]} />
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>Navigation</span>
          <h1>Website Sitemap</h1>
          <p className={styles.heroDesc}>A complete directory of all pages on the Lucid Pharmatech LLP website.</p>
        </div>
      </section>
      <section className={styles.content}>
        <div className="container">
          <div className={sitemapStyles.grid}>
            {pages.map(section => (
              <div key={section.section} className={sitemapStyles.section}>
                <h2 className={sitemapStyles.sectionTitle}>{section.section}</h2>
                <ul className={sitemapStyles.list}>
                  {section.links.map(link => (
                    <li key={link.href}>
                      <Link href={link.href} className={sitemapStyles.link}>
                        <span>→</span> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}