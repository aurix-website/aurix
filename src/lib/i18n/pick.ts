import type { Locale, Localized } from './types'

/** Reads the value for the active locale out of a {tr,en} field, falling back to tr. */
export function pick<T>(field: Localized<T>, locale: Locale): T {
  return field[locale] ?? field.tr
}

/** Builds the /en-prefixed variant of a TR path (mirrors LanguageSwitcher's localizePath). */
export function localeHref(path: string, locale: Locale): string {
  if (locale === 'tr') return path
  if (path === '/') return '/en'
  return `/en${path}`
}
