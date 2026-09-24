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
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LeadForm } from '@/components/LeadForm'
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  WHATSAPP_DISPLAY,
  getGoogleMapsEmbedUrl,
  getGoogleMapsUrl,
  getWhatsAppUrl,
} from '@/lib/contact-channels'
import type { Locale } from '@/lib/i18n/types'
import { localeHref } from '@/lib/i18n/pick'

const COPY = {
  tr: {
    eyebrow: 'İletişim',
    heading: 'Size uygun süreci birlikte belirleyelim.',
    body: 'İhtiyacınızı kısaca yazın; AURIX ekibi size uygun hizmet, uzman veya ön görüşme süreci için kısa sürede dönüş yapar.',
    emailLabel: 'E-posta',
    phoneLabel: 'Telefon / WhatsApp',
    addressLabel: 'Adres',
    whatsappCta: 'WhatsApp ile hemen yazın',
    meetingNote: 'Görüşmeler hizmet alanına göre online, telefon veya yüz yüze planlanabilir.',
    mapEyebrow: 'Konum',
    mapHeading: 'Ege Üniversitesi Teknopark içinde bizi ziyaret edin.',
    mapBody: 'Yüz yüze görüşmeler ve kurumsal ziyaretler için ofisimize Ege Üniversitesi Teknopark üzerinden ulaşabilirsiniz.',
    openInMaps: "Google Maps'te aç",
    formHeading: 'Bize yazın',
    formBody: 'Alanları doldurup gönderin; talebinizi inceleyip size dönüş yapalım.',
    quickStartEyebrow: 'Hızlı Başlangıç',
    quickStartHeading: 'Ya da doğrudan uygun akışa yönlenin',
    faqPrompt: 'Aklınızda başka bir soru mu var?',
    faqLink: 'Sıkça sorulan sorulara',
    faqSuffix: 'göz atabilirsiniz.',
    optionCards: [
      { title: 'Bireysel destek almak istiyorum', icon: Users, interest: 'bireysel-kocluk' },
      { title: 'Yönetici / liderlik desteği arıyorum', icon: BriefcaseBusiness, interest: 'yonetici-koclugu' },
      { title: 'Kurumumuz için eğitim istiyoruz', icon: Building2, interest: 'kurumsal-egitim' },
      { title: 'Öğrenci / veli olarak bilgi almak istiyorum', icon: GraduationCap, interest: 'ogrenci-koclugu' },
      { title: 'Hangi hizmetin uygun olduğundan emin değilim', icon: HelpCircle, interest: 'emin-degilim' },
    ],
    metaTitle: 'İletişim',
    metaDescription:
      'AURIX Koçluk ve Danışmanlık ile iletişime geçin. Bireysel koçluk, yönetici koçluğu, kurumsal eğitim ve öğrenci koçluğu için ön görüşme talep edin.',
    ogTitle: 'AURIX ile İletişime Geçin',
    ogDescription:
      'Size uygun koçluk, danışmanlık veya kurumsal eğitim sürecini birlikte belirlemek için AURIX ekibiyle iletişime geçin.',
  },
  en: {
    eyebrow: 'Contact',
    heading: "Let's define the right process for you together.",
    body: "Briefly describe what you need; the AURIX team will get back to you shortly with the right service, expert, or introductory call.",
    emailLabel: 'Email',
    phoneLabel: 'Phone / WhatsApp',
    addressLabel: 'Address',
    whatsappCta: 'Message us on WhatsApp now',
    meetingNote: 'Depending on the service area, meetings can be scheduled online, by phone, or in person.',
    mapEyebrow: 'Location',
    mapHeading: 'Visit us at Ege University Technopark.',
    mapBody: 'For in-person meetings and corporate visits, you can reach our office through Ege University Technopark.',
    openInMaps: 'Open in Google Maps',
    formHeading: 'Write to us',
    formBody: 'Fill in the fields and send; we’ll review your request and get back to you.',
    quickStartEyebrow: 'Quick Start',
    quickStartHeading: 'Or go directly to the right flow',
    faqPrompt: 'Have another question in mind?',
    faqLink: 'Frequently asked questions',
    faqSuffix: 'may have the answer.',
    optionCards: [
      { title: 'I want personal support', icon: Users, interest: 'bireysel-kocluk' },
      { title: 'I’m looking for executive / leadership support', icon: BriefcaseBusiness, interest: 'yonetici-koclugu' },
      { title: 'We want training for our organization', icon: Building2, interest: 'kurumsal-egitim' },
      { title: 'I’m a student / parent looking for information', icon: GraduationCap, interest: 'ogrenci-koclugu' },
      { title: 'I’m not sure which service fits', icon: HelpCircle, interest: 'emin-degilim' },
    ],
    metaTitle: 'Contact',
    metaDescription:
      'Get in touch with AURIX Coaching and Consulting. Request an introductory call for personal coaching, executive coaching, corporate training, or student coaching.',
    ogTitle: 'Get in Touch with AURIX',
    ogDescription:
      'Contact the AURIX team to define together the right coaching, consulting, or corporate training process for you.',
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
    alternates: { languages: { tr: '/iletisim', en: '/en/iletisim' } },
  }
}

