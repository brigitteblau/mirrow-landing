import type { MetadataRoute } from 'next'
import { PROVINCIAS, site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date()

  return [
    { url: site.url, lastModified: ahora, changeFrequency: 'weekly', priority: 1 },
    ...Object.keys(PROVINCIAS).map((slug) => ({
      url: `${site.url}/${slug}`,
      lastModified: ahora,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
