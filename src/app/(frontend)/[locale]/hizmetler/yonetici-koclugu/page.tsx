import type { Metadata } from 'next'
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate'
import { SERVICE_DETAILS } from '@/lib/service-detail-data'

const detail = SERVICE_DETAILS['yonetici-koclugu']

export const metadata: Metadata = {
  title: detail.seoTitle,
  description: detail.seoDescription,
}

export default function YoneticiKoclugu() {
  return <ServiceDetailTemplate detail={detail} />
}
