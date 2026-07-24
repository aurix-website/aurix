import Link from 'next/link'
import { ArrowRight, Check, Quote } from 'lucide-react'
import { ExpertVisual } from '@/components/ExpertVisual'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { STATIC_EXPERTS, type Expert } from '@/lib/experts-data'
import type { ExpertDetail } from '@/lib/expert-detail-data'
import { pick, localeHref } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    photoAlt: (name: string) => `${name} uzman görseli`,
    visionHeading: 'Vizyonu',
    aboutHeading: 'Hakkında',
    worksWithHeading: 'Kimlerle çalışır?',
    expertiseHeading: 'Uzmanlık alanları',
    expertiseAria: 'Uzmanlık alanları',
    approachHeading: 'Yaklaşımı',
    credentialsHeading: 'Eğitim ve yetkinlikler',
    viewAllCredentials: 'Tümünü Gör',
    timelineHeading: 'CV ve deneyim akışı',
    relatedServicesHeading: 'İlgili hizmetler',
    otherExpertsHeading: 'Diğer uzmanlar',
    ctaHeading: (name: string) => `${name} ile çalışmaya hazır mısınız?`,
  },
  en: {
    photoAlt: (name: string) => `${name} expert photo`,
    visionHeading: 'Vision',
    aboutHeading: 'About',
    worksWithHeading: 'Who does this expert work with?',
    expertiseHeading: 'Areas of expertise',
    expertiseAria: 'Areas of expertise',
    approachHeading: 'Approach',
    credentialsHeading: 'Education and qualifications',
    viewAllCredentials: 'View All',
    timelineHeading: 'CV and experience timeline',
    relatedServicesHeading: 'Related services',
    otherExpertsHeading: 'Other experts',
    ctaHeading: (name: string) => `Ready to work with ${name}?`,
  },
} as const

