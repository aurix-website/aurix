import type { ElementType } from 'react'
import { Building2, CalendarClock, HelpCircle, LayoutGrid, Users } from 'lucide-react'
import type { Localized } from './i18n/types'

export interface FaqItem {
  question: Localized<string>
  answer: Localized<string>
}

export interface FaqCategory {
  id: string
  title: Localized<string>
  icon: ElementType
  items: FaqItem[]
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'genel',
    title: { tr: 'Genel', en: 'General' },
    icon: HelpCircle,
    items: [
      {
        question: {
          tr: 'Koçluk süreci terapi yerine geçer mi?',
          en: 'Does coaching replace therapy?',
        },
        answer: {
          tr: 'Hayır. AURIX’te koçluk ve danışmanlık süreçleri psikoterapi, tıbbi tedavi veya klinik müdahalenin yerine geçmez. Gerektiğinde ilgili uzmanlık alanlarına yönlendirme yapılması önemsenir.',
          en: 'No. At AURIX, coaching and consulting processes do not replace psychotherapy, medical treatment, or clinical intervention. Referral to the relevant area of expertise is taken seriously whenever needed.',
        },
      },
      {
        question: {
          tr: 'Hangi hizmetin bana uygun olduğunu nasıl anlayacağım?',
          en: 'How do I know which service is right for me?',
        },
        answer: {
          tr: 'Ön görüşmede ihtiyacınızı, hedefinizi ve beklentinizi birlikte değerlendiririz. Buna göre sizi uygun hizmet alanı ve uzmanla eşleştiririz. Emin değilseniz form üzerinde "Emin Değilim" seçeneğini işaretlemeniz yeterlidir.',
          en: 'In the introductory call, we assess your need, goal, and expectations together. Based on that, we match you with the right service area and expert. If you’re not sure, simply select "Not Sure" on the form.',
        },
      },
      {
        question: {
          tr: 'Görüşmeler online yapılabilir mi?',
          en: 'Can sessions be held online?',
        },
        answer: {
          tr: 'Evet. Uzman ve hizmet alanına göre online görüşme seçenekleri değerlendirilebilir. Kurumsal eğitimlerde yüz yüze veya hibrit seçenekler ayrıca planlanabilir.',
          en: 'Yes. Online session options can be arranged depending on the expert and service area. For corporate training, in-person or hybrid formats can also be planned.',
        },
      },
      {
        question: {
          tr: 'Bilgilerim güvende mi?',
          en: 'Is my information kept secure?',
        },
        answer: {
          tr: 'Paylaştığınız bilgiler yalnızca talebinizin değerlendirilmesi ve sizinle iletişime geçilmesi amacıyla işlenir. Detaylar için KVKK Aydınlatma Metni’ni inceleyebilirsiniz.',
          en: 'The information you share is processed solely to evaluate your request and to contact you. See our Privacy Notice for details.',
        },
      },
    ],
  },
  {
    id: 'hizmetler',
    title: { tr: 'Hizmetler', en: 'Services' },
    icon: LayoutGrid,
    items: [
      {
        question: {
          tr: 'Kurumsal eğitimler hazır paket mi?',
          en: 'Is corporate training a ready-made package?',
        },
        answer: {
          tr: 'Hayır. Kurumsal eğitimlerde önce kurumun ihtiyacı analiz edilir. Ardından hedef kitleye, kurumsal yapıya ve gelişim beklentisine uygun program tasarlanır.',
          en: 'No. For corporate training, the organization’s need is analyzed first. A program is then designed to fit the target audience, organizational structure, and development goals.',
        },
      },
      {
        question: {
          tr: 'Öğrenci koçluğu sadece sınava hazırlık için mi?',
          en: 'Is student coaching only for exam preparation?',
        },
        answer: {
          tr: 'Hayır. Öğrenci koçluğu sınav stratejisinin yanında hedef belirleme, motivasyon, zaman yönetimi, çalışma düzeni ve kariyer farkındalığı gibi alanlara da odaklanır.',
          en: 'No. Alongside exam strategy, student coaching also focuses on goal-setting, motivation, time management, study routine, and career awareness.',
        },
      },
      {
        question: {
          tr: 'Birden fazla hizmet alanında birlikte destek alabilir miyim?',
          en: 'Can I get support in more than one service area at the same time?',
        },
        answer: {
          tr: 'İhtiyaca göre mümkündür. Örneğin bireysel koçluk ile kariyer koçluğu, ya da kurumsal eğitim ile takım koçluğu aynı süreçte bir arada değerlendirilebilir.',
          en: 'This is possible depending on your need. Personal coaching and career coaching, for example, or corporate training and team coaching, can be considered together within the same process.',
        },
      },
    ],
  },
  {
    id: 'uzmanlar',
    title: { tr: 'Uzmanlar', en: 'Experts' },
    icon: Users,
    items: [
      {
        question: {
          tr: 'Doğrudan bir uzman seçebilir miyim?',
          en: 'Can I choose an expert directly?',
        },
        answer: {
          tr: 'Evet. Uzman profillerini inceleyerek doğrudan ilgili uzman için ön görüşme talep edebilirsiniz. Emin değilseniz AURIX ekibi uygun eşleşme konusunda size rehberlik eder.',
          en: 'Yes. After reviewing expert profiles, you can request an introductory call directly with the expert you have in mind. If you’re not sure, the AURIX team will guide you toward the right match.',
        },
      },
      {
        question: {
          tr: 'Birden fazla uzmanla çalışmak mümkün mü?',
          en: 'Is it possible to work with more than one expert?',
        },
        answer: {
          tr: 'İhtiyaca göre mümkündür. Örneğin bireysel koçluk, kurumsal eğitim veya global uyum gibi farklı alanlarda farklı uzmanların sürece dahil olması değerlendirilebilir.',
          en: 'This is possible depending on your need. Different experts can be involved in the process across different areas — personal coaching, corporate training, or global adaptation, for example.',
        },
      },
      {
        question: {
          tr: 'Uzman profillerindeki bilgiler nasıl kullanılmalı?',
          en: 'How should the information in expert profiles be used?',
        },
        answer: {
          tr: 'Uzman profilleri, kişinin eğitimini, deneyimini, çalışma alanlarını ve yaklaşımını tanımak için hazırlanmıştır. Nihai eşleşme, ön görüşmede ihtiyacın netleşmesiyle yapılır.',
          en: 'Expert profiles are prepared to help you get to know a person’s education, experience, areas of work, and approach. The final match is made once your need becomes clear during the introductory call.',
        },
      },
    ],
  },
  {
    id: 'on-gorusme',
    title: { tr: 'Ön Görüşme ve İletişim', en: 'Introductory Call and Contact' },
    icon: CalendarClock,
    items: [
      {
        question: {
          tr: 'Ön görüşme ücretli mi?',
          en: 'Is the introductory call paid?',
        },
        answer: {
          tr: 'Ön görüşmenin kapsamı ve koşulları AURIX tarafından belirlenir. İlk temas sürecinde görüşmenin içeriği, süresi ve sonraki adımlar hakkında bilgilendirme yapılır.',
          en: 'The scope and terms of the introductory call are set by AURIX. During the first contact, you will be informed about the content, duration, and next steps of the call.',
        },
      },
      {
        question: {
          tr: 'Formu doldurduktan sonra ne olacak?',
          en: 'What happens after I submit the form?',
        },
        answer: {
          tr: 'Talebiniz AURIX ekibi tarafından incelenir. İhtiyacınıza göre size uygun hizmet, uzman veya ön görüşme süreci hakkında dönüş yapılır.',
          en: 'Your request is reviewed by the AURIX team. You will hear back about the service, expert, or introductory call process that fits your need.',
        },
      },
      {
        question: {
          tr: 'Ön görüşmede ne konuşulur?',
          en: 'What is discussed in the introductory call?',
        },
        answer: {
          tr: 'Destek almak istediğiniz alan, mevcut ihtiyacınız, beklentileriniz, uygun hizmet seçenekleri ve olası uzman eşleşmesi değerlendirilir.',
          en: 'We discuss the area you want support in, your current need, your expectations, suitable service options, and a possible expert match.',
        },
      },
    ],
  },
  {
    id: 'kurumsal',
    title: { tr: 'Kurumsal', en: 'Corporate' },
    icon: Building2,
    items: [
      {
        question: {
          tr: 'Kurumsal eğitimler için nasıl iletişime geçmeliyim?',
          en: 'How should I get in touch about corporate training?',
        },
        answer: {
          tr: 'Kurumsal eğitim taleplerinde kurumunuzun ihtiyacını, hedef kitlenizi ve beklenen gelişim alanlarını kısaca paylaşmanız yeterlidir. AURIX ekibi ihtiyaç analizi için sizinle iletişime geçer.',
          en: 'For corporate training requests, simply share a short summary of your organization’s need, your target audience, and the expected development areas. The AURIX team will contact you for a needs analysis.',
        },
      },
      {
        question: {
          tr: 'Kurumsal eğitim için de ön görüşme formunu kullanabilir miyim?',
          en: 'Can I use the introductory-call form for corporate training too?',
        },
        answer: {
          tr: 'Evet. Kurumsal eğitim seçeneğini işaretleyerek kurumunuzun ihtiyacını paylaşabilirsiniz. AURIX ekibi ihtiyaç analizi için sizinle iletişime geçer.',
          en: 'Yes. Select the corporate training option to share your organization’s need. The AURIX team will contact you for a needs analysis.',
        },
      },
    ],
  },
]

export const ALL_FAQ_ITEMS: FaqItem[] = FAQ_CATEGORIES.flatMap((category) => category.items)
