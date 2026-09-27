'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import {
  GA_MEASUREMENT_ID,
  OPEN_COOKIE_PREFERENCES_EVENT,
  disableAnalytics,
  enableAnalytics,
  isAnalyticsConfigured,
  readStoredConsent,
  storeConsent,
  type AnalyticsConsent,
} from '@/lib/analytics'
import { localeHref } from '@/lib/i18n/pick'
import type { Locale } from '@/lib/i18n/types'

const COPY: Record<Locale, {
  title: string
  body: string
  policyLink: string
  accept: string
  reject: string
  ariaLabel: string
}> = {
  tr: {
    title: 'Çerez tercihiniz',
    body: 'Sitenin nasıl kullanıldığını anlamak için, yalnızca onay vermeniz halinde Google Analytics analitik çerezlerini kullanıyoruz. Reklam veya yeniden hedefleme çerezi kullanmıyoruz. Tercihinizi dilediğiniz zaman sayfanın altındaki "Çerez tercihleri" bağlantısından değiştirebilirsiniz.',
    policyLink: 'Çerez Politikası',
    accept: 'Kabul Et',
    reject: 'Reddet',
    ariaLabel: 'Çerez tercihleri',
  },
  en: {
    title: 'Your cookie preference',
    body: 'We use Google Analytics cookies to understand how the site is used, only if you consent. We do not use advertising or retargeting cookies. You can change your choice at any time via the "Cookie preferences" link at the bottom of the page.',
    policyLink: 'Cookie Policy',
    accept: 'Accept',
    reject: 'Reject',
    ariaLabel: 'Cookie preferences',
  },
}

// İki buton da aynı sınıfı kullanır: Kabul ve Reddet görsel olarak eşit ağırlıktadır.
const choiceButtonClass =
  'inline-flex flex-1 sm:flex-none items-center justify-center px-6 py-2.5 border border-[#14797C] text-[#14797C] bg-transparent text-body-sm font-medium rounded-sm transition-colors hover:bg-[#14797C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]'

export function ConsentManager({ locale }: { locale: Locale }) {
  // null = henüz okunmadı (SSR / ilk render), bu sırada hiçbir şey render edilmez.
  const [consent, setConsent] = useState<AnalyticsConsent | null>(null)
  const [bannerOpen, setBannerOpen] = useState(false)

  useEffect(() => {
    if (!isAnalyticsConfigured) return
    const stored = readStoredConsent()
    setConsent(stored)
    setBannerOpen(stored === null)

    const openPreferences = () => setBannerOpen(true)
    window.addEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences)
    return () => window.removeEventListener(OPEN_COOKIE_PREFERENCES_EVENT, openPreferences)
  }, [])

  const choose = useCallback((value: AnalyticsConsent) => {
    storeConsent(value)
    if (value === 'granted') enableAnalytics()
    else disableAnalytics()
    setConsent(value)
    setBannerOpen(false)
  }, [])

  if (!isAnalyticsConfigured) return null

  const c = COPY[locale]

  return (
    <>
      {consent === 'granted' && (
        <>
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
window['ga-disable-${GA_MEASUREMENT_ID}'] = false;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'granted'
});
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', {
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});`}
          </Script>
          <Script
            id="ga4-gtag"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {bannerOpen && (
        <div
          role="region"
          aria-label={c.ariaLabel}
          className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-3xl bg-surface-card border border-hairline rounded-sm shadow-[0_18px_45px_rgba(26,28,30,0.18)] p-5 sm:p-6">
            <p className="font-serif text-lg text-ink mb-2">{c.title}</p>
            <p className="text-body-sm text-body leading-relaxed">
              {c.body}{' '}
              <Link
                href={localeHref('/cerez-politikasi', locale)}
                className="text-[#14797C] underline hover:text-[#C5A059]"
              >
                {c.policyLink}
              </Link>
            </p>
            <div className="mt-4 flex gap-3">
              <button type="button" className={choiceButtonClass} onClick={() => choose('granted')}>
                {c.accept}
              </button>
              <button type="button" className={choiceButtonClass} onClick={() => choose('denied')}>
                {c.reject}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
