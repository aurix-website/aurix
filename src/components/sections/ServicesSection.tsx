'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, X, User, Briefcase, Building2, GraduationCap } from 'lucide-react'

interface SubService {
  title: string
  description: string
}

interface ServiceCategory {
  id: string
  number: string
  icon: React.ElementType
  category: string
  title: string
  description: string
  accent: string
  subServices: SubService[]
}

const SERVICES: ServiceCategory[] = [
  {
    id: 'bireysel',
    number: '01',
    icon: User,
    category: 'BİREYSEL',
    title: 'Bireysel Koçluk & Kariyer',
    description:
      'Kariyerinde yön arayan, potansiyelini tam kullanmak isteyen bireyler için yapılandırılmış gelişim süreci.',
    accent: '#14797C',
    subServices: [
      {
        title: 'Bireysel Koçluk',
        description:
          'Kişisel hedefler, farkındalık ve içsel engellerin aşılması için birebir koçluk seansları. Kendi potansiyelinizi keşfetmenize ve harekete geçmenize yapılandırılmış destek.',
      },
      {
        title: 'Kariyer Koçluğu',
        description:
          'Kariyer geçişi, iş değiştirme veya yeni alan keşfi süreçlerinde yapılandırılmış rehberlik. Doğru kararı vermek için netlik ve strateji.',
      },
    ],
  },
  {
    id: 'liderlik',
    number: '02',
    icon: Briefcase,
    category: 'LİDERLİK',
    title: 'Liderlik & Yönetici Koçluğu',
    description:
      'Yöneticiler ve liderler için karar alma, ekip yönetimi ve kurumsal etki geliştirme programları.',
    accent: '#C5A059',
    subServices: [
      {
        title: 'Liderlik ve Yönetici Koçluğu',
        description:
          'Üst ve orta kademe yöneticiler için liderlik kapasitesi, kör nokta farkındalığı ve stratejik etki geliştirme.',
      },
      {
        title: 'Takım Koçluğu',
        description:
          'Ekip içi iletişim, uyum ve performansı güçlendiren kolektif koçluk süreçleri.',
      },
      {
        title: 'Kurumsal Eğitimler',
        description:
          'Liderlik, iletişim ve dönüşüm odaklı özelleştirilmiş kurumsal eğitim programları.',
      },
    ],
  },
  {
    id: 'kurumsal',
    number: '03',
    icon: Building2,
    category: 'KURUMSAL',
    title: 'Kurumsal & Takım Programları',
    description:
      'Şirket kültürü, takım dinamikleri ve kurumsal performans için tasarlanmış bütünsel çözümler.',
    accent: '#14797C',
    subServices: [
      {
        title: 'Kurumsal Eğitimler',
        description:
          'Şirket ihtiyaçlarına göre tasarlanmış, ölçülebilir çıktı odaklı eğitim programları.',
      },
      {
        title: 'Takım Koçluğu',
        description:
          'Ekip performansını, bağlılığını ve iş birliğini geliştiren grup koçluğu seansları.',
      },
    ],
  },
  {
    id: 'gencler',
    number: '04',
    icon: GraduationCap,
    category: 'GENÇLER & KÜRESEL',
    title: 'Gençler, Öğrenciler & Küresel Uyum',
    description:
      'Öğrencilerden genç profesyonellere, yurt içinden dünyaya uzanan kapsamlı kariyer rehberliği.',
    accent: '#C5A059',
    subServices: [
      {
        title: 'Öğrenci Mentörlüğü ve Sınav Stratejisi',
        description:
          'YKS, LGS ve uluslararası sınavlara yönelik zihinsel hazırlık ve stratejik planlama.',
      },
      {
        title: 'Öğrenci Koçluğu',
        description:
          'Akademik motivasyon, zaman yönetimi ve öz-düzenleme becerilerini geliştiren koçluk.',
      },
      {
        title: 'Gençler için Kariyer Farkındalığı',
        description:
          'Üniversite öğrencileri ve yeni mezunlar için kariyer keşfi ve meslek seçimi rehberliği.',
      },
      {
        title: 'Küresel Uyum ve Kariyer Koçluğu',
        description:
          'Yurt dışına çıkan veya uluslararası kariyer hedefleyen bireyler için uyum ve strateji desteği.',
      },
      {
        title: 'Dil Öğreniminde Zihinsel Dönüşüm Koçluğu',
        description:
          'Dil öğrenme engellerini aşmak için zihinsel blokları ve motivasyon dinamiklerini ele alan özel koçluk.',
      },
    ],
  },
]

