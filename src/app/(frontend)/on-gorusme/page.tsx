import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LeadForm } from '@/components/LeadForm'
import { FinalCTA } from '@/components/sections/FinalCTA'

export const metadata: Metadata = {
  title: 'Ön Görüşme Talep Et',
  description:
    'AURIX ile ön görüşme talep edin. Bireysel koçluk, yönetici koçluğu, kurumsal eğitim ve öğrenci koçluğu için size uygun hizmet ve uzmanı birlikte belirleyelim.',
  openGraph: {
    title: 'AURIX Ön Görüşme',
    description:
      'Size uygun koçluk, danışmanlık veya kurumsal eğitim sürecini birlikte belirlemek için AURIX ön görüşme formunu doldurun.',
  },
}

const WHAT_IS_INTRO = [
  {
    title: 'İhtiyacınızı anlarız',
    description: 'Destek almak istediğiniz alanı, mevcut durumunuzu ve beklentinizi kısaca değerlendiririz.',
  },
  {
    title: 'Uygun hizmeti belirleriz',
    description:
      'Bireysel koçluk, yönetici koçluğu, kurumsal eğitim veya öğrenci koçluğu seçeneklerinden hangisinin daha uygun olduğunu birlikte netleştiririz.',
  },
  {
    title: 'Uygun uzmanla eşleştiririz',
    description:
      'İhtiyacınıza, hedefinize ve tercihlerinize göre sizi uygun AURIX uzmanıyla buluşturmak için yönlendiririz.',
  },
]

const PROCESS_STEPS = [
  {
    title: 'Destek almak istediğiniz alanı seçin',
    description: 'Bireysel, yönetici, kurumsal, öğrenci veya emin değilim seçeneklerinden size en yakın olanı belirleyin.',
  },
  {
    title: 'Kısa formu doldurun',
    description: 'İletişim bilgilerinizi, görüşme dili tercihinizi ve ihtiyacınızı kısaca paylaşın.',
  },
  {
    title: 'Talebiniz değerlendirilsin',
    description: 'AURIX ekibi talebinizi inceleyerek uygun hizmet alanı ve uzman eşleşmesi için ön değerlendirme yapar.',
  },
  {
    title: 'Görüşme zamanı planlansın',
    description: 'Uygun takvim üzerinden ön görüşme zamanı belirlenir.',
  },
  {
    title: 'Doğru sürece yönlenin',
    description: 'Ön görüşme sonrası size uygun hizmet, uzman ve çalışma modeli netleştirilir.',
  },
]

const INTEREST_BUTTONS = [
  {
    label: 'Bireysel Koçluk',
    description: 'Yaşamımda yön, denge, netlik veya kişisel gelişim alanında destek arıyorum.',
    href: '/on-gorusme?interest=bireysel-kocluk#form',
  },
  {
    label: 'Yönetici Koçluğu',
    description: 'Liderlik rolümde daha etkili olmak, karar alma ve ekip yönetimi becerilerimi geliştirmek istiyorum.',
    href: '/on-gorusme?interest=yonetici-koclugu#form',
  },
  {
    label: 'Kurumsal Eğitim',
    description: 'Kurumumuz için liderlik, takım gelişimi, iletişim veya değişim yönetimi alanlarında eğitim / gelişim programı arıyoruz.',
    href: '/on-gorusme?interest=kurumsal-egitim#form',
  },
  {
    label: 'Öğrenci Koçluğu',
    description: 'Öğrenci / veli olarak hedef belirleme, sınav stratejisi, motivasyon veya kariyer farkındalığı konularında destek arıyorum.',
    href: '/on-gorusme?interest=ogrenci-koclugu#form',
  },
  {
    label: 'Kariyer ve Global Uyum',
    description: 'Kariyer yönümü, yurtdışı sürecimi veya yeni bir ülke / yeni çalışma düzenine uyum sürecimi netleştirmek istiyorum.',
    href: '/on-gorusme?interest=kariyer-koclugu#form',
  },
  {
    label: 'Emin Değilim',
    description: 'Hangi hizmetin bana uygun olduğunu bilmiyorum; ihtiyacımı birlikte değerlendirmek istiyorum.',
    href: '/on-gorusme?interest=emin-degilim#form',
  },
]

const TRUST_ITEMS = [
  {
    title: 'Baskısız bir ilk temas',
    description: 'Ön görüşme, sizi hemen bir programa yönlendirmek için değil; ihtiyacınızı anlamak için yapılır.',
  },
  {
    title: 'Doğru yönlendirme',
    description: 'Talebiniz hizmet alanı, uzmanlık ihtiyacı, çalışma dili ve beklentileriniz açısından değerlendirilir.',
  },
  {
    title: 'Açık ve etik süreç',
    description:
      'Koçluk ve danışmanlık süreçlerinin sınırları açık biçimde paylaşılır; ihtiyaç halinde farklı uzmanlık alanlarına yönlendirme yapılabilir.',
  },
]

const SUITABLE_FOR = [
  'Hangi hizmete ihtiyaç duyduğundan emin olmayanlar',
  'Bireysel koçluk sürecini tanımak isteyenler',
  'Yönetici koçluğu hakkında bilgi almak isteyen profesyoneller',
  'Kurumları için eğitim veya gelişim programı arayanlar',
  'Öğrenci koçluğu hakkında bilgi almak isteyen öğrenciler ve veliler',
  'Kariyer veya global uyum sürecinde destek arayanlar',
  'Doğru uzmanla eşleşmek isteyen danışanlar',
]

const MATCH_CRITERIA = [
  'Hizmet alanı',
  'Hedef ve ihtiyaç',
  'Uzmanlık konusu',
  'Çalışma dili',
  'Online / yüz yüze tercih',
  'Uzman uygunluğu',
  'Kurumsal veya bireysel yapı',
]

const FAQ_ITEMS = [
  {
    question: 'Ön görüşme ücretli mi?',
    answer:
      'Ön görüşmenin kapsamı ve koşulları AURIX tarafından belirlenir. İlk temas sürecinde görüşmenin içeriği, süresi ve sonraki adımlar hakkında bilgilendirme yapılır.',
  },
  {
    question: 'Ön görüşmede ne konuşulur?',
    answer:
      'Destek almak istediğiniz alan, mevcut ihtiyacınız, beklentileriniz, uygun hizmet seçenekleri ve olası uzman eşleşmesi değerlendirilir.',
  },
  {
    question: 'Hangi uzmanla görüşeceğimi ben seçebilir miyim?',
    answer:
      'Evet. Formda tercih ettiğiniz uzmanı belirtebilirsiniz. Emin değilseniz AURIX ekibi ihtiyacınıza göre uygun uzman eşleşmesi konusunda yönlendirme yapar.',
  },
  {
    question: 'Görüşmeler online yapılabilir mi?',
    answer:
      'Evet. Uzman ve hizmet alanına göre online görüşme seçenekleri değerlendirilebilir. Kurumsal eğitimlerde yüz yüze veya hibrit seçenekler ayrıca planlanabilir.',
  },
  {
    question: 'Hangi hizmetin bana uygun olduğunu bilmiyorsam ne yapmalıyım?',
    answer: 'Formda "Emin değilim" seçeneğini işaretleyebilirsiniz. Ön görüşmede ihtiyacınız birlikte değerlendirilir.',
  },
  {
    question: 'Kurumsal eğitim için de bu formu kullanabilir miyim?',
    answer:
      'Evet. Kurumsal eğitim seçeneğini işaretleyerek kurumunuzun ihtiyacını paylaşabilirsiniz. AURIX ekibi ihtiyaç analizi için sizinle iletişime geçer.',
  },
  {
    question: 'Koçluk terapi yerine geçer mi?',
    answer:
      'Hayır. AURIX’te koçluk ve danışmanlık süreçleri psikoterapi, tıbbi tedavi veya klinik müdahalenin yerine geçmez.',
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

export default function OnGorusmePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero */}
      <section aria-labelledby="on-gorusme-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase">
                Ön Görüşme
              </span>
              <h1
                id="on-gorusme-hero-heading"
                className="font-serif text-ink tracking-tight text-display-lg"
              >
                İlk adımı birlikte netleştirelim.
              </h1>
              <p className="text-body-md text-muted leading-relaxed max-w-xl">
                Hangi hizmetin veya uzmanın size uygun olduğundan emin değilseniz, kısa bir ön
                görüşme ile ihtiyacınızı birlikte değerlendirir; sizi uygun hizmet alanı ve
                uzmanla eşleştirmek için yönlendiririz.
              </p>
              <p className="text-body-sm text-body leading-relaxed max-w-xl">
                Ön görüşme, satış baskısı oluşturan bir görüşme değil; ihtiyacınızı anlamak ve
                doğru başlangıç noktasını belirlemek için tasarlanmış ilk temas adımıdır.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#form"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Ön Görüşme Formunu Doldur
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

      {/* Ön görüşme nedir */}
      <section aria-labelledby="what-is-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="mb-10 max-w-2xl">
              <h2 id="what-is-heading" className="text-display-lg font-semibold text-ink">
                Ön görüşme nedir?
              </h2>
              <p className="mt-3 text-body-md text-muted leading-relaxed">
                Ön görüşme, AURIX ile ilk temas adımıdır. Bu görüşmede ihtiyacınız, hedefiniz,
                beklentiniz ve size uygun olabilecek hizmet alanı değerlendirilir. Amaç, sizi
                doğrudan bir programa yönlendirmek değil; doğru hizmet, doğru uzman ve doğru süreç
                için başlangıç noktasını birlikte belirlemektir.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {WHAT_IS_INTRO.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-surface-elevated border border-hairline rounded-sm p-6 flex flex-col gap-2"
                >
                  <span className="text-xs font-mono font-bold text-[#C5A059]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg text-ink">{item.title}</h3>
                  <p className="text-body-sm text-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Süreç nasıl işler */}
      <section aria-labelledby="process-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <h2 id="process-heading" className="text-display-lg font-semibold text-ink mb-10 max-w-xl">
              Süreç nasıl işler?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-3">
                <span className="font-mono text-caption font-medium text-muted-soft tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-8 h-px bg-ink" aria-hidden="true" />
                <h3 className="text-title-sm font-semibold text-ink">{step.title}</h3>
                <p className="text-body-sm text-body leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Akıllı başlangıç seçimi */}
      <section aria-labelledby="interest-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="mb-10 max-w-xl">
              <h2 id="interest-heading" className="text-display-lg font-semibold text-ink">
                Hangi konuda destek almak istiyorsunuz?
              </h2>
              <p className="mt-3 text-body-md text-muted">
                Emin değilseniz &quot;Emin değilim&quot; seçeneğini işaretleyebilirsiniz. Ön
                görüşmede ihtiyacınız birlikte netleştirilir.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {INTEREST_BUTTONS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block bg-surface-elevated border border-hairline rounded-sm p-6 hover:border-[#14797C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                >
                  <h3 className="text-title-sm font-semibold text-ink mb-2">{item.label}</h3>
                  <p className="text-body-sm text-body leading-relaxed">{item.description}</p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section id="form" aria-labelledby="form-heading" className="py-section bg-canvas scroll-mt-24">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <h2 id="form-heading" className="text-display-lg font-semibold text-ink mb-3">
              Ön görüşme talep formu
            </h2>
            <p className="text-body-md text-muted mb-8 max-w-xl">
              Kısa formu doldurarak ihtiyacınızı bizimle paylaşın. Talebiniz değerlendirildikten
              sonra uygun hizmet, uzman veya görüşme süreci için sizinle iletişime geçilecektir.
            </p>
          </FadeIn>
          <Suspense>
            <LeadForm variant="on-gorusme" />
          </Suspense>
        </div>
      </section>

      {/* Güven bölümü */}
      <section aria-labelledby="trust-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <h2 id="trust-heading" className="text-display-lg font-semibold text-ink mb-10 max-w-xl">
              Ön görüşmede sizi ne bekler?
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-elevated border border-hairline rounded-sm p-6 flex flex-col gap-2"
                >
                  <h3 className="font-serif text-lg text-ink">{item.title}</h3>
                  <p className="text-body-sm text-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-body-sm text-muted max-w-2xl leading-relaxed">
              AURIX’te koçluk ve danışmanlık süreçleri psikoterapi, tıbbi tedavi veya klinik
              müdahalenin yerine geçmez. Ön görüşme, bu sınırları doğru anlamak ve uygun destek
              alanını belirlemek için de önemlidir.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Kimler için uygun */}
      <section aria-labelledby="suitable-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 id="suitable-heading" className="text-display-lg font-semibold text-ink">
                Ön görüşme kimler için uygundur?
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn delay={0.08}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {SUITABLE_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-body-sm text-body">
                    <Check className="h-4 w-4 text-[#14797C] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Uzman eşleşme açıklaması */}
      <section aria-labelledby="match-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-4">
              <h2 id="match-heading" className="text-display-lg font-semibold text-ink">
                Doğru uzmanla nasıl eşleşirsiniz?
              </h2>
              <p className="text-body-md text-muted leading-relaxed">
                AURIX’te uzman eşleşmesi yalnızca unvanlara göre yapılmaz. Ön görüşme talebiniz;
                destek almak istediğiniz alan, hedefiniz, çalışma dili tercihiniz, online/yüz yüze
                beklentiniz ve varsa uzman tercihiniz dikkate alınarak değerlendirilir.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="flex flex-wrap gap-2.5 mt-6 mb-8" aria-label="Eşleşme kriterleri">
              {MATCH_CRITERIA.map((item) => (
                <li
                  key={item}
                  className="text-sm font-mono px-3.5 py-2 bg-surface-elevated border border-hairline rounded-sm text-body"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <Link
            href="/uzmanlar"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
          >
            Uzman Kadromuzu İncele
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 id="faq-heading" className="text-display-lg font-semibold text-ink mb-10">
                Ön görüşme hakkında sık sorulan sorular
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
