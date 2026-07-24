import type { ElementType } from 'react'
import { Compass, Target, Eye, Scale, Signpost, Gem } from 'lucide-react'
import type { Localized } from './i18n/types'

export interface ServiceDetailNeed {
  title: Localized<string>
  description: Localized<string>
}

export interface ServiceDetailAudienceItem {
  icon: ElementType
  title: Localized<string>
  description: Localized<string>
}

export interface ServiceDetailStep {
  number: string
  title: Localized<string>
  description: Localized<string>
}

export interface ServiceDetailExtra {
  heading: Localized<string>
  body: Localized<string>
}

export interface ServiceDetail {
  slug: string
  serviceId: string
  heroImage?: string
  eyebrow: Localized<string>
  h1: Localized<string>
  heroSubtitle: Localized<string>
  introText: Localized<string>
  primaryCta: Localized<string>
  secondaryCta: Localized<string>
  audienceHeading: Localized<string>
  audienceIntro: Localized<string>
  audienceItems: ServiceDetailAudienceItem[]
  audienceClosing: Localized<string>
  audienceCtaLabel: Localized<string>
  audienceSecondaryLabel: Localized<string>
  needsHeading: Localized<string>
  needs: ServiceDetailNeed[]
  extra?: ServiceDetailExtra
  processHeading: Localized<string>
  processIntro: Localized<string>
  processSteps: ServiceDetailStep[]
  ctaHeading: Localized<string>
  ctaText: Localized<string>
  ctaButton: Localized<string>
  seoTitle: Localized<string>
  seoDescription: Localized<string>
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'bireysel-kocluk': {
    slug: 'bireysel-kocluk',
    serviceId: 'bireysel-kocluk',
    eyebrow: { tr: 'Bireysel Koçluk', en: 'Personal Coaching' },
    h1: { tr: 'Bireysel Koçluk', en: 'Personal Coaching' },
    heroSubtitle: {
      tr: 'Yaşamınızda daha fazla netlik, denge ve yön arıyorsanız, bireysel koçluk süreci hedeflerinizi yapılandırmanıza ve iç kaynaklarınızı daha bilinçli kullanmanıza destek olur.',
      en: 'If you are looking for more clarity, balance, and direction in your life, personal coaching helps you structure your goals and use your inner resources more consciously.',
    },
    introText: {
      tr: 'AURIX’te bireysel koçluk, hazır cevaplar sunan bir yönlendirme süreci değildir. Kişinin kendi hedeflerini, değerlerini, güçlü yönlerini ve karar alanlarını daha berrak görmesine eşlik eden yapılandırılmış bir gelişim sürecidir.',
      en: 'At AURIX, personal coaching is not a guidance process that hands you ready-made answers. It is a structured development process that accompanies you toward a clearer view of your own goals, values, strengths, and areas of decision.',
    },
    primaryCta: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    secondaryCta: { tr: 'Bireysel Koçluk Sürecini Keşfet', en: 'Explore the Personal Coaching Process' },
    audienceHeading: { tr: 'Bireysel koçluk sana uygun mu?', en: 'Is personal coaching right for you?' },
    audienceIntro: {
      tr: 'Bireysel koçluk; hayatında netlik, yön ve farkındalık arayan kişiler için yapılandırılmış bir gelişim sürecidir. Amacı sana hazır cevaplar vermek değil; kendi cevaplarını daha bilinçli, güçlü ve uygulanabilir şekilde bulmana eşlik etmektir.',
      en: 'Personal coaching is a structured development process for people seeking clarity, direction, and awareness in their life. Its purpose is not to give you ready-made answers, but to accompany you toward finding your own answers in a more conscious, confident, and actionable way.',
    },
    audienceItems: [
      {
        icon: Signpost,
        title: { tr: 'Karar eşiğindeysen', en: 'You’re at a decision point' },
        description: {
          tr: 'Önemli bir seçim öncesinde seçeneklerini daha sağlıklı değerlendirmek istiyorsan.',
          en: 'If you want to evaluate your options more soundly before an important choice.',
        },
      },
      {
        icon: Compass,
        title: { tr: 'Yeni bir başlangıç arıyorsan', en: 'You’re looking for a new beginning' },
        description: {
          tr: 'Kariyer, ilişki, yaşam tarzı veya kişisel gelişim alanında yön değiştirmek istiyorsan.',
          en: 'If you want to change direction in your career, relationships, lifestyle, or personal growth.',
        },
      },
      {
        icon: Eye,
        title: { tr: 'Kendini daha iyi tanımak istiyorsan', en: 'You want to know yourself better' },
        description: {
          tr: 'Güçlü yanlarını, değerlerini ve tekrar eden davranış kalıplarını fark etmek istiyorsan.',
          en: 'If you want to notice your strengths, your values, and your recurring behavior patterns.',
        },
      },
      {
        icon: Target,
        title: { tr: 'Hedeflerini netleştirmek istiyorsan', en: 'You want to clarify your goals' },
        description: {
          tr: 'Dağınık düşünceleri somut hedeflere ve uygulanabilir adımlara dönüştürmek istiyorsan.',
          en: 'If you want to turn scattered thoughts into concrete goals and actionable steps.',
        },
      },
      {
        icon: Scale,
        title: { tr: 'Daha dengeli ilerlemek istiyorsan', en: 'You want to move forward with more balance' },
        description: {
          tr: 'İş, özel hayat ve kişisel ihtiyaçların arasında sürdürülebilir bir denge kurmak istiyorsan.',
          en: 'If you want to build a sustainable balance between work, personal life, and your own needs.',
        },
      },
      {
        icon: Gem,
        title: { tr: 'İç kaynaklarını güçlendirmek istiyorsan', en: 'You want to strengthen your inner resources' },
        description: {
          tr: 'Öz güven, motivasyon, farkındalık ve karar alma becerilerini geliştirmek istiyorsan.',
          en: 'If you want to develop your self-confidence, motivation, awareness, and decision-making skills.',
        },
      },
    ],
    audienceClosing: {
      tr: 'Nereden başlayacağını bilmiyorsan, ilk adım netleşmektir.',
      en: 'If you don’t know where to start, the first step is gaining clarity.',
    },
    audienceCtaLabel: { tr: 'Ön Görüşme Planla', en: 'Schedule an Introductory Call' },
    audienceSecondaryLabel: { tr: 'Koçluk Süreci Nasıl İşler?', en: 'How Does the Coaching Process Work?' },
    needsHeading: { tr: 'Bireysel koçluk hangi ihtiyaçlara destek olur?', en: 'What needs does personal coaching support?' },
    needs: [
      {
        title: { tr: 'Hedef Netliği', en: 'Goal Clarity' },
        description: {
          tr: 'Ne istediğinizi, hangi yöne ilerlemek istediğinizi ve hangi hedeflerin sizin için anlamlı olduğunu daha berrak görmenize yardımcı olur.',
          en: 'Helps you see more clearly what you want, which direction you want to move in, and which goals are genuinely meaningful to you.',
        },
      },
      {
        title: { tr: 'Karar Farkındalığı', en: 'Decision Awareness' },
        description: {
          tr: 'Karar süreçlerinizi etkileyen düşünce kalıplarını, önceliklerinizi ve seçeneklerinizi daha bilinçli değerlendirmenizi destekler.',
          en: 'Supports a more conscious evaluation of the thought patterns, priorities, and options that shape your decisions.',
        },
      },
      {
        title: { tr: 'Kişisel Farkındalık', en: 'Personal Awareness' },
        description: {
          tr: 'Güçlü yönlerinizi, değerlerinizi, motivasyon kaynaklarınızı ve gelişim alanlarınızı fark etmenize alan açar.',
          en: 'Creates space to recognize your strengths, values, sources of motivation, and areas for growth.',
        },
      },
      {
        title: { tr: 'Yaşam Geçişleri', en: 'Life Transitions' },
        description: {
          tr: 'Yeni bir dönem, kariyer değişimi, şehir/ülke değişimi veya kişisel dönüşüm sürecinde yönünüzü daha sağlıklı belirlemenize destek olur.',
          en: 'Supports a healthier sense of direction during a new phase of life, a career change, a move to a new city or country, or a personal transformation.',
        },
      },
      {
        title: { tr: 'Uygulanabilir Adımlar', en: 'Actionable Steps' },
        description: {
          tr: 'Süreci yalnızca farkındalıkla sınırlı bırakmaz; hedeflerinize uygun somut ve uygulanabilir adımlar oluşturmanıza yardımcı olur.',
          en: 'Doesn’t stop at awareness alone; helps you build concrete, actionable steps aligned with your goals.',
        },
      },
    ],
    processHeading: { tr: 'Bireysel koçluk süreci nasıl ilerler?', en: 'How does the personal coaching process work?' },
    processIntro: { tr: '', en: '' },
    processSteps: [
      {
        number: '01',
        title: { tr: 'Ön Görüşme', en: 'Introductory Call' },
        description: {
          tr: 'İhtiyacınızı, beklentinizi ve destek almak istediğiniz alanı anlamaya odaklanırız.',
          en: 'We focus on understanding your need, your expectations, and the area you want support in.',
        },
      },
      {
        number: '02',
        title: { tr: 'İhtiyaç ve Hedef Analizi', en: 'Needs and Goal Analysis' },
        description: {
          tr: 'Mevcut durumunuzu, hedeflerinizi ve öncelikli gelişim alanlarınızı birlikte netleştiririz.',
          en: 'We clarify your current situation, your goals, and your priority areas for growth together.',
        },
      },
      {
        number: '03',
        title: { tr: 'Uygun Uzman Eşleşmesi', en: 'The Right Expert Match' },
        description: {
          tr: 'İhtiyacınıza ve beklentinize göre size en uygun AURIX uzmanını belirleriz.',
          en: 'We identify the AURIX expert best suited to your need and expectations.',
        },
      },
      {
        number: '04',
        title: { tr: 'Yol Haritası', en: 'Roadmap' },
        description: {
          tr: 'Görüşme sıklığı, süreç hedefleri ve odak alanları birlikte planlanır.',
          en: 'Session frequency, process goals, and focus areas are planned together.',
        },
      },
      {
        number: '05',
        title: { tr: 'Koçluk Görüşmeleri', en: 'Coaching Sessions' },
        description: {
          tr: 'Farkındalık, hedef netliği ve uygulanabilir gelişim adımları üzerine çalışılır.',
          en: 'We work on awareness, goal clarity, and actionable steps for growth.',
        },
      },
      {
        number: '06',
        title: { tr: 'Değerlendirme', en: 'Evaluation' },
        description: {
          tr: 'Süreç sonunda kazanımlar, ilerleme alanları ve devam adımları gözden geçirilir.',
          en: 'At the end of the process, we review what was gained, areas of progress, and next steps.',
        },
      },
    ],
    ctaHeading: { tr: 'Kendi sürecinizi netleştirmek ister misiniz?', en: 'Want to clarify your own process?' },
    ctaText: {
      tr: 'Hangi konuda destek almak istediğinizden emin değilseniz, kısa bir ön görüşme ile ihtiyacınızı birlikte değerlendirebilir ve size uygun bireysel koçluk sürecini belirleyebiliriz.',
      en: 'If you’re not sure what kind of support you need, a short introductory call lets us assess your need together and determine the right personal coaching process for you.',
    },
    ctaButton: { tr: 'Bireysel Koçluk İçin Ön Görüşme Talep Et', en: 'Request an Introductory Call for Personal Coaching' },
    seoTitle: { tr: 'Bireysel Koçluk', en: 'Personal Coaching' },
    seoDescription: {
      tr: 'AURIX bireysel koçluk süreci; hedef netliği, karar farkındalığı, kişisel gelişim ve yaşam geçişlerinde yapılandırılmış destek sunar.',
      en: 'AURIX personal coaching offers structured support for goal clarity, decision awareness, personal growth, and life transitions.',
    },
  },

