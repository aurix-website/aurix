import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function FinalCTA() {
  return (
    <section aria-labelledby="cta-heading" className="py-section bg-surface-dark">
      <div className="max-w-container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col items-center text-center gap-8">
            <span className="text-caption font-medium tracking-[0.18em] uppercase text-on-dark-soft">
              İletişime Geçin
            </span>
            <h2
              id="cta-heading"
              className="font-serif italic text-display-serif-lg text-on-dark max-w-2xl leading-snug"
            >
              İhtiyacınıza uygun uzmanla ön görüşme planlamak için başvurun.
            </h2>
            <MagneticButton>
              <Link
                href="/on-gorusme"
                className="inline-flex items-center justify-center px-8 py-4 bg-on-dark text-surface-dark text-btn font-semibold rounded-md transition-[background-color,transform] hover:bg-on-dark-soft hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2"
              >
                Ön Görüşme Talep Et
              </Link>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
