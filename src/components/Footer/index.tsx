import React from 'react'
import Link from 'next/link'
import { getOptionalPayloadClient } from '@/lib/payload-client'
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '@/lib/contact-channels'

type PopulatedMedia = { url?: string | null; alt?: string | null }

type SiteSettingsData = {
  logoLight?: PopulatedMedia | string | null
  contactEmail?: string | null
  whatsappNumber?: string | null
  socialLinks?: Array<{ platform?: string | null; url?: string | null }> | null
  kvkkUrl?: string | null
}

const FALLBACK: SiteSettingsData = {
  contactEmail: CONTACT_EMAIL,
  whatsappNumber: WHATSAPP_NUMBER,
  socialLinks: [],
  kvkkUrl: '/kvkk',
}

async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    const payload = await getOptionalPayloadClient()

    if (!payload) return FALLBACK

    const data = await payload.findGlobal({ slug: 'site-settings' })
    return data as unknown as SiteSettingsData
  } catch {
    return FALLBACK
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

export async function Footer() {
  const settings = await getSiteSettings()

  const email = settings.contactEmail ?? FALLBACK.contactEmail
  const whatsapp = settings.whatsappNumber ?? FALLBACK.whatsappNumber
  const socials = settings.socialLinks ?? []
  const kvkkUrl = settings.kvkkUrl ?? FALLBACK.kvkkUrl
  const year = new Date().getFullYear()

  const logoLight =
    settings.logoLight != null && typeof settings.logoLight === 'object'
      ? settings.logoLight
      : null

  return (
    <footer className="bg-surface-dark text-on-dark-soft" aria-label="Site alt bilgisi">
      <div className="max-w-container mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-surface-dark-elevated">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-md mb-4"
              aria-label="AURIX — Ana sayfaya git"
            >
              {logoLight?.url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoLight.url} alt={logoLight.alt ?? 'AURIX'} className="h-7 w-auto" />
              ) : (
                <span className="font-sans text-xl font-semibold text-on-dark tracking-tight leading-none">
                  AURIX
                </span>
              )}
            </Link>
            <p className="text-body-sm text-on-dark-soft leading-relaxed max-w-[260px]">
              Profesyonel gelişim, kariyer netliği ve liderlik dönüşümü için çok uzmanlı
              danışmanlık ekosistemi.
            </p>
            <p className="mt-3 text-caption text-on-dark-soft opacity-60">
              İzmir · Online · Yüz yüze
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-caption font-medium tracking-widest uppercase text-on-dark-soft mb-4">
              İletişim
            </p>
            <ul className="space-y-3 text-body-sm">
              {email && (
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="text-on-dark-soft hover:text-on-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
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
                    className="text-on-dark-soft hover:text-on-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                  >
                    WhatsApp: {WHATSAPP_DISPLAY}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Social */}
          {socials.length > 0 && (
            <div>
              <p className="text-caption font-medium tracking-widest uppercase text-on-dark-soft mb-4">
                Sosyal
              </p>
              <ul className="flex flex-wrap gap-4">
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
                        aria-label={s.platform ?? 'Sosyal medya'}
                        className="text-on-dark-soft hover:text-on-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
                      >
                        {Icon ? <Icon /> : <span className="text-body-sm">{s.platform}</span>}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-caption text-on-dark-soft">
          <p>© {year} AURIX Danışmanlık. Tüm hakları saklıdır.</p>
          {kvkkUrl && (
            <Link
              href={kvkkUrl}
              className="hover:text-on-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent focus-visible:outline-offset-2 rounded-sm"
            >
              KVKK Aydınlatma Metni
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
}
