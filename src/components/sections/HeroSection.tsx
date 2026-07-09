import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroAccordion from '@/components/HeroAccordion'
import StatBand from '@/components/StatBand'
import type { Locale } from '@/lib/i18n/types'
import { dictionary } from '@/lib/i18n/dictionary'
import { localeHref } from '@/lib/i18n/pick'

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = dictionary[locale].hero
  const cta = dictionary[locale].common
  return (
    <section
      aria-label={copy.ariaLabel}
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-max)' }}>

        {/* İki kolon — metin + accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-16 pb-12 lg:pt-20 lg:pb-16">

          {/* Sol kolon — metin */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-8">

            <span
              className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase"
            >
              {copy.eyebrow}
            </span>

            <h1
              className="font-serif text-[#1A1C1E] tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 6vw, 3rem)', lineHeight: '1.15' }}
            >
              {copy.heading}
            </h1>

            <p
              className="font-sans text-[#5B6168] max-w-md"
              style={{ fontSize: '1.0625rem', lineHeight: '1.6' }}
            >
              {copy.body}
            </p>

            <p
              className="font-sans text-[#5B6168] max-w-md text-sm"
            >
              {copy.subBody}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href={localeHref('/iletisim', locale)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
              >
                {cta.requestCall}
                <ArrowRight className="h-4 w-4 text-[#C5A059]" aria-hidden="true" />
              </Link>
              <Link
                href={localeHref('/hizmetler', locale)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
              >
                {cta.exploreServices}
              </Link>
            </div>

          </div>

          {/* Sağ kolon — accordion galeri */}
          <div
            className="lg:col-span-5 flex items-stretch h-[260px] lg:h-[480px]"
            aria-hidden="true"
          >
            <HeroAccordion locale={locale} />
          </div>

        </div>

        <StatBand locale={locale} />

      </div>

      {/* Section separator */}
      <div className="border-t border-[#E2E5DE]" aria-hidden="true" />
    </section>
  )
}
