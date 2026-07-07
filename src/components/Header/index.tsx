import { Mail, MessageCircle, Phone } from 'lucide-react'
import { NavClient } from './NavClient'
import { getOptionalPayloadClient } from '@/lib/payload-client'
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/contact-channels'

type PopulatedMedia = {
  url?: string | null
  alt?: string | null
}

type SiteSettingsData = {
  logoDark?: PopulatedMedia | string | null
}

async function getSiteSettings(): Promise<SiteSettingsData> {
  try {
    const payload = await getOptionalPayloadClient()
    if (!payload) return {}
    const data = await payload.findGlobal({ slug: 'site-settings' })
    return data as unknown as SiteSettingsData
  } catch {
    return {}
  }
}

export async function Header() {
  const settings = await getSiteSettings()
  const logoDark =
    settings.logoDark != null && typeof settings.logoDark === 'object'
      ? settings.logoDark
      : null

  return (
    <div className="sticky top-0 z-50">
      {/* Üst bar — iletişim + dil seçici */}
      <div className="hidden sm:block bg-[#1A1C1E] py-2 px-6">
        <div className="mx-auto flex justify-between items-center" style={{ maxWidth: '1200px' }}>
          <div className="flex items-center gap-6 text-[11px] font-mono tracking-wide text-[#D7DEE4]">
            <a
              href={WHATSAPP_URL}
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
          <div className="flex items-center gap-2 text-[11px] font-mono" aria-label="Dil seçici">
            <button
              type="button"
              className="text-[#C5A059] font-bold tracking-widest"
              aria-current="true"
              aria-label="Türkçe (aktif)"
            >
              TR
            </button>
            <span className="text-[#5B6168]" aria-hidden="true">/</span>
            <button
              type="button"
              className="text-[#D7DEE4] hover:text-[#C5A059] tracking-widest transition-colors"
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Ana nav */}
      <NavClient logoDark={logoDark} />
    </div>
  )
}
