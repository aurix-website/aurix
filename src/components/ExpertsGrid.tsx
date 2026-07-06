'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { STATIC_EXPERTS, EXPERT_PLACEHOLDERS, EXPERT_FILTER_CATEGORIES } from '@/lib/experts-data'

const ALL = 'Tüm Uzmanlar'
const FILTERS = [ALL, ...EXPERT_FILTER_CATEGORIES]

export function ExpertsGrid() {
  const [active, setActive] = useState<string>(ALL)

  const filtered = useMemo(() => {
    if (active === ALL) return STATIC_EXPERTS
    return STATIC_EXPERTS.filter((expert) => expert.filterCategories?.includes(active))
  }, [active])

  return (
    <div>
      <div className="flex flex-wrap gap-2.5 mb-4" role="group" aria-label="Uzmanlık alanına göre filtrele">
        {FILTERS.map((filter) => {
          const isActive = filter === active
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
              className={`text-sm font-semibold px-4 py-2 rounded-sm border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 ${
                isActive
                  ? 'bg-[#14797C] border-[#14797C] text-white'
                  : 'bg-surface-elevated border-hairline text-body hover:border-[#14797C] hover:text-[#14797C]'
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      <div className="mb-10 bg-surface-dark rounded-sm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg text-on-dark mb-1">
            Hangi uzmanla başlayacağınızı bilmiyor musunuz?
          </h3>
          <p className="text-body-sm text-on-dark-soft">
            Kısa bir ön görüşmede ihtiyacınızı birlikte değerlendirir, sizi uygun uzman ve hizmet
            alanıyla eşleştiririz.
          </p>
        </div>
        <Link
          href="/on-gorusme?interest=emin-degilim"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
        >
          Uygun Uzmanı Birlikte Belirleyelim
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
        {filtered.map((expert) => {
          const photo =
            expert.photo != null && typeof expert.photo === 'object' ? expert.photo : null
          const placeholder =
            (expert.slug && EXPERT_PLACEHOLDERS[expert.slug]) ?? `expert-${expert.id}.jpg`

          return (
            <article key={expert.id} role="listitem" className="flex flex-col gap-4">
              <Link
                href={`/uzmanlar/${expert.slug}`}
                className="block overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                aria-label={`${expert.name} — uzman profili`}
              >
                <div className="aspect-[4/5] relative w-full overflow-hidden rounded-sm">
                  {photo?.url ? (
                    <Image
                      src={photo.url}
                      alt={photo.alt ?? expert.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <ImagePlaceholder
                      filename={placeholder}
                      width={480}
                      height={600}
                      fill
                      label={`${expert.name} portre fotoğrafı`}
                    />
                  )}
                </div>
              </Link>

              <div className="flex flex-col gap-2">
                <div>
                  <Link
                    href={`/uzmanlar/${expert.slug}`}
                    className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
                  >
                    <h3 className="font-serif text-xl text-ink hover:text-[#14797C] transition-colors">
                      {expert.name}
                    </h3>
                  </Link>
                  {expert.title && <p className="text-caption text-muted mt-0.5">{expert.title}</p>}
                </div>

                {expert.shortCard && (
                  <p className="text-body-sm text-body leading-relaxed">{expert.shortCard}</p>
                )}

                {expert.listingTags && expert.listingTags.length > 0 && (
                  <ul className="flex flex-wrap gap-1.5 mt-1" aria-label={`${expert.name} etiketleri`}>
                    {expert.listingTags.map((tag) => (
                      <li
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 bg-surface-elevated border border-hairline rounded-sm text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={`/uzmanlar/${expert.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors self-start mt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
                >
                  {expert.listingCta ?? 'Profili İncele'}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
