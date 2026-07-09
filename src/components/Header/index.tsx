import { Mail, MessageCircle, Phone } from 'lucide-react'
import { NavClient } from './NavClient'
import { getOptionalPayloadClient } from '@/lib/payload-client'
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, getWhatsAppUrl } from '@/lib/contact-channels'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import type { Locale } from '@/lib/i18n/types'

type PopulatedMedia = {
  url?: string | null
  alt?: string | null
}

type SiteSettingsData = {
  logoDark?: PopulatedMedia | string | null
}

const FALLBACK_LOGO_DARK: PopulatedMedia = {
  url: '/brand/aurix-primary-flat-logo-web.png',
  alt: 'AURIX Koçluk ve Danışmanlık',
}

async function getSiteSettings(locale: Locale): Promise<SiteSettingsData> {
  try {
    const payload = await getOptionalPayloadClient()
    if (!payload) return {}
    const data = await payload.findGlobal({ slug: 'site-settings', locale, fallbackLocale: 'tr' })
    return data as unknown as SiteSettingsData
  } catch {
    return {}
  }
}

export async function Header({ locale }: { locale: Locale }) {
  const settings = await getSiteSettings(locale)
  const logoDark =
    settings.logoDark != null && typeof settings.logoDark === 'object'
      ? settings.logoDark
      : FALLBACK_LOGO_DARK

  return (
    <div className="sticky top-0 z-50">
      {/* Üst bar — iletişim + dil seçici */}
      <div className="hidden sm:block bg-[#1A1C1E] py-2 px-6">
        <div className="mx-auto flex justify-between items-center" style={{ maxWidth: '1200px' }}>
          <div className="flex items-center gap-6 text-[11px] font-mono tracking-wide text-[#D7DEE4]">
            <a
              href={getWhatsAppUrl(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
            >
              <MessageCircle className="h-3 w-3 text-[#25D366]" aria-hidden="true" />
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3 w-3 text-[#C5A059]" aria-hidden="true" />
              {WHATSAPP_DISPLAY}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3 w-3 text-[#C5A059]" aria-hidden="true" />
              {CONTACT_EMAIL}
            </span>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Ana nav */}
      <NavClient logoDark={logoDark} />
    </div>
  )
}
