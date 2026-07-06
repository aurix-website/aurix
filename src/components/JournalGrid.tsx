'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
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
      <div className="flex flex-wrap gap-2.5 mb-10" role="group" aria-label="Kategoriye göre filtrele">
        {FILTERS.map((filter) => {
          const isActive = filter.value === active
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              aria-pressed={isActive}
              className={`text-sm font-semibold px-4 py-2 rounded-sm border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 ${
                isActive
                  ? 'bg-[#14797C] border-[#14797C] text-white'
                  : 'bg-surface-elevated border-hairline text-body hover:border-[#14797C] hover:text-[#14797C]'
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
        {filtered.map((article) => (
          <article key={article.slug} role="listitem" className="group flex flex-col gap-4">
            <Link
              href={`/journal/${article.slug}`}
              className="block overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
            >
              <div className="aspect-[3/2] relative w-full overflow-hidden rounded-sm">
                <ImagePlaceholder
                  filename={`journal-${article.slug}.jpg`}
                  width={800}
                  height={533}
                  fill
                  label={`${article.title} kapak görseli`}
                />
              </div>
            </Link>

            <div className="flex flex-col gap-2.5">
              <span className="text-caption font-medium px-3 py-1 bg-surface-elevated border border-hairline rounded-pill text-muted self-start">
                {CATEGORY_LABELS[article.category]}
              </span>
              <Link
                href={`/journal/${article.slug}`}
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
              >
                <h3 className="text-title-md font-semibold text-ink leading-snug group-hover:text-[#14797C] transition-colors">
                  {article.title}
                </h3>
              </Link>
              <p className="text-body-sm text-body line-clamp-2 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between mt-1 gap-2">
                <span className="text-caption text-muted">{formatDate(article.publishedDate)}</span>
                <Link
                  href={`/journal/${article.slug}`}
                  className="text-body-sm font-semibold text-[#14797C] hover:text-[#C5A059] inline-flex items-center gap-1 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
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
