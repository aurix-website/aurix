'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/lib/faq-data'
import { pick } from '@/lib/i18n/pick'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n/types'

export function FaqAccordion({ items, locale = DEFAULT_LOCALE }: { items: FaqItem[]; locale?: Locale }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const question = pick(item.question, locale)
        return (
          <div
            key={question}
            className={`rounded-md border bg-[#FCFDF9] transition-colors duration-200 ${
              isOpen ? 'border-[#14797C]/40' : 'border-[#E2E5DE] hover:border-[#14797C]/30'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="flex w-full items-center justify-between gap-4 rounded-md px-5 py-5 text-left focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0] sm:px-6"
            >
              <span className="font-serif text-lg leading-snug text-[#1A1C1E]">{question}</span>
              <span
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                  isOpen ? 'border-[#14797C] bg-[#14797C] text-white' : 'border-[#E2E5DE] text-[#5B6168]'
                }`}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className="grid transition-all duration-300 ease-in-out motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-[#5B6168] sm:px-6">{pick(item.answer, locale)}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
