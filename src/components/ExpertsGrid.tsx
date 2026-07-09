'use client'

import { useMemo, useState } from 'react'
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
import { ExpertVisual } from '@/components/ExpertVisual'
import { STATIC_EXPERTS, EXPERT_FILTER_CATEGORIES } from '@/lib/experts-data'
import { pick, localeHref } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

const ALL_TR = 'Tümü'
const ALL_EN = 'All'

const COPY = {
  tr: {
    searchSr: 'Uzman ara',
    searchPlaceholder: 'Uzman adı veya uzmanlık ara',
    sortLabel: 'Sırala',
    sortAria: 'Uzmanları sırala',
    sortByName: 'İsme göre',
    sortByCategory: 'Uzmanlığa göre',
    filterAria: 'Uzmanlık alanına göre filtrele',
    emptyHeading: 'Uygun uzman bulunamadı.',
    emptyBody: 'Arama veya filtre seçimini değiştirerek tekrar deneyebilirsiniz.',
    profileAria: (name: string) => `${name} uzman profili`,
    photoAlt: (name: string) => `${name} uzman görseli`,
    tagsAria: (name: string) => `${name} etiketleri`,
    viewProfile: 'Profili İncele',
    ctaHeading: 'Doğru uzmanla başlayın',
    ctaBody: 'İhtiyacınızı anlamak ve en uygun uzmana yönlendirmek için kısa bir ön görüşme planlayalım.',
    ctaButton: 'Ön Görüşme Planla',
  },
  en: {
    searchSr: 'Search experts',
    searchPlaceholder: 'Search by expert name or specialty',
    sortLabel: 'Sort',
    sortAria: 'Sort experts',
    sortByName: 'By name',
    sortByCategory: 'By specialty',
    filterAria: 'Filter by area of expertise',
    emptyHeading: 'No matching expert found.',
    emptyBody: 'Try changing your search or filter selection.',
    profileAria: (name: string) => `${name} expert profile`,
    photoAlt: (name: string) => `${name} expert photo`,
    tagsAria: (name: string) => `${name} tags`,
    viewProfile: 'View Profile',
    ctaHeading: 'Start with the right expert',
    ctaBody: 'Let’s schedule a short introductory call to understand your need and guide you to the right expert.',
    ctaButton: 'Schedule an Introductory Call',
  },
} as const

function getCategoryIcon(label?: string) {
  if (!label) return User
  if (label.includes('Yönetici') || label.includes('Executive')) return Crown
  if (label.includes('Kurumsal') || label.includes('Corporate')) return BriefcaseBusiness
  if (label.includes('Öğrenci') || label.includes('Student')) return GraduationCap
  if (label.includes('Takım') || label.includes('Team')) return Users
  if (label.includes('Kariyer') || label.includes('Career')) return Target
  return User
}

function getAccent(index: number) {
  return ['#14797C', '#C5A059', '#82906F'][index % 3]
}

