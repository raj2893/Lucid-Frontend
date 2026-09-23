// Detail page for every catalogue product. One component for all of
// them — adding an entry to src/data/catalogue-products.ts is enough.
// Server component; no client JS.

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaOrg from '@/components/SchemaOrg';
import { IconArrowRight } from '@/components/Icons';
import {
  CATALOGUE_DISPLAY,
  CATALOGUE_PATH,
  catalogueHref,
  catalogueProductHref,
  cataloguePackLabel,
  catalogueSummary,
  getCatalogueFamily,
  getCatalogueForm,
  type CatalogueProduct,
} from '@/data/catalogue';
// Shares the consumer product page's stylesheet so both detail layouts
// stay visually identical. No CSS is duplicated.
import styles from '../../products/[slug]/product.module.css';

const SITE = 'https://www.lucidllp.com';

function formatMrp(mrp: number | null, unit: string | null): string | null {
  if (mrp === null) return null;
  return `₹${mrp}${unit ? ` / ${unit}` : ''}`;
}

export function catalogueMetadata(product: CatalogueProduct): Metadata {
  const form = getCatalogueForm(product.form);
  const url = `${SITE}${catalogueProductHref(product.slug)}`;
  const title = `${product.name} (${form?.name ?? 'Product'})`;
  const summary = catalogueSummary(product);
  const packs = cataloguePackLabel(product);
  const description = [
    `${product.name}${summary ? `: ${summary}` : ''}.`,
    packs ? `Pack: ${packs}.` : '',
    'From the Lucid Pharmatech product catalogue.',
  ]
    .filter(Boolean)
    .join(' ')
    .slice(0, 300);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Lucid Pharmatech LLP',
      locale: 'en_IN',
      title: `${title} | Lucid Pharmatech LLP`,
      description,
      images: product.image
        ? [{ url: product.image, alt: product.imageAlt ?? product.name }]
        : [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Lucid Pharmatech LLP' }],
    },
    twitter: {
      card: product.image ? 'summary_large_image' : 'summary',
      title: `${title} | Lucid Pharmatech LLP`,
      description,
      images: [product.image ?? '/og-image.jpg'],
    },
  };
}

