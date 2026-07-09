import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LeadForm } from '@/components/LeadForm'
import { FinalCTA } from '@/components/sections/FinalCTA'
import type { Locale } from '@/lib/i18n/types'
import { localeHref } from '@/lib/i18n/pick'

const COPY = {
  tr: {
    metaTitle: 'Ön Görüşme Talep Et',
    metaDescription:
      'AURIX ile ön görüşme talep edin. Bireysel koçluk, yönetici koçluğu, kurumsal eğitim ve öğrenci koçluğu için size uygun hizmet ve uzmanı birlikte belirleyelim.',
    ogTitle: 'AURIX Ön Görüşme',
    ogDescription:
      'Size uygun koçluk, danışmanlık veya kurumsal eğitim sürecini birlikte belirlemek için AURIX ön görüşme formunu doldurun.',
    heroEyebrow: 'Ön Görüşme',
    heroHeading: 'İlk adımı birlikte netleştirelim.',
    heroBody:
      'Hangi hizmetin veya uzmanın size uygun olduğundan emin değilseniz, kısa bir ön görüşme ile ihtiyacınızı birlikte değerlendirir; sizi uygun hizmet alanı ve uzmanla eşleştirmek için yönlendiririz.',
    heroSubBody:
      'Ön görüşme, satış baskısı oluşturan bir görüşme değil; ihtiyacınızı anlamak ve doğru başlangıç noktasını belirlemek için tasarlanmış ilk temas adımıdır.',
    heroCtaPrimary: 'Ön Görüşme Formunu Doldur',
    heroCtaSecondary: 'Hizmetleri İncele',
    whatIsHeading: 'Ön görüşme nedir?',
    whatIsBody:
      'Ön görüşme, AURIX ile ilk temas adımıdır. Bu görüşmede ihtiyacınız, hedefiniz, beklentiniz ve size uygun olabilecek hizmet alanı değerlendirilir. Amaç, sizi doğrudan bir programa yönlendirmek değil; doğru hizmet, doğru uzman ve doğru süreç için başlangıç noktasını birlikte belirlemektir.',
    whatIsIntro: [
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
    ],
    processHeading: 'Süreç nasıl işler?',
    processSteps: [
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
    ],
    interestHeading: 'Hangi konuda destek almak istiyorsunuz?',
    interestBody: 'Emin değilseniz "Emin değilim" seçeneğini işaretleyebilirsiniz. Ön görüşmede ihtiyacınız birlikte netleştirilir.',
    interestButtons: [
      {
        label: 'Bireysel Koçluk',
        description: 'Yaşamımda yön, denge, netlik veya kişisel gelişim alanında destek arıyorum.',
        interest: 'bireysel-kocluk',
      },
      {
        label: 'Yönetici Koçluğu',
        description: 'Liderlik rolümde daha etkili olmak, karar alma ve ekip yönetimi becerilerimi geliştirmek istiyorum.',
        interest: 'yonetici-koclugu',
      },
      {
        label: 'Kurumsal Eğitim',
        description: 'Kurumumuz için liderlik, takım gelişimi, iletişim veya değişim yönetimi alanlarında eğitim / gelişim programı arıyoruz.',
        interest: 'kurumsal-egitim',
      },
      {
        label: 'Öğrenci Koçluğu',
        description: 'Öğrenci / veli olarak hedef belirleme, sınav stratejisi, motivasyon veya kariyer farkındalığı konularında destek arıyorum.',
        interest: 'ogrenci-koclugu',
      },
      {
        label: 'Kariyer ve Global Uyum',
        description: 'Kariyer yönümü, yurtdışı sürecimi veya yeni bir ülke / yeni çalışma düzenine uyum sürecimi netleştirmek istiyorum.',
        interest: 'kariyer-koclugu',
      },
      {
        label: 'Emin Değilim',
        description: 'Hangi hizmetin bana uygun olduğunu bilmiyorum; ihtiyacımı birlikte değerlendirmek istiyorum.',
        interest: 'emin-degilim',
      },
    ],
    formHeading: 'Ön görüşme talep formu',
    formBody:
      'Kısa formu doldurarak ihtiyacınızı bizimle paylaşın. Talebiniz değerlendirildikten sonra uygun hizmet, uzman veya görüşme süreci için sizinle iletişime geçilecektir.',
    trustHeading: 'Ön görüşmede sizi ne bekler?',
    trustItems: [
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
    ],
    trustNote:
      'AURIX’te koçluk ve danışmanlık süreçleri psikoterapi, tıbbi tedavi veya klinik müdahalenin yerine geçmez. Ön görüşme, bu sınırları doğru anlamak ve uygun destek alanını belirlemek için de önemlidir.',
    suitableHeading: 'Ön görüşme kimler için uygundur?',
    suitableFor: [
      'Hangi hizmete ihtiyaç duyduğundan emin olmayanlar',
      'Bireysel koçluk sürecini tanımak isteyenler',
      'Yönetici koçluğu hakkında bilgi almak isteyen profesyoneller',
      'Kurumları için eğitim veya gelişim programı arayanlar',
      'Öğrenci koçluğu hakkında bilgi almak isteyen öğrenciler ve veliler',
      'Kariyer veya global uyum sürecinde destek arayanlar',
      'Doğru uzmanla eşleşmek isteyen danışanlar',
    ],
    matchHeading: 'Doğru uzmanla nasıl eşleşirsiniz?',
    matchBody:
      'AURIX’te uzman eşleşmesi yalnızca unvanlara göre yapılmaz. Ön görüşme talebiniz; destek almak istediğiniz alan, hedefiniz, çalışma dili tercihiniz, online/yüz yüze beklentiniz ve varsa uzman tercihiniz dikkate alınarak değerlendirilir.',
    matchCriteriaAriaLabel: 'Eşleşme kriterleri',
    matchCriteria: [
      'Hizmet alanı',
      'Hedef ve ihtiyaç',
      'Uzmanlık konusu',
      'Çalışma dili',
      'Online / yüz yüze tercih',
      'Uzman uygunluğu',
      'Kurumsal veya bireysel yapı',
    ],
    matchCta: 'Uzman Kadromuzu İncele',
    faqHeading: 'Ön görüşme hakkında sık sorulan sorular',
    faqItems: [
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
        answer: 'Hayır. AURIX’te koçluk ve danışmanlık süreçleri psikoterapi, tıbbi tedavi veya klinik müdahalenin yerine geçmez.',
      },
    ],
  },
  en: {
    metaTitle: 'Request an Introductory Call',
    metaDescription:
      'Request an introductory call with AURIX. Let’s define together the right service and expert for personal coaching, executive coaching, corporate training, or student coaching.',
    ogTitle: 'AURIX Introductory Call',
    ogDescription:
      'Fill out the AURIX introductory call form to define together the right coaching, consulting, or corporate training process for you.',
    heroEyebrow: 'Introductory Call',
    heroHeading: 'Let’s clarify the first step together.',
    heroBody:
      'If you’re not sure which service or expert is right for you, a short introductory call lets us assess your need together and guide you to the right service area and expert.',
    heroSubBody:
      'The introductory call is not a sales-driven conversation; it’s a first-contact step designed to understand your need and identify the right starting point.',
    heroCtaPrimary: 'Fill Out the Introductory Call Form',
    heroCtaSecondary: 'Explore Services',
    whatIsHeading: 'What is an introductory call?',
    whatIsBody:
      'The introductory call is the first contact step with AURIX. In this call, your need, goal, expectations, and the service area that may fit you are assessed. The aim is not to direct you straight into a program, but to define together the right service, the right expert, and the right starting point.',
    whatIsIntro: [
      {
        title: 'We understand your need',
        description: 'We briefly assess the area you want support in, your current situation, and your expectations.',
      },
      {
        title: 'We identify the right service',
        description:
          'We clarify together which option — personal coaching, executive coaching, corporate training, or student coaching — fits best.',
      },
      {
        title: 'We match you with the right expert',
        description: 'We guide you toward the AURIX expert who fits your need, goal, and preferences.',
      },
    ],
    processHeading: 'How does the process work?',
    processSteps: [
      {
        title: 'Choose the area you want support in',
        description: 'Pick whichever is closest to you: personal, executive, corporate, student, or not sure.',
      },
      {
        title: 'Fill out the short form',
        description: 'Share your contact details, preferred meeting language, and a brief description of your need.',
      },
      {
        title: 'Your request is reviewed',
        description: 'The AURIX team reviews your request and does a preliminary assessment for the right service area and expert match.',
      },
      {
        title: 'A call time is scheduled',
        description: 'An introductory call time is set based on available slots.',
      },
      {
        title: 'You’re guided to the right process',
        description: 'After the introductory call, the right service, expert, and working model are clarified for you.',
      },
    ],
    interestHeading: 'Which area would you like support in?',
    interestBody: 'If you’re not sure, you can select “Not Sure.” Your need will be clarified together during the introductory call.',
    interestButtons: [
      {
        label: 'Personal Coaching',
        description: 'I’m looking for support with direction, balance, clarity, or personal growth in my life.',
        interest: 'bireysel-kocluk',
      },
      {
        label: 'Executive Coaching',
        description: 'I want to be more effective in my leadership role and develop my decision-making and team management skills.',
        interest: 'yonetici-koclugu',
      },
      {
        label: 'Corporate Training',
        description: 'We’re looking for a training / development program for our organization in leadership, team growth, communication, or change management.',
        interest: 'kurumsal-egitim',
      },
      {
        label: 'Student Coaching',
        description: 'As a student / parent, I’m looking for support with goal setting, exam strategy, motivation, or career awareness.',
        interest: 'ogrenci-koclugu',
      },
      {
        label: 'Career and Global Adaptation',
        description: 'I want to clarify my career direction, my move abroad, or my adjustment to a new country / working environment.',
        interest: 'kariyer-koclugu',
      },
      {
        label: 'Not Sure',
        description: 'I don’t know which service fits me; I’d like to assess my need together.',
        interest: 'emin-degilim',
      },
    ],
    formHeading: 'Introductory call request form',
    formBody:
      'Fill out the short form to share your need with us. Once your request is reviewed, we’ll get in touch about the right service, expert, or call process.',
    trustHeading: 'What to expect from the introductory call',
    trustItems: [
      {
        title: 'A pressure-free first contact',
        description: 'The introductory call isn’t meant to steer you into a program right away — it’s meant to understand your need.',
      },
      {
        title: 'The right guidance',
        description: 'Your request is assessed in terms of service area, expertise needed, working language, and expectations.',
      },
      {
        title: 'A transparent, ethical process',
        description:
          'The boundaries of coaching and consulting processes are shared openly; you may be referred to a different area of expertise if needed.',
      },
    ],
    trustNote:
      'At AURIX, coaching and consulting processes do not replace psychotherapy, medical treatment, or clinical intervention. The introductory call also helps clarify these boundaries and identify the right kind of support.',
    suitableHeading: 'Who is the introductory call for?',
    suitableFor: [
      'Those unsure which service they need',
      'Those who want to learn about the personal coaching process',
      'Professionals who want information about executive coaching',
      'Those looking for a training or development program for their organization',
      'Students and parents who want information about student coaching',
      'Those looking for support with career or global adaptation',
      'Clients who want to be matched with the right expert',
    ],
    matchHeading: 'How are you matched with the right expert?',
    matchBody:
      'At AURIX, expert matching isn’t based on titles alone. Your introductory call request is assessed based on the area you need support in, your goal, your preferred working language, your online/in-person expectations, and any expert preference you may have.',
    matchCriteriaAriaLabel: 'Matching criteria',
    matchCriteria: [
      'Service area',
      'Goal and need',
      'Area of expertise',
      'Working language',
      'Online / in-person preference',
      'Expert availability',
      'Corporate or individual structure',
    ],
    matchCta: 'Explore Our Expert Team',
    faqHeading: 'Frequently asked questions about the introductory call',
    faqItems: [
      {
        question: 'Is the introductory call paid?',
        answer:
          'The scope and terms of the introductory call are set by AURIX. During the first-contact process, you’ll be informed about the content, duration, and next steps of the call.',
      },
      {
        question: 'What is discussed during the introductory call?',
        answer:
          'The area you want support in, your current need, your expectations, suitable service options, and a possible expert match are assessed.',
      },
      {
        question: 'Can I choose which expert I speak with?',
        answer:
          'Yes. You can indicate your preferred expert on the form. If you’re not sure, the AURIX team will guide you toward the right expert match based on your need.',
      },
      {
        question: 'Can calls be held online?',
        answer:
          'Yes. Depending on the expert and service area, online meeting options can be arranged. In-person or hybrid options can also be planned for corporate training.',
      },
      {
        question: 'What should I do if I don’t know which service fits me?',
        answer: 'You can select “Not Sure” on the form. Your need will be assessed together during the introductory call.',
      },
      {
        question: 'Can I use this form for corporate training as well?',
        answer:
          'Yes. You can select the corporate training option and share your organization’s need. The AURIX team will reach out to you for a needs analysis.',
      },
      {
        question: 'Does coaching replace therapy?',
        answer: 'No. At AURIX, coaching and consulting processes do not replace psychotherapy, medical treatment, or clinical intervention.',
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
    openGraph: { title: copy.ogTitle, description: copy.ogDescription },
    alternates: { languages: { tr: '/on-gorusme', en: '/en/on-gorusme' } },
  }
}

export default async function OnGorusmePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const copy = COPY[locale]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section aria-labelledby="on-gorusme-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase">
                {copy.heroEyebrow}
              </span>
              <h1
                id="on-gorusme-hero-heading"
                className="font-serif text-ink tracking-tight text-display-lg"
              >
                {copy.heroHeading}
              </h1>
              <p className="text-body-md text-muted leading-relaxed max-w-xl">
                {copy.heroBody}
              </p>
              <p className="text-body-sm text-body leading-relaxed max-w-xl">
                {copy.heroSubBody}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={localeHref('/iletisim', locale)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {copy.heroCtaPrimary}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={localeHref('/hizmetler', locale)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {copy.heroCtaSecondary}
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
                {copy.whatIsHeading}
              </h2>
              <p className="mt-3 text-body-md text-muted leading-relaxed">
                {copy.whatIsBody}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {copy.whatIsIntro.map((item, i) => (
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
              {copy.processHeading}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {copy.processSteps.map((step, i) => (
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
                {copy.interestHeading}
              </h2>
              <p className="mt-3 text-body-md text-muted">
                {copy.interestBody}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {copy.interestButtons.map((item) => (
                <Link
                  key={item.interest}
                  href={localeHref(`/iletisim?interest=${item.interest}`, locale)}
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
              {copy.formHeading}
            </h2>
            <p className="text-body-md text-muted mb-8 max-w-xl">
              {copy.formBody}
            </p>
          </FadeIn>
          <Suspense>
            <LeadForm variant="on-gorusme" locale={locale} />
          </Suspense>
        </div>
      </section>

      {/* Güven bölümü */}
      <section aria-labelledby="trust-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <h2 id="trust-heading" className="text-display-lg font-semibold text-ink mb-10 max-w-xl">
              {copy.trustHeading}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {copy.trustItems.map((item) => (
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
              {copy.trustNote}
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
                {copy.suitableHeading}
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn delay={0.08}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {copy.suitableFor.map((item) => (
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
                {copy.matchHeading}
              </h2>
              <p className="text-body-md text-muted leading-relaxed">
                {copy.matchBody}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="flex flex-wrap gap-2.5 mt-6 mb-8" aria-label={copy.matchCriteriaAriaLabel}>
              {copy.matchCriteria.map((item) => (
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
            href={localeHref('/uzmanlar', locale)}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
          >
            {copy.matchCta}
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
