'use client'
import { motion } from 'motion/react'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface LineDrawProps {
  className?: string
  delay?: number
  direction?: 'left' | 'right' | 'center'
}

export function LineDraw({ className, delay = 0, direction = 'left' }: LineDrawProps) {
  const originX = direction === 'right' ? '100%' : direction === 'center' ? '50%' : '0%'

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, delay, ease: EASE }}
      style={{ transformOrigin: `${originX} 50%` }}
      className={`h-px bg-hairline ${className ?? ''}`}
    />
  )
}
