'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/lib/faq-data'

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col divide-y divide-hairline border-t border-b border-hairline">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="w-full flex items-center justify-between gap-4 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14797C] focus-visible:ring-offset-2 rounded-sm"
            >
              <span className="text-title-sm font-semibold text-ink">{item.question}</span>
              <ChevronDown
                className={`h-4 w-4 text-muted flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#14797C]' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className="grid transition-all duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="text-body-sm text-body leading-relaxed pb-6">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
