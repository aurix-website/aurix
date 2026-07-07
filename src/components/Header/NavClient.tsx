'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown, Menu, MessageCircle, X } from 'lucide-react'
import { SERVICES, SERVICE_DETAIL_SLUGS } from '@/lib/services-data'
import { WHATSAPP_URL } from '@/lib/contact-channels'

type LogoMedia = { url?: string | null; alt?: string | null }

const NAV_SERVICES = SERVICES.map((service) => ({
  label: service.title,
  href: `/hizmetler/${SERVICE_DETAIL_SLUGS[service.id] ?? service.id}`,
}))

const NAV_LINKS = [
  { label: 'Uzmanlar', href: '/uzmanlar' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Journal', href: '/journal' },
  { label: 'SSS', href: '/sss' },
  { label: 'İletişim', href: '/iletisim' },
]

export function NavClient({ logoDark }: { logoDark: LogoMedia | null }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', onMouse)
    return () => document.removeEventListener('mousedown', onMouse)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className="bg-[#F6F7F1]/95 backdrop-blur-md border-b border-[#E2E5DE]"
      role="banner"
    >
      <div
        className="mx-auto px-6 flex items-center justify-between"
        style={{ maxWidth: '1200px', height: '72px' }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
          aria-label="AURIX — Ana sayfaya git"
        >
          {logoDark?.url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoDark.url} alt={logoDark.alt ?? 'AURIX'} className="h-9 w-auto" />
          ) : (
            <>
              <div
                className="h-9 w-9 rounded-sm flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#14797C' }}
                aria-hidden="true"
              >
                <span className="text-white font-serif font-bold text-base select-none">A</span>
              </div>
              <div className="flex flex-col leading-tight select-none">
                <span className="font-serif text-xl font-semibold text-[#1A1C1E] tracking-tight">
                  AURIX
                </span>
                <span className="text-[9px] font-mono text-[#C5A059] uppercase tracking-[0.15em]">
                  Koçluk & Danışmanlık
                </span>
              </div>
            </>
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Ana navigasyon">
          {/* Hizmetler dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              className="flex items-center gap-1 px-4 py-2 text-sm font-sans text-[#1A1C1E] hover:text-[#14797C] hover:bg-[#14797C]/5 transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((o) => !o)}
              onMouseEnter={() => setServicesOpen(true)}
            >
              Hizmetler
              <ChevronDown
                className={`h-3.5 w-3.5 text-[#5B6168] transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-64 bg-white border border-[#E2E5DE] rounded-sm z-50"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
                role="menu"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {NAV_SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    role="menuitem"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-sans text-[#1A1C1E] hover:bg-[#F6F7F1] hover:text-[#14797C] transition-colors border-b border-[#E2E5DE] last:border-0 focus-visible:outline-none focus-visible:bg-[#F6F7F1]"
                    onClick={() => setServicesOpen(false)}
                  >
                    <ArrowRight className="h-3 w-3 text-[#C5A059] shrink-0" aria-hidden="true" />
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-sans text-[#1A1C1E] hover:text-[#14797C] hover:bg-[#14797C]/5 transition-colors rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-[#14797C] bg-white px-4 py-2.5 text-sm font-semibold text-[#14797C] transition-colors duration-200 hover:bg-[#14797C]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
          >
            Ön Görüşme Talep Et
            <ArrowRight className="h-4 w-4 text-[#C5A059]" aria-hidden="true" />
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="lg:hidden flex items-center justify-center rounded-sm text-[#1A1C1E] hover:bg-[#14797C]/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0]"
          style={{ minWidth: '44px', minHeight: '44px' }}
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobil overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto lg:hidden"
          style={{ backgroundColor: 'var(--color-surface)', zIndex: 40 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobil navigasyon menüsü"
        >
          <nav
            className="mx-auto px-6 pt-6 pb-12 flex flex-col"
            style={{ maxWidth: '1200px' }}
            aria-label="Mobil navigasyon"
          >
            {/* Hizmetler accordion — mobil */}
            <button
              type="button"
              onClick={() => setMobileServicesOpen((o) => !o)}
              className="flex w-full items-center justify-between py-3.5 text-base font-semibold text-[#1A1C1E] border-b border-[#E2E5DE] hover:text-[#14797C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] rounded-sm"
              aria-expanded={mobileServicesOpen}
            >
              <span>Hizmetler</span>
              <ChevronDown
                className={`h-4 w-4 text-[#5B6168] transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            {mobileServicesOpen &&
              NAV_SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center gap-2 py-3 pl-4 text-sm font-medium text-[#14797C] border-b border-[#E2E5DE] hover:text-[#0f5f62] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0]"
                  onClick={() => setMobileOpen(false)}
                >
                  <ArrowRight className="h-3 w-3 shrink-0" aria-hidden="true" />
                  {s.label}
                </Link>
              ))}

            <div className="mt-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3.5 text-base font-semibold text-[#1A1C1E] border-b border-[#E2E5DE] transition-colors hover:text-[#14797C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/iletisim"
              className="mt-8 flex justify-center items-center gap-2 px-5 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0]"
              onClick={() => setMobileOpen(false)}
            >
              Ön Görüşme Talep Et
              <ArrowRight className="h-4 w-4 text-[#C5A059]" aria-hidden="true" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-sm border border-[#14797C] bg-white px-5 py-3.5 text-sm font-semibold text-[#14797C] transition-colors duration-200 hover:bg-[#14797C]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0]"
              onClick={() => setMobileOpen(false)}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp ile Yaz
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
