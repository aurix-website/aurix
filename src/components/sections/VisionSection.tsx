import Link from 'next/link'
import { Quote } from 'lucide-react'
import { ExpertVisual } from '@/components/ExpertVisual'
import { FadeIn } from '@/components/ui/FadeIn'
import { STATIC_EXPERTS } from '@/lib/experts-data'
import { pick, localeHref } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    eyebrow: 'VİZYON',
    heading: 'Her uzmanın kendi vizyonu, ortak bir amaçta buluşuyor.',
    body: 'AURIX uzmanları farklı disiplinlerden gelir; ancak hepsi aynı soruyu sorar: potansiyeli nasıl görünür ve sürdürülebilir kılarız?',
    photoAlt: (name: string) => `${name} uzman görseli`,
  },
  en: {
    eyebrow: 'VISION',
    heading: 'Each expert’s own vision, meeting at a shared purpose.',
    body: 'AURIX experts come from different disciplines, yet they all ask the same question: how do we make potential visible and sustainable?',
    photoAlt: (name: string) => `${name} expert photo`,
  },
} as const

const VISION_ORDER = [
  'kaan-yazici',
  'seda-sen',
  'hatice-yildirim',
  'secil-ozbayir',
  'hulya-aksu-spizuoco',
  'iskender-dasdemir',
  'cigdem-karavelioglu',
  'ayse-kiremitci',
]

export function VisionSection({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const copy = COPY[locale]
  const experts = STATIC_EXPERTS.filter((expert) => expert.vision).sort(
    (a, b) => VISION_ORDER.indexOf(a.slug ?? '') - VISION_ORDER.indexOf(b.slug ?? '')
  )

  if (experts.length === 0) return null

  return (
    <section aria-labelledby="vision-heading" className="grain relative overflow-hidden py-20 lg:py-24 bg-[#2E2E30]">
      <div className="relative z-10 mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        <FadeIn>
          <div className="mb-12 max-w-xl">
            <span className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase mb-3">
              {copy.eyebrow}
            </span>
            <h2
              id="vision-heading"
              className="font-serif text-[#F6F7F1] tracking-tight"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.2' }}
            >
              {copy.heading}
            </h2>
            <p className="mt-3 font-sans text-[#D7DEE4] leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              {copy.body}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {experts.map((expert) => {
              const href = localeHref(expert.slug ? `/uzmanlar/${expert.slug}` : '/uzmanlar', locale)
              const title = expert.title ? pick(expert.title, locale) : undefined
              return (
                <Link
                  key={expert.id}
                  href={href}
                  className="group flex flex-col gap-4 rounded-sm border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[#C5A059]/40 transition-colors duration-200 p-5 sm:p-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2"
                >
                  <Quote className="h-5 w-5 text-[#C5A059]" aria-hidden="true" />
                  <p className="font-sans text-[#F6F7F1] text-[0.9rem] leading-relaxed line-clamp-6 flex-1">
                    {pick(expert.vision!, locale)}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden border border-white/15 shrink-0 bg-white/5">
                      <ExpertVisual
                        expert={expert}
                        alt={copy.photoAlt(expert.name)}
                        sizes="40px"
                        imageClassName="object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#F6F7F1] truncate">{expert.name}</p>
                      {title && <p className="text-xs text-[#D7DEE4]/70 truncate">{title}</p>}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
