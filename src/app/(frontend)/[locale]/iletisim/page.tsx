import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Users,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LeadForm } from '@/components/LeadForm'
import {
  CONTACT_EMAIL,
  CORPORATE_EMAIL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/contact-channels'

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
    icon: Users,
    href: '/iletisim?interest=bireysel-kocluk',
  },
  {
    title: 'Yönetici / liderlik desteği arıyorum',
    icon: BriefcaseBusiness,
    href: '/iletisim?interest=yonetici-koclugu',
  },
  {
    title: 'Kurumumuz için eğitim istiyoruz',
    icon: Building2,
    href: '/iletisim?interest=kurumsal-egitim',
  },
  {
    title: 'Öğrenci / veli olarak bilgi almak istiyorum',
    icon: GraduationCap,
    href: '/iletisim?interest=ogrenci-koclugu',
  },
  {
    title: 'Hangi hizmetin uygun olduğundan emin değilim',
    icon: HelpCircle,
    href: '/iletisim?interest=emin-degilim',
  },
]

export default function IletisimPage() {
  return (
    <>
      <section aria-labelledby="iletisim-hero-heading" className="relative overflow-hidden bg-canvas py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute right-[-180px] top-[-220px] h-[520px] w-[680px] rounded-full border border-[#C5A059]/15" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[360px] w-[460px] rounded-full border border-[#14797C]/10" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-container grid-cols-1 gap-12 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                İletişim
              </span>
              <h1
                id="iletisim-hero-heading"
                className="mt-4 max-w-md font-serif text-display-serif-lg tracking-tight text-[#1A1C1E]"
              >
                Size uygun süreci birlikte belirleyelim.
              </h1>
              <p className="mt-6 max-w-md text-body-md leading-relaxed text-[#5B6168]">
                İhtiyacınızı kısaca yazın; AURIX ekibi size uygun hizmet, uzman veya ön görüşme
                süreci için kısa sürede dönüş yapar.
              </p>

              <div className="mt-8 rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-5">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#14797C]" aria-hidden="true" />
                    <div>
                      <span className="block text-[11px] font-mono font-bold uppercase tracking-wide text-[#5B6168]">
                        E-posta
                      </span>
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-sm text-[#1A1C1E] hover:text-[#14797C]"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#14797C]" aria-hidden="true" />
                    <div>
                      <span className="block text-[11px] font-mono font-bold uppercase tracking-wide text-[#5B6168]">
                        Kurumsal talepler
                      </span>
                      <a
                        href={`mailto:${CORPORATE_EMAIL}`}
                        className="text-sm text-[#1A1C1E] hover:text-[#14797C]"
                      >
                        {CORPORATE_EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#14797C]" aria-hidden="true" />
                    <div>
                      <span className="block text-[11px] font-mono font-bold uppercase tracking-wide text-[#5B6168]">
                        Telefon / WhatsApp
                      </span>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#14797C] hover:text-[#C5A059]"
                      >
                        {WHATSAPP_DISPLAY}
                      </a>
                    </div>
                  </li>
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-between gap-4 rounded-md border border-[#14797C]/30 bg-[#14797C] px-5 py-4 text-white shadow-[0_16px_40px_rgba(20,121,124,0.22)] transition-all duration-300 hover:bg-[#0f5f62] hover:shadow-[0_20px_52px_rgba(20,121,124,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059] motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
                >
                  <span className="flex items-center gap-3 text-sm font-semibold">
                    <MessageCircle className="h-5 w-5 flex-shrink-0 text-[#C5A059]" aria-hidden="true" />
                    WhatsApp ile hemen yazın
                  </span>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#C5A059]" aria-hidden="true" />
                </a>
                <p className="mt-3 text-xs leading-relaxed text-[#5B6168]">
                  Görüşmeler hizmet alanına göre online, telefon veya yüz yüze planlanabilir.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-6 shadow-[0_28px_80px_rgba(26,28,30,0.08)] sm:p-8">
              <h2 className="font-serif text-2xl text-[#1A1C1E]">Bize yazın</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6168]">
                Alanları doldurup gönderin; talebinizi inceleyip size dönüş yapalım.
              </p>
              <div className="mt-7">
                <Suspense>
                  <LeadForm variant="iletisim" />
                </Suspense>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section aria-labelledby="options-heading" className="bg-surface-soft py-16 sm:py-20">
        <div className="mx-auto max-w-container px-6">
          <FadeIn>
            <div className="mb-8 max-w-xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                Hızlı Başlangıç
              </span>
              <h2 className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                Ya da doğrudan uygun akışa yönlenin
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {OPTION_CARDS.map((card) => {
                const Icon = card.icon
                return (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group flex items-center justify-between gap-3 rounded-md border border-[#E2E5DE] bg-[#FCFDF9] px-5 py-4 transition-all duration-200 hover:border-[#14797C]/45 hover:bg-[#F4FAF8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                  >
                    <span className="flex items-center gap-3 text-sm font-semibold leading-snug text-[#1A1C1E]">
                      <Icon className="h-4 w-4 flex-shrink-0 text-[#14797C]" aria-hidden="true" />
                      {card.title}
                    </span>
                    <ArrowRight
                      className="h-3.5 w-3.5 flex-shrink-0 text-[#5B6168] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#14797C]"
                      aria-hidden="true"
                    />
                  </Link>
                )
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-8 text-sm text-[#5B6168]">
              Aklınızda başka bir soru mu var?{' '}
              <Link href="/sss" className="font-bold text-[#14797C] hover:text-[#C5A059]">
                Sıkça sorulan sorulara
              </Link>{' '}
              göz atabilirsiniz.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
