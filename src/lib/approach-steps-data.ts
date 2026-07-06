export interface ApproachStep {
  number: string
  title: string
  description: string
}

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Dinle',
    description:
      'Hedeflerinizi, endişelerinizi ve bağlamınızı anlamak için zaman ayırıyoruz.',
  },
  {
    number: '02',
    title: 'Netleştir',
    description: 'Öncelikleri ve gerçek ihtiyacı birlikte tanımlıyoruz.',
  },
  {
    number: '03',
    title: 'Yol Haritası Kur',
    description: 'Hedefe özgü, ölçülebilir adımlardan oluşan bir çerçeve kuruyoruz.',
  },
  {
    number: '04',
    title: 'Eşlik Et',
    description:
      'Süreç boyunca yapılandırılmış destek ve dürüst geri bildirimle yanınızdayız.',
  },
  {
    number: '05',
    title: 'Değerlendir',
    description: 'İlerlemeyi ölçüyor, yaklaşımı gerektiğinde güncelliyoruz.',
  },
]