  'yonetici-koclugu': {
    slug: 'yonetici-koclugu',
    serviceId: 'yonetici-koclugu',
    eyebrow: { tr: 'Yönetici Koçluğu', en: 'Executive Coaching' },
    h1: { tr: 'Yönetici Koçluğu', en: 'Executive Coaching' },
    heroSubtitle: {
      tr: 'Liderlik rolünüzü daha bilinçli yönetmek, karar alma kalitenizi artırmak ve ekiplerinizle daha etkili çalışmak için yapılandırılmış koçluk süreci.',
      en: 'A structured coaching process to lead your role more consciously, strengthen the quality of your decisions, and work more effectively with your teams.',
    },
    introText: {
      tr: 'AURIX yönetici koçluğu, liderlerin yalnızca hedeflerine değil; karar alma biçimlerine, iletişim kalitelerine, ekipleriyle kurdukları güven ilişkisine ve değişim dönemlerindeki liderlik etkilerine odaklanır.',
      en: 'AURIX executive coaching focuses not only on a leader’s goals, but on how they make decisions, the quality of their communication, the trust they build with their team, and their leadership impact during periods of change.',
    },
    primaryCta: { tr: 'Yönetici Koçluğu İçin Görüşme Planla', en: 'Schedule a Call for Executive Coaching' },
    secondaryCta: { tr: 'AURIX Yaklaşımını İncele', en: 'Explore the AURIX Approach' },
    audienceHeading: { tr: 'Yönetici koçluğu sana uygun mu?', en: 'Is executive coaching right for you?' },
    audienceIntro: {
      tr: 'Yönetici koçluğu; liderlik rolünde daha bilinçli, tutarlı ve sürdürülebilir bir etki oluşturmak isteyen profesyoneller için yapılandırılmış bir gelişim sürecidir. Amacı hazır formüller sunmak değil; kendi liderlik tarzını daha net ve güçlü şekilde ortaya koymana eşlik etmektir.',
      en: 'Executive coaching is a structured development process for professionals who want to build a more conscious, consistent, and sustainable impact in their leadership role. Its purpose is not to offer ready-made formulas, but to accompany you toward expressing your own leadership style more clearly and confidently.',
    },
    audienceItems: [
      {
        icon: Compass,
        title: { tr: 'Yeni bir liderlik rolüne geçiyorsan', en: 'You’re moving into a new leadership role' },
        description: {
          tr: 'Yönetici veya ekip lideri olarak yeni bir sorumluluğa hazırlanıyor, bu geçişi daha sağlam adımlarla yönetmek istiyorsan.',
          en: 'If you’re preparing for a new responsibility as a manager or team leader and want to manage this transition with firmer footing.',
        },
      },
      {
        icon: Target,
        title: { tr: 'Karar süreçlerini güçlendirmek istiyorsan', en: 'You want to strengthen your decision-making' },
        description: {
          tr: 'Belirsizlik ve yoğunluk altında daha net, tutarlı ve zamanında kararlar almak istiyorsan.',
          en: 'If you want to make clearer, more consistent, and timely decisions under uncertainty and pressure.',
        },
      },
      {
        icon: Eye,
        title: { tr: 'Kendi liderlik tarzını fark etmek istiyorsan', en: 'You want to recognize your own leadership style' },
        description: {
          tr: 'Güçlü yönlerini, kör noktalarını ve yönetim biçimini daha bilinçli görmek istiyorsan.',
          en: 'If you want a more conscious view of your strengths, blind spots, and management style.',
        },
      },
      {
        icon: Scale,
        title: { tr: 'Ekiple dengeyi yeniden kurmak istiyorsan', en: 'You want to rebuild balance with your team' },
        description: {
          tr: 'Stratejik hedefler, günlük operasyon ve ekip ihtiyaçları arasında sürdürülebilir bir denge oluşturmak istiyorsan.',
          en: 'If you want to build a sustainable balance between strategic goals, day-to-day operations, and your team’s needs.',
        },
      },
      {
        icon: Signpost,
        title: { tr: 'Değişim veya kriz dönemini yönetiyorsan', en: 'You’re managing a period of change or crisis' },
        description: {
          tr: 'Kurumsal değişim, büyüme veya belirsizlik döneminde ekibine daha net yön göstermek istiyorsan.',
          en: 'If you want to give your team clearer direction during organizational change, growth, or uncertainty.',
        },
      },
      {
        icon: Gem,
        title: { tr: 'Ekip güvenini güçlendirmek istiyorsan', en: 'You want to strengthen your team’s trust' },
        description: {
          tr: 'İletişim kaliteni ve ekibinle kurduğun güven ilişkisini derinleştirmek istiyorsan.',
          en: 'If you want to deepen the quality of your communication and the trust you’ve built with your team.',
        },
      },
    ],
    audienceClosing: {
      tr: 'Nereden başlayacağını bilmiyorsan, ilk adım kendi liderlik tarzını netleştirmektir.',
      en: 'If you don’t know where to start, the first step is clarifying your own leadership style.',
    },
    audienceCtaLabel: { tr: 'Görüşme Planla', en: 'Schedule a Call' },
    audienceSecondaryLabel: { tr: 'Koçluk Süreci Nasıl İşler?', en: 'How Does the Coaching Process Work?' },
    needsHeading: { tr: 'Yönetici koçluğu hangi alanlarda destek sağlar?', en: 'What areas does executive coaching support?' },
    needs: [
      {
        title: { tr: 'Liderlik Tarzı', en: 'Leadership Style' },
        description: {
          tr: 'Liderin kendi yönetim tarzını, güçlü yönlerini ve gelişim alanlarını daha bilinçli fark etmesini sağlar.',
          en: 'Helps a leader become more consciously aware of their own management style, strengths, and areas for growth.',
        },
      },
      {
        title: { tr: 'Karar Alma Kalitesi', en: 'Decision-Making Quality' },
        description: {
          tr: 'Belirsizlik, yoğunluk veya baskı altında daha net ve tutarlı karar süreçleri geliştirmeye destek olur.',
          en: 'Supports the development of clearer, more consistent decision-making under uncertainty, pressure, or intensity.',
        },
      },
      {
        title: { tr: 'Ekip İletişimi', en: 'Team Communication' },
        description: {
          tr: 'Liderin ekip üyeleriyle kurduğu iletişimi, geri bildirim dilini ve güven ilişkisini güçlendirmeye odaklanır.',
          en: 'Focuses on strengthening a leader’s communication with team members, their language of feedback, and the trust between them.',
        },
      },
      {
        title: { tr: 'Önceliklendirme', en: 'Prioritization' },
        description: {
          tr: 'Stratejik hedefler, günlük operasyon ve ekip ihtiyaçları arasında daha sağlıklı öncelikler oluşturmayı destekler.',
          en: 'Supports building healthier priorities between strategic goals, daily operations, and team needs.',
        },
      },
      {
        title: { tr: 'Değişim Yönetimi', en: 'Change Management' },
        description: {
          tr: 'Kurumsal değişim, büyüme, yeniden yapılanma veya kriz dönemlerinde liderlik etkisini güçlendirmeye yardımcı olur.',
          en: 'Helps strengthen leadership impact during organizational change, growth, restructuring, or crisis.',
        },
      },
      {
        title: { tr: 'Sürdürülebilir Performans', en: 'Sustainable Performance' },
        description: {
          tr: 'Kısa vadeli performans baskısından öte, liderin ve ekibin sürdürülebilir çalışma ritmini oluşturmasına katkı sağlar.',
          en: 'Goes beyond short-term performance pressure to help the leader and team build a sustainable working rhythm.',
        },
      },
    ],
    processHeading: { tr: 'Yönetici koçluğu süreci nasıl ilerler?', en: 'How does the executive coaching process work?' },
    processIntro: { tr: '', en: '' },
    processSteps: [
      {
        number: '01',
        title: { tr: 'Liderlik Ön Görüşmesi', en: 'Leadership Introductory Call' },
        description: {
          tr: 'Yöneticinin rolü, sorumlulukları, ekip yapısı ve öncelikli ihtiyaçları anlaşılır.',
          en: 'We understand the manager’s role, responsibilities, team structure, and priority needs.',
        },
      },
      {
        number: '02',
        title: { tr: 'Liderlik İhtiyaç Analizi', en: 'Leadership Needs Analysis' },
        description: {
          tr: 'Karar alma, iletişim, önceliklendirme, ekip güveni ve performans alanları değerlendirilir.',
          en: 'We assess decision-making, communication, prioritization, team trust, and performance.',
        },
      },
      {
        number: '03',
        title: { tr: 'Hedef Belirleme', en: 'Goal-Setting' },
        description: {
          tr: 'Süreçte çalışılacak liderlik hedefleri netleştirilir.',
          en: 'The leadership goals to be worked on during the process are clarified.',
        },
      },
      {
        number: '04',
        title: { tr: 'Uygun Uzman Eşleşmesi', en: 'The Right Expert Match' },
        description: {
          tr: 'Yöneticinin ihtiyacına uygun AURIX uzmanı belirlenir.',
          en: 'The AURIX expert suited to the manager’s need is identified.',
        },
      },
      {
        number: '05',
        title: { tr: 'Koçluk Görüşmeleri', en: 'Coaching Sessions' },
        description: {
          tr: 'Liderlik farkındalığı, karar kalitesi, ekip ilişkileri ve uygulanabilir aksiyonlar üzerinde çalışılır.',
          en: 'We work on leadership awareness, decision quality, team relationships, and actionable steps.',
        },
      },
      {
        number: '06',
        title: { tr: 'Süreç Değerlendirmesi', en: 'Process Evaluation' },
        description: {
          tr: 'İlerleme, kazanımlar ve sürdürülebilir gelişim alanları gözden geçirilir.',
          en: 'Progress, what was gained, and areas for sustainable growth are reviewed.',
        },
      },
    ],
    ctaHeading: { tr: 'Liderlik sürecinizi daha bilinçli yönetmek ister misiniz?', en: 'Want to lead your leadership process more consciously?' },
    ctaText: {
      tr: 'Ön görüşmede liderlik rolünüzü, ekip yapınızı ve öncelikli gelişim ihtiyacınızı birlikte değerlendirerek size uygun yönetici koçluğu sürecini belirleyebiliriz.',
      en: 'In the introductory call, we assess your leadership role, your team structure, and your priority development need together, so we can determine the right executive coaching process for you.',
    },
    ctaButton: { tr: 'Yönetici Koçluğu İçin Ön Görüşme Talep Et', en: 'Request an Introductory Call for Executive Coaching' },
    seoTitle: { tr: 'Yönetici Koçluğu', en: 'Executive Coaching' },
    seoDescription: {
      tr: 'AURIX yönetici koçluğu; liderlik, karar alma, ekip iletişimi, önceliklendirme ve sürdürülebilir performans alanlarında profesyonel destek sunar.',
      en: 'AURIX executive coaching offers professional support in leadership, decision-making, team communication, prioritization, and sustainable performance.',
    },
  },

  'kurumsal-egitim': {
    slug: 'kurumsal-egitim',
    serviceId: 'kurumsal-egitim',
    eyebrow: { tr: 'Kurumsal Eğitimler', en: 'Corporate Training' },
    h1: { tr: 'Kurumsal Eğitimler', en: 'Corporate Training' },
    heroSubtitle: {
      tr: 'Liderlik, takım gelişimi, iletişim, değişim yönetimi ve çalışan deneyimi alanlarında kurumlara özel gelişim programları.',
      en: 'Development programs tailored to organizations in leadership, team development, communication, change management, and employee experience.',
    },
    introText: {
      tr: 'AURIX kurumsal eğitimleri, hazır paketlerden oluşan standart sunumlar olarak değil; kurumun ihtiyacına, hedef kitlesine ve gelişim beklentisine göre tasarlanan yapılandırılmış öğrenme ve gelişim süreçleri olarak ele alınır.',
      en: 'AURIX corporate training is not treated as a standard presentation drawn from a ready-made package, but as a structured learning and development process designed around the organization’s need, audience, and development goals.',
    },
    primaryCta: { tr: 'Kurumsal İhtiyaç Analizi Talep Et', en: 'Request a Corporate Needs Analysis' },
    secondaryCta: { tr: 'Program Alanlarını İncele', en: 'Explore Program Areas' },
    audienceHeading: { tr: 'Kurumsal eğitim kurumunuza uygun mu?', en: 'Is corporate training right for your organization?' },
    audienceIntro: {
      tr: 'Kurumsal eğitimler; ekiplerinin gelişimini desteklemek, liderlik kapasitesini güçlendirmek ve değişim süreçlerini daha sağlıklı yönetmek isteyen kurumlar için yapılandırılmış bir gelişim sürecidir. Amacı hazır bir eğitim paketi sunmak değil; kurumunuzun ihtiyacına özel bir çerçeve kurmaktır.',
      en: 'Corporate training is a structured development process for organizations that want to support their teams’ growth, strengthen leadership capacity, and manage change more soundly. Its purpose is not to offer a ready-made training package, but to build a framework tailored to your organization’s need.',
    },
    audienceItems: [
      {
        icon: Compass,
        title: { tr: 'Yeni bir liderlik yapısı kuruyorsanız', en: 'You’re building a new leadership structure' },
        description: {
          tr: 'Büyüme, yeniden yapılanma veya yönetim değişikliği sürecinde ekibinize yön kazandırmak istiyorsanız.',
          en: 'If you want to give your team direction during growth, restructuring, or a change in management.',
        },
      },
      {
        icon: Target,
        title: { tr: 'Ekip hedeflerini netleştirmek istiyorsanız', en: 'You want to clarify team goals' },
        description: {
          tr: 'Dağınık öncelikleri ortak ve somut hedeflere dönüştürmek istiyorsanız.',
          en: 'If you want to turn scattered priorities into shared, concrete goals.',
        },
      },
      {
        icon: Eye,
        title: { tr: 'Kurum kültürünüzü daha iyi tanımak istiyorsanız', en: 'You want to better understand your organizational culture' },
        description: {
          tr: 'Ekiplerinizin güçlü yönlerini, iletişim kalıplarını ve gelişim alanlarını fark etmek istiyorsanız.',
          en: 'If you want to recognize your teams’ strengths, communication patterns, and areas for growth.',
        },
      },
      {
        icon: Scale,
        title: { tr: 'Ekipler arası dengeyi güçlendirmek istiyorsanız', en: 'You want to strengthen balance across teams' },
        description: {
          tr: 'Kuşaklar arası, departmanlar arası veya iş-yaşam dengesinde sürdürülebilir bir denge kurmak istiyorsanız.',
          en: 'If you want to build sustainable balance across generations, departments, or work-life demands.',
        },
      },
      {
        icon: Signpost,
        title: { tr: 'Değişim sürecini yönetiyorsanız', en: 'You’re managing a period of change' },
        description: {
          tr: 'Kurumsal dönüşüm, büyüme veya belirsizlik döneminde ekiplerinizin uyum kapasitesini güçlendirmek istiyorsanız.',
          en: 'If you want to strengthen your teams’ capacity to adapt during organizational transformation, growth, or uncertainty.',
        },
      },
      {
        icon: Gem,
        title: { tr: 'Kurumunuzun iç kaynaklarını güçlendirmek istiyorsanız', en: 'You want to strengthen your organization’s inner resources' },
        description: {
          tr: 'Çalışan bağlılığı, motivasyon ve sürdürülebilir performans alanlarında yatırım yapmak istiyorsanız.',
          en: 'If you want to invest in employee engagement, motivation, and sustainable performance.',
        },
      },
    ],
    audienceClosing: {
      tr: 'Nereden başlayacağınızı bilmiyorsanız, ilk adım ihtiyaç analizidir.',
      en: 'If you don’t know where to start, the first step is a needs analysis.',
    },
    audienceCtaLabel: { tr: 'Kurumsal İhtiyaç Analizi Talep Et', en: 'Request a Corporate Needs Analysis' },
    audienceSecondaryLabel: { tr: 'Program Süreci Nasıl İşler?', en: 'How Does the Program Process Work?' },
    needsHeading: { tr: 'Kurumsal program alanları', en: 'Corporate program areas' },
    needs: [
      {
        title: { tr: 'Liderlik Gelişimi', en: 'Leadership Development' },
        description: {
          tr: 'Yöneticilerin liderlik tarzlarını, karar alma becerilerini, iletişim etkilerini ve ekip yönetimi kapasitelerini güçlendirmeye odaklanır.',
          en: 'Focuses on strengthening managers’ leadership styles, decision-making skills, communication impact, and team management capacity.',
        },
      },
      {
        title: { tr: 'Takım Gelişimi', en: 'Team Development' },
        description: {
          tr: 'Ekip içi güven, ortak hedef, sorumluluk kültürü ve iş birliği kalitesini artırmaya yönelik çalışmalar içerir.',
          en: 'Includes work aimed at increasing trust within the team, shared goals, a culture of accountability, and the quality of collaboration.',
        },
      },
      {
        title: { tr: 'Kurumsal İletişim', en: 'Corporate Communication' },
        description: {
          tr: 'Kurum içi iletişim, geri bildirim, çatışma yönetimi ve iş birliği dilini geliştirmeye destek olur.',
          en: 'Supports the development of internal communication, feedback, conflict management, and the language of collaboration.',
        },
      },
      {
        title: { tr: 'Değişim Yönetimi', en: 'Change Management' },
        description: {
          tr: 'Kurumsal dönüşüm, yeniden yapılanma, büyüme veya belirsizlik dönemlerinde ekiplerin uyum kapasitesini güçlendirir.',
          en: 'Strengthens teams’ capacity to adapt during organizational transformation, restructuring, growth, or uncertainty.',
        },
      },
      {
        title: { tr: 'Kuşaklar Arası İletişim', en: 'Cross-Generational Communication' },
        description: {
          tr: 'Farklı kuşakların bir arada çalıştığı kurumlarda ortak değer, iletişim ve üretkenlik alanlarını güçlendirmeye odaklanır.',
          en: 'Focuses on strengthening shared values, communication, and productivity in organizations where different generations work together.',
        },
      },
      {
        title: { tr: 'Çalışan Deneyimi ve Wellbeing', en: 'Employee Experience and Wellbeing' },
        description: {
          tr: 'Çalışanların iş yaşamında sürdürülebilir performans, farkındalık, denge ve iyi oluş alanlarını destekler.',
          en: 'Supports sustainable performance, awareness, balance, and wellbeing in employees’ working lives.',
        },
      },
      {
        title: { tr: 'Kariyer Gelişimi', en: 'Career Development' },
        description: {
          tr: 'Çalışanların kariyer yönlerini, güçlü yönlerini ve gelişim hedeflerini daha bilinçli ele almalarına destek olur.',
          en: 'Supports employees in addressing their career direction, strengths, and development goals more consciously.',
        },
      },
      {
        title: { tr: 'Global Çalışma Kültürü', en: 'Global Working Culture' },
        description: {
          tr: 'Farklı ülkeler, kültürler veya uluslararası ekiplerle çalışan kurumlarda uyum, iletişim ve kariyer farkındalığını destekler.',
          en: 'Supports adaptation, communication, and career awareness in organizations working across different countries, cultures, or international teams.',
        },
      },
    ],
    extra: {
      heading: { tr: 'Program formatları', en: 'Program formats' },
      body: {
        tr: 'Tek günlük eğitim · Yarım günlük atölye · Çok oturumlu gelişim programı · Yönetici gelişim programı · Takım koçluğu destekli eğitim · Online eğitim · Hibrit eğitim · Kuruma özel liderlik akademisi',
        en: 'One-day training · Half-day workshop · Multi-session development program · Executive development program · Team-coaching-supported training · Online training · Hybrid training · Custom leadership academy',
      },
    },
    processHeading: { tr: 'Kurumsal eğitim süreci nasıl tasarlanır?', en: 'How is a corporate training program designed?' },
    processIntro: { tr: '', en: '' },
    processSteps: [
      {
        number: '01',
        title: { tr: 'Kurumsal Ön Görüşme', en: 'Corporate Introductory Call' },
        description: {
          tr: 'Kurumun ihtiyacı, hedef kitlesi ve gelişim beklentisi anlaşılır.',
          en: 'We understand the organization’s need, target audience, and development goals.',
        },
      },
      {
        number: '02',
        title: { tr: 'İhtiyaç Analizi', en: 'Needs Analysis' },
        description: {
          tr: 'Kurumun mevcut yapısı, ekip profili ve öncelikli gelişim alanları değerlendirilir.',
          en: 'The organization’s current structure, team profile, and priority development areas are assessed.',
        },
      },
      {
        number: '03',
        title: { tr: 'Program Tasarımı', en: 'Program Design' },
        description: {
          tr: 'İhtiyaca göre eğitim, atölye, koçluk veya hibrit gelişim programı oluşturulur.',
          en: 'A training, workshop, coaching, or hybrid development program is built around the need.',
        },
      },
      {
        number: '04',
        title: { tr: 'Uzman / Eğitmen Eşleşmesi', en: 'Expert / Trainer Match' },
        description: {
          tr: 'Programın içeriğine uygun AURIX uzmanları belirlenir.',
          en: 'The AURIX experts suited to the program’s content are identified.',
        },
      },
      {
        number: '05',
        title: { tr: 'Uygulama', en: 'Delivery' },
        description: {
          tr: 'Eğitim, atölye veya koçluk süreci kurumla planlanan formatta gerçekleştirilir.',
          en: 'The training, workshop, or coaching process is delivered in the format planned with the organization.',
        },
      },
      {
        number: '06',
        title: { tr: 'Değerlendirme', en: 'Evaluation' },
        description: {
          tr: 'Program çıktıları, katılımcı geri bildirimleri ve devam önerileri gözden geçirilir.',
          en: 'Program outcomes, participant feedback, and recommendations for next steps are reviewed.',
        },
      },
    ],
    ctaHeading: { tr: 'Kurumunuz için özel bir gelişim programı tasarlayalım.', en: 'Let’s design a development program tailored to your organization.' },
    ctaText: {
      tr: 'Liderlik, takım gelişimi, iletişim, değişim yönetimi veya çalışan deneyimi alanlarında kurumunuzun ihtiyacını birlikte değerlendirebiliriz.',
      en: 'We can assess your organization’s need together, whether in leadership, team development, communication, change management, or employee experience.',
    },
    ctaButton: { tr: 'Kurumsal Görüşme Talep Et', en: 'Request a Corporate Call' },
    seoTitle: { tr: 'Kurumsal Eğitimler', en: 'Corporate Training' },
    seoDescription: {
      tr: 'AURIX kurumsal eğitimleri; liderlik gelişimi, takım koçluğu, iletişim, değişim yönetimi ve çalışan deneyimi alanlarında kuruma özel programlar sunar.',
      en: 'AURIX corporate training offers organization-specific programs in leadership development, team coaching, communication, change management, and employee experience.',
    },
  },

