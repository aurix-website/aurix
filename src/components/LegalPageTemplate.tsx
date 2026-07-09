import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'

import type { LegalPageContent } from '@/lib/legal-content'
import { LEGAL_PAGES } from '@/lib/legal-content'
import { pick, localeHref } from '@/lib/i18n/pick'
import type { Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    relatedHeading: 'İlgili yasal metinler',
    contactCta: 'Sorularınız için bizimle iletişime geçin',
    contactLink: 'İletişime Geç',
    note:
      'Bu metin bilgilendirme amacıyla hazırlanmıştır. AURIX’in resmi şirket unvanı, adresi ve operasyonel süreçleri kesinleştiğinde yayın öncesi son hukuki kontrol yapılmalıdır.',
  },
  en: {
    relatedHeading: 'Related legal notices',
    contactCta: 'Contact us if you have questions',
    contactLink: 'Contact Us',
    note:
      'This text is prepared for informational purposes. A final legal review should be completed before launch once AURIX’s official company title, address, and operational processes are confirmed.',
  },
} as const

export function LegalPageTemplate({
  page,
  activeKey,
  locale,
}: {
  page: LegalPageContent
  activeKey: keyof typeof LEGAL_PAGES
  locale: Locale
}) {
  const copy = COPY[locale]
  const related = Object.entries(LEGAL_PAGES).filter(([key]) => key !== activeKey)

  return (
    <>
      <section className="bg-canvas py-section" aria-labelledby="legal-heading">
        <div className="mx-auto max-w-container px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-[#DDE5E4] bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-widest text-[#14797C]">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                {pick(page.eyebrow, locale)}
              </div>
              <h1
                id="legal-heading"
                className="font-serif text-display-lg leading-tight tracking-tight text-ink"
              >
                {pick(page.title, locale)}
              </h1>
              <p className="mt-5 max-w-3xl text-body-md leading-relaxed text-body">
                {pick(page.intro, locale)}
              </p>
              <p className="mt-4 text-caption font-medium uppercase tracking-widest text-muted">
                {pick(page.updatedAt, locale)}
              </p>
            </div>

            <aside className="lg:col-span-4">
              <div className="border border-hairline bg-white p-5">
                <h2 className="font-serif text-xl text-ink">{copy.relatedHeading}</h2>
                <ul className="mt-4 space-y-3">
                  {related.map(([key, item]) => (
                    <li key={key}>
                      <Link
                        href={localeHref(`/${item.slug}`, locale)}
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-[#14797C] hover:text-[#C5A059]"
                      >
                        {pick(item.title, locale)}
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-section" aria-label={pick(page.title, locale)}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-10">
            {page.sections.map((section) => (
              <section key={pick(section.heading, locale)} className="border-b border-hairline pb-8 last:border-b-0">
                <h2 className="font-serif text-2xl text-ink">{pick(section.heading, locale)}</h2>
                {section.body && (
                  <p className="mt-4 text-body-sm leading-relaxed text-body">
                    {pick(section.body, locale)}
                  </p>
                )}
                {section.items && (
                  <ul className="mt-4 space-y-3 text-body-sm leading-relaxed text-body">
                    {pick(section.items, locale).map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#14797C]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 border border-[#DDE5E4] bg-[#F8FBFA] p-5">
            <p className="text-body-sm leading-relaxed text-body">{copy.note}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-serif text-xl text-ink">{copy.contactCta}</p>
            <Link
              href={localeHref('/iletisim', locale)}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-[#14797C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0f5f62]"
            >
              {copy.contactLink}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
