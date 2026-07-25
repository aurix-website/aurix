import type { Localized } from './i18n/types'

export type PopulatedMedia = { url?: string | null; alt?: string | null }

export type Expert = {
  id: string
  name: string
  slug?: string | null
  title?: Localized<string> | null
  photo?: PopulatedMedia | string | null
  expertiseAreas?: Localized<Array<{ item?: string | null }>> | null
  /** /uzmanlar listeleme kartı için kısa konumlandırma cümlesi */
  shortCard?: Localized<string>
  /** Kart CTA metni — Türkçe ünlü uyumu isim bazında değiştiği için sabit yazılır (ör. "Kaan Yazıcı'yı Tanıyın") */
  listingCta?: Localized<string>
  /** Uzmanın kendi vizyon cümlesi — anasayfadaki Vizyon şeridi ve uzman detay sayfasında gösterilir */
  vision?: Localized<string>
}

export const STATIC_EXPERTS: Expert[] = [
  {
    id: 'kaan-yazici',
    name: 'Kaan Yazıcı',
    slug: 'kaan-yazici',
    title: {
      tr: 'Profesyonel Koç & Takım Koçu',
      en: 'Professional Coach & Team Coach',
    },
    photo: { url: '/media/expert-kaan-yazici.jpg', alt: 'Kaan Yazıcı' },
    expertiseAreas: {
      tr: [{ item: 'Bireysel koçluk' }, { item: 'Takım koçluğu' }, { item: 'Kariyer netliği' }],
      en: [{ item: 'Personal coaching' }, { item: 'Team coaching' }, { item: 'Career clarity' }],
    },
    shortCard: {
      tr: 'Diş hekimliği alanındaki profesyonel deneyimini koçluk ve takım gelişimi yaklaşımıyla birleştirerek bireylere ve takımlara potansiyellerini daha bilinçli şekilde ortaya çıkarma sürecinde eşlik eder.',
      en: 'Brings his professional experience in dentistry together with coaching and team development, guiding individuals and teams toward a more conscious use of their potential.',
    },
    listingCta: { tr: "Kaan Yazıcı'yı Tanıyın", en: 'Meet Kaan Yazıcı' },
    vision: {
      tr: 'İnsanın doğasındaki eşsiz güce ve sürekli gelişimin o ilham verici enerjisine derinden inanıyorum. AURIX’teki temel vizyonum; hekimliğin rasyonel titizliğini ve koçluğun vizyoner ruhunu bir araya getirerek, hem kurumsal dünyada hem de bireysel kariyer yolculuklarında sınırları aşan, aydınlık ve benzersiz bir potansiyel mimarisi yaratmaktır.',
      en: 'I deeply believe in the unique power within human nature and the inspiring energy of continuous growth. My core vision at AURIX is to bring together the rational precision of dentistry and the visionary spirit of coaching, creating a bright and singular architecture of potential that transcends boundaries in both the corporate world and individual career journeys.',
    },
  },
  {
    id: 'hatice-yildirim',
    name: 'Hatice Yıldırım',
    slug: 'hatice-yildirim',
    title: {
      tr: 'Eğitim Yöneticisi, Liderlik ve Dönüşüm Koçu',
      en: 'Education Manager, Leadership and Transformation Coach',
    },
    photo: { url: '/media/expert-hatice-yildirim.png', alt: 'Hatice Yıldırım' },
    expertiseAreas: {
      tr: [{ item: 'Liderlik akademisi' }, { item: 'Kuşaklar arası uyum' }, { item: 'Kurumsal dönüşüm' }],
      en: [
        { item: 'Leadership academy' },
        { item: 'Cross-generational alignment' },
        { item: 'Organizational transformation' },
      ],
    },
    shortCard: {
      tr: 'Eğitim yönetimi, liderlik akademisi, stratejik dönüşüm, liyakat ve profesyonel koçluk deneyimini kurumların gelişim süreçlerine taşır.',
      en: 'Brings education management, leadership academy design, strategic transformation, merit-based systems, and professional coaching to organizational development.',
    },
    listingCta: { tr: "Hatice Yıldırım'ı Tanıyın", en: 'Meet Hatice Yıldırım' },
    vision: {
      tr: 'Benim için her insan bir pırlanta değerindedir; hem kendi öz ışığını üretir hem de çevresinden aldığı ışığı yansıtır. Kurumların sürdürülebilir başarısının, liderlerin kimlik dönüşümüyle mümkün olduğuna inanıyorum. Bu doğrultuda, sadece bireyi değil, kurumun organizasyonel zekasını da eş zamanlı geliştirerek; liderliğin ışığının tüm kuruma yayıldığı, çevik ve geleceği kucaklayan ekosistemler inşa etmeyi hedefliyorum. Bireysel dehanın kurumsal vizyonla birleştiği bu pırlanta pırıltısındaki dönüşüm yolculuğunda, şirketlere ve liderlerine stratejik yoldaşlık etmek temel amacımdır.',
      en: 'For me, every person is as valuable as a diamond, generating their own light while also reflecting the light they receive from those around them. I believe organizations’ sustainable success becomes possible through the identity transformation of their leaders. With this in mind, I aim to develop not only the individual but also the organization’s collective intelligence at the same time, building agile, future-embracing ecosystems where leadership’s light spreads across the whole organization. My core purpose is to be a strategic companion to companies and their leaders on this transformation journey, where individual brilliance meets institutional vision.',
    },
  },
  {
    id: 'hulya-aksu-spizuoco',
    name: 'Hülya Aksu Spizuoco',
    slug: 'hulya-aksu-spizuoco',
    title: {
      tr: 'Liderlik, Kariyer ve Siyaset İletişimi Koçu',
      en: 'Leadership, Career, and Political Communication Coach',
    },
    photo: { url: '/media/expert-hulya-aksu-spizuoco.png', alt: 'Hülya Aksu Spizuoco' },
    expertiseAreas: {
      tr: [{ item: 'Liderlik' }, { item: 'Kariyer' }, { item: 'Global perspektif' }],
      en: [{ item: 'Leadership' }, { item: 'Career' }, { item: 'Global perspective' }],
    },
    shortCard: {
      tr: 'Uluslararası eğitim, üst düzey yöneticilik, girişimcilik, siyaset iletişimi ve jeopolitik perspektifi liderlik ve kariyer koçluğuyla birleştirir.',
      en: 'Combines international education, senior executive experience, entrepreneurship, political communication, and geopolitics with leadership and career coaching.',
    },
    listingCta: { tr: "Hülya Aksu Spizuoco'yu Tanıyın", en: 'Meet Hülya Aksu Spizuoco' },
    vision: {
      tr: 'Hülya Aksu Academy’nin özünde cesur bir hedef yatar: değerlerine derinden bağlı, eşitliğe adanmış ve sürdürülebilir, uyumlu bir geleceği şekillendirebilecek vizyoner liderler yetiştirmek. Bunun yanında, kişisel gelişim alanıyla sınırlı kalmayan “Koçluk Disiplini ve Yaklaşımı”nın; devlet yönetiminden siyasete, akademiden iş dünyasına, bilimden sanata kadar yaşamın tüm alanlarına entegre olduğu bir geleceği hayal ediyoruz.',
      en: 'At the heart of Hulya Aksu Academy lies a bold aspiration: to nurture visionary leaders who are deeply grounded in their values, committed to equity, and capable of shaping a sustainable and harmonious future. Additionally, we envision a future where the highly valued “Coaching Discipline and Approach” is no longer confined to the realm of personal development but is integrated into all areas of life, including government, politics, academia, business, science, and the arts.',
    },
  },
  {
    id: 'cigdem-karavelioglu',
    name: 'Çiğdem Karavelioğlu',
    slug: 'cigdem-karavelioglu',
    title: {
      tr: 'Profesyonel Koç, Takım Koçu & Eğitmen',
      en: 'Professional Coach, Team Coach & Trainer',
    },
    photo: { url: '/media/expert-cigdem-karavelioglu.jpg', alt: 'Çiğdem Karavelioğlu' },
    expertiseAreas: {
      tr: [{ item: 'Profesyonel koçluk' }, { item: 'Takım koçluğu' }, { item: 'Psych-K®' }],
      en: [{ item: 'Professional coaching' }, { item: 'Team coaching' }, { item: 'Psych-K®' }],
    },
    shortCard: {
      tr: 'Finans ve yöneticilik deneyimini profesyonel koçluk, takım koçluğu, NLP, Psych-K®, hipnoz ve Access Consciousness® yöntemleriyle birleştirir.',
      en: 'Combines finance and management experience with professional coaching, team coaching, NLP, Psych-K®, hypnosis, and Access Consciousness® methods.',
    },
    listingCta: { tr: "Çiğdem Karavelioğlu'nu Tanıyın", en: 'Meet Çiğdem Karavelioğlu' },
    vision: {
      tr: 'Profesyonel deneyimi ve çeşitli eğitimleriyle, bütüne katkı olarak, değişmek isteyenlere ışık tutmaktadır.',
      en: 'With her professional experience and diverse training, she lights the way, as a contribution to the whole, for those who want to change.',
    },
  },
  {
    id: 'secil-ozbayir',
    name: 'Seçil Özbayır',
    slug: 'secil-ozbayir',
    title: {
      tr: 'Dönüşüm ve Kariyer Koçu, HR & Wellbeing Uzmanı',
      en: 'Transformation and Career Coach, HR & Wellbeing Specialist',
    },
    photo: { url: '/media/expert-secil-ozbayir.png', alt: 'Seçil Özbayır' },
    expertiseAreas: {
      tr: [{ item: 'Kariyer' }, { item: 'Kurumsal dönüşüm' }, { item: 'Wellbeing' }],
      en: [{ item: 'Career' }, { item: 'Organizational transformation' }, { item: 'Wellbeing' }],
    },
    shortCard: {
      tr: 'İnsan kaynakları, liderlik gelişimi, organizasyonel dönüşüm, kariyer koçluğu, wellbeing, yoga ve uluslararası geçiş süreçlerini birlikte ele alır.',
      en: 'Combines human resources, leadership development, organizational transformation, career coaching, wellbeing, yoga, and international transitions.',
    },
    listingCta: { tr: "Seçil Özbayır'ı Tanıyın", en: 'Meet Seçil Özbayır' },
    vision: {
      tr: 'İnsanların ve kurumların değişim anlarında yalnızca ayakta kalmasını değil, o dönüşümü bilinçli bir güce çevirmesini önemsiyorum. Amacım, profesyonel hedeflerle sürdürülebilir iyi oluşun aynı yolculukta ilerleyebileceğini göstermektir.',
      en: 'I care about individuals and organizations not just surviving moments of change, but turning that transformation into a conscious source of strength. My aim is to show that professional goals and sustainable wellbeing can move forward on the same journey.',
    },
  },
  {
    id: 'seda-sen',
    name: 'Seda Şen',
    slug: 'seda-sen',
    title: {
      tr: 'Kariyer & Yönetici Koçu, Kurumsal Eğitmen',
      en: 'Career & Executive Coach, Corporate Trainer',
    },
    photo: { url: '/media/expert-seda-sen.png', alt: 'Seda Şen' },
    expertiseAreas: {
      tr: [{ item: 'Kariyer' }, { item: 'Yönetici koçluğu' }, { item: 'Global uyum' }],
      en: [{ item: 'Career' }, { item: 'Executive coaching' }, { item: 'Global adaptation' }],
    },
    shortCard: {
      tr: 'Denizcilik ve lojistikteki 20 yılı aşkın deneyimini kariyer koçluğu, yönetici koçluğu, kurumsal eğitim, öğrenci gelişimi ve göç süreçleriyle birleştirir.',
      en: 'Combines 20+ years in maritime and logistics with career coaching, executive coaching, corporate training, student development, and relocation support.',
    },
    listingCta: { tr: "Seda Şen'i Tanıyın", en: 'Meet Seda Şen' },
    vision: {
      tr: 'Koçluk ve eğitimde amacım; kişinin kendi iç kaynaklarını, değerlerini ve potansiyelini fark ederek yaşamında ve işinde daha bilinçli seçimler yapmasını kolaylaştırmaktır. Teknopark ekosisteminde gençlerin, girişimcilerin ve yöneticilerin hızlı değişen dünyada yönlerini bulmalarına; güçlü yönleri, motivasyon alanları ile dünyanın ihtiyaçları arasında köprü kurmalarına alan açmayı hedefliyorum. İnanıyorum ki; insan kendisine anlamlı gelen, gerçekten istediği, zihninde netleştirdiği hedefleri olduğunda harekete geçer ve bu farkındalıklarla somut adımlar attığında hayalleri gerçek olur. İşte ben bu yolda müşterilerime hizmet etmekten büyük keyif alıyorum.',
      en: 'My purpose in coaching and training is to help people recognize their own inner resources, values, and potential, so they can make more conscious choices in their lives and work. Within the technopark ecosystem, I aim to open space for young people, entrepreneurs, and executives to find their direction in a fast-changing world, and to build a bridge between their strengths, their sources of motivation, and the needs of the world. I believe that when people have goals that feel meaningful to them, that they truly want and have clarified in their minds, they take action, and when they take concrete steps guided by that awareness, their dreams become real. It is a privilege to serve my clients on this path.',
    },
  },
  {
    id: 'ayse-kiremitci',
    name: 'Ayşe Kiremitçi',
    slug: 'ayse-kiremitci',
    title: {
      tr: 'Eğitim ve Kariyer Danışmanı, Profesyonel Koç',
      en: 'Education and Career Consultant, Professional Coach',
    },
    photo: { url: '/media/expert-ayse-kiremitci.png', alt: 'Ayşe Kiremitçi' },
    expertiseAreas: {
      tr: [{ item: 'Kariyer danışmanlığı' }, { item: 'Mesleki eğilim analizi' }, { item: 'YKS rehberlik' }],
      en: [{ item: 'Career counseling' }, { item: 'Vocational tendency analysis' }, { item: 'Exam-year mentoring' }],
    },
    shortCard: {
      tr: '30 yılı aşkın eğitim ve kurumsal deneyimini profesyonel koçluk ve Erickson koçluk yaklaşımıyla birleştirerek öğrencilere kariyer danışmanlığı, mesleki eğilim analizi ve sınav sürecinde rehberlik sunar.',
      en: 'Combines more than 30 years of education and corporate experience with professional coaching and the Erickson coaching approach, offering students career counseling, vocational tendency analysis, and exam-year guidance.',
    },
    listingCta: { tr: "Ayşe Kiremitçi'yi Tanıyın", en: 'Meet Ayşe Kiremitçi' },
    vision: {
      tr: 'Her gencin, kendi ilgi alanlarını ve güçlü yönlerini net biçimde görebildiği bir kariyer yolculuğuna hakkı olduğuna inanıyorum. Amacım, öğrencilerin sınav baskısının ötesinde kendilerine uygun ve sürdürülebilir bir yön bulmalarına eşlik etmektir.',
      en: 'I believe every young person deserves a career journey in which they can clearly see their own interests and strengths. My aim is to accompany students in finding a direction that suits them and can be sustained, well beyond exam pressure.',
    },
  },
  {
    id: 'iskender-dasdemir',
    name: 'Doç. Dr. İskender Daşdemir',
    slug: 'iskender-dasdemir',
    title: {
      tr: 'Eğitim Stratejisti, Akademisyen ve Organizasyonel Gelişim Danışmanı',
      en: 'Education Strategist, Academic and Organizational Development Consultant',
    },
    photo: { url: '/media/expert-iskender-dasdemir.png', alt: 'İskender Daşdemir' },
    expertiseAreas: {
      tr: [{ item: 'Eğitim liderliği' }, { item: 'Öğrenci koçluğu' }, { item: 'Eğitim psikolojisi' }],
      en: [{ item: 'Education leadership' }, { item: 'Student coaching' }, { item: 'Education psychology' }],
    },
    shortCard: {
      tr: 'Akademik bilgi birikimini kurumsal danışmanlık, liderlik gelişimi, öğrenci koçluğu ve eğitim psikolojisi alanlarındaki saha deneyimiyle birleştirerek bireylerin ve kurumların gelişim süreçlerine eşlik eder.',
      en: 'Combines academic expertise with hands-on experience in organizational consulting, leadership development, student coaching, and education psychology, guiding both individuals and institutions through their development processes.',
    },
    listingCta: { tr: "İskender Daşdemir'i Tanıyın", en: 'Meet İskender Daşdemir' },
    vision: {
      tr: 'Bilginin gerçek değerini, uygulamaya dönüştüğü ölçüde kazandığına inanıyorum; akademik birikimimi bireylerin gelişimine, kurumların dönüşümüne ve eğitim sistemlerinin güçlenmesine katkı sağlayan somut uygulamalara taşımayı hedefliyorum. Vizyonum, yalnızca bilgi aktaran değil; düşünen, üreten, iş birliği kuran ve değişime öncülük eden bireyler yetiştiren bir eğitim anlayışıdır.',
      en: 'I believe knowledge gains its true value only when it becomes practice; I aim to translate my academic background into applications that contribute to individual growth, institutional transformation, and stronger education systems. My vision is an education that does not merely transmit information, but shapes individuals who think, produce, collaborate, and lead change.',
    },
  },
]

export const EXPERT_PLACEHOLDERS: Record<string, string> = {
  'kaan-yazici': 'expert-kaan-yazici.jpg',
  'hatice-yildirim': 'expert-hatice-yildirim.png',
  'hulya-aksu-spizuoco': 'expert-hulya-aksu-spizuoco.png',
  'cigdem-karavelioglu': 'expert-cigdem-karavelioglu.jpg',
  'secil-ozbayir': 'expert-secil-ozbayir.png',
  'seda-sen': 'expert-seda-sen.png',
  'ayse-kiremitci': 'expert-ayse-kiremitci.png',
  'iskender-dasdemir': 'expert-iskender-dasdemir.png',
}

export function getExpertBySlug(slug: string): Expert | undefined {
  return STATIC_EXPERTS.find((expert) => expert.slug === slug)
}
