// Server component. The only client JS on a card comes from
// AmazonButton's click handler.

import Image from 'next/image';
import Link from 'next/link';
import AmazonButton from './AmazonButton';
import { IconArrowRight } from './Icons';
import { categories, productHref, type Product } from '@/data/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  /** Passed to analytics so we know which section drove the click. */
  placement: string;
  priority?: boolean;
}

export default function ProductCard({
  product,
  placement,
  priority = false,
}: ProductCardProps) {
  const categoryName =
    categories.find((c) => c.slug === product.category)?.name ?? '';

  // Product detail pages now exist, so "Explore" goes to the product,
  // and the article links live on the product page itself.
  const exploreHref = productHref(product.slug);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 600px) 90vw, (max-width: 1024px) 45vw, 300px"
            className={styles.image}
          />
        ) : (
          // NEEDS USER VALUE — product photograph not yet supplied.
          <div className={styles.imageFallback} aria-hidden="true" />
        )}
      </div>

      <div className={styles.body}>
        {categoryName && <p className={styles.category}>{categoryName}</p>}
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.positioning}>{product.positioning}</p>

        {(product.size || product.pack) && (
          <p className={styles.spec}>
            {[product.size, product.pack].filter(Boolean).join(' · ')}
          </p>
        )}

        <div className={styles.actions}>
          <AmazonButton
            href={product.amazonUrl}
            productName={product.name}
            placement={placement}
          />
          {exploreHref && (
            <Link href={exploreHref} className={styles.explore}>
              Explore product
              <IconArrowRight size={15} className={styles.exploreIcon} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}