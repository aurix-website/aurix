import type { Metadata } from 'next'
import { ServiceDetailTemplate } from '@/components/ServiceDetailTemplate'
import { SERVICE_DETAILS } from '@/lib/service-detail-data'

const detail = SERVICE_DETAILS['bireysel-kocluk']

export const metadata: Metadata = {
  title: detail.seoTitle,
  description: detail.seoDescription,
}

export default function BireyselKocluk() {
  return <ServiceDetailTemplate detail={detail} />
}