export default async function IletisimPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const copy = COPY[locale]

  return (
    <>
      <section aria-labelledby="iletisim-hero-heading" className="relative overflow-hidden bg-canvas py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute right-[-180px] top-[-220px] h-[520px] w-[680px] rounded-full border border-[#C5A059]/15" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-160px] h-[360px] w-[460px] rounded-full border border-[#14797C]/10" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-container grid-cols-1 gap-12 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                {copy.eyebrow}
              </span>
              <h1
                id="iletisim-hero-heading"
                className="mt-4 max-w-md font-serif text-display-serif-lg tracking-tight text-[#1A1C1E]"
              >
                {copy.heading}
              </h1>
              <p className="mt-6 max-w-md text-body-md leading-relaxed text-[#5B6168]">
                {copy.body}
              </p>

              <div className="mt-8 rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-5">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#14797C]" aria-hidden="true" />
                    <div>
                      <span className="block text-[11px] font-mono font-bold uppercase tracking-wide text-[#5B6168]">
                        {copy.emailLabel}
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
                    <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#14797C]" aria-hidden="true" />
                    <div>
                      <span className="block text-[11px] font-mono font-bold uppercase tracking-wide text-[#5B6168]">
                        {copy.phoneLabel}
                      </span>
                      <a
                        href={getWhatsAppUrl(locale)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#14797C] hover:text-[#C5A059]"
                      >
                        {WHATSAPP_DISPLAY}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#14797C]" aria-hidden="true" />
                    <div>
                      <span className="block text-[11px] font-mono font-bold uppercase tracking-wide text-[#5B6168]">
                        {copy.addressLabel}
                      </span>
                      <a
                        href={getGoogleMapsUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-pre-line text-sm leading-relaxed text-[#1A1C1E] hover:text-[#14797C]"
                      >
                        {CONTACT_ADDRESS}
                      </a>
                    </div>
                  </li>
                </ul>
                <a
                  href={getWhatsAppUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-between gap-4 rounded-md border border-[#14797C]/30 bg-[#14797C] px-5 py-4 text-white shadow-[0_16px_40px_rgba(20,121,124,0.22)] transition-all duration-300 hover:bg-[#0f5f62] hover:shadow-[0_20px_52px_rgba(20,121,124,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059] motion-safe:hover:scale-[1.02] motion-reduce:transition-none"
                >
                  <span className="flex items-center gap-3 text-sm font-semibold">
                    <MessageCircle className="h-5 w-5 flex-shrink-0 text-[#C5A059]" aria-hidden="true" />
                    {copy.whatsappCta}
                  </span>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#C5A059]" aria-hidden="true" />
                </a>
                <p className="mt-3 text-xs leading-relaxed text-[#5B6168]">
                  {copy.meetingNote}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-6 shadow-[0_28px_80px_rgba(26,28,30,0.08)] sm:p-8">
              <h2 className="font-serif text-2xl text-[#1A1C1E]">{copy.formHeading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5B6168]">
                {copy.formBody}
              </p>
              <div className="mt-7">
                <Suspense>
                  <LeadForm variant="iletisim" locale={locale} />
                </Suspense>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section aria-labelledby="map-heading" className="border-t border-[#E2E5DE] bg-surface-soft py-16 sm:py-20">
        <div className="mx-auto max-w-container px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <FadeIn>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                  {copy.mapEyebrow}
                </span>
                <h2 id="map-heading" className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                  {copy.mapHeading}
                </h2>
                <p className="mt-4 max-w-md text-body-md leading-relaxed text-[#5B6168]">
                  {copy.mapBody}
                </p>
                <div className="mt-6 flex items-start gap-3 rounded-md border border-[#E2E5DE] bg-[#FCFDF9] p-4">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#14797C]" aria-hidden="true" />
                  <p className="whitespace-pre-line text-sm leading-relaxed text-[#1A1C1E]">{CONTACT_ADDRESS}</p>
                </div>
                <a
                  href={getGoogleMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#14797C] hover:text-[#C5A059]"
                >
                  {copy.openInMaps}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="overflow-hidden rounded-md border border-[#E2E5DE] shadow-[0_18px_54px_rgba(26,28,30,0.08)]">
                <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                  <iframe
                    src={getGoogleMapsEmbedUrl()}
                    title={copy.mapHeading}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section aria-labelledby="options-heading" className="bg-surface-soft py-16 sm:py-20">
        <div className="mx-auto max-w-container px-6">
          <FadeIn>
            <div className="mb-8 max-w-xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                {copy.quickStartEyebrow}
              </span>
              <h2 className="mt-3 font-serif text-display-serif-md text-[#1A1C1E]">
                {copy.quickStartHeading}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {copy.optionCards.map((card) => {
                const Icon = card.icon
                const href = localeHref(`/iletisim?interest=${card.interest}`, locale)
                return (
                  <Link
                    key={card.interest}
                    href={href}
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
              {copy.faqPrompt}{' '}
              <Link href={localeHref('/sss', locale)} className="font-bold text-[#14797C] hover:text-[#C5A059]">
                {copy.faqLink}
              </Link>{' '}
              {copy.faqSuffix}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
