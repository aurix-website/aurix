'use client'
import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LineDraw } from '@/components/ui/LineDraw'

const STEPS = [
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

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const CONTAINER: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.05 },
  },
}

const ITEM: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const ITEM_T = { duration: 0.55, ease: EASE }

export function ApproachSteps() {
  return (
    <section aria-labelledby="approach-heading" className="py-section bg-canvas">
      <div className="max-w-container mx-auto px-6">

        <FadeIn>
          <div className="mb-14">
            <h2
              id="approach-heading"
              className="text-display-lg font-semibold text-ink"
            >
              AURIX Yaklaşımı
            </h2>
            <p className="mt-3 text-body-md text-muted max-w-xl">
              Bir koç değil; yapılandırılmış bir metodoloji.
            </p>
          </div>
        </FadeIn>

        <LineDraw className="mb-12" />

        {/* Steps — stagger yıldız momenti */}
        <motion.ol
          variants={CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4"
          aria-label="AURIX metodoloji adımları"
        >
          {STEPS.map((step, i) => (
            <motion.li
              key={step.number}
              variants={ITEM}
              transition={ITEM_T}
              className="flex flex-col gap-4 relative"
            >
              {/* Connector line between steps on desktop */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-3 left-full w-4 h-px bg-hairline"
                  aria-hidden="true"
                />
              )}

              <span className="font-mono text-caption font-medium text-muted-soft tracking-widest">
                {step.number}
              </span>
              <div className="w-8 h-px bg-ink" aria-hidden="true" />
              <h3 className="text-title-lg font-semibold text-ink">{step.title}</h3>
              <p className="text-body-sm text-body leading-relaxed">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>

        <LineDraw className="mt-12" delay={0.2} />
      </div>
    </section>
  )
}
