import { MetadataRoute } from 'next';

const BASE = 'https://www.lucidllp.com';

const corePages = [
  '',
  '/products',
  '/about',
  '/vision',
  '/strengths',
  '/parent-group',
  '/quality',
  '/ethics',
  '/contact',
];

const legalPages = ['/privacy', '/terms', '/sitemap-page'];

// Every folder under src/app/blog/. Keep this list in sync when adding posts.
const blogPosts = [
  '/blog',
  '/blog/best-face-wash-acne-prone-skin-india',
  '/blog/best-face-wash-daily-use-without-drying-skin-india',
  '/blog/best-face-wash-oily-skin-india-2026',
  '/blog/best-face-wash-sensitive-skin-india',
  '/blog/best-face-wash-teenagers-acne-india',
  '/blog/best-hair-oil-dry-frizzy-hair-india',
  '/blog/best-hair-oil-hair-growth-india-biotin',
  '/blog/best-lotion-skin-allergies-rashes-india-calafine',
  '/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba',
  '/blog/best-sunscreen-acne-prone-skin-india',
  '/blog/best-sunscreen-oily-skin-india-spf-guide',
  '/blog/calafine-lotion-sunburn-relief-acne-care-skin-nourishment',
  '/blog/calamine-lotion-safe-daily-use-india',
  '/blog/calamine-lotion-sunburn-relief-guide-india',
  '/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026',
  '/blog/calamine-lotion-uses-skin-complete-guide',
  '/blog/calamine-lotion-vs-moisturizer-difference-india-guide',
  '/blog/chemical-vs-natural-face-wash-which-works-better',
  '/blog/face-wash-acne-vs-oily-skin-india',
  '/blog/how-to-choose-hair-oil-for-your-hair-type-india',
  '/blog/why-sunscreen-important-indoors-india',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entry = (
    path: string,
    priority: number,
    changeFrequency: 'weekly' | 'monthly'
  ) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    entry('', 1, 'weekly'),
    entry('/products', 0.9, 'weekly'),
    ...corePages
      .filter((p) => p !== '' && p !== '/products')
      .map((p) => entry(p, 0.8, 'monthly')),
    ...blogPosts.map((p) =>
      entry(p, p === '/blog' ? 0.8 : 0.7, p === '/blog' ? 'weekly' : 'monthly')
    ),
    ...legalPages.map((p) => entry(p, 0.3, 'monthly')),
  ];
}