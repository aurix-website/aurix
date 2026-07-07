import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { WHATSAPP_URL } from '@/lib/contact-channels'

export function FinalCTA() {
  return (
    <section aria-labelledby="cta-heading" className="grain relative overflow-hidden bg-[#2E2E30] py-24 lg:py-28">
      <div className="relative z-10 mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        <FadeIn>
          <div className="flex flex-col items-center gap-8 text-center">
            <span className="block text-[11px] font-mono font-bold uppercase tracking-widest text-[#C5A059]">
              İletişime Geçin
            </span>
            <h2
              id="cta-heading"
              className="max-w-2xl font-serif tracking-tight text-[#F6F7F1]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: '1.25' }}
            >
              İhtiyacınıza uygun uzmanla ön görüşme planlamak için başvurun.
            </h2>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <MagneticButton>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#14797C] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0f5f62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                >
                  Ön Görüşme Talep Et
                  <ArrowRight className="h-4 w-4 text-[#C5A059]" aria-hidden="true" />
                </Link>
              </MagneticButton>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#C5A059]/55 px-8 py-4 text-sm font-semibold text-[#F6F7F1] transition-all duration-200 hover:border-[#C5A059] hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
              >
                <MessageCircle className="h-4 w-4 text-[#C5A059]" aria-hidden="true" />
                WhatsApp ile Yaz
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
