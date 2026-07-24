import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import type { Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    eyebrow: 'Konum',
    heading: 'Ege Üniversitesi Teknopark bünyesinde, bilimsel çalışmaların yürütüldüğü bir zeminde.',
    body: 'AURIX ofisi, Ege Üniversitesi Teknopark içerisinde yer alır. Bilimsel araştırma ve yenilikçi çalışmaların sürdürüldüğü bu ortam, koçluk ve danışmanlık süreçlerimizi akademik bilgi birikimine yakın ve kurumsal bir zeminde yürütmemize imkân tanır.',
    badgeLabel: 'Ege Üniversitesi Teknopark',
    photoAlt: 'Ege Üniversitesi Teknopark yerleşkesinden bir görünüm',
    logoAlt: 'Ege Üniversitesi Teknopark logosu',
  },
  en: {
    eyebrow: 'Location',
    heading: 'Based within Ege University Technopark, a hub for scientific research.',
    body: 'The AURIX office is located within Ege University Technopark, an environment dedicated to scientific research and innovation. This allows us to carry out our coaching and consulting work close to academic knowledge, on institutional ground.',
    badgeLabel: 'Ege University Technopark',
    photoAlt: 'A view from the Ege University Technopark campus',
    logoAlt: 'Ege University Technopark logo',
  },
} as const

export function LocationSection({
  locale,
  background = 'canvas',
}: {
  locale: Locale
  background?: 'canvas' | 'surface-soft'
}) {
  const copy = COPY[locale]
  const bgClass = background === 'canvas' ? 'bg-canvas' : 'bg-surface-soft'

  return (
    <section aria-labelledby="location-heading" className={`${bgClass} py-16 sm:py-20`}>
      <div className="mx-auto max-w-container px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FadeIn>
            <div className="relative overflow-hidden rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-3 shadow-[0_18px_54px_rgba(26,28,30,0.08)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                <Image
                  src="/media/ege-teknopark.PNG"
                  alt={copy.photoAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 620px"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                {copy.eyebrow}
              </span>
              <h2 id="location-heading" className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                {copy.heading}
              </h2>
              <p className="mt-5 text-body-md leading-relaxed text-[#5B6168]">
                {copy.body}
              </p>

              <div className="mt-7 inline-flex items-center gap-3 rounded-md border border-[#E2E5DE] bg-[#FCFDF9] px-4 py-3 shadow-[0_12px_35px_rgba(26,28,30,0.05)]">
                <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-sm bg-white">
                  <Image
                    src="/media/ege-universitesi-teknopark-logo.png"
                    alt={copy.logoAlt}
                    fill
                    sizes="36px"
                    className="object-contain p-1"
                  />
                </span>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-[#1A1C1E]">
                  <MapPin className="h-4 w-4 text-[#14797C]" aria-hidden="true" />
                  {copy.badgeLabel}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
