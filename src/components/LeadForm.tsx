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

type Variant = 'iletisim' | 'on-gorusme'

const initialState: SubmitLeadResult = { success: false }

const inputClass =
  'w-full bg-white border border-hairline rounded-sm px-4 py-3 text-sm text-ink placeholder:text-muted-soft focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2'
const labelClass = 'text-sm font-semibold text-ink mb-1.5 block'

export function LeadForm({ variant }: { variant: Variant }) {
  const searchParams = useSearchParams()
  const defaultInterest = searchParams.get('interest') ?? ''
  const defaultExpert = searchParams.get('expert') ?? ''
  const utmSource = searchParams.get('utm_source') ?? ''
  const utmMedium = searchParams.get('utm_medium') ?? ''
  const utmCampaign = searchParams.get('utm_campaign') ?? ''

  const [interestArea, setInterestArea] = useState(defaultInterest)

  // Aynı sayfadaki bir "hangi konuda destek istiyorsunuz" linkine tıklanınca
  // (?interest= değişince) formun seçili değeri de güncellensin
  useEffect(() => {
    setInterestArea(defaultInterest)
  }, [defaultInterest])

  const [state, formAction, isPending] = useActionState<SubmitLeadResult, FormData>(
    async (_prev, formData) => submitLead(formData),
    initialState,
  )

  if (state.success) {
    const message =
      variant === 'on-gorusme'
        ? (SUCCESS_MESSAGE_BY_INTEREST[interestArea] ?? DEFAULT_SUCCESS_MESSAGE)
        : DEFAULT_SUCCESS_MESSAGE

    return (
      <div className="bg-surface-elevated border border-hairline rounded-sm p-8 text-center max-w-xl mx-auto">
        <h3 className="font-serif text-xl text-ink mb-3">Talebiniz alındı.</h3>
        <p className="text-body-sm text-body leading-relaxed">{message}</p>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-5 max-w-xl">
      <input type="hidden" name="sourcePage" value={variant} />
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
          Ad Soyad *
        </label>
        <input id="fullName" name="fullName" type="text" required className={inputClass} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="email">
            E-posta *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Telefon / WhatsApp {variant === 'on-gorusme' && '*'}
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
            İletişim nedeni *
          </label>
          <select id="contactReason" name="contactReason" required className={inputClass}>
            <option value="">Seçiniz</option>
            {CONTACT_REASONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className={labelClass} htmlFor="interestArea">
          Destek almak istediğiniz alan *
        </label>
        <select
          id="interestArea"
          name="interestArea"
          required
          value={interestArea}
          onChange={(e) => setInterestArea(e.target.value)}
          className={inputClass}
        >
          <option value="">Seçiniz</option>
          {INTEREST_AREAS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="preferredLanguage">
            Tercih edilen görüşme dili
          </label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            defaultValue="fark-etmez"
            className={inputClass}
          >
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {variant === 'on-gorusme' && (
          <div>
            <label className={labelClass} htmlFor="meetingPreference">
              Görüşme tercihi
            </label>
            <select id="meetingPreference" name="meetingPreference" className={inputClass}>
              <option value="">Seçiniz</option>
              {MEETING_PREFERENCES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {variant === 'on-gorusme' && (
        <div>
          <label className={labelClass} htmlFor="selectedExpert">
            Varsa tercih ettiğiniz uzman
          </label>
          <select
            id="selectedExpert"
            name="selectedExpert"
            defaultValue={STATIC_EXPERTS.find((e) => e.slug === defaultExpert)?.name ?? ''}
            className={inputClass}
          >
            <option value="">Emin değilim</option>
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
          {variant === 'iletisim' ? 'Mesajınız *' : 'Kısaca ihtiyacınız *'}
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={4}
          placeholder="Kısaca hangi konuda destek almak istediğinizi, mevcut ihtiyacınızı veya sormak istediğiniz konuyu yazabilirsiniz."
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
          Kişisel verilerimin AURIX Koçluk ve Danışmanlık tarafından{' '}
          {variant === 'iletisim' ? 'iletişim talebimin' : 'ön görüşme talebimin'} değerlendirilmesi
          {variant === 'on-gorusme' && ' ve benimle iletişime geçilmesi'} amacıyla işlenmesini kabul
          ediyorum. <Link href="/kvkk" className="text-[#14797C] underline hover:text-[#C5A059]">KVKK Aydınlatma Metni</Link>
        </label>
      </div>

      {state.error && (
        <p role="alert" className="text-body-sm text-[#B3261E] leading-relaxed">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-sm transition-colors duration-200 self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
      >
        {isPending ? 'Gönderiliyor…' : variant === 'iletisim' ? 'Talebimi İlet' : 'Ön Görüşme Talep Et'}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  )
}
