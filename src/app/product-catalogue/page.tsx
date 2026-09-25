// Pharmaceutical product catalogue. Entirely separate from /products,
// which remains the consumer range. Everything here is generated from
// src/data/catalogue-products.ts — adding an entry needs no new page.

import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaOrg from '@/components/SchemaOrg';
import { IconArrowRight } from '@/components/Icons';
import {
  CATALOGUE_PATH,
  publishedCatalogue,
  highlightedCatalogue,
  activeCatalogueForms,
  catalogueHref,
  catalogueSummary,
  catalogueSearchIndex,
  cataloguePackLabel,
  getCatalogueForm,
} from '@/data/catalogue';
import CatalogueBrowser, {
  type CatalogueListItem,
} from '@/components/CatalogueBrowser';
import styles from './catalogue.module.css';

const SITE = 'https://www.lucidllp.com';
const URL = `${SITE}${CATALOGUE_PATH}`;

export const metadata: Metadata = {
  title: 'Medicines — Tablets, Capsules, Injections & More',
  description:
    'The complete Lucid Pharmatech medicine range: tablets, capsules, liquids and dry syrups, injections, ointments and lotions, drops, soaps and more, with composition and pack details.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'website',
    url: URL,
    siteName: 'Lucid Pharmatech LLP',
    locale: 'en_IN',
    title: 'Medicines | Lucid Pharmatech LLP',
    description:
      'Browse the complete Lucid Pharmatech medicine range by formulation, brand name or composition.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Lucid Pharmatech LLP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medicines | Lucid Pharmatech LLP',
    description:
      'Browse the complete Lucid Pharmatech medicine range by formulation, brand name or composition.',
    images: ['/og-image.jpg'],
  },
};

// ItemList of links only. No price, availability, rating or review —
// none of that is confirmed for these products.
const catalogueSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Lucid Pharmatech Medicine Range',
  url: URL,
  numberOfItems: publishedCatalogue.length,
  itemListElement: publishedCatalogue.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: product.name,
    url: `${SITE}${catalogueHref(product)}`,
  })),
};

// Slim, serialisable rows for the client-side search and filter.
const catalogueItems: CatalogueListItem[] = publishedCatalogue.map((p) => ({
  slug: p.slug,
  name: p.name,
  href: catalogueHref(p),
  form: p.form,
  summary: catalogueSummary(p),
  packs: cataloguePackLabel(p),
  comingSoon: p.availability === 'coming-soon',
  search: catalogueSearchIndex(p),
}));

export default function ProductCataloguePage() {
  return (
    <>
      <SchemaOrg schema={catalogueSchema} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Medicines', href: CATALOGUE_PATH },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="catalogue-heading">
        <div className="container">
          <span className="section-label">Medicines</span>
          <div className="divider" />
          <h1 id="catalogue-heading">
            Our medicine range — {publishedCatalogue.length} products across eight
            formulations
          </h1>
          <p className={styles.heroText}>
            Tablets, capsules, liquids and dry syrups, injections, ointments and
            lotions, drops, soaps and more. Search by brand name or by
            composition, or filter by formulation, and open any product for its
            full composition and pack details.
          </p>
        </div>
      </section>

      {/* ── In focus ─────────────────────────────────────────
          Renders every entry with `highlighted: true`. Hidden when
          nothing is flagged, so the page degrades on its own. */}
      {highlightedCatalogue.length > 0 && (
        <section className={styles.focus} aria-labelledby="focus-heading">
          <div className="container">
            <div className={styles.focusHead}>
              <span className="section-label">In Focus</span>
              <div className="divider" />
              <h2 id="focus-heading">Products in focus</h2>
              <p>
                A closer look at products we are currently highlighting from the
                range.
              </p>
            </div>

            <ul className={styles.focusGrid}>
              {highlightedCatalogue.map((product) => {
                const form = getCatalogueForm(product.form);
                const packs = cataloguePackLabel(product);
                return (
                  <li key={product.slug}>
                    <Link
                      href={catalogueHref(product)}
                      className={styles.focusCard}
                    >
                      <span className={styles.focusMeta}>
                        {form?.name}
                        {product.availability === 'coming-soon' && (
                          <span className={styles.focusBadge}>Coming soon</span>
                        )}
                      </span>
                      <h3 className={styles.focusName}>{product.name}</h3>
                      {(product.description || catalogueSummary(product)) && (
                        <p className={styles.focusSummary}>
                          {product.description ?? catalogueSummary(product)}
                        </p>
                      )}
                      {packs && <p className={styles.focusPacks}>{packs}</p>}
                      <span className={styles.focusLink}>
                        View product
                        <IconArrowRight size={14} />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* ── Catalogue ────────────────────────────────────── */}
      <section className={styles.listing}>
        <div className="container">
          <CatalogueBrowser items={catalogueItems} forms={activeCatalogueForms} />
        </div>
      </section>

      {/* ── Consumer range bridge ────────────────────────── */}
      <section className={styles.bridge} aria-labelledby="consumer-heading">
        <div className="container">
          <div className={styles.bridgeInner}>
            <div>
              <h2 id="consumer-heading">Looking for our skincare range?</h2>
              <p>
                Our skincare, sun care and hair care products — face wash,
                sunscreen, calamine lotion, moisturiser and hair oil — are
                available to buy on Amazon India.
              </p>
            </div>
            <Link href="/products" className="btn-primary">
              View skincare products
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}