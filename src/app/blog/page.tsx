import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog — Skincare Tips, Pharma Insights & Product Guides | Lucid Pharmatech',
  description:
    'Explore skincare guides, pharmaceutical insights, and product deep-dives from Lucid Pharmatech LLP — your resource for better health decisions.',
  alternates: { canonical: 'https://www.lucidllp.com/blog' },
};

// ─────────────────────────────────────────────────────────────
//  ADD NEW BLOG POSTS HERE
//  Each entry maps to a folder inside app/blog/[slug]/
// ─────────────────────────────────────────────────────────────
const posts = [
  {
    slug: 'calafine-lotion-sunburn-relief-acne-care-skin-nourishment',
    title: 'One Lotion, Three Skin Problems Solved: CALAFINE Lotion Review',
    excerpt:
      'Sunburn, dryness, and acne — three of the most common skin struggles. CALAFINE Lotion tackles all three in one gentle, all-skin-type formula.',
    image: '/images/calafine-lotion.png',
    imageAlt: 'CALAFINE Lotion for sunburn, acne, and deep nourishment',
    category: 'Skincare',
    date: 'March 9, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba',
    title: 'Best Moisturizer for Combination Skin — Moist Sure Cream with Aloe Vera, Vitamin-E & Jojoba Oil',
    excerpt:
      'Oily T-zone but dry cheeks? Most creams fix one and worsen the other. Moist Sure Cream balances both — with Aloe Vera, Vitamin-E, and Jojoba Oil for deep, non-greasy nourishment.',
    image: '/images/moistsure-cream.jpg',
    imageAlt: 'Moist Sure Cream with Aloe Vera Vitamin-E and Jojoba Oil',
    category: 'Moisturizers',
    date: 'March 10, 2025',
    readTime: '6 min read',
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} />

      <section className={styles.hero}>
        <div className="container">
          <span className="section-label" style={{ color: '#7ec8ff' }}>Insights & Guides</span>
          <h1 className={styles.heroTitle}>The Lucid Pharmatech Blog</h1>
          <p className={styles.heroDesc}>
            Skincare tips, product guides, and pharmaceutical insights — written to help
            you make better decisions for your health and skin.
          </p>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className="container">
          {posts.length === 0 ? (
            <p className={styles.empty}>No posts yet — check back soon.</p>
          ) : (
            <div className={styles.grid}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={styles.card}
                >
                  <div className={styles.cardImage}>
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className={styles.cardCategory}>{post.category}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardMeta}>
                      <span>{post.date}</span>
                      <span className={styles.dot}>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className={styles.cardTitle}>{post.title}</h2>
                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                    <span className={styles.cardLink}>Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}