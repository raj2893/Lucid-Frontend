// Blog → product → Amazon bridge.
// Drop one into an article where a product is genuinely the relevant
// next step. One per article — it should read as a footnote to the
// writing, not an ad break inside it.

import Image from 'next/image';
import Link from 'next/link';
import AmazonButton from './AmazonButton';
import { IconArrowRight } from './Icons';
import { getProductBySlug } from '@/data/products';
import styles from './RelatedProduct.module.css';

interface RelatedProductProps {
  /** Product slug from src/data/products.ts */
  slug: string;
  label?: string;
}

export default function RelatedProduct({
  slug,
  label = 'From the Lucid range',
}: RelatedProductProps) {
  const product = getProductBySlug(slug);

  // Fails silently rather than breaking an article if a slug is wrong.
  if (!product || !product.image) return null;

  return (
    <aside className={styles.wrap} aria-label={`Related product: ${product.name}`}>
      <div className={styles.media}>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 200px"
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        <p className={styles.label}>{label}</p>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.positioning}</p>

        {(product.size || product.pack) && (
          <p className={styles.spec}>
            {[product.size, product.pack].filter(Boolean).join(' · ')}
          </p>
        )}

        <div className={styles.actions}>
          <AmazonButton
            href={product.amazonUrl}
            productName={product.name}
            placement="blog_related_product"
          />
          <Link href="/products" className={styles.link}>
            All products
            <IconArrowRight size={15} className={styles.linkIcon} />
          </Link>
        </div>
      </div>
    </aside>
  );
}