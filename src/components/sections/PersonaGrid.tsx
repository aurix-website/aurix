import { FadeIn } from '@/components/ui/FadeIn'

const PERSONAS = [
  {
    id: 'profesyonel',
    title: 'Profesyonel Birey',
    description:
      'Kariyer geçişlerinde, hedef belirsizliğinde veya yeni bir role hazırlanırken.',
  },
  {
    id: 'lider',
    title: 'Lider ve Yönetici',
    description:
      'Karar süreçlerini güçlendirmek, iletişimi ve ekip performansını geliştirmek için.',
  },
  {
    id: 'kurum',
    title: 'Kurum ve İnsan Kaynakları',
    description:
      'Takım koçluğu, kurumsal eğitim programları ve liderlik akademisi tasarımı.',
  },
  {
    id: 'genç',
    title: 'Genç, Öğrenci ve Veli',
    description: 'Kariyer farkındalığı, üniversite ve bölüm seçimi, sınav stratejisi.',
  },
  {
    id: 'yurtdisi',
    title: 'Yurtdışı Geçiş Yapan Birey',
    description:
      'Küresel kariyer uyumu, yeni çevreye adaptasyon ve kimlik geçişi.',
  },
]

export function PersonaGrid() {
  return (
    <section aria-labelledby="persona-heading" className="py-section bg-surface-soft">
      <div className="max-w-container mx-auto px-6">
        <FadeIn>
          <div className="mb-10">
            <h2
              id="persona-heading"
              className="text-display-lg font-semibold text-ink"
            >
              Kimler İçin?
            </h2>
            <p className="mt-3 text-body-md text-muted max-w-xl">
              AURIX, farklı gelişim ihtiyaçlarına göre yapılandırılmış bir ekip sunar.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            role="list"
            aria-label="Hedef kitleler"
          >
            {PERSONAS.map((persona) => (
              <div
                key={persona.id}
                role="listitem"
                className="bg-canvas border border-hairline rounded-lg p-6 flex flex-col gap-2"
              >
                <h3 className="text-title-sm font-semibold text-ink">{persona.title}</h3>
                <p className="text-body-sm text-body">{persona.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
