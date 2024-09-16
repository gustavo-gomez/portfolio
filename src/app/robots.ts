import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots | null {
  if (process.env?.SERVICE_ENV !== 'PROD') {
    return {
      rules: [],
      sitemap: '',
    };
  }
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://gustavogomez.dev/sitemap.xml',
  };
}