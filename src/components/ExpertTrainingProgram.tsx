import { FadeIn } from '@/components/ui/FadeIn'
import type { ExpertTrainingProgram as Program } from '@/lib/expert-detail-data'
import { pick } from '@/lib/i18n/pick'
import type { Locale } from '@/lib/i18n/types'

const COPY = {
  tr: {
    eyebrow: 'Eğitim programları',
    themesHeading: 'Öncelikli üç tema',
    themesIntro:
      'Bütün programların omurgası bu üç tema. Kitleye göre programlar bu temaları öğretmene, veliye, öğrenciye ya da yöneticiye uyarlar.',
    outcome: 'Kazanım',
    programsHeading: 'Kitleye göre programlar',
    programsIntro: 'Okullarda üç program paket olarak da sunulabilir.',
    questions: 'Temel sorular',
    workshopsHeading: 'Talebe göre: uygulamalı yapay zekâ araçları',
    workshopsIntro:
      'Öncelikli temaların yanında, isteyen kurumlara araçların pratik kullanımı üzerine atölyeler. Her atölye de aynı ilkeyle başlar: çıktıyı sınamak ve hangi bilginin araca girilmeyeceğini bilmek.',
    howHeading: 'Nasıl çalışır?',
    limitsHeading: 'Sınırlar',
    publicationsHeading: 'Akademik yayınlar',
  },
  en: {
    eyebrow: 'Training programs',
    themesHeading: 'Three priority themes',
    themesIntro:
      'These three themes form the backbone of every program. The audience programs adapt them for teachers, parents, students, or managers.',
    outcome: 'Outcome',
    programsHeading: 'Programs by audience',
    programsIntro: 'For schools, three of the programs can also be offered as a package.',
    questions: 'Key questions',
    workshopsHeading: 'On request: hands-on AI tools',
    workshopsIntro:
      'Alongside the priority themes, workshops on the practical use of tools are available for organizations that request them. Every workshop starts from the same principle: testing the output and knowing what information should not go into the tool.',
    howHeading: 'How does it work?',
    limitsHeading: 'Boundaries',
    publicationsHeading: 'Academic publications',
  },
} as const

export function ExpertTrainingProgram({ program, locale }: { program: Program; locale: Locale }) {
  const copy = COPY[locale]

  return (
    <section aria-labelledby="training-heading" className="py-section bg-canvas">
      <div className="max-w-container mx-auto px-6 flex flex-col gap-14">
        <FadeIn>
          <span className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase mb-3">
            {copy.eyebrow}
          </span>
          <h2 id="training-heading" className="font-serif text-3xl text-ink mb-3">
            {copy.themesHeading}
          </h2>
          <p className="text-body-sm text-muted leading-relaxed max-w-3xl mb-6">{copy.themesIntro}</p>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {program.themes.map((theme) => (
              <article key={pick(theme.title, 'tr')} className="flex flex-col gap-3 rounded-sm border border-hairline bg-white p-6">
                <h3 className="font-serif text-xl text-ink">{pick(theme.title, locale)}</h3>
                <p className="text-body-sm text-body leading-relaxed">{pick(theme.description, locale)}</p>
                <ul className="flex flex-col gap-2">
                  {pick(theme.questions, locale).map((question) => (
                    <li key={question} className="flex items-start gap-2 text-body-sm text-body">
                      <span className="w-1 h-1 rounded-full bg-[#C5A059] mt-2 flex-shrink-0" aria-hidden="true" />
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-2 text-body-sm text-[#14797C]">
                  <strong className="font-semibold">{copy.outcome}:</strong> {pick(theme.outcome, locale)}
                </p>
              </article>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="font-serif text-3xl text-ink mb-3">{copy.programsHeading}</h2>
          <p className="text-body-sm text-muted leading-relaxed mb-6">{copy.programsIntro}</p>
          <div className="flex flex-col gap-4">
            {program.programs.map((item) => (
              <article key={pick(item.title, 'tr')} className="rounded-sm border border-hairline bg-white p-6">
                <span className="block text-[11px] font-mono tracking-widest text-[#14797C] font-bold uppercase mb-2">
                  {pick(item.audience, locale)}
                </span>
                <h3 className="font-serif text-xl text-ink mb-3">{pick(item.title, locale)}</h3>
                <dl className="grid grid-cols-1 gap-4 text-body-sm lg:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-ink mb-1">{copy.questions}</dt>
                    <dd className="text-body leading-relaxed">{pick(item.questions, locale)}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink mb-1">{copy.outcome}</dt>
                    <dd className="text-body leading-relaxed">{pick(item.outcome, locale)}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="font-serif text-3xl text-ink mb-3">{copy.workshopsHeading}</h2>
          <p className="text-body-sm text-muted leading-relaxed max-w-3xl mb-6">{copy.workshopsIntro}</p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {program.workshops.map((workshop) => (
              <article key={pick(workshop.title, 'tr')} className="rounded-sm border border-hairline bg-white p-6">
                <h3 className="font-serif text-xl text-ink mb-2">{pick(workshop.title, locale)}</h3>
                <p className="text-body-sm text-body leading-relaxed mb-3">{pick(workshop.description, locale)}</p>
                <p className="text-caption text-muted">{pick(workshop.meta, locale)}</p>
              </article>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-serif text-2xl text-ink mb-5">{copy.howHeading}</h2>
            <ol className="flex flex-col gap-4">
              {program.howItWorks.map((step, index) => (
                <li key={pick(step.title, 'tr')} className="flex gap-3">
                  <span className="text-[11px] font-mono font-bold text-[#C5A059] pt-1">0{index + 1}</span>
                  <div>
                    <h3 className="text-title-sm font-semibold text-ink mb-1">{pick(step.title, locale)}</h3>
                    <p className="text-body-sm text-body leading-relaxed">{pick(step.description, locale)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="font-serif text-2xl text-ink mb-5">{copy.limitsHeading}</h2>
            <ul className="flex flex-col gap-2.5">
              {pick(program.limits, locale).map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-body-sm text-body">
                  <span className="w-1 h-1 rounded-full bg-[#C5A059] mt-2.5 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn>
          <h2 className="font-serif text-2xl text-ink mb-5">{copy.publicationsHeading}</h2>
          <ul className="flex flex-col gap-3">
            {program.publications.map((publication) => (
              <li key={publication} className="text-body-sm text-body leading-relaxed">
                {publication}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
