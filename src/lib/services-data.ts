import type { ElementType } from 'react'
import { User, Briefcase, Building2, GraduationCap } from 'lucide-react'
import type { Localized } from './i18n/types'

export interface SubService {
  title: Localized<string>
  description: Localized<string>
}

export interface ServiceCategory {
  id: string
  number: string
  icon: ElementType
  category: Localized<string>
  title: Localized<string>
  description: Localized<string>
  accent: string
  subServices: SubService[]
}

export const SERVICES: ServiceCategory[] = [
  {
    id: 'bireysel',
    number: '01',
    icon: User,
    category: { tr: 'BİREYSEL', en: 'PERSONAL' },
    title: { tr: 'Bireysel Koçluk & Kariyer', en: 'Personal Coaching & Career' },
    description: {
      tr: 'Kariyerinde yön arayan, potansiyelini tam kullanmak isteyen bireyler için yapılandırılmış gelişim süreci.',
      en: 'A structured development process for individuals seeking direction in their career and wanting to use their full potential.',
    },
    accent: '#14797C',
    subServices: [
      {
        title: { tr: 'Bireysel Koçluk', en: 'Personal Coaching' },
        description: {
          tr: 'Kişisel hedefler, farkındalık ve içsel engellerin aşılması için birebir koçluk seansları. Kendi potansiyelinizi keşfetmenize ve harekete geçmenize yapılandırılmış destek.',
          en: 'One-on-one coaching sessions for personal goals, self-awareness, and working through inner obstacles. Structured support to help you discover your potential and take action.',
        },
      },
      {
        title: { tr: 'Kariyer Koçluğu', en: 'Career Coaching' },
        description: {
          tr: 'Kariyer geçişi, iş değiştirme veya yeni alan keşfi süreçlerinde yapılandırılmış rehberlik. Doğru kararı vermek için netlik ve strateji.',
          en: 'Structured guidance through career transitions, job changes, or exploring a new field. Clarity and strategy for making the right decision.',
        },
      },
    ],
  },
  {
    id: 'liderlik',
    number: '02',
    icon: Briefcase,
    category: { tr: 'LİDERLİK', en: 'LEADERSHIP' },
    title: { tr: 'Liderlik & Yönetici Koçluğu', en: 'Leadership & Executive Coaching' },
    description: {
      tr: 'Yöneticiler ve liderler için karar alma, ekip yönetimi ve kurumsal etki geliştirme programları.',
      en: 'Programs for managers and leaders to strengthen decision-making, team management, and organizational impact.',
    },
    accent: '#C5A059',
    subServices: [
      {
        title: { tr: 'Liderlik ve Yönetici Koçluğu', en: 'Leadership and Executive Coaching' },
        description: {
          tr: 'Üst ve orta kademe yöneticiler için liderlik kapasitesi, kör nokta farkındalığı ve stratejik etki geliştirme.',
          en: 'For senior and mid-level managers: building leadership capacity, blind-spot awareness, and strategic impact.',
        },
      },
      {
        title: { tr: 'Takım Koçluğu', en: 'Team Coaching' },
        description: {
          tr: 'Ekip içi iletişim, uyum ve performansı güçlendiren kolektif koçluk süreçleri.',
          en: 'Collective coaching processes that strengthen team communication, cohesion, and performance.',
        },
      },
      {
        title: { tr: 'Kurumsal Eğitimler', en: 'Corporate Training' },
        description: {
          tr: 'Liderlik, iletişim ve dönüşüm odaklı özelleştirilmiş kurumsal eğitim programları.',
          en: 'Customized corporate training programs focused on leadership, communication, and transformation.',
        },
      },
    ],
  },
  {
    id: 'kurumsal',
    number: '03',
    icon: Building2,
    category: { tr: 'KURUMSAL', en: 'CORPORATE' },
    title: { tr: 'Kurumsal & Takım Programları', en: 'Corporate & Team Programs' },
    description: {
      tr: 'Şirket kültürü, takım dinamikleri ve kurumsal performans için tasarlanmış bütünsel çözümler.',
      en: 'Holistic solutions designed for company culture, team dynamics, and organizational performance.',
    },
    accent: '#14797C',
    subServices: [
      {
        title: { tr: 'Kurumsal Eğitimler', en: 'Corporate Training' },
        description: {
          tr: 'Şirket ihtiyaçlarına göre tasarlanmış, ölçülebilir çıktı odaklı eğitim programları.',
          en: 'Training programs designed around company needs, focused on measurable outcomes.',
        },
      },
      {
        title: { tr: 'Takım Koçluğu', en: 'Team Coaching' },
        description: {
          tr: 'Ekip performansını, bağlılığını ve iş birliğini geliştiren grup koçluğu seansları.',
          en: 'Group coaching sessions that develop team performance, engagement, and collaboration.',
        },
      },
    ],
  },
  {
    id: 'gencler',
    number: '04',
    icon: GraduationCap,
    category: { tr: 'GENÇLER & KÜRESEL', en: 'YOUTH & GLOBAL' },
    title: { tr: 'Gençler, Öğrenciler & Küresel Uyum', en: 'Youth, Students & Global Adaptation' },
    description: {
      tr: 'Öğrencilerden genç profesyonellere, yurt içinden dünyaya uzanan kapsamlı kariyer rehberliği.',
      en: 'Comprehensive career guidance spanning students to young professionals, and home country to the wider world.',
    },
    accent: '#C5A059',
    subServices: [
      {
        title: { tr: 'Öğrenci Mentörlüğü ve Sınav Stratejisi', en: 'Student Mentoring and Exam Strategy' },
        description: {
          tr: 'YKS, LGS ve uluslararası sınavlara yönelik zihinsel hazırlık ve stratejik planlama.',
          en: 'Mental preparation and strategic planning for national and international exams.',
        },
      },
      {
        title: { tr: 'Öğrenci Koçluğu', en: 'Student Coaching' },
        description: {
          tr: 'Akademik motivasyon, zaman yönetimi ve öz-düzenleme becerilerini geliştiren koçluk.',
          en: 'Coaching that develops academic motivation, time management, and self-regulation skills.',
        },
      },
      {
        title: { tr: 'Gençler için Kariyer Farkındalığı', en: 'Career Awareness for Young People' },
        description: {
          tr: 'Üniversite öğrencileri ve yeni mezunlar için kariyer keşfi ve meslek seçimi rehberliği.',
          en: 'Career exploration and profession-choice guidance for university students and recent graduates.',
        },
      },
      {
        title: { tr: 'Küresel Uyum ve Kariyer Koçluğu', en: 'Global Adaptation and Career Coaching' },
        description: {
          tr: 'Yurt dışına çıkan veya uluslararası kariyer hedefleyen bireyler için uyum ve strateji desteği.',
          en: 'Adaptation and strategy support for individuals moving abroad or pursuing an international career.',
        },
      },
      {
        title: { tr: 'Dil Öğreniminde Zihinsel Dönüşüm Koçluğu', en: 'Mindset Coaching for Language Learning' },
        description: {
          tr: 'Dil öğrenme engellerini aşmak için zihinsel blokları ve motivasyon dinamiklerini ele alan özel koçluk.',
          en: 'Specialized coaching that addresses mental blocks and motivation dynamics to overcome language-learning obstacles.',
        },
      },
    ],
  },
]

/** service.id (kategori kartları / anchor) → detay sayfası slug'ı (/hizmetler/[slug]) eşlemesi */
export const SERVICE_DETAIL_SLUGS: Record<string, string> = {
  bireysel: 'bireysel-kocluk',
  liderlik: 'yonetici-koclugu',
  kurumsal: 'kurumsal-egitim',
  gencler: 'ogrenci-koclugu',
}
