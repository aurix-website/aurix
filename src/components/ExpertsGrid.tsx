import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import { ExpertVisual } from '@/components/ExpertVisual'
import { STATIC_EXPERTS } from '@/lib/experts-data'
import { pick, localeHref } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    profileAria: (name: string) => `${name} uzman profili`,
    photoAlt: (name: string) => `${name} uzman görseli`,
    viewProfile: 'Profili İncele',
    ctaHeading: 'Doğru uzmanla başlayın',
    ctaBody: 'İhtiyacınızı anlamak ve en uygun uzmana yönlendirmek için kısa bir ön görüşme planlayalım.',
    ctaButton: 'Ön Görüşme Planla',
  },
  en: {
    profileAria: (name: string) => `${name} expert profile`,
    photoAlt: (name: string) => `${name} expert photo`,
    viewProfile: 'View Profile',
    ctaHeading: 'Start with the right expert',
    ctaBody: 'Let’s schedule a short introductory call to understand your need and guide you to the right expert.',
    ctaButton: 'Schedule an Introductory Call',
  },
} as const

function getAccent(index: number) {
  return ['#14797C', '#C5A059', '#82906F'][index % 3]
}

export function ExpertsGrid({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const copy = COPY[locale]
  const localeTag = locale === 'en' ? 'en' : 'tr-TR'
  const experts = [...STATIC_EXPERTS].sort((a, b) => a.name.localeCompare(b.name, localeTag))

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3" role="list">
        {experts.map((expert, index) => {
          const accent = getAccent(index)
          const title = expert.title ? pick(expert.title, locale) : undefined
          const shortCard = expert.shortCard ? pick(expert.shortCard, locale) : undefined

          return (
            <article
              key={expert.id}
              role="listitem"
              className="group overflow-hidden rounded-md border border-[#E2E5DE] bg-[#FCFDF9] shadow-[0_14px_38px_rgba(26,28,30,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(26,28,30,0.11)]"
            >
              <div className="grid h-full grid-cols-1 sm:min-h-[240px] sm:grid-cols-[42%_1fr]">
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
                  <div>
                    <h3 className="font-serif text-xl leading-tight text-[#1A1C1E]">
                      {expert.name}
                    </h3>
                    {title && <p className="mt-1 text-[11px] font-semibold text-[#5B6168]">{title}</p>}
                  </div>

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
