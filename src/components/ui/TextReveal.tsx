import type { ReactNode } from 'react'

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
      <span className="inline-block">
        {children}
      </span>
    </span>
  )
}

export function TextReveal({ text, className }: TextRevealProps) {
  const words = text.split(' ')

  const words_el = words.map((word, i) => (
    <WordClip key={i}>{word}</WordClip>
  ))

  return <div className={className}>{words_el}</div>
}
