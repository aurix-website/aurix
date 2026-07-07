import type { ElementType } from 'react'
import { Building2, CalendarClock, HelpCircle, LayoutGrid, Users } from 'lucide-react'

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqCategory {
  id: string
  title: string
  icon: ElementType
  items: FaqItem[]
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'genel',
    title: 'Genel',
    icon: HelpCircle,
    items: [
      {
        question: 'Koçluk süreci terapi yerine geçer mi?',
        answer:
          'Hayır. AURIX’te koçluk ve danışmanlık süreçleri psikoterapi, tıbbi tedavi veya klinik müdahalenin yerine geçmez. Gerektiğinde ilgili uzmanlık alanlarına yönlendirme yapılması önemsenir.',
      },
      {
        question: 'Hangi hizmetin bana uygun olduğunu nasıl anlayacağım?',
        answer:
          'Ön görüşmede ihtiyacınızı, hedefinizi ve beklentinizi birlikte değerlendiririz. Buna göre sizi uygun hizmet alanı ve uzmanla eşleştiririz. Emin değilseniz form üzerinde "Emin Değilim" seçeneğini işaretlemeniz yeterlidir.',
      },
      {
        question: 'Görüşmeler online yapılabilir mi?',
        answer:
          'Evet. Uzman ve hizmet alanına göre online görüşme seçenekleri değerlendirilebilir. Kurumsal eğitimlerde yüz yüze veya hibrit seçenekler ayrıca planlanabilir.',
      },
      {
        question: 'Bilgilerim güvende mi?',
        answer:
          'Paylaştığınız bilgiler yalnızca talebinizin değerlendirilmesi ve sizinle iletişime geçilmesi amacıyla işlenir. Detaylar için KVKK Aydınlatma Metni’ni inceleyebilirsiniz.',
      },
    ],
  },
  {
    id: 'hizmetler',
    title: 'Hizmetler',
    icon: LayoutGrid,
    items: [
      {
        question: 'Kurumsal eğitimler hazır paket mi?',
        answer:
          'Hayır. Kurumsal eğitimlerde önce kurumun ihtiyacı analiz edilir. Ardından hedef kitleye, kurumsal yapıya ve gelişim beklentisine uygun program tasarlanır.',
      },
      {
        question: 'Öğrenci koçluğu sadece sınava hazırlık için mi?',
        answer:
          'Hayır. Öğrenci koçluğu sınav stratejisinin yanında hedef belirleme, motivasyon, zaman yönetimi, çalışma düzeni ve kariyer farkındalığı gibi alanlara da odaklanır.',
      },
      {
        question: 'Birden fazla hizmet alanında birlikte destek alabilir miyim?',
        answer:
          'İhtiyaca göre mümkündür. Örneğin bireysel koçluk ile kariyer koçluğu, ya da kurumsal eğitim ile takım koçluğu aynı süreçte bir arada değerlendirilebilir.',
      },
    ],
  },
  {
    id: 'uzmanlar',
    title: 'Uzmanlar',
    icon: Users,
    items: [
      {
        question: 'Doğrudan bir uzman seçebilir miyim?',
        answer:
          'Evet. Uzman profillerini inceleyerek doğrudan ilgili uzman için ön görüşme talep edebilirsiniz. Emin değilseniz AURIX ekibi uygun eşleşme konusunda size rehberlik eder.',
      },
      {
        question: 'Birden fazla uzmanla çalışmak mümkün mü?',
        answer:
          'İhtiyaca göre mümkündür. Örneğin bireysel koçluk, kurumsal eğitim veya global uyum gibi farklı alanlarda farklı uzmanların sürece dahil olması değerlendirilebilir.',
      },
      {
        question: 'Uzman profillerindeki bilgiler nasıl kullanılmalı?',
        answer:
          'Uzman profilleri, kişinin eğitimini, deneyimini, çalışma alanlarını ve yaklaşımını tanımak için hazırlanmıştır. Nihai eşleşme, ön görüşmede ihtiyacın netleşmesiyle yapılır.',
      },
    ],
  },
  {
    id: 'on-gorusme',
    title: 'Ön Görüşme ve İletişim',
    icon: CalendarClock,
    items: [
      {
        question: 'Ön görüşme ücretli mi?',
        answer:
          'Ön görüşmenin kapsamı ve koşulları AURIX tarafından belirlenir. İlk temas sürecinde görüşmenin içeriği, süresi ve sonraki adımlar hakkında bilgilendirme yapılır.',
      },
      {
        question: 'Formu doldurduktan sonra ne olacak?',
        answer:
          'Talebiniz AURIX ekibi tarafından incelenir. İhtiyacınıza göre size uygun hizmet, uzman veya ön görüşme süreci hakkında dönüş yapılır.',
      },
      {
        question: 'Ön görüşmede ne konuşulur?',
        answer:
          'Destek almak istediğiniz alan, mevcut ihtiyacınız, beklentileriniz, uygun hizmet seçenekleri ve olası uzman eşleşmesi değerlendirilir.',
      },
    ],
  },
  {
    id: 'kurumsal',
    title: 'Kurumsal',
    icon: Building2,
    items: [
      {
        question: 'Kurumsal eğitimler için nasıl iletişime geçmeliyim?',
        answer:
          'Kurumsal eğitim taleplerinde kurumunuzun ihtiyacını, hedef kitlenizi ve beklenen gelişim alanlarını kısaca paylaşmanız yeterlidir. AURIX ekibi ihtiyaç analizi için sizinle iletişime geçer.',
      },
      {
        question: 'Kurumsal eğitim için de ön görüşme formunu kullanabilir miyim?',
        answer:
          'Evet. Kurumsal eğitim seçeneğini işaretleyerek kurumunuzun ihtiyacını paylaşabilirsiniz. AURIX ekibi ihtiyaç analizi için sizinle iletişime geçer.',
      },
    ],
  },
]

export const ALL_FAQ_ITEMS: FaqItem[] = FAQ_CATEGORIES.flatMap((category) => category.items)
