import type { Metadata } from 'next'
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate'
import { SERVICE_DETAILS } from '@/lib/service-detail-data'
import { pick } from '@/lib/i18n/pick'
import type { Locale } from '@/lib/i18n/types'

const detail = SERVICE_DETAILS['dil-ogreniminde-zihinsel-donusum-koclugu']

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    title: pick(detail.seoTitle, locale),
    description: pick(detail.seoDescription, locale),
    alternates: {
      languages: {
        tr: '/hizmetler/dil-ogreniminde-zihinsel-donusum-koclugu',
        en: '/en/hizmetler/dil-ogreniminde-zihinsel-donusum-koclugu',
      },
    },
  }
}

export default async function DilOgreniminde({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  return <ServiceDetailTemplate detail={detail} locale={locale} />
}
