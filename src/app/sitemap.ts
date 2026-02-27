import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.lucidpharmatech.com';
  const pages = ['', '/about', '/vision', '/strengths', '/parent-group', '/quality', '/ethics', '/contact', '/privacy', '/terms', '/sitemap-page'];

  return pages.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}