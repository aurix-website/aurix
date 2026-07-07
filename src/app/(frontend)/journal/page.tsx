import type { Metadata } from 'next'
import { BookOpen, Check, Feather, Layers } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { JournalGrid } from '@/components/JournalGrid'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Koçluk, liderlik, kariyer, öğrenci gelişimi ve global uyum üzerine AURIX uzmanlarından yapılandırılmış yazılar.',
}

const HERO_ITEMS = [
  { label: 'Rehber', icon: Feather },
  { label: 'Bakış', icon: Layers },
  { label: 'Netlik', icon: Check },
]

export default function JournalPage() {
  return (
    <>
      <section aria-labelledby="journal-hero-heading" className="relative overflow-hidden bg-canvas py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute right-[-180px] top-[-220px] h-[520px] w-[680px] rounded-full border border-[#C5A059]/15" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[360px] w-[460px] rounded-full border border-[#14797C]/10" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-container grid-cols-1 gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <FadeIn>
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                Journal
              </span>
              <h1
                id="journal-hero-heading"
                className="mt-4 font-serif text-display-serif-lg tracking-tight text-[#1A1C1E]"
              >
                AURIX İçgörüleri
              </h1>
              <p className="mt-6 max-w-xl text-body-md leading-relaxed text-[#5B6168]">
                Liderlik, kariyer, eğitim, öğrenci gelişimi ve kişisel dönüşüm üzerine
                uzmanlarımızdan yazılar, rehberler ve düşünceler.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="group relative mx-auto w-full max-w-[620px]">
              <div className="relative overflow-hidden rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-4 shadow-[0_28px_80px_rgba(26,28,30,0.08)] transition-all duration-300 hover:shadow-[0_34px_90px_rgba(26,28,30,0.12)] motion-safe:hover:scale-[1.015] motion-reduce:transition-none">
                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#F4F0E7]">
                    <ImagePlaceholder
                      filename="journal-hero-insights.jpg"
                      width={720}
                      height={540}
                      fill
                      label="AURIX journal görsel alanı"
                      className="border-0 transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,121,124,0.18),transparent_48%,rgba(197,160,89,0.2))]" aria-hidden="true" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-sm border border-white/70 bg-[#FCFDF9]/88 px-4 py-3 shadow-[0_14px_36px_rgba(26,28,30,0.08)] backdrop-blur-sm">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#C5A059]">
                        Okuma Alanı
                      </span>
                      <p className="mt-1 font-serif text-xl leading-tight text-[#1A1C1E]">
                        Netlik, karar ve gelişim üzerine notlar
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-sm bg-[#F8F7F2] p-5">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[#14797C]/25 bg-white text-[#14797C] shadow-[0_10px_28px_rgba(26,28,30,0.08)]">
                        <BookOpen className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="mt-5 font-serif text-2xl leading-tight text-[#1A1C1E]">
                        Düşünceyi sadeleştiren içerikler
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#5B6168]">
                        AURIX yaklaşımını daha yakından tanımak için kısa, odaklı ve uygulanabilir
                        içgörüler.
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-2">
                      {HERO_ITEMS.map((item) => {
                        const Icon = item.icon
                        return (
                          <div
                            key={item.label}
                            className="rounded-sm border border-[#E2E5DE] bg-white px-3 py-3 text-center transition-transform duration-300 motion-safe:hover:scale-[1.04] motion-reduce:transition-none"
                          >
                            <Icon className="mx-auto h-4 w-4 text-[#14797C]" aria-hidden="true" />
                            <span className="mt-2 block text-[11px] font-bold text-[#1A1C1E]">
                              {item.label}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section aria-labelledby="journal-list-heading" className="bg-surface-soft py-16 sm:py-20">
        <div className="mx-auto max-w-container px-6">
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
