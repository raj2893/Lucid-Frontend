import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaOrg from '@/components/SchemaOrg';
import AmazonButton from '@/components/AmazonButton';
import ProductCard from '@/components/ProductCard';
import { IconArrowRight, IconDocument } from '@/components/Icons';
import {
  listableProducts,
  getListableProductBySlug,
  getRelatedProducts,
  categories,
  productHref,
} from '@/data/products';
import { getBlogs, blogHref } from '@/data/blogs';
import styles from './product.module.css';

const SITE = 'https://www.lucidllp.com';

// Fully static: one page per listable product, no runtime data fetching.
export function generateStaticParams() {
  return listableProducts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

type Params = { slug: string };

// Next 15 passes `params` as a Promise; Next 14 passes a plain object.
// Awaiting a non-thenable returns it unchanged, so this signature is
// correct on both and needs no change when you upgrade.
type ParamsArg = { params: Promise<Params> | Params };

export async function generateMetadata({
  params,
}: ParamsArg): Promise<Metadata> {
  const { slug } = await params;
  const product = getListableProductBySlug(slug);
  if (!product) return {};

  const url = `${SITE}${productHref(product.slug)}`;
  // Description leads with the product's actual composition — no keyword
  // stuffing, and unique per product by construction.
  const description = product.positioning;

  return {
    title: product.name,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: `${product.name} | Lucid Pharmatech LLP`,
      description,
      images: [
        {
          url: product.image,
          alt: product.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Lucid Pharmatech LLP`,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ParamsArg) {
  const { slug } = await params;
  const product = getListableProductBySlug(slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.category);
  const relatedBlogs = getBlogs(product.relatedBlogSlugs);
  const relatedProducts = getRelatedProducts(product);

  // Product schema carrying ONLY confirmed fields. No offers, price,
  // availability, rating or review — none of that is known, and
  // fabricating it would be both untrue and a structured-data violation.
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${SITE}${product.image}`,
    url: `${SITE}${productHref(product.slug)}`,
    category: category?.name,
    brand: { '@type': 'Brand', name: 'Lucid Pharmatech LLP' },
    ...(product.size ? { size: product.size } : {}),
  };

  return (
    <>
      <SchemaOrg schema={productSchema} />
      <Breadcrumb
        items={[
          { name: 'Home', href: '/' },
          { name: 'Products', href: '/products' },
          { name: product.name, href: productHref(product.slug) },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────
          Desktop: image left, information right.
          Mobile: image, then name, then information, then CTA. */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroMedia}>
              <div className={styles.imageFrame}>
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 900px) 92vw, 460px"
                  className={styles.image}
                />
              </div>
            </div>

            <div className={styles.heroInfo}>
              {category && (
                <Link
                  href={`/products#${category.slug}`}
                  className={styles.categoryLink}
                >
                  {category.name}
                </Link>
              )}

              <h1 className={styles.name}>{product.name}</h1>
              <p className={styles.positioning}>{product.positioning}</p>

              {(product.size || product.pack) && (
                <ul className={styles.specList}>
                  {product.size && (
                    <li>
                      <span className={styles.specLabel}>Net content</span>
                      <span className={styles.specValue}>{product.size}</span>
                    </li>
                  )}
                  {product.pack && (
                    <li>
                      <span className={styles.specLabel}>Pack</span>
                      <span className={styles.specValue}>{product.pack}</span>
                    </li>
                  )}
                </ul>
              )}

              <div className={styles.heroActions}>
                {product.amazonUrl ? (
                  <>
                    <AmazonButton
                      href={product.amazonUrl}
                      productName={product.name}
                      placement="product_page_hero"
                    />
                    <p className={styles.ctaNote}>
                      Purchases are completed on Amazon India.
                    </p>
                  </>
                ) : (
                  // AMAZON URL REQUIRED — no dead button is rendered.
                  <p className={styles.ctaNote}>
                    Online availability for this product is being updated.{' '}
                    <Link href="/contact" className={styles.inlineLink}>
                      Contact our team
                    </Link>{' '}
                    for stockist information.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW + DETAILS ───────────────────────────── */}
      <section className={styles.body}>
        <div className="container">
          <div className={styles.bodyGrid}>
            <div className={styles.bodyMain}>
              <h2 id="about">About {product.name}</h2>
              <p className={styles.lede}>{product.description}</p>

              {product.highlights.length > 0 && (
                <>
                  <h2>Key features</h2>
                  <ul className={styles.featureList}>
                    {product.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </>
              )}

              {product.usage.length > 0 && (
                <>
                  <h2>How to use</h2>
                  <ol className={styles.usageList}>
                    {product.usage.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </>
              )}

              {product.suitedFor.length > 0 && (
                <>
                  <h2>Who it is for</h2>
                  <ul className={styles.chipList}>
                    {product.suitedFor.map((s) => (
                      <li key={s} className={styles.chip}>
                        {s}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Sticky detail panel — composition straight off the pack. */}
            <aside className={styles.sidebar} aria-label="Product details">
              <div className={styles.detailCard}>
                <h2 className={styles.detailTitle}>Product details</h2>
                <dl className={styles.detailList}>
                  {product.size && (
                    <div>
                      <dt>Net content</dt>
                      <dd>{product.size}</dd>
                    </div>
                  )}
                  {product.pack && (
                    <div>
                      <dt>Pack</dt>
                      <dd>{product.pack}</dd>
                    </div>
                  )}
                  {category && (
                    <div>
                      <dt>Category</dt>
                      <dd>{category.name}</dd>
                    </div>
                  )}
                  {product.marketedBy && (
                    <div>
                      <dt>Marketed by</dt>
                      <dd>{product.marketedBy}</dd>
                    </div>
                  )}
                </dl>

                {product.ingredients.length > 0 && (
                  <>
                    <h3 className={styles.detailSubTitle}>Key ingredients</h3>
                    <ul className={styles.ingredientList}>
                      {product.ingredients.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── RELATED READING (product → blog) ─────────────── */}
      {relatedBlogs.length > 0 && (
        <section className={styles.reading} aria-labelledby="reading-heading">
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="section-label">Related Reading</span>
              <div className="divider" />
              <h2 id="reading-heading">Understand it before you buy it</h2>
            </div>
            <ul className={styles.readingGrid}>
              {relatedBlogs.map((b) => (
                <li key={b.slug}>
                  <Link href={blogHref(b.slug)} className={styles.readingCard}>
                    <IconDocument size={20} className={styles.readingIcon} />
                    <h3>{b.title}</h3>
                    <p>{b.blurb}</p>
                    <span className={styles.readingLink}>
                      Read article
                      <IconArrowRight size={14} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── RELATED PRODUCTS ─────────────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className={styles.related} aria-labelledby="related-heading">
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="section-label">More from Lucid</span>
              <div className="divider" />
              <h2 id="related-heading">Related products</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.slug}
                  product={p}
                  placement="product_page_related"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className={styles.bottomCta}>
        <div className="container">
          <div className={styles.bottomInner}>
            <h2>{product.name}</h2>
            <p>{product.positioning}</p>
            <div className={styles.bottomActions}>
              {product.amazonUrl && (
                <AmazonButton
                  href={product.amazonUrl}
                  productName={product.name}
                  placement="product_page_bottom_cta"
                />
              )}
              <Link href="/products" className={styles.bottomLink}>
                View all products
                <IconArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}