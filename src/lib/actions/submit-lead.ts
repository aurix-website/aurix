'use server'

import { getOptionalPayloadClient } from '@/lib/payload-client'

export interface SubmitLeadResult {
  success: boolean
  error?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitLead(formData: FormData): Promise<SubmitLeadResult> {
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
    return { success: false, error: 'Lütfen zorunlu alanları doldurun.' }
  }
  if (!EMAIL_RE.test(email)) {
    return { success: false, error: 'Lütfen geçerli bir e-posta adresi girin.' }
  }
  if (message.length < 20) {
    return { success: false, error: 'Mesajınız en az 20 karakter olmalıdır.' }
  }
  if (!kvkkConsent) {
    return { success: false, error: 'Devam etmek için KVKK onayı vermeniz gerekir.' }
  }
  if (sourcePage !== 'iletisim' && sourcePage !== 'on-gorusme') {
    return { success: false, error: 'Geçersiz form kaynağı.' }
  }

  const payload = await getOptionalPayloadClient()
  if (!payload) {
    return {
      success: false,
      error: 'Talebiniz şu anda kaydedilemedi. Lütfen doğrudan e-posta ile iletişime geçin.',
    }
  }

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
    return { success: true }
  } catch {
    return {
      success: false,
      error: 'Mesajınız gönderilirken bir sorun oluştu. Lütfen bilgilerinizi kontrol ederek tekrar deneyin.',
    }
  }
}
