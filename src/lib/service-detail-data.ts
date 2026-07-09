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
  expertsHeading: Localized<string>
  expertSlugs: string[]
  expertsNote: Localized<string>
  ctaHeading: Localized<string>
  ctaText: Localized<string>
  ctaButton: Localized<string>
  seoTitle: Localized<string>
  seoDescription: Localized<string>
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'bireysel-kocluk': {
    slug: 'bireysel-kocluk',
    serviceId: 'bireysel',
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
    expertsHeading: { tr: 'Bireysel koçlukta çalışabileceğiniz uzmanlar', en: 'Experts you can work with in personal coaching' },
    expertSlugs: ['kaan-yazici', 'cigdem-karavelioglu', 'secil-ozbayir', 'hatice-yildirim'],
    expertsNote: {
      tr: 'Kaan Yazıcı’nın sağlık alanındaki geçmişi, kamu yönetimi eğitimi, Erickson koçluk metodolojisi ve takım koçluğu uzmanlığı; bireysel koçluk sayfasında bütünsel gelişim ve insan odaklı dönüşüm anlatısını destekler. Çiğdem Karavelioğlu’nun Erickson Coaching International eğitimi, gençlerle kariyer koçluğu deneyimi, takım koçluğu ve bireysel seans geçmişi de bireysel gelişim alanında kullanılabilir.',
      en: 'Kaan Yazıcı’s background in healthcare, his education in public administration, the Erickson coaching methodology, and his team coaching expertise support a holistic, human-centered view of development on this page. Çiğdem Karavelioğlu’s training through Erickson Coaching International, her experience in career coaching with young people, and her background in team coaching and individual sessions also apply directly to personal development.',
    },
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
    serviceId: 'liderlik',
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
    expertsHeading: { tr: 'Yönetici koçluğunda öne çıkan uzmanlarımız', en: 'Our experts in executive coaching' },
    expertSlugs: ['hulya-aksu-spizuoco', 'seda-sen', 'secil-ozbayir', 'hatice-yildirim', 'kaan-yazici'],
    expertsNote: {
      tr: 'Hülya Aksu Spizuoco’nun Koçbank, Dow Jones Telerate ve ISI Emerging Markets New York gibi kurumlarda üst düzey yöneticilik yapmış olması; liderlik, kariyer ve global perspektif için güçlü bir arka plan sunar. Seda Şen’in 20 yılı aşkın denizcilik ve lojistik deneyimi, ekip yönetimi, satış/pazarlama liderliği, yönetici koçluğu ve kurumsal eğitim alanları bu hizmet sayfasında doğrudan değerlendirilebilir. Seçil Özbayır’ın insan kaynakları, liderlik gelişimi, organizasyonel dönüşüm ve kurumsal eğitim geçmişi de yönetici koçluğu tarafını güçlendirir.',
      en: 'Hülya Aksu Spizuoco’s senior executive experience at institutions such as Koçbank, Dow Jones Telerate, and ISI Emerging Markets New York offers a strong background for leadership, career, and global perspective. Seda Şen’s more than 20 years in maritime and logistics, along with her experience in team management, sales and marketing leadership, executive coaching, and corporate training, apply directly to this page. Seçil Özbayır’s background in human resources, leadership development, organizational transformation, and corporate training also strengthens the executive coaching side.',
    },
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
    serviceId: 'kurumsal',
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
    expertsHeading: { tr: 'Kurumsal eğitimlerde öne çıkan uzmanlarımız', en: 'Our experts in corporate training' },
    expertSlugs: ['hatice-yildirim', 'secil-ozbayir', 'seda-sen', 'hulya-aksu-spizuoco', 'cigdem-karavelioglu', 'kaan-yazici'],
    expertsNote: {
      tr: 'Hatice Yıldırım’ın 30 yılı aşkın öğretmenlik, eğitim yönetimi, kurumsal liderlik ve profesyonel koçluk deneyimi; özellikle stratejik dönüşüm, liyakat, liderlik akademisi tasarımı ve kuşaklar arası sinerji başlıklarında kurumsal eğitim sayfası için güçlü bir kaynak oluşturur. Seçil Özbayır’ın 20 yılı aşkın profesyonel deneyimi, 14 yıllık insan kaynakları müdürlüğü, organizasyonel dönüşüm, liderlik gelişimi, kurumsal eğitim ve wellbeing alanları bu hizmeti destekler.',
      en: 'Hatice Yıldırım’s more than 30 years of experience in teaching, education management, corporate leadership, and professional coaching form a strong resource for this page, particularly in strategic transformation, merit-based culture, leadership academy design, and cross-generational synergy. Seçil Özbayır’s more than 20 years of professional experience, 14 years as an HR manager, and background in organizational transformation, leadership development, corporate training, and wellbeing also support this service.',
    },
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
    serviceId: 'gencler',
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
    expertsHeading: { tr: 'Öğrenci koçluğunda öne çıkan uzmanlarımız', en: 'Our experts in student coaching' },
    expertSlugs: ['seda-sen', 'cigdem-karavelioglu', 'hatice-yildirim'],
    expertsNote: {
      tr: 'Seda Şen’in 16–18 yaş kariyer farkındalığı, üniversite ve kariyer inşası başlıkları öğrenci koçluğu sayfası için doğrudan kullanılabilecek güçlü içeriklerdir. Çiğdem Karavelioğlu’nun 16–25 yaş grubuna hayat amaçları ve kariyer koçluğu verdiği bilgisi bu alanda destekleyici bir uzmanlık sunar. Hatice Yıldırım’ın eğitim yönetimi ve öğretmenlik alanındaki uzun deneyimi de öğrenci ve eğitim odaklı danışmanlık tarafını güçlendirir.',
      en: 'Seda Şen’s work in career awareness for ages 16–18 and in university and career planning applies directly to this page. Çiğdem Karavelioğlu’s experience coaching the 16–25 age group on life purpose and career offers supportive expertise in this area. Hatice Yıldırım’s long experience in education management and teaching also strengthens the student- and education-focused side of this service.',
    },
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
}
