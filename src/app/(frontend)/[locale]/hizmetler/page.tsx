import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LineDraw } from '@/components/ui/LineDraw'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { SERVICES } from '@/lib/services-data'
import { APPROACH_STEPS } from '@/lib/approach-steps-data'
import { pick, localeHref } from '@/lib/i18n/pick'
import type { Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    metaTitle: 'Hizmetler',
    metaDescription:
      'AURIX; bireysel koçluk, liderlik ve yönetici koçluğu, kurumsal eğitim ve gençler için kariyer koçluğu alanlarında yapılandırılmış koçluk ve danışmanlık süreçleri sunar.',
    heroEyebrow: 'Hizmetler',
    heroHeading:
      'Bireyler, liderler, kurumlar ve öğrenciler için yapılandırılmış gelişim süreçleri.',
    heroBody:
      'AURIX, bireysel gelişimden yönetici koçluğuna, kurumsal eğitimlerden gençler için kariyer koçluğuna kadar farklı ihtiyaçlara yönelik yapılandırılmış koçluk ve danışmanlık süreçleri sunar. Her süreç, ön görüşme ve ihtiyaç analiziyle başlar; uygun hizmet alanı ve uzman eşleşmesiyle devam eder.',
    heroCtaPrimary: 'Size Uygun Hizmeti Bulalım',
    heroCtaSecondary: 'Ön Görüşme Talep Et',
    categoriesHeading: 'AURIX hizmet alanları',
    categoriesBody:
      'Her hizmet alanı, farklı bir gelişim ihtiyacına cevap verecek şekilde yapılandırılır. Amaç, sizi tek tip bir programa yönlendirmek değil; ihtiyacınıza uygun süreç ve uzmanla buluşturmaktır.',
    detailLinkText: 'Detaylı sayfayı gör',
    processHeading: 'AURIX’te hizmet süreci nasıl işler?',
    processBody:
      'Her danışan veya kurum farklı bir ihtiyaçla gelir. Bu nedenle süreç, önce ihtiyacı anlamak ve doğru hizmet alanını belirlemekle başlar.',
    faqHeading: 'Sıkça sorulan sorular',
    faqItems: [
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
    ],
  },
  en: {
    metaTitle: 'Services',
    metaDescription:
      'AURIX offers structured coaching and consulting processes in personal coaching, leadership and executive coaching, corporate training, and career coaching for young people.',
    heroEyebrow: 'Services',
    heroHeading:
      'Structured development processes for individuals, leaders, organizations, and students.',
    heroBody:
      'From personal development to executive coaching, from corporate training to career coaching for young people, AURIX offers structured coaching and consulting processes for a wide range of needs. Every process begins with an introductory call and a needs assessment, then continues with the right service area and expert match.',
    heroCtaPrimary: "Let's Find the Right Service for You",
    heroCtaSecondary: 'Request an Introductory Call',
    categoriesHeading: 'AURIX service areas',
    categoriesBody:
      'Each service area is structured to respond to a different development need. The goal is not to route you into a one-size-fits-all program, but to match you with the process and expert that fit your need.',
    detailLinkText: 'See the detailed page',
    processHeading: 'How does the service process work at AURIX?',
    processBody:
      'Every client or organization arrives with a different need. That is why the process begins by understanding the need and determining the right service area.',
    faqHeading: 'Frequently asked questions',
    faqItems: [
      {
        question: 'How will I know which service is right for me?',
        answer:
          'In the introductory call, we assess your need, expectations, and the area you want support in together. Based on that, we match you with the most suitable service area and expert.',
      },
      {
        question: 'Does coaching replace therapy?',
        answer:
          'No. At AURIX, coaching and consulting processes do not replace psychotherapy, medical treatment, or clinical intervention. The process is a professional support area that accompanies development goals.',
      },
      {
        question: 'Can meetings be held online?',
        answer:
          'Yes. Depending on the expert and service area, online meeting options may be offered. The appropriate working format is determined together during the introductory call.',
      },
      {
        question: 'Are corporate trainings ready-made packages?',
        answer:
          "No. For corporate trainings, the organization's need is analyzed first. A program is then designed to fit the target audience, organizational structure, and development expectations.",
      },
      {
        question: 'Is student coaching only for exam preparation?',
        answer:
          'No. Alongside exam strategy, student coaching also focuses on areas such as goal setting, motivation, time management, study routines, and career awareness.',
      },
    ],
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const copy = COPY[locale]
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: { languages: { tr: '/hizmetler', en: '/en/hizmetler' } },
  }
}

export default async function HizmetlerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const copy = COPY[locale]
  const FAQ_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
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
                {copy.heroEyebrow}
              </span>
              <h1
                id="hizmetler-hero-heading"
                className="font-serif text-ink tracking-tight text-display-lg"
              >
                {copy.heroHeading}
              </h1>
              <p className="text-body-md text-muted leading-relaxed max-w-xl">
                {copy.heroBody}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#kategoriler-heading"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {copy.heroCtaPrimary}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={localeHref('/iletisim', locale)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {copy.heroCtaSecondary}
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
                {copy.categoriesHeading}
              </h2>
              <p className="mt-3 text-body-md text-muted">
                {copy.categoriesBody}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <FadeIn key={service.id} delay={i * 0.03}>
                  <Link
                    href={localeHref(`/hizmetler/${service.id}`, locale)}
                    className="group flex h-full flex-col gap-4 rounded-sm border border-hairline bg-surface-elevated p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#14797C]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-sm"
                        style={{ backgroundColor: `${service.accent}14`, color: service.accent }}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span
                        className="text-[10px] font-mono tracking-widest uppercase"
                        style={{ color: service.accent }}
                      >
                        {pick(service.category, locale)}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-ink leading-tight transition-colors group-hover:text-[#14797C]">
                      {pick(service.title, locale)}
                    </h3>
                    <p className="text-body-sm text-body leading-relaxed flex-1">
                      {pick(service.description, locale)}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14797C] transition-colors group-hover:text-[#C5A059] self-start">
                      {copy.detailLinkText}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
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
                {copy.processHeading}
              </h2>
              <p className="mt-3 text-body-md text-muted">
                {copy.processBody}
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
                <h3 className="text-title-sm font-semibold text-ink">{pick(step.title, locale)}</h3>
                <p className="text-body-sm text-body leading-relaxed">{pick(step.description, locale)}</p>
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
                {copy.faqHeading}
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <dl className="flex flex-col divide-y divide-hairline border-t border-b border-hairline">
                {copy.faqItems.map((item) => (
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

      <FinalCTA locale={locale} />
    </>
  )
}
