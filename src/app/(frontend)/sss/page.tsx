import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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

export default function SssPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero */}
      <section aria-labelledby="sss-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase">
                SSS
              </span>
              <h1
                id="sss-hero-heading"
                className="font-serif text-ink tracking-tight text-display-lg"
              >
                Sıkça sorulan sorular
              </h1>
              <p className="text-body-md text-muted leading-relaxed max-w-xl">
                Hizmetler, uzmanlar, ön görüşme süreci ve kurumsal eğitimler hakkında en çok
                sorulan soruları bir araya getirdik. Aradığınızı bulamazsanız doğrudan bizimle
                iletişime geçebilirsiniz.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {FAQ_CATEGORIES.map((category) => (
                  <Link
                    key={category.id}
                    href={`#${category.id}`}
                    className="text-sm font-semibold px-4 py-2 rounded-sm border border-hairline bg-surface-elevated text-body hover:border-[#14797C] hover:text-[#14797C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kategoriler */}
      {FAQ_CATEGORIES.map((category, i) => (
        <section
          key={category.id}
          id={category.id}
          aria-labelledby={`${category.id}-heading`}
          className={`py-section scroll-mt-24 ${i % 2 === 0 ? 'bg-surface-soft' : 'bg-canvas'}`}
        >
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-3xl">
              <FadeIn>
                <h2
                  id={`${category.id}-heading`}
                  className="text-display-lg font-semibold text-ink mb-8"
                >
                  {category.title}
                </h2>
              </FadeIn>

              <FadeIn delay={0.08}>
                <FaqAccordion items={category.items} />
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* Kapanış CTA */}
      <section aria-labelledby="sss-cta-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-4">
              <h2 id="sss-cta-heading" className="text-display-lg font-semibold text-ink">
                Aradığınız cevabı bulamadınız mı?
              </h2>
              <p className="text-body-md text-muted leading-relaxed">
                İhtiyacınızı paylaşın; size uygun hizmet, uzman ve ön görüşme sürecini birlikte
                netleştirelim.
              </p>
              <Link
                href="/on-gorusme"
                className="inline-flex items-center justify-center gap-2 self-start px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
              >
                Ön Görüşme Talep Et
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
