import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contact-channels'

export function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden AURIX ile iletişime geç"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#14797C] text-white shadow-[0_18px_45px_rgba(20,121,124,0.35)] transition-all duration-300 hover:bg-[#0f5f62] hover:shadow-[0_22px_58px_rgba(20,121,124,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059] motion-safe:hover:scale-105 motion-reduce:transition-none sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
      <span className="sr-only">WhatsApp</span>
    </a>
  )
}
