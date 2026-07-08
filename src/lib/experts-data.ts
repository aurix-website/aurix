export type PopulatedMedia = { url?: string | null; alt?: string | null }

export type Expert = {
  id: string
  name: string
  slug?: string | null
  title?: string | null
  photo?: PopulatedMedia | string | null
  expertiseAreas?: Array<{ item?: string | null }> | null
  /** /uzmanlar listeleme kartı için kısa konumlandırma cümlesi */
  shortCard?: string
  /** Kart üzerinde gösterilen etiketler (serbest metin) */
  listingTags?: string[]
  /** /uzmanlar filtreleme sabit taksonomisiyle eşleşen kategoriler */
  filterCategories?: string[]
  /** Kart CTA metni — Türkçe ünlü uyumu isim bazında değiştiği için sabit yazılır (ör. "Kaan Yazıcı'yı Tanıyın") */
  listingCta?: string
}

export const EXPERT_FILTER_CATEGORIES = [
  'Bireysel Koçluk',
  'Yönetici Koçluğu',
  'Kurumsal Eğitim',
  'Öğrenci Koçluğu',
  'Kariyer Koçluğu',
  'Takım Koçluğu',
  'Global Uyum',
] as const

export const STATIC_EXPERTS: Expert[] = [
  {
    id: 'kaan-yazici',
    name: 'Kaan Yazıcı',
    slug: 'kaan-yazici',
    title: 'Kurucu, Profesyonel Koç & Takım Koçu',
    photo: { url: '/media/kaan-yazici.png', alt: 'Kaan Yazıcı portresi' },
    expertiseAreas: [
      { item: 'Bireysel koçluk' },
      { item: 'Takım koçluğu' },
      { item: 'Kariyer netliği' },
    ],
    shortCard:
      'Sağlık alanındaki profesyonel deneyimini koçluk ve takım gelişimi yaklaşımıyla birleştirerek bireylere ve takımlara potansiyellerini daha bilinçli şekilde ortaya çıkarma sürecinde eşlik eder.',
    listingTags: ['Bireysel Koçluk', 'Takım Koçluğu', 'Kurucu Vizyon'],
    filterCategories: ['Bireysel Koçluk', 'Takım Koçluğu', 'Yönetici Koçluğu'],
    listingCta: "Kaan Yazıcı'yı Tanıyın",
  },
  {
    id: 'hatice-yildirim',
    name: 'Hatice Yıldırım',
    slug: 'hatice-yildirim',
    title: 'Eğitim Yöneticisi, Liderlik ve Dönüşüm Koçu',
    photo: null,
    expertiseAreas: [
      { item: 'Liderlik akademisi' },
      { item: 'Kuşaklar arası uyum' },
      { item: 'Kurumsal dönüşüm' },
    ],
    shortCard:
      'Eğitim yönetimi, kurumsal liderlik ve profesyonel koçluk deneyimiyle bireylerin ve kurumların dönüşüm süreçlerine eşlik eder.',
    listingTags: ['Kurumsal Eğitim', 'Liderlik', 'Stratejik Dönüşüm', 'Eğitim Yönetimi'],
    filterCategories: ['Kurumsal Eğitim', 'Yönetici Koçluğu', 'Öğrenci Koçluğu'],
    listingCta: "Hatice Yıldırım'ı Tanıyın",
  },
  {
    id: 'hulya-aksu-spizuoco',
    name: 'Hülya Aksu Spizuoco',
    slug: 'hulya-aksu-spizuoco',
    title: 'Liderlik, Kariyer ve Siyaset İletişimi Koçu',
    photo: null,
    expertiseAreas: [
      { item: 'Liderlik' },
      { item: 'Kariyer' },
      { item: 'Global perspektif' },
    ],
    shortCard:
      'Uluslararası eğitim, üst düzey yöneticilik ve global yaşam deneyimini liderlik, kariyer ve jeopolitik perspektifle birleştirir.',
    listingTags: ['Liderlik', 'Kariyer', 'Global Perspektif', 'Yönetici Koçluğu'],
    filterCategories: ['Yönetici Koçluğu', 'Kariyer Koçluğu', 'Global Uyum', 'Kurumsal Eğitim'],
    listingCta: "Hülya Aksu Spizuoco'yu Tanıyın",
  },
  {
    id: 'cigdem-karavelioglu',
    name: 'Çiğdem Karavelioğlu',
    slug: 'cigdem-karavelioglu',
    title: 'Profesyonel Koç, Takım Koçu & Eğitmen',
    photo: { url: '/media/cigdem-karavelioglu.png', alt: 'Çiğdem Karavelioğlu portresi' },
    expertiseAreas: [
      { item: 'Bireysel koçluk' },
      { item: 'Takım koçluğu' },
      { item: 'Kariyer' },
    ],
    shortCard:
      'Finans sektörü ve yöneticilik deneyimini koçluk, takım gelişimi ve bireysel dönüşüm alanlarıyla birleştirir.',
    listingTags: ['Bireysel Koçluk', 'Takım Koçluğu', 'Kariyer', 'Gençlik'],
    filterCategories: ['Bireysel Koçluk', 'Takım Koçluğu', 'Kariyer Koçluğu', 'Öğrenci Koçluğu'],
    listingCta: "Çiğdem Karavelioğlu'nu Tanıyın",
  },
  {
    id: 'secil-ozbayir',
    name: 'Seçil Özbayır',
    slug: 'secil-ozbayir',
    title: 'Dönüşüm ve Kariyer Koçu, HR & Wellbeing Uzmanı',
    photo: null,
    expertiseAreas: [
      { item: 'Kariyer' },
      { item: 'Kurumsal dönüşüm' },
      { item: 'Wellbeing' },
    ],
    shortCard:
      'İnsan kaynakları, organizasyonel dönüşüm, liderlik gelişimi ve wellbeing alanlarındaki deneyimini bireysel ve kurumsal gelişim süreçlerine taşır.',
    listingTags: ['Kariyer Koçluğu', 'Kurumsal Dönüşüm', 'Wellbeing', 'HR', 'Global Uyum'],
    filterCategories: [
      'Kariyer Koçluğu',
      'Yönetici Koçluğu',
      'Kurumsal Eğitim',
      'Global Uyum',
      'Bireysel Koçluk',
    ],
    listingCta: "Seçil Özbayır'ı Tanıyın",
  },
  {
    id: 'seda-sen',
    name: 'Seda Şen',
    slug: 'seda-sen',
    title: 'Kariyer & Yönetici Koçu, Kurumsal Eğitmen',
    photo: null,
    expertiseAreas: [
      { item: 'Kariyer' },
      { item: 'Yönetici koçluğu' },
      { item: 'Global uyum' },
    ],
    shortCard:
      'Denizcilik ve lojistik sektöründeki 20 yılı aşkın deneyimini kariyer, yönetici koçluğu, kurumsal eğitim ve göç süreçleriyle birleştirir.',
    listingTags: ['Kariyer Koçluğu', 'Yönetici Koçluğu', 'Kurumsal Eğitim', 'Global Uyum', 'Öğrenci ve Gençlik'],
    filterCategories: [
      'Kariyer Koçluğu',
      'Yönetici Koçluğu',
      'Öğrenci Koçluğu',
      'Kurumsal Eğitim',
      'Global Uyum',
    ],
    listingCta: "Seda Şen'i Tanıyın",
  },
]

export const EXPERT_PLACEHOLDERS: Record<string, string> = {
  'kaan-yazici': 'expert-kaan-yazici.jpg',
  'hatice-yildirim': 'expert-hatice-yildirim.jpg',
  'hulya-aksu-spizuoco': 'expert-hulya-aksu-spizuoco.jpg',
  'cigdem-karavelioglu': 'expert-cigdem-karavelioglu.jpg',
  'secil-ozbayir': 'expert-secil-ozbayir.jpg',
  'seda-sen': 'expert-seda-sen.jpg',
}

export function getExpertBySlug(slug: string): Expert | undefined {
  return STATIC_EXPERTS.find((expert) => expert.slug === slug)
}
