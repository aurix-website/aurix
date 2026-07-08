'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ARTICLES, CATEGORY_LABELS, type ArticleCategory } from '@/lib/articles-data'

const ALL = 'Tüm Yazılar'
const FILTERS: Array<{ label: string; value: ArticleCategory | typeof ALL }> = [
  { label: ALL, value: ALL },
  ...(Object.entries(CATEGORY_LABELS) as Array<[ArticleCategory, string]>).map(
    ([value, label]) => ({ label, value }),
  ),
]

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

export function JournalGrid() {
  const [active, setActive] = useState<ArticleCategory | typeof ALL>(ALL)

  const filtered = useMemo(() => {
    if (active === ALL) return ARTICLES
    return ARTICLES.filter((article) => article.category === active)
  }, [active])

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2.5" role="group" aria-label="Kategoriye göre filtrele">
        {FILTERS.map((filter) => {
          const isActive = filter.value === active
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              aria-pressed={isActive}
              className={`rounded-sm border px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0] motion-safe:hover:scale-[1.04] motion-reduce:transition-none ${
                isActive
                  ? 'border-[#14797C] bg-[#14797C] text-white'
                  : 'border-hairline bg-surface-elevated text-body hover:border-[#14797C] hover:text-[#14797C]'
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {filtered.map((article) => (
          <article
            key={article.slug}
            role="listitem"
            className="group flex h-full flex-col overflow-hidden rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-3 shadow-[0_12px_35px_rgba(26,28,30,0.05)] transition-all duration-300 hover:border-[#14797C]/45 hover:shadow-[0_20px_48px_rgba(26,28,30,0.09)] motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
          >
            <Link
              href={`/journal/${article.slug}`}
              className="block overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm">
                <div className="absolute inset-0 transition-transform duration-500 motion-safe:group-hover:scale-[1.04] motion-reduce:transition-none">
                  <Image
                    src={`/media/journal-${article.slug}.jpg`}
                    alt={`${article.title} kapak gorseli`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>

            <div className="flex flex-1 flex-col gap-2.5 px-1 pb-1 pt-4">
              <span className="self-start rounded-pill border border-hairline bg-surface-elevated px-3 py-1 text-caption font-medium text-muted">
                {CATEGORY_LABELS[article.category]}
              </span>
              <Link
                href={`/journal/${article.slug}`}
                className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
              >
                <h3 className="text-title-md font-semibold leading-snug text-ink transition-colors group-hover:text-[#14797C]">
                  {article.title}
                </h3>
              </Link>
              <p className="line-clamp-2 text-body-sm leading-relaxed text-body">
                {article.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                <span className="text-caption text-muted">{formatDate(article.publishedDate)}</span>
                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-1 rounded-sm text-body-sm font-semibold text-[#14797C] transition-colors hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Devamını oku <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
