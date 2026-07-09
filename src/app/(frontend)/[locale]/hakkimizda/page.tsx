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

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'AURIX; farklı uzmanlık alanlarından gelen profesyonellerin deneyimini tek bir gelişim çatısı altında buluşturan koçluk ve danışmanlık platformudur.',
}

const FOUNDER_HIGHLIGHTS = [
  {
    icon: Heart,
    title: 'Sağlık alanından insan odaklı deneyim',
  },
  {
    icon: LayoutGrid,
    title: 'Kamu yönetimi perspektifi',
  },
  {
    icon: Users,
    title: 'Profesyonel koçluk ve takım gelişimi',
  },
]

const WHY_AURIX = [
  {
    icon: LayoutGrid,
    title: 'Çok Disiplinli Bakış',
    description:
      'Farklı mesleki deneyimleri tek bir gelişim çatısı altında birleştirir.',
  },
  {
    icon: UserCheck,
    title: 'Doğru Uzman Eşleşmesi',
    description:
      'İhtiyacı anlayıp danışanı uygun hizmet alanı ve uzmanla buluşturur.',
  },
  {
    icon: Map,
    title: 'Yapılandırılmış Süreç',
    description:
      'Hedef netliği, süreç tasarımı ve takip adımlarını birlikte kurar.',
  },
]

const VALUES = [
  {
    icon: Target,
    title: 'Netlik',
    description: 'Gerçek ihtiyaç ve hedef görünür olur.',
  },
  {
    icon: ShieldCheck,
    title: 'Güven',
    description: 'Gizlilik ve etik sınırlar korunur.',
  },
  {
    icon: UserCheck,
    title: 'Uygun Eşleşme',
    description: 'Danışan doğru uzmanla buluşur.',
  },
  {
    icon: Leaf,
    title: 'Sürdürülebilir Gelişim',
    description: 'Uygulanabilir gelişim adımları kurulur.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Profesyonel Sorumluluk',
    description: 'Süreç açık ve yapılandırılmış ilerler.',
  },
]

const HERO_PILLARS = ['Netlik', 'Eşleşme', 'Gelişim']

function ExpertPortrait({
  expert,
  className = '',
  priority = false,
}: {
  expert: (typeof STATIC_EXPERTS)[number]
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
          alt={`${expert.name} uzman gorseli`}
          fill
          sizes="(max-width: 768px) 90vw, 420px"
          className="object-cover object-top grayscale-[12%]"
        />
      )}
    </div>
  )
}

export default function HakkimizdaPage() {
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
                Hakkımızda
              </span>
              <h1
                id="hakkimizda-hero-heading"
                className="mt-4 max-w-3xl font-serif text-display-serif-lg tracking-tight text-[#1A1C1E]"
              >
                İhtiyacı anlayan, doğru uzmanla buluşturan çok disiplinli gelişim çatısı.
              </h1>
              <p className="mt-6 max-w-xl text-body-md leading-relaxed text-[#5B6168]">
                AURIX, Kaan Yazıcı liderliğinde bireyler, yöneticiler, kurumlar ve öğrenciler için
                güvenilir, yapılandırılmış ve insan odaklı koçluk süreçleri tasarlar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#14797C] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0f5f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Ön Görüşme Talep Et
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/uzmanlar"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#14797C] px-6 py-3.5 text-sm font-semibold text-[#14797C] transition-colors duration-200 hover:bg-[#14797C]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Uzman Kadromuzu Tanıyın
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
                    priority
                    className="aspect-[4/5] rounded-sm shadow-[0_18px_42px_rgba(26,28,30,0.08)] transition-transform duration-500 motion-safe:group-hover:scale-[1.015]"
                  />
                  <div className="relative flex min-h-[360px] flex-col justify-between rounded-sm bg-[#F8F7F2] p-5">
                    <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#14797C]/25 bg-white text-[#14797C] shadow-[0_10px_28px_rgba(26,28,30,0.08)]" aria-hidden="true">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div className="pr-14">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-[#C5A059]">
                        Kurucu Liderlik
                      </span>
                      <p className="mt-3 font-serif text-2xl leading-tight text-[#1A1C1E]">
                        Kaan Yazıcı ve AURIX yaklaşımı
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-[#5B6168]">
                        İnsan odağı, etik çerçeve ve doğru uzman eşleşmesi aynı masada buluşur.
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {HERO_PILLARS.map((pillar) => (
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
              <ExpertPortrait expert={founder} className="aspect-[4/5] rounded-sm" />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                Founder Story
              </span>
              <h2 id="founder-heading" className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                Kurucumuz Kaan Yazıcı’nın yolculuğu
              </h2>
              <div className="mt-6 space-y-4 text-body-md leading-relaxed text-[#5B6168]">
                <p>
                  AURIX’in kurucu hikâyesi, insanı yalnızca mesleki başarılarıyla değil; zihinsel,
                  duygusal ve sosyal bütünlüğüyle ele alma fikrine dayanır.
                </p>
                <p>
                  Kaan Yazıcı, sağlık alanındaki deneyimini kamu yönetimi perspektifi ve
                  profesyonel koçluk yaklaşımıyla birleştirerek bireylerin ve takımların
                  potansiyellerini daha bilinçli şekilde ortaya çıkarmalarına eşlik eder.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {FOUNDER_HIGHLIGHTS.map((item) => {
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
                href="/uzmanlar/kaan-yazici"
                className="mt-7 inline-flex items-center gap-1.5 rounded-sm text-sm font-bold text-[#14797C] transition-colors hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
              >
                Kaan Yazıcı’yı Tanıyın
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
                Neden AURIX?
              </span>
              <h2 id="why-heading" className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                Tek tip cevaplar yerine doğru bağlam.
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {WHY_AURIX.map((item) => {
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
                AURIX Yaklaşımı
              </span>
              <h2 id="approach-heading-title" className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                Doğru ihtiyaç, doğru uzman, doğru süreç.
              </h2>
              <p className="mt-4 text-body-md leading-relaxed text-[#5B6168]">
                Süreç doğrudan hizmet önermekle başlamaz; önce ihtiyaç anlaşılır, sonra uygun uzman
                ve çalışma çerçevesi kurulur.
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
                    <h3 className="font-serif text-lg text-[#1A1C1E]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5B6168]">{step.description}</p>
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
                Değerler
              </span>
              <h2 id="values-heading" className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                AURIX değerleri
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((value) => {
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
                  Etik ve profesyonel sınırlar
                </h2>
                <p className="mt-5 text-base leading-8 text-[#D9DDD4]">
                  AURIX’te koçluk ve danışmanlık süreçleri; bireyin veya kurumun gelişim
                  hedeflerine eşlik eden profesyonel süreçlerdir. Psikoterapi, tıbbi tedavi veya
                  klinik müdahalenin yerine geçmez.
                </p>
                <p className="mt-4 text-base leading-8 text-[#D9DDD4]">
                  İhtiyaç farklı bir uzmanlık alanına yönlendirme gerektirdiğinde, bu sınırlar açık
                  ve sorumlu biçimde gözetilir.
                </p>
                <Link
                  href="/sss"
                  className="mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-[#8ED7D4] transition-colors hover:text-[#C5A059] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                >
                  Etik çerçeve hakkında sık sorulanları inceleyin
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
