import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { getOptionalPayloadClient } from '@/lib/payload-client'
import { ARTICLES, CATEGORY_LABELS } from '@/lib/articles-data'
import { pick, localeHref } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    eyebrow: 'GÜNCEL YAZILAR',
    heading: 'Journal',
    body: 'Koçluk, kariyer ve liderlik üzerine derinlemesine yazılar.',
    viewAll: 'Tüm yazılar',
    coverAlt: (title: string) => `${title} kapak görseli`,
    readMore: 'Devamını oku',
    readMoreAria: (title: string) => `${title} — devamını oku`,
    fallbackTitle: 'Yazı',
  },
  en: {
    eyebrow: 'LATEST ARTICLES',
    heading: 'Journal',
    body: 'In-depth writing on coaching, career, and leadership.',
    viewAll: 'All articles',
    coverAlt: (title: string) => `${title} cover image`,
    readMore: 'Read more',
    readMoreAria: (title: string) => `${title} — read more`,
    fallbackTitle: 'Article',
  },
} as const

type PopulatedMedia = { url?: string | null; alt?: string | null }

type Article = {
  id: string
  title?: string | null
  slug?: string | null
  excerpt?: string | null
  coverImage?: PopulatedMedia | string | null
  category?: string | null
  publishedDate?: string | null
}

function staticArticles(locale: Locale): Article[] {
  return ARTICLES.slice(0, 3).map((a) => ({
    id: a.slug,
    title: pick(a.title, locale),
    slug: a.slug,
    excerpt: pick(a.excerpt, locale),
    coverImage: null,
    category: a.category,
    publishedDate: a.publishedDate,
  }))
}

async function getLatestArticles(locale: Locale): Promise<Article[]> {
  const fallback = staticArticles(locale)
  try {
    const payload = await getOptionalPayloadClient()
    if (!payload) return fallback

    const result = await payload.find({
      collection: 'articles',
      sort: '-publishedDate',
      limit: 3,
      depth: 1,
      locale,
      fallbackLocale: 'tr',
    })

    if (result.docs.length === 0) return fallback
    return result.docs as unknown as Article[]
  } catch {
    return fallback
  }
}

function formatDate(dateStr: string, locale: Locale): string {
  try {
    return new Date(dateStr).toLocaleDateString(locale === 'en' ? 'en-US' : 'tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return ''
  }
}

export async function JournalPreview({ locale = DEFAULT_LOCALE }: { locale?: Locale } = {}) {
  const articles = await getLatestArticles(locale)
  const copy = COPY[locale]

  return (
    <section aria-labelledby="journal-heading" className="py-24 bg-[#F6F7F1]">
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase block mb-3">
                {copy.eyebrow}
              </span>
              <h2
                id="journal-heading"
                className="font-serif text-[#1A1C1E] tracking-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2' }}
              >
                {copy.heading}
              </h2>
              <p className="mt-3 font-sans text-[#5B6168] leading-relaxed max-w-lg" style={{ fontSize: '1.0625rem' }}>
                {copy.body}
              </p>
            </div>
            <Link
              href={localeHref('/journal', locale)}
              className="shrink-0 text-sm font-sans font-semibold text-[#14797C] hover:text-[#1A1C1E] inline-flex items-center gap-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
            >
              {copy.viewAll} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => {
            const cover =
              article.coverImage != null && typeof article.coverImage === 'object'
                ? article.coverImage
                : null
            const categoryLabelRaw = article.category
              ? (CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS] ?? null)
              : null
            const categoryLabel = categoryLabelRaw ? pick(categoryLabelRaw, locale) : null

            return (
              <FadeIn key={article.id} delay={0.08 + i * 0.08}>
                <article className="group flex flex-col gap-4">
                  <div className="aspect-[3/2] relative w-full overflow-hidden rounded-sm">
                    {cover?.url ? (
                      <Image
                        src={cover.url}
                        alt={cover.alt ?? (article.title ?? '')}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
                        <Image
                          src={`/media/journal-${article.slug ?? article.id}.jpg`}
                          alt={copy.coverAlt(article.title ?? copy.heading)}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {categoryLabel && (
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 bg-[#F9FBFB] border border-[#E8F1F2] rounded-sm text-[#5B6168] self-start">
                        {categoryLabel}
                      </span>
                    )}
                    <h3 className="font-serif text-xl text-[#1A1C1E] leading-snug group-hover:text-[#14797C] transition-colors">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="font-sans text-sm text-[#5B6168] line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-1 gap-2 flex-wrap">
                      {article.publishedDate && (
                        <span className="text-[11px] font-mono text-[#5B6168] uppercase tracking-wide">
                          {formatDate(article.publishedDate, locale)}
                        </span>
                      )}
                      {article.slug && (
                        <Link
                          href={localeHref(`/journal/${article.slug}`, locale)}
                          className="text-xs font-sans font-bold text-[#14797C] hover:text-[#C5A059] inline-flex items-center gap-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
                          aria-label={copy.readMoreAria(article.title ?? copy.fallbackTitle)}
                        >
                          {copy.readMore} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
