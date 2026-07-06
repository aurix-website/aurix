import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LeadForm } from '@/components/LeadForm'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'AURIX Koçluk ve Danışmanlık ile iletişime geçin. Bireysel koçluk, yönetici koçluğu, kurumsal eğitim ve öğrenci koçluğu için ön görüşme talep edin.',
  openGraph: {
    title: 'AURIX ile İletişime Geçin',
    description:
      'Size uygun koçluk, danışmanlık veya kurumsal eğitim sürecini birlikte belirlemek için AURIX ekibiyle iletişime geçin.',
  },
}

const OPTION_CARDS = [
  {
    title: 'Bireysel destek almak istiyorum',
    description:
      'Yaşamınızda yön, netlik, denge veya kişisel gelişim alanında destek almak istiyorsanız bireysel koçluk süreci hakkında bilgi alabilirsiniz.',
    cta: 'Bireysel Koçluk İçin Yazın',
    href: '/on-gorusme?interest=bireysel-kocluk',
  },
  {
    title: 'Yönetici / liderlik desteği arıyorum',
    description:
      'Liderlik rolünüzü, karar alma sürecinizi, ekip iletişiminizi veya yönetici gelişiminizi desteklemek için görüşme talep edebilirsiniz.',
    cta: 'Yönetici Koçluğu İçin Yazın',
    href: '/on-gorusme?interest=yonetici-koclugu',
  },
  {
    title: 'Kurumumuz için eğitim istiyoruz',
    description:
      'Liderlik, takım gelişimi, iletişim, değişim yönetimi veya çalışan deneyimi alanlarında kurumunuza özel programlar için ihtiyaç analizi talep edebilirsiniz.',
    cta: 'Kurumsal İhtiyaç Analizi Talep Et',
    href: '/on-gorusme?interest=kurumsal-egitim',
  },
  {
    title: 'Öğrenci / veli olarak bilgi almak istiyorum',
    description:
      'Hedef belirleme, sınav stratejisi, motivasyon, zaman yönetimi veya kariyer farkındalığı konularında öğrenci koçluğu hakkında bilgi alabilirsiniz.',
    cta: 'Öğrenci Koçluğu İçin Yazın',
    href: '/on-gorusme?interest=ogrenci-koclugu',
  },
  {
    title: 'Hangi hizmetin uygun olduğundan emin değilim',
    description:
      'İhtiyacınızı kısaca paylaşın. AURIX ekibi sizi uygun hizmet alanı ve uzmanla eşleştirmek için yönlendirsin.',
    cta: 'Bana Uygun Süreci Belirleyin',
    href: '/on-gorusme?interest=emin-degilim',
  },
]

const PROCESS_STEPS = [
  { title: 'Kısa formu doldurun', description: '' },
  { title: 'İhtiyacınızı paylaşın', description: '' },
  { title: 'Uygun hizmet veya uzman eşleşmesi yapılsın', description: '' },
  { title: 'Görüşme süreci planlansın', description: '' },
]

