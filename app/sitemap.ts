import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.stjosephsgirlsschool.com';
  
  const routes = [
    '',
    '/about',
    '/academics',
    '/staff',
    '/resources',
    '/prefects',
    '/clubs',
    '/achievements',
    '/events',
    '/alumni',
    '/sds',
    '/gallery',
    '/contact',
    '/admission',
    '/news',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/news' ? 'daily' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}