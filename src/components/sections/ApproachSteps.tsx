'use client'
import { motion } from 'motion/react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LineDraw } from '@/components/ui/LineDraw'
import { STAGGER_CONTAINER, FADE_UP_ITEM, FADE_UP_TRANSITION } from '@/lib/motion-variants'
import { APPROACH_STEPS as STEPS } from '@/lib/approach-steps-data'

export function ApproachSteps() {
  return (
    <section aria-labelledby="approach-heading" className="py-24 bg-[#F6F7F1]">
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>

        <FadeIn>
          <div className="mb-14 max-w-xl">
            <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase block mb-3">
              METODOLOJİ
            </span>
            <h2
              id="approach-heading"
              className="font-serif text-[#1A1C1E] tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2' }}
            >
              AURIX Yaklaşımı
            </h2>
            <p className="mt-3 font-sans text-[#5B6168] leading-relaxed" style={{ fontSize: '1.0625rem' }}>
              Bir koç değil; yapılandırılmış bir metodoloji.
            </p>
          </div>
        </FadeIn>

        <LineDraw className="mb-12" />

        {/* Adımlar — stagger ile sırayla beliren ikon + başlık kartları */}
        <motion.ol
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6"
          aria-label="AURIX metodoloji adımları"
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.li
                key={step.number}
                variants={FADE_UP_ITEM}
                transition={FADE_UP_TRANSITION}
                className="flex flex-col gap-4 relative"
              >
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-6 left-full w-6 h-px bg-[#E2E5DE]"
                    aria-hidden="true"
                  />
                )}

                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${step.accent}14`, color: step.accent }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-[#D7DEE4]">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#1A1C1E] leading-tight">{step.title}</h3>
                <p className="font-sans text-sm text-[#5B6168] leading-relaxed">{step.description}</p>
              </motion.li>
            )
          })}
        </motion.ol>

        <LineDraw className="mt-12" delay={0.2} />

        <FadeIn delay={0.25}>
          <p className="mt-4 font-sans text-xs text-[#5B6168] leading-relaxed max-w-2xl">
            AURIX&apos;te koçluk ve danışmanlık süreçleri; psikoterapi, tıbbi tedavi veya klinik
            müdahalenin yerine geçmez. Gerektiğinde ilgili uzmanlık alanlarına yönlendirme
            yapılması önemsenir.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
