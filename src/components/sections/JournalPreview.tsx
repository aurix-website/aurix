import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
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
    <section aria-labelledby="journal-heading" className="py-section bg-canvas">
      <div className="max-w-container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2
                id="journal-heading"
                className="text-display-lg font-semibold text-ink"
              >
                Journal
              </h2>
              <p className="mt-3 text-body-md text-muted max-w-xl">
                Koçluk, kariyer ve liderlik üzerine derinlemesine yazılar.
              </p>
            </div>
            <Link
              href="/journal"
              className="shrink-0 text-btn font-semibold text-ink inline-flex items-center gap-1 transition-colors hover:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
            >
              Tüm yazılar <span aria-hidden="true">→</span>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const cover =
                article.coverImage != null && typeof article.coverImage === 'object'
                  ? article.coverImage
                  : null
              const categoryLabel = article.category
                ? (CATEGORY_LABELS[article.category as keyof typeof CATEGORY_LABELS] ?? null)
                : null

              return (
                <article key={article.id} className="group flex flex-col gap-4">
                  <div className="aspect-[3/2] relative w-full overflow-hidden rounded-lg">
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
                        <ImagePlaceholder
                          filename={`journal-${article.slug ?? article.id}.jpg`}
                          width={800}
                          height={533}
                          fill
                          label={article.title ?? 'Journal kapak'}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {categoryLabel && (
                      <span className="text-caption font-medium px-3 py-1 bg-surface-card border border-hairline rounded-pill text-muted self-start">
                        {categoryLabel}
                      </span>
                    )}
                    <h3 className="text-title-md font-semibold text-ink leading-snug group-hover:text-primary-active transition-colors">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-body-sm text-body line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-1 gap-2 flex-wrap">
                      {article.publishedDate && (
                        <span className="text-caption text-muted">
                          {formatDate(article.publishedDate)}
                        </span>
                      )}
                      {article.slug && (
                        <Link
                          href={`/journal/${article.slug}`}
                          className="text-body-sm font-semibold text-ink inline-flex items-center gap-1 transition-colors hover:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                          aria-label={`${article.title ?? 'Yazı'} — devamını oku`}
                        >
                          Devamını oku <span aria-hidden="true">→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
