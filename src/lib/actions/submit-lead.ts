'use server'

import { getOptionalPayloadClient } from '@/lib/payload-client'
import { sendLeadEmail } from '@/lib/lead-email'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'
import { pick } from '@/lib/i18n/pick'
import type { Localized } from '@/lib/i18n/types'

export interface SubmitLeadResult {
  success: boolean
  error?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ERRORS: Record<
  'requiredFields' | 'invalidEmail' | 'messageTooShort' | 'kvkkRequired' | 'invalidSource' | 'emailUnavailable' | 'genericFailure',
  Localized<string>
> = {
  requiredFields: {
    tr: 'Lütfen zorunlu alanları doldurun.',
    en: 'Please fill in the required fields.',
  },
  invalidEmail: {
    tr: 'Lütfen geçerli bir e-posta adresi girin.',
    en: 'Please enter a valid email address.',
  },
  messageTooShort: {
    tr: 'Mesajınız en az 20 karakter olmalıdır.',
    en: 'Your message must be at least 20 characters long.',
  },
  kvkkRequired: {
    tr: 'Devam etmek için KVKK onayı vermeniz gerekir.',
    en: 'You must give your consent to continue.',
  },
  invalidSource: {
    tr: 'Geçersiz form kaynağı.',
    en: 'Invalid form source.',
  },
  emailUnavailable: {
    tr: 'Talebiniz şu anda e-posta olarak iletilemedi. Lütfen doğrudan e-posta veya WhatsApp ile iletişime geçin.',
    en: 'Your request could not be emailed at this time. Please contact us directly by email or WhatsApp.',
  },
  genericFailure: {
    tr: 'Mesajınız gönderilirken bir sorun oluştu. Lütfen bilgilerinizi kontrol ederek tekrar deneyin.',
    en: 'There was a problem sending your message. Please check your information and try again.',
  },
}

export async function submitLead(locale: Locale, formData: FormData): Promise<SubmitLeadResult> {
  const activeLocale: Locale = locale ?? DEFAULT_LOCALE
  const err = (key: keyof typeof ERRORS) => pick(ERRORS[key], activeLocale)

  // Honeypot — botlar bu alanı doldurur, insan kullanıcılar görmez
  if (String(formData.get('company_website') ?? '').trim().length > 0) {
    return { success: true }
  }

  const fullName = String(formData.get('fullName') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const sourcePage = String(formData.get('sourcePage') ?? '')
  const contactReason = String(formData.get('contactReason') ?? '').trim()
  const interestArea = String(formData.get('interestArea') ?? '')
  const preferredLanguage = String(formData.get('preferredLanguage') ?? 'fark-etmez')
  const meetingPreference = String(formData.get('meetingPreference') ?? '').trim()
  const selectedExpert = String(formData.get('selectedExpert') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const kvkkConsent = formData.get('kvkkConsent') === 'on'
  const utmSource = String(formData.get('utmSource') ?? '').trim()
  const utmMedium = String(formData.get('utmMedium') ?? '').trim()
  const utmCampaign = String(formData.get('utmCampaign') ?? '').trim()

  if (!fullName || !email || !interestArea || !message) {
    return { success: false, error: err('requiredFields') }
  }
  if (!EMAIL_RE.test(email)) {
    return { success: false, error: err('invalidEmail') }
  }
  if (message.length < 20) {
    return { success: false, error: err('messageTooShort') }
  }
  if (!kvkkConsent) {
    return { success: false, error: err('kvkkRequired') }
  }
  if (sourcePage !== 'iletisim' && sourcePage !== 'on-gorusme') {
    return { success: false, error: err('invalidSource') }
  }

  const leadData = {
    fullName,
    email,
    phone: phone || undefined,
    sourcePage: sourcePage as 'iletisim' | 'on-gorusme',
    contactReason: contactReason || undefined,
    interestArea,
    preferredLanguage,
    meetingPreference: meetingPreference || undefined,
    selectedExpert: selectedExpert || undefined,
    message,
    locale: activeLocale,
    utmSource: utmSource || undefined,
    utmMedium: utmMedium || undefined,
    utmCampaign: utmCampaign || undefined,
  }

  try {
    const emailResult = await sendLeadEmail(leadData)
    if (!emailResult.ok) {
      console.error('Lead email failed', emailResult)
      return {
        success: false,
        error: err('emailUnavailable'),
      }
    }

    const payload = await getOptionalPayloadClient({
      forceCheck: true,
      allowPublicReadDisabled: true,
    })

    if (!payload) return { success: true }

    try {
      await payload.create({
        collection: 'leads',
        data: {
          fullName,
          email,
          phone: phone || undefined,
          sourcePage: sourcePage as 'iletisim' | 'on-gorusme',
          contactReason: contactReason || undefined,
          interestArea,
          preferredLanguage,
          meetingPreference: meetingPreference || undefined,
          selectedExpert: selectedExpert || undefined,
          message,
          kvkkConsent,
          utmSource: utmSource || undefined,
          utmMedium: utmMedium || undefined,
          utmCampaign: utmCampaign || undefined,
        },
      })
    } catch (error) {
      console.error('Lead archive failed', error)
    }

    return { success: true }
  } catch (error) {
    console.error('Lead submission failed', error)
    return {
      success: false,
      error: err('genericFailure'),
    }
  }
}
