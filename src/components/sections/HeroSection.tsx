'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import HeroAccordion from '@/components/HeroAccordion'
import StatBand from '@/components/StatBand'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

const T = (delay: number) => ({ duration: 0.55, ease: EASE, delay })


export function HeroSection() {
  return (
    <section
      aria-label="Anasayfa başlığı"
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-max)' }}>

        {/* İki kolon — metin + accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-16 pb-12 lg:pt-20 lg:pb-16">

          {/* Sol kolon — metin */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-8">

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={T(0.05)}
              className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase"
            >
              Koçluk · Kariyer · Liderlik
            </motion.span>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={FADE_UP}
              transition={T(0.18)}
              className="font-serif text-[#1A1C1E] tracking-tight"
              style={{ fontSize: 'clamp(1.875rem, 6vw, 3rem)', lineHeight: '1.15' }}
            >
              Daha net kararlar, güçlü yönelimler ve sürdürülebilir gelişim için profesyonel
              koçluk ve danışmanlık.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={FADE_UP}
              transition={T(0.32)}
              className="font-sans text-[#5B6168] max-w-md"
              style={{ fontSize: '1.0625rem', lineHeight: '1.6' }}
            >
              AURIX, Kaan Yazıcı liderliğinde; bireysel gelişim, yönetici koçluğu, kurumsal
              eğitim ve öğrenci koçluğu alanlarında uzman kadrosuyla yapılandırılmış gelişim
              süreçleri sunar.
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={FADE_UP}
              transition={T(0.38)}
              className="font-sans text-[#5B6168] max-w-md text-sm"
            >
              Her danışan için doğru hizmeti, doğru uzmanı ve doğru süreci birlikte belirliyoruz.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={FADE_UP}
              transition={T(0.44)}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
              >
                Ön Görüşme Talep Et
                <ArrowRight className="h-4 w-4 text-[#C5A059]" aria-hidden="true" />
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
              >
                Hizmetleri İncele
              </Link>
            </motion.div>

          </div>

          {/* Sağ kolon — accordion galeri */}
          <motion.div
            className="lg:col-span-5 flex items-stretch h-[260px] lg:h-[480px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            aria-hidden="true"
          >
            <HeroAccordion />
          </motion.div>

        </div>

        <StatBand />

      </div>

      {/* Section separator */}
      <div className="border-t border-[#E2E5DE]" aria-hidden="true" />
    </section>
  )
}
