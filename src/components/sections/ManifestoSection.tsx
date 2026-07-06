import { FadeIn } from '@/components/ui/FadeIn'
import { LineDraw } from '@/components/ui/LineDraw'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

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
              Çok disiplinli.{' '}
              <span className="not-italic text-brand-accent">Tek metodoloji.</span>
            </h2>

            <p className="text-body-md text-on-dark-soft leading-relaxed max-w-xl mx-auto">
              Farklı uzmanlık alanlarından bir ekip, ortak bir yaklaşım çerçevesinde çalışır.
              Böylece tek bir danışmanın değil, ihtiyacınıza uygun{' '}
              <strong className="font-semibold text-on-dark">doğru uzmanlığın</strong>{' '}
              desteğini alırsınız.
            </p>
          </div>
        </FadeIn>

        <LineDraw className="mt-14 opacity-20" delay={0.3} />
      </div>
    </section>
  )
}
