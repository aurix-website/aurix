import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Compass } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LineDraw } from '@/components/ui/LineDraw'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { SERVICES, SERVICE_DETAIL_SLUGS } from '@/lib/services-data'
import { APPROACH_STEPS } from '@/lib/approach-steps-data'

export const metadata: Metadata = {
  title: 'Hizmetler',
  description:
    'AURIX; bireysel koçluk, liderlik ve yönetici koçluğu, kurumsal eğitim ve gençler için kariyer koçluğu alanlarında yapılandırılmış koçluk ve danışmanlık süreçleri sunar.',
}

const GUIDE_CARDS = [
  {
    question: 'Yaşamımda yön, denge veya netlik arıyorum.',
    description:
      'Kişisel hedeflerinizi netleştirmek, karar süreçlerinizi daha bilinçli yönetmek veya yaşamınızda yeni bir yön oluşturmak istiyorsanız bireysel koçluk süreci sizin için uygun olabilir.',
    href: '/hizmetler/bireysel-kocluk',
    cta: 'Bireysel Koçluğu İncele',
  },
  {
    question: 'Liderlik rolümde daha etkili olmak istiyorum.',
    description:
      'Ekip yönetimi, karar alma, iletişim, önceliklendirme ve liderlik kapasitenizi güçlendirmek istiyorsanız liderlik ve yönetici koçluğu doğru bir başlangıç olabilir.',
    href: '/hizmetler/yonetici-koclugu',
    cta: 'Yönetici Koçluğunu İncele',
  },
  {
    question: 'Kurumumuz için eğitim veya gelişim programı arıyoruz.',
    description:
      'Liderlik, takım gelişimi, iletişim veya değişim yönetimi alanlarında kuruma özel bir gelişim programı arıyorsanız kurumsal eğitim ve takım koçluğu sürecini birlikte tasarlayabiliriz.',
    href: '/hizmetler/kurumsal-egitim',
    cta: 'Kurumsal İhtiyaç Analizi Talep Et',
  },
  {
    question: 'Öğrenci veya veli olarak destek arıyorum.',
    description:
      'Hedef belirleme, sınav stratejisi, motivasyon, zaman yönetimi veya küresel kariyer uyumu konularında destek arıyorsanız bu alan sizin için uygun olabilir.',
    href: '/hizmetler/ogrenci-koclugu',
    cta: 'Öğrenci Koçluğunu İncele',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Hangi hizmetin bana uygun olduğunu nasıl anlayacağım?',
    answer:
      'Ön görüşmede ihtiyacınızı, beklentinizi ve destek almak istediğiniz alanı birlikte değerlendiririz. Buna göre sizi en uygun hizmet alanı ve uzmanla eşleştiririz.',
  },
  {
    question: 'Koçluk süreci terapi yerine geçer mi?',
    answer:
      'Hayır. AURIX’te koçluk ve danışmanlık süreçleri psikoterapi, tıbbi tedavi veya klinik müdahalenin yerine geçmez. Süreç, gelişim hedeflerine eşlik eden profesyonel bir destek alanıdır.',
  },
  {
    question: 'Görüşmeler online yapılabilir mi?',
    answer:
      'Evet. Uzman ve hizmet alanına göre online görüşme seçenekleri sunulabilir. Ön görüşme sırasında uygun çalışma biçimi birlikte belirlenir.',
  },
  {
    question: 'Kurumsal eğitimler hazır paket mi?',
    answer:
      'Hayır. Kurumsal eğitimlerde önce kurumun ihtiyacı analiz edilir. Ardından hedef kitleye, kurumsal yapıya ve gelişim beklentisine uygun program tasarlanır.',
  },
  {
    question: 'Öğrenci koçluğu sadece sınava hazırlık için mi?',
    answer:
      'Hayır. Öğrenci koçluğu sınav stratejisinin yanında hedef belirleme, motivasyon, zaman yönetimi, çalışma düzeni ve kariyer farkındalığı gibi alanlara da odaklanır.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function HizmetlerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero */}
      <section aria-labelledby="hizmetler-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase">
                Hizmetler
              </span>
              <h1
                id="hizmetler-hero-heading"
                className="font-serif text-ink tracking-tight text-display-lg"
              >
                Bireyler, liderler, kurumlar ve öğrenciler için yapılandırılmış gelişim
                süreçleri.
              </h1>
              <p className="text-body-md text-muted leading-relaxed max-w-xl">
                AURIX, bireysel gelişimden yönetici koçluğuna, kurumsal eğitimlerden gençler
                için kariyer koçluğuna kadar farklı ihtiyaçlara yönelik yapılandırılmış koçluk
                ve danışmanlık süreçleri sunar. Her süreç, ön görüşme ve ihtiyaç analiziyle
                başlar; uygun hizmet alanı ve uzman eşleşmesiyle devam eder.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#hizmet-rehberi"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Size Uygun Hizmeti Bulalım
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Ön Görüşme Talep Et
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Hizmet Seçim Rehberi */}
      <section
        id="hizmet-rehberi"
        aria-labelledby="rehber-heading"
        className="py-section bg-surface-soft"
      >
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="mb-10 max-w-xl">
              <h2 id="rehber-heading" className="text-display-lg font-semibold text-ink">
                Hangi hizmet size daha uygun?
              </h2>
              <p className="mt-3 text-body-md text-muted">
                Gelişim ihtiyacı herkes için aynı değildir. AURIX’te hizmetler; bireysel,
                profesyonel, kurumsal ve akademik gelişim ihtiyaçlarına göre yapılandırılır.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GUIDE_CARDS.map((card) => (
                <div
                  key={card.href}
                  className="bg-surface-elevated border border-hairline rounded-sm p-6 flex flex-col gap-3"
                >
                  <h3 className="text-title-sm font-semibold text-ink leading-snug">
                    {card.question}
                  </h3>
                  <p className="text-body-sm text-body leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
                  >
                    {card.cta}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              ))}

              <div className="bg-surface-dark border border-hairline rounded-sm p-6 flex flex-col gap-3">
                <Compass className="h-6 w-6 text-brand-accent" aria-hidden="true" />
                <h3 className="text-title-sm font-semibold text-on-dark leading-snug">
                  Emin değilim.
                </h3>
                <p className="text-body-sm text-on-dark-soft leading-relaxed flex-1">
                  Hangi hizmetin size uygun olduğundan emin değilseniz, kısa bir ön görüşme
                  ile ihtiyacınızı birlikte değerlendirebiliriz.
                </p>
                <Link
                  href="/iletisim?interest=emin-degilim"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-on-dark hover:text-brand-accent transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                >
                  Bana Uygun Süreci Belirleyelim
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ana Hizmet Kartları */}
      <section aria-labelledby="kategoriler-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="mb-14 max-w-xl">
              <h2 id="kategoriler-heading" className="text-display-lg font-semibold text-ink">
                AURIX hizmet alanları
              </h2>
              <p className="mt-3 text-body-md text-muted">
                Her hizmet alanı, farklı bir gelişim ihtiyacına cevap verecek şekilde
                yapılandırılır. Amaç, sizi tek tip bir programa yönlendirmek değil; ihtiyacınıza
                uygun süreç ve uzmanla buluşturmaktır.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-16">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <FadeIn key={service.id} delay={i * 0.05}>
                  <div id={service.id} className="scroll-mt-24 border-t border-hairline pt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-4 flex flex-col gap-4">
                        <div
                          className="w-14 h-14 rounded-sm flex items-center justify-center"
                          style={{ backgroundColor: `${service.accent}14`, color: service.accent }}
                        >
                          <Icon className="h-7 w-7" aria-hidden="true" />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-muted uppercase block">
                          {service.number} / {service.category}
                        </span>
                        <h3 className="font-serif text-2xl text-ink leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-body-sm text-body leading-relaxed">
                          {service.description}
                        </p>
                        {SERVICE_DETAIL_SLUGS[service.id] && (
                          <Link
                            href={`/hizmetler/${SERVICE_DETAIL_SLUGS[service.id]}`}
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
                          >
                            Detaylı sayfayı gör
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        )}
                      </div>

                      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.subServices.map((sub) => (
                          <div
                            key={sub.title}
                            className="bg-surface-elevated border border-hairline rounded-sm p-5 flex flex-col gap-2"
                          >
                            <h4 className="text-title-sm font-semibold text-ink">{sub.title}</h4>
                            <p className="text-body-sm text-body leading-relaxed">
                              {sub.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* AURIX Hizmet Süreci */}
      <section aria-labelledby="surec-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="mb-14 max-w-xl">
              <h2 id="surec-heading" className="text-display-lg font-semibold text-ink">
                AURIX’te hizmet süreci nasıl işler?
              </h2>
              <p className="mt-3 text-body-md text-muted">
                Her danışan veya kurum farklı bir ihtiyaçla gelir. Bu nedenle süreç, önce
                ihtiyacı anlamak ve doğru hizmet alanını belirlemekle başlar.
              </p>
            </div>
          </FadeIn>

          <LineDraw className="mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {APPROACH_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col gap-3">
                <span className="font-mono text-caption font-medium text-muted-soft tracking-widest">
                  {step.number}
                </span>
                <div className="w-8 h-px bg-ink" aria-hidden="true" />
                <h3 className="text-title-sm font-semibold text-ink">{step.title}</h3>
                <p className="text-body-sm text-body leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="py-section bg-canvas">
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