export function ExpertDetailTemplate({
  expert,
  detail,
  locale = DEFAULT_LOCALE,
}: {
  expert: Expert
  detail: ExpertDetail
  locale?: Locale
}) {
  const copy = COPY[locale]
  const others = STATIC_EXPERTS.filter((e) => e.slug !== detail.slug)

  return (
    <>
      {/* Fotoğraf + Hakkında */}
      <section aria-labelledby="expert-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="max-w-sm mx-auto flex flex-col gap-4 lg:mx-0 lg:sticky lg:top-28">
                <div className="bg-white border border-hairline rounded-sm p-3">
                  <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
                    <ExpertVisual
                      expert={expert}
                      alt={copy.photoAlt(expert.name)}
                      sizes="(max-width: 1024px) 80vw, 30vw"
                      imageClassName="object-cover object-top grayscale-[15%]"
                      priority
                    />
                  </div>
                </div>

                {(() => {
                  const credentials = pick(detail.credentials, locale)
                  const highlighted = credentials.slice(0, 4)
                  const hasMore = credentials.length > highlighted.length
                  return (
                    <div className="rounded-sm border border-hairline bg-white p-5">
                      <h2 className="text-title-sm font-semibold text-ink mb-3">{copy.credentialsHeading}</h2>
                      <ul className="flex flex-col gap-2">
                        {highlighted.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-body-sm text-body">
                            <span className="w-1 h-1 rounded-full bg-[#C5A059] mt-2 flex-shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {hasMore && (
                        <Link
                          href="#credentials-heading"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#14797C] hover:text-[#C5A059] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
                        >
                          {copy.viewAllCredentials}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  )
                })()}
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-5">
              <FadeIn>
                <span className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase mb-3">
                  {expert.title ? pick(expert.title, locale) : null}
                </span>
                <h1
                  id="expert-hero-heading"
                  className="font-serif text-ink tracking-tight text-display-lg mb-4"
                >
                  {expert.name}
                </h1>
                <p className="text-body-md text-muted leading-relaxed max-w-2xl">
                  {pick(detail.heroShort, locale)}
                </p>
              </FadeIn>

              {expert.vision && (
                <FadeIn delay={0.04}>
                  <div className="relative rounded-sm border border-[#14797C]/20 bg-[#14797C]/[0.04] p-6 sm:p-8 pl-10 sm:pl-12">
                    <Quote className="absolute left-4 top-6 h-5 w-5 text-[#C5A059]" aria-hidden="true" />
                    <span className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase mb-2">
                      {copy.visionHeading}
                    </span>
                    <p className="font-sans text-body-md text-ink leading-relaxed">
                      {pick(expert.vision, locale)}
                    </p>
                  </div>
                </FadeIn>
              )}

              <FadeIn delay={0.06}>
                <div className="flex flex-col gap-4 rounded-sm border border-hairline bg-white p-6 sm:p-8">
                  <span className="text-[11px] font-mono tracking-widest text-muted-soft font-bold uppercase">
                    {copy.aboutHeading}
                  </span>
                  {pick(detail.bio, locale).map((paragraph, i) => (
                    <p key={i} className="text-body-sm text-body leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="rounded-sm border border-hairline bg-white p-6">
                  <h2 className="font-serif text-xl text-ink mb-4">{copy.worksWithHeading}</h2>
                  <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {pick(detail.audience, locale).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-body-sm text-body">
                        <Check className="h-4 w-4 text-[#14797C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CV: deneyim akışı + eğitim/yetkinlikler */}
      {detail.timeline && detail.timeline.length > 0 && (
        <section aria-labelledby="timeline-heading" className="py-16 bg-surface-soft lg:py-20">
          <div className="max-w-container mx-auto px-6">
            <FadeIn>
              <h2 id="timeline-heading" className="font-serif text-3xl text-ink mb-8">
                {copy.timelineHeading}
              </h2>
            </FadeIn>
            <div className="relative rounded-sm border border-hairline bg-white p-5 sm:p-8">
              <div className="absolute bottom-8 left-[6.25rem] top-8 hidden w-px bg-[#E2E5DE] sm:block" aria-hidden="true" />
              <ol className="space-y-6">
                {detail.timeline.map((item, index) => (
                  <FadeIn key={`${pick(item.period, locale)}-${index}`} delay={index * 0.03}>
                    <li className="grid grid-cols-1 gap-3 sm:grid-cols-[7.5rem_1fr]">
                      <div className="relative">
                        <span className="inline-flex rounded-sm bg-[#14797C] px-3 py-1.5 text-xs font-bold text-white">
                          {pick(item.period, locale)}
                        </span>
                      </div>
                      <div className="border-b border-hairline pb-5 last:border-b-0">
                        <h3 className="font-serif text-xl text-ink">{pick(item.title, locale)}</h3>
                        <p className="mt-2 text-body-sm leading-relaxed text-body">
                          {pick(item.description, locale)}
                        </p>
                      </div>
                    </li>
                  </FadeIn>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      <section aria-labelledby="credentials-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <h2 id="credentials-heading" className="text-title-lg font-semibold text-ink mb-4">
              {copy.credentialsHeading}
            </h2>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {pick(detail.credentials, locale).map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-body-sm text-body">
                  <span className="w-1 h-1 rounded-full bg-[#C5A059] mt-2.5 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Uzmanlık alanları + Yaklaşımı */}
      <section aria-labelledby="expertise-heading" className="py-16 bg-surface-soft lg:py-20">
        <div className="max-w-container mx-auto px-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <div>
              <h2 id="expertise-heading" className="font-serif text-3xl text-ink mb-5">
                {copy.expertiseHeading}
              </h2>
              <ul className="flex flex-wrap gap-2.5" aria-label={copy.expertiseAria}>
                {pick(detail.expertise, locale).map((item) => (
                  <li
                    key={item}
                    className="text-sm font-mono px-3.5 py-2 bg-surface-elevated border border-hairline rounded-sm text-body"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-5">
            <div className="bg-surface-dark rounded-sm p-6 sm:p-8">
              <h3 className="font-serif text-xl text-on-dark mb-3">{copy.approachHeading}</h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">{pick(detail.approach, locale)}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ön görüşme CTA + ilgili hizmetler */}
      <section aria-labelledby="expert-cta-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="rounded-sm border border-hairline bg-surface-elevated p-6 sm:p-8">
              <h2 id="expert-cta-heading" className="font-serif text-2xl text-ink mb-2">
                {copy.ctaHeading(expert.name)}
              </h2>
              <p className="text-body-sm text-muted leading-relaxed max-w-2xl mb-6">
                {pick(detail.heroShort, locale)}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href={localeHref(`/iletisim?expert=${detail.slug}`, locale)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {pick(detail.primaryCtaLabel, locale)}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={localeHref(detail.secondaryCta.href, locale)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {pick(detail.secondaryCta.label, locale)}
                </Link>
              </div>

              <h3 className="text-title-sm font-semibold text-ink mb-3">{copy.relatedServicesHeading}</h3>
              <ul className="flex flex-wrap gap-2.5" aria-label={copy.relatedServicesHeading}>
                {detail.relatedServices.map((service) => {
                  const label = pick(service.label, locale)
                  return (
                    <li key={label}>
                      <Link
                        href={localeHref(service.href, locale)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#14797C] hover:text-[#C5A059] bg-white border border-hairline rounded-sm px-3.5 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                      >
                        {label}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Diğer uzmanlar */}
      <section aria-labelledby="other-experts-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <h2 id="other-experts-heading" className="text-display-lg font-semibold text-ink mb-10">
              {copy.otherExpertsHeading}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((other, i) => (
              <FadeIn key={other.id} delay={i * 0.05}>
                <Link
                  href={localeHref(`/uzmanlar/${other.slug}`, locale)}
                  className="block bg-surface-elevated border border-hairline rounded-sm p-5 hover:border-[#14797C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                >
                  <h3 className="font-serif text-lg text-ink mb-1">{other.name}</h3>
                  <p className="text-caption text-muted">{other.title ? pick(other.title, locale) : null}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA locale={locale} />
    </>
  )
}
