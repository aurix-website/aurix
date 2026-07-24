import { SERVICES } from './services-data'
import type { Localized } from './i18n/types'

export interface SelectOption {
  label: Localized<string>
  value: string
}

/**
 * Ortak "destek almak istediğiniz alan" taksonomisi — /iletisim, /on-gorusme ve kart
 * yönlendirmeleri bunu paylaşır. SERVICES'ten türetilir ki hizmet sayfalarının
 * `?interest=<slug>` linkleriyle her zaman birebir eşleşsin.
 */
export const INTEREST_AREAS: SelectOption[] = [
  ...SERVICES.map((service) => ({ label: service.title, value: service.id })),
  { label: { tr: 'Emin Değilim', en: 'Not Sure' }, value: 'emin-degilim' },
]

export const CONTACT_REASONS: SelectOption[] = [
  { label: { tr: 'Ön görüşme talep etmek istiyorum', en: 'I would like to request an introductory call' }, value: 'on-gorusme' },
  { label: { tr: 'Hizmetler hakkında bilgi almak istiyorum', en: 'I would like information about services' }, value: 'hizmet-bilgi' },
  { label: { tr: 'Kurumsal eğitim için görüşmek istiyorum', en: 'I would like to discuss corporate training' }, value: 'kurumsal' },
  { label: { tr: 'Bir uzman hakkında bilgi almak istiyorum', en: 'I would like information about an expert' }, value: 'uzman-bilgi' },
  { label: { tr: 'Öğrenci koçluğu hakkında bilgi almak istiyorum', en: 'I would like information about student coaching' }, value: 'ogrenci-bilgi' },
  { label: { tr: 'Genel bilgi almak istiyorum', en: 'I would like general information' }, value: 'genel' },
]

export const LANGUAGE_OPTIONS: SelectOption[] = [
  { label: { tr: 'Türkçe', en: 'Turkish' }, value: 'tr' },
  { label: { tr: 'İngilizce', en: 'English' }, value: 'en' },
  { label: { tr: 'Fark etmez', en: 'No preference' }, value: 'fark-etmez' },
]

export const MEETING_PREFERENCES: SelectOption[] = [
  { label: { tr: 'Online görüşme', en: 'Online meeting' }, value: 'online' },
  { label: { tr: 'Telefon görüşmesi', en: 'Phone call' }, value: 'telefon' },
  { label: { tr: 'WhatsApp üzerinden ilk temas', en: 'First contact via WhatsApp' }, value: 'whatsapp' },
  {
    label: { tr: 'Yüz yüze seçenekleri hakkında bilgi almak istiyorum', en: 'I would like information about in-person options' },
    value: 'yuz-yuze-bilgi',
  },
]

/** Hizmete göre form-sonrası başarı mesajı (yalnızca /on-gorusme) */
export const SUCCESS_MESSAGE_BY_INTEREST: Record<string, Localized<string>> = {
  'bireysel-kocluk': {
    tr: 'Talebiniz alındı. Bireysel koçluk ihtiyacınız değerlendirildikten sonra size uygun uzman ve ön görüşme süreci için dönüş yapılacaktır.',
    en: 'Your request has been received. Once your personal coaching need has been assessed, we will get back to you about the right expert and introductory call process.',
  },
  'yonetici-koclugu': {
    tr: 'Talebiniz alındı. Liderlik rolünüz ve gelişim ihtiyacınız değerlendirildikten sonra size uygun yönetici koçluğu süreci için dönüş yapılacaktır.',
    en: 'Your request has been received. Once your leadership role and development need have been assessed, we will get back to you about the right executive coaching process.',
  },
  'kurumsal-egitim': {
    tr: 'Kurumsal talebiniz alındı. AURIX ekibi kurumunuzun ihtiyacını değerlendirmek ve uygun ihtiyaç analizi görüşmesini planlamak için sizinle iletişime geçecektir.',
    en: 'Your corporate request has been received. The AURIX team will contact you to assess your organization’s need and schedule a needs analysis call.',
  },
  'ogrenci-koclugu': {
    tr: 'Talebiniz alındı. Öğrencinin ihtiyacı ve hedefleri değerlendirildikten sonra uygun öğrenci koçluğu süreci için sizinle iletişime geçilecektir.',
    en: 'Your request has been received. Once the student’s need and goals have been assessed, we will contact you about the right student coaching process.',
  },
  'emin-degilim': {
    tr: 'Talebiniz alındı. Paylaştığınız bilgiler doğrultusunda size en uygun hizmet alanı ve uzman eşleşmesi için AURIX ekibi sizinle iletişime geçecektir.',
    en: 'Your request has been received. Based on the information you shared, the AURIX team will contact you about the service area and expert match that fit you best.',
  },
}

export const DEFAULT_SUCCESS_MESSAGE: Localized<string> = {
  tr: 'Talebiniz başarıyla alındı. İhtiyacınız değerlendirildikten sonra uygun hizmet, uzman veya ön görüşme süreci hakkında sizinle iletişime geçilecektir.',
  en: 'Your request has been received successfully. Once your need has been assessed, we will contact you about the right service, expert, or introductory call process.',
}
