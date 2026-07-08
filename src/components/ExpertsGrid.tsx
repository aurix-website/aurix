'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BriefcaseBusiness,
  Crown,
  Grid2X2,
  GraduationCap,
  Search,
  Target,
  User,
  Users,
} from 'lucide-react'
import { STATIC_EXPERTS, EXPERT_PLACEHOLDERS, EXPERT_FILTER_CATEGORIES } from '@/lib/experts-data'

const ALL = 'Tümü'
const FILTERS = [ALL, ...EXPERT_FILTER_CATEGORIES]

function getCategoryIcon(label?: string) {
  if (!label) return User
  if (label.includes('Yönetici')) return Crown
  if (label.includes('Kurumsal')) return BriefcaseBusiness
  if (label.includes('Öğrenci')) return GraduationCap
  if (label.includes('Takım')) return Users
  if (label.includes('Kariyer')) return Target
  return User
}

function getAccent(index: number) {
  return ['#14797C', '#C5A059', '#82906F'][index % 3]
}

export function ExpertsGrid() {
  const [active, setActive] = useState<string>(ALL)
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('name')

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('tr-TR')
    const result = STATIC_EXPERTS.filter((expert) => {
      const matchesFilter = active === ALL || expert.filterCategories?.includes(active)
      const haystack = [
        expert.name,
        expert.title,
        expert.shortCard,
        ...(expert.listingTags ?? []),
        ...(expert.filterCategories ?? []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLocaleLowerCase('tr-TR')

      return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery))
    })

    return [...result].sort((a, b) => {
      if (sort === 'category') {
        return (a.filterCategories?.[0] ?? '').localeCompare(b.filterCategories?.[0] ?? '', 'tr')
      }
      return a.name.localeCompare(b.name, 'tr')
    })
  }, [active, query, sort])

  return (
    <div>
      <div className="mb-8 rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-4 shadow-[0_14px_40px_rgba(26,28,30,0.05)]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <label className="relative flex min-h-11 w-full items-center md:max-w-[360px]">
            <Search className="absolute left-3 h-4 w-4 text-[#5B6168]" aria-hidden="true" />
            <span className="sr-only">Uzman ara</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Uzman adı veya uzmanlık ara"
              className="h-11 w-full rounded-sm border border-[#E2E5DE] bg-white pl-10 pr-3 text-sm text-[#1A1C1E] outline-none transition-colors placeholder:text-[#8A929A] focus:border-[#14797C]"
            />
            </label>

            <div className="flex items-center justify-between gap-2 md:justify-end">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#8A929A]">
                Sırala
              </span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-10 min-w-[150px] rounded-sm border border-[#E2E5DE] bg-white px-3 text-xs font-semibold text-[#5B6168] outline-none transition-colors focus:border-[#14797C]"
                aria-label="Uzmanları sırala"
              >
                <option value="name">İsme göre</option>
                <option value="category">Uzmanlığa göre</option>
              </select>
              <span className="hidden h-10 w-10 items-center justify-center rounded-sm border border-[#E2E5DE] bg-white text-[#14797C] sm:inline-flex">
                <Grid2X2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>

          <div
            className="flex flex-wrap items-center gap-2 border-t border-[#E2E5DE] pt-4"
            role="group"
            aria-label="Uzmanlık alanına göre filtrele"
          >
            {FILTERS.map((filter) => {
              const isActive = filter === active
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  aria-pressed={isActive}
                  className={`h-9 rounded-full border px-3 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 ${
                    isActive
                      ? 'border-[#14797C] bg-[#14797C] text-white'
                      : 'border-[#E2E5DE] bg-white text-[#5B6168] hover:border-[#14797C] hover:text-[#14797C]'
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-8 text-center">
          <h3 className="font-serif text-2xl text-[#1A1C1E]">Uygun uzman bulunamadı.</h3>
          <p className="mt-2 text-sm text-[#5B6168]">Arama veya filtre seçimini değiştirerek tekrar deneyebilirsiniz.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3" role="list">
          {filtered.map((expert, index) => {
            const photo =
              expert.photo != null && typeof expert.photo === 'object' ? expert.photo : null
            const placeholder =
              (expert.slug && EXPERT_PLACEHOLDERS[expert.slug]) ?? `expert-${expert.id}.jpg`
            const accent = getAccent(index)
            const Icon = getCategoryIcon(expert.filterCategories?.[0])

            return (
              <article
                key={expert.id}
                role="listitem"
                className="group overflow-hidden rounded-md border border-[#E2E5DE] bg-[#FCFDF9] shadow-[0_14px_38px_rgba(26,28,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(26,28,30,0.11)]"
              >
                <div className="grid min-h-[240px] grid-cols-[42%_1fr]">
                  <Link
                    href={`/uzmanlar/${expert.slug}`}
                    className="relative block overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                    aria-label={`${expert.name} uzman profili`}
                  >
                    <div className="absolute inset-y-0 left-0 w-4" style={{ backgroundColor: accent }} aria-hidden="true" />
                    <div className="absolute -left-5 top-0 h-full w-16 rounded-r-[60%] bg-[#FCFDF9]" aria-hidden="true" />
                    <div className="absolute inset-0 left-4">
                      {photo?.url ? (
                        <Image
                          src={photo.url}
                          alt={photo.alt ?? expert.name}
                          fill
                          sizes="(max-width: 768px) 42vw, 240px"
                          className="object-cover object-top grayscale-[12%] transition-all duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
                        />
                      ) : (
                        <Image
                          src={`/media/${placeholder}`}
                          alt={`${expert.name} uzman gorseli`}
                          fill
                          sizes="(max-width: 768px) 42vw, 240px"
                          className="object-cover object-top grayscale-[12%] transition-all duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
                        />
                      )}
                    </div>
                  </Link>

                  <div className="relative flex flex-col p-5">
                    <div
                      className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border bg-white shadow-[0_8px_24px_rgba(26,28,30,0.08)]"
                      style={{ borderColor: `${accent}33`, color: accent }}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div className="pr-12">
                      <h3 className="font-serif text-xl leading-tight text-[#1A1C1E]">
                        {expert.name}
                      </h3>
                      {expert.title && <p className="mt-1 text-[11px] font-semibold text-[#5B6168]">{expert.title}</p>}
                    </div>

                    {expert.listingTags && expert.listingTags.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${expert.name} etiketleri`}>
                        {expert.listingTags.slice(0, 3).map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-[#E2E5DE] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#5B6168]"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}

                    {expert.shortCard && (
                      <p className="mt-4 line-clamp-4 text-xs leading-relaxed text-[#5B6168]">
                        {expert.shortCard}
                      </p>
                    )}

                    <Link
                      href={`/uzmanlar/${expert.slug}`}
                      className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-bold text-[#14797C] transition-colors hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
                    >
                      Profili İncele
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}

      <div className="mt-8 rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-5 shadow-[0_12px_35px_rgba(26,28,30,0.05)] sm:p-6">
        <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C5A059]/35 bg-[#C5A059]/10 text-[#C5A059]">
            <Users className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#1A1C1E]">Doğru uzmanla başlayın</h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#5B6168]">
              İhtiyacınızı anlamak ve en uygun uzmana yönlendirmek için kısa bir ön görüşme planlayalım.
            </p>
          </div>
          <Link
            href="/iletisim?interest=emin-degilim"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#14797C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f5f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
          >
            Ön Görüşme Planla
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}
