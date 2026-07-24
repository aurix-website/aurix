'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={[
        'motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out',
        visible ? 'opacity-100 translate-y-0' : 'motion-safe:opacity-0 motion-safe:translate-y-3',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
