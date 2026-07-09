import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { getOptionalPayloadClient } from '@/lib/payload-client'
import type { Locale } from '@/lib/i18n/types'
import { dictionary } from '@/lib/i18n/dictionary'
import { localeHref } from '@/lib/i18n/pick'

type ServiceDoc = {
  title?: string | null
  slug?: string | null
  category?: string | null
  shortDescription?: string | null
}

type CategoryCard = {
  value: string
  label: string
  description: string
  code: string
  overline: string
}

async function getCategories(locale: Locale): Promise<CategoryCard[]> {
  const fallbacks = dictionary[locale].servicesPreview.categories as unknown as CategoryCard[]
  try {
    const payload = await getOptionalPayloadClient()
    if (!payload) return fallbacks

    const result = await payload.find({
      collection: 'services',
      limit: 100,
      depth: 0,
      locale,
      fallbackLocale: 'tr',
    })

    const firstByCategory = new Map<string, ServiceDoc>()
    for (const doc of result.docs as ServiceDoc[]) {
      if (doc.category && !firstByCategory.has(doc.category)) {
        firstByCategory.set(doc.category, doc)
      }
    }

    return fallbacks.map((cat) => {
      const first = firstByCategory.get(cat.value)
      return {
        ...cat,
        description: first?.shortDescription ? String(first.shortDescription) : cat.description,
      }
    })
  } catch {
    return fallbacks
  }
}

export async function ServicesPreview({ locale }: { locale: Locale }) {
  const categories = await getCategories(locale)
  const copy = dictionary[locale].servicesPreview
  const cta = dictionary[locale].common

  return (
    <section
      aria-labelledby="services-heading"
      className="border-t border-[#E2E5DE] pt-16"
      style={{ paddingBottom: 'var(--section-padding-y)', backgroundColor: 'var(--color-surface)' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-max)' }}>
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase mb-3">
                {copy.eyebrow}
              </span>
              <h2
                id="services-heading"
                className="font-serif text-[#1A1C1E] tracking-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.15' }}
              >
                {copy.heading}
              </h2>
            </div>
            <Link
              href={localeHref('/hizmetler', locale)}
              className="shrink-0 text-sm font-bold text-[#14797C] hover:text-[#C5A059] inline-flex items-center gap-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
            >
              {cta.viewAll}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <FadeIn key={cat.value} delay={i * 0.07}>
              <article className="bg-[#F9FBFB] border border-[#E8F1F2] rounded-sm p-6 flex flex-col gap-3 h-full">
                <span className="text-xs font-mono font-bold text-[#C5A059]">
                  {cat.code} / {cat.overline}
                </span>
                <h3
                  className="font-serif text-[#1A1C1E]"
                  style={{ fontSize: '1.25rem', lineHeight: '1.3' }}
                >
                  {cat.label}
                </h3>
                <p className="text-sm font-sans text-[#5B6168] leading-relaxed flex-1">
                  {cat.description}
                </p>
                <Link
                  href={localeHref(`/hizmetler/${cat.value}`, locale)}
                  className="text-xs text-[#14797C] hover:text-[#C5A059] font-bold inline-flex items-center gap-1.5 transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
                  aria-label={`${copy.viewAllAria} ${cat.label}`}
                >
                  {cta.viewDetails}
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
