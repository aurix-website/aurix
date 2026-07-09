import type { ReactNode } from 'react'

interface ParallaxImageProps {
  children: ReactNode
  strength?: number
  className?: string
}

export function ParallaxImage({ children, className }: ParallaxImageProps) {
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <div className="relative">
        {children}
      </div>
    </div>
  )
}
