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
    image: '/images/moistsure-cream.png',
    imageAlt: 'Moist Sure Cream with Aloe Vera Vitamin-E and Jojoba Oil',
    category: 'Moisturizers',
    date: 'March 10, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'best-hair-oil-hair-growth-india-biotin',
    title: 'Best Hair Oil for Hair Growth in India (2026 Biotin Guide) — HairOShine Advance Biotin Oil',
    excerpt:
      'Hair fall affects over 60% of Indian adults under 35. Hard water, UV stress, pollution, and nutritional gaps are destroying your follicles. The complete 2026 biotin hair oil guide — science, scalp types, application protocol, and honest results timeline.',
    image: '/images/hairoshine-biotin-oil.png',
    imageAlt: 'HairOShine Advance Biotin Hair Oil — Pack of 2 for Hair Growth India',
    category: 'Hair Care',
    date: 'March 18, 2026',
    readTime: '18 min read',
  },
  {
    slug: 'best-face-wash-oily-skin-india-2026',
    title: 'Best Face Wash for Oily Skin in India (2026 Guide) — FreshOLite Vitamin C',
    excerpt:
      'Clogged pores, greasy T-zone, and dull skin? FreshOLite Vitamin C Face Wash with Orange Extracts deeply cleanses, brightens, and controls oil — without over-drying. Our 2026 pick for oily skin.',
    image: '/images/fresholite-facewash.png',
    imageAlt: 'FreshOLite Vitamin C Face Wash with Orange Extracts',
    category: 'Face Wash',
    date: 'March 11, 2026',
    readTime: '7 min read',
  },  
  {
    slug: 'calamine-lotion-uses-benefits-calafine-complete-guide-2026',
    title: 'Calamine Lotion Uses, Benefits & Why CALAFINE Is the Smarter Upgrade — 2026 Complete Guide',
    excerpt:
      'Everything you need to know about calamine lotion — all its uses, benefits, limitations — and why CALAFINE Lotion is the modern upgrade for sunburn, acne, rashes, and dry skin. 5,000+ word definitive guide.',
    image: '/images/calafine-lotion.png',
    imageAlt: 'CALAFINE Lotion — Complete 2026 Skincare Guide',
    category: 'Complete Guide',
    date: 'March 12, 2026',
    readTime: '20 min read',
  },
  {
    slug: 'best-sunscreen-oily-skin-india-spf-guide',
    title: 'Best Sunscreen for Oily Skin in India (2026 SPF Guide) — Freshotil Sunguard 50',
    excerpt:
      'Every sunscreen making your face greasy? Our 2026 SPF guide covers exactly what oily skin needs — broad-spectrum UVA/UVB protection, non-greasy formulas, and water resistance for India\'s heat and humidity.',
    image: '/images/freshotil-sunguard.png',
    imageAlt: 'Freshotil Sunguard 50 SPF Sunscreen Lotion for Oily Skin',
    category: 'Sunscreen',
    date: 'March 12, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'best-face-wash-acne-prone-skin-india',
    title: 'Best Face Wash for Acne-Prone Skin in India 2026 — Complete Guide',
    description: 'Find the best face wash for acne-prone skin in India. Salicylic acid, neem & vitamin C formula clears breakouts, controls oil & prevents pimples. Shop now.',
    image: '/images/fresholite-facewash.png',
    date: 'April 2026',
    readTime: '20 min read',
    category: 'Face Wash',
    tags: ['Acne Care', 'Face Wash', 'Salicylic Acid', 'Neem', 'India Guide'],
  },
  {
    slug: 'how-to-choose-hair-oil-for-your-hair-type-india',
    title: 'How to Choose the Right Hair Oil for Your Hair Type in India 2026',
    description:
      'Expert guide to matching hair oil to your exact hair type — oily scalp, fine, thick, curly, or damaged. Science-backed advice for Indian hair and climate.',
    date: 'April 2026',
    readTime: '20 min read',
    category: 'Hair Care',
    image: '/images/hair-oil-type-guide.png',
    tags: ['Hair Oil', 'Hair Type Guide', 'Hair Growth', 'Biotin', 'India'],
  },  
  {
    slug: 'why-sunscreen-important-indoors-india',
    title: 'Why Sunscreen Is Important Even Indoors in India — Complete SPF Guide 2026',
    description:
      'UV rays penetrate glass, screens emit blue light, and indoor skin is not protected skin. The complete 2026 guide to daily indoor sunscreen use for Indian skin types.',
    image: '/images/freshotil-sunguard.png',
    date: 'April 2026',
    readTime: '19 min read',
    category: 'Sunscreen',
    tags: ['Sunscreen', 'SPF', 'Indoor Protection', 'Indian Skin'],
  },
  {
    slug: 'best-hair-oil-dry-frizzy-hair-india',
    title: 'Best Hair Oil for Dry and Frizzy Hair in India 2026 — Complete Guide',
    description: 'Discover the best hair oil for dry and frizzy hair in India. Deep moisture, frizz control & silk-smooth results for Indian hair. Expert guide + buy now.',
    image: '/images/hairoshine-biotin-oil.png',
    date: 'April 2026',
    readTime: '19 min read',
    category: 'Hair Care',
    tags: ['Hair Care', 'Frizz Control', 'Dry Hair', 'Moisture', 'India Guide'],
  },
  {
    slug: 'best-sunscreen-acne-prone-skin-india',
    title: 'Best Sunscreen for Acne-Prone Skin in India 2026 — Complete SPF Guide',
    description:
      'Non-comedogenic, lightweight SPF 50 that protects acne-prone Indian skin without clogging pores or causing breakouts. The definitive 2026 guide.',
    date: 'April 2026',
    readTime: '19 min read',
    category: 'Acne Care',
    image: '/images/freshotil-sunguard.png',
    tags: ['Sunscreen', 'Acne', 'SPF 50', 'Non-Comedogenic', 'PIH', 'India'],
  },
  {
    slug: 'best-face-wash-sensitive-skin-india',
    title: 'Best Face Wash for Sensitive Skin in India 2026 — Complete Dermatologist Guide',
    description: 'Find the best face wash for sensitive skin in India. pH-balanced, sulphate-free cleanser that soothes redness, repairs your barrier & suits Indian skin.',
    date: 'April 2026',
    category: 'Face Wash',
    image: '/images/fresho-sensitive-face-wash.png',
    href: '/blog/best-face-wash-sensitive-skin-india',
  },
  {
    slug: 'face-wash-acne-vs-oily-skin-india',
    title: 'Face Wash for Acne vs Oily Skin India: What\'s Actually Better?',
    description: 'Acne face wash vs oily skin face wash — which is right for you? Expert India guide covers ingredients, skin types, common mistakes & best picks.',
    image: '/images/fresho-sensitive-face-wash.png',
    date: 'April 2026',
    category: 'Skincare Science',
    readTime: '20 min read',
    tags: ['Acne', 'Oily Skin', 'Face Wash', 'Salicylic Acid', 'Niacinamide'],
  }
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
                      alt={post.imageAlt || ''}
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