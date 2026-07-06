import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { getOptionalPayloadClient } from '@/lib/payload-client'

type PopulatedMedia = { url?: string | null; alt?: string | null }

type Expert = {
  id: string
  name: string
  slug?: string | null
  title?: string | null
  photo?: PopulatedMedia | string | null
  expertiseAreas?: Array<{ item?: string | null }> | null
}

const STATIC_EXPERTS: Expert[] = [
  {
    id: 'kaan-yazici',
    name: 'Kaan Yazıcı',
    slug: 'kaan-yazici',
    title: 'Bireysel ve Takım Koçu',
    photo: null,
    expertiseAreas: [
      { item: 'Bireysel koçluk' },
      { item: 'Takım koçluğu' },
      { item: 'Kariyer netliği' },
    ],
  },
  {
    id: 'hatice-yildirim',
    name: 'Hatice Yıldırım',
    slug: 'hatice-yildirim',
    title: 'Liderlik ve Kurumsal Gelişim Koçu',
    photo: null,
    expertiseAreas: [
      { item: 'Liderlik akademisi' },
      { item: 'Kuşaklar arası uyum' },
      { item: 'Kurumsal dönüşüm' },
    ],
  },
  {
    id: 'elif-turkmen',
    name: 'Elif Türkmen',
    slug: 'elif-turkmen',
    title: 'Kariyer ve Yurtdışı Geçiş Koçu',
    photo: null,
    expertiseAreas: [
      { item: 'Kariyer geçişi' },
      { item: 'Uluslararası uyum' },
      { item: 'Hedef belirleme' },
    ],
  },
]

const EXPERT_PLACEHOLDERS: Record<string, string> = {
  'kaan-yazici': 'expert-kaan-yazici.jpg',
  'hatice-yildirim': 'expert-hatice-yildirim.jpg',
  'elif-turkmen': 'expert-elif-turkmen.jpg',
}

async function getFeaturedExperts(): Promise<Expert[]> {
  try {
    const payload = await getOptionalPayloadClient()
    if (!payload) return STATIC_EXPERTS

    const result = await payload.find({
      collection: 'experts',
      where: { featured: { equals: true } },
      sort: 'order',
      limit: 3,
      depth: 1,
    })

    if (result.docs.length === 0) return STATIC_EXPERTS
    return result.docs as unknown as Expert[]
  } catch {
    return STATIC_EXPERTS
  }
}

function FounderCard({ expert }: { expert: Expert }) {
  const photo =
    expert.photo != null && typeof expert.photo === 'object' ? expert.photo : null
  const placeholder =
    (expert.slug && EXPERT_PLACEHOLDERS[expert.slug]) ??
    `expert-${expert.slug ?? expert.id}.jpg`
  const href = expert.slug ? `/uzmanlar/${expert.slug}` : '/uzmanlar'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Fotoğraf kartı */}
      <div className="max-w-sm mx-auto lg:mx-0">
        <div className="bg-white border border-[#E2E5DE] rounded-sm p-3 skew-y-1 hover:skew-y-0 transition-transform duration-500">
          <div className="aspect-[3/4] relative overflow-hidden rounded-sm">
            {photo?.url ? (
              <Image
                src={photo.url}
                alt={photo.alt ?? expert.name}
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover object-top grayscale-[25%] hover:grayscale-0 transition-all duration-300"
                priority
              />
            ) : (
              <ImagePlaceholder
                filename={placeholder}
                width={480}
                height={640}
                fill
                label={`${expert.name} portre fotoğrafı — 480×640 px`}
              />
            )}
          </div>
          <div className="mt-3 text-center">
            <span className="font-serif text-lg text-[#1A1C1E] block">{expert.name}</span>
            <span className="text-[10px] font-mono text-[#5B6168] uppercase tracking-widest">
              KURUCU & BAŞ KOÇLUK DANIŞMANI
            </span>
          </div>
        </div>
      </div>

      {/* Metin içeriği */}
      <div className="flex flex-col gap-6">
        <div>
          <span className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase mb-3">
            Kurucumuz
          </span>
          <h2
            className="font-serif text-[#1A1C1E] tracking-tight"
            style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.15' }}
          >
            Kaan Yazıcı
          </h2>
        </div>

        <p className="font-sans text-[#5B6168] leading-relaxed" style={{ fontSize: '1.0625rem' }}>
          ICF onaylı koç ve danışman. Bireysel koçluk, takım dinamikleri ve liderlik gelişimi
          alanlarında 200&apos;den fazla saatlik deneyim. Türkiye ve uluslararası arenada
          danışanlarıyla çalışmaktadır.
        </p>

        <p className="font-sans text-[#5B6168] leading-relaxed" style={{ fontSize: '1.0625rem' }}>
          Erickson metodolojisi çerçevesinde yapılandırılmış koçluk seansları ve kurumsal
          programlar sunmaktadır.
        </p>

        <blockquote className="border-l-2 border-[#C5A059] pl-4">
          <p
            className="font-serif text-[#1A1C1E] italic leading-relaxed"
            style={{ fontSize: '1.125rem' }}
          >
            &ldquo;Koçluk, cevapları vermek değil; danışanın kendi cevabını bulmasına alan
            açmaktır.&rdquo;
          </p>
          <cite className="block mt-2 text-[11px] font-mono tracking-widest text-[#5B6168] uppercase not-italic">
            Kaan Yazıcı
          </cite>
        </blockquote>

        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
        >
          Profili İncele
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

    </div>
  )
}

