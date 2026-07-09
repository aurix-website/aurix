import type { Locale } from './i18n/types'

export const CONTACT_EMAIL = 'info@aurixdanismanlik.com'
export const WHATSAPP_NUMBER = '905000000000'
export const WHATSAPP_DISPLAY = '+90 500 000 00 00'

const WHATSAPP_MESSAGE_BY_LOCALE: Record<Locale, string> = {
  tr: 'Merhaba, AURIX hizmetleri hakkında bilgi almak ve ön görüşme planlamak istiyorum.',
  en: 'Hello, I would like to learn more about AURIX services and schedule an introductory call.',
}

export const WHATSAPP_MESSAGE = WHATSAPP_MESSAGE_BY_LOCALE.tr

export function getWhatsAppUrl(locale: Locale = 'tr'): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_BY_LOCALE[locale])}`
}

export const WHATSAPP_URL = getWhatsAppUrl('tr')
