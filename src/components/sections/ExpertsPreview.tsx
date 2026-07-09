import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ExpertVisual } from '@/components/ExpertVisual'
import { FadeIn } from '@/components/ui/FadeIn'
import { getOptionalPayloadClient } from '@/lib/payload-client'
import { STATIC_EXPERTS, type Expert } from '@/lib/experts-data'
import { pick, localeHref } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    founderRole: 'KURUCU & BAŞ KOÇLUK DANIŞMANI',
    founderEyebrow: 'Kurucumuz',
    founderName: 'Kaan Yazıcı',
    founderBioParagraphs: [
      'ICF onaylı koç ve danışman. Bireysel koçluk, takım dinamikleri ve liderlik gelişimi alanlarında 200’den fazla saatlik deneyim. Türkiye ve uluslararası arenada danışanlarıyla çalışmaktadır.',
      'Erickson metodolojisi çerçevesinde yapılandırılmış koçluk seansları ve kurumsal programlar sunmaktadır.',
    ],
    founderQuote: 'Koçluk, cevapları vermek değil; danışanın kendi cevabını bulmasına alan açmaktır.',
    viewProfile: 'Profili İncele',
    photoAlt: (name: string) => `${name} uzman görseli`,
    profileAria: (name: string) => `${name} — uzman profili`,
    focusAreasAria: (name: string) => `${name} odak alanları`,
    eyebrow: 'Uzmanlarımız',
    heading: 'Farklı uzmanlık, ortak metodoloji.',
    viewAll: 'Tüm uzmanlar',
  },
  en: {
    founderRole: 'FOUNDER & LEAD COACHING CONSULTANT',
    founderEyebrow: 'Our Founder',
    founderName: 'Kaan Yazıcı',
    founderBioParagraphs: [
      'ICF-certified coach and consultant with more than 200 hours of experience in personal coaching, team dynamics, and leadership development. Works with clients across Turkey and internationally.',
      'Delivers structured coaching sessions and corporate programs within the Erickson methodology framework.',
    ],
    founderQuote: 'Coaching is not about giving answers; it is about creating space for the client to find their own.',
    viewProfile: 'View Profile',
    photoAlt: (name: string) => `${name} expert photo`,
    profileAria: (name: string) => `${name} — expert profile`,
    focusAreasAria: (name: string) => `${name} focus areas`,
    eyebrow: 'Our Experts',
    heading: 'Different expertise, one shared methodology.',
    viewAll: 'All experts',
  },
} as const

async function getFeaturedExperts(locale: Locale): Promise<Expert[]> {
  try {
    const payload = await getOptionalPayloadClient()
    if (!payload) return STATIC_EXPERTS

    const result = await payload.find({
      collection: 'experts',
      where: { featured: { equals: true } },
      sort: 'order',
      limit: 3,
      depth: 1,
      locale,
      fallbackLocale: 'tr',
    })

    if (result.docs.length === 0) return STATIC_EXPERTS
    return result.docs as unknown as Expert[]
  } catch {
    return STATIC_EXPERTS
  }
}

function FounderCard({ expert, locale }: { expert: Expert; locale: Locale }) {
  const copy = COPY[locale]
  const href = localeHref(expert.slug ? `/uzmanlar/${expert.slug}` : '/uzmanlar', locale)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Fotoğraf kartı */}
      <div className="max-w-sm mx-auto lg:mx-0">
        <div className="bg-white border border-[#E2E5DE] rounded-sm p-3 skew-y-1 hover:skew-y-0 transition-transform duration-500">
          <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
            <ExpertVisual
              expert={expert}
              alt={copy.photoAlt(expert.name)}
              sizes="(max-width: 1024px) 80vw, 40vw"
              imageClassName="object-cover object-top grayscale-[25%] hover:grayscale-0 transition-all duration-300"
              priority
            />
          </div>
          <div className="mt-3 text-center">
            <span className="font-serif text-lg text-[#1A1C1E] block">{expert.name}</span>
            <span className="text-[10px] font-mono text-[#5B6168] uppercase tracking-widest">
              {copy.founderRole}
            </span>
          </div>
        </div>
      </div>

      {/* Metin içeriği */}
      <div className="flex flex-col gap-6">
        <div>
          <span className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase mb-3">
            {copy.founderEyebrow}
          </span>
          <h2
            className="font-serif text-[#1A1C1E] tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.15' }}
          >
            {copy.founderName}
          </h2>
        </div>

        {copy.founderBioParagraphs.map((paragraph) => (
          <p key={paragraph} className="font-sans text-[#5B6168] leading-relaxed" style={{ fontSize: '1.0625rem' }}>
            {paragraph}
          </p>
        ))}

        <blockquote className="border-l-2 border-[#C5A059] pl-4">
          <p
            className="font-serif text-[#1A1C1E] italic leading-relaxed"
            style={{ fontSize: '1.125rem' }}
          >
            &ldquo;{copy.founderQuote}&rdquo;
          </p>
          <cite className="block mt-2 text-[11px] font-mono tracking-widest text-[#5B6168] uppercase not-italic">
            {copy.founderName}
          </cite>
        </blockquote>

        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
        >
          {copy.viewProfile}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

    </div>
  )
}

function SecondaryExpertCard({ expert, locale }: { expert: Expert; locale: Locale }) {
  const copy = COPY[locale]
  const href = localeHref(expert.slug ? `/uzmanlar/${expert.slug}` : '/uzmanlar', locale)
  const title = expert.title ? pick(expert.title, locale) : undefined
  const areas = (expert.expertiseAreas ? pick(expert.expertiseAreas, locale) : [])
    .slice(0, 3)
    .map((a) => a.item)
    .filter((item): item is string => Boolean(item))

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

        {areas.length > 0 && (
          <ul
            className="flex flex-wrap gap-1.5 mt-1"
            aria-label={copy.focusAreasAria(expert.name)}
          >
            {areas.map((area) => (
              <li
                key={area}
                className="text-[11px] font-mono px-2.5 py-1 bg-[#F9FBFB] border border-[#E8F1F2] rounded-sm text-[#5B6168]"
              >
                {area}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export async function ExpertsPreview({ locale = DEFAULT_LOCALE }: { locale?: Locale } = {}) {
  const experts = await getFeaturedExperts(locale)
  const [founder, ...rest] = experts
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

        {/* Kurucu kartı */}
        {founder && (
          <FadeIn delay={0.08}>
            <FounderCard expert={founder} locale={locale} />
          </FadeIn>
        )}

        {/* Diğer uzmanlar */}
        {rest.length > 0 && (
          <div className="mt-16 border-t border-[#E2E5DE] pt-16">
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {rest.map((expert) => (
                  <SecondaryExpertCard key={expert.id} expert={expert} locale={locale} />
                ))}
              </div>
            </FadeIn>
          </div>
        )}

      </div>
    </section>
  )
}
