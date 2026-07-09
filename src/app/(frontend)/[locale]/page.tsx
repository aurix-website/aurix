export const revalidate = 3600

import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { DisciplinesSection } from '@/components/sections/DisciplinesSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ApproachSteps } from '@/components/sections/ApproachSteps'
import { ExpertsPreview } from '@/components/sections/ExpertsPreview'
import { PersonaGrid } from '@/components/sections/PersonaGrid'
import { ManifestoSection } from '@/components/sections/ManifestoSection'
import { JournalPreview } from '@/components/sections/JournalPreview'
import { FinalCTA } from '@/components/sections/FinalCTA'
import type { Locale } from '@/lib/i18n/types'

export function generateMetadata(): Metadata {
  return { alternates: { languages: { tr: '/', en: '/en' } } }
}

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return (
    <>
      <HeroSection locale={locale} />
      <DisciplinesSection locale={locale} />
      <ServicesSection locale={locale} />
      <ApproachSteps locale={locale} />
      <ExpertsPreview locale={locale} />
      <PersonaGrid locale={locale} />
      <ManifestoSection locale={locale} />
      <JournalPreview locale={locale} />
      <FinalCTA locale={locale} />
    </>
  )
}
