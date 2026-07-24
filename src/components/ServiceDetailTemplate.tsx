import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LineDraw } from '@/components/ui/LineDraw'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { SERVICES } from '@/lib/services-data'
import type { ServiceDetail } from '@/lib/service-detail-data'
import { pick } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

const SERVICE_IMAGE_SLUGS = new Set([
  'bireysel-kocluk',
  'yonetici-koclugu',
  'kurumsal-egitim',
  'ogrenci-koclugu',
])

/** "Hangi alanlarda destek sağlar?" bölümündeki öne çıkan (siyah) kartın arka plan görseli, hizmete göre. */
const NEEDS_LEAD_IMAGE: Record<string, string> = {
  'bireysel-kocluk': '/media/service-bireysel-kocluk-hedef-netligi.jpg',
  'yonetici-koclugu': '/media/service-yonetici-koclugu.jpg',
  'kurumsal-egitim': '/media/service-kurumsal-egitim.jpg',
  'ogrenci-koclugu': '/media/service-ogrenci-koclugu.jpg',
  'kariyer-koclugu': '/media/journal-kariyer-gecislerinde-zihinsel-netlik.jpg',
  'takim-koclugu': '/media/journal-takim-koclugu-egitim-farki.jpg',
  'ogrenci-mentorlugu-sinav-stratejisi': '/media/journal-ogrenci-koclugu-sinav-basarisindan-fazlasi.jpg',
  'genclerde-kariyer-farkindaligi': '/media/journal-gencler-icin-kariyer-farkindaligi.jpg',
  'global-uyum-kariyer-koclugu': '/media/journal-yurtdisinda-yeni-kariyer-global-uyum.jpg',
  'dil-ogreniminde-zihinsel-donusum-koclugu': '/media/journal-kocluk-nedir-danismanlik-terapiden-farki.jpg',
}

