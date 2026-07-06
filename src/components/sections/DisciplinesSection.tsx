import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const DISCIPLINES = [
  'Eğitim ve Öğrenme Psikolojisi',
  'Uluslararası Kariyer Geçişi',
  'İnsan Kaynakları ve Organizasyon',
  'Kurumsal Liderlik Gelişimi',
  'Nörobilim ve Davranış Tasarımı',
  'Koçluk Metodolojisi',
  'Kariyer Yönelimi',
  'Takım Dinamikleri',
]

const ROW_1 = [...DISCIPLINES, ...DISCIPLINES]
const ROW_2 = [...DISCIPLINES.slice(4), ...DISCIPLINES, ...DISCIPLINES.slice(0, 4)]
const ROW_3 = [...DISCIPLINES.slice(2), ...DISCIPLINES, ...DISCIPLINES.slice(0, 2)]

export function DisciplinesSection() {
  return (
    <section className="bg-[#2E2E30] py-14 lg:py-20 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Sol: Başlık */}
          <div className="space-y-6">
            <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase block">
              YAKLAŞIMIMIZ
            </span>
            <h2
              className="font-serif text-[#F6F7F1] tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.2' }}
            >
              Farklı disiplinlerden uzmanlar,
              ortak bir çerçevede çalışır.
            </h2>
            <p className="font-sans text-[#D7DEE4] leading-relaxed max-w-md" style={{ fontSize: '1.0625rem' }}>
              Her danışanın ihtiyacı farklıdır. Bu yüzden tek bir metodoloji değil,
              birbirini tamamlayan uzmanlık alanlarından oluşan bir ekosistem sunuyoruz.
            </p>
            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#C5A059] hover:text-[#F6F7F1] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C5A059] focus-visible:outline-offset-2 rounded-sm"
            >
              Yaklaşımımızı öğren
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Sağ: Kayan etiketler — 3 satır, zıt yönde */}
          <div className="space-y-3 overflow-hidden" aria-hidden="true">
            {/* Satır 1 — sola */}
            <div className="flex gap-3 animate-marquee-left">
              {ROW_1.map((d, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap flex-shrink-0 px-4 py-2 rounded-sm text-sm font-sans text-[#D7DEE4]"
                  style={{ border: '1px solid rgba(246,247,241,0.15)', backgroundColor: 'rgba(246,247,241,0.05)' }}
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Satır 2 — sağa (ters) */}
            <div className="flex gap-3 animate-marquee-right">
              {ROW_2.map((d, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap flex-shrink-0 px-4 py-2 rounded-sm text-sm font-sans"
                  style={{
                    border: '1px solid rgba(197,160,89,0.25)',
                    backgroundColor: 'rgba(197,160,89,0.05)',
                    color: 'rgba(197,160,89,0.8)',
                  }}
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Satır 3 — sola (gecikmeli) */}
            <div className="flex gap-3 animate-marquee-left" style={{ animationDelay: '-4s' }}>
              {ROW_3.map((d, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap flex-shrink-0 px-4 py-2 rounded-sm text-sm font-sans"
                  style={{
                    border: '1px solid rgba(246,247,241,0.10)',
                    backgroundColor: 'transparent',
                    color: 'rgba(215,222,228,0.60)',
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
