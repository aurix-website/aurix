import type { Metadata } from 'next'
import { FadeIn } from '@/components/ui/FadeIn'
import { JournalGrid } from '@/components/JournalGrid'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Koçluk, liderlik, kariyer, öğrenci gelişimi ve global uyum üzerine AURIX uzmanlarından yapılandırılmış yazılar.',
}

export default function JournalPage() {
  return (
    <>
      <section aria-labelledby="journal-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase">
                Journal
              </span>
              <h1
                id="journal-hero-heading"
                className="font-serif text-ink tracking-tight text-display-lg"
              >
                AURIX İçgörüleri
              </h1>
              <p className="text-body-md text-muted leading-relaxed max-w-xl">
                Liderlik, kariyer, eğitim, öğrenci gelişimi ve kişisel dönüşüm üzerine
                uzmanlarımızdan yazılar, rehberler ve düşünceler.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section aria-labelledby="journal-list-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <h2 id="journal-list-heading" className="sr-only">
            Tüm yazılar
          </h2>
          <FadeIn>
            <JournalGrid />
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
