'use client'

import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration: number = 1500, start: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

interface StatItem {
  value: number
  suffix: string
  label: string
  duration?: number
}

const STATS: StatItem[] = [
  { value: 200, suffix: '+', label: 'Saat Koçluk', duration: 1800 },
  { value: 7,   suffix: '',  label: 'Uzman',        duration: 800  },
  { value: 100, suffix: '%', label: 'Erickson Sertifikalı', duration: 1400 },
]

function StatNumber({ value, suffix, label, duration, visible }: StatItem & { visible: boolean }) {
  const count = useCountUp(value, duration, visible)

  return (
    <div className="text-center">
      <span className="font-serif text-3xl text-[#14797C] font-semibold block tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-[11px] font-mono text-[#5B6168] uppercase tracking-widest mt-1 block">
        {label}
      </span>
    </div>
  )
}

export default function StatBand() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="border-t border-[#E2E5DE] mt-8 sm:mt-12 pt-6 sm:pt-8 pb-10 sm:pb-16 grid grid-cols-3 gap-4 sm:gap-8"
    >
      {STATS.map((stat) => (
        <StatNumber key={stat.label} {...stat} visible={visible} />
      ))}
    </div>
  )
}
