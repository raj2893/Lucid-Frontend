import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaOrg from '@/components/SchemaOrg';
import ProductCard from '@/components/ProductCard';
import { IconArrowRight } from '@/components/Icons';
import {
  listableProducts,
  activeCategories,
  concerns,
  getProductsByCategory,
  getProductsByConcern,
} from '@/data/products';
import styles from './products.module.css';

export const metadata: Metadata = {
  title: 'Consumer Products — Skincare, Sun Care & Hair Care',
  description:
    'Explore the Lucid Pharmatech consumer range — face wash, sun care, calamine lotion, moisturiser and hair oil. Available on Amazon India.',
  alternates: { canonical: 'https://www.lucidllp.com/products' },
  openGraph: {
    title: 'Consumer Products | Lucid Pharmatech LLP',
    description:
      'Skincare, sun care and hair care from Lucid Pharmatech — available on Amazon India.',
    url: 'https://www.lucidllp.com/products',
    type: 'website',
    images: [
      {
        url: '/images/consumer-products-hero.png',
        width: 1536,
        height: 1024,
        alt: 'The Lucid Pharmatech consumer product range',
      },
    ],
  },
};

// ItemList only. No Offer, price, availability, rating or review data —
// none of that is confirmed, and inventing it would be structured-data
// spam as well as untrue.
const productListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Lucid Pharmatech Consumer Products',
  url: 'https://www.lucidllp.com/products',
  numberOfItems: listableProducts.length,
  itemListElement: listableProducts.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: product.name,
      description: product.positioning,
      image: `https://www.lucidllp.com${product.image}`,
      brand: { '@type': 'Brand', name: 'Lucid Pharmatech LLP' },
    },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <SchemaOrg schema={productListSchema} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Products', href: '/products' },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="products-heading">
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <span className="section-label">Consumer Products</span>
              <div className="divider" />
              <h1 id="products-heading">
                Skincare, sun care and hair care from a pharmaceutical company
              </h1>
              <p>
                Our consumer range applies the same quality discipline we bring
                to pharmaceutical work. Every product below is available to buy
                on Amazon India.
              </p>
            </div>
            <div className={styles.heroMedia}>
              <Image
                src="/images/consumer-products-hero.png"
                alt="The Lucid consumer range including Calafine calamine lotion, Kojicid gel and facewash, Fresh O Lite Vitamin C face wash and Freshotil Sunguard-50"
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Category jump links ──────────────────────────── */}
      <nav className={styles.categoryNav} aria-label="Product categories">
        <div className="container">
          <ul className={styles.categoryList}>
            {activeCategories.map((category) => (
              <li key={category.slug}>
                <a href={`#${category.slug}`} className={styles.categoryLink}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Products by category ─────────────────────────── */}
      {activeCategories.map((category) => {
        const items = getProductsByCategory(category.slug);
        return (
          <section
            key={category.slug}
            id={category.slug}
            className={styles.categorySection}
            aria-labelledby={`${category.slug}-heading`}
          >
            <div className="container">
              <div className={styles.categoryHead}>
                <h2 id={`${category.slug}-heading`}>{category.name}</h2>
                <p>{category.blurb}</p>
              </div>
              <div className={styles.grid}>
                {items.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    placement={`products_${category.slug}`}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Shop by concern ──────────────────────────────────
          The homepage links to /products#<concern>, so these anchors
          must exist here. Only concerns with matching products render. */}
      <section className={styles.concerns} aria-labelledby="concerns-heading">
        <div className="container">
          <div className={styles.concernsHead}>
            <span className="section-label">Shop by Need</span>
            <div className="divider" />
            <h2 id="concerns-heading">Start from the concern</h2>
          </div>

          <div className={styles.concernList}>
            {concerns.map((concern) => {
              const items = getProductsByConcern(concern.slug);
              if (items.length === 0) return null;
              return (
                <div
                  key={concern.slug}
                  id={concern.slug}
                  className={styles.concernRow}
                >
                  <h3 className={styles.concernLabel}>{concern.label}</h3>
                  <ul className={styles.concernProducts}>
                    {items.map((product) => (
                      <li key={product.slug}>
                        
                        <a  href={`#${product.category}`}
                          className={styles.concernChip}
                        >
                          {product.shortName}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Resources bridge ─────────────────────────────── */}
      <section className={styles.bridge} aria-labelledby="bridge-heading">
        <div className="container">
          <div className={styles.bridgeInner}>
            <div>
              <h2 id="bridge-heading">Not sure which one you need?</h2>
              <p>
                Our guides cover sunscreen, cleansers, calamine and hair oil in
                depth — including when a product is not the right answer.
              </p>
            </div>
            <Link href="/blog" className="btn-primary">
              Read the guides
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}