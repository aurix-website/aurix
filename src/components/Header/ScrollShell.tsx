'use client'
import { useEffect, useState, type ReactNode } from 'react'

export function ScrollShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 56)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled
          ? 'bg-canvas border-b border-hairline'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {children}
    </header>
  )
}
