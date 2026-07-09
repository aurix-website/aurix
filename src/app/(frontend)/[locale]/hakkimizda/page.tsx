import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Heart,
  LayoutGrid,
  Leaf,
  Map,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { APPROACH_STEPS } from '@/lib/approach-steps-data'
import { EXPERT_PLACEHOLDERS, STATIC_EXPERTS } from '@/lib/experts-data'
import { pick, localeHref } from '@/lib/i18n/pick'
import type { Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    heroEyebrow: 'Hakkımızda',
    heroHeading: 'İhtiyacı anlayan, doğru uzmanla buluşturan çok disiplinli gelişim çatısı.',
    heroBody:
      'AURIX, Kaan Yazıcı liderliğinde bireyler, yöneticiler, kurumlar ve öğrenciler için güvenilir, yapılandırılmış ve insan odaklı koçluk süreçleri tasarlar.',
    ctaPrimary: 'Ön Görüşme Talep Et',
    ctaSecondary: 'Uzman Kadromuzu Tanıyın',
    founderCardEyebrow: 'Kurucu Liderlik',
    founderCardTitle: 'Kaan Yazıcı ve AURIX yaklaşımı',
    founderCardBody: 'İnsan odağı, etik çerçeve ve doğru uzman eşleşmesi aynı masada buluşur.',
    heroPillars: ['Netlik', 'Eşleşme', 'Gelişim'],
    founderStoryEyebrow: 'Founder Story',
    founderStoryHeading: 'Kurucumuz Kaan Yazıcı’nın yolculuğu',
    founderStoryParagraphs: [
      'AURIX’in kurucu hikâyesi, insanı yalnızca mesleki başarılarıyla değil; zihinsel, duygusal ve sosyal bütünlüğüyle ele alma fikrine dayanır.',
      'Kaan Yazıcı, sağlık alanındaki deneyimini kamu yönetimi perspektifi ve profesyonel koçluk yaklaşımıyla birleştirerek bireylerin ve takımların potansiyellerini daha bilinçli şekilde ortaya çıkarmalarına eşlik eder.',
    ],
    founderHighlights: [
      { icon: Heart, title: 'Sağlık alanından insan odaklı deneyim' },
      { icon: LayoutGrid, title: 'Kamu yönetimi perspektifi' },
      { icon: Users, title: 'Profesyonel koçluk ve takım gelişimi' },
    ],
    founderCta: 'Kaan Yazıcı’yı Tanıyın',
    whyEyebrow: 'Neden AURIX?',
    whyHeading: 'Tek tip cevaplar yerine doğru bağlam.',
    whyItems: [
      {
        icon: LayoutGrid,
        title: 'Çok Disiplinli Bakış',
        description: 'Farklı mesleki deneyimleri tek bir gelişim çatısı altında birleştirir.',
      },
      {
        icon: UserCheck,
        title: 'Doğru Uzman Eşleşmesi',
        description: 'İhtiyacı anlayıp danışanı uygun hizmet alanı ve uzmanla buluşturur.',
      },
      {
        icon: Map,
        title: 'Yapılandırılmış Süreç',
        description: 'Hedef netliği, süreç tasarımı ve takip adımlarını birlikte kurar.',
      },
    ],
    approachEyebrow: 'AURIX Yaklaşımı',
    approachHeading: 'Doğru ihtiyaç, doğru uzman, doğru süreç.',
    approachBody:
      'Süreç doğrudan hizmet önermekle başlamaz; önce ihtiyaç anlaşılır, sonra uygun uzman ve çalışma çerçevesi kurulur.',
    valuesEyebrow: 'Değerler',
    valuesHeading: 'AURIX değerleri',
    values: [
      { icon: Target, title: 'Netlik', description: 'Gerçek ihtiyaç ve hedef görünür olur.' },
      { icon: ShieldCheck, title: 'Güven', description: 'Gizlilik ve etik sınırlar korunur.' },
      { icon: UserCheck, title: 'Uygun Eşleşme', description: 'Danışan doğru uzmanla buluşur.' },
      { icon: Leaf, title: 'Sürdürülebilir Gelişim', description: 'Uygulanabilir gelişim adımları kurulur.' },
      { icon: BriefcaseBusiness, title: 'Profesyonel Sorumluluk', description: 'Süreç açık ve yapılandırılmış ilerler.' },
    ],
    ethicsHeading: 'Etik ve profesyonel sınırlar',
    ethicsParagraphs: [
      'AURIX’te koçluk ve danışmanlık süreçleri; bireyin veya kurumun gelişim hedeflerine eşlik eden profesyonel süreçlerdir. Psikoterapi, tıbbi tedavi veya klinik müdahalenin yerine geçmez.',
      'İhtiyaç farklı bir uzmanlık alanına yönlendirme gerektirdiğinde, bu sınırlar açık ve sorumlu biçimde gözetilir.',
    ],
    ethicsCta: 'Etik çerçeve hakkında sık sorulanları inceleyin',
    expertPhotoAlt: (name: string) => `${name} uzman görseli`,
    metaTitle: 'Hakkımızda',
    metaDescription:
      'AURIX; farklı uzmanlık alanlarından gelen profesyonellerin deneyimini tek bir gelişim çatısı altında buluşturan koçluk ve danışmanlık platformudur.',
  },
  en: {
    heroEyebrow: 'About',
    heroHeading: 'A multi-disciplinary development framework that understands the need and matches the right expert.',
    heroBody:
      'Led by Kaan Yazıcı, AURIX designs reliable, structured, and human-centered coaching processes for individuals, executives, organizations, and students.',
    ctaPrimary: 'Request an Introductory Call',
    ctaSecondary: 'Meet Our Expert Team',
    founderCardEyebrow: 'Founding Leadership',
    founderCardTitle: 'Kaan Yazıcı and the AURIX Approach',
    founderCardBody: 'A human-centered focus, ethical framework, and right expert match come together at the same table.',
    heroPillars: ['Clarity', 'Match', 'Growth'],
    founderStoryEyebrow: 'Founder Story',
    founderStoryHeading: 'Founder Kaan Yazıcı’s Journey',
    founderStoryParagraphs: [
      'AURIX’s founding story rests on the idea of approaching a person not only through professional achievement, but through mental, emotional, and social wholeness.',
      'Kaan Yazıcı combines experience from the healthcare field with a public administration perspective and a professional coaching approach, accompanying individuals and teams as they bring out their potential more consciously.',
    ],
    founderHighlights: [
      { icon: Heart, title: 'Human-centered experience from healthcare' },
      { icon: LayoutGrid, title: 'A public administration perspective' },
      { icon: Users, title: 'Professional coaching and team development' },
    ],
    founderCta: 'Meet Kaan Yazıcı',
    whyEyebrow: 'Why AURIX?',
    whyHeading: 'The right context, instead of one-size-fits-all answers.',
    whyItems: [
      {
        icon: LayoutGrid,
        title: 'A Multi-Disciplinary View',
        description: 'Brings together different professional backgrounds under one development framework.',
      },
      {
        icon: UserCheck,
        title: 'The Right Expert Match',
        description: 'Understands the need and matches the client with the right service area and expert.',
      },
      {
        icon: Map,
        title: 'A Structured Process',
        description: 'Builds goal clarity, process design, and follow-up steps together.',
      },
    ],
    approachEyebrow: 'AURIX Approach',
    approachHeading: 'The right need, the right expert, the right process.',
    approachBody:
      'The process doesn’t begin by proposing a service directly — the need is understood first, then the right expert and working framework are put in place.',
    valuesEyebrow: 'Values',
    valuesHeading: 'AURIX Values',
    values: [
      { icon: Target, title: 'Clarity', description: 'The real need and goal become visible.' },
      { icon: ShieldCheck, title: 'Trust', description: 'Confidentiality and ethical boundaries are upheld.' },
      { icon: UserCheck, title: 'Right Match', description: 'The client is matched with the right expert.' },
      { icon: Leaf, title: 'Sustainable Growth', description: 'Actionable development steps are put in place.' },
      { icon: BriefcaseBusiness, title: 'Professional Responsibility', description: 'The process moves forward openly and in a structured way.' },
    ],
    ethicsHeading: 'Ethics and professional boundaries',
    ethicsParagraphs: [
      'At AURIX, coaching and consulting processes support the development goals of an individual or organization. They do not replace psychotherapy, medical treatment, or clinical intervention.',
      'When a need calls for a different area of expertise, these boundaries are respected openly and responsibly.',
    ],
    ethicsCta: 'Review frequently asked questions about our ethical framework',
    expertPhotoAlt: (name: string) => `${name} expert photo`,
    metaTitle: 'About',
    metaDescription:
      'AURIX is a coaching and consulting platform that brings together professionals from different fields of expertise under a single development framework.',
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
    alternates: { languages: { tr: '/hakkimizda', en: '/en/hakkimizda' } },
  }
}

