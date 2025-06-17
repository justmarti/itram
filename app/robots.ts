import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
      ],
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
} 