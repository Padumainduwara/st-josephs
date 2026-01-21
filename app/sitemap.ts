import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.stjosephsgirlsschool.com';
  
  // Define routes with specific priorities based on importance
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/news', priority: 0.9, changeFrequency: 'daily' },
    { url: '/events', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/admission', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/academics', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/staff', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/resources', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/prefects', priority: 0.7, changeFrequency: 'yearly' },
    { url: '/clubs', priority: 0.6, changeFrequency: 'yearly' },
    { url: '/achievements', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/alumni', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/sds', priority: 0.5, changeFrequency: 'yearly' },
    { url: '/gallery', priority: 0.6, changeFrequency: 'monthly' },
    { url: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency as 'daily' | 'weekly' | 'monthly' | 'yearly',
    priority: route.priority,
  }));
}