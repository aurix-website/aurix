import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { STATIC_EXPERTS, EXPERT_PLACEHOLDERS, type Expert } from '@/lib/experts-data'
import type { ExpertDetail } from '@/lib/expert-detail-data'

export function ExpertDetailTemplate({ expert, detail }: { expert: Expert; detail: ExpertDetail }) {
  const photo =
    expert.photo != null && typeof expert.photo === 'object' ? expert.photo : null
  const placeholder = EXPERT_PLACEHOLDERS[detail.slug] ?? `expert-${detail.slug}.jpg`
  const others = STATIC_EXPERTS.filter((e) => e.slug !== detail.slug)

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="expert-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <div className="bg-white border border-hairline rounded-sm p-3 max-w-sm mx-auto lg:mx-0">
                <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
                  {photo?.url ? (
                    <Image
                      src={photo.url}
                      alt={photo.alt ?? expert.name}
                      fill
                      sizes="(max-width: 1024px) 80vw, 30vw"
                      className="object-cover object-top grayscale-[15%]"
                      priority
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
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-5">
              <FadeIn>
                <span className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase mb-3">
                  {expert.title}
                </span>
                <h1
                  id="expert-hero-heading"
                  className="font-serif text-ink tracking-tight text-display-lg mb-4"
                >
                  {expert.name}
                </h1>
                <p className="text-body-md text-muted leading-relaxed max-w-2xl">
                  {detail.heroShort}
                </p>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <Link
                    href={`/iletisim?expert=${detail.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                  >
                    {detail.primaryCtaLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={detail.secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                  >
                    {detail.secondaryCta.label}
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Kısa biyografi + Kimlerle çalışır */}
      <section aria-labelledby="bio-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <FadeIn>
              <h2 id="bio-heading" className="sr-only">
                {expert.name} hakkında
              </h2>
              <div className="flex flex-col gap-4">
                {detail.bio.map((paragraph, i) => (
                  <p key={i} className="text-body-md text-body leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={0.08}>
              <h3 className="text-title-lg font-semibold text-ink mb-4">Kimlerle çalışır?</h3>
              <ul className="flex flex-col gap-2.5">
                {detail.audience.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-body-sm text-body">
                    <Check className="h-4 w-4 text-[#14797C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Uzmanlık alanları + Yaklaşımı */}
      <section aria-labelledby="expertise-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <h2 id="expertise-heading" className="text-display-lg font-semibold text-ink mb-6">
              Uzmanlık alanları
            </h2>
            <ul className="flex flex-wrap gap-2.5 mb-14" aria-label="Uzmanlık alanları">
              {detail.expertise.map((item) => (
                <li
                  key={item}
                  className="text-sm font-mono px-3.5 py-2 bg-surface-elevated border border-hairline rounded-sm text-body"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-3xl bg-surface-dark rounded-sm p-8">
              <h3 className="font-serif text-xl text-on-dark mb-3">Yaklaşımı</h3>
              <p className="text-body-sm text-on-dark-soft leading-relaxed">{detail.approach}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Eğitim ve yetkinlikler + İlgili hizmetler */}
      <section aria-labelledby="credentials-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <FadeIn>
              <h2 id="credentials-heading" className="text-title-lg font-semibold text-ink mb-4">
                Eğitim ve yetkinlikler
              </h2>
              <ul className="flex flex-col gap-2.5">
                {detail.credentials.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-body-sm text-body">
                    <span className="w-1 h-1 rounded-full bg-[#C5A059] mt-2.5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="lg:col-span-6">
            <FadeIn delay={0.08}>
              <h2 className="text-title-lg font-semibold text-ink mb-4">İlgili hizmetler</h2>
              <ul className="flex flex-wrap gap-2.5" aria-label="İlgili hizmetler">
                {detail.relatedServices.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#14797C] hover:text-[#C5A059] bg-surface-elevated border border-hairline rounded-sm px-3.5 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                    >
                      {service.label}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Diğer uzmanlar */}
      <section aria-labelledby="other-experts-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <h2 id="other-experts-heading" className="text-display-lg font-semibold text-ink mb-10">
              Diğer uzmanlar
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((other, i) => (
              <FadeIn key={other.id} delay={i * 0.05}>
                <Link
                  href={`/uzmanlar/${other.slug}`}
                  className="block bg-surface-elevated border border-hairline rounded-sm p-5 hover:border-[#14797C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                >
                  <h3 className="font-serif text-lg text-ink mb-1">{other.name}</h3>
                  <p className="text-caption text-muted">{other.title}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
