import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import type { Locale } from '@/lib/i18n/types'
import { dictionary } from '@/lib/i18n/dictionary'

export function ManifestoSection({ locale }: { locale: Locale }) {
  const copy = dictionary[locale].manifesto
  return (
    <section
      aria-labelledby="manifesto-heading"
      className="grain relative overflow-hidden py-24 lg:py-32 bg-[#2E2E30]"
    >
      <div className="relative z-10 mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">

          {/* Atmosfer fotoğrafı — upload manifesto-portrait.jpg (720×900) */}
          <FadeIn>
            <div className="bg-white/5 border border-white/10 rounded-sm p-3 max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
                <Image
                  src="/media/manifesto-portrait.jpg"
                  alt={copy.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Metin içeriği */}
          <FadeIn delay={0.08}>
            <div className="flex flex-col gap-6 max-w-xl">
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase block">
                {copy.eyebrow}
              </span>

              <h2
                id="manifesto-heading"
                className="font-serif text-[#F6F7F1] tracking-tight"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: '1.2' }}
              >
                {copy.headingPrefix}{' '}
                <span className="text-[#1A9CA0]">{copy.headingAccent}</span>
              </h2>

              <p className="font-sans text-[#D7DEE4] leading-relaxed" style={{ fontSize: '1.0625rem' }}>
                {copy.body}
              </p>

              <Link
                href="#approach-heading"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#F6F7F1] hover:text-[#C5A059] transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2 rounded-sm"
              >
                {copy.cta}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.16}>
          <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {copy.promiseCards.map((card) => (
              <div
                key={card.title}
                className="bg-white/5 border border-white/10 rounded-sm p-6 flex flex-col gap-2"
              >
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#C5A059]">
                  {card.title}
                </span>
                <p className="font-sans text-sm text-[#D7DEE4] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
