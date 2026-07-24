import type { Metadata } from 'next'
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate'
import { SERVICE_DETAILS } from '@/lib/service-detail-data'
import { pick } from '@/lib/i18n/pick'
import type { Locale } from '@/lib/i18n/types'

const detail = SERVICE_DETAILS['ogrenci-mentorlugu-sinav-stratejisi']

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
        tr: '/hizmetler/ogrenci-mentorlugu-sinav-stratejisi',
        en: '/en/hizmetler/ogrenci-mentorlugu-sinav-stratejisi',
      },
    },
  }
}

export default async function OgrenciMentorluguSinavStratejisi({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  return <ServiceDetailTemplate detail={detail} locale={locale} />
}