function ExpertPortrait({
  expert,
  altText,
  className = '',
  priority = false,
}: {
  expert: (typeof STATIC_EXPERTS)[number]
  altText: string
  className?: string
  priority?: boolean
}) {
  const photo = expert.photo != null && typeof expert.photo === 'object' ? expert.photo : null
  const placeholder = (expert.slug && EXPERT_PLACEHOLDERS[expert.slug]) ?? `expert-${expert.id}.jpg`

  return (
    <div className={`relative overflow-hidden bg-[#F4F0E7] ${className}`}>
      {photo?.url ? (
        <Image
          src={photo.url}
          alt={photo.alt ?? expert.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 90vw, 420px"
          className="object-cover object-top grayscale-[12%]"
        />
      ) : (
        <Image
          src={`/media/${placeholder}`}
          alt={altText}
          fill
          sizes="(max-width: 768px) 90vw, 420px"
          className="object-cover object-top grayscale-[12%]"
        />
      )}
    </div>
  )
}

export default async function HakkimizdaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const copy = COPY[locale]
  const founder = STATIC_EXPERTS.find((expert) => expert.slug === 'kaan-yazici') ?? STATIC_EXPERTS[0]
  return (
    <>
      <section aria-labelledby="hakkimizda-hero-heading" className="relative overflow-hidden bg-canvas py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute right-[-180px] top-[-220px] h-[520px] w-[680px] rounded-full border border-[#C5A059]/15" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[360px] w-[460px] rounded-full border border-[#14797C]/10" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-container grid-cols-1 gap-12 px-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <FadeIn>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                {copy.heroEyebrow}
              </span>
              <h1
                id="hakkimizda-hero-heading"
                className="mt-4 max-w-3xl font-serif text-display-serif-lg tracking-tight text-[#1A1C1E]"
              >
                {copy.heroHeading}
              </h1>
              <p className="mt-6 max-w-xl text-body-md leading-relaxed text-[#5B6168]">
                {copy.heroBody}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={localeHref('/iletisim', locale)}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#14797C] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0f5f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {copy.ctaPrimary}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href={localeHref('/uzmanlar', locale)}
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#14797C] px-6 py-3.5 text-sm font-semibold text-[#14797C] transition-colors duration-200 hover:bg-[#14797C]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="group relative mx-auto w-full max-w-[620px]">
              <div className="relative overflow-hidden rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-4 shadow-[0_28px_80px_rgba(26,28,30,0.08)] transition-all duration-300 hover:shadow-[0_34px_90px_rgba(26,28,30,0.12)] motion-safe:hover:scale-[1.015] motion-reduce:transition-none">
                <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
                  <ExpertPortrait
                    expert={founder}
                    altText={copy.expertPhotoAlt(founder.name)}
                    priority
                    className="aspect-[4/5] rounded-sm shadow-[0_18px_42px_rgba(26,28,30,0.08)] transition-transform duration-500 motion-safe:group-hover:scale-[1.015]"
                  />
                  <div className="relative flex min-h-[360px] flex-col justify-between rounded-sm bg-[#F8F7F2] p-5">
                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#14797C]/25 bg-white text-[#14797C] shadow-[0_10px_28px_rgba(26,28,30,0.08)]" aria-hidden="true">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div className="pr-14">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#C5A059]">
                        {copy.founderCardEyebrow}
                      </span>
                      <p className="mt-3 font-serif text-2xl leading-tight text-[#1A1C1E]">
                        {copy.founderCardTitle}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-[#5B6168]">
                        {copy.founderCardBody}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {copy.heroPillars.map((pillar) => (
                        <div key={pillar} className="rounded-sm border border-[#E2E5DE] bg-white px-3 py-3 text-center transition-transform duration-300 motion-safe:hover:scale-[1.04] motion-reduce:transition-none">
                          <Check className="mx-auto h-4 w-4 text-[#14797C]" aria-hidden="true" />
                          <span className="mt-2 block text-[11px] font-bold text-[#1A1C1E]">{pillar}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section aria-labelledby="founder-heading" className="bg-surface-soft py-16 sm:py-20">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-10 px-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <FadeIn>
            <div className="rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-3 shadow-[0_18px_54px_rgba(26,28,30,0.08)] transition-all duration-300 hover:shadow-[0_24px_64px_rgba(26,28,30,0.12)] motion-safe:hover:scale-[1.015] motion-reduce:transition-none">
              <ExpertPortrait expert={founder} altText={copy.expertPhotoAlt(founder.name)} className="aspect-[4/5] rounded-sm" />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                {copy.founderStoryEyebrow}
              </span>
              <h2 id="founder-heading" className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                {copy.founderStoryHeading}
              </h2>
              <div className="mt-6 space-y-4 text-body-md leading-relaxed text-[#5B6168]">
                {copy.founderStoryParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {copy.founderHighlights.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-4 transition-all duration-300 hover:border-[#14797C]/45 hover:shadow-[0_16px_36px_rgba(26,28,30,0.08)] motion-safe:hover:scale-[1.025] motion-reduce:transition-none">
                      <Icon className="h-5 w-5 text-[#14797C]" aria-hidden="true" />
                      <p className="mt-3 text-sm font-semibold leading-snug text-[#1A1C1E]">{item.title}</p>
                    </div>
                  )
                })}
              </div>

              <Link
                href={localeHref('/uzmanlar/kaan-yazici', locale)}
                className="mt-7 inline-flex items-center gap-1.5 rounded-sm text-sm font-bold text-[#14797C] transition-colors hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
              >
                {copy.founderCta}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section aria-labelledby="why-heading" className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-container px-6">
          <FadeIn>
            <div className="mb-10 max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                {copy.whyEyebrow}
              </span>
              <h2 id="why-heading" className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                {copy.whyHeading}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {copy.whyItems.map((item) => {
                const Icon = item.icon
                return (
                  <article
                    key={item.title}
                    className="group rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-6 shadow-[0_12px_35px_rgba(26,28,30,0.05)] transition-all duration-300 hover:border-[#14797C]/45 hover:bg-[#F4FAF8] hover:shadow-[0_20px_48px_rgba(26,28,30,0.09)] motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[#14797C]/20 bg-white text-[#14797C]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-serif text-xl text-[#1A1C1E]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5B6168]">{item.description}</p>
                  </article>
                )
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="approach-heading" aria-labelledby="approach-heading-title" className="bg-surface-soft py-16 scroll-mt-24 sm:py-20">
        <div className="mx-auto max-w-container px-6">
          <FadeIn>
            <div className="mb-10 max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                {copy.approachEyebrow}
              </span>
              <h2 id="approach-heading-title" className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                {copy.approachHeading}
              </h2>
              <p className="mt-4 text-body-md leading-relaxed text-[#5B6168]">
                {copy.approachBody}
              </p>
            </div>
          </FadeIn>

          <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-5">
            {APPROACH_STEPS.map((step) => {
              const Icon = step.icon
              return (
                <FadeIn key={step.number} delay={0.04}>
                  <article className="relative h-full rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-5 shadow-[0_12px_35px_rgba(26,28,30,0.05)] transition-all duration-300 hover:border-[#14797C]/45 hover:shadow-[0_20px_48px_rgba(26,28,30,0.09)] motion-safe:hover:scale-[1.02] motion-reduce:transition-none">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#C5A059]">{step.number}</span>
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-sm border bg-white"
                        style={{ color: step.accent, borderColor: `${step.accent}33` }}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="font-serif text-lg text-[#1A1C1E]">{pick(step.title, locale)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5B6168]">{pick(step.description, locale)}</p>
                  </article>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="bg-surface-soft py-16 sm:py-20">
        <div className="mx-auto max-w-container px-6">
          <FadeIn>
            <div className="mb-10 max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                {copy.valuesEyebrow}
              </span>
              <h2 id="values-heading" className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                {copy.valuesHeading}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {copy.values.map((value) => {
                const Icon = value.icon
                return (
                  <article
                    key={value.title}
                    className="rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-6 transition-all duration-300 hover:border-[#14797C]/50 hover:shadow-[0_18px_42px_rgba(26,28,30,0.08)] motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
                  >
                    <Icon className="h-5 w-5 text-[#14797C]" aria-hidden="true" />
                    <h3 className="mt-4 font-serif text-lg text-[#1A1C1E]">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5B6168]">{value.description}</p>
                  </article>
                )
              })}
            </div>
          </FadeIn>
        </div>
      </section>

      <section aria-labelledby="ethics-heading" className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-container px-6">
          <FadeIn>
            <div className="relative overflow-hidden rounded-md bg-[#2E2E30] p-8 shadow-[0_24px_70px_rgba(26,28,30,0.16)] transition-all duration-300 hover:shadow-[0_30px_86px_rgba(26,28,30,0.22)] motion-safe:hover:scale-[1.01] motion-reduce:transition-none sm:p-10 lg:p-12">
              <div className="absolute right-[-90px] top-[-110px] h-72 w-72 rounded-full border border-[#C5A059]/20" aria-hidden="true" />
              <div className="relative max-w-3xl">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm border border-[#14797C]/40 bg-[#14797C]/15 text-[#8ED7D4]">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 id="ethics-heading" className="font-serif text-3xl text-[#F6F7F1]">
                  {copy.ethicsHeading}
                </h2>
                {copy.ethicsParagraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-base leading-8 text-[#D9DDD4]">
                    {paragraph}
                  </p>
                ))}
                <Link
                  href={localeHref('/sss', locale)}
                  className="mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-[#8ED7D4] transition-colors hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                >
                  {copy.ethicsCta}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCTA locale={locale} />
    </>
  )
}
