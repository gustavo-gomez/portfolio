import type {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap | null {
  if (process.env?.SERVICE_ENV !== 'PROD') {
    return [];
  }

  return [
    {
      url: 'https://gustavogomez.dev',
      changeFrequency: 'daily',
      lastModified: new Date(),
      alternates: {
        languages: {
          es: 'https://gustavogomez.dev/es',
          en: 'https://gustavogomez.dev/en',
        },
      },
    },
  ]
}