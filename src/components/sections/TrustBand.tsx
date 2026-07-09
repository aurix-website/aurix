import { FadeIn } from '@/components/ui/FadeIn'
import { LineDraw } from '@/components/ui/LineDraw'
import type { Locale } from '@/lib/i18n/types'
import { dictionary } from '@/lib/i18n/dictionary'

export function TrustBand({ locale }: { locale: Locale }) {
  const copy = dictionary[locale].trustBand
  return (
    <section aria-label={copy.ariaLabel} className="bg-canvas">
      <div className="max-w-container mx-auto px-6 py-20">
        <LineDraw className="mb-10" />
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <p className="text-display-sm font-semibold text-ink leading-snug">
              {copy.heading}
            </p>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-1"
              aria-label={copy.areasAriaLabel}
            >
              {copy.pillars.map((p) => (
                <li key={p} className="flex items-start gap-2 text-body-sm text-body">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <LineDraw className="mt-10" delay={0.3} />
      </div>
    </section>
  )
}
