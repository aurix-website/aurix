import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FaqAccordion } from '@/components/FaqAccordion'
import { FAQ_CATEGORIES, ALL_FAQ_ITEMS } from '@/lib/faq-data'

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular',
  description:
    'AURIX hizmetleri, uzmanları, ön görüşme süreci ve kurumsal eğitimler hakkında sıkça sorulan sorular.',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ALL_FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const HERO_PILLARS = ['Netlik', 'Gizlilik', 'Hız']

export default function SssPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <section aria-labelledby="sss-hero-heading" className="relative overflow-hidden bg-canvas py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute right-[-180px] top-[-220px] h-[520px] w-[680px] rounded-full border border-[#C5A059]/15" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[360px] w-[460px] rounded-full border border-[#14797C]/10" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-container grid-cols-1 gap-12 px-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <FadeIn>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                SSS
              </span>
              <h1
                id="sss-hero-heading"
                className="mt-4 max-w-xl font-serif text-display-serif-lg tracking-tight text-[#1A1C1E]"
              >
                Sıkça sorulan sorular
              </h1>
              <p className="mt-6 max-w-xl text-body-md leading-relaxed text-[#5B6168]">
                Hizmetler, uzmanlar, ön görüşme süreci ve kurumsal eğitimler hakkında en çok
                sorulan soruları bir araya getirdik. Aradığınızı bulamazsanız doğrudan bizimle
                iletişime geçebilirsiniz.
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {FAQ_CATEGORIES.map((category) => {
                  const Icon = category.icon
                  return (
                    <Link
                      key={category.id}
                      href={`#${category.id}`}
                      className="inline-flex items-center gap-2 rounded-sm border border-[#E2E5DE] bg-[#FCFDF9] px-4 py-2.5 text-sm font-semibold text-[#1A1C1E] transition-colors duration-200 hover:border-[#14797C] hover:text-[#14797C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {category.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="group relative mx-auto w-full max-w-[560px]">
              <div className="relative overflow-hidden rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-6 shadow-[0_28px_80px_rgba(26,28,30,0.08)] transition-all duration-300 hover:shadow-[0_34px_90px_rgba(26,28,30,0.12)] motion-safe:hover:scale-[1.015] motion-reduce:transition-none sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#14797C]/25 bg-white text-[#14797C] shadow-[0_10px_28px_rgba(26,28,30,0.08)]">
                  <HelpCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="mt-6 block text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#C5A059]">
                  SSS Rehberi
                </span>
                <p className="mt-3 font-serif text-2xl leading-tight text-[#1A1C1E]">
                  Merak edilen konular tek sayfada
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#5B6168]">
                  {FAQ_CATEGORIES.length} kategori altında {ALL_FAQ_ITEMS.length} soruyu
                  yanıtladık; aradığınızı bulamazsanız ön görüşme talebiyle doğrudan bize
                  ulaşabilirsiniz.
                </p>

                <div className="mt-7 grid grid-cols-3 gap-2">
                  {HERO_PILLARS.map((pillar) => (
                    <div key={pillar} className="rounded-sm border border-[#E2E5DE] bg-white px-3 py-3 text-center transition-transform duration-300 motion-safe:hover:scale-[1.04] motion-reduce:transition-none">
                      <HelpCircle className="mx-auto h-4 w-4 text-[#14797C]" aria-hidden="true" />
                      <span className="mt-2 block text-[11px] font-bold text-[#1A1C1E]">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {FAQ_CATEGORIES.map((category, i) => {
        const Icon = category.icon
        return (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-heading`}
            className={`scroll-mt-24 py-16 sm:py-20 ${i % 2 === 0 ? 'bg-surface-soft' : 'bg-canvas'}`}
          >
            <div className="mx-auto max-w-container px-6">
              <div className="max-w-3xl">
                <FadeIn>
                  <div className="mb-10 flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-[#14797C]/20 bg-white text-[#14797C]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 id={`${category.id}-heading`} className="mt-1 font-serif text-display-serif-md text-[#1A1C1E]">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.08}>
                  <FaqAccordion items={category.items} />
                </FadeIn>
              </div>
            </div>
          </section>
        )
      })}

      <section aria-labelledby="sss-cta-heading" className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-container px-6">
          <FadeIn>
            <div className="relative overflow-hidden rounded-md bg-[#2E2E30] p-8 shadow-[0_24px_70px_rgba(26,28,30,0.16)] transition-all duration-300 hover:shadow-[0_30px_86px_rgba(26,28,30,0.22)] motion-safe:hover:scale-[1.01] motion-reduce:transition-none sm:p-10 lg:p-12">
              <div className="absolute right-[-90px] top-[-110px] h-72 w-72 rounded-full border border-[#C5A059]/20" aria-hidden="true" />
              <div className="relative max-w-3xl">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm border border-[#14797C]/40 bg-[#14797C]/15 text-[#8ED7D4]">
                  <HelpCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 id="sss-cta-heading" className="font-serif text-3xl text-[#F6F7F1]">
                  Aradığınız cevabı bulamadınız mı?
                </h2>
                <p className="mt-5 text-base leading-8 text-[#D9DDD4]">
                  İhtiyacınızı paylaşın; size uygun hizmet, uzman ve ön görüşme sürecini
                  birlikte netleştirelim.
                </p>
                <Link
                  href="/iletisim"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-sm bg-[#14797C] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0f5f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Ön Görüşme Talep Et
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