export function ServicesSection() {
  const [active, setActive] = useState<ServiceCategory | null>(null)
  const [selectedSub, setSelectedSub] = useState<number>(0)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    setSelectedSub(0)
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section className="py-24 bg-[#F6F7F1]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

        {/* Başlık */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase block">
              HİZMETLER
            </span>
            <h2
              className="font-serif text-[#1A1C1E] tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2' }}
            >
              Uzmanlık Alanlarımız
            </h2>
            <p className="font-sans text-sm text-[#5B6168] max-w-lg leading-relaxed">
              Her kategoriye tıklayarak kapsadığı hizmetleri keşfedin.
            </p>
          </div>
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#14797C] hover:text-[#1A1C1E] transition-colors flex-shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
          >
            Tümünü gör
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* 2×2 BÜYÜK KART GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <button
                key={service.id}
                onClick={() => setActive(service)}
                className="group relative bg-white border border-[#E2E5DE] rounded-sm text-left overflow-hidden transition-all duration-300 hover:border-[#C5A059]/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14797C] focus-visible:ring-offset-2 min-h-[220px] flex"
                aria-label={`${service.title} hizmetlerini incele`}
              >
                {/* Sol dikey accent şeridi */}
                <div
                  className="w-1.5 flex-shrink-0 transition-all duration-300 group-hover:w-2"
                  style={{ backgroundColor: service.accent }}
                />

                {/* İçerik */}
                <div className="flex-1 p-7 sm:p-8 flex flex-col gap-5">
                  <div className="flex justify-between items-start">
                    <div
                      className="w-14 h-14 rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: `${service.accent}14`, color: service.accent }}
                    >
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#D7DEE4]">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#5B6168] uppercase block">
                      {service.category}
                    </span>
                    <h3 className="font-serif text-2xl text-[#1A1C1E] leading-tight group-hover:text-[#14797C] transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm text-[#5B6168] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#E2E5DE]">
                    <span className="text-[10px] font-mono text-[#5B6168] uppercase tracking-wider">
                      {service.subServices.length} hizmet alanı
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold font-sans transition-all duration-300 group-hover:gap-2.5"
                      style={{ color: service.accent }}
                    >
                      İncele <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* İKİ KOLONLU MODAL */}
      {active && (() => {
        const ActiveIcon = active.icon
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#1A1C1E]/75 backdrop-blur-sm"
              onClick={() => setActive(null)}
              aria-hidden="true"
            />

            {/* Modal panel */}
            <div
              className="relative bg-[#F6F7F1] rounded-sm w-full max-w-3xl max-h-[88vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
            >
              {/* Kapat butonu */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-sm bg-white/15 hover:bg-white/30 md:bg-[#E2E5DE]/50 md:hover:bg-[#E2E5DE] flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:focus-visible:outline-[#1A9CA0]"
                aria-label="Kapat"
              >
                <X className="h-4 w-4 text-white md:text-[#1A1C1E]" aria-hidden="true" />
              </button>

              {/* SOL KOLON — kategori kimliği, accent zemin */}
              <div
                className="md:w-[38%] flex-shrink-0 p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden"
                style={{ backgroundColor: active.accent }}
              >
                {/* Dekoratif arka plan ikonu */}
                <ActiveIcon
                  className="absolute -bottom-6 -right-6 h-40 w-40 opacity-10 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative space-y-4">
                  <div className="w-14 h-14 rounded-sm bg-white/15 flex items-center justify-center">
                    <ActiveIcon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest font-bold uppercase block text-white/70">
                    {active.number} / {active.category}
                  </span>
                  <h3 className="font-serif text-2xl text-white leading-tight">
                    {active.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {active.description}
                  </p>
                </div>

                <Link
                  href={`/hizmetler/${active.id}`}
                  className="relative mt-6 inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-5 py-3 text-sm font-semibold rounded-sm transition-all duration-200 border border-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  Bu Alan Hakkında Detay Al
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              {/* SAĞ KOLON — seçilebilir alt hizmet listesi */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="p-6 sm:p-7 space-y-2 overflow-y-auto">
                  <span className="text-[10px] font-mono tracking-widest text-[#C5A059] font-bold uppercase block mb-3">
                    BU KATEGORİDEKİ HİZMETLER
                  </span>

                  {active.subServices.map((sub, idx) => {
                    const isSelected = selectedSub === idx
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedSub(idx)}
                        className="w-full text-left rounded-sm border transition-all duration-200 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14797C] focus-visible:ring-offset-1"
                        style={{
                          borderColor: isSelected ? active.accent : '#E2E5DE',
                          borderLeftWidth: isSelected ? '3px' : '1px',
                          backgroundColor: isSelected ? '#FFFFFF' : 'transparent',
                        }}
                        aria-pressed={isSelected}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className="font-sans font-semibold text-sm transition-colors"
                            style={{ color: isSelected ? active.accent : '#1A1C1E' }}
                          >
                            {sub.title}
                          </span>
                          <ArrowRight
                            className="h-4 w-4 flex-shrink-0 transition-all duration-200"
                            style={{
                              color: isSelected ? active.accent : '#D7DEE4',
                              transform: isSelected ? 'translateX(2px)' : 'none',
                            }}
                            aria-hidden="true"
                          />
                        </div>
                        {/* Seçili detay — CSS grid accordion */}
                        <div
                          className="grid transition-all duration-300 ease-in-out"
                          style={{ gridTemplateRows: isSelected ? '1fr' : '0fr' }}
                        >
                          <div className="overflow-hidden">
                            <p className="font-sans text-xs text-[#5B6168] leading-relaxed pt-2.5">
                              {sub.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })()}
    </section>
  )
}
