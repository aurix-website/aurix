interface LineDrawProps {
  className?: string
  delay?: number
  direction?: 'left' | 'right' | 'center'
}

export function LineDraw({ className, delay = 0, direction = 'left' }: LineDrawProps) {
  const originX = direction === 'right' ? '100%' : direction === 'center' ? '50%' : '0%'

  return (
    <div
      style={{ transformOrigin: `${originX} 50%` }}
      className={`h-px bg-hairline ${className ?? ''}`}
    />
  )
}