  'ogrenci-koclugu': {
    slug: 'ogrenci-koclugu',
    serviceId: 'ogrenci-koclugu',
    eyebrow: { tr: 'Öğrenci Koçluğu', en: 'Student Coaching' },
    h1: { tr: 'Öğrenci Koçluğu', en: 'Student Coaching' },
    heroSubtitle: {
      tr: 'Öğrencilerin hedef belirleme, sınav stratejisi, motivasyon, zaman yönetimi ve kariyer farkındalığı süreçlerine yapılandırılmış destek.',
      en: 'Structured support for students in goal-setting, exam strategy, motivation, time management, and career awareness.',
    },
    introText: {
      tr: 'AURIX öğrenci koçluğu, öğrencinin yalnızca akademik performansına değil; hedeflerini netleştirmesine, çalışma düzenini oluşturmasına, güçlü yönlerini fark etmesine ve geleceğe dair daha bilinçli seçimler yapmasına odaklanır.',
      en: 'AURIX student coaching focuses not only on academic performance, but on helping a student clarify their goals, build a study routine, recognize their strengths, and make more conscious choices about the future.',
    },
    primaryCta: { tr: 'Öğrenci Koçluğu İçin Bilgi Al', en: 'Get Information on Student Coaching' },
    secondaryCta: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    audienceHeading: { tr: 'Öğrenci koçluğu sana uygun mu?', en: 'Is student coaching right for you?' },
    audienceIntro: {
      tr: 'Öğrenci koçluğu; hedeflerini netleştirmek, çalışma düzenini oluşturmak ve güçlü yönlerini fark etmek isteyen öğrenciler için yapılandırılmış bir gelişim sürecidir. Amacı sana hazır bir çalışma formülü dayatmak değil; kendi düzenini ve yönünü bulmana eşlik etmektir.',
      en: 'Student coaching is a structured development process for students who want to clarify their goals, build a study routine, and recognize their strengths. Its purpose is not to impose a ready-made study formula, but to accompany you toward finding your own routine and direction.',
    },
    audienceItems: [
      {
        icon: Compass,
        title: { tr: 'Hangi yöne ilerleyeceğinden emin değilsen', en: 'You’re not sure which direction to take' },
        description: {
          tr: 'Bölüm, meslek veya kariyer seçimi konusunda daha net bir yön aramak istiyorsan.',
          en: 'If you’re looking for a clearer direction in choosing a major, profession, or career.',
        },
      },
      {
        icon: Target,
        title: { tr: 'Hedeflerini netleştirmek istiyorsan', en: 'You want to clarify your goals' },
        description: {
          tr: 'Kısa ve uzun vadeli hedeflerini daha somut ve gerçekçi şekilde belirlemek istiyorsan.',
          en: 'If you want to set your short- and long-term goals more concretely and realistically.',
        },
      },
      {
        icon: Eye,
        title: { tr: 'Güçlü yönlerini keşfetmek istiyorsan', en: 'You want to discover your strengths' },
        description: {
          tr: 'Yalnızca eksiklerine değil, potansiyeline ve güçlü yönlerine de odaklanmak istiyorsan.',
          en: 'If you want to focus not only on your weaknesses, but on your potential and strengths as well.',
        },
      },
      {
        icon: Scale,
        title: { tr: 'Çalışma ve yaşam dengeni kurmak istiyorsan', en: 'You want to build balance between studying and life' },
        description: {
          tr: 'Ders, sınav, sosyal yaşam ve dinlenme arasında sürdürülebilir bir düzen oluşturmak istiyorsan.',
          en: 'If you want to build a sustainable routine between classes, exams, social life, and rest.',
        },
      },
      {
        icon: Signpost,
        title: { tr: 'Sınav veya bölüm seçimi eşiğindeysen', en: 'You’re facing an exam or a choice of major' },
        description: {
          tr: 'Önemli bir sınav veya seçim öncesinde stratejini daha sağlıklı kurmak istiyorsan.',
          en: 'If you want to build a sounder strategy before an important exam or decision.',
        },
      },
      {
        icon: Gem,
        title: { tr: 'Motivasyonunu güçlendirmek istiyorsan', en: 'You want to strengthen your motivation' },
        description: {
          tr: 'Kendi nedenlerini ve ilerleme kaynaklarını fark ederek motivasyonunu artırmak istiyorsan.',
          en: 'If you want to increase your motivation by recognizing your own reasons and sources of progress.',
        },
      },
    ],
    audienceClosing: {
      tr: 'Nereden başlayacağını bilmiyorsan, ilk adım hedefini netleştirmektir.',
      en: 'If you don’t know where to start, the first step is clarifying your goal.',
    },
    audienceCtaLabel: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    audienceSecondaryLabel: { tr: 'Koçluk Süreci Nasıl İşler?', en: 'How Does the Coaching Process Work?' },
    needsHeading: { tr: 'Öğrenci koçluğu hangi alanlarda destek sağlar?', en: 'What areas does student coaching support?' },
    needs: [
      {
        title: { tr: 'Hedef Belirleme', en: 'Goal-Setting' },
        description: {
          tr: 'Öğrencinin kısa, orta ve uzun vadeli hedeflerini daha bilinçli ve gerçekçi şekilde oluşturmasına destek olur.',
          en: 'Supports a student in setting short-, medium-, and long-term goals more consciously and realistically.',
        },
      },
      {
        title: { tr: 'Sınav Stratejisi', en: 'Exam Strategy' },
        description: {
          tr: 'Sınav sürecinde çalışma planı, önceliklendirme ve sürdürülebilir hazırlık düzeni oluşturulmasına katkı sağlar.',
          en: 'Contributes to building a study plan, prioritization, and a sustainable preparation routine for exams.',
        },
      },
      {
        title: { tr: 'Motivasyon', en: 'Motivation' },
        description: {
          tr: 'Öğrencinin kendi nedenlerini, değerlerini ve ilerleme kaynaklarını fark etmesine yardımcı olur.',
          en: 'Helps a student recognize their own reasons, values, and sources of progress.',
        },
      },
      {
        title: { tr: 'Zaman Yönetimi', en: 'Time Management' },
        description: {
          tr: 'Ders, sınav, sosyal yaşam ve dinlenme alanları arasında daha sağlıklı bir denge kurulmasını destekler.',
          en: 'Supports building a healthier balance between classes, exams, social life, and rest.',
        },
      },
      {
        title: { tr: 'Kariyer Farkındalığı', en: 'Career Awareness' },
        description: {
          tr: 'Öğrencinin ilgi alanlarını, güçlü yönlerini ve gelecek seçeneklerini daha bilinçli değerlendirmesine alan açar.',
          en: 'Creates space for a student to assess their interests, strengths, and future options more consciously.',
        },
      },
      {
        title: { tr: 'Güçlü Yönleri Keşfetme', en: 'Discovering Strengths' },
        description: {
          tr: 'Öğrencinin yalnızca eksiklerine değil, potansiyeline ve güçlü yönlerine de odaklanır.',
          en: 'Focuses on a student’s potential and strengths, not only their weaknesses.',
        },
      },
    ],
    extra: {
      heading: { tr: 'Veliler için güvenilir ve yapılandırılmış destek', en: 'Reliable, structured support for parents' },
      body: {
        tr: 'Öğrenci koçluğu, öğrencinin yerine karar vermek veya ona hazır çözümler sunmak değildir. Amaç, öğrencinin kendi hedeflerini, sorumluluk alanlarını ve güçlü yönlerini daha bilinçli fark etmesine destek olmaktır. AURIX’te süreç, öğrencinin yaşı, ihtiyacı, hedefleri ve gelişim alanları dikkate alınarak yapılandırılır. Veliler için bu süreç; çocuğun akademik ve kişisel gelişimine profesyonel, etik ve sistemli bir destek alanı sunar.',
        en: 'Student coaching is not about deciding on the student’s behalf or handing them ready-made solutions. Its purpose is to help the student recognize their own goals, areas of responsibility, and strengths more consciously. At AURIX, the process is structured around the student’s age, need, goals, and areas for growth. For parents, this process offers a professional, ethical, and systematic form of support for their child’s academic and personal development.',
      },
    },
    processHeading: { tr: 'Öğrenci koçluğu süreci nasıl ilerler?', en: 'How does the student coaching process work?' },
    processIntro: { tr: '', en: '' },
    processSteps: [
      {
        number: '01',
        title: { tr: 'Ön Görüşme', en: 'Introductory Call' },
        description: {
          tr: 'Öğrenci ve/veya veli ile temel ihtiyaç ve beklenti anlaşılır.',
          en: 'We understand the core need and expectations with the student and/or parent.',
        },
      },
      {
        number: '02',
        title: { tr: 'Öğrenci İhtiyaç Analizi', en: 'Student Needs Analysis' },
        description: {
          tr: 'Hedefler, çalışma alışkanlıkları, motivasyon alanları ve öncelikler değerlendirilir.',
          en: 'Goals, study habits, sources of motivation, and priorities are assessed.',
        },
      },
      {
        number: '03',
        title: { tr: 'Uygun Uzman Eşleşmesi', en: 'The Right Expert Match' },
        description: {
          tr: 'Öğrencinin ihtiyacına uygun AURIX uzmanı belirlenir.',
          en: 'The AURIX expert suited to the student’s need is identified.',
        },
      },
      {
        number: '04',
        title: { tr: 'Hedef ve Çalışma Planı', en: 'Goal and Study Plan' },
        description: {
          tr: 'Öğrenciyle birlikte gerçekçi hedefler ve uygulanabilir gelişim adımları oluşturulur.',
          en: 'Realistic goals and actionable steps are built together with the student.',
        },
      },
      {
        number: '05',
        title: { tr: 'Koçluk Görüşmeleri', en: 'Coaching Sessions' },
        description: {
          tr: 'Hedef takibi, farkındalık, çalışma düzeni ve kariyer yönelimi üzerine çalışılır.',
          en: 'We work on goal tracking, awareness, study routine, and career direction.',
        },
      },
      {
        number: '06',
        title: { tr: 'Değerlendirme', en: 'Evaluation' },
        description: {
          tr: 'Süreçteki ilerleme ve devam ihtiyacı birlikte gözden geçirilir.',
          en: 'Progress in the process and the need to continue are reviewed together.',
        },
      },
    ],
    ctaHeading: { tr: 'Öğrenciniz için doğru destek alanını birlikte belirleyelim.', en: 'Let’s determine the right kind of support for your student together.' },
    ctaText: {
      tr: 'Ön görüşmede öğrencinin ihtiyacını, hedeflerini ve mevcut durumunu değerlendirerek uygun öğrenci koçluğu sürecini birlikte planlayabiliriz.',
      en: 'In the introductory call, we assess the student’s need, goals, and current situation together, so we can plan the right student coaching process.',
    },
    ctaButton: { tr: 'Öğrenci Koçluğu İçin Ön Görüşme Talep Et', en: 'Request an Introductory Call for Student Coaching' },
    seoTitle: { tr: 'Öğrenci Koçluğu', en: 'Student Coaching' },
    seoDescription: {
      tr: 'AURIX öğrenci koçluğu; hedef belirleme, sınav stratejisi, motivasyon, zaman yönetimi ve kariyer farkındalığı alanlarında yapılandırılmış destek sunar.',
      en: 'AURIX student coaching offers structured support in goal-setting, exam strategy, motivation, time management, and career awareness.',
    },
  },