export function ExpertsGrid({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const copy = COPY[locale]
  const ALL = locale === 'en' ? ALL_EN : ALL_TR
  const FILTERS = [ALL, ...pick(EXPERT_FILTER_CATEGORIES, locale)]
  const [active, setActive] = useState<string>(ALL)
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('name')
  const localeTag = locale === 'en' ? 'en' : 'tr-TR'

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase(localeTag)
    const result = STATIC_EXPERTS.filter((expert) => {
      const filterCategories = expert.filterCategories ? pick(expert.filterCategories, locale) : undefined
      const listingTags = expert.listingTags ? pick(expert.listingTags, locale) : undefined
      const matchesFilter = active === ALL || filterCategories?.includes(active)
      const haystack = [
        expert.name,
        expert.title ? pick(expert.title, locale) : undefined,
        expert.shortCard ? pick(expert.shortCard, locale) : undefined,
        ...(listingTags ?? []),
        ...(filterCategories ?? []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLocaleLowerCase(localeTag)

      return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery))
    })

    return [...result].sort((a, b) => {
      const aCategories = a.filterCategories ? pick(a.filterCategories, locale) : []
      const bCategories = b.filterCategories ? pick(b.filterCategories, locale) : []
      if (sort === 'category') {
        return (aCategories[0] ?? '').localeCompare(bCategories[0] ?? '', localeTag)
      }
      return a.name.localeCompare(b.name, localeTag)
    })
  }, [active, query, sort, locale, ALL, localeTag])

  return (
    <div>
      <div className="mb-8 rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-4 shadow-[0_14px_40px_rgba(26,28,30,0.05)]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <label className="relative flex min-h-11 w-full items-center md:max-w-[360px]">
            <Search className="absolute left-3 h-4 w-4 text-[#5B6168]" aria-hidden="true" />
            <span className="sr-only">{copy.searchSr}</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.searchPlaceholder}
              className="h-11 w-full rounded-sm border border-[#E2E5DE] bg-white pl-10 pr-3 text-sm text-[#1A1C1E] outline-none transition-colors placeholder:text-[#8A929A] focus:border-[#14797C]"
            />
            </label>

            <div className="flex items-center justify-between gap-2 md:justify-end">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#8A929A]">
                {copy.sortLabel}
              </span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-10 min-w-[150px] rounded-sm border border-[#E2E5DE] bg-white px-3 text-xs font-semibold text-[#5B6168] outline-none transition-colors focus:border-[#14797C]"
                aria-label={copy.sortAria}
              >
                <option value="name">{copy.sortByName}</option>
                <option value="category">{copy.sortByCategory}</option>
              </select>
              <span className="hidden h-10 w-10 items-center justify-center rounded-sm border border-[#E2E5DE] bg-white text-[#14797C] sm:inline-flex">
                <Grid2X2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>

          <div
            className="flex flex-wrap items-center gap-2 border-t border-[#E2E5DE] pt-4"
            role="group"
            aria-label={copy.filterAria}
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
          <h3 className="font-serif text-2xl text-[#1A1C1E]">{copy.emptyHeading}</h3>
          <p className="mt-2 text-sm text-[#5B6168]">{copy.emptyBody}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3" role="list">
          {filtered.map((expert, index) => {
            const accent = getAccent(index)
            const filterCategories = expert.filterCategories ? pick(expert.filterCategories, locale) : undefined
            const listingTags = expert.listingTags ? pick(expert.listingTags, locale) : undefined
            const title = expert.title ? pick(expert.title, locale) : undefined
            const shortCard = expert.shortCard ? pick(expert.shortCard, locale) : undefined
            const Icon = getCategoryIcon(filterCategories?.[0])

            return (
              <article
                key={expert.id}
                role="listitem"
                className="group overflow-hidden rounded-md border border-[#E2E5DE] bg-[#FCFDF9] shadow-[0_14px_38px_rgba(26,28,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(26,28,30,0.11)]"
              >
                <div className="grid grid-cols-1 sm:min-h-[240px] sm:grid-cols-[42%_1fr]">
                  <Link
                    href={localeHref(`/uzmanlar/${expert.slug}`, locale)}
                    className="relative block min-h-[230px] overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 sm:min-h-0"
                    aria-label={copy.profileAria(expert.name)}
                  >
                    <div className="absolute inset-y-0 left-0 w-4" style={{ backgroundColor: accent }} aria-hidden="true" />
                    <div className="absolute -left-5 top-0 hidden h-full w-16 rounded-r-[60%] bg-[#FCFDF9] sm:block" aria-hidden="true" />
                    <div className="absolute inset-0 left-4">
                      <ExpertVisual
                        expert={expert}
                        alt={copy.photoAlt(expert.name)}
                        sizes="(max-width: 768px) 42vw, 240px"
                        imageClassName="object-cover object-top grayscale-[12%] transition-all duration-300 group-hover:scale-[1.03] group-hover:grayscale-0"
                      />
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
                      {title && <p className="mt-1 text-[11px] font-semibold text-[#5B6168]">{title}</p>}
                    </div>

                    {listingTags && listingTags.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={copy.tagsAria(expert.name)}>
                        {listingTags.slice(0, 3).map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-[#E2E5DE] bg-white px-2.5 py-1 text-[10px] font-semibold text-[#5B6168]"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}

                    {shortCard && (
                      <p className="mt-4 line-clamp-4 text-xs leading-relaxed text-[#5B6168]">
                        {shortCard}
                      </p>
                    )}

                    <Link
                      href={localeHref(`/uzmanlar/${expert.slug}`, locale)}
                      className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-bold text-[#14797C] transition-colors hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
                    >
                      {copy.viewProfile}
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
            <h3 className="font-serif text-2xl text-[#1A1C1E]">{copy.ctaHeading}</h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#5B6168]">
              {copy.ctaBody}
            </p>
          </div>
          <Link
            href={localeHref('/iletisim?interest=emin-degilim', locale)}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#14797C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f5f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
          >
            {copy.ctaButton}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}
