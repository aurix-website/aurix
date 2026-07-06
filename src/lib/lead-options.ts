export interface SelectOption {
  label: string
  value: string
}

/** Ortak "destek almak istediğiniz alan" taksonomisi — /iletisim, /on-gorusme ve kart yönlendirmeleri bunu paylaşır */
export const INTEREST_AREAS: SelectOption[] = [
  { label: 'Bireysel Koçluk', value: 'bireysel-kocluk' },
  { label: 'Yönetici Koçluğu', value: 'yonetici-koclugu' },
  { label: 'Kurumsal Eğitim', value: 'kurumsal-egitim' },
  { label: 'Öğrenci Koçluğu', value: 'ogrenci-koclugu' },
  { label: 'Kariyer Koçluğu', value: 'kariyer-koclugu' },
  { label: 'Takım Koçluğu', value: 'takim-koclugu' },
  { label: 'Global Uyum ve Kariyer', value: 'global-uyum' },
  { label: 'Emin Değilim', value: 'emin-degilim' },
]

export const CONTACT_REASONS: SelectOption[] = [
  { label: 'Ön görüşme talep etmek istiyorum', value: 'on-gorusme' },
  { label: 'Hizmetler hakkında bilgi almak istiyorum', value: 'hizmet-bilgi' },
  { label: 'Kurumsal eğitim için görüşmek istiyorum', value: 'kurumsal' },
  { label: 'Bir uzman hakkında bilgi almak istiyorum', value: 'uzman-bilgi' },
  { label: 'Öğrenci koçluğu hakkında bilgi almak istiyorum', value: 'ogrenci-bilgi' },
  { label: 'Genel bilgi almak istiyorum', value: 'genel' },
]

export const LANGUAGE_OPTIONS: SelectOption[] = [
  { label: 'Türkçe', value: 'tr' },
  { label: 'İngilizce', value: 'en' },
  { label: 'Fark etmez', value: 'fark-etmez' },
]

export const MEETING_PREFERENCES: SelectOption[] = [
  { label: 'Online görüşme', value: 'online' },
  { label: 'Telefon görüşmesi', value: 'telefon' },
  { label: 'WhatsApp üzerinden ilk temas', value: 'whatsapp' },
  { label: 'Yüz yüze seçenekleri hakkında bilgi almak istiyorum', value: 'yuz-yuze-bilgi' },
]

/** Hizmete göre form-sonrası başarı mesajı (yalnızca /on-gorusme) */
export const SUCCESS_MESSAGE_BY_INTEREST: Record<string, string> = {
  'bireysel-kocluk':
    'Talebiniz alındı. Bireysel koçluk ihtiyacınız değerlendirildikten sonra size uygun uzman ve ön görüşme süreci için dönüş yapılacaktır.',
  'yonetici-koclugu':
    'Talebiniz alındı. Liderlik rolünüz ve gelişim ihtiyacınız değerlendirildikten sonra size uygun yönetici koçluğu süreci için dönüş yapılacaktır.',
  'kurumsal-egitim':
    'Kurumsal talebiniz alındı. AURIX ekibi kurumunuzun ihtiyacını değerlendirmek ve uygun ihtiyaç analizi görüşmesini planlamak için sizinle iletişime geçecektir.',
  'ogrenci-koclugu':
    'Talebiniz alındı. Öğrencinin ihtiyacı ve hedefleri değerlendirildikten sonra uygun öğrenci koçluğu süreci için sizinle iletişime geçilecektir.',
  'emin-degilim':
    'Talebiniz alındı. Paylaştığınız bilgiler doğrultusunda size en uygun hizmet alanı ve uzman eşleşmesi için AURIX ekibi sizinle iletişime geçecektir.',
}

export const DEFAULT_SUCCESS_MESSAGE =
  'Talebiniz başarıyla alındı. İhtiyacınız değerlendirildikten sonra uygun hizmet, uzman veya ön görüşme süreci hakkında sizinle iletişime geçilecektir.'
