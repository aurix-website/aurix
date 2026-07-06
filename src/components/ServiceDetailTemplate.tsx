import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LineDraw } from '@/components/ui/LineDraw'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { getExpertBySlug } from '@/lib/experts-data'
import type { ServiceDetail } from '@/lib/service-detail-data'

export function ServiceDetailTemplate({ detail }: { detail: ServiceDetail }) {
  const experts = detail.expertSlugs
    .map((slug) => getExpertBySlug(slug))
    .filter((expert): expert is NonNullable<typeof expert> => Boolean(expert))

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="service-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase">
                {detail.eyebrow}
              </span>
              <h1
                id="service-hero-heading"
                className="font-serif text-ink tracking-tight text-display-lg"
              >
                {detail.h1}
              </h1>
              <p className="text-body-md text-muted leading-relaxed max-w-xl">
                {detail.heroSubtitle}
              </p>
              <p className="text-body-sm text-body leading-relaxed max-w-xl">
                {detail.introText}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/on-gorusme?interest=${detail.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {detail.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={`/hizmetler#${detail.serviceId}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {detail.secondaryCta}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kimler için */}
      <section aria-labelledby="audience-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <h2 id="audience-heading" className="text-display-lg font-semibold text-ink">
                  {detail.audienceHeading}
                </h2>
                {detail.audienceIntro && (
                  <p className="mt-3 text-body-md text-muted leading-relaxed">
                    {detail.audienceIntro}
                  </p>
                )}
              </div>
              <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {detail.audience.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-body-sm text-body">
                    <Check className="h-4 w-4 text-[#14797C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hangi ihtiyaçlara cevap verir */}
      <section aria-labelledby="needs-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <h2 id="needs-heading" className="text-display-lg font-semibold text-ink mb-10 max-w-xl">
              {detail.needsHeading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {detail.needs.map((need, i) => (
                <div
                  key={need.title}
                  className="bg-surface-elevated border border-hairline rounded-sm p-6 flex flex-col gap-2"
                >
                  <span className="text-xs font-mono font-bold text-[#C5A059]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg text-ink">{need.title}</h3>
                  <p className="text-body-sm text-body leading-relaxed">{need.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {detail.extra && (
            <FadeIn delay={0.15}>
              <div className="mt-10 bg-surface-dark rounded-sm p-8">
                <h3 className="font-serif text-xl text-on-dark mb-3">{detail.extra.heading}</h3>
                <p className="text-body-sm text-on-dark-soft leading-relaxed">{detail.extra.body}</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Süreç */}
      <section aria-labelledby="process-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <h2 id="process-heading" className="text-display-lg font-semibold text-ink mb-10 max-w-xl">
              {detail.processHeading}
            </h2>
          </FadeIn>

          <LineDraw className="mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {detail.processSteps.map((step) => (
              <div key={step.number} className="flex flex-col gap-3">
                <span className="font-mono text-caption font-medium text-muted-soft tracking-widest">
                  {step.number}
                </span>
                <div className="w-8 h-px bg-ink" aria-hidden="true" />
                <h3 className="text-title-sm font-semibold text-ink">{step.title}</h3>
                <p className="text-body-sm text-body leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İlgili uzmanlar */}
      {experts.length > 0 && (
        <section aria-labelledby="experts-heading" className="py-section bg-canvas">
          <div className="max-w-container mx-auto px-6">
            <FadeIn>
              <h2 id="experts-heading" className="text-display-lg font-semibold text-ink mb-8 max-w-xl">
                {detail.expertsHeading}
              </h2>
            </FadeIn>

            <FadeIn delay={0.08}>
              <ul className="flex flex-wrap gap-3 mb-8" aria-label="İlgili uzmanlar">
                {experts.map((expert) => (
                  <li key={expert.slug ?? expert.id}>
                    <Link
                      href={`/uzmanlar/${expert.slug ?? expert.id}`}
                      className="inline-flex items-center gap-2 bg-surface-elevated border border-hairline rounded-sm px-4 py-2.5 hover:border-[#14797C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                    >
                      <span className="text-sm font-semibold text-ink">{expert.name}</span>
                      {expert.title && (
                        <span className="text-caption text-muted hidden sm:inline">
                          — {expert.title}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="text-body-sm text-muted leading-relaxed max-w-3xl">
                {detail.expertsNote}
              </p>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Sayfa içi CTA */}
      <section aria-labelledby="page-cta-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-4">
              <h2 id="page-cta-heading" className="text-display-lg font-semibold text-ink">
                {detail.ctaHeading}
              </h2>
              <p className="text-body-md text-muted leading-relaxed">{detail.ctaText}</p>
              <Link
                href={`/on-gorusme?interest=${detail.slug}`}
                className="inline-flex items-center justify-center gap-2 self-start px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
              >
                {detail.ctaButton}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
