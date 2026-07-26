import type { Metadata } from 'next'

import { LegalPageTemplate } from '@/components/LegalPageTemplate'
import { LEGAL_PAGES } from '@/lib/legal-content'
import { pick } from '@/lib/i18n/pick'
import type { Locale } from '@/lib/i18n/types'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const page = LEGAL_PAGES.etik

  return {
    title: pick(page.title, locale),
    description: pick(page.description, locale),
    alternates: {
      languages: { tr: '/etik-ilkeler', en: '/en/etik-ilkeler' },
    },
  }
}

export default async function EtikIlkelerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  return <LegalPageTemplate page={LEGAL_PAGES.etik} activeKey="etik" locale={locale} />
}
