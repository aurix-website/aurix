import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ExpertsGrid } from '@/components/ExpertsGrid'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Uzmanlar',
  description:
    'AURIX uzman kadrosu; bireysel koçluk, yönetici koçluğu, kurumsal eğitim, öğrenci koçluğu, kariyer gelişimi ve global uyum alanlarında profesyonel destek sunar.',
}

const TRUST_STEPS = [
  {
    title: 'İhtiyacı anlıyoruz',
    description: 'Ön görüşmede destek almak istediğiniz alanı ve beklentinizi netleştiriyoruz.',
  },
  {
    title: 'Uygun uzmanı belirliyoruz',
    description: 'Hizmet alanınıza ve hedefinize göre sizi ilgili AURIX uzmanıyla eşleştiriyoruz.',
  },
  {
    title: 'Süreci yapılandırıyoruz',
    description: 'Görüşme sıklığı, hedefler ve odak alanları birlikte planlanıyor.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Hangi uzmanla çalışmam gerektiğini nasıl anlayacağım?',
    answer:
      'Ön görüşmede ihtiyacınızı, hedefinizi ve beklentinizi birlikte değerlendiririz. Buna göre sizi uygun hizmet alanı ve uzmanla eşleştiririz.',
  },
  {
    question: 'Doğrudan bir uzman seçebilir miyim?',
    answer:
      'Evet. Uzman profillerini inceleyerek doğrudan ilgili uzman için ön görüşme talep edebilirsiniz. Emin değilseniz AURIX ekibi uygun eşleşme konusunda size rehberlik eder.',
  },
  {
    question: 'Uzmanlarla online görüşme yapılabilir mi?',
    answer:
      'Uzman ve hizmet alanına göre online görüşme seçenekleri sunulabilir. Ön görüşme sırasında uygun çalışma biçimi birlikte belirlenir.',
  },
  {
    question: 'Birden fazla uzmanla çalışmak mümkün mü?',
    answer:
      'İhtiyaca göre mümkündür. Örneğin bireysel koçluk, kurumsal eğitim veya global uyum gibi farklı alanlarda farklı uzmanların sürece dahil olması değerlendirilebilir.',
  },
  {
    question: 'Uzman profillerindeki bilgiler nasıl kullanılmalı?',
    answer:
      'Uzman profilleri, kişinin eğitimini, deneyimini, çalışma alanlarını ve yaklaşımını tanımak için hazırlanmıştır. Nihai eşleşme, ön görüşmede ihtiyacın netleşmesiyle yapılır.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function UzmanlarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero */}
      <section aria-labelledby="uzmanlar-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase">
                AURIX Uzman Kadrosu
              </span>
              <h1
                id="uzmanlar-hero-heading"
                className="font-serif text-ink tracking-tight text-display-lg"
              >
                Farklı uzmanlıklar, tek bir gelişim çatısı altında.
              </h1>
              <p className="text-body-md text-muted leading-relaxed max-w-xl">
                AURIX uzman kadrosu; bireysel koçluk, yönetici koçluğu, kurumsal eğitim, öğrenci
                koçluğu, kariyer gelişimi ve global uyum alanlarında farklı deneyimlere sahip
                profesyonellerden oluşur.
              </p>
              <p className="text-body-sm text-body leading-relaxed max-w-xl">
                Her danışanın ihtiyacı farklıdır. Bu nedenle AURIX’te süreç, önce ihtiyacı
                anlamakla başlar; ardından uygun hizmet alanı ve uzman eşleşmesiyle devam eder.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#uzman-listesi"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Size Uygun Uzmanı Bulalım
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/on-gorusme"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Ön Görüşme Talep Et
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filtre + kartlar */}
      <section id="uzman-listesi" aria-labelledby="uzman-listesi-heading" className="py-section bg-surface-soft scroll-mt-24">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="mb-10 max-w-xl">
              <h2 id="uzman-listesi-heading" className="text-display-lg font-semibold text-ink">
                İhtiyacınıza göre uzmanları keşfedin
              </h2>
              <p className="mt-3 text-body-md text-muted">
                Hangi uzmanla çalışmanız gerektiğinden emin değilseniz, hizmet alanlarına göre
                uzmanları inceleyebilir veya ön görüşmede uygun eşleşmeyi birlikte
                belirleyebiliriz.
              </p>
            </div>
          </FadeIn>

          <ExpertsGrid />
        </div>
      </section>

      {/* Güven bölümü */}
      <section aria-labelledby="trust-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="mb-12 max-w-xl">
              <h2 id="trust-heading" className="text-display-lg font-semibold text-ink">
                Uzman seçimini tesadüfe bırakmıyoruz.
              </h2>
              <p className="mt-3 text-body-md text-muted">
                AURIX’te uzman eşleşmesi yalnızca unvanlara göre yapılmaz. Danışanın ihtiyacı,
                hedefi, çalışma dili, hizmet alanı ve beklentisi birlikte değerlendirilir. Böylece
                her danışan için daha uygun bir başlangıç noktası oluşturulur.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {TRUST_STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className="bg-surface-elevated border border-hairline rounded-sm p-6 flex flex-col gap-2"
                >
                  <span className="text-xs font-mono font-bold text-[#C5A059]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg text-ink">{step.title}</h3>
                  <p className="text-body-sm text-body leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <Link
            href="/on-gorusme?interest=emin-degilim"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
          >
            Uygun Uzmanı Birlikte Belirleyelim
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 id="faq-heading" className="text-display-lg font-semibold text-ink mb-10">
                Sıkça sorulan sorular
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <dl className="flex flex-col divide-y divide-hairline border-t border-b border-hairline">
                {FAQ_ITEMS.map((item) => (
                  <div key={item.question} className="py-6">
                    <dt className="text-title-sm font-semibold text-ink mb-2">{item.question}</dt>
                    <dd className="text-body-sm text-body leading-relaxed">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
