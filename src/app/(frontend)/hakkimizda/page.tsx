import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { LineDraw } from '@/components/ui/LineDraw'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { APPROACH_STEPS } from '@/lib/approach-steps-data'
import { STATIC_EXPERTS } from '@/lib/experts-data'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'AURIX; farklı uzmanlık alanlarından gelen profesyonellerin deneyimini tek bir gelişim çatısı altında buluşturan koçluk ve danışmanlık platformudur.',
}

const WHY_AURIX = [
  {
    title: 'Çok Disiplinli Bakış',
    description:
      'AURIX uzman kadrosu; sağlık, eğitim, insan kaynakları, liderlik, finans, kariyer, global yaşam ve kurumsal dönüşüm gibi farklı alanlardan gelen profesyonellerden oluşur.',
  },
  {
    title: 'Doğru Uzman Eşleşmesi',
    description:
      'Ön görüşme sürecinde ihtiyacınızı anlamaya, ardından sizi en uygun hizmet alanı ve uzmanla eşleştirmeye odaklanırız.',
  },
  {
    title: 'Yapılandırılmış Süreç',
    description:
      'Koçluk ve danışmanlığı rastgele görüşmeler dizisi olarak değil; ihtiyaç analizi, hedef netliği, süreç tasarımı ve takip adımlarından oluşan profesyonel bir gelişim deneyimi olarak ele alırız.',
  },
]

