import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ExpertVisual } from '@/components/ExpertVisual'
import { FadeIn } from '@/components/ui/FadeIn'
import { getOptionalPayloadClient } from '@/lib/payload-client'
import { STATIC_EXPERTS, type Expert } from '@/lib/experts-data'
import { pick, localeHref } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

const FEATURED_LIMIT = 3

const COPY = {
  tr: {
    photoAlt: (name: string) => `${name} uzman görseli`,
    profileAria: (name: string) => `${name} — uzman profili`,
    eyebrow: 'Uzmanlarımız',
    heading: 'Farklı uzmanlık, ortak metodoloji.',
    viewAll: 'Tüm uzmanlar',
  },
  en: {
    photoAlt: (name: string) => `${name} expert photo`,
    profileAria: (name: string) => `${name} — expert profile`,
    eyebrow: 'Our Experts',
    heading: 'Different expertise, one shared methodology.',
    viewAll: 'All experts',
  },
} as const

async function getFeaturedExperts(locale: Locale): Promise<Expert[]> {
  try {
    const payload = await getOptionalPayloadClient()
    if (!payload) return STATIC_EXPERTS.slice(0, FEATURED_LIMIT)

    const result = await payload.find({
      collection: 'experts',
      where: { featured: { equals: true } },
      sort: 'order',
      limit: FEATURED_LIMIT,
      depth: 1,
      locale,
      fallbackLocale: 'tr',
    })

    if (result.docs.length === 0) return STATIC_EXPERTS.slice(0, FEATURED_LIMIT)
    return result.docs as unknown as Expert[]
  } catch {
    return STATIC_EXPERTS.slice(0, FEATURED_LIMIT)
  }
}

function ExpertCard({ expert, locale }: { expert: Expert; locale: Locale }) {
  const copy = COPY[locale]
  const href = localeHref(expert.slug ? `/uzmanlar/${expert.slug}` : '/uzmanlar', locale)
  const title = expert.title ? pick(expert.title, locale) : undefined

  return (
    <article className="group flex flex-col gap-4">
      <Link
        href={href}
        className="block overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
        aria-label={copy.profileAria(expert.name)}
      >
        <div className="aspect-[3/4] relative w-full overflow-hidden rounded-sm">
          <ExpertVisual
            expert={expert}
            alt={copy.photoAlt(expert.name)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            imageClassName="object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-1.5">
        <Link
          href={href}
          className="self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
        >
          <h3
            className="font-serif text-[#1A1C1E] transition-colors duration-200 group-hover:text-[#14797C]"
            style={{ fontSize: '1.25rem', lineHeight: '1.3' }}
          >
            {expert.name}
          </h3>
        </Link>

        {title && (
          <p className="text-sm font-sans text-[#5B6168]">{title}</p>
        )}
      </div>
    </article>
  )
}

export async function ExpertsPreview({ locale = DEFAULT_LOCALE }: { locale?: Locale } = {}) {
  const experts = await getFeaturedExperts(locale)
  const copy = COPY[locale]

  return (
    <section
      aria-labelledby="experts-heading"
      className="border-t border-[#E2E5DE] pt-16"
      style={{ paddingBottom: 'var(--section-padding-y)', backgroundColor: 'var(--color-surface)' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-max)' }}>

        <FadeIn>
          <div className="mb-12">
            <span className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase mb-3">
              {copy.eyebrow}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2
                id="experts-heading"
                className="font-serif text-[#1A1C1E] tracking-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.15' }}
              >
                {copy.heading}
              </h2>
              <Link
                href={localeHref('/uzmanlar', locale)}
                className="shrink-0 text-sm font-bold text-[#14797C] hover:text-[#C5A059] inline-flex items-center gap-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
              >
                {copy.viewAll}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {experts.length > 0 && (
          <FadeIn delay={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {experts.map((expert) => (
                <ExpertCard key={expert.id} expert={expert} locale={locale} />
              ))}
            </div>
          </FadeIn>
        )}

      </div>
    </section>
  )
}
