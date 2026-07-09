import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Compass } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LineDraw } from '@/components/ui/LineDraw'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { SERVICES, SERVICE_DETAIL_SLUGS } from '@/lib/services-data'
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
    guideHeading: 'Hangi hizmet size daha uygun?',
    guideBody:
      'Gelişim ihtiyacı herkes için aynı değildir. AURIX’te hizmetler; bireysel, profesyonel, kurumsal ve akademik gelişim ihtiyaçlarına göre yapılandırılır.',
    guideCards: [
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
    ],
    unsureTitle: 'Emin değilim.',
    unsureBody:
      'Hangi hizmetin size uygun olduğundan emin değilseniz, kısa bir ön görüşme ile ihtiyacınızı birlikte değerlendirebiliriz.',
    unsureCta: 'Bana Uygun Süreci Belirleyelim',
    unsureHref: '/iletisim?interest=emin-degilim',
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
    guideHeading: 'Which service fits you best?',
    guideBody:
      'Development needs are not the same for everyone. At AURIX, services are structured around personal, professional, corporate, and academic development needs.',
    guideCards: [
      {
        question: "I'm looking for direction, balance, or clarity in my life.",
        description:
          "If you want to clarify your personal goals, make decisions more consciously, or set a new direction in your life, personal coaching may be the right fit for you.",
        href: '/hizmetler/bireysel-kocluk',
        cta: 'Explore Personal Coaching',
      },
      {
        question: 'I want to be more effective in my leadership role.',
        description:
          'If you want to strengthen your team management, decision-making, communication, prioritization, or leadership capacity, leadership and executive coaching can be the right starting point.',
        href: '/hizmetler/yonetici-koclugu',
        cta: 'Explore Executive Coaching',
      },
      {
        question: 'We are looking for training or a development program for our organization.',
        description:
          'If you are looking for a development program tailored to your organization in leadership, team development, communication, or change management, we can design a corporate training and team coaching process together.',
        href: '/hizmetler/kurumsal-egitim',
        cta: 'Request a Corporate Needs Analysis',
      },
      {
        question: "I'm a student or parent looking for support.",
        description:
          'If you are looking for support with goal setting, exam strategy, motivation, time management, or global career fit, this area may be right for you.',
        href: '/hizmetler/ogrenci-koclugu',
        cta: 'Explore Student Coaching',
      },
    ],
    unsureTitle: "I'm not sure.",
    unsureBody:
      "If you're not sure which service fits you, we can assess your need together in a short introductory call.",
    unsureCta: "Let's Find the Right Process for Me",
    unsureHref: '/iletisim?interest=emin-degilim',
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
                  href="#hizmet-rehberi"
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
                {copy.guideHeading}
              </h2>
              <p className="mt-3 text-body-md text-muted">
                {copy.guideBody}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {copy.guideCards.map((card) => (
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
                    href={localeHref(card.href, locale)}
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
                  {copy.unsureTitle}
                </h3>
                <p className="text-body-sm text-on-dark-soft leading-relaxed flex-1">
                  {copy.unsureBody}
                </p>
                <Link
                  href={localeHref(copy.unsureHref, locale)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-on-dark hover:text-brand-accent transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                >
                  {copy.unsureCta}
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
                {copy.categoriesHeading}
              </h2>
              <p className="mt-3 text-body-md text-muted">
                {copy.categoriesBody}
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
                          {service.number} / {pick(service.category, locale)}
                        </span>
                        <h3 className="font-serif text-2xl text-ink leading-tight">
                          {pick(service.title, locale)}
                        </h3>
                        <p className="text-body-sm text-body leading-relaxed">
                          {pick(service.description, locale)}
                        </p>
                        {SERVICE_DETAIL_SLUGS[service.id] && (
                          <Link
                            href={localeHref(`/hizmetler/${SERVICE_DETAIL_SLUGS[service.id]}`, locale)}
                            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
                          >
                            {copy.detailLinkText}
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        )}
                      </div>

                      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.subServices.map((sub) => (
                          <div
                            key={pick(sub.title, locale)}
                            className="bg-surface-elevated border border-hairline rounded-sm p-5 flex flex-col gap-2"
                          >
                            <h4 className="text-title-sm font-semibold text-ink">{pick(sub.title, locale)}</h4>
                            <p className="text-body-sm text-body leading-relaxed">
                              {pick(sub.description, locale)}
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