const VALUES = [
  {
    title: 'Netlik',
    description: 'Her sürecin başlangıcında danışanın gerçek ihtiyacını ve hedefini anlamaya odaklanırız.',
  },
  {
    title: 'Güven',
    description: 'Koçluk ve danışmanlık sürecinde açıklık, gizlilik ve etik sınırlar bizim için temel ilkedir.',
  },
  {
    title: 'Uygun Eşleşme',
    description: 'Her danışanı aynı hizmete yönlendirmek yerine, ihtiyacına en uygun uzman ve süreçle buluştururuz.',
  },
  {
    title: 'Sürdürülebilir Gelişim',
    description: 'Kısa süreli motivasyon yerine, uygulanabilir ve sürdürülebilir gelişim adımlarına odaklanırız.',
  },
  {
    title: 'Çok Disiplinli Bakış',
    description: 'Farklı mesleki deneyimleri tek bir gelişim çatısı altında birleştiririz.',
  },
]

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hakkimizda-hero-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-6">
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase">
                Hakkımızda
              </span>
              <h1
                id="hakkimizda-hero-heading"
                className="font-serif text-ink tracking-tight text-display-lg"
              >
                Daha bilinçli kararlar ve sürdürülebilir gelişim için kurulmuş çok disiplinli bir
                koçluk platformu.
              </h1>
              <p className="text-body-md text-muted leading-relaxed max-w-xl">
                AURIX Koçluk ve Danışmanlık, Kaan Yazıcı liderliğinde; bireylerin, yöneticilerin,
                kurumların ve öğrencilerin gelişim yolculuklarına yapılandırılmış koçluk ve
                danışmanlık süreçleriyle eşlik etmek için kurulmuştur.
              </p>
              <p className="text-body-sm text-body leading-relaxed max-w-xl">
                Her danışanın ihtiyacını ayrı ele alır, doğru hizmet alanı ve uygun uzman
                eşleşmesiyle süreci birlikte tasarlarız.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/on-gorusme"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Ön Görüşme Talep Et
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/uzmanlar"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-[#14797C] text-[#14797C] hover:bg-[#14797C]/5 text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
                >
                  Uzman Kadromuzu Tanıyın
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kurucu hikâyesi */}
      <section aria-labelledby="founder-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-3xl flex flex-col gap-5">
              <span className="text-[11px] font-mono tracking-widest text-[#C5A059] font-bold uppercase">
                Kurucu Hikâyesi
              </span>
              <h2 id="founder-heading" className="text-display-lg font-semibold text-ink">
                Kurucumuz Kaan Yazıcı’nın yolculuğu
              </h2>
              <p className="text-body-md text-body leading-relaxed">
                AURIX’in kurucu hikâyesi, insanı yalnızca mesleki başarılarıyla değil; zihinsel,
                duygusal ve sosyal bütünlüğüyle ele alma fikrine dayanır.
              </p>
              <p className="text-body-md text-body leading-relaxed">
                Kaan Yazıcı, sağlık alanındaki uzun yıllara dayanan profesyonel deneyimini, kamu
                yönetimi perspektifi ve profesyonel koçluk yaklaşımıyla birleştirerek insanların ve
                takımların potansiyellerini daha bilinçli şekilde ortaya çıkarmalarına eşlik etmeyi
                amaçlamıştır.
              </p>
              <p className="text-body-md text-body leading-relaxed">
                Diş hekimliği mesleğinde insanlarla kurduğu derin bağlar, ona gelişimin yalnızca
                bilgiyle değil; doğru rehberlik, içsel motivasyon ve yapılandırılmış süreçlerle
                mümkün olduğunu göstermiştir. Bu farkındalık, AURIX’in temel yaklaşımının da çıkış
                noktasıdır.
              </p>
              <Link
                href="/uzmanlar/kaan-yazici"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
              >
                Kaan Yazıcı’yı Tanıyın
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Neden AURIX */}
      <section aria-labelledby="why-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="mb-10 max-w-2xl">
              <h2 id="why-heading" className="text-display-lg font-semibold text-ink">
                Neden AURIX?
              </h2>
              <p className="mt-3 text-body-md text-muted leading-relaxed">
                Çünkü gelişim yolculuğu tek bir reçeteye indirgenemez. Her bireyin, liderin,
                kurumun ve öğrencinin ihtiyacı farklıdır. AURIX, bu farklı ihtiyaçlara tek tip
                çözümlerle değil; uzmanlık, deneyim ve doğru eşleşme mantığıyla yaklaşır.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {WHY_AURIX.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-surface-elevated border border-hairline rounded-sm p-6 flex flex-col gap-2"
                >
                  <span className="text-xs font-mono font-bold text-[#C5A059]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-lg text-ink">{item.title}</h3>
                  <p className="text-body-sm text-body leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <Link
            href="#approach-heading"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
          >
            AURIX Yaklaşımını İncele
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* AURIX Yaklaşımı — kanonik 5 adım, ApproachSteps.tsx ile aynı kaynak */}
      <section
        id="approach-heading"
        aria-labelledby="approach-heading-title"
        className="py-section bg-surface-soft scroll-mt-24"
      >
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="mb-10 max-w-2xl">
              <h2 id="approach-heading-title" className="text-display-lg font-semibold text-ink">
                Doğru ihtiyaç, doğru uzman, doğru süreç.
              </h2>
              <p className="mt-3 text-body-md text-muted leading-relaxed">
                AURIX’te her süreç, önce danışanın ihtiyacını anlamakla başlar. Kişinin
                yaşamında, kariyerinde, eğitiminde ya da liderlik rolünde neye ihtiyaç duyduğu
                netleştirilmeden doğrudan hizmet önerilmez.
              </p>
            </div>
          </FadeIn>

          <LineDraw className="mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
            {APPROACH_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col gap-3">
                <span className="font-mono text-caption font-medium text-muted-soft tracking-widest">
                  {step.number}
                </span>
                <div className="w-8 h-px bg-ink" aria-hidden="true" />
                <h3 className="text-title-sm font-semibold text-ink">{step.title}</h3>
                <p className="text-body-sm text-body leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/on-gorusme"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#14797C] hover:bg-[#0f5f62] text-white text-sm font-semibold rounded-sm transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A9CA0]"
          >
            Ön Görüşme Talep Et
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Çok disiplinli uzman kadrosu */}
      <section aria-labelledby="team-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl flex flex-col gap-4 mb-8">
              <h2 id="team-heading" className="text-display-lg font-semibold text-ink">
                Farklı uzmanlıklar, tek bir gelişim çatısı altında.
              </h2>
              <p className="text-body-md text-muted leading-relaxed">
                AURIX’in gücü, farklı mesleki geçmişlerden gelen uzmanların ortak bir gelişim
                yaklaşımı altında buluşmasından gelir. Ekip; bireysel koçluk, yönetici koçluğu,
                kurumsal eğitim, öğrenci koçluğu, kariyer gelişimi ve global uyum gibi farklı
                ihtiyaçlara yönelik uzmanlıklar sunar.
              </p>
              <p className="text-body-sm text-body leading-relaxed">
                Bu yapı sayesinde AURIX, danışanları tek bir bakış açısına sıkıştırmaz. Her
                ihtiyacı kendi bağlamında değerlendirir ve uygun uzmanlıkla buluşturur.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="flex flex-wrap gap-3 mb-8" aria-label="AURIX uzman kadrosu">
              {STATIC_EXPERTS.map((expert) => (
                <li key={expert.id}>
                  <Link
                    href={`/uzmanlar/${expert.slug}`}
                    className="inline-flex items-center gap-2 bg-surface-elevated border border-hairline rounded-sm px-4 py-2.5 hover:border-[#14797C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2"
                  >
                    <span className="text-sm font-semibold text-ink">{expert.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <Link
            href="/uzmanlar"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#14797C] hover:text-[#C5A059] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1A9CA0] focus-visible:outline-offset-2 rounded-sm"
          >
            Uzman Kadromuzu Tanıyın
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Değerler */}
      <section aria-labelledby="values-heading" className="py-section bg-surface-soft">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <h2 id="values-heading" className="text-display-lg font-semibold text-ink mb-10">
              AURIX değerleri
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="bg-surface-elevated border border-hairline rounded-sm p-6 flex flex-col gap-2"
                >
                  <h3 className="font-serif text-lg text-ink">{value.title}</h3>
                  <p className="text-body-sm text-body leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Etik ve profesyonel sınırlar */}
      <section aria-labelledby="ethics-heading" className="py-section bg-canvas">
        <div className="max-w-container mx-auto px-6">
          <FadeIn>
            <div className="max-w-2xl bg-surface-dark rounded-sm p-8">
              <h2 id="ethics-heading" className="font-serif text-xl text-on-dark mb-3">
                Etik ve profesyonel sınırlar
              </h2>
              <p className="text-body-sm text-on-dark-soft leading-relaxed mb-4">
                AURIX’te koçluk ve danışmanlık süreçleri; bireyin veya kurumun gelişim hedeflerine
                eşlik eden profesyonel süreçlerdir. Bu süreçler psikoterapi, tıbbi tedavi veya
                klinik müdahalenin yerine geçmez.
              </p>
              <p className="text-body-sm text-on-dark-soft leading-relaxed mb-4">
                Danışanın ihtiyacının farklı bir uzmanlık alanına yönlendirme gerektirdiği
                durumlarda, bu sınırlar açık ve sorumlu biçimde gözetilir.
              </p>
              <p className="text-body-sm text-brand-accent leading-relaxed font-semibold">
                Gizlilik, açıklık ve profesyonel sorumluluk AURIX yaklaşımının ayrılmaz
                parçalarıdır.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