const FAQ_ITEMS = [
  {
    question: 'Formu doldurduktan sonra ne olacak?',
    answer:
      'Talebiniz AURIX ekibi tarafından incelenir. İhtiyacınıza göre size uygun hizmet, uzman veya ön görüşme süreci hakkında dönüş yapılır.',
  },
  {
    question: 'Hangi hizmetin bana uygun olduğunu bilmiyorum. Yine de form doldurabilir miyim?',
    answer:
      'Evet. Formda "Emin değilim" seçeneğini işaretleyebilirsiniz. Ön görüşme sürecinde ihtiyacınız birlikte değerlendirilir.',
  },
  {
    question: 'Görüşmeler online yapılabiliyor mu?',
    answer:
      'Evet. Hizmet alanına ve uzman uygunluğuna göre online görüşme seçenekleri değerlendirilebilir. Kurumsal eğitimlerde yüz yüze veya hibrit seçenekler ayrıca planlanabilir.',
  },
  {
    question: 'Doğrudan bir uzmanla görüşme talep edebilir miyim?',
    answer:
      'Evet. Uzman profillerinden ilgili uzman için ön görüşme talep edebilirsiniz. Emin değilseniz AURIX ekibi uygun eşleşme konusunda size rehberlik eder.',
  },
  {
    question: 'Kurumsal eğitimler için nasıl iletişime geçmeliyim?',
    answer:
      'Kurumsal eğitim taleplerinde kurumunuzun ihtiyacını, hedef kitlenizi ve beklenen gelişim alanlarını kısaca paylaşmanız yeterlidir. AURIX ekibi ihtiyaç analizi için sizinle iletişime geçer.',
  },
  {
    question: 'Koçluk süreci terapi yerine geçer mi?',
    answer:
      'Hayır. AURIX’te koçluk ve danışmanlık süreçleri psikoterapi, tıbbi tedavi veya klinik müdahalenin yerine geçmez. Gerektiğinde ilgili uzmanlık alanlarına yönlendirme yapılması önemsenir.',
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

export default function IletisimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero */}
      <section aria-labelledby="iletisim-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase">
                İletişim
              </span>
              <h1
                id="iletisim-hero-heading"
                className="font-serif text-ink tracking-tight text-display-lg"
              >
                Size uygun süreci birlikte belirleyelim.
              </h1>
              <p className="text-body-md text-muted leading-relaxed max-w-xl">
                Bireysel koçluk, yönetici koçluğu, kurumsal eğitim veya öğrenci koçluğu hakkında
                bilgi almak için bizimle iletişime geçebilir; ihtiyacınıza uygun ön görüşme
                sürecini birlikte planlayabiliriz.
              </p>
              <p className="text-body-sm text-body leading-relaxed max-w-xl">
                Hangi hizmetin veya uzmanın size uygun olduğundan emin değilseniz, form üzerinden
                ihtiyacınızı paylaşmanız yeterlidir.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/on-gorusme"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Ön Görüşme Talep Et
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/hizmetler"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Hizmetleri İncele
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* İletişim seçenekleri */}
      <section aria-labelledby="options-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="mb-10 max-w-xl">
              <h2 id="options-heading" className="text-display-lg font-semibold text-ink">
                Hangi konuda destek almak istiyorsunuz?
              </h2>
              <p className="mt-3 text-body-md text-muted">
                İhtiyacınızı seçerek doğru iletişim kanalına ve uygun ön görüşme akışına
                yönlenebilirsiniz.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {OPTION_CARDS.map((card) => (
                <div
                  key={card.href}
                  className="bg-surface-elevated border border-hairline rounded-sm p-6 flex flex-col gap-3"
                >
                  <h3 className="text-title-sm font-semibold text-ink leading-snug">
                    {card.title}
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
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form + doğrudan iletişim */}
      <section aria-labelledby="form-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <FadeIn>
              <h2 id="form-heading" className="text-display-lg font-semibold text-ink mb-3">
                Bize ulaşın
              </h2>
              <p className="text-body-md text-muted mb-8 max-w-xl">
                İhtiyacınızı kısaca paylaşın. AURIX ekibi mesajınızı inceleyerek size uygun
                hizmet, uzman veya ön görüşme süreci için dönüş yapacaktır.
              </p>
            </FadeIn>
            <Suspense>
              <LeadForm variant="iletisim" />
            </Suspense>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-surface-elevated border border-hairline rounded-sm p-6">
                <h3 className="text-title-lg font-semibold text-ink mb-5">Doğrudan iletişim</h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-[#14797C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <span className="block text-caption text-muted uppercase tracking-wide">
                        E-posta
                      </span>
                      <a href="mailto:info@aurixdanismanlik.com" className="text-body-sm text-ink hover:text-[#14797C]">
                        info@aurixdanismanlik.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-[#14797C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <span className="block text-caption text-muted uppercase tracking-wide">
                        Kurumsal talepler
                      </span>
                      <a href="mailto:kurumsal@aurixdanismanlik.com" className="text-body-sm text-ink hover:text-[#14797C]">
                        kurumsal@aurixdanismanlik.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-[#14797C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <span className="block text-caption text-muted uppercase tracking-wide">
                        Telefon / WhatsApp
                      </span>
                      <span className="text-body-sm text-ink">+90 XXX XXX XX XX</span>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-surface-dark rounded-sm p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <MessageCircle className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                  <h3 className="font-serif text-lg text-on-dark">Online görüşme imkânı</h3>
                </div>
                <p className="text-body-sm text-on-dark-soft leading-relaxed">
                  AURIX uzmanlarıyla görüşmeler, hizmet alanına ve uzman uygunluğuna göre online
                  olarak planlanabilir. Kurumsal eğitim ve özel programlarda yüz yüze veya hibrit
                  seçenekler ayrıca değerlendirilebilir.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ön görüşme yönlendirme */}
      <section aria-labelledby="intro-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-5">
              <h2 id="intro-heading" className="text-display-lg font-semibold text-ink">
                Ön görüşme ile başlayın
              </h2>
              <p className="text-body-md text-muted leading-relaxed">
                Hangi hizmetin veya uzmanın size uygun olduğundan emin değilseniz, ön görüşme
                süreci doğru başlangıç noktasıdır. Bu görüşmede ihtiyacınız, beklentiniz ve uygun
                hizmet alanı birlikte değerlendirilir.
              </p>
              <ol className="flex flex-col gap-2">
                {PROCESS_STEPS.map((step, i) => (
                  <li key={step.title} className="flex items-start gap-3 text-body-sm text-body">
                    <span className="font-mono text-xs font-bold text-[#C5A059] mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{step.title}</span>
                  </li>
                ))}
              </ol>
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

      {/* Kurumsal kutu */}
      <section aria-labelledby="kurumsal-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="bg-surface-dark rounded-sm p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 id="kurumsal-heading" className="font-serif text-xl text-on-dark mb-2">
                  Kurumunuz için özel bir gelişim programı mı arıyorsunuz?
                </h2>
                <p className="text-body-sm text-on-dark-soft leading-relaxed">
                  Liderlik, takım gelişimi, iletişim, değişim yönetimi veya çalışan deneyimi
                  alanlarında kurumunuza özel eğitim ve koçluk programları tasarlayabiliriz.
                </p>
              </div>
              <Link
                href="/on-gorusme?interest=kurumsal-egitim"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#1A1C1E] hover:bg-white/90 text-sm font-semibold rounded-sm transition-colors duration-200 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
              >
                Kurumsal İhtiyaç Analizi Talep Et
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 id="faq-heading" className="text-display-lg font-semibold text-ink mb-10">
                İletişim ve ön görüşme hakkında sık sorulan sorular
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
