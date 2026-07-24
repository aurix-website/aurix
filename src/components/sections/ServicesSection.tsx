import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/services-data'
import { pick, localeHref } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    eyebrow: 'Uzmanlığımız, etkiniz.',
    heading: 'Hangi Alanda Destek Arıyorsunuz?',
    body: 'Size uygun alanı seçin, hizmetin detaylarını inceleyin.',
    viewAll: 'Tümünü gör',
    cardAria: 'hizmetini incele',
    explore: 'İncele',
  },
  en: {
    eyebrow: 'Our expertise, your impact.',
    heading: 'Which Area Are You Looking For Support In?',
    body: 'Choose the area that fits you and explore the details of the service.',
    viewAll: 'View all',
    cardAria: 'service',
    explore: 'Explore',
  },
} as const

export function ServicesSection({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const copy = COPY[locale]

  return (
    <section className="relative overflow-hidden bg-[#F6F7F1] py-20 sm:py-24">
      <div className="pointer-events-none absolute right-[-120px] top-[-170px] h-[380px] w-[520px] rounded-full border border-[#C5A059]/15" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-40px] top-[-120px] h-[320px] w-[430px] rounded-full border border-[#C5A059]/10" aria-hidden="true" />

      <div className="relative max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-7 w-px bg-[#C5A059]" aria-hidden="true" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                {copy.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-display-serif-md text-[#1A1C1E]">
              {copy.heading}
            </h2>
            <div className="mt-4 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C5A059]" aria-hidden="true" />
              <p className="font-sans text-sm text-[#5B6168] leading-relaxed">
                {copy.body}
              </p>
            </div>
          </div>
          <Link
            href={localeHref('/hizmetler', locale)}
            className="group inline-flex items-center gap-2 self-start border-b border-[#14797C]/35 pb-1 text-sm font-sans font-semibold text-[#14797C] transition-colors hover:text-[#1A1C1E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-4 rounded-sm sm:self-auto"
          >
            {copy.viewAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            const isGold = service.accent.toLowerCase() === '#c5a059'
            const accentSoft = isGold ? '#F4E8C9' : '#DCEFF0'
            const accentDeep = service.accent
            const shadowColor = isGold ? 'rgba(197,160,89,0.18)' : 'rgba(20,121,124,0.16)'

            return (
              <Link
                key={service.id}
                href={localeHref(`/hizmetler/${service.id}`, locale)}
                className="group relative min-h-[265px] overflow-hidden rounded-md border border-[#E2E5DE] bg-[#FCFDF9] text-left shadow-[0_18px_45px_rgba(26,28,30,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(26,28,30,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14797C] focus-visible:ring-offset-2"
                aria-label={`${pick(service.title, locale)} ${copy.cardAria}`}
              >
                <div
                  className="absolute bottom-0 left-0 top-0 w-16 sm:w-[92px]"
                  style={{ backgroundColor: accentDeep }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-7 -top-10 h-[320px] w-[98px] rounded-[55%] bg-[#FCFDF9] sm:-left-4 sm:-top-12 sm:h-[340px] sm:w-[130px]"
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-2 top-0 h-full w-[105px] opacity-45"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.45) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-55"
                  style={{ backgroundColor: accentSoft }}
                  aria-hidden="true"
                />
                <div
                  className="absolute right-10 top-14 h-28 w-28 opacity-30"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(197,160,89,0.42) 1px, transparent 1px)',
                    backgroundSize: '10px 10px',
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center bg-[#14797C] text-[11px] font-mono font-bold text-white shadow-sm sm:h-14 sm:w-14 sm:text-xs"
                  style={{
                    backgroundColor: accentDeep,
                    clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)',
                  }}
                  aria-hidden="true"
                >
                  {service.number}
                </div>

                <div className="relative flex min-h-[265px] flex-col justify-between p-6 pl-[88px] sm:p-8 sm:pl-[112px]">
                  <div>
                    <div
                      className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_14px_35px_rgba(26,28,30,0.12)] ring-1 ring-[#E2E5DE]"
                      style={{ color: accentDeep, boxShadow: `0 18px 38px ${shadowColor}` }}
                    >
                      <Icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <span
                      className="block text-[10px] font-mono font-bold uppercase tracking-[0.24em]"
                      style={{ color: accentDeep }}
                    >
                      {pick(service.category, locale)}
                    </span>
                    <h3 className="mt-3 max-w-[430px] font-serif text-2xl leading-tight text-[#1A1C1E] transition-colors group-hover:text-[#14797C] sm:text-[1.65rem]">
                      {pick(service.title, locale)}
                    </h3>
                    <span
                      className="mt-3 block h-px w-16"
                      style={{ backgroundColor: accentDeep }}
                      aria-hidden="true"
                    />
                    <p className="mt-4 max-w-[430px] font-sans text-sm leading-relaxed text-[#5B6168]">
                      {pick(service.description, locale)}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#E2E5DE] pt-4">
                    <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#5B6168]">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${accentDeep}12`, color: accentDeep }}
                        aria-hidden="true"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      {pick(service.category, locale)}
                    </span>
                    <span
                      className="inline-flex items-center gap-2 text-xs font-semibold transition-all duration-300 group-hover:gap-3"
                      style={{ color: accentDeep }}
                    >
                      {copy.explore} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
