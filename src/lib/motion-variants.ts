import type { Variants, Transition } from 'motion/react'

export const EASE_STANDARD: [number, number, number, number] = [0.22, 1, 0.36, 1]

/** Section-level scroll-reveal: children fade up in sequence (DESIGN_TOKENS.md §5) */
export const STAGGER_CONTAINER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const FADE_UP_ITEM: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export const FADE_UP_TRANSITION: Transition = { duration: 0.5, ease: EASE_STANDARD }
