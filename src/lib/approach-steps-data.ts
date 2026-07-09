import type { ElementType } from 'react'
import { Ear, Target, Map, Users, LineChart } from 'lucide-react'
import type { Localized } from './i18n/types'

export interface ApproachStep {
  number: string
  icon: ElementType
  accent: string
  title: Localized<string>
  description: Localized<string>
}

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    icon: Ear,
    accent: '#14797C',
    title: { tr: 'Dinle', en: 'Listen' },
    description: {
      tr: 'Hedeflerinizi, endişelerinizi ve bağlamınızı anlamak için zaman ayırıyoruz.',
      en: 'We take the time to understand your goals, concerns, and context.',
    },
  },
  {
    number: '02',
    icon: Target,
    accent: '#C5A059',
    title: { tr: 'Netleştir', en: 'Clarify' },
    description: {
      tr: 'Öncelikleri ve gerçek ihtiyacı birlikte tanımlıyoruz.',
      en: 'We define priorities and the real need together.',
    },
  },
  {
    number: '03',
    icon: Map,
    accent: '#14797C',
    title: { tr: 'Yol Haritası Kur', en: 'Build a Roadmap' },
    description: {
      tr: 'Hedefe özgü, ölçülebilir adımlardan oluşan bir çerçeve kuruyoruz.',
      en: 'We build a framework of measurable steps specific to your goal.',
    },
  },
  {
    number: '04',
    icon: Users,
    accent: '#C5A059',
    title: { tr: 'Eşlik Et', en: 'Accompany' },
    description: {
      tr: 'Süreç boyunca yapılandırılmış destek ve dürüst geri bildirimle yanınızdayız.',
      en: 'We stay with you throughout the process, with structured support and honest feedback.',
    },
  },
  {
    number: '05',
    icon: LineChart,
    accent: '#14797C',
    title: { tr: 'Değerlendir', en: 'Evaluate' },
    description: {
      tr: 'İlerlemeyi ölçüyor, yaklaşımı gerektiğinde güncelliyoruz.',
      en: 'We measure progress and update the approach when needed.',
    },
  },
]
