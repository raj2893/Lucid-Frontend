import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.lucidllp.com';
  const pages = ['', '/about', '/vision', '/strengths', '/parent-group', '/quality', '/ethics', '/contact', '/privacy', '/terms', '/sitemap-page', '/blog', '/blog/calafine-lotion-sunburn-relief-acne-care-skin-nourishment',
    '/blog/best-face-wash-oily-skin-india-2026', '/blog/best-moisturizer-combination-skin-aloe-vera-vitamin-e-jojoba','/blog/calamine-lotion-uses-benefits-calafine-complete-guide-2026',
    '/blog/best-sunscreen-oily-skin-india-spf-guide'
  ];

  return pages.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.9,
  }));
}