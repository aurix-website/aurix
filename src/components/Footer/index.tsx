import React from 'react'
import Link from 'next/link'
import { getOptionalPayloadClient } from '@/lib/payload-client'
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '@/lib/contact-channels'
import { SERVICES } from '@/lib/services-data'
import type { Locale } from '@/lib/i18n/types'
import { dictionary } from '@/lib/i18n/dictionary'
import { pick, localeHref } from '@/lib/i18n/pick'

const FOOTER_SERVICE_IDS = ['bireysel-kocluk', 'yonetici-koclugu', 'kurumsal-egitim', 'ogrenci-koclugu']

type PopulatedMedia = { url?: string | null; alt?: string | null }

type SiteSettingsData = {
  logoLight?: PopulatedMedia | string | null
  contactEmail?: string | null
  whatsappNumber?: string | null
  socialLinks?: Array<{ platform?: string | null; url?: string | null }> | null
}

const FALLBACK_LOGO_LIGHT_ALT: Record<Locale, string> = {
  tr: 'AURIX Koçluk ve Danışmanlık',
  en: 'AURIX Coaching and Consulting',
}

function getFallback(locale: Locale): SiteSettingsData {
  return {
    logoLight: {
      url: '/brand/aurix-secondary-flat-logo-web.png',
      alt: FALLBACK_LOGO_LIGHT_ALT[locale],
    },
    contactEmail: CONTACT_EMAIL,
    whatsappNumber: WHATSAPP_NUMBER,
    socialLinks: [],
  }
}

async function getSiteSettings(locale: Locale): Promise<SiteSettingsData> {
  try {
    const payload = await getOptionalPayloadClient()

    if (!payload) return getFallback(locale)

    const data = await payload.findGlobal({ slug: 'site-settings', locale, fallbackLocale: 'tr' })
    return data as unknown as SiteSettingsData
  } catch {
    return getFallback(locale)
  }
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

const SOCIAL_ICONS: Record<string, React.FC> = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
}

export async function Footer({ locale }: { locale: Locale }) {
  const settings = await getSiteSettings(locale)
  const fallback = getFallback(locale)
  const copy = dictionary[locale].footer
  const nav = dictionary[locale].nav

  const email = settings.contactEmail ?? fallback.contactEmail
  const whatsapp = settings.whatsappNumber ?? fallback.whatsappNumber
  const socials = settings.socialLinks ?? []
  const year = new Date().getFullYear()

  const aboutLinks = [
    { label: nav.about, href: '/hakkimizda' },
    { label: nav.experts, href: '/uzmanlar' },
    { label: nav.journal, href: '/blog' },
    { label: nav.faq, href: '/sss' },
    { label: nav.contact, href: '/iletisim' },
  ]

  const serviceLinks = FOOTER_SERVICE_IDS.map((id) => SERVICES.find((service) => service.id === id))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
    .map((service) => ({ label: pick(service.title, locale), href: `/hizmetler/${service.id}` }))

  const startLinks = [
    { label: nav.requestCall, href: '/on-gorusme' },
    { label: copy.ctaExpertMatch, href: '/on-gorusme' },
    { label: copy.ctaCorporate, href: '/iletisim?interest=kurumsal-egitim' },
  ]

  const legalLinks = [
    { label: copy.kvkk, href: '/kvkk' },
    { label: copy.privacy, href: '/gizlilik-politikasi' },
    { label: copy.cookies, href: '/cerez-politikasi' },
    { label: copy.ethics, href: '/etik-ilkeler' },
  ]

  const logoLight =
    settings.logoLight != null && typeof settings.logoLight === 'object'
      ? settings.logoLight
      : fallback.logoLight && typeof fallback.logoLight === 'object'
        ? fallback.logoLight
        : null

  return (
    <footer className="relative bg-surface-dark text-on-dark-soft" aria-label={copy.ariaLabel}>
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/40 to-[#C5A059]/40"
        aria-hidden="true"
      />
      <div className="max-w-container mx-auto px-6 pt-16 sm:pt-20 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 pb-14 border-b border-surface-dark-elevated sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr] lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href={localeHref('/', locale)}
              className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-md mb-5"
              aria-label={copy.homeAria}
            >
              {logoLight?.url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoLight.url} alt={logoLight.alt ?? 'AURIX'} className="h-14 w-auto" />
              ) : (
                <span className="font-sans text-xl font-semibold text-on-dark tracking-tight leading-none">
                  AURIX
                </span>
              )}
            </Link>
            <p className="text-body-sm text-on-dark-soft leading-relaxed max-w-[280px]">
              {copy.tagline}
            </p>
            <p className="mt-3 text-caption font-mono tracking-wide text-[#C5A059]">
              {copy.locationLine}
            </p>

            <ul className="mt-6 space-y-2.5 text-body-sm">
              {email && (
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="text-on-dark-soft hover:text-brand-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                  >
                    {email}
                  </a>
                </li>
              )}
              {whatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-dark-soft hover:text-brand-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                  >
                    WhatsApp: {WHATSAPP_DISPLAY}
                  </a>
                </li>
              )}
            </ul>

            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-4">
                {socials.map((s, i) => {
                  if (!s.url) return null
                  const platform = (s.platform ?? '').toLowerCase()
                  const Icon = SOCIAL_ICONS[platform]
                  return (
                    <li key={i}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.platform ?? copy.socialFallbackLabel}
                        className="text-on-dark-soft hover:text-brand-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                      >
                        {Icon ? <Icon /> : <span className="text-body-sm">{s.platform}</span>}
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          {/* Menü — AURIX / Hizmetler / Başlayın */}
          <nav aria-label={copy.footerNavAria} className="contents">
            <div>
              <p className="text-caption font-medium tracking-widest uppercase text-[#C5A059] mb-4">
                {copy.aboutHeading}
              </p>
              <ul className="space-y-3 text-body-sm">
                {aboutLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={localeHref(link.href, locale)}
                      className="text-on-dark-soft hover:text-on-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-caption font-medium tracking-widest uppercase text-[#C5A059] mb-4">
                {copy.servicesHeading}
              </p>
              <ul className="space-y-3 text-body-sm">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={localeHref(link.href, locale)}
                      className="text-on-dark-soft hover:text-on-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={localeHref('/hizmetler', locale)}
                    className="font-semibold text-brand-accent hover:text-[#C5A059] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                  >
                    {copy.viewAllServices}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-caption font-medium tracking-widest uppercase text-[#C5A059] mb-4">
                {copy.startHeading}
              </p>
              <ul className="space-y-3 text-body-sm">
                {startLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={localeHref(link.href, locale)}
                      className="text-on-dark-soft hover:text-on-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col gap-4 text-caption text-on-dark-soft lg:flex-row lg:items-center lg:justify-between">
          <p>© {year} {copy.copyright}</p>
          <nav aria-label={copy.legalNavAria}>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localeHref(link.href, locale)}
                    className="hover:text-on-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
