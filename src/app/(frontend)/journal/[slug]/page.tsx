import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { FinalCTA } from '@/components/sections/FinalCTA'
import {
  ARTICLES,
  CATEGORY_LABELS,
  getArticleBySlug,
  getRelatedArticles,
} from '@/lib/articles-data'

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.seoTitle,
    description: article.seoDescription,
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

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const related = getRelatedArticles(slug)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            datePublished: article.publishedDate,
            publisher: { '@type': 'Organization', name: 'AURIX Koçluk ve Danışmanlık' },
          }),
        }}
      />

      {/* Hero */}
      <section aria-labelledby="article-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl flex flex-col gap-5">
              <span className="text-caption font-medium px-3 py-1 bg-surface-elevated border border-hairline rounded-pill text-muted self-start">
                {CATEGORY_LABELS[article.category]}
              </span>
              <h1
                id="article-hero-heading"
                className="font-serif text-ink tracking-tight text-display-lg"
              >
                {article.title}
              </h1>
              <p className="text-body-md text-muted leading-relaxed">{article.excerpt}</p>
              <span className="text-caption text-muted">{formatDate(article.publishedDate)}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kapak görseli */}
      <section aria-hidden="true" className="pb-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="aspect-[16/7] relative w-full overflow-hidden rounded-sm">
            <ImagePlaceholder
              filename={`journal-${article.slug}.jpg`}
              width={1600}
              height={700}
              fill
              label={`${article.title} kapak görseli`}
            />
          </div>
        </div>
      </section>

      {/* Gövde */}
      <section aria-labelledby="article-hero-heading" className="pb-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-2xl flex flex-col gap-8">
            {article.body.map((section, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="flex flex-col gap-4">
                  {section.heading && (
                    <h2 className="font-serif text-xl text-ink">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((paragraph, j) => (
                    <p key={j} className="text-body-md text-body leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <div className="max-w-2xl mt-12 bg-surface-dark rounded-sm p-8">
              <h3 className="font-serif text-lg text-on-dark mb-2">
                Bu konuda destek almak ister misiniz?
              </h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed mb-4">
                Hangi hizmetin veya uzmanın size uygun olduğundan emin değilseniz, kısa bir ön
                görüşme ile ihtiyacınızı birlikte değerlendirebiliriz.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
              >
                Ön Görüşme Talep Et
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* İlgili yazılar */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="py-section bg-surface-soft">
          <div className="max-w-container mx-auto px-6">
            <FadeIn>
              <h2 id="related-heading" className="text-display-lg font-semibold text-ink mb-10">
                İlgili yazılar
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/journal/${item.slug}`}
                  className="block bg-surface-elevated border border-hairline rounded-sm p-5 hover:border-[#14797C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                >
                  <span className="text-caption text-muted">{CATEGORY_LABELS[item.category]}</span>
                  <h3 className="font-serif text-lg text-ink mt-1">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  )
}