export default function CatalogueProductView({ product }: { product: CatalogueProduct }) {
  const form = getCatalogueForm(product.form);
  const family = getCatalogueFamily(product);
  const packs = product.packs.filter((p) => p.size || p.mrp !== null);
  const showIndications =
    CATALOGUE_DISPLAY.showIndications && (product.indications?.length ?? 0) > 0;
  const formHref = `${CATALOGUE_PATH}#catalogue-${product.form}`;

  // Product schema with confirmed fields only: no offers, price, rating
  // or review. Image only once a real photograph exists.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: catalogueSummary(product) || undefined,
    url: `${SITE}${catalogueProductHref(product.slug)}`,
    category: form?.name,
    brand: { '@type': 'Brand', name: 'Lucid Pharmatech LLP' },
    ...(product.image ? { image: `${SITE}${product.image}` } : {}),
  };

  return (
    <>
      <SchemaOrg schema={schema} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Medicines', href: CATALOGUE_PATH },
          { name: product.name, href: catalogueProductHref(product.slug) },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={product.image ? styles.heroGrid : styles.heroSingle}>
            {product.image && (
              <div className={styles.heroMedia}>
                <div className={styles.imageFrame}>
                  <Image
                    src={product.image}
                    alt={product.imageAlt ?? product.name}
                    fill
                    priority
                    sizes="(max-width: 900px) 92vw, 460px"
                    className={styles.image}
                  />
                </div>
              </div>
            )}

            <div className={styles.heroInfo}>
              {form && (
                <Link href={formHref} className={styles.categoryLink}>
                  {form.name}
                </Link>
              )}
              <h1 className={styles.name}>{product.name}</h1>
              {product.availability === 'coming-soon' && (
                <p className={styles.statusBadge}>Coming soon</p>
              )}
              {(product.description || catalogueSummary(product)) && (
                <p className={styles.positioning}>
                  {product.description ?? catalogueSummary(product)}
                </p>
              )}

              {packs.some((p) => p.size) && (
                <ul className={styles.specList}>
                  <li>
                    <span className={styles.specLabel}>
                      {packs.length > 1 ? 'Pack sizes' : 'Pack size'}
                    </span>
                    <span className={styles.specValue}>{cataloguePackLabel(product)}</span>
                  </li>
                  {form && (
                    <li>
                      <span className={styles.specLabel}>Form</span>
                      <span className={styles.specValue}>{form.name}</span>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAILS ──────────────────────────────────────── */}
      <section className={styles.body}>
        <div className="container">
          <div className={styles.bodyGrid}>
            <div className={styles.bodyMain}>
              {product.composition.length > 0 && (
                <>
                  <h2 id="composition">Composition</h2>
                  {product.compositionBasis && (
                    <p className={styles.compositionBasis}>{product.compositionBasis}:</p>
                  )}
                  <ul className={styles.featureList}>
                    {product.composition.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </>
              )}

              {showIndications && (
                <>
                  <h2>Indications</h2>
                  <ul className={styles.featureList}>
                    {product.indications!.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </>
              )}

              {(product.notes?.length ?? 0) > 0 && (
                <>
                  <h2>Availability</h2>
                  <ul className={styles.featureList}>
                    {product.notes!.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </>
              )}

              <p className={styles.disclaimer}>
                Product information is taken from the Lucid Pharmatech product
                catalogue and is for reference only, not medical advice. Prescription
                products should be used only on the advice of a registered medical
                practitioner. Always read the pack label before use.
              </p>
            </div>

            <aside className={styles.sidebar} aria-label="Product details">
              <div className={styles.detailCard}>
                <h2 className={styles.detailTitle}>Product details</h2>
                <dl className={styles.detailList}>
                  <div>
                    <dt>Brand</dt>
                    <dd>{product.name}</dd>
                  </div>
                  {form && (
                    <div>
                      <dt>Form</dt>
                      <dd>{form.name}</dd>
                    </div>
                  )}
                  {packs.map((pack, i) => (
                    <div key={`${pack.size}-${i}`}>
                      <dt>{packs.length > 1 ? `Pack ${i + 1}` : 'Pack size'}</dt>
                      <dd>
                        {pack.size ?? '—'}
                        {CATALOGUE_DISPLAY.showMrp && formatMrp(pack.mrp, pack.mrpUnit) && (
                          <>
                            <br />
                            MRP {formatMrp(pack.mrp, pack.mrpUnit)}
                          </>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── SAME RANGE (product → product) ───────────────── */}
      {family.length > 0 && (
        <section className={styles.reading} aria-labelledby="family-heading">
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="section-label">Related Products</span>
              <div className="divider" />
              <h2 id="family-heading">From the same range</h2>
            </div>
            <ul className={styles.readingGrid}>
              {family.map((p) => (
                <li key={p.slug}>
                  <Link href={catalogueHref(p)} className={styles.readingCard}>
                    <h3>{p.name}</h3>
                    <p>
                      {[getCatalogueForm(p.form)?.name, catalogueSummary(p)]
                        .filter(Boolean)
                        .join(' · ')}
                    </p>
                    <span className={styles.readingLink}>
                      View product
                      <IconArrowRight size={14} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className={styles.bottomCta}>
        <div className="container">
          <div className={styles.bottomInner}>
            <h2>{product.name}</h2>
            <p>For product and trade enquiries, get in touch with our team.</p>
            <div className={styles.bottomActions}>
              <Link href="/contact" className="btn-primary">
                Contact us
                <IconArrowRight size={16} />
              </Link>
              <Link href={CATALOGUE_PATH} className={styles.bottomLink}>
                View all medicines
                <IconArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}