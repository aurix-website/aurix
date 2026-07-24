import type { ElementType } from 'react'
import {
  User,
  Compass,
  Briefcase,
  Users,
  Building2,
  NotebookPen,
  GraduationCap,
  TrendingUp,
  Globe,
  Languages,
} from 'lucide-react'
import type { Localized } from './i18n/types'

export interface ServiceCategory {
  id: string
  number: string
  icon: ElementType
  category: Localized<string>
  title: Localized<string>
  description: Localized<string>
  accent: string
}

export const SERVICES: ServiceCategory[] = [
  {
    id: 'bireysel-kocluk',
    number: '01',
    icon: User,
    category: { tr: 'BİREYSEL', en: 'PERSONAL' },
    title: { tr: 'Bireysel Koçluk', en: 'Personal Coaching' },
    description: {
      tr: 'Kişisel hedefler, farkındalık ve içsel engellerin aşılması için birebir koçluk seansları. Kendi potansiyelinizi keşfetmenize ve harekete geçmenize yapılandırılmış destek.',
      en: 'One-on-one coaching sessions for personal goals, self-awareness, and working through inner obstacles. Structured support to help you discover your potential and take action.',
    },
    accent: '#14797C',
  },
  {
    id: 'kariyer-koclugu',
    number: '02',
    icon: Compass,
    category: { tr: 'KARİYER', en: 'CAREER' },
    title: { tr: 'Kariyer Koçluğu', en: 'Career Coaching' },
    description: {
      tr: 'Kariyer geçişi, iş değiştirme veya yeni alan keşfi süreçlerinde yapılandırılmış rehberlik. Doğru kararı vermek için netlik ve strateji.',
      en: 'Structured guidance through career transitions, job changes, or exploring a new field. Clarity and strategy for making the right decision.',
    },
    accent: '#C5A059',
  },
  {
    id: 'yonetici-koclugu',
    number: '03',
    icon: Briefcase,
    category: { tr: 'LİDERLİK', en: 'LEADERSHIP' },
    title: { tr: 'Liderlik ve Yönetici Koçluğu', en: 'Leadership and Executive Coaching' },
    description: {
      tr: 'Üst ve orta kademe yöneticiler için liderlik kapasitesi, kör nokta farkındalığı ve stratejik etki geliştirme.',
      en: 'For senior and mid-level managers: building leadership capacity, blind-spot awareness, and strategic impact.',
    },
    accent: '#14797C',
  },
  {
    id: 'takim-koclugu',
    number: '04',
    icon: Users,
    category: { tr: 'TAKIM', en: 'TEAM' },
    title: { tr: 'Takım Koçluğu', en: 'Team Coaching' },
    description: {
      tr: 'Ekip içi iletişim, uyum ve performansı güçlendiren kolektif koçluk süreçleri.',
      en: 'Collective coaching processes that strengthen team communication, cohesion, and performance.',
    },
    accent: '#C5A059',
  },
  {
    id: 'kurumsal-egitim',
    number: '05',
    icon: Building2,
    category: { tr: 'KURUMSAL', en: 'CORPORATE' },
    title: { tr: 'Kurumsal Eğitimler', en: 'Corporate Training' },
    description: {
      tr: 'Şirket ihtiyaçlarına göre tasarlanmış, ölçülebilir çıktı odaklı eğitim programları.',
      en: 'Training programs designed around company needs, focused on measurable outcomes.',
    },
    accent: '#14797C',
  },
  {
    id: 'ogrenci-mentorlugu-sinav-stratejisi',
    number: '06',
    icon: NotebookPen,
    category: { tr: 'ÖĞRENCİ', en: 'STUDENT' },
    title: { tr: 'Öğrenci Mentörlüğü ve Sınav Stratejisi', en: 'Student Mentoring and Exam Strategy' },
    description: {
      tr: 'YKS, LGS ve uluslararası sınavlara yönelik zihinsel hazırlık ve stratejik planlama.',
      en: 'Mental preparation and strategic planning for national and international exams.',
    },
    accent: '#C5A059',
  },
  {
    id: 'ogrenci-koclugu',
    number: '07',
    icon: GraduationCap,
    category: { tr: 'ÖĞRENCİ', en: 'STUDENT' },
    title: { tr: 'Öğrenci Koçluğu', en: 'Student Coaching' },
    description: {
      tr: 'Akademik motivasyon, zaman yönetimi ve öz-düzenleme becerilerini geliştiren koçluk.',
      en: 'Coaching that develops academic motivation, time management, and self-regulation skills.',
    },
    accent: '#14797C',
  },
  {
    id: 'genclerde-kariyer-farkindaligi',
    number: '08',
    icon: TrendingUp,
    category: { tr: 'GENÇLİK', en: 'YOUTH' },
    title: { tr: 'Gençler için Kariyer Farkındalığı', en: 'Career Awareness for Young People' },
    description: {
      tr: 'Üniversite öğrencileri ve yeni mezunlar için kariyer keşfi ve meslek seçimi rehberliği.',
      en: 'Career exploration and profession-choice guidance for university students and recent graduates.',
    },
    accent: '#C5A059',
  },
  {
    id: 'global-uyum-kariyer-koclugu',
    number: '09',
    icon: Globe,
    category: { tr: 'KÜRESEL', en: 'GLOBAL' },
    title: { tr: 'Küresel Uyum ve Kariyer Koçluğu', en: 'Global Adaptation and Career Coaching' },
    description: {
      tr: 'Yurt dışına çıkan veya uluslararası kariyer hedefleyen bireyler için uyum ve strateji desteği.',
      en: 'Adaptation and strategy support for individuals moving abroad or pursuing an international career.',
    },
    accent: '#14797C',
  },
  {
    id: 'dil-ogreniminde-zihinsel-donusum-koclugu',
    number: '10',
    icon: Languages,
    category: { tr: 'KÜRESEL', en: 'GLOBAL' },
    title: { tr: 'Dil Öğreniminde Zihinsel Dönüşüm Koçluğu', en: 'Mindset Coaching for Language Learning' },
    description: {
      tr: 'Dil öğrenme engellerini aşmak için zihinsel blokları ve motivasyon dinamiklerini ele alan özel koçluk.',
      en: 'Specialized coaching that addresses mental blocks and motivation dynamics to overcome language-learning obstacles.',
    },
    accent: '#C5A059',
  },
]

export function getServiceById(id: string): ServiceCategory | undefined {
  return SERVICES.find((service) => service.id === id)
}
