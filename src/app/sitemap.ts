import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config'
import { STATIC_EXPERTS } from '@/lib/experts-data'
import { SERVICES } from '@/lib/services-data'
import { ARTICLES } from '@/lib/articles-data'

const STATIC_PATHS = [
  '/',
  '/hakkimizda',
  '/hizmetler',
  '/uzmanlar',
  '/blog',
  '/iletisim',
  '/on-gorusme',
  '/sss',
  '/kvkk',
  '/gizlilik-politikasi',
  '/cerez-politikasi',
]

function entry(path: string, priority: number): MetadataRoute.Sitemap[number] {
  const trUrl = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  const enUrl = path === '/' ? `${SITE_URL}/en` : `${SITE_URL}/en${path}`

  return {
    url: trUrl,
    lastModified: new Date(),
    priority,
    alternates: {
      languages: { tr: trUrl, en: enUrl },
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePaths = SERVICES.map((service) => `/hizmetler/${service.id}`)
  const expertPaths = STATIC_EXPERTS.map((expert) => `/uzmanlar/${expert.slug}`)
  const articlePaths = ARTICLES.map((article) => `/blog/${article.slug}`)

  return [
    ...STATIC_PATHS.map((path) => entry(path, path === '/' ? 1 : 0.8)),
    ...servicePaths.map((path) => entry(path, 0.7)),
    ...expertPaths.map((path) => entry(path, 0.6)),
    ...articlePaths.map((path) => entry(path, 0.5)),
  ]
}
