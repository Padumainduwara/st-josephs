import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private', '/api/auth'], // Block sensitive areas
    },
    sitemap: 'https://www.stjosephsgirlsschool.com/sitemap.xml',
  };
}