import type { Locale } from './i18n/types'

export const CONTACT_EMAIL = 'info@aurixdanismanlik.com'
export const WHATSAPP_NUMBER = '905449783119'
export const WHATSAPP_DISPLAY = '+90 544 978 31 19'

const WHATSAPP_MESSAGE_BY_LOCALE: Record<Locale, string> = {
  tr: 'Merhaba, AURIX hizmetleri hakkında bilgi almak ve ön görüşme planlamak istiyorum.',
  en: 'Hello, I would like to learn more about AURIX services and schedule an introductory call.',
}

export const WHATSAPP_MESSAGE = WHATSAPP_MESSAGE_BY_LOCALE.tr

export function getWhatsAppUrl(locale: Locale = 'tr'): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_BY_LOCALE[locale])}`
}

export const WHATSAPP_URL = getWhatsAppUrl('tr')

export const CONTACT_ADDRESS =
  'Ege Üniversitesi Kampüsü, Erzene, Ankara Cd. No:172/67, 35100 Bornova/İzmir'

/**
 * "Ege Üniversitesi Kampüsü" tek başına aratıldığında Google Maps farklı bir
 * noktaya (kampüsün Kızılay/Ankara Cd. girişine) eşleşiyor. Başına "Ege
 * Üniversitesi Teknopark" eklenince doğru bina (Erzene, No:172/67) bulunuyor.
 */
const MAPS_QUERY = `Ege Üniversitesi Teknopark, ${CONTACT_ADDRESS}`

/**
 * Google Maps üzerinden "ideEge Teknoloji Geliştirme Bölgesi" için alınan
 * resmi Paylaş → Haritayı Yerleştir (Embed a map) bağlantısı. API anahtarı
 * gerektirmeyen, tıklanabilir yer bilgisi kartı dahil sorunsuz çalışan tek
 * yöntem budur.
 */
const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.303692553272!2d27.230374538534715!3d38.45754956846441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97cdab848336b%3A0xb5fc14c5b1c05a7c!2sideEge%20Teknoloji%20Geli%C5%9Ftirme%20B%C3%B6lgesi!5e0!3m2!1str!2str!4v1784905732562!5m2!1str!2str'

export function getGoogleMapsUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`
}

export function getGoogleMapsEmbedUrl(): string {
  return MAPS_EMBED_SRC
}
