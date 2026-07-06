import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LineDraw } from '@/components/ui/LineDraw'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

const PROMISE_CARDS = [
  {
    title: 'Netlik',
    description:
      'Hedeflerinizi, önceliklerinizi ve mevcut durumunuzu daha berrak görmenize yardımcı oluruz.',
  },
  {
    title: 'Yön',
    description:
      'Size uygun hizmet alanını ve uzmanı belirleyerek süreci daha doğru bir başlangıçla tasarlarız.',
  },
  {
    title: 'Gelişim',
    description:
      'Görüşmeleri yalnızca farkındalıkla sınırlı bırakmadan, uygulanabilir adımlara dönüştürmeye odaklanırız.',
  },
]

export function ManifestoSection() {
  return (
    <section
      aria-labelledby="manifesto-heading"
      className="grain relative overflow-hidden py-section bg-surface-dark"
    >
      {/* Atmosphere image — upload manifesto-bg.jpg (1920×800) */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          filename="manifesto-bg.jpg"
          width={1920}
          height={800}
          fill
          label="Manifesto arka plan fotoğrafı"
        />
        <div className="absolute inset-0 bg-surface-dark/80" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6">
        <LineDraw className="mb-14 opacity-20" />

        <FadeIn>
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-7">
            <span className="text-caption font-medium tracking-[0.18em] uppercase text-on-dark-soft">
              AURIX Felsefesi
            </span>

            <h2
              id="manifesto-heading"
              className="font-serif italic text-display-serif-lg text-on-dark leading-tight"
            >
              AURIX, gelişim yolculuğunuzu{' '}
              <span className="not-italic text-brand-accent">tesadüfe bırakmaz.</span>
            </h2>

            <p className="text-body-md text-on-dark-soft leading-relaxed max-w-xl mx-auto">
              Koçluk ve danışmanlık sürecini yalnızca bir görüşme deneyimi olarak değil; ihtiyaç
              analizi, uzman eşleşmesi, hedef netliği ve sürdürülebilir aksiyon adımlarından
              oluşan yapılandırılmış bir gelişim süreci olarak ele alır.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PROMISE_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white/5 border border-white/10 rounded-sm p-6 flex flex-col gap-2 text-left"
              >
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-brand-accent">
                  {card.title}
                </span>
                <p className="text-body-sm text-on-dark-soft leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="mt-10 flex justify-center">
            <Link
              href="#approach-heading"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-on-dark hover:text-brand-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
            >
              AURIX Yaklaşımını İncele
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>

        <LineDraw className="mt-14 opacity-20" delay={0.3} />
      </div>
    </section>
  )
}