function SecondaryExpertCard({ expert }: { expert: Expert }) {
  const photo =
    expert.photo != null && typeof expert.photo === 'object' ? expert.photo : null
  const placeholder =
    (expert.slug && EXPERT_PLACEHOLDERS[expert.slug]) ??
    `expert-${expert.slug ?? expert.id}.jpg`
  const href = expert.slug ? `/uzmanlar/${expert.slug}` : '/uzmanlar'
  const areas = (expert.expertiseAreas ?? [])
    .slice(0, 3)
    .map((a) => a.item)
    .filter((item): item is string => Boolean(item))

  return (
    <article className="group flex flex-col gap-4">
      <Link
        href={href}
        className="block overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
        aria-label={`${expert.name} — uzman profili`}
      >
        <div className="aspect-[3/4] relative w-full overflow-hidden rounded-sm">
          {photo?.url ? (
            <Image
              src={photo.url}
              alt={photo.alt ?? expert.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
            />
          ) : (
            <div className="w-full h-full">
              <ImagePlaceholder
                filename={placeholder}
                width={480}
                height={640}
                fill
                label={`${expert.name} portre fotoğrafı`}
              />
            </div>
          )}
        </div>
      </Link>

      <div className="flex flex-col gap-1.5">
        <Link
          href={href}
          className="self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
        >
          <h3
            className="font-serif text-[#1A1C1E] transition-colors duration-200 group-hover:text-[#14797C]"
            style={{ fontSize: '1.25rem', lineHeight: '1.3' }}
          >
            {expert.name}
          </h3>
        </Link>

        {expert.title && (
          <p className="text-sm font-sans text-[#5B6168]">{expert.title}</p>
        )}

        {areas.length > 0 && (
          <ul
            className="flex flex-wrap gap-1.5 mt-1"
            aria-label={`${expert.name} odak alanları`}
          >
            {areas.map((area) => (
              <li
                key={area}
                className="text-[11px] font-mono px-2.5 py-1 bg-[#F9FBFB] border border-[#E8F1F2] rounded-sm text-[#5B6168]"
              >
                {area}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export async function ExpertsPreview() {
  const experts = await getFeaturedExperts()
  const [founder, ...rest] = experts

  return (
    <section
      aria-labelledby="experts-heading"
      className="border-t border-[#E2E5DE] pt-16"
      style={{ paddingBottom: 'var(--section-padding-y)', backgroundColor: 'var(--color-surface)' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--container-max)' }}>

        <FadeIn>
          <div className="mb-12">
            <span className="block text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase mb-3">
              Uzmanlarımız
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2
                id="experts-heading"
                className="font-serif text-[#1A1C1E] tracking-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', lineHeight: '1.15' }}
              >
                Farklı uzmanlık, ortak metodoloji.
              </h2>
              <Link
                href="/uzmanlar"
                className="shrink-0 text-sm font-bold text-[#14797C] hover:text-[#C5A059] inline-flex items-center gap-1.5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
              >
                Tüm uzmanlar
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Kurucu kartı */}
        {founder && (
          <FadeIn delay={0.08}>
            <FounderCard expert={founder} />
          </FadeIn>
        )}

        {/* Diğer uzmanlar */}
        {rest.length > 0 && (
          <div className="mt-16 border-t border-[#E2E5DE] pt-16">
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {rest.map((expert) => (
                  <SecondaryExpertCard key={expert.id} expert={expert} />
                ))}
              </div>
            </FadeIn>
          </div>
        )}

      </div>
    </section>
  )
}
