'use client'
import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

interface ParallaxImageProps {
  children: ReactNode
  strength?: number
  className?: string
}

export function ParallaxImage({ children, strength = 0.08, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const s = strength * 100
  // The inner div is expanded so it never clips during translation
  const y = useTransform(scrollYProgress, [0, 1], [`-${s}%`, `${s}%`])

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        style={{
          y,
          height: `${100 + s * 2}%`,
          marginTop: `-${s}%`,
          position: 'relative',
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  )
}
