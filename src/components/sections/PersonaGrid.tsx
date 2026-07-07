'use client'
import { motion } from 'motion/react'
import { User, Compass, Building2, GraduationCap, Globe } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { STAGGER_CONTAINER, FADE_UP_ITEM, FADE_UP_TRANSITION } from '@/lib/motion-variants'

const PERSONAS = [
  {
    id: 'profesyonel',
    icon: User,
    accent: '#14797C',
    title: 'Profesyonel Birey',
    description:
      'Kariyer geçişlerinde, hedef belirsizliğinde veya yeni bir role hazırlanırken.',
  },
  {
    id: 'lider',
    icon: Compass,
    accent: '#C5A059',
    title: 'Lider ve Yönetici',
    description:
      'Karar süreçlerini güçlendirmek, iletişimi ve ekip performansını geliştirmek için.',
  },
  {
    id: 'kurum',
    icon: Building2,
    accent: '#14797C',
    title: 'Kurum ve İnsan Kaynakları',
    description:
      'Takım koçluğu, kurumsal eğitim programları ve liderlik akademisi tasarımı.',
  },
  {
    id: 'genç',
    icon: GraduationCap,
    accent: '#C5A059',
    title: 'Genç, Öğrenci ve Veli',
    description: 'Kariyer farkındalığı, üniversite ve bölüm seçimi, sınav stratejisi.',
  },
  {
    id: 'yurtdisi',
    icon: Globe,
    accent: '#14797C',
    title: 'Yurtdışı Geçiş Yapan Birey',
    description:
      'Küresel kariyer uyumu, yeni çevreye adaptasyon ve kimlik geçişi.',
  },
]

export function PersonaGrid() {
  return (
    <section aria-labelledby="persona-heading" className="py-24 bg-[#F9FBFB]">
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        <FadeIn>
          <div className="mb-12 max-w-xl">
            <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase block mb-3">
              KİMLER İÇİN
            </span>
            <h2
              id="persona-heading"
              className="font-serif text-[#1A1C1E] tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2' }}
            >
              Kimler İçin?
            </h2>
            <p className="mt-3 font-sans text-[#5B6168] leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              AURIX, farklı gelişim ihtiyaçlarına göre yapılandırılmış bir ekip sunar.
            </p>
          </div>
        </FadeIn>

        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Hedef kitleler"
        >
          {PERSONAS.map((persona) => {
            const Icon = persona.icon
            return (
              <motion.div
                key={persona.id}
                variants={FADE_UP_ITEM}
                transition={FADE_UP_TRANSITION}
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
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
