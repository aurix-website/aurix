'use client'

import { OPEN_COOKIE_PREFERENCES_EVENT } from '@/lib/analytics'

/** Footer'dan çerez banner'ını yeniden açar; kullanıcı onayını değiştirebilir veya geri çekebilir. */
export function CookiePreferencesButton({ label, className }: { label: string; className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_PREFERENCES_EVENT))}
    >
      {label}
    </button>
  )
}
