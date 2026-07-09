import { User, Compass, Building2, GraduationCap, Globe } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import type { Locale } from '@/lib/i18n/types'
import { dictionary } from '@/lib/i18n/dictionary'

const PERSONA_META = [
  { icon: User, accent: '#14797C' },
  { icon: Compass, accent: '#C5A059' },
  { icon: Building2, accent: '#14797C' },
  { icon: GraduationCap, accent: '#C5A059' },
  { icon: Globe, accent: '#14797C' },
]

export function PersonaGrid({ locale }: { locale: Locale }) {
  const copy = dictionary[locale].persona
  const personas = copy.items.map((item, i) => ({ ...item, ...PERSONA_META[i] }))
  return (
    <section aria-labelledby="persona-heading" className="py-24 bg-[#F9FBFB]">
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        <FadeIn>
          <div className="mb-12 max-w-xl">
            <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase block mb-3">
              {copy.eyebrow}
            </span>
            <h2
              id="persona-heading"
              className="font-serif text-[#1A1C1E] tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2' }}
            >
              {copy.heading}
            </h2>
            <p className="mt-3 font-sans text-[#5B6168] leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              {copy.body}
            </p>
          </div>
        </FadeIn>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label={copy.ariaLabel}
        >
          {personas.map((persona) => {
            const Icon = persona.icon
            return (
              <div
                key={persona.id}
                role="listitem"
                className="group bg-[#FCFDF9] border border-[#E2E5DE] rounded-sm p-6 flex flex-col gap-4 transition-colors duration-300 hover:border-[#C5A059]/40"
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${persona.accent}14`, color: persona.accent }}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-[#1A1C1E]">{persona.title}</h3>
                  <p className="font-sans text-sm text-[#5B6168] leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