  'kariyer-koclugu': {
    slug: 'kariyer-koclugu',
    serviceId: 'kariyer-koclugu',
    heroImage: '/media/aurix-hero-bireysel-kocluk.png',
    eyebrow: { tr: 'Kariyer Koçluğu', en: 'Career Coaching' },
    h1: { tr: 'Kariyer Koçluğu', en: 'Career Coaching' },
    heroSubtitle: {
      tr: 'Kariyer geçişi, iş değiştirme veya yeni bir alan keşfetme sürecindeyseniz, kariyer koçluğu doğru kararı vermeniz için netlik ve strateji kazandırır.',
      en: 'If you are going through a career transition, a job change, or exploring a new field, career coaching brings clarity and strategy to help you make the right decision.',
    },
    introText: {
      tr: 'AURIX’te kariyer koçluğu hazır bir kariyer planı sunmaz. Güçlü yönlerinizi, değerlerinizi ve seçeneklerinizi netleştirerek kendi kararınızı daha bilinçli almanıza eşlik eder.',
      en: 'At AURIX, career coaching does not hand you a ready-made career plan. It accompanies you toward a more conscious decision by clarifying your strengths, values, and options.',
    },
    primaryCta: { tr: 'Kariyer Koçluğu İçin Ön Görüşme Talep Et', en: 'Request an Introductory Call for Career Coaching' },
    secondaryCta: { tr: 'Kariyer Koçluğu Sürecini Keşfet', en: 'Explore the Career Coaching Process' },
    audienceHeading: { tr: 'Kariyer koçluğu sana uygun mu?', en: 'Is career coaching right for you?' },
    audienceIntro: {
      tr: 'Kariyer koçluğu; iş değiştirmeyi düşünen, yeni bir alana geçmek isteyen veya kariyerinde tıkanıklık yaşayan kişiler için yapılandırılmış bir süreçtir.',
      en: 'Career coaching is a structured process for people considering a job change, wanting to move into a new field, or feeling stuck in their career.',
    },
    audienceItems: [
      {
        icon: Compass,
        title: { tr: 'Kariyerinde yön arıyorsan', en: 'You’re looking for direction in your career' },
        description: {
          tr: 'Mevcut işinizde tıkanmış hissediyor, farklı bir yön aramak istiyorsanız.',
          en: 'If you feel stuck in your current job and are looking for a different direction.',
        },
      },
      {
        icon: Target,
        title: { tr: 'İş değişikliği düşünüyorsan', en: 'You’re considering a job change' },
        description: {
          tr: 'Yeni bir pozisyona veya sektöre geçiş öncesinde netlik kazanmak istiyorsanız.',
          en: 'If you want to gain clarity before moving into a new position or industry.',
        },
      },
      {
        icon: Eye,
        title: { tr: 'Güçlü yönlerini netleştirmek istiyorsan', en: 'You want to clarify your strengths' },
        description: {
          tr: 'Hangi alanlarda daha güçlü olduğunuzu ve nereye katkı sağlayabileceğinizi görmek istiyorsanız.',
          en: 'If you want to see where your strengths lie and where you can contribute most.',
        },
      },
      {
        icon: Scale,
        title: { tr: 'Doğru kararı vermek istiyorsan', en: 'You want to make the right decision' },
        description: {
          tr: 'Birden fazla seçenek arasında daha sağlıklı bir değerlendirme yapmak istiyorsanız.',
          en: 'If you want to evaluate multiple options more soundly.',
        },
      },
    ],
    audienceClosing: {
      tr: 'Nereden başlayacağını bilmiyorsan, ilk adım güçlü yönlerini netleştirmektir.',
      en: 'If you don’t know where to start, the first step is clarifying your strengths.',
    },
    audienceCtaLabel: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    audienceSecondaryLabel: { tr: 'Koçluk Süreci Nasıl İşler?', en: 'How Does the Coaching Process Work?' },
    needsHeading: { tr: 'Kariyer koçluğu hangi ihtiyaçlara destek olur?', en: 'What needs does career coaching support?' },
    needs: [
      {
        title: { tr: 'Kariyer Netliği', en: 'Career Clarity' },
        description: {
          tr: 'Hangi yönde ilerlemek istediğinizi ve sizin için anlamlı olan kariyer seçeneklerini netleştirmenize yardımcı olur.',
          en: 'Helps you clarify which direction you want to move in and which career options are genuinely meaningful to you.',
        },
      },
      {
        title: { tr: 'Geçiş Stratejisi', en: 'Transition Strategy' },
        description: {
          tr: 'İş veya sektör değişikliğinde adımlarınızı planlı ve sürdürülebilir şekilde atmanızı destekler.',
          en: 'Supports you in taking the steps of a job or industry change in a planned, sustainable way.',
        },
      },
      {
        title: { tr: 'Güçlü Yön Farkındalığı', en: 'Strengths Awareness' },
        description: {
          tr: 'Deneyimlerinizi ve yetkinliklerinizi yeni bir rol veya alanla nasıl eşleştirebileceğinizi görmenize alan açar.',
          en: 'Creates space to see how your experience and skills can be matched to a new role or field.',
        },
      },
      {
        title: { tr: 'Karar Netliği', en: 'Decision Clarity' },
        description: {
          tr: 'Seçenekleriniz arasında daha bilinçli ve güvenli bir karar vermenizi destekler.',
          en: 'Supports you in making a more conscious, confident decision among your options.',
        },
      },
    ],
    processHeading: { tr: 'Kariyer koçluğu süreci nasıl ilerler?', en: 'How does the career coaching process work?' },
    processIntro: { tr: '', en: '' },
    processSteps: [
      {
        number: '01',
        title: { tr: 'Ön Görüşme', en: 'Introductory Call' },
        description: {
          tr: 'İhtiyacınızı, beklentinizi ve destek almak istediğiniz alanı anlamaya odaklanırız.',
          en: 'We focus on understanding your need, your expectations, and the area you want support in.',
        },
      },
      {
        number: '02',
        title: { tr: 'Kariyer ve Hedef Analizi', en: 'Career and Goal Analysis' },
        description: {
          tr: 'Mevcut durumunuzu, güçlü yönlerinizi ve öncelikli kariyer hedeflerinizi birlikte netleştiririz.',
          en: 'We clarify your current situation, your strengths, and your priority career goals together.',
        },
      },
      {
        number: '03',
        title: { tr: 'Uygun Uzman Eşleşmesi', en: 'The Right Expert Match' },
        description: {
          tr: 'İhtiyacınıza ve beklentinize göre size en uygun AURIX uzmanını belirleriz.',
          en: 'We identify the AURIX expert best suited to your need and expectations.',
        },
      },
      {
        number: '04',
        title: { tr: 'Yol Haritası', en: 'Roadmap' },
        description: {
          tr: 'Görüşme sıklığı, süreç hedefleri ve odak alanları birlikte planlanır.',
          en: 'Session frequency, process goals, and focus areas are planned together.',
        },
      },
      {
        number: '05',
        title: { tr: 'Koçluk Görüşmeleri', en: 'Coaching Sessions' },
        description: {
          tr: 'Kariyer netliği, geçiş stratejisi ve uygulanabilir adımlar üzerine çalışılır.',
          en: 'We work on career clarity, transition strategy, and actionable steps.',
        },
      },
      {
        number: '06',
        title: { tr: 'Değerlendirme', en: 'Evaluation' },
        description: {
          tr: 'Süreç sonunda kazanımlar, ilerleme alanları ve devam adımları gözden geçirilir.',
          en: 'At the end of the process, we review what was gained, areas of progress, and next steps.',
        },
      },
    ],
    ctaHeading: { tr: 'Kariyer yönünüzü birlikte netleştirelim.', en: 'Let’s clarify your career direction together.' },
    ctaText: {
      tr: 'Hangi yönde ilerlemek istediğinizden emin değilseniz, kısa bir ön görüşme ile güçlü yönlerinizi ve seçeneklerinizi birlikte değerlendirebiliriz.',
      en: 'If you’re not sure which direction to move in, a short introductory call lets us assess your strengths and options together.',
    },
    ctaButton: { tr: 'Kariyer Koçluğu İçin Ön Görüşme Talep Et', en: 'Request an Introductory Call for Career Coaching' },
    seoTitle: { tr: 'Kariyer Koçluğu', en: 'Career Coaching' },
    seoDescription: {
      tr: 'AURIX kariyer koçluğu; kariyer geçişi, iş değişikliği ve yeni alan keşfi süreçlerinde netlik ve strateji kazandıran yapılandırılmış destek sunar.',
      en: 'AURIX career coaching offers structured support that brings clarity and strategy to career transitions, job changes, and exploring new fields.',
    },
  },

  'takim-koclugu': {
    slug: 'takim-koclugu',
    serviceId: 'takim-koclugu',
    heroImage: '/media/aurix-hero-liderlik.png',
    eyebrow: { tr: 'Takım Koçluğu', en: 'Team Coaching' },
    h1: { tr: 'Takım Koçluğu', en: 'Team Coaching' },
    heroSubtitle: {
      tr: 'Ekip içi iletişimi, uyumu ve performansı güçlendirmek isteyen takımlar için kolektif koçluk süreci.',
      en: 'A collective coaching process for teams that want to strengthen internal communication, cohesion, and performance.',
    },
    introText: {
      tr: 'AURIX’te takım koçluğu, bireysel koçluktan farklı olarak ekibin ortak hedefine, iletişim kalıplarına ve iş birliği kültürüne odaklanan bir süreçtir.',
      en: 'At AURIX, team coaching is different from individual coaching: it focuses on the team’s shared goal, communication patterns, and culture of collaboration.',
    },
    primaryCta: { tr: 'Takım Koçluğu İçin Görüşme Talep Et', en: 'Request a Call for Team Coaching' },
    secondaryCta: { tr: 'Takım Koçluğu Sürecini Keşfet', en: 'Explore the Team Coaching Process' },
    audienceHeading: { tr: 'Takım koçluğu ekibiniz için uygun mu?', en: 'Is team coaching right for your team?' },
    audienceIntro: {
      tr: 'Takım koçluğu; ekip içi güveni, iletişimi ve ortak hedefe bağlılığı güçlendirmek isteyen takımlar ve ekip liderleri için yapılandırılmış bir süreçtir.',
      en: 'Team coaching is a structured process for teams and team leaders who want to strengthen trust, communication, and commitment to a shared goal within the team.',
    },
    audienceItems: [
      {
        icon: Signpost,
        title: { tr: 'Yeni bir ekip kuruyorsanız', en: 'You’re building a new team' },
        description: {
          tr: 'Büyüme veya yeniden yapılanma sürecinde ekibinize ortak bir yön kazandırmak istiyorsanız.',
          en: 'If you want to give your team shared direction during growth or restructuring.',
        },
      },
      {
        icon: Compass,
        title: { tr: 'Ekip içi iletişimi güçlendirmek istiyorsanız', en: 'You want to strengthen communication within the team' },
        description: {
          tr: 'Geri bildirim, iş birliği ve çatışma yönetimi kalitesini artırmak istiyorsanız.',
          en: 'If you want to improve feedback, collaboration, and conflict management.',
        },
      },
      {
        icon: Eye,
        title: { tr: 'Ekibin güçlü yönlerini görmek istiyorsanız', en: 'You want to see your team’s strengths' },
        description: {
          tr: 'Takımınızın dinamiklerini ve gelişim alanlarını daha net görmek istiyorsanız.',
          en: 'If you want to see your team’s dynamics and areas for growth more clearly.',
        },
      },
      {
        icon: Scale,
        title: { tr: 'Sürdürülebilir performans istiyorsanız', en: 'You want sustainable performance' },
        description: {
          tr: 'Kısa vadeli baskı yerine ekibinizin uzun vadeli iş birliği kültürünü güçlendirmek istiyorsanız.',
          en: 'If you want to strengthen your team’s long-term culture of collaboration rather than short-term pressure.',
        },
      },
    ],
    audienceClosing: {
      tr: 'Nereden başlayacağınızı bilmiyorsanız, ilk adım ekip ihtiyacınızı netleştirmektir.',
      en: 'If you don’t know where to start, the first step is clarifying your team’s need.',
    },
    audienceCtaLabel: { tr: 'Görüşme Talep Et', en: 'Request a Call' },
    audienceSecondaryLabel: { tr: 'Süreç Nasıl İşler?', en: 'How Does the Process Work?' },
    needsHeading: { tr: 'Takım koçluğu hangi ihtiyaçlara destek olur?', en: 'What needs does team coaching support?' },
    needs: [
      {
        title: { tr: 'Ekip İçi Güven', en: 'Trust Within the Team' },
        description: {
          tr: 'Ekip üyeleri arasında güveni ve açık iletişimi güçlendirmeye destek olur.',
          en: 'Supports strengthening trust and open communication among team members.',
        },
      },
      {
        title: { tr: 'Ortak Hedef', en: 'Shared Goal' },
        description: {
          tr: 'Dağınık öncelikleri ekip için anlamlı ve ortak hedeflere dönüştürmeye yardımcı olur.',
          en: 'Helps turn scattered priorities into shared goals that are meaningful for the team.',
        },
      },
      {
        title: { tr: 'İş Birliği Kültürü', en: 'A Culture of Collaboration' },
        description: {
          tr: 'Sorumluluk paylaşımını ve iş birliği kalitesini artıran çalışma alışkanlıkları kurulmasına katkı sağlar.',
          en: 'Contributes to building work habits that increase shared accountability and collaboration.',
        },
      },
      {
        title: { tr: 'Sürdürülebilir Performans', en: 'Sustainable Performance' },
        description: {
          tr: 'Ekibin uzun vadeli motivasyonunu ve performansını korumasına destek olur.',
          en: 'Supports the team in maintaining long-term motivation and performance.',
        },
      },
    ],
    processHeading: { tr: 'Takım koçluğu süreci nasıl ilerler?', en: 'How does the team coaching process work?' },
    processIntro: { tr: '', en: '' },
    processSteps: [
      {
        number: '01',
        title: { tr: 'Ön Görüşme', en: 'Introductory Call' },
        description: {
          tr: 'Ekip liderinin ihtiyacını, beklentisini ve ekip yapısını anlamaya odaklanırız.',
          en: 'We focus on understanding the team leader’s need, expectations, and team structure.',
        },
      },
      {
        number: '02',
        title: { tr: 'Ekip İhtiyaç Analizi', en: 'Team Needs Analysis' },
        description: {
          tr: 'Ekibin mevcut dinamikleri, iletişim kalıpları ve öncelikli gelişim alanları değerlendirilir.',
          en: 'The team’s current dynamics, communication patterns, and priority areas for growth are assessed.',
        },
      },
      {
        number: '03',
        title: { tr: 'Uygun Uzman Eşleşmesi', en: 'The Right Expert Match' },
        description: {
          tr: 'Ekibin ihtiyacına uygun AURIX takım koçu belirlenir.',
          en: 'The AURIX team coach suited to the team’s need is identified.',
        },
      },
      {
        number: '04',
        title: { tr: 'Yol Haritası', en: 'Roadmap' },
        description: {
          tr: 'Görüşme sıklığı, süreç hedefleri ve odak alanları ekiple birlikte planlanır.',
          en: 'Session frequency, process goals, and focus areas are planned together with the team.',
        },
      },
      {
        number: '05',
        title: { tr: 'Takım Koçluğu Görüşmeleri', en: 'Team Coaching Sessions' },
        description: {
          tr: 'Ekip içi güven, iletişim ve ortak hedef üzerine çalışılır.',
          en: 'We work on trust, communication, and the shared goal within the team.',
        },
      },
      {
        number: '06',
        title: { tr: 'Değerlendirme', en: 'Evaluation' },
        description: {
          tr: 'Süreç sonunda kazanımlar, ilerleme alanları ve devam adımları gözden geçirilir.',
          en: 'At the end of the process, we review what was gained, areas of progress, and next steps.',
        },
      },
    ],
    ctaHeading: { tr: 'Ekibiniz için doğru süreci birlikte tasarlayalım.', en: 'Let’s design the right process for your team together.' },
    ctaText: {
      tr: 'Ekibinizin ihtiyacını kısa bir görüşmeyle değerlendirebilir, uygun takım koçluğu sürecini birlikte planlayabiliriz.',
      en: 'We can assess your team’s need in a short call and plan the right team coaching process together.',
    },
    ctaButton: { tr: 'Takım Koçluğu İçin Görüşme Talep Et', en: 'Request a Call for Team Coaching' },
    seoTitle: { tr: 'Takım Koçluğu', en: 'Team Coaching' },
    seoDescription: {
      tr: 'AURIX takım koçluğu; ekip içi iletişim, güven, ortak hedef ve sürdürülebilir performans alanlarında kolektif koçluk süreci sunar.',
      en: 'AURIX team coaching offers a collective coaching process in team communication, trust, shared goals, and sustainable performance.',
    },
  },

