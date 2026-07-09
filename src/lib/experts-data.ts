import type { Localized } from './i18n/types'

export type PopulatedMedia = { url?: string | null; alt?: string | null }

export type Expert = {
  id: string
  name: string
  slug?: string | null
  title?: Localized<string> | null
  photo?: PopulatedMedia | string | null
  expertiseAreas?: Localized<Array<{ item?: string | null }>> | null
  /** /uzmanlar listeleme kartı için kısa konumlandırma cümlesi */
  shortCard?: Localized<string>
  /** Kart üzerinde gösterilen etiketler (serbest metin) */
  listingTags?: Localized<string[]>
  /** /uzmanlar filtreleme sabit taksonomisiyle eşleşen kategoriler */
  filterCategories?: Localized<string[]>
  /** Kart CTA metni — Türkçe ünlü uyumu isim bazında değiştiği için sabit yazılır (ör. "Kaan Yazıcı'yı Tanıyın") */
  listingCta?: Localized<string>
}

export const EXPERT_FILTER_CATEGORIES: Localized<string[]> = {
  tr: [
    'Bireysel Koçluk',
    'Yönetici Koçluğu',
    'Kurumsal Eğitim',
    'Öğrenci Koçluğu',
    'Kariyer Koçluğu',
    'Takım Koçluğu',
    'Global Uyum',
  ],
  en: [
    'Personal Coaching',
    'Executive Coaching',
    'Corporate Training',
    'Student Coaching',
    'Career Coaching',
    'Team Coaching',
    'Global Adaptation',
  ],
}

/** tr → en tekil kategori etiketi eşlemesi (filterCategories dizilerinin tutarlı kalması için) */
const CATEGORY_LABEL_EN: Record<string, string> = {
  'Bireysel Koçluk': 'Personal Coaching',
  'Yönetici Koçluğu': 'Executive Coaching',
  'Kurumsal Eğitim': 'Corporate Training',
  'Öğrenci Koçluğu': 'Student Coaching',
  'Kariyer Koçluğu': 'Career Coaching',
  'Takım Koçluğu': 'Team Coaching',
  'Global Uyum': 'Global Adaptation',
  'Kurucu Vizyon': 'Founding Vision',
  'Liderlik': 'Leadership',
  'Stratejik Dönüşüm': 'Strategic Transformation',
  'Eğitim Yönetimi': 'Education Management',
  'Global Perspektif': 'Global Perspective',
  'Kariyer': 'Career',
  'Gençlik': 'Youth',
  'Kurumsal Dönüşüm': 'Organizational Transformation',
  'Wellbeing': 'Wellbeing',
  'HR': 'HR',
  'Öğrenci ve Gençlik': 'Students & Youth',
}

function localizeCategories(categories: string[]): Localized<string[]> {
  return { tr: categories, en: categories.map((c) => CATEGORY_LABEL_EN[c] ?? c) }
}

