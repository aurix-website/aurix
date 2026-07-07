import type { ElementType } from 'react'
import { Ear, Target, Map, Users, LineChart } from 'lucide-react'

export interface ApproachStep {
  number: string
  icon: ElementType
  accent: string
  title: string
  description: string
}

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    icon: Ear,
    accent: '#14797C',
    title: 'Dinle',
    description:
      'Hedeflerinizi, endişelerinizi ve bağlamınızı anlamak için zaman ayırıyoruz.',
  },
  {
    number: '02',
    icon: Target,
    accent: '#C5A059',
    title: 'Netleştir',
    description: 'Öncelikleri ve gerçek ihtiyacı birlikte tanımlıyoruz.',
  },
  {
    number: '03',
    icon: Map,
    accent: '#14797C',
    title: 'Yol Haritası Kur',
    description: 'Hedefe özgü, ölçülebilir adımlardan oluşan bir çerçeve kuruyoruz.',
  },
  {
    number: '04',
    icon: Users,
    accent: '#C5A059',
    title: 'Eşlik Et',
    description:
      'Süreç boyunca yapılandırılmış destek ve dürüst geri bildirimle yanınızdayız.',
  },
  {
    number: '05',
    icon: LineChart,
    accent: '#14797C',
    title: 'Değerlendir',
    description: 'İlerlemeyi ölçüyor, yaklaşımı gerektiğinde güncelliyoruz.',
  },
]
