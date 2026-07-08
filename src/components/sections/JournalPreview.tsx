import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { getOptionalPayloadClient } from '@/lib/payload-client'
import { ARTICLES, CATEGORY_LABELS } from '@/lib/articles-data'

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

const STATIC_ARTICLES: Article[] = ARTICLES.slice(0, 3).map((a) => ({
  id: a.slug,
  title: a.title,
  slug: a.slug,
  excerpt: a.excerpt,
  coverImage: null,
  category: a.category,
  publishedDate: a.publishedDate,
}))

async function getLatestArticles(): Promise<Article[]> {
  try {
    const payload = await getOptionalPayloadClient()
    if (!payload) return STATIC_ARTICLES

    const result = await payload.find({
      collection: 'articles',
      sort: '-publishedDate',
      limit: 3,
      depth: 1,
    })

    if (result.docs.length === 0) return STATIC_ARTICLES
    return result.docs as unknown as Article[]
  } catch {
    return STATIC_ARTICLES
  }
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return ''
  }
}

export async function JournalPreview() {
  const articles = await getLatestArticles()

  return (
    <section aria-labelledby="journal-heading" className="py-24 bg-[#F6F7F1]">
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase block mb-3">
                GÜNCEL YAZILAR
              </span>
              <h2
                id="journal-heading"
                className="font-serif text-[#1A1C1E] tracking-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2' }}
              >
                Journal
              </h2>
              <p className="mt-3 font-sans text-[#5B6168] leading-relaxed max-w-lg" style={{ fontSize: '1.0625rem' }}>
                Koçluk, kariyer ve liderlik üzerine derinlemesine yazılar.
              </p>
            </div>
            <Link
              href="/journal"
              className="shrink-0 text-sm font-sans font-semibold text-[#14797C] hover:text-[#1A1C1E] inline-flex items-center gap-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
            >
              Tüm yazılar <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => {
            const cover =
              article.coverImage != null && typeof article.coverImage === 'object'
                ? article.coverImage
                : null
            const categoryLabel = article.category
              ? (CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS] ?? null)
              : null

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
                          alt={`${article.title ?? 'Journal'} kapak gorseli`}
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
                          {formatDate(article.publishedDate)}
                        </span>
                      )}
                      {article.slug && (
                        <Link
                          href={`/journal/${article.slug}`}
                          className="text-xs font-sans font-bold text-[#14797C] hover:text-[#C5A059] inline-flex items-center gap-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
                          aria-label={`${article.title ?? 'Yazı'} — devamını oku`}
                        >
                          Devamını oku <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
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