  'ogrenci-mentorlugu-sinav-stratejisi': {
    slug: 'ogrenci-mentorlugu-sinav-stratejisi',
    serviceId: 'ogrenci-mentorlugu-sinav-stratejisi',
    heroImage: '/media/aurix-hero-gencler.png',
    eyebrow: { tr: 'Öğrenci Mentörlüğü ve Sınav Stratejisi', en: 'Student Mentoring and Exam Strategy' },
    h1: { tr: 'Öğrenci Mentörlüğü ve Sınav Stratejisi', en: 'Student Mentoring and Exam Strategy' },
    heroSubtitle: {
      tr: 'YKS, LGS ve uluslararası sınavlara hazırlanan öğrenciler için zihinsel hazırlık ve stratejik planlama desteği.',
      en: 'Mental preparation and strategic planning support for students preparing for national and international exams.',
    },
    introText: {
      tr: 'AURIX’te sınav stratejisi yalnızca ders çalışma programından ibaret değildir; öğrencinin sınav kaygısını yönetmesine, zamanını planlamasına ve sınav sürecine zihinsel olarak hazırlanmasına eşlik eder.',
      en: 'At AURIX, exam strategy is not just a study schedule. It accompanies the student in managing exam anxiety, planning their time, and preparing mentally for the exam process.',
    },
    primaryCta: { tr: 'Sınav Stratejisi İçin Bilgi Al', en: 'Get Information on Exam Strategy' },
    secondaryCta: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    audienceHeading: { tr: 'Sınav stratejisi desteği kimler için uygun?', en: 'Who is exam strategy support right for?' },
    audienceIntro: {
      tr: 'Bu süreç; YKS, LGS veya uluslararası sınavlara hazırlanan, çalışma planını ve sınav kaygısını daha sağlıklı yönetmek isteyen öğrenciler için yapılandırılmıştır.',
      en: 'This process is structured for students preparing for national or international exams who want to manage their study plan and exam anxiety in a healthier way.',
    },
    audienceItems: [
      {
        icon: Target,
        title: { tr: 'Sınava hazırlanıyorsan', en: 'You’re preparing for an exam' },
        description: {
          tr: 'YKS, LGS veya uluslararası bir sınava yönelik planlı bir hazırlık süreci istiyorsan.',
          en: 'If you want a planned preparation process for a national or international exam.',
        },
      },
      {
        icon: Scale,
        title: { tr: 'Sınav kaygısı yaşıyorsan', en: 'You experience exam anxiety' },
        description: {
          tr: 'Sınav öncesi ve sırasında kaygını daha sağlıklı yönetmek istiyorsan.',
          en: 'If you want to manage your anxiety before and during exams in a healthier way.',
        },
      },
      {
        icon: Signpost,
        title: { tr: 'Çalışma planı oluşturmak istiyorsan', en: 'You want to build a study plan' },
        description: {
          tr: 'Konuları ve zamanını daha etkili şekilde önceliklendirmek istiyorsan.',
          en: 'If you want to prioritize your subjects and time more effectively.',
        },
      },
      {
        icon: Compass,
        title: { tr: 'Sınav ve tercih stratejisi belirlemek istiyorsan', en: 'You want to set an exam and choice strategy' },
        description: {
          tr: 'Hedeflerine uygun bir sınav ve tercih stratejisi oluşturmak istiyorsan.',
          en: 'If you want to build an exam and choice strategy that fits your goals.',
        },
      },
    ],
    audienceClosing: {
      tr: 'Nereden başlayacağını bilmiyorsan, ilk adım mevcut çalışma düzenini birlikte değerlendirmektir.',
      en: 'If you don’t know where to start, the first step is assessing your current study routine together.',
    },
    audienceCtaLabel: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    audienceSecondaryLabel: { tr: 'Süreç Nasıl İşler?', en: 'How Does the Process Work?' },
    needsHeading: { tr: 'Bu süreç hangi ihtiyaçlara destek olur?', en: 'What needs does this process support?' },
    needs: [
      {
        title: { tr: 'Sınav Stratejisi', en: 'Exam Strategy' },
        description: {
          tr: 'Sınav sürecinde çalışma planı, önceliklendirme ve sürdürülebilir hazırlık düzeni oluşturulmasına katkı sağlar.',
          en: 'Contributes to building a study plan, prioritization, and a sustainable preparation routine for exams.',
        },
      },
      {
        title: { tr: 'Zihinsel Hazırlık', en: 'Mental Preparation' },
        description: {
          tr: 'Sınav kaygısını ve performans baskısını daha sağlıklı yönetmenize destek olur.',
          en: 'Supports you in managing exam anxiety and performance pressure in a healthier way.',
        },
      },
      {
        title: { tr: 'Zaman Yönetimi', en: 'Time Management' },
        description: {
          tr: 'Konular, tekrar ve dinlenme arasında dengeli bir çalışma ritmi kurulmasına yardımcı olur.',
          en: 'Helps build a balanced study rhythm between subjects, review, and rest.',
        },
      },
      {
        title: { tr: 'Motivasyon', en: 'Motivation' },
        description: {
          tr: 'Uzun hazırlık sürecinde motivasyonunuzu korumanıza alan açar.',
          en: 'Creates space to maintain your motivation throughout a long preparation process.',
        },
      },
    ],
    processHeading: { tr: 'Bu süreç nasıl ilerler?', en: 'How does this process work?' },
    processIntro: { tr: '', en: '' },
    processSteps: [
      {
        number: '01',
        title: { tr: 'Ön Görüşme', en: 'Introductory Call' },
        description: {
          tr: 'Öğrenci ve/veya veli ile temel ihtiyaç ve beklenti anlaşılır.',
          en: 'We understand the core need and expectations with the student and/or parent.',
        },
      },
      {
        number: '02',
        title: { tr: 'Sınav İhtiyaç Analizi', en: 'Exam Needs Analysis' },
        description: {
          tr: 'Hedef sınav, mevcut çalışma düzeni ve kaygı alanları değerlendirilir.',
          en: 'The target exam, current study routine, and areas of anxiety are assessed.',
        },
      },
      {
        number: '03',
        title: { tr: 'Uygun Uzman Eşleşmesi', en: 'The Right Expert Match' },
        description: {
          tr: 'Öğrencinin ihtiyacına uygun AURIX uzmanı belirlenir.',
          en: 'The AURIX expert suited to the student’s need is identified.',
        },
      },
      {
        number: '04',
        title: { tr: 'Çalışma ve Strateji Planı', en: 'Study and Strategy Plan' },
        description: {
          tr: 'Öğrenciyle birlikte gerçekçi bir çalışma planı ve sınav stratejisi oluşturulur.',
          en: 'A realistic study plan and exam strategy are built together with the student.',
        },
      },
      {
        number: '05',
        title: { tr: 'Mentörlük Görüşmeleri', en: 'Mentoring Sessions' },
        description: {
          tr: 'Zaman yönetimi, kaygı yönetimi ve motivasyon üzerine çalışılır.',
          en: 'We work on time management, anxiety management, and motivation.',
        },
      },
      {
        number: '06',
        title: { tr: 'Değerlendirme', en: 'Evaluation' },
        description: {
          tr: 'Süreçteki ilerleme ve devam ihtiyacı birlikte gözden geçirilir.',
          en: 'Progress in the process and the need to continue are reviewed together.',
        },
      },
    ],
    ctaHeading: { tr: 'Sınav sürecinizi birlikte planlayalım.', en: 'Let’s plan your exam process together.' },
    ctaText: {
      tr: 'Hedef sınavınızı ve mevcut çalışma düzeninizi kısa bir ön görüşme ile değerlendirebilir, uygun mentörlük sürecini birlikte planlayabiliriz.',
      en: 'We can assess your target exam and current study routine in a short introductory call, and plan the right mentoring process together.',
    },
    ctaButton: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    seoTitle: { tr: 'Öğrenci Mentörlüğü ve Sınav Stratejisi', en: 'Student Mentoring and Exam Strategy' },
    seoDescription: {
      tr: 'AURIX öğrenci mentörlüğü ve sınav stratejisi; YKS, LGS ve uluslararası sınavlara yönelik zihinsel hazırlık ve planlama desteği sunar.',
      en: 'AURIX student mentoring and exam strategy offers mental preparation and planning support for national and international exams.',
    },
  },

