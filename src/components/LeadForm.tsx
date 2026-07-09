'use client'

import { useActionState, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { submitLead, type SubmitLeadResult } from '@/lib/actions/submit-lead'
import {
  INTEREST_AREAS,
  CONTACT_REASONS,
  LANGUAGE_OPTIONS,
  MEETING_PREFERENCES,
  SUCCESS_MESSAGE_BY_INTEREST,
  DEFAULT_SUCCESS_MESSAGE,
} from '@/lib/lead-options'
import { STATIC_EXPERTS } from '@/lib/experts-data'
import { CONTACT_EMAIL, getWhatsAppUrl } from '@/lib/contact-channels'
import { pick, localeHref } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

type Variant = 'iletisim' | 'on-gorusme'

const initialState: SubmitLeadResult = { success: false }

const inputClass =
  'w-full bg-white border border-hairline rounded-sm px-4 py-3 text-sm text-ink placeholder:text-muted-soft focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2'
const labelClass = 'text-sm font-semibold text-ink mb-1.5 block'

const COPY = {
  tr: {
    received: 'Talebiniz alındı.',
    fullName: 'Ad Soyad *',
    email: 'E-posta *',
    phone: 'Telefon / WhatsApp',
    contactReason: 'İletişim nedeni *',
    choose: 'Seçiniz',
    interestArea: 'Destek almak istediğiniz alan *',
    preferredLanguage: 'Tercih edilen görüşme dili',
    meetingPreference: 'Görüşme tercihi',
    selectedExpert: 'Varsa tercih ettiğiniz uzman',
    notSure: 'Emin değilim',
    messageContact: 'Mesajınız *',
    messageIntro: 'Kısaca ihtiyacınız *',
    messagePlaceholder:
      'Kısaca hangi konuda destek almak istediğinizi, mevcut ihtiyacınızı veya sormak istediğiniz konuyu yazabilirsiniz.',
    kvkkPrefix: 'Kişisel verilerimin AURIX Koçluk ve Danışmanlık tarafından',
    kvkkContact: 'iletişim talebimin',
    kvkkIntro: 'ön görüşme talebimin',
    kvkkSuffix: 'değerlendirilmesi',
    kvkkAndContact: ' ve benimle iletişime geçilmesi',
    kvkkAction: 'amacıyla işlenmesini kabul ediyorum.',
    kvkkLink: 'KVKK Aydınlatma Metni',
    privacyLink: 'Gizlilik Politikası',
    legalAnd: 've',
    legalRead: 'metinlerini okudum;',
    sending: 'Gönderiliyor…',
    submitContact: 'Talebimi İlet',
    submitIntro: 'Ön Görüşme Talep Et',
    fallbackIntro: 'Form şu anda kaydedilemezse doğrudan iletişime geçebilirsiniz:',
    emailFallback: 'E-posta gönder',
    whatsappFallback: 'WhatsApp ile yaz',
  },
  en: {
    received: 'Your request has been received.',
    fullName: 'Full Name *',
    email: 'Email *',
    phone: 'Phone / WhatsApp',
    contactReason: 'Reason for contact *',
    choose: 'Select',
    interestArea: 'Area you would like support in *',
    preferredLanguage: 'Preferred meeting language',
    meetingPreference: 'Meeting preference',
    selectedExpert: 'Expert you prefer, if any',
    notSure: 'Not sure',
    messageContact: 'Your message *',
    messageIntro: 'Briefly describe your need *',
    messagePlaceholder:
      'You can briefly describe what you would like support with, your current need, or the question you would like to ask.',
    kvkkPrefix: 'I consent to my personal data being processed by AURIX Coaching & Consulting for the purpose of evaluating my',
    kvkkContact: 'contact request',
    kvkkIntro: 'introductory call request',
    kvkkSuffix: '',
    kvkkAndContact: ' and contacting me',
    kvkkAction: '.',
    kvkkLink: 'Privacy Notice',
    privacyLink: 'Privacy Policy',
    legalAnd: 'and',
    legalRead: 'I have read the',
    sending: 'Sending…',
    submitContact: 'Send My Request',
    submitIntro: 'Request an Introductory Call',
    fallbackIntro: 'If the form cannot be saved right now, you can contact us directly:',
    emailFallback: 'Send email',
    whatsappFallback: 'Message on WhatsApp',
  },
} as const

export function LeadForm({
  variant,
  locale = DEFAULT_LOCALE,
}: {
  variant: Variant
  locale?: Locale
}) {
  const searchParams = useSearchParams()
  const defaultInterest = searchParams.get('interest') ?? ''
  const defaultExpert = searchParams.get('expert') ?? ''
  const utmSource = searchParams.get('utm_source') ?? ''
  const utmMedium = searchParams.get('utm_medium') ?? ''
  const utmCampaign = searchParams.get('utm_campaign') ?? ''
  const c = COPY[locale]

  const [interestArea, setInterestArea] = useState(defaultInterest)

  // Aynı sayfadaki bir "hangi konuda destek istiyorsunuz" linkine tıklanınca
  // (?interest= değişince) formun seçili değeri de güncellensin
  useEffect(() => {
    setInterestArea(defaultInterest)
  }, [defaultInterest])

  const boundSubmitLead = submitLead.bind(null, locale)
  const [state, formAction, isPending] = useActionState<SubmitLeadResult, FormData>(
    async (_prev, formData) => boundSubmitLead(formData),
    initialState,
  )

  if (state.success) {
    const message = variant === 'on-gorusme'
      ? pick(SUCCESS_MESSAGE_BY_INTEREST[interestArea] ?? DEFAULT_SUCCESS_MESSAGE, locale)
      : pick(DEFAULT_SUCCESS_MESSAGE, locale)

    return (
      <div className="bg-surface-elevated border border-hairline rounded-sm p-8 text-center max-w-xl mx-auto">
        <h3 className="font-serif text-xl text-ink mb-3">{c.received}</h3>
        <p className="text-body-sm text-body leading-relaxed">{message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-5 max-w-xl">
      <input type="hidden" name="sourcePage" value={variant} />
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="utmSource" value={utmSource} />
      <input type="hidden" name="utmMedium" value={utmMedium} />
      <input type="hidden" name="utmCampaign" value={utmCampaign} />

      {/* Honeypot — botlar için, insan kullanıcı görmez */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] w-px h-px overflow-hidden"
      />

      <div>
        <label className={labelClass} htmlFor="fullName">
          {c.fullName}
        </label>
        <input id="fullName" name="fullName" type="text" required className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="email">
            {c.email}
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            {c.phone} {variant === 'on-gorusme' && '*'}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required={variant === 'on-gorusme'}
            className={inputClass}
          />
        </div>
      </div>

      {variant === 'iletisim' && (
        <div>
          <label className={labelClass} htmlFor="contactReason">
            {c.contactReason}
          </label>
          <select id="contactReason" name="contactReason" required className={inputClass}>
            <option value="">{c.choose}</option>
            {CONTACT_REASONS.map((option) => (
              <option key={option.value} value={option.value}>
                {pick(option.label, locale)}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className={labelClass} htmlFor="interestArea">
          {c.interestArea}
        </label>
        <select
          id="interestArea"
          name="interestArea"
          required
          value={interestArea}
          onChange={(e) => setInterestArea(e.target.value)}
          className={inputClass}
        >
          <option value="">{c.choose}</option>
          {INTEREST_AREAS.map((option) => (
            <option key={option.value} value={option.value}>
              {pick(option.label, locale)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="preferredLanguage">
            {c.preferredLanguage}
          </label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            defaultValue="fark-etmez"
            className={inputClass}
          >
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {pick(option.label, locale)}
              </option>
            ))}
          </select>
        </div>

        {variant === 'on-gorusme' && (
          <div>
            <label className={labelClass} htmlFor="meetingPreference">
              {c.meetingPreference}
            </label>
            <select id="meetingPreference" name="meetingPreference" className={inputClass}>
              <option value="">{c.choose}</option>
              {MEETING_PREFERENCES.map((option) => (
                <option key={option.value} value={option.value}>
                  {pick(option.label, locale)}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {variant === 'on-gorusme' && (
        <div>
          <label className={labelClass} htmlFor="selectedExpert">
            {c.selectedExpert}
          </label>
          <select
            id="selectedExpert"
            name="selectedExpert"
            defaultValue={STATIC_EXPERTS.find((e) => e.slug === defaultExpert)?.name ?? ''}
            className={inputClass}
          >
            <option value="">{c.notSure}</option>
            {STATIC_EXPERTS.map((expert) => (
              <option key={expert.id} value={expert.name}>
                {expert.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className={labelClass} htmlFor="message">
          {variant === 'iletisim' ? c.messageContact : c.messageIntro}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={4}
          placeholder={c.messagePlaceholder}
          className={inputClass}
        />
      </div>

      <div className="flex items-start gap-2.5">
        <input
          id="kvkkConsent"
          name="kvkkConsent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-[#14797C] flex-shrink-0"
        />
        <label htmlFor="kvkkConsent" className="text-body-sm text-body leading-relaxed">
          {locale === 'tr' ? (
            <>
              <Link href={localeHref('/kvkk', locale)} className="text-[#14797C] underline hover:text-[#C5A059]">{c.kvkkLink}</Link>
              {' '}{c.legalAnd}{' '}
              <Link href={localeHref('/gizlilik-politikasi', locale)} className="text-[#14797C] underline hover:text-[#C5A059]">{c.privacyLink}</Link>
              {' '}{c.legalRead} {c.kvkkPrefix}{' '}
              {variant === 'iletisim' ? c.kvkkContact : c.kvkkIntro} {c.kvkkSuffix}
              {variant === 'on-gorusme' && c.kvkkAndContact} {c.kvkkAction}
            </>
          ) : (
            <>
              {c.legalRead}{' '}
              <Link href={localeHref('/kvkk', locale)} className="text-[#14797C] underline hover:text-[#C5A059]">{c.kvkkLink}</Link>
              {' '}{c.legalAnd}{' '}
              <Link href={localeHref('/gizlilik-politikasi', locale)} className="text-[#14797C] underline hover:text-[#C5A059]">{c.privacyLink}</Link>
              . {c.kvkkPrefix}{' '}
              {variant === 'iletisim' ? c.kvkkContact : c.kvkkIntro}
              {variant === 'on-gorusme' && c.kvkkAndContact}{c.kvkkAction}
            </>
          )}
        </label>
      </div>

      {state.error && (
        <div
          role="alert"
          className="rounded-sm border border-[#B3261E]/20 bg-[#B3261E]/5 p-4 text-body-sm leading-relaxed"
        >
          <p className="text-[#B3261E]">{state.error}</p>
          <p className="mt-2 text-body">{c.fallbackIntro}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-[#14797C] hover:text-[#C5A059]"
            >
              {c.emailFallback}
            </a>
            <a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#14797C] hover:text-[#C5A059]"
            >
              {c.whatsappFallback}
            </a>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-sm transition-colors duration-200 self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
      >
        {isPending ? c.sending : variant === 'iletisim' ? c.submitContact : c.submitIntro}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  )
}
