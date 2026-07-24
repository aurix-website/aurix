import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  LayoutGrid,
  Leaf,
  ShieldCheck,
  Target,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ExpertsGrid } from '@/components/ExpertsGrid'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { localeHref } from '@/lib/i18n/pick'
import type { Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    metaTitle: 'Uzmanlar',
    metaDescription:
      'AURIX uzman kadrosu; bireysel koçluk, yönetici koçluğu, kurumsal eğitim, öğrenci koçluğu, kariyer gelişimi ve global uyum alanlarında profesyonel destek sunar.',
    breadcrumbHome: 'Ana Sayfa',
    breadcrumbCurrent: 'Uzmanlar',
    eyebrow: 'Aurix Ekibi',
    heading: 'Uzmanlarımız',
    body: 'Her uzmanımız farklı deneyim ve yetkinliklerle yanınızda. Hedeflerinize en uygun rehberliği keşfedin, birlikte anlamlı ve sürdürülebilir dönüşüm yaratalım.',
    ctaPrimary: 'Uzmanları Keşfet',
    ctaSecondary: 'Ön Görüşme Talep Et',
    teamPhotoAlt: 'AURIX uzman ekibi',
    teamBadge: 'AURIX Ekibi',
    listHeading: 'Uzman listesi',
    approachEyebrow: 'Yaklaşımımız',
    approachHeading: 'Çalışma Yaklaşımımız',
    approachItems: [
      {
        icon: Target,
        title: 'Netlik',
        description: 'Hedefleri netleştirir, öncelikleri belirler ve odaklanmayı sağlar.',
      },
      {
        icon: ShieldCheck,
        title: 'Güven',
        description: 'Gizlilik, saygı ve empati temelli güvenli bir alan sunar.',
      },
      {
        icon: LayoutGrid,
        title: 'Yapı',
        description: 'Kanıta dayalı yöntemlerle sürdürülebilir gelişimi destekler.',
      },
      {
        icon: Leaf,
        title: 'Sürdürülebilirlik',
        description: 'Kalıcı gelişim için alışkanlıkları ve sistemleri güçlendirir.',
      },
    ],
    faqHeading: 'Sıkça sorulan sorular',
    faqItems: [
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
    ],
  },
  en: {
    metaTitle: 'Experts',
    metaDescription:
      'The AURIX team of experts offers professional support in personal coaching, executive coaching, corporate training, student coaching, career development, and global adaptation.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Experts',
    eyebrow: 'The AURIX Team',
    heading: 'Our Experts',
    body: 'Each of our experts brings different experience and expertise to your side. Discover the guidance that best fits your goals, and let’s create meaningful, sustainable change together.',
    ctaPrimary: 'Discover Our Experts',
    ctaSecondary: 'Request an Introductory Call',
    teamPhotoAlt: 'The AURIX team of experts',
    teamBadge: 'The AURIX Team',
    listHeading: 'Expert list',
    approachEyebrow: 'Our Approach',
    approachHeading: 'How We Work',
    approachItems: [
      {
        icon: Target,
        title: 'Clarity',
        description: 'Clarifies goals, sets priorities, and enables focus.',
      },
      {
        icon: ShieldCheck,
        title: 'Trust',
        description: 'Offers a safe space built on confidentiality, respect, and empathy.',
      },
      {
        icon: LayoutGrid,
        title: 'Structure',
        description: 'Supports sustainable development through evidence-based methods.',
      },
      {
        icon: Leaf,
        title: 'Sustainability',
        description: 'Strengthens habits and systems for lasting growth.',
      },
    ],
    faqHeading: 'Frequently asked questions',
    faqItems: [
      {
        question: 'How will I know which expert I should work with?',
        answer:
          'In the introductory call, we assess your need, goal, and expectations together. Based on that, we match you with the right service area and expert.',
      },
      {
        question: 'Can I choose an expert directly?',
        answer:
          'Yes. After reviewing expert profiles, you can request an introductory call directly for a specific expert. If you’re not sure, the AURIX team will guide you toward the right match.',
      },
      {
        question: 'Can meetings with experts be held online?',
        answer:
          'Depending on the expert and service area, online meeting options may be offered. The appropriate working format is determined together during the introductory call.',
      },
      {
        question: 'Is it possible to work with more than one expert?',
        answer:
          'Depending on the need, this is possible. For example, involving different experts across areas such as personal coaching, corporate training, or global adaptation can be considered.',
      },
      {
        question: 'How should the information in expert profiles be used?',
        answer:
          'Expert profiles are prepared to introduce a person’s education, experience, working areas, and approach. The final match is made once the need becomes clear during the introductory call.',
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
    alternates: { languages: { tr: '/uzmanlar', en: '/en/uzmanlar' } },
  }
}

export default async function UzmanlarPage({
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
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <section aria-labelledby="uzmanlar-hero-heading" className="relative overflow-hidden bg-canvas py-16 sm:py-20">
        <div className="pointer-events-none absolute right-[-120px] top-[-180px] h-[460px] w-[600px] rounded-full border border-[#C5A059]/15" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[-40px] top-[-120px] h-[360px] w-[470px] rounded-full border border-[#C5A059]/10" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-container grid-cols-1 gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <FadeIn>
            <div>
              <nav className="mb-10 text-xs text-[#5B6168]" aria-label="Breadcrumb">
                <Link href={localeHref('/', locale)} className="hover:text-[#14797C]">{copy.breadcrumbHome}</Link>
                <span className="mx-2 text-[#C5A059]">/</span>
                <span>{copy.breadcrumbCurrent}</span>
              </nav>

              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C5A059]" aria-hidden="true" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                  {copy.eyebrow}
                </span>
              </div>

              <h1
                id="uzmanlar-hero-heading"
                className="font-serif text-display-serif-lg text-[#1A1C1E]"
              >
                {copy.heading}
              </h1>
              <p className="mt-5 max-w-xl text-body-md leading-relaxed text-[#5B6168]">
                {copy.body}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#uzman-listesi"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#14797C] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f5f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {copy.ctaPrimary}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={localeHref('/iletisim', locale)}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#14797C] px-6 py-3.5 text-sm font-semibold text-[#14797C] transition-colors hover:bg-[#14797C]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="group relative mx-auto w-full max-w-[620px]">
              <div className="pointer-events-none absolute -right-8 top-8 h-48 w-48 border border-[#C5A059]/10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" aria-hidden="true" />
              <div className="pointer-events-none absolute -left-5 bottom-8 h-28 w-28 border border-[#14797C]/10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" aria-hidden="true" />

              <div className="relative aspect-[4/3] overflow-hidden border border-[#E2E5DE] bg-[#F4F0E7] shadow-[0_28px_80px_rgba(26,28,30,0.08)]">
                <Image
                  src="/media/expert-team.png"
                  alt={copy.teamPhotoAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 620px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-5 left-5 border border-white/70 bg-[#FCFDF9]/90 px-4 py-3 shadow-[0_14px_36px_rgba(26,28,30,0.08)] backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#C5A059]">
                    {copy.teamBadge}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="uzman-listesi" aria-labelledby="uzman-listesi-heading" className="bg-surface-soft py-14 scroll-mt-24 sm:py-16">
        <div className="mx-auto max-w-container px-6">
          <FadeIn>
            <div className="sr-only">
              <h2 id="uzman-listesi-heading">{copy.listHeading}</h2>
            </div>
          </FadeIn>

          <ExpertsGrid locale={locale} />
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-container px-6">
          <FadeIn>
            <div className="mb-8 text-center">
              <div className="mb-3 flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-[#C5A059]" aria-hidden="true" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                  {copy.approachEyebrow}
                </span>
                <span className="h-px w-12 bg-[#C5A059]" aria-hidden="true" />
              </div>
              <h2 id="approach-heading" className="font-serif text-display-serif-md text-[#1A1C1E]">
                {copy.approachHeading}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {copy.approachItems.map((item, index) => {
                const Icon = item.icon
                const accent = ['#14797C', '#C5A059', '#82906F', '#14797C'][index]
                return (
                  <article key={item.title} className="rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-5 shadow-[0_12px_35px_rgba(26,28,30,0.05)]">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-white"
                        style={{ color: accent, borderColor: `${accent}33` }}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-[#1A1C1E]">{item.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-[#5B6168]">{item.description}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-section bg-surface-soft">
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