  'genclerde-kariyer-farkindaligi': {
    slug: 'genclerde-kariyer-farkindaligi',
    serviceId: 'genclerde-kariyer-farkindaligi',
    heroImage: '/media/aurix-hero-gencler.png',
    eyebrow: { tr: 'Gençler için Kariyer Farkındalığı', en: 'Career Awareness for Young People' },
    h1: { tr: 'Gençler için Kariyer Farkındalığı', en: 'Career Awareness for Young People' },
    heroSubtitle: {
      tr: 'Üniversite öğrencileri ve yeni mezunlar için kariyer keşfi ve meslek seçimi rehberliği.',
      en: 'Career exploration and profession-choice guidance for university students and recent graduates.',
    },
    introText: {
      tr: 'AURIX’te kariyer farkındalığı süreci, gençlerin ilgi alanlarını, güçlü yönlerini ve seçeneklerini keşfederek geleceğe dair daha bilinçli seçimler yapmasına eşlik eder.',
      en: 'At AURIX, the career awareness process accompanies young people in exploring their interests, strengths, and options so they can make more conscious choices about the future.',
    },
    primaryCta: { tr: 'Kariyer Farkındalığı İçin Bilgi Al', en: 'Get Information on Career Awareness' },
    secondaryCta: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    audienceHeading: { tr: 'Bu süreç kimler için uygun?', en: 'Who is this process right for?' },
    audienceIntro: {
      tr: 'Kariyer farkındalığı süreci; bölüm veya meslek seçimi öncesinde ya da yeni mezuniyet sonrasında yönünü netleştirmek isteyen gençler için yapılandırılmıştır.',
      en: 'The career awareness process is structured for young people who want to clarify their direction before choosing a major or profession, or after recent graduation.',
    },
    audienceItems: [
      {
        icon: Compass,
        title: { tr: 'Meslek seçimi eşiğindeysen', en: 'You’re facing a profession choice' },
        description: {
          tr: 'Üniversite veya meslek seçimi öncesinde seçeneklerini netleştirmek istiyorsan.',
          en: 'If you want to clarify your options before choosing a university program or profession.',
        },
      },
      {
        icon: Eye,
        title: { tr: 'İlgi alanlarını keşfetmek istiyorsan', en: 'You want to discover your interests' },
        description: {
          tr: 'Hangi alanlarda daha motive ve başarılı olduğunu görmek istiyorsan.',
          en: 'If you want to see the areas where you feel more motivated and capable.',
        },
      },
      {
        icon: Target,
        title: { tr: 'Yeni mezunsan', en: 'You’re a recent graduate' },
        description: {
          tr: 'Mezuniyet sonrası ilk kariyer adımlarını daha bilinçli planlamak istiyorsan.',
          en: 'If you want to plan your first career steps after graduation more consciously.',
        },
      },
      {
        icon: Signpost,
        title: { tr: 'Gelecek hakkında kaygılıysan', en: 'You feel anxious about the future' },
        description: {
          tr: 'Belirsizlik karşısında daha net bir yön oluşturmak istiyorsan.',
          en: 'If you want to build a clearer direction in the face of uncertainty.',
        },
      },
    ],
    audienceClosing: {
      tr: 'Nereden başlayacağını bilmiyorsan, ilk adım ilgi alanlarını ve güçlü yönlerini netleştirmektir.',
      en: 'If you don’t know where to start, the first step is clarifying your interests and strengths.',
    },
    audienceCtaLabel: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    audienceSecondaryLabel: { tr: 'Süreç Nasıl İşler?', en: 'How Does the Process Work?' },
    needsHeading: { tr: 'Bu süreç hangi ihtiyaçlara destek olur?', en: 'What needs does this process support?' },
    needs: [
      {
        title: { tr: 'Kariyer Keşfi', en: 'Career Exploration' },
        description: {
          tr: 'İlgi alanlarınızı ve olası kariyer seçeneklerinizi keşfetmenize yardımcı olur.',
          en: 'Helps you explore your interests and possible career options.',
        },
      },
      {
        title: { tr: 'Meslek Seçimi Netliği', en: 'Clarity in Choosing a Profession' },
        description: {
          tr: 'Bölüm veya meslek seçiminde daha bilinçli bir karara ulaşmanızı destekler.',
          en: 'Supports you in reaching a more conscious decision about your major or profession.',
        },
      },
      {
        title: { tr: 'Güçlü Yön Farkındalığı', en: 'Strengths Awareness' },
        description: {
          tr: 'Potansiyelinizi ve güçlü yönlerinizi fark etmenize alan açar.',
          en: 'Creates space to recognize your potential and your strengths.',
        },
      },
      {
        title: { tr: 'İlk Kariyer Adımları', en: 'First Career Steps' },
        description: {
          tr: 'Yeni mezunlar için ilk iş deneyimi ve kariyer adımlarını planlamanıza destek olur.',
          en: 'Supports recent graduates in planning their first work experience and career steps.',
        },
      },
    ],
    processHeading: { tr: 'Bu süreç nasıl ilerler?', en: 'How does this process work?' },
    processIntro: { tr: '', en: '' },
    processSteps: [
      {
        number: '01',
        title: { tr: 'Ön Görüşme', en: 'Introductory Call' },
        description: {
          tr: 'İhtiyacınızı, beklentinizi ve destek almak istediğiniz alanı anlamaya odaklanırız.',
          en: 'We focus on understanding your need, your expectations, and the area you want support in.',
        },
      },
      {
        number: '02',
        title: { tr: 'İlgi ve Yetkinlik Analizi', en: 'Interests and Strengths Analysis' },
        description: {
          tr: 'İlgi alanlarınızı, güçlü yönlerinizi ve olası kariyer seçeneklerinizi birlikte netleştiririz.',
          en: 'We clarify your interests, strengths, and possible career options together.',
        },
      },
      {
        number: '03',
        title: { tr: 'Uygun Uzman Eşleşmesi', en: 'The Right Expert Match' },
        description: {
          tr: 'İhtiyacınıza uygun AURIX uzmanını belirleriz.',
          en: 'We identify the AURIX expert suited to your need.',
        },
      },
      {
        number: '04',
        title: { tr: 'Yol Haritası', en: 'Roadmap' },
        description: {
          tr: 'Görüşme sıklığı, süreç hedefleri ve odak alanları birlikte planlanır.',
          en: 'Session frequency, process goals, and focus areas are planned together.',
        },
      },
      {
        number: '05',
        title: { tr: 'Koçluk Görüşmeleri', en: 'Coaching Sessions' },
        description: {
          tr: 'Kariyer keşfi, meslek seçimi ve ilk kariyer adımları üzerine çalışılır.',
          en: 'We work on career exploration, choosing a profession, and first career steps.',
        },
      },
      {
        number: '06',
        title: { tr: 'Değerlendirme', en: 'Evaluation' },
        description: {
          tr: 'Süreç sonunda kazanımlar, ilerleme alanları ve devam adımları gözden geçirilir.',
          en: 'At the end of the process, we review what was gained, areas of progress, and next steps.',
        },
      },
    ],
    ctaHeading: { tr: 'Kariyer yönünüzü birlikte keşfedelim.', en: 'Let’s explore your career direction together.' },
    ctaText: {
      tr: 'Hangi alanda ilerlemek istediğinizden emin değilseniz, kısa bir ön görüşme ile ilgi alanlarınızı ve seçeneklerinizi birlikte değerlendirebiliriz.',
      en: 'If you’re not sure which area to move toward, a short introductory call lets us assess your interests and options together.',
    },
    ctaButton: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    seoTitle: { tr: 'Gençler için Kariyer Farkındalığı', en: 'Career Awareness for Young People' },
    seoDescription: {
      tr: 'AURIX; üniversite öğrencileri ve yeni mezunlar için kariyer keşfi ve meslek seçimi rehberliği sunar.',
      en: 'AURIX offers career exploration and profession-choice guidance for university students and recent graduates.',
    },
  },

  'global-uyum-kariyer-koclugu': {
    slug: 'global-uyum-kariyer-koclugu',
    serviceId: 'global-uyum-kariyer-koclugu',
    heroImage: '/media/aurix-hero-global-uyum.png',
    eyebrow: { tr: 'Küresel Uyum ve Kariyer Koçluğu', en: 'Global Adaptation and Career Coaching' },
    h1: { tr: 'Küresel Uyum ve Kariyer Koçluğu', en: 'Global Adaptation and Career Coaching' },
    heroSubtitle: {
      tr: 'Yurt dışına çıkan veya uluslararası kariyer hedefleyen bireyler için uyum ve strateji desteği.',
      en: 'Adaptation and strategy support for individuals moving abroad or pursuing an international career.',
    },
    introText: {
      tr: 'AURIX’te küresel uyum ve kariyer koçluğu, yeni bir ülkeye veya uluslararası bir kariyere geçiş sürecinde hem pratik hem de zihinsel uyum alanlarına eşlik eder.',
      en: 'At AURIX, global adaptation and career coaching accompanies both the practical and the mental side of a transition to a new country or an international career.',
    },
    primaryCta: { tr: 'Küresel Uyum İçin Görüşme Talep Et', en: 'Request a Call for Global Adaptation' },
    secondaryCta: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    audienceHeading: { tr: 'Bu süreç kimler için uygun?', en: 'Who is this process right for?' },
    audienceIntro: {
      tr: 'Küresel uyum ve kariyer koçluğu; yurt dışına taşınan, uluslararası bir kariyer hedefleyen veya farklı bir kültürde çalışma düzeni kurmak isteyen bireyler için yapılandırılmıştır.',
      en: 'Global adaptation and career coaching is structured for individuals moving abroad, pursuing an international career, or building a working routine in a different culture.',
    },
    audienceItems: [
      {
        icon: Compass,
        title: { tr: 'Yurt dışına taşınıyorsan', en: 'You’re moving abroad' },
        description: {
          tr: 'Yeni bir ülkede yaşam ve kariyer düzeni kurmak istiyorsan.',
          en: 'If you want to build a life and career routine in a new country.',
        },
      },
      {
        icon: Target,
        title: { tr: 'Uluslararası kariyer hedefliyorsan', en: 'You’re pursuing an international career' },
        description: {
          tr: 'Global ölçekte bir kariyer hedefi doğrultusunda stratejini netleştirmek istiyorsan.',
          en: 'If you want to clarify your strategy toward a career goal on a global scale.',
        },
      },
      {
        icon: Eye,
        title: { tr: 'Kültürel uyum sürecindeysen', en: 'You’re adapting to a new culture' },
        description: {
          tr: 'Farklı bir kültürde çalışma ve yaşam alışkanlıklarını daha sağlıklı oluşturmak istiyorsan.',
          en: 'If you want to build healthier work and life habits in a different culture.',
        },
      },
      {
        icon: Scale,
        title: { tr: 'Denge kurmak istiyorsan', en: 'You want to find balance' },
        description: {
          tr: 'Yeni düzen ile önceki yaşamın arasında sürdürülebilir bir denge kurmak istiyorsan.',
          en: 'If you want to build a sustainable balance between your new routine and your previous life.',
        },
      },
    ],
    audienceClosing: {
      tr: 'Nereden başlayacağınızı bilmiyorsanız, ilk adım mevcut ihtiyacınızı netleştirmektir.',
      en: 'If you don’t know where to start, the first step is clarifying your current need.',
    },
    audienceCtaLabel: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    audienceSecondaryLabel: { tr: 'Süreç Nasıl İşler?', en: 'How Does the Process Work?' },
    needsHeading: { tr: 'Bu süreç hangi ihtiyaçlara destek olur?', en: 'What needs does this process support?' },
    needs: [
      {
        title: { tr: 'Kültürel Uyum', en: 'Cultural Adaptation' },
        description: {
          tr: 'Yeni bir ülkede yaşam ve çalışma düzenine daha sağlıklı uyum sağlamanıza destek olur.',
          en: 'Supports a healthier adaptation to life and work in a new country.',
        },
      },
      {
        title: { tr: 'Kariyer Stratejisi', en: 'Career Strategy' },
        description: {
          tr: 'Uluslararası kariyer hedeflerinize uygun somut bir strateji oluşturmanıza yardımcı olur.',
          en: 'Helps you build a concrete strategy suited to your international career goals.',
        },
      },
      {
        title: { tr: 'Zihinsel Denge', en: 'Mental Balance' },
        description: {
          tr: 'Yeni bir ülkeye geçiş sürecinde zihinsel ve duygusal dengenizi korumanıza alan açar.',
          en: 'Creates space to maintain your mental and emotional balance during the move to a new country.',
        },
      },
      {
        title: { tr: 'Global Bağlantı Kurma', en: 'Building Global Connections' },
        description: {
          tr: 'Yeni bir çevrede profesyonel ve sosyal bağlantılar kurmanızı destekler.',
          en: 'Supports you in building professional and social connections in a new environment.',
        },
      },
    ],
    processHeading: { tr: 'Bu süreç nasıl ilerler?', en: 'How does this process work?' },
    processIntro: { tr: '', en: '' },
    processSteps: [
      {
        number: '01',
        title: { tr: 'Ön Görüşme', en: 'Introductory Call' },
        description: {
          tr: 'İhtiyacınızı, hedef ülkenizi veya kariyer beklentinizi anlamaya odaklanırız.',
          en: 'We focus on understanding your need, your target country, or your career expectations.',
        },
      },
      {
        number: '02',
        title: { tr: 'Uyum ve Hedef Analizi', en: 'Adaptation and Goal Analysis' },
        description: {
          tr: 'Mevcut durumunuzu, hedeflerinizi ve öncelikli uyum alanlarınızı birlikte netleştiririz.',
          en: 'We clarify your current situation, your goals, and your priority areas for adaptation together.',
        },
      },
      {
        number: '03',
        title: { tr: 'Uygun Uzman Eşleşmesi', en: 'The Right Expert Match' },
        description: {
          tr: 'İhtiyacınıza ve beklentinize göre size en uygun AURIX uzmanını belirleriz.',
          en: 'We identify the AURIX expert best suited to your need and expectations.',
        },
      },
      {
        number: '04',
        title: { tr: 'Yol Haritası', en: 'Roadmap' },
        description: {
          tr: 'Görüşme sıklığı, süreç hedefleri ve odak alanları birlikte planlanır.',
          en: 'Session frequency, process goals, and focus areas are planned together.',
        },
      },
      {
        number: '05',
        title: { tr: 'Koçluk Görüşmeleri', en: 'Coaching Sessions' },
        description: {
          tr: 'Kültürel uyum, kariyer stratejisi ve zihinsel denge üzerine çalışılır.',
          en: 'We work on cultural adaptation, career strategy, and mental balance.',
        },
      },
      {
        number: '06',
        title: { tr: 'Değerlendirme', en: 'Evaluation' },
        description: {
          tr: 'Süreç sonunda kazanımlar, ilerleme alanları ve devam adımları gözden geçirilir.',
          en: 'At the end of the process, we review what was gained, areas of progress, and next steps.',
        },
      },
    ],
    ctaHeading: { tr: 'Küresel geçiş sürecinizi birlikte planlayalım.', en: 'Let’s plan your global transition together.' },
    ctaText: {
      tr: 'Hedef ülkenizi veya uluslararası kariyer hedefinizi kısa bir ön görüşme ile değerlendirebilir, uygun uyum sürecini birlikte planlayabiliriz.',
      en: 'We can assess your target country or international career goal in a short introductory call, and plan the right adaptation process together.',
    },
    ctaButton: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    seoTitle: { tr: 'Küresel Uyum ve Kariyer Koçluğu', en: 'Global Adaptation and Career Coaching' },
    seoDescription: {
      tr: 'AURIX küresel uyum ve kariyer koçluğu; yurt dışına çıkan veya uluslararası kariyer hedefleyen bireyler için uyum ve strateji desteği sunar.',
      en: 'AURIX global adaptation and career coaching offers adaptation and strategy support for individuals moving abroad or pursuing an international career.',
    },
  },

