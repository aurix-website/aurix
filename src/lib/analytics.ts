/**
 * Google Analytics 4 + çerez onayı (Consent Mode "Basic").
 *
 * GA4 etiketi yalnızca ziyaretçi analitik çerezleri kabul ettikten sonra
 * yüklenir. Onay yoksa veya reddedildiyse Google'a hiçbir istek gitmez.
 * Reklam / remarketing / Google Signals kullanılmaz.
 */

/** Vercel ortam değişkeni. Tanımlı değilse GA ve çerez banner'ı hiç render edilmez. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''

export const isAnalyticsConfigured = GA_MEASUREMENT_ID.length > 0

export type AnalyticsConsent = 'granted' | 'denied'

/** Tercih çerezde değil, tarayıcının yerel depolama alanında tutulur. */
export const CONSENT_STORAGE_KEY = 'aurix-analytics-consent'

/** Footer'daki "Çerez tercihleri" butonu banner'ı bu event ile yeniden açar. */
export const OPEN_COOKIE_PREFERENCES_EVENT = 'aurix:open-cookie-preferences'

export function readStoredConsent(): AnalyticsConsent | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

export function storeConsent(value: AnalyticsConsent): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value)
  } catch {
    // Depolama kapalıysa tercih yalnızca bu sayfa görüntülemesi boyunca geçerli olur.
  }
}

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void
} & Record<string, unknown>

/** Onay geri çekildiğinde GA4'ü durdurur ve GA çerezlerini siler. */
export function disableAnalytics(): void {
  if (!isAnalyticsConfigured) return
  const w = window as unknown as GtagWindow

  // gtag.js bu bayrak true iken hiçbir ölçüm isteği göndermez.
  w[`ga-disable-${GA_MEASUREMENT_ID}`] = true
  w.gtag?.('consent', 'update', { analytics_storage: 'denied' })

  const containerSuffix = GA_MEASUREMENT_ID.replace(/^G-/, '')
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0]?.trim())
    .filter((name): name is string => Boolean(name))
    .filter((name) => name === '_ga' || name === `_ga_${containerSuffix}`)

  const host = window.location.hostname
  const domains = ['', host, `.${host}`, `.${host.replace(/^www\./, '')}`]
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
}

/** Onay sonrası (aynı sayfada tekrar) etkinleştirme. */
export function enableAnalytics(): void {
  if (!isAnalyticsConfigured) return
  const w = window as unknown as GtagWindow
  w[`ga-disable-${GA_MEASUREMENT_ID}`] = false
  w.gtag?.('consent', 'update', { analytics_storage: 'granted' })
}
