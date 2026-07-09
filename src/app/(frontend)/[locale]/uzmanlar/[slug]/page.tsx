import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ExpertDetailTemplate } from '@/components/ExpertDetailTemplate'
import { getExpertBySlug, STATIC_EXPERTS } from '@/lib/experts-data'
import { EXPERT_DETAILS } from '@/lib/expert-detail-data'
import { pick } from '@/lib/i18n/pick'
import type { Locale } from '@/lib/i18n/types'

export function generateStaticParams() {
  return STATIC_EXPERTS.map((expert) => ({ slug: expert.slug as string }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const detail = EXPERT_DETAILS[slug]
  if (!detail) return {}
  return {
    title: pick(detail.seoTitle, locale),
    description: pick(detail.seoDescription, locale),
    alternates: {
      languages: { tr: `/uzmanlar/${slug}`, en: `/en/uzmanlar/${slug}` },
    },
  }
}

export default async function ExpertDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>
}) {
  const { locale, slug } = await params
  const expert = getExpertBySlug(slug)
  const detail = EXPERT_DETAILS[slug]

  if (!expert || !detail) {
    notFound()
  }

  return <ExpertDetailTemplate expert={expert} detail={detail} locale={locale} />
}
