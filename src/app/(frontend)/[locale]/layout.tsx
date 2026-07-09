import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Inter, Newsreader, JetBrains_Mono } from 'next/font/google'
import '../../globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton'
import { LOCALES, type Locale } from '@/lib/i18n/types'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  return locale === 'en'
    ? {
        title: { default: 'AURIX Consulting', template: '%s | AURIX Consulting' },
        description:
          'A multi-expert consulting ecosystem for professional growth, career clarity, and leadership transformation.',
      }
    : {
        title: { default: 'AURIX Danışmanlık', template: '%s | AURIX Danışmanlık' },
        description:
          'Profesyonel gelişim, kariyer netliği ve liderlik dönüşümü için çok uzmanlı danışmanlık ekosistemi.',
      }
}

export default async function FrontendLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  if (!LOCALES.includes(locale)) notFound()

  return (
    <html lang={locale} className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-canvas text-body">
        <Header locale={locale} />
        <main>{children}</main>
        <WhatsAppFloatingButton locale={locale} />
        <Footer locale={locale} />
      </body>
    </html>
  )
}