export const STATIC_EXPERTS: Expert[] = [
  {
    id: 'kaan-yazici',
    name: 'Kaan Yazıcı',
    slug: 'kaan-yazici',
    title: {
      tr: 'Kurucu, Profesyonel Koç & Takım Koçu',
      en: 'Founder, Professional Coach & Team Coach',
    },
    photo: { url: '/media/expert-kaan-yazici.jpg', alt: 'Kaan Yazıcı' },
    expertiseAreas: {
      tr: [{ item: 'Bireysel koçluk' }, { item: 'Takım koçluğu' }, { item: 'Kariyer netliği' }],
      en: [{ item: 'Personal coaching' }, { item: 'Team coaching' }, { item: 'Career clarity' }],
    },
    shortCard: {
      tr: 'Sağlık alanındaki profesyonel deneyimini koçluk ve takım gelişimi yaklaşımıyla birleştirerek bireylere ve takımlara potansiyellerini daha bilinçli şekilde ortaya çıkarma sürecinde eşlik eder.',
      en: 'Brings his professional experience in healthcare together with coaching and team development, guiding individuals and teams toward a more conscious use of their potential.',
    },
    listingTags: localizeCategories(['Bireysel Koçluk', 'Takım Koçluğu', 'Kurucu Vizyon']),
    filterCategories: localizeCategories(['Bireysel Koçluk', 'Takım Koçluğu', 'Yönetici Koçluğu']),
    listingCta: { tr: "Kaan Yazıcı'yı Tanıyın", en: 'Meet Kaan Yazıcı' },
  },
  {
    id: 'hatice-yildirim',
    name: 'Hatice Yıldırım',
    slug: 'hatice-yildirim',
    title: {
      tr: 'Eğitim Yöneticisi, Liderlik ve Dönüşüm Koçu',
      en: 'Education Manager, Leadership and Transformation Coach',
    },
    photo: null,
    expertiseAreas: {
      tr: [{ item: 'Liderlik akademisi' }, { item: 'Kuşaklar arası uyum' }, { item: 'Kurumsal dönüşüm' }],
      en: [
        { item: 'Leadership academy' },
        { item: 'Cross-generational alignment' },
        { item: 'Organizational transformation' },
      ],
    },
    shortCard: {
      tr: 'Eğitim yönetimi, liderlik akademisi, stratejik dönüşüm, liyakat ve profesyonel koçluk deneyimini kurumların gelişim süreçlerine taşır.',
      en: 'Brings education management, leadership academy design, strategic transformation, merit-based systems, and professional coaching to organizational development.',
    },
    listingTags: localizeCategories([
      'Kurumsal Eğitim',
      'Liderlik',
      'Stratejik Dönüşüm',
      'Eğitim Yönetimi',
    ]),
    filterCategories: localizeCategories(['Kurumsal Eğitim', 'Yönetici Koçluğu', 'Öğrenci Koçluğu']),
    listingCta: { tr: "Hatice Yıldırım'ı Tanıyın", en: 'Meet Hatice Yıldırım' },
  },
  {
    id: 'hulya-aksu-spizuoco',
    name: 'Hülya Aksu Spizuoco',
    slug: 'hulya-aksu-spizuoco',
    title: {
      tr: 'Liderlik, Kariyer ve Siyaset İletişimi Koçu',
      en: 'Leadership, Career, and Political Communication Coach',
    },
    photo: null,
    expertiseAreas: {
      tr: [{ item: 'Liderlik' }, { item: 'Kariyer' }, { item: 'Global perspektif' }],
      en: [{ item: 'Leadership' }, { item: 'Career' }, { item: 'Global perspective' }],
    },
    shortCard: {
      tr: 'Uluslararası eğitim, üst düzey yöneticilik, girişimcilik, siyaset iletişimi ve jeopolitik perspektifi liderlik ve kariyer koçluğuyla birleştirir.',
      en: 'Combines international education, senior executive experience, entrepreneurship, political communication, and geopolitics with leadership and career coaching.',
    },
    listingTags: localizeCategories([
      'Liderlik',
      'Kariyer',
      'Global Perspektif',
      'Yönetici Koçluğu',
    ]),
    filterCategories: localizeCategories([
      'Yönetici Koçluğu',
      'Kariyer Koçluğu',
      'Global Uyum',
      'Kurumsal Eğitim',
    ]),
    listingCta: { tr: "Hülya Aksu Spizuoco'yu Tanıyın", en: 'Meet Hülya Aksu Spizuoco' },
  },
  {
    id: 'cigdem-karavelioglu',
    name: 'Çiğdem Karavelioğlu',
    slug: 'cigdem-karavelioglu',
    title: {
      tr: 'Profesyonel Koç, Takım Koçu & Eğitmen',
      en: 'Professional Coach, Team Coach & Trainer',
    },
    photo: { url: '/media/expert-cigdem-karavelioglu.jpg', alt: 'Çiğdem Karavelioğlu' },
    expertiseAreas: {
      tr: [{ item: 'Profesyonel koçluk' }, { item: 'Takım koçluğu' }, { item: 'Psych-K®' }],
      en: [{ item: 'Professional coaching' }, { item: 'Team coaching' }, { item: 'Psych-K®' }],
    },
    shortCard: {
      tr: 'Finans ve yöneticilik deneyimini profesyonel koçluk, takım koçluğu, NLP, Psych-K®, hipnoz ve Access Consciousness® yöntemleriyle birleştirir.',
      en: 'Combines finance and management experience with professional coaching, team coaching, NLP, Psych-K®, hypnosis, and Access Consciousness® methods.',
    },
    listingTags: localizeCategories(['Bireysel Koçluk', 'Takım Koçluğu', 'Kariyer', 'Gençlik']),
    filterCategories: localizeCategories([
      'Bireysel Koçluk',
      'Takım Koçluğu',
      'Kariyer Koçluğu',
      'Öğrenci Koçluğu',
    ]),
    listingCta: { tr: "Çiğdem Karavelioğlu'nu Tanıyın", en: 'Meet Çiğdem Karavelioğlu' },
  },
  {
    id: 'secil-ozbayir',
    name: 'Seçil Özbayır',
    slug: 'secil-ozbayir',
    title: {
      tr: 'Dönüşüm ve Kariyer Koçu, HR & Wellbeing Uzmanı',
      en: 'Transformation and Career Coach, HR & Wellbeing Specialist',
    },
    photo: null,
    expertiseAreas: {
      tr: [{ item: 'Kariyer' }, { item: 'Kurumsal dönüşüm' }, { item: 'Wellbeing' }],
      en: [{ item: 'Career' }, { item: 'Organizational transformation' }, { item: 'Wellbeing' }],
    },
    shortCard: {
      tr: 'İnsan kaynakları, liderlik gelişimi, organizasyonel dönüşüm, kariyer koçluğu, wellbeing, yoga ve uluslararası geçiş süreçlerini birlikte ele alır.',
      en: 'Combines human resources, leadership development, organizational transformation, career coaching, wellbeing, yoga, and international transitions.',
    },
    listingTags: localizeCategories([
      'Kariyer Koçluğu',
      'Kurumsal Dönüşüm',
      'Wellbeing',
      'HR',
      'Global Uyum',
    ]),
    filterCategories: localizeCategories([
      'Kariyer Koçluğu',
      'Yönetici Koçluğu',
      'Kurumsal Eğitim',
      'Global Uyum',
      'Bireysel Koçluk',
    ]),
    listingCta: { tr: "Seçil Özbayır'ı Tanıyın", en: 'Meet Seçil Özbayır' },
  },
  {
    id: 'seda-sen',
    name: 'Seda Şen',
    slug: 'seda-sen',
    title: {
      tr: 'Kariyer & Yönetici Koçu, Kurumsal Eğitmen',
      en: 'Career & Executive Coach, Corporate Trainer',
    },
    photo: null,
    expertiseAreas: {
      tr: [{ item: 'Kariyer' }, { item: 'Yönetici koçluğu' }, { item: 'Global uyum' }],
      en: [{ item: 'Career' }, { item: 'Executive coaching' }, { item: 'Global adaptation' }],
    },
    shortCard: {
      tr: 'Denizcilik ve lojistikteki 20 yılı aşkın deneyimini kariyer koçluğu, yönetici koçluğu, kurumsal eğitim, öğrenci gelişimi ve göç süreçleriyle birleştirir.',
      en: 'Combines 20+ years in maritime and logistics with career coaching, executive coaching, corporate training, student development, and relocation support.',
    },
    listingTags: localizeCategories([
      'Kariyer Koçluğu',
      'Yönetici Koçluğu',
      'Kurumsal Eğitim',
      'Global Uyum',
      'Öğrenci ve Gençlik',
    ]),
    filterCategories: localizeCategories([
      'Kariyer Koçluğu',
      'Yönetici Koçluğu',
      'Öğrenci Koçluğu',
      'Kurumsal Eğitim',
      'Global Uyum',
    ]),
    listingCta: { tr: "Seda Şen'i Tanıyın", en: 'Meet Seda Şen' },
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
