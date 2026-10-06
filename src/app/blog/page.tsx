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
    slug: 'winter-skincare-routine-india-dry-skin',
    title: 'Winter Skincare Routine for India: Fix Dry, Flaky Skin',
    excerpt:
      'Tight face, flaky shins and itchy legs every winter? Why cold weather dries out your skin, a simple morning and night routine that fixes it, and the habits that make dryness worse.',
    image: '/images/moist-sure-lotion.png',
    imageAlt: 'Moist Sure Lotion for dry skin in winter',
    category: 'Skincare',
    date: 'October 6, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'how-to-remove-sun-tan-face-body-india',
    title: 'How to Remove Sun Tan From Face, Hands & Body: A Real Guide',
    excerpt:
      'What sun tan really is, how long it takes to fade, what actually helps on the face, hands and feet, which home remedies to skip, and how to stop tan coming back.',
    image: '/images/freshotil-sunguard.png',
    imageAlt: 'Freshotil Sunguard-50 SPF 50 sunscreen to help prevent sun tan',
    category: 'Sunscreen',
    date: 'October 6, 2026',
    readTime: '9 min read',
  },
  {
    slug: 'vitamin-c-face-wash-benefits-uses-how-to-use',
    title: 'Vitamin C Face Wash: Benefits, Uses & How to Use It',
    excerpt:
      'What a Vitamin C face wash can genuinely do in the minute it spends on your skin, who it suits, how to use it morning and night, and whether you still need a serum.',
    image: '/images/fresholite-vitamin-c-face-wash.png',
    imageAlt: 'Fresh O Lite Vitamin C Face Wash with orange extracts',
    category: 'Face Wash',
    date: 'October 5, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'how-to-oil-hair-properly-how-long-overnight-india',
    title: 'How to Oil Hair Properly: How Long, How Often & Overnight?',
    excerpt:
      'How much oil to use, how long to leave it in, whether overnight oiling helps or hurts, how often to oil for your hair type, and how to wash it out without stripping your hair.',
    image: '/images/hairoshine-biotin-oil.png',
    imageAlt: 'HairOShine Advance Hair Oil with biotin',
    category: 'Hair Care',
    date: 'October 5, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'best-face-wash-whiteheads-blackheads-india',
    title: 'Best Face Wash for Whiteheads & Blackheads in India',
    excerpt:
      'Whiteheads and blackheads are clogged pores, not dirt. Which face wash ingredients help clear them, a simple routine for Indian heat and humidity, and the mistakes that keep them coming back.',
    image: '/images/kojicid-brightening-facewash.png',
    imageAlt: 'Kojicid Brightening Facewash with salicylic acid and glycolic acid',
    category: 'Face Wash',
    date: 'September 23, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'moisturizer-with-spf-vs-sunscreen-oily-skin-india',
    title: 'Moisturiser With SPF vs Sunscreen for Oily Skin in India',
    excerpt:
      'Is an SPF moisturiser enough for oily skin? Why the amount you apply matters more than the label, the right morning order, and a non-greasy two-step routine.',
    image: '/images/freshotil-sunguard.png',
    imageAlt: 'Freshotil Sunguard-50 SPF 50 sunscreen lotion for oily skin',
    category: 'Sunscreen',
    date: 'September 23, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'kojic-acid-dark-spots-acne-marks-india-guide',
    title: 'Kojic Acid for Dark Spots & Acne Marks: Complete Guide for Indian Skin',
    excerpt:
      'Dark spots, acne marks and stubborn tan? How kojic acid works, how to use Kojicid Gel and Facewash safely, what results to expect and why sunscreen decides everything.',
    image: '/images/kojicid-gel.png',
    imageAlt: 'Kojicid Gel with kojic acid for dark spots and uneven skin tone',
    category: 'Skincare',
    date: 'September 23, 2026',
    readTime: '9 min read',
  },
  {
    slug: 'moist-sure-lotion-cream-uses-benefits-how-to-use',
    title: 'Moist Sure Lotion & Cream: Uses, Benefits & How to Use',
    excerpt:
      'What Moist Sure Lotion and Moist Sure Cream are used for, their key ingredients, which one suits you, and how to apply them for dry skin on the face and body.',
    image: '/images/moist-sure-lotion.png',
    imageAlt: 'Moist Sure Lotion with aloe vera, glycerine, Vitamin E and jojoba oil',
    category: 'Moisturizers',
    date: 'September 23, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'calafine-lotion-sunburn-relief-acne-care-skin-nourishment',
    title: 'Calafine Lotion: Uses, Benefits & How to Use',
    excerpt:
      'What Calafine calamine lotion is, its key ingredients, its main uses and how to apply it on the face and body.',
    image: '/images/calafine-lotion.png',
    imageAlt: 'Calafine calamine lotion, 100 ml bottles with carton',
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
  },
  {
    slug: 'chemical-vs-natural-face-wash-which-works-better',
    title: 'Chemical vs Natural Face Wash: Which One Works Better for Indian Skin? — 2026 Guide',
    excerpt:
      'The chemical vs natural face wash debate is getting Indian skincare decisions wrong. This expert 2026 guide explains what your cleanser is actually doing to your skin, decodes the science of pH, surfactants, and active ingredients, and shows why a Vitamin C and orange extract formula is what Indian skin actually needs.',
    image: '/images/fresholite-facewash.png',
    imageAlt: 'FreshOLite Vitamin C Face Wash — Chemical vs Natural Guide India 2026',
    category: 'Skincare Science',
    date: 'April 2026',
    readTime: '20 min read',
  },
  {
    slug: 'best-face-wash-teenagers-acne-india',
    title: 'Best Face Wash for Teenagers with Acne in India 2026 — Complete Dermatologist Guide',
    excerpt:
      'Hormonal acne, oily skin, blackheads, and post-acne dark spots — the complete 2026 guide to clearing teenage acne in India with salicylic acid, vitamin C, and orange extract. Science-backed advice for every teen skin type.',
    image: '/images/fresholite-facewash.png',
    imageAlt: 'FreshOLite Vitamin C Face Wash for Teenage Acne India',
    category: 'Teen Skincare',
    date: 'April 2026',
    readTime: '20 min read',
  },
  {
    slug: 'best-face-wash-daily-use-without-drying-skin-india',
    title: 'Best Face Wash for Daily Use Without Drying Skin India 2026 — Complete Guide',
    excerpt:
      'Most face washes strip your skin barrier twice a day. Hard water, SLS, alkaline pH — this is why your skin feels tight, over-produces oil, and ages faster. The complete 2026 India guide to a Vitamin C, sulphate-free cleanser that actually works daily.',
    image: '/images/fresholite-facewash.png',
    imageAlt: 'FreshOLite Vitamin C Face Wash with Orange Extracts — Best Daily Face Wash India',
    category: 'Face Wash',
    date: 'April 2026',
    readTime: '20 min read',
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
            you make better decisions for your health and skin.{' '}
            <Link href="/products" style={{ color: '#7ec8ff', textDecoration: 'underline' }}>
              Explore our products
            </Link>
            .
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
                    <p className={styles.cardExcerpt}>
                      {'excerpt' in post ? post.excerpt : post.description}
                    </p>
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