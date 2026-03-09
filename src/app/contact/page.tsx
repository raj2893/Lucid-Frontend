import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaOrg from '@/components/SchemaOrg';
import styles from '../inner.module.css';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Lucid Pharmatech LLP',
  description:
    'Contact Lucid Pharmatech LLP for partnership enquiries, business collaboration, or general information about our pharmaceutical products and services.',
  alternates: { canonical: 'https://www.lucidpharmatech.com/contact' },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Lucid Pharmatech LLP',
  url: 'https://www.lucidpharmatech.com/contact',
  description: 'Contact page for Lucid Pharmatech LLP partnership and business enquiries.',
};

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={contactSchema} />
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>Contact Us</span>
          <h1>Get In Touch</h1>
          <p className={styles.heroDesc}>
            We welcome enquiries from business partners, healthcare distributors,
            and institutions aligned with our mission of affordable quality healthcare.
          </p>
        </div>
      </section>
      <ContactContent />
    </>
  );
}