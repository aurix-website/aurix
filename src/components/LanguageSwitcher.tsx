'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function stripEnglishPrefix(pathname: string) {
  if (pathname === '/en') return '/'
  return pathname.replace(/^\/en(?=\/|$)/, '') || '/'
}

function withEnglishPrefix(pathname: string) {
  const clean = stripEnglishPrefix(pathname)
  return clean === '/' ? '/en' : `/en${clean}`
}

export function localizePath(href: string, isEnglish: boolean) {
  if (!isEnglish) return href
  if (!href.startsWith('/') || href.startsWith('/en') || href.startsWith('/media')) return href
  return href === '/' ? '/en' : `/en${href}`
}

export function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')

  return (
    <div className="flex items-center gap-2 text-[11px] font-mono" aria-label="Language selector">
      <Link
        href={stripEnglishPrefix(pathname)}
        data-locale-link="true"
        className={isEnglish ? 'text-[#D7DEE4] hover:text-[#C5A059] tracking-widest transition-colors' : 'text-[#C5A059] font-bold tracking-widest'}
        aria-current={isEnglish ? undefined : 'true'}
        aria-label="Türkçe"
      >
        TR
      </Link>
      <span className="text-[#5B6168]" aria-hidden="true">/</span>
      <Link
        href={withEnglishPrefix(pathname)}
        data-locale-link="true"
        className={isEnglish ? 'text-[#C5A059] font-bold tracking-widest' : 'text-[#D7DEE4] hover:text-[#C5A059] tracking-widest transition-colors'}
        aria-current={isEnglish ? 'true' : undefined}
        aria-label="English"
      >
        EN
      </Link>
    </div>
  )
}
