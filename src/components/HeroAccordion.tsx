'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Locale } from '@/lib/i18n/types'
import { dictionary } from '@/lib/i18n/dictionary'

const PANEL_IMAGES = [
  '/media/aurix-hero-bireysel-kocluk.png',
  '/media/aurix-hero-liderlik.png',
  '/media/aurix-hero-kurumsal.png',
  '/media/aurix-hero-gencler.png',
  '/media/aurix-hero-global-uyum.png',
]

export default function HeroAccordion({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0)
  const PANELS = dictionary[locale].hero.accordionPanels.map((label, i) => ({
    src: PANEL_IMAGES[i],
    label,
  }))

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '6px',
        height: '100%',
        width: '100%',
      }}
      role="region"
      aria-label={dictionary[locale].hero.accordionAriaLabel}
    >
      {PANELS.map((panel, idx) => (
        <div
          key={panel.label}
          onMouseEnter={() => setActive(idx)}
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '4px',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            flex: active === idx ? '4 0 0%' : '0.6 0 0%',
          }}
          aria-label={panel.label}
        >
          {/* Görsel */}
          <Image
            src={panel.src}
            alt={panel.label}
            fill
            sizes={active === idx ? '(max-width: 768px) 90vw, 55vw' : '(max-width: 768px) 20vw, 10vw'}
            priority={idx === 0}
            quality={70}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />

          {/* Gradient overlay */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(26,28,30,0.75) 0%, transparent 60%)',
            }}
          />

          {/* Aktif panel etiketi — alt sol */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              opacity: active === idx ? 1 : 0,
              transform: active === idx ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '10px',
                fontFamily: 'var(--font-jetbrains-mono), JetBrains Mono, monospace',
                letterSpacing: '0.15em',
                color: '#C5A059',
                textTransform: 'uppercase',
                marginBottom: '4px',
              }}
            >
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span
              style={{
                display: 'block',
                fontSize: '18px',
                fontFamily: 'var(--font-newsreader), Newsreader, serif',
                color: '#ffffff',
              }}
            >
              {panel.label}
            </span>
          </div>

          {/* Dar panel — dikey etiket */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: '16px',
              opacity: active === idx ? 0 : 1,
              transition: 'opacity 0.2s ease',
            }}
          >
            <span
              style={{
                fontSize: '9px',
                fontFamily: 'var(--font-jetbrains-mono), JetBrains Mono, monospace',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.65)',
                textTransform: 'uppercase',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
              }}
            >
              {panel.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
