import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow admin or sensitive paths if you have them later
      disallow: ['/admin', '/private', '/api/auth', '/studio'], 
    },
    sitemap: 'https://www.stjosephsgirlsschool.com/sitemap.xml',
  };
}