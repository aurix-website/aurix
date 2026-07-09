'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Compass, X } from 'lucide-react'
import { SERVICES, SERVICE_DETAIL_SLUGS, type ServiceCategory } from '@/lib/services-data'
import { pick, localeHref } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    eyebrow: 'Uzmanlığımız, etkiniz.',
    heading: 'Uzmanlık Alanlarımız',
    body: 'Her kategoriye tıklayarak kapsadığı hizmetleri keşfedin.',
    viewAll: 'Tümünü gör',
    cardAria: 'hizmetlerini incele',
    serviceAreaCount: (count: number) => `${count} hizmet alanı`,
    explore: 'İncele',
    tagline: 'Doğru rehberlik. Güçlü dönüşüm. Sürdürülebilir etki.',
    close: 'Kapat',
    detailCta: 'Bu Alan Hakkında Detay Al',
    categoryServices: 'Bu kategorideki hizmetler',
  },
  en: {
    eyebrow: 'Our expertise, your impact.',
    heading: 'Our Areas of Expertise',
    body: 'Click each category to explore the services it includes.',
    viewAll: 'View all',
    cardAria: 'services',
    serviceAreaCount: (count: number) => `${count} service areas`,
    explore: 'Explore',
    tagline: 'Right guidance. Strong transformation. Sustainable impact.',
    close: 'Close',
    detailCta: 'Get Details About This Area',
    categoryServices: 'Services in this category',
  },
} as const

function getServiceHref(service: ServiceCategory, locale: Locale) {
  return localeHref(`/hizmetler/${SERVICE_DETAIL_SLUGS[service.id] ?? service.id}`, locale)
}

export function ServicesSection({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const copy = COPY[locale]
  const [active, setActive] = useState<ServiceCategory | null>(null)
  const [selectedSub, setSelectedSub] = useState<number>(0)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    setSelectedSub(0)
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section className="relative overflow-hidden bg-[#F6F7F1] py-20 sm:py-24">
      <div className="pointer-events-none absolute right-[-120px] top-[-170px] h-[380px] w-[520px] rounded-full border border-[#C5A059]/15" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-40px] top-[-120px] h-[320px] w-[430px] rounded-full border border-[#C5A059]/10" aria-hidden="true" />

      <div className="relative max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-7 w-px bg-[#C5A059]" aria-hidden="true" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                {copy.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-display-serif-md text-[#1A1C1E]">
              {copy.heading}
            </h2>
            <div className="mt-4 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C5A059]" aria-hidden="true" />
              <p className="font-sans text-sm text-[#5B6168] leading-relaxed">
                {copy.body}
              </p>
            </div>
          </div>
          <Link
            href={localeHref('/hizmetler', locale)}
            className="group inline-flex items-center gap-2 self-start border-b border-[#14797C]/35 pb-1 text-sm font-sans font-semibold text-[#14797C] transition-colors hover:text-[#1A1C1E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-4 rounded-sm sm:self-auto"
          >
            {copy.viewAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            const isGold = service.accent.toLowerCase() === '#c5a059'
            const accentSoft = isGold ? '#F4E8C9' : '#DCEFF0'
            const accentDeep = index === 3 ? '#82906F' : service.accent
            const shadowColor = isGold ? 'rgba(197,160,89,0.18)' : 'rgba(20,121,124,0.16)'

            return (
              <button
                key={service.id}
                onClick={() => setActive(service)}
                className="group relative min-h-[265px] overflow-hidden rounded-md border border-[#E2E5DE] bg-[#FCFDF9] text-left shadow-[0_18px_45px_rgba(26,28,30,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(26,28,30,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14797C] focus-visible:ring-offset-2"
                aria-label={`${pick(service.title, locale)} ${copy.cardAria}`}
              >
                <div
                  className="absolute bottom-0 left-0 top-0 w-16 sm:w-[92px]"
                  style={{ backgroundColor: accentDeep }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-7 -top-10 h-[320px] w-[98px] rounded-[55%] bg-[#FCFDF9] sm:-left-4 sm:-top-12 sm:h-[340px] sm:w-[130px]"
                  aria-hidden="true"
                />
                <div
                  className="absolute -left-2 top-0 h-full w-[105px] opacity-45"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20px 20px, rgba(255,255,255,0.45) 1px, transparent 1px)',
                    backgroundSize: '18px 18px',
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-55"
                  style={{ backgroundColor: accentSoft }}
                  aria-hidden="true"
                />
                <div
                  className="absolute right-10 top-14 h-28 w-28 opacity-30"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(197,160,89,0.42) 1px, transparent 1px)',
                    backgroundSize: '10px 10px',
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center bg-[#14797C] text-[11px] font-mono font-bold text-white shadow-sm sm:h-14 sm:w-14 sm:text-xs"
                  style={{
                    backgroundColor: accentDeep,
                    clipPath: 'polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)',
                  }}
                  aria-hidden="true"
                >
                  {service.number}
                </div>

                <div className="relative flex min-h-[265px] flex-col justify-between p-6 pl-[88px] sm:p-8 sm:pl-[112px]">
                  <div>
                    <div
                      className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_14px_35px_rgba(26,28,30,0.12)] ring-1 ring-[#E2E5DE]"
                      style={{ color: accentDeep, boxShadow: `0 18px 38px ${shadowColor}` }}
                    >
                      <Icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <span
                      className="block text-[10px] font-mono font-bold uppercase tracking-[0.24em]"
                      style={{ color: accentDeep }}
                    >
                      {pick(service.category, locale)}
                    </span>
                    <h3 className="mt-3 max-w-[430px] font-serif text-2xl leading-tight text-[#1A1C1E] transition-colors group-hover:text-[#14797C] sm:text-[1.65rem]">
                      {pick(service.title, locale)}
                    </h3>
                    <span
                      className="mt-3 block h-px w-16"
                      style={{ backgroundColor: accentDeep }}
                      aria-hidden="true"
                    />
                    <p className="mt-4 max-w-[430px] font-sans text-sm leading-relaxed text-[#5B6168]">
                      {pick(service.description, locale)}
                    </p>
                  </div>

                  <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#E2E5DE] pt-4">
                    <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#5B6168]">
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${accentDeep}12`, color: accentDeep }}
                        aria-hidden="true"
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      {copy.serviceAreaCount(service.subServices.length)}
                    </span>
                    <span
                      className="inline-flex items-center gap-2 text-xs font-semibold transition-all duration-300 group-hover:gap-3"
                      style={{ color: accentDeep }}
                    >
                      {copy.explore} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        <div className="mt-9 flex items-center justify-center gap-5 text-center text-sm text-[#5B6168]">
          <span className="hidden h-px w-20 bg-[#C5A059]/30 sm:block" aria-hidden="true" />
          <span className="inline-flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C5A059]/40 text-[#C5A059]">
              <Compass className="h-4 w-4" aria-hidden="true" />
            </span>
            {copy.tagline}
          </span>
          <span className="hidden h-px w-20 bg-[#C5A059]/30 sm:block" aria-hidden="true" />
        </div>
      </div>

      {active && (() => {
        const ActiveIcon = active.icon
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
              className="absolute inset-0 bg-[#1A1C1E]/75 backdrop-blur-sm"
              onClick={() => setActive(null)}
              aria-hidden="true"
            />

            <div
              className="relative bg-[#F6F7F1] rounded-sm w-full max-w-3xl max-h-[88vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
              role="dialog"
              aria-modal="true"
              aria-label={pick(active.title, locale)}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-sm bg-white/15 hover:bg-white/30 md:bg-[#E2E5DE]/50 md:hover:bg-[#E2E5DE] flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:focus-visible:outline-[#1A9CA0]"
                aria-label={copy.close}
              >
                <X className="h-4 w-4 text-white md:text-[#1A1C1E]" aria-hidden="true" />
              </button>

              <div
                className="md:w-[38%] flex-shrink-0 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden"
                style={{ backgroundColor: active.accent }}
              >
                <ActiveIcon
                  className="absolute -bottom-6 -right-6 h-40 w-40 opacity-10 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-sm bg-white/15 flex items-center justify-center">
                    <ActiveIcon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest font-bold uppercase block text-white/70">
                    {active.number} / {pick(active.category, locale)}
                  </span>
                  <h3 className="font-serif text-2xl text-white leading-tight">
                    {pick(active.title, locale)}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-white/85">
                    {pick(active.description, locale)}
                  </p>
                </div>

                <Link
                  href={getServiceHref(active, locale)}
                  className="relative mt-6 inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-5 py-3 text-sm font-semibold rounded-sm transition-all duration-200 border border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  {copy.detailCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="p-6 sm:p-7 space-y-2 overflow-y-auto">
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A059] font-bold uppercase block mb-3">
                    {copy.categoryServices}
                  </span>

                  {active.subServices.map((sub, idx) => {
                    const isSelected = selectedSub === idx
                    return (
                      <button
                        key={pick(sub.title, locale)}
                        type="button"
                        onClick={() => setSelectedSub(idx)}
                        onMouseEnter={() => setSelectedSub(idx)}
                        onFocus={() => setSelectedSub(idx)}
                        className="block w-full text-left rounded-sm border transition-all duration-200 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14797C] focus-visible:ring-offset-1"
                        style={{
                          borderColor: isSelected ? active.accent : '#E2E5DE',
                          borderLeftWidth: isSelected ? '3px' : '1px',
                          backgroundColor: isSelected ? '#FFFFFF' : 'transparent',
                        }}
                        aria-pressed={isSelected}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className="font-sans font-semibold text-sm transition-colors"
                            style={{ color: isSelected ? active.accent : '#1A1C1E' }}
                          >
                            {pick(sub.title, locale)}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-[#5B6168] leading-relaxed pt-2.5">
                          {pick(sub.description, locale)}
                        </p>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })()}
    </section>
  )
}
