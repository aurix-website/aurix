import Image from 'next/image'

import type { Expert } from '@/lib/experts-data'

function getPhoto(expert: Expert) {
  return expert.photo != null && typeof expert.photo === 'object' && expert.photo.url
    ? expert.photo
    : null
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toLocaleUpperCase('tr-TR')
}

export function ExpertVisual({
  expert,
  alt,
  sizes,
  priority,
  imageClassName,
  placeholderClassName = '',
}: {
  expert: Expert
  alt: string
  sizes: string
  priority?: boolean
  imageClassName: string
  placeholderClassName?: string
}) {
  const photo = getPhoto(expert)

  if (photo?.url) {
    return (
      <Image
        src={photo.url}
        alt={photo.alt ?? alt}
        fill
        sizes={sizes}
        className={imageClassName}
        priority={priority}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`absolute inset-0 flex flex-col items-center justify-center bg-[linear-gradient(145deg,#F5F9F8_0%,#E8F1F2_52%,#F7F4EA_100%)] text-center ${placeholderClassName}`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#14797C]/25 bg-white/70 font-serif text-2xl text-[#14797C] shadow-[0_18px_45px_rgba(20,121,124,0.12)]">
        {getInitials(expert.name)}
      </div>
      <div className="mt-4 h-px w-16 bg-[#C5A059]" aria-hidden="true" />
      <span className="mt-3 px-6 text-[10px] font-mono uppercase tracking-widest text-[#5B6168]">
        AURIX
      </span>
    </div>
  )
}
