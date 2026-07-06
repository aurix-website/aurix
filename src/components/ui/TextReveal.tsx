'use client'
import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import type { Variants } from 'motion/react'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const WORD: Variants = {
  hidden: { y: '108%', opacity: 0 },
  visible: { y: '0%', opacity: 1 },
}

const WORD_TRANSITION = { duration: 0.78, ease: EASE }

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  onMount?: boolean
}

// Descender-safe word wrapper: paddingBottom creates room for descenders (g, ş, ç, ğ, y…),
// negative marginBottom collapses the extra space so line-rhythm is unaffected.
function WordClip({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block overflow-hidden"
      style={{ paddingBottom: '0.18em', marginBottom: '-0.18em', marginRight: '0.22em' }}
    >
      <motion.span
        className="inline-block will-change-transform"
        variants={WORD}
        transition={WORD_TRANSITION}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function TextReveal({ text, className, delay = 0, onMount = false }: TextRevealProps) {
  const words = text.split(' ')

  const sharedProps = {
    initial: 'hidden' as const,
    transition: { staggerChildren: 0.07, delayChildren: delay },
  }

  const words_el = words.map((word, i) => (
    <WordClip key={i}>{word}</WordClip>
  ))

  if (onMount) {
    return (
      <motion.div className={className} {...sharedProps} animate="visible">
        {words_el}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      {...sharedProps}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {words_el}
    </motion.div>
  )
}
