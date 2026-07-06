import type { ElementType } from 'react'
import { User, Briefcase, Building2, GraduationCap } from 'lucide-react'

export interface SubService {
  title: string
  description: string
}

export interface ServiceCategory {
  id: string
  number: string
  icon: ElementType
  category: string
  title: string
  description: string
  accent: string
  subServices: SubService[]
}

export const SERVICES: ServiceCategory[] = [
  {
    id: 'bireysel',
    number: '01',
    icon: User,
    category: 'BİREYSEL',
    title: 'Bireysel Koçluk & Kariyer',
    description:
      'Kariyerinde yön arayan, potansiyelini tam kullanmak isteyen bireyler için yapılandırılmış gelişim süreci.',
    accent: '#14797C',
    subServices: [
      {
        title: 'Bireysel Koçluk',
        description:
          'Kişisel hedefler, farkındalık ve içsel engellerin aşılması için birebir koçluk seansları. Kendi potansiyelinizi keşfetmenize ve harekete geçmenize yapılandırılmış destek.',
      },
      {
        title: 'Kariyer Koçluğu',
        description:
          'Kariyer geçişi, iş değiştirme veya yeni alan keşfi süreçlerinde yapılandırılmış rehberlik. Doğru kararı vermek için netlik ve strateji.',
      },
    ],
  },
  {
    id: 'liderlik',
    number: '02',
    icon: Briefcase,
    category: 'LİDERLİK',
    title: 'Liderlik & Yönetici Koçluğu',
    description:
      'Yöneticiler ve liderler için karar alma, ekip yönetimi ve kurumsal etki geliştirme programları.',
    accent: '#C5A059',
    subServices: [
      {
        title: 'Liderlik ve Yönetici Koçluğu',
        description:
          'Üst ve orta kademe yöneticiler için liderlik kapasitesi, kör nokta farkındalığı ve stratejik etki geliştirme.',
      },
      {
        title: 'Takım Koçluğu',
        description:
          'Ekip içi iletişim, uyum ve performansı güçlendiren kolektif koçluk süreçleri.',
      },
      {
        title: 'Kurumsal Eğitimler',
        description:
          'Liderlik, iletişim ve dönüşüm odaklı özelleştirilmiş kurumsal eğitim programları.',
      },
    ],
  },
  {
    id: 'kurumsal',
    number: '03',
    icon: Building2,
    category: 'KURUMSAL',
    title: 'Kurumsal & Takım Programları',
    description:
      'Şirket kültürü, takım dinamikleri ve kurumsal performans için tasarlanmış bütünsel çözümler.',
    accent: '#14797C',
    subServices: [
      {
        title: 'Kurumsal Eğitimler',
        description:
          'Şirket ihtiyaçlarına göre tasarlanmış, ölçülebilir çıktı odaklı eğitim programları.',
      },
      {
        title: 'Takım Koçluğu',
        description:
          'Ekip performansını, bağlılığını ve iş birliğini geliştiren grup koçluğu seansları.',
      },
    ],
  },
  {
    id: 'gencler',
    number: '04',
    icon: GraduationCap,
    category: 'GENÇLER & KÜRESEL',
    title: 'Gençler, Öğrenciler & Küresel Uyum',
    description:
      'Öğrencilerden genç profesyonellere, yurt içinden dünyaya uzanan kapsamlı kariyer rehberliği.',
    accent: '#C5A059',
    subServices: [
      {
        title: 'Öğrenci Mentörlüğü ve Sınav Stratejisi',
        description:
          'YKS, LGS ve uluslararası sınavlara yönelik zihinsel hazırlık ve stratejik planlama.',
      },
      {
        title: 'Öğrenci Koçluğu',
        description:
          'Akademik motivasyon, zaman yönetimi ve öz-düzenleme becerilerini geliştiren koçluk.',
      },
      {
        title: 'Gençler için Kariyer Farkındalığı',
        description:
          'Üniversite öğrencileri ve yeni mezunlar için kariyer keşfi ve meslek seçimi rehberliği.',
      },
      {
        title: 'Küresel Uyum ve Kariyer Koçluğu',
        description:
          'Yurt dışına çıkan veya uluslararası kariyer hedefleyen bireyler için uyum ve strateji desteği.',
      },
      {
        title: 'Dil Öğreniminde Zihinsel Dönüşüm Koçluğu',
        description:
          'Dil öğrenme engellerini aşmak için zihinsel blokları ve motivasyon dinamiklerini ele alan özel koçluk.',
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

