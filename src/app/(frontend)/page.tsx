export const revalidate = 60

import { HeroSection } from '@/components/sections/HeroSection'
import { DisciplinesSection } from '@/components/sections/DisciplinesSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ApproachSteps } from '@/components/sections/ApproachSteps'
import { ExpertsPreview } from '@/components/sections/ExpertsPreview'
import { PersonaGrid } from '@/components/sections/PersonaGrid'
import { ManifestoSection } from '@/components/sections/ManifestoSection'
import { JournalPreview } from '@/components/sections/JournalPreview'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <DisciplinesSection />
      <ServicesSection />
      <ApproachSteps />
      <ExpertsPreview />
      <PersonaGrid />
      <ManifestoSection />
      <JournalPreview />
      <FinalCTA />
    </>
  )
}