  'dil-ogreniminde-zihinsel-donusum-koclugu': {
    slug: 'dil-ogreniminde-zihinsel-donusum-koclugu',
    serviceId: 'dil-ogreniminde-zihinsel-donusum-koclugu',
    heroImage: '/media/aurix-hero-global-uyum.png',
    eyebrow: { tr: 'Dil Öğreniminde Zihinsel Dönüşüm Koçluğu', en: 'Mindset Coaching for Language Learning' },
    h1: { tr: 'Dil Öğreniminde Zihinsel Dönüşüm Koçluğu', en: 'Mindset Coaching for Language Learning' },
    heroSubtitle: {
      tr: 'Dil öğrenme engellerini aşmak için zihinsel blokları ve motivasyon dinamiklerini ele alan özel koçluk.',
      en: 'Specialized coaching that addresses mental blocks and motivation dynamics to overcome language-learning obstacles.',
    },
    introText: {
      tr: 'AURIX’te bu süreç, dil bilgisi eksikliğine değil; dil öğrenmeyi zorlaştıran zihinsel blokları, kaygıyı ve motivasyon kaybını ele almaya odaklanır.',
      en: 'At AURIX, this process does not focus on gaps in language knowledge, but on the mental blocks, anxiety, and loss of motivation that make language learning harder.',
    },
    primaryCta: { tr: 'Bu Süreç İçin Bilgi Al', en: 'Get Information on This Process' },
    secondaryCta: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    audienceHeading: { tr: 'Bu süreç kimler için uygun?', en: 'Who is this process right for?' },
    audienceIntro: {
      tr: 'Bu koçluk süreci; dil öğrenirken tıkanan, konuşma kaygısı yaşayan veya motivasyonunu kaybeden kişiler için yapılandırılmıştır.',
      en: 'This coaching process is structured for people who feel stuck while learning a language, experience speaking anxiety, or lose their motivation.',
    },
    audienceItems: [
      {
        icon: Eye,
        title: { tr: 'Dil öğrenirken tıkanıyorsan', en: 'You feel stuck while learning a language' },
        description: {
          tr: 'Bildiğin halde konuşurken tereddüt ettiğini fark ediyorsan.',
          en: 'If you notice you hesitate to speak even when you know the language.',
        },
      },
      {
        icon: Scale,
        title: { tr: 'Konuşma kaygısı yaşıyorsan', en: 'You experience speaking anxiety' },
        description: {
          tr: 'Yeni bir dilde konuşurken kaygı veya özgüven eksikliği hissediyorsan.',
          en: 'If you feel anxious or lack confidence when speaking a new language.',
        },
      },
      {
        icon: Compass,
        title: { tr: 'Motivasyonunu kaybettiysen', en: 'You’ve lost your motivation' },
        description: {
          tr: 'Dil öğrenme sürecinde ilerleme hissini yeniden kazanmak istiyorsan.',
          en: 'If you want to regain a sense of progress in your language-learning process.',
        },
      },
      {
        icon: Target,
        title: { tr: 'Hedefe yönelik ilerlemek istiyorsan', en: 'You want to work toward a goal' },
        description: {
          tr: 'Dil öğrenimini somut bir hedef ve düzenle sürdürmek istiyorsan.',
          en: 'If you want to sustain your language learning with a concrete goal and routine.',
        },
      },
    ],
    audienceClosing: {
      tr: 'Nereden başlayacağını bilmiyorsan, ilk adım seni zorlayan noktayı birlikte fark etmektir.',
      en: 'If you don’t know where to start, the first step is recognizing together what’s holding you back.',
    },
    audienceCtaLabel: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    audienceSecondaryLabel: { tr: 'Süreç Nasıl İşler?', en: 'How Does the Process Work?' },
    needsHeading: { tr: 'Bu süreç hangi ihtiyaçlara destek olur?', en: 'What needs does this process support?' },
    needs: [
      {
        title: { tr: 'Zihinsel Blokların Fark Edilmesi', en: 'Recognizing Mental Blocks' },
        description: {
          tr: 'Dil öğrenmeyi zorlaştıran zihinsel engelleri ve kaygı kalıplarını fark etmenize yardımcı olur.',
          en: 'Helps you recognize the mental blocks and anxiety patterns that make language learning harder.',
        },
      },
      {
        title: { tr: 'Konuşma Özgüveni', en: 'Speaking Confidence' },
        description: {
          tr: 'Yeni bir dilde konuşurken özgüveninizi ve rahatlığınızı artırmanıza destek olur.',
          en: 'Supports you in increasing your confidence and ease when speaking a new language.',
        },
      },
      {
        title: { tr: 'Motivasyon Sürekliliği', en: 'Sustained Motivation' },
        description: {
          tr: 'Uzun bir öğrenme sürecinde motivasyonunuzu korumanıza alan açar.',
          en: 'Creates space to maintain your motivation over a long learning process.',
        },
      },
      {
        title: { tr: 'Uygulanabilir Alışkanlıklar', en: 'Actionable Habits' },
        description: {
          tr: 'Dil öğrenimini günlük hayatınıza sürdürülebilir şekilde yerleştirmenize yardımcı olur.',
          en: 'Helps you build language learning into your daily life in a sustainable way.',
        },
      },
    ],
    processHeading: { tr: 'Bu süreç nasıl ilerler?', en: 'How does this process work?' },
    processIntro: { tr: '', en: '' },
    processSteps: [
      {
        number: '01',
        title: { tr: 'Ön Görüşme', en: 'Introductory Call' },
        description: {
          tr: 'İhtiyacınızı, hedef dilinizi ve yaşadığınız zorlukları anlamaya odaklanırız.',
          en: 'We focus on understanding your need, your target language, and the difficulties you face.',
        },
      },
      {
        number: '02',
        title: { tr: 'Zihinsel Blok Analizi', en: 'Mental Block Analysis' },
        description: {
          tr: 'Dil öğrenmenizi zorlaştıran zihinsel kalıpları ve kaygı alanlarını birlikte netleştiririz.',
          en: 'We clarify together the mental patterns and areas of anxiety that make your language learning harder.',
        },
      },
      {
        number: '03',
        title: { tr: 'Uygun Uzman Eşleşmesi', en: 'The Right Expert Match' },
        description: {
          tr: 'İhtiyacınıza uygun AURIX uzmanını belirleriz.',
          en: 'We identify the AURIX expert suited to your need.',
        },
      },
      {
        number: '04',
        title: { tr: 'Yol Haritası', en: 'Roadmap' },
        description: {
          tr: 'Görüşme sıklığı, süreç hedefleri ve odak alanları birlikte planlanır.',
          en: 'Session frequency, process goals, and focus areas are planned together.',
        },
      },
      {
        number: '05',
        title: { tr: 'Koçluk Görüşmeleri', en: 'Coaching Sessions' },
        description: {
          tr: 'Konuşma özgüveni, motivasyon ve uygulanabilir alışkanlıklar üzerine çalışılır.',
          en: 'We work on speaking confidence, motivation, and actionable habits.',
        },
      },
      {
        number: '06',
        title: { tr: 'Değerlendirme', en: 'Evaluation' },
        description: {
          tr: 'Süreç sonunda kazanımlar, ilerleme alanları ve devam adımları gözden geçirilir.',
          en: 'At the end of the process, we review what was gained, areas of progress, and next steps.',
        },
      },
    ],
    ctaHeading: { tr: 'Dil öğrenimindeki zorluğunuzu birlikte ele alalım.', en: 'Let’s work through your language-learning challenge together.' },
    ctaText: {
      tr: 'Dil öğrenirken sizi zorlayan noktayı kısa bir ön görüşme ile değerlendirebilir, uygun koçluk sürecini birlikte planlayabiliriz.',
      en: 'We can assess what’s holding you back in a short introductory call, and plan the right coaching process together.',
    },
    ctaButton: { tr: 'Ön Görüşme Talep Et', en: 'Request an Introductory Call' },
    seoTitle: { tr: 'Dil Öğreniminde Zihinsel Dönüşüm Koçluğu', en: 'Mindset Coaching for Language Learning' },
    seoDescription: {
      tr: 'AURIX; dil öğrenme sürecinde zihinsel blokları ve motivasyon dinamiklerini ele alan özel bir koçluk süreci sunar.',
      en: 'AURIX offers a specialized coaching process that addresses mental blocks and motivation dynamics in language learning.',
    },
  },
}