export function ServiceDetailTemplate({
  detail,
  locale = DEFAULT_LOCALE,
}: {
  detail: ServiceDetail
  locale?: Locale
}) {
  const category = SERVICES.find((service) => service.id === detail.serviceId)
  const CategoryIcon = category?.icon
  const accent = category?.accent ?? '#14797C'
  const heroImageSrc =
    detail.heroImage ?? (SERVICE_IMAGE_SLUGS.has(detail.slug) ? `/media/service-${detail.slug}.jpg` : null)

  return (
    <>
      <section aria-labelledby="service-hero-heading" className="relative overflow-hidden py-section bg-canvas">
        <div className="absolute inset-x-0 top-0 h-32 bg-[#FCFDF9]" aria-hidden="true" />
        <div className="max-w-container mx-auto px-6">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#C5A059]" aria-hidden="true" />
                  <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase">
                    {pick(detail.eyebrow, locale)}
                  </span>
                </div>
                <h1
                  id="service-hero-heading"
                  className="font-serif text-ink tracking-tight text-display-serif-lg"
                >
                  {pick(detail.h1, locale)}
                </h1>
                <p className="text-body-md text-muted leading-relaxed max-w-2xl">
                  {pick(detail.heroSubtitle, locale)}
                </p>
                <p className="text-body-sm text-body leading-relaxed max-w-2xl border-l border-[#C5A059]/50 pl-5">
                  {pick(detail.introText, locale)}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/iletisim?interest=${detail.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                  >
                    {pick(detail.primaryCta, locale)}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/hizmetler"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                  >
                    {pick(detail.secondaryCta, locale)}
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-6">
              <div className="group relative mx-auto max-w-[520px] lg:ml-auto">
                <div className="absolute -inset-5 border border-[#C5A059]/25 rounded-sm translate-x-4 translate-y-4" aria-hidden="true" />
                <div className="relative bg-[#FCFDF9] border border-[#E2E5DE] rounded-sm p-3 shadow-[0_24px_70px_rgba(26,28,30,0.08)]">
                  <div className="aspect-[5/4] relative overflow-hidden rounded-sm">
                    {heroImageSrc && (
                      <Image
                        src={heroImageSrc}
                        alt={`${pick(detail.h1, locale)} hizmet gorseli`}
                        fill
                        sizes="(min-width: 1024px) 520px, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  {category && CategoryIcon && (
                    <div
                      className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-sm shadow-sm"
                      style={{ backgroundColor: category.accent }}
                    >
                      <CategoryIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  )}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 bg-[#FCFDF9]/90 px-4 py-3 backdrop-blur-sm">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1A1C1E]">
                      AURIX
                    </span>
                    <span className="text-xs text-muted">{pick(detail.eyebrow, locale)}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section aria-labelledby="audience-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col gap-6">
              <FadeIn>
                <div className="flex flex-col gap-5">
                  <h2
                    id="audience-heading"
                    className="font-serif text-display-serif-md text-[#1A1C1E] tracking-tight"
                  >
                    {pick(detail.audienceHeading, locale)}
                  </h2>
                  <p className="font-sans text-body-md text-[#5B6168] leading-relaxed">
                    {pick(detail.audienceIntro, locale)}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="flex flex-col gap-5">
                  <p className="border-l-2 border-[#C5A059] pl-4 font-sans text-sm font-semibold text-[#1A1C1E]">
                    {pick(detail.audienceClosing, locale)}
                  </p>
                  <div className="hidden lg:flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/iletisim?interest=${detail.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                    >
                      {pick(detail.audienceCtaLabel, locale)}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link
                      href="#process-heading"
                      className="inline-flex items-center justify-center gap-1.5 px-2 py-3.5 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0] rounded-sm"
                    >
                      {pick(detail.audienceSecondaryLabel, locale)}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>

            <ol
              className="lg:col-span-7 divide-y divide-[#E2E5DE] border-y border-[#E2E5DE]"
              role="list"
              aria-label={pick(detail.audienceHeading, locale)}
            >
              {detail.audienceItems.map((item, i) => {
                const Icon = item.icon
                const itemAccent = i % 2 === 0 ? accent : '#C5A059'
                const itemTitle = pick(item.title, locale)

                return (
                  <li key={itemTitle}>
                    <FadeIn delay={0.08 + i * 0.06}>
                      <div
                        role="listitem"
                        className="grid grid-cols-[auto_1fr] gap-4 py-5 sm:grid-cols-[auto_auto_1fr] sm:gap-5"
                      >
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-sm"
                          style={{ backgroundColor: `${itemAccent}14`, color: itemAccent }}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <span className="hidden pt-2 font-mono text-xs font-bold text-muted-soft sm:block">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="space-y-1.5">
                          <h3 className="font-serif text-xl text-[#1A1C1E] leading-snug">
                            {itemTitle}
                          </h3>
                          <p className="font-sans text-sm text-[#5B6168] leading-relaxed">
                            {pick(item.description, locale)}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  </li>
                )
              })}
            </ol>

            <FadeIn className="lg:hidden">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/iletisim?interest=${detail.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {pick(detail.audienceCtaLabel, locale)}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#process-heading"
                  className="inline-flex items-center justify-center gap-1.5 px-2 py-3.5 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0] rounded-sm"
                >
                  {pick(detail.audienceSecondaryLabel, locale)}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section aria-labelledby="needs-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <FadeIn className="lg:col-span-6">
              <h2 id="needs-heading" className="text-display-serif-md font-serif text-ink">
                {pick(detail.needsHeading, locale)}
              </h2>
            </FadeIn>
            <FadeIn delay={0.08} className="lg:col-span-5 lg:col-start-8">
              <p className="text-body-md text-muted leading-relaxed">
                {pick(detail.heroSubtitle, locale)}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6">
              {detail.needs.map((need, i) => {
                const isLead = i === 0
                const isWide = i === 1 || i === 4
                const needLeadImage = isLead ? NEEDS_LEAD_IMAGE[detail.slug] : undefined
                const needTitle = pick(need.title, locale)

                return (
                  <article
                    key={needTitle}
                    className={[
                      'relative min-h-[220px] overflow-hidden rounded-sm border p-6 transition-colors duration-200',
                      isLead
                        ? 'bg-[#1A1C1E] text-white border-[#1A1C1E] md:col-span-3 md:row-span-2 md:min-h-[360px] md:p-8'
                        : 'bg-[#FCFDF9] border-[#E2E5DE] md:col-span-3',
                      isWide && !isLead ? 'lg:col-span-3' : '',
                    ].join(' ')}
                  >
                    {needLeadImage && (
                      <>
                        <Image
                          src={needLeadImage}
                          alt=""
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover opacity-55"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1C1E]/95 via-[#1A1C1E]/82 to-[#1A1C1E]/50" aria-hidden="true" />
                      </>
                    )}
                    <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                      <span
                        className={[
                          'font-mono text-xs font-bold tracking-widest',
                          isLead ? 'text-[#C5A059]' : 'text-[#14797C]',
                        ].join(' ')}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="space-y-3">
                        <h3
                          className={[
                            'font-serif leading-tight',
                            isLead ? 'text-3xl text-white' : 'text-xl text-ink',
                          ].join(' ')}
                        >
                          {needTitle}
                        </h3>
                        <p
                          className={[
                            'text-body-sm leading-relaxed',
                            isLead ? 'text-white/72' : 'text-body',
                          ].join(' ')}
                        >
                          {pick(need.description, locale)}
                        </p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </FadeIn>

          {detail.extra && (
            <FadeIn delay={0.15}>
              <div className="mt-6 grid grid-cols-1 gap-6 bg-surface-dark rounded-sm p-8 md:grid-cols-[0.7fr_1.3fr] md:p-10">
                <h3 className="font-serif text-xl text-on-dark">{pick(detail.extra.heading, locale)}</h3>
                <p className="text-body-sm text-on-dark-soft leading-relaxed">{pick(detail.extra.body, locale)}</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      <section aria-labelledby="process-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h2 id="process-heading" className="text-display-serif-md font-serif text-ink">
                  {pick(detail.processHeading, locale)}
                </h2>
                <LineDraw className="mt-8" />
              </div>
            </FadeIn>

            <div className="lg:col-span-8">
              <ol className="relative border-l border-[#D7DEE4]">
                {detail.processSteps.map((step, i) => (
                  <FadeIn key={step.number} delay={i * 0.04}>
                    <li className="relative grid grid-cols-1 gap-3 pb-10 pl-8 last:pb-0 sm:grid-cols-[120px_1fr] sm:gap-8">
                      <span
                        className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ring-8 ring-[#F9FBFB]"
                        style={{ backgroundColor: i % 2 === 0 ? accent : '#C5A059' }}
                        aria-hidden="true"
                      />
                      <span className="font-serif text-4xl leading-none text-[#D7DEE4]">
                        {step.number}
                      </span>
                      <div className="max-w-2xl border-b border-[#E2E5DE] pb-8">
                        <h3 className="text-title-md font-semibold text-ink">{pick(step.title, locale)}</h3>
                        <p className="mt-2 text-body-sm text-body leading-relaxed">{pick(step.description, locale)}</p>
                      </div>
                    </li>
                  </FadeIn>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="page-cta-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="relative overflow-hidden rounded-sm bg-[#1A1C1E] px-6 py-10 text-white md:px-10 lg:px-14 lg:py-14">
              <div className="absolute right-0 top-0 h-full w-1/3 border-l border-white/10 bg-white/[0.03]" aria-hidden="true" />
              <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <h2 id="page-cta-heading" className="font-serif text-display-serif-md text-white">
                  {pick(detail.ctaHeading, locale)}
                </h2>
                <div className="flex flex-col gap-5">
                  <p className="text-body-md text-white/70 leading-relaxed">{pick(detail.ctaText, locale)}</p>
                  <Link
                    href={`/iletisim?interest=${detail.slug}`}
                    className="inline-flex items-center justify-center gap-2 self-start px-6 py-3.5 bg-[#C5A059] hover:bg-[#b18d47] text-[#1A1C1E] text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {pick(detail.ctaButton, locale)}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCTA locale={locale} />
    </>
  )
}
