import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ExpertDetailTemplate } from '@/components/ExpertDetailTemplate'
import { getExpertBySlug, STATIC_EXPERTS } from '@/lib/experts-data'
import { EXPERT_DETAILS } from '@/lib/expert-detail-data'

export function generateStaticParams() {
  return STATIC_EXPERTS.map((expert) => ({ slug: expert.slug as string }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const detail = EXPERT_DETAILS[slug]
  if (!detail) return {}
  return {
    title: detail.seoTitle,
    description: detail.seoDescription,
  }
}

export default async function ExpertDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const expert = getExpertBySlug(slug)
  const detail = EXPERT_DETAILS[slug]

  if (!expert || !detail) {
    notFound()
  }

  return <ExpertDetailTemplate expert={expert} detail={detail} />
}
