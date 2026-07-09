export type Locale = 'tr' | 'en'

export const LOCALES: Locale[] = ['tr', 'en']

export const DEFAULT_LOCALE: Locale = 'tr'

/** Bilingual field — {tr,en} pair for any translatable value (string, string[], etc). */
export type Localized<T> = { tr: T; en: T }
