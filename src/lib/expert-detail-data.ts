import type { Localized } from './i18n/types'

export interface ExpertRelatedService {
  label: Localized<string>
  href: string
}

export interface ExpertTimelineItem {
  period: Localized<string>
  title: Localized<string>
  description: Localized<string>
}

export interface ExpertDetail {
  slug: string
  heroShort: Localized<string>
  bio: Localized<string[]>
  timeline?: ExpertTimelineItem[]
  audience: Localized<string[]>
  expertise: Localized<string[]>
  approach: Localized<string>
  credentials: Localized<string[]>
  relatedServices: ExpertRelatedService[]
  primaryCtaLabel: Localized<string>
  secondaryCta: { label: Localized<string>; href: string }
  seoTitle: Localized<string>
  seoDescription: Localized<string>
}

export const EXPERT_DETAILS: Record<string, ExpertDetail> = {
  'kaan-yazici': {
    slug: 'kaan-yazici',
    heroShort: {
      tr: 'Diş hekimliği alanındaki profesyonel deneyimini, kamu yönetimi perspektifi ve Erickson koçluk yaklaşımıyla birleştiren Kaan Yazıcı; bireylerin ve takımların potansiyellerini daha bilinçli şekilde ortaya çıkarmalarına eşlik eder.',
      en: 'Kaan Yazıcı combines his professional experience in dentistry with a public administration perspective and the Erickson coaching approach, guiding individuals and teams toward a more conscious realization of their potential.',
    },
    bio: {
      tr: [
        'Kaan Yazıcı, 1994 yılında Ege Üniversitesi Diş Hekimliği Fakültesi’nden mezun olduğunda kariyerine mesleğini en üst düzeyde icra etme hedefiyle başlamıştır. 16 ay Diş Hekimi Asteğmen olarak görev yaptıktan sonra kendi kliniğini açarak hastalarına hizmet vermeye başlamıştır.',
        'Diş hekimliği alanındaki uzmanlığını geliştirirken insanlarla kurduğu derin bağların yalnızca fiziksel sağlığı değil, duygusal ve zihinsel sağlığı da etkilediğini fark etmiştir. Sosyal bilimlere ilgisi onu Ekonomi Fakültesi Kamu Yönetimi bölümünden mezun olmaya yönlendirmiş; yönetim, toplumsal yapılar ve insan psikolojisi üzerine edindiği bilgiler ona daha bütünsel bir bakış açısı kazandırmıştır.',
        'Bu yolculukta gerçek dönüşümün yalnızca bilgiyle değil, doğru rehberlik ve içsel motivasyonla mümkün olduğunu görerek koçluğa yönelmiştir. Erickson koçluk metodolojisinde eğitimini tamamlamış, Profesyonel Erickson Koçu unvanını kazanmış; bireysel gelişimin ötesinde etki alanını genişletmek için takım koçluğunda uzmanlaşarak Profesyonel Takım Koçu olmuştur.',
        'Bugün diş hekimliğine devam ederken aynı zamanda bireylere ve takımlara potansiyellerini ortaya çıkarmaları konusunda rehberlik etmektedir. Diş hekimi olarak sahip olduğu uzmanlığını koçluk bakış açısıyla birleştirerek danışanlarına fiziksel iyilik halinin yanında zihinsel ve duygusal denge alanında da katkı sunmayı hedefler.',
      ],
      en: [
        'Kaan Yazıcı graduated from Ege University Faculty of Dentistry in 1994 and began his career with the aim of practicing his profession at the highest level. After serving for 16 months as a dental officer, he opened his own clinic and began serving patients.',
        'While continuing to develop his expertise in dentistry, he realized that the deep bonds he formed with people affected not only their physical health but also their emotional and mental wellbeing. His interest in social sciences led him to graduate from Public Administration in the Faculty of Economics, giving him a broader perspective on management, social structures, and human psychology.',
        'Through this journey, he saw that real transformation is not only about knowledge; it also requires proper guidance and inner motivation. He turned toward coaching, completed his education in the Erickson coaching methodology, earned the title of Professional Erickson Coach, and later specialized in team coaching as a Professional Team Coach.',
        'Today, while continuing his work as a dentist, he guides individuals and teams in realizing their potential. He combines his expertise as a dentist with a coaching perspective, aiming to support not only physical wellbeing but also mental and emotional balance.',
      ],
    },
    timeline: [
      {
        period: { tr: '1994', en: '1994' },
        title: { tr: 'Ege Üniversitesi Diş Hekimliği', en: 'Ege University, Dentistry' },
        description: { tr: 'Diş Hekimliği Fakültesinden mezun oldu.', en: 'Graduated from the Faculty of Dentistry.' },
      },
      {
        period: { tr: '1994 sonrası', en: 'After 1994' },
        title: { tr: 'Diş Hekimi Asteğmenlik ve klinik', en: 'Dental officer service and clinic' },
        description: { tr: '16 ay Diş Hekimi Asteğmen olarak görev yaptı; ardından kendi kliniğini açarak hasta kabulüne başladı.', en: 'Served for 16 months as a dental officer, then opened his own clinic and began serving patients.' },
      },
      {
        period: { tr: 'Sosyal bilimler', en: 'Social sciences' },
        title: { tr: 'Kamu Yönetimi eğitimi', en: 'Public Administration education' },
        description: { tr: 'Ekonomi Fakültesi Kamu Yönetimi bölümünden mezun olarak yönetim, toplumsal yapı ve insan psikolojisi alanlarında bütünsel bir bakış geliştirdi.', en: 'Graduated from Public Administration in the Faculty of Economics, developing a holistic view of management, social structures, and human psychology.' },
      },
      {
        period: { tr: 'Koçluk', en: 'Coaching' },
        title: { tr: 'Erickson koçluk metodolojisi', en: 'Erickson coaching methodology' },
        description: { tr: 'Erickson koçluk eğitimini tamamlayarak Profesyonel Erickson Koçu unvanını aldı.', en: 'Completed Erickson coaching training and earned the title of Professional Erickson Coach.' },
      },
      {
        period: { tr: 'Takım koçluğu', en: 'Team coaching' },
        title: { tr: 'Profesyonel Takım Koçu', en: 'Professional Team Coach' },
        description: { tr: 'Bireysel gelişimin ötesinde takımlara ve ekip liderlerine eşlik etmek için takım koçluğunda uzmanlaştı.', en: 'Specialized in team coaching to support teams and team leaders beyond individual development.' },
      },
      {
        period: { tr: 'Güncel', en: 'Current' },
        title: { tr: 'Diş hekimliği ve koçluk', en: 'Dentistry and coaching' },
        description: { tr: 'Diş hekimliğine devam ederken bireylerin ve takımların potansiyellerini ortaya çıkarmalarına rehberlik etmektedir.', en: 'Continues practicing dentistry while guiding individuals and teams toward realizing their potential.' },
      },
    ],
    audience: {
      tr: [
        'Bireysel gelişim sürecinde netlik arayan bireyler',
        'Yaşamında yeni bir yön oluşturmak isteyenler',
        'Takımlar ve ekip liderleri',
        'Potansiyelini daha bilinçli kullanmak isteyen danışanlar',
        'AURIX yaklaşımını tanımak isteyen ilk danışanlar',
      ],
      en: [
        'Individuals seeking clarity in their personal development',
        'People wanting to set a new direction in their life',
        'Teams and team leaders',
        'Clients who want to use their potential more consciously',
        'First-time clients wanting to get to know the AURIX approach',
      ],
    },
    expertise: {
      tr: ['Bireysel Koçluk', 'Takım Koçluğu', 'Yaşam Geçişleri', 'Potansiyel Farkındalığı', 'Bütünsel Gelişim Yaklaşımı'],
      en: ['Personal Coaching', 'Team Coaching', 'Life Transitions', 'Potential Awareness', 'Holistic Development Approach'],
    },
    approach: {
      tr: 'Kaan Yazıcı’nın yaklaşımı, kişiye hazır cevaplar vermekten çok, danışanın kendi hedeflerini, iç kaynaklarını ve karar alanlarını daha net görmesine eşlik etmeye dayanır. AURIX çatısı altında bu yaklaşım, doğru ihtiyaç analizi ve doğru uzman eşleşmesiyle desteklenir.',
      en: 'Kaan Yazıcı’s approach is less about giving ready-made answers and more about accompanying the client toward a clearer view of their own goals, inner resources, and areas of decision. Within AURIX, this approach is supported by a proper needs analysis and the right expert match.',
    },
    credentials: {
      tr: [
        'Ege Üniversitesi Diş Hekimliği mezuniyeti',
        'Kamu Yönetimi eğitimi',
        'Erickson koçluk metodolojisi',
        'Profesyonel takım koçluğu uzmanlığı',
      ],
      en: [
        'Graduate of Dentistry, Ege University',
        'Education in Public Administration',
        'Erickson coaching methodology',
        'Professional team coaching expertise',
      ],
    },
    relatedServices: [
      { label: { tr: 'Bireysel Koçluk', en: 'Personal Coaching' }, href: '/hizmetler/bireysel-kocluk' },
      { label: { tr: 'Takım Koçluğu', en: 'Team Coaching' }, href: '/hizmetler/kurumsal-egitim' },
      { label: { tr: 'Yönetici Koçluğu', en: 'Executive Coaching' }, href: '/hizmetler/yonetici-koclugu' },
      { label: { tr: 'Ön Görüşme', en: 'Introductory Call' }, href: '/iletisim' },
    ],
    primaryCtaLabel: { tr: 'Kaan Yazıcı ile Ön Görüşme Talep Et', en: 'Request an Introductory Call with Kaan Yazıcı' },
    secondaryCta: { label: { tr: 'AURIX Yaklaşımını İncele', en: 'Explore the AURIX Approach' }, href: '/#approach-heading' },
    seoTitle: { tr: 'Kaan Yazıcı | Profesyonel Koç & Takım Koçu', en: 'Kaan Yazıcı | Professional Coach & Team Coach' },
    seoDescription: {
      tr: 'Kaan Yazıcı; diş hekimliği alanındaki deneyimini Erickson koçluk yaklaşımı ve takım koçluğu uzmanlığıyla birleştiren AURIX uzmanıdır.',
      en: 'Kaan Yazıcı is an AURIX expert who combines his background in dentistry with the Erickson coaching approach and team coaching expertise.',
    },
  },

  'hulya-aksu-spizuoco': {
    slug: 'hulya-aksu-spizuoco',
    heroShort: {
      tr: 'Uluslararası eğitim, üst düzey yöneticilik, girişimcilik ve global yaşam deneyimini liderlik, kariyer ve jeopolitik perspektifle birleştirir.',
      en: 'Combines an international education, senior executive experience, entrepreneurship, and a global life abroad with leadership, career, and geopolitical perspective.',
    },
    bio: {
      tr: [
        'Hülya Aksu Spizuoco, Marmara Üniversitesi İngilizce İktisat lisans eğitiminin ardından Londra City of Westminster College’da İşletme ve Enformasyon Teknolojileri eğitimi almıştır. Amerika’da University of San Diego’da Siyaset Bilimi ve Uluslararası İlişkiler alanında yüksek lisansını tamamlamış; Harvard Kennedy School’da Public Leadership, Community Organizing and Advocacy eğitimi almıştır.',
        'Koçbank, Dow Jones Telerate ve ISI Emerging Markets New York gibi banka ve çok uluslu yapılarda üst düzey yöneticilik yapmış; ardından uluslararası dış ticaret firmasıyla Avrupa ve Türkiye arasında girişimci ve iş insanı olarak çalışmıştır.',
        '2014 yılında Amerika’da yüksek lisansını tamamladıktan sonra akademik dergilere jeopolitik makaleler yazmış, Akdeniz Üniversitesinde siyaset doktora dersleri almış ve San Diego International Rescue Committee’de mülteci mentörü olarak görev yapmıştır.',
        '2012 yılından beri Amerika’da yaşayan Hülya Aksu Spizuoco, Bowdoin College’da Community Advisor olarak çalışmaktadır. Aynı zamanda Hülya Aksu Academy’de siyaset iletişimi, yönetici ve lider koçluğu; jeopolitik, liderlik ve kariyer başlıklarında eğitmen, koç ve mentör olarak kurum ve bireylere katkı sunmaktadır.',
      ],
      en: [
        'Hülya Aksu Spizuoco studied Economics in English at Marmara University, then Business and Information Technologies at City of Westminster College in London. She completed her MA in Political Science and International Relations at the University of San Diego and later studied Public Leadership, Community Organizing and Advocacy at Harvard Kennedy School.',
        'She held senior executive roles in banking and multinational organizations such as Koçbank, Dow Jones Telerate, and ISI Emerging Markets New York; later, she worked as an entrepreneur and business leader between Europe and Türkiye through her international trade company.',
        'After completing her master’s degree in the United States in 2014, she wrote geopolitical articles for academic journals, took political science doctoral courses at Akdeniz University, and worked as a refugee mentor at the San Diego International Rescue Committee.',
        'Living in the United States since 2012, Hülya Aksu Spizuoco currently works as a Community Advisor at Bowdoin College. Through Hülya Aksu Academy, she contributes to individuals and institutions as a trainer, coach, and mentor in political communication, executive and leadership coaching, geopolitics, leadership, and career development.',
      ],
    },
    timeline: [
      {
        period: { tr: 'Lisans', en: 'Undergraduate' },
        title: { tr: 'Marmara Üniversitesi, İngilizce İktisat', en: 'Marmara University, Economics in English' },
        description: { tr: 'Ekonomi temelini İngilizce İktisat eğitimiyle oluşturdu.', en: 'Built her economics foundation through an English-language Economics degree.' },
      },
      {
        period: { tr: 'Londra', en: 'London' },
        title: { tr: 'City of Westminster College', en: 'City of Westminster College' },
        description: { tr: 'İşletme ve Enformasyon Teknolojileri eğitimi aldı.', en: 'Studied Business and Information Technologies.' },
      },
      {
        period: { tr: 'Yüksek Lisans', en: 'MA' },
        title: { tr: 'University of San Diego', en: 'University of San Diego' },
        description: { tr: 'Siyaset Bilimi ve Uluslararası İlişkiler alanında yüksek lisansını tamamladı.', en: 'Completed an MA in Political Science and International Relations.' },
      },
      {
        period: { tr: 'Harvard', en: 'Harvard' },
        title: { tr: 'Harvard Kennedy School', en: 'Harvard Kennedy School' },
        description: { tr: 'Public Leadership, Community Organizing and Advocacy eğitimi aldı.', en: 'Completed training in Public Leadership, Community Organizing and Advocacy.' },
      },
      {
        period: { tr: 'Kurumsal kariyer', en: 'Corporate career' },
        title: { tr: 'Koçbank, Dow Jones Telerate, ISI Emerging Markets New York', en: 'Koçbank, Dow Jones Telerate, ISI Emerging Markets New York' },
        description: { tr: 'Banka ve çok uluslu firmalarda üst düzey yöneticilik yaptı.', en: 'Held senior executive roles in banking and multinational organizations.' },
      },
      {
        period: { tr: '2012-güncel', en: '2012-current' },
        title: { tr: 'Amerika yaşamı ve akademik/toplumsal katkı', en: 'Life in the United States and academic/social contribution' },
        description: { tr: 'Amerika’da yaşamaktadır; jeopolitik yazılar, doktora dersleri, mülteci mentörlüğü ve Bowdoin College Community Advisor göreviyle çalışmalarını sürdürmektedir.', en: 'Lives in the United States; continues her work through geopolitical writing, doctoral-level political science courses, refugee mentoring, and her Community Advisor role at Bowdoin College.' },
      },
      {
        period: { tr: 'Güncel', en: 'Current' },
        title: { tr: 'Hülya Aksu Academy', en: 'Hülya Aksu Academy' },
        description: { tr: 'Siyaset iletişimi, yönetici ve lider koçluğu, jeopolitik, liderlik ve kariyer alanlarında eğitmen, koç ve mentör olarak çalışmaktadır.', en: 'Works as a trainer, coach, and mentor in political communication, executive and leadership coaching, geopolitics, leadership, and career.' },
      },
    ],
    audience: {
      tr: [
        'Liderler ve yöneticiler',
        'Kariyer yönünü global ölçekte değerlendirmek isteyen profesyoneller',
        'Uluslararası perspektif arayan danışanlar',
        'Siyaset iletişimi ve liderlik alanında gelişmek isteyen kişiler',
        'Global yaşam ve kariyer geçişi yaşayan bireyler',
      ],
      en: [
        'Leaders and managers',
        'Professionals who want to assess their career direction on a global scale',
        'Clients seeking an international perspective',
        'People wanting to develop in political communication and leadership',
        'Individuals going through a global life and career transition',
      ],
    },
    expertise: {
      tr: ['Liderlik Koçluğu', 'Yönetici Koçluğu', 'Kariyer Koçluğu', 'Siyaset İletişimi', 'Jeopolitik Perspektif', 'Global Uyum'],
      en: ['Leadership Coaching', 'Executive Coaching', 'Career Coaching', 'Political Communication', 'Geopolitical Perspective', 'Global Adaptation'],
    },
    approach: {
      tr: 'Hülya Aksu Spizuoco’nun yaklaşımı, liderlik ve kariyer kararlarını yalnızca bireysel hedefler üzerinden değil; toplumsal, kültürel, ekonomik ve global bağlamlar içinde değerlendirmeye dayanır. Bu yönüyle AURIX’in uluslararası ve stratejik bakışını güçlendirir.',
      en: 'Hülya Aksu Spizuoco’s approach evaluates leadership and career decisions not only through individual goals, but within their social, cultural, economic, and global context. In this way, she strengthens the international and strategic outlook of AURIX.',
    },
    credentials: {
      tr: [
        'Marmara Üniversitesi, İngilizce İktisat',
        'University of San Diego, yüksek lisans',
        'Harvard Kennedy School eğitimi',
        'Koçbank, Dow Jones Telerate ve ISI Emerging Markets New York — üst düzey yöneticilik deneyimi',
      ],
      en: [
        'Marmara University, Economics (English)',
        'University of San Diego, graduate degree',
        'Harvard Kennedy School executive education',
        'Senior executive experience at Koçbank, Dow Jones Telerate, and ISI Emerging Markets New York',
      ],
    },
    relatedServices: [
      { label: { tr: 'Yönetici Koçluğu', en: 'Executive Coaching' }, href: '/hizmetler/yonetici-koclugu' },
      { label: { tr: 'Kariyer Koçluğu', en: 'Career Coaching' }, href: '/hizmetler/bireysel-kocluk' },
      { label: { tr: 'Global Uyum ve Kariyer Koçluğu', en: 'Global Adaptation and Career Coaching' }, href: '/hizmetler/ogrenci-koclugu' },
      { label: { tr: 'Kurumsal Eğitimler', en: 'Corporate Training' }, href: '/hizmetler/kurumsal-egitim' },
    ],
    primaryCtaLabel: { tr: 'Hülya Aksu Spizuoco ile Ön Görüşme Talep Et', en: 'Request an Introductory Call with Hülya Aksu Spizuoco' },
    secondaryCta: { label: { tr: 'Global Kariyer Desteğini İncele', en: 'Explore Global Career Support' }, href: '/hizmetler/ogrenci-koclugu' },
    seoTitle: { tr: 'Hülya Aksu Spizuoco | Liderlik, Kariyer ve Global Perspektif', en: 'Hülya Aksu Spizuoco | Leadership, Career, and Global Perspective' },
    seoDescription: {
      tr: 'Hülya Aksu Spizuoco; uluslararası eğitim, üst düzey yöneticilik ve global yaşam deneyimini liderlik, kariyer ve siyaset iletişimi alanlarında sunar.',
      en: 'Hülya Aksu Spizuoco brings an international education, senior executive experience, and a global life abroad to leadership, career, and political communication.',
    },
  },

  'cigdem-karavelioglu': {
    slug: 'cigdem-karavelioglu',
    heroShort: {
      tr: 'Finans, yatırım ve yöneticilik deneyimini profesyonel koçluk, takım koçluğu, NLP, Psych-K®, hipnoz ve Access Consciousness® yaklaşımlarıyla birleştirir.',
      en: 'Combines finance, investment, and leadership experience with professional coaching, team coaching, NLP, Psych-K®, hypnosis, and Access Consciousness® practices.',
    },
    bio: {
      tr: [
        'Çiğdem Karavelioğlu, 1985 yılında Adana Ayas Koleji’nden mezun olmuş, 1991 yılında ODTÜ Fen Edebiyat Fakültesi İstatistik Bölümünü tamamlamıştır. 1992-2010 yılları arasında borsa aracı kurumları ve banka yatırım bölümlerinde VIP dealer ve yönetici olarak görev almış; son olarak Deniz Yatırım Çukurova Bölge Müdürü pozisyonunda sekiz yıl çalışmıştır.',
        '2010-2012 yıllarında Viyana’da yaşayarak NLP ve kişisel gelişim eğitimleri almış; 2012-2014 yılları arasında ikinci mesleği olarak Erickson Coaching International’dan koçluk eğitimi ve lisansını tamamlamıştır. Bu dönemde 16-25 yaş grubu gençlere hayat amaçları ve hedefleri üzerine kariyer koçluğu, her yaş grubundan danışana ise değişim ve katkı odaklı koçluk hizmeti vermeye başlamıştır.',
        '2013 yılında Erickson Coaching International kurucusu Marilyn Atkinson’dan Eğitimcinin Eğitimi programını almış, ardından IHA’ya bağlı bir kurumdan hipnoz lisansını tamamlamıştır. 2013’ten itibaren Access Bars seansları, Access Consciousness® eğitimleri ve kişisel gelişim eğitimleri vermeye başlamıştır.',
        '2016-2020 yılları arasında Amerika’da yaşamış; 2017’de Eckhart Tolle’den sekiz ay süren Uyanış Okulu eğitimini tamamlamıştır. Türkiye’ye döndükten sonra bilinçaltı inanç değiştirme tekniklerinden Psych-K® lisansını almıştır. Bu yöntem, kas testiyle anlık teyit alınmasına ve beyin hemisferlerinin dengelenmesine dayanan hızlı bir bilinçaltı inanç değişim modeli olarak kullanılmaktadır.',
        'Halen sosyal projelerde, vakıf ve derneklerde koçluk; TEV’de mentorluk yapmaktadır. Bireysel seanslarda Psych-K®, NLP, hipnoz ve Access Consciousness® yöntemleriyle destek vermektedir. 2023 yılında Erickson Coaching International Level 2 sürecini tamamlayarak Takım Koçluğu lisansını almış; firmalar, takımlar, ekipler ve şirketlerle çalışarak hedeflerine ulaşmalarını kolaylaştırmaktadır.',
        'Profesyonel deneyimi ve çok yönlü eğitimleriyle, bütüne katkı sunma niyetiyle değişmek isteyenlere ışık tutmaktadır.',
      ],
      en: [
        'Çiğdem Karavelioğlu graduated from Adana Ayas College in 1985 and completed the Department of Statistics at the Faculty of Arts and Sciences, METU, in 1991. Between 1992 and 2010, she worked in brokerage firms and bank investment departments as a VIP dealer and manager; most recently, she served for eight years as Çukurova Regional Manager at Deniz Yatırım.',
        'Between 2010 and 2012, she lived in Vienna and received training in NLP and personal development. Between 2012 and 2014, she completed her coaching education and license through Erickson Coaching International as a second profession. During this period, she began offering career coaching to young people aged 16-25 on life purpose and goals, as well as coaching services for people of all ages focused on change and contribution.',
        'In 2013, she completed Training of Trainers with Marilyn Atkinson, founder of Erickson Coaching International, and subsequently received a hypnosis license from an IHA-affiliated institution. Since 2013, she has been offering Access Bars sessions, Access Consciousness® trainings, and personal development trainings.',
        'Between 2016 and 2020, she lived in the United States. In 2017, she completed Eckhart Tolle’s eight-month School of Awakening program. After returning to Türkiye, she obtained a Psych-K® license, a subconscious belief change method used to support rapid belief transformation through muscle testing and balancing the brain hemispheres.',
        'She currently provides coaching in social projects, foundations, and associations, and mentors through TEV. In individual sessions, she supports clients through Psych-K®, NLP, hypnosis, and Access Consciousness® methods. In 2023, she completed Erickson Coaching International Level 2 and received her Team Coaching license, working with companies, teams, groups, and organizations to help them reach their goals.',
        'With her professional experience and diverse trainings, she aims to contribute to the whole and illuminate the path for those who want to change.',
      ],
    },
    timeline: [
      {
        period: { tr: '1985', en: '1985' },
        title: { tr: 'Adana Ayas Koleji', en: 'Adana Ayas College' },
        description: { tr: 'Lise eğitimini tamamladı.', en: 'Completed high school education.' },
      },
      {
        period: { tr: '1991', en: '1991' },
        title: { tr: 'ODTÜ Fen Edebiyat Fakültesi, İstatistik', en: 'METU Faculty of Arts and Sciences, Statistics' },
        description: { tr: 'İstatistik Bölümünden mezun oldu.', en: 'Graduated from the Department of Statistics.' },
      },
      {
        period: { tr: '1992-2010', en: '1992-2010' },
        title: { tr: 'Finans ve yatırım sektörü', en: 'Finance and investment sector' },
        description: {
          tr: 'Borsa aracı kurumları ve banka yatırım bölümlerinde VIP dealer ve yönetici olarak görev aldı. Deniz Yatırım Çukurova Bölge Müdürü olarak sekiz yıl çalıştı.',
          en: 'Worked as a VIP dealer and manager in brokerage firms and bank investment departments. Served for eight years as Çukurova Regional Manager at Deniz Yatırım.',
        },
      },
      {
        period: { tr: '2010-2012', en: '2010-2012' },
        title: { tr: 'Viyana dönemi', en: 'Vienna period' },
        description: { tr: 'Viyana’da yaşayarak NLP ve kişisel gelişim eğitimleri aldı.', en: 'Lived in Vienna and received NLP and personal development trainings.' },
      },
      {
        period: { tr: '2012-2014', en: '2012-2014' },
        title: { tr: 'Erickson Coaching International', en: 'Erickson Coaching International' },
        description: {
          tr: 'Koçluk eğitimi ve lisansını aldı; gençlere kariyer koçluğu ve farklı yaş gruplarına değişim odaklı koçluk hizmeti vermeye başladı.',
          en: 'Completed coaching training and licensing; began offering career coaching to young people and change-focused coaching to different age groups.',
        },
      },
      {
        period: { tr: '2013', en: '2013' },
        title: { tr: 'Eğitimcinin Eğitimi, Hipnoz ve Access Bars', en: 'Training of Trainers, Hypnosis, and Access Bars' },
        description: {
          tr: 'Marilyn Atkinson’dan Eğitimcinin Eğitimi aldı; IHA’ya bağlı bir kurumdan hipnoz lisansını tamamladı. Access Bars seansları ve kişisel gelişim eğitimleri vermeye başladı.',
          en: 'Completed Training of Trainers with Marilyn Atkinson; received a hypnosis license from an IHA-affiliated institution. Began offering Access Bars sessions and personal development trainings.',
        },
      },
      {
        period: { tr: '2016-2020', en: '2016-2020' },
        title: { tr: 'Amerika dönemi', en: 'United States period' },
        description: { tr: 'Amerika’da yaşadı; 2017’de Eckhart Tolle’nin sekiz aylık Uyanış Okulu eğitimini tamamladı.', en: 'Lived in the United States; completed Eckhart Tolle’s eight-month School of Awakening program in 2017.' },
      },
      {
        period: { tr: '2020 sonrası', en: 'After 2020' },
        title: { tr: 'Psych-K® ve bireysel seanslar', en: 'Psych-K® and individual sessions' },
        description: {
          tr: 'Türkiye’ye dönerek Psych-K® lisansını aldı. Bireysel seanslarda Psych-K®, NLP, hipnoz ve Access Consciousness® yöntemleriyle destek vermeye başladı.',
          en: 'Returned to Türkiye and obtained a Psych-K® license. Began supporting individual clients through Psych-K®, NLP, hypnosis, and Access Consciousness® methods.',
        },
      },
      {
        period: { tr: '2023', en: '2023' },
        title: { tr: 'Takım Koçluğu Lisansı', en: 'Team Coaching License' },
        description: {
          tr: 'Erickson Coaching International Level 2 sürecini tamamlayarak Takım Koçluğu lisansını aldı; firmalar, takımlar ve şirketlerle çalışmaya devam etmektedir.',
          en: 'Completed Erickson Coaching International Level 2 and received her Team Coaching license; continues working with companies, teams, and organizations.',
        },
      },
      {
        period: { tr: 'Güncel', en: 'Current' },
        title: { tr: 'Sosyal projeler ve mentorluk', en: 'Social projects and mentoring' },
        description: {
          tr: 'Sosyal projelerde, vakıf ve derneklerde koçluk; TEV’de mentorluk yapmaktadır.',
          en: 'Provides coaching in social projects, foundations, and associations, and mentors through TEV.',
        },
      },
    ],
    audience: {
      tr: [
        'Bireysel gelişim sürecindeki danışanlar',
        'Gençler ve kariyer yönünü arayan bireyler',
        'Takımlar ve ekipler',
        'Kariyer geçişi yaşayan profesyoneller',
        'Bilinçaltı inanç değişimi, farkındalık ve dönüşüm arayan kişiler',
        'Şirketler, firmalar ve hedef odaklı çalışan ekipler',
      ],
      en: [
        'Clients in a personal development process',
        'Young people and individuals seeking career direction',
        'Teams and groups',
        'Professionals going through a career transition',
        'People seeking subconscious belief change, awareness, and transformation',
        'Companies, organizations, and goal-oriented teams',
      ],
    },
    expertise: {
      tr: ['Profesyonel Koçluk', 'Takım Koçluğu', 'Kariyer Koçluğu', 'NLP', 'Hipnoz', 'Psych-K®', 'Access Consciousness®', 'Access Bars', 'Kişisel Dönüşüm'],
      en: ['Professional Coaching', 'Team Coaching', 'Career Coaching', 'NLP', 'Hypnosis', 'Psych-K®', 'Access Consciousness®', 'Access Bars', 'Personal Transformation'],
    },
    approach: {
      tr: 'Çiğdem Karavelioğlu’nun yaklaşımı; profesyonel koçluk, NLP, hipnoz, Access Consciousness® ve Psych-K® gibi farklı yöntemleri danışanın ihtiyacına göre bir araya getirir. Bireysel çalışmalarda değişim, farkındalık ve bilinçaltı inanç dönüşümüne; takım çalışmalarında ise ortak hedef, iletişim, ilerleme ve hedefe ulaşma kolaylığına odaklanır.',
      en: 'Çiğdem Karavelioğlu’s approach brings together professional coaching, NLP, hypnosis, Access Consciousness®, and Psych-K® according to the client’s need. In individual work, she focuses on change, awareness, and subconscious belief transformation; in team work, she focuses on shared goals, communication, progress, and making goal achievement easier.',
    },
    credentials: {
      tr: [
        'ODTÜ Fen Edebiyat Fakültesi, İstatistik',
        'Erickson Coaching International — profesyonel koçluk eğitimi ve lisansı',
        'Erickson Coaching International Level 2',
        'Takım Koçluğu lisansı',
        'Marilyn Atkinson — Eğitimcinin Eğitimi',
        'NLP ve kişisel gelişim eğitimleri',
        'Hipnoz lisansı',
        'Access Bars ve Access Consciousness® eğitimleri',
        'Eckhart Tolle — Uyanış Okulu',
        'Psych-K® lisansı',
      ],
      en: [
        'METU Faculty of Arts and Sciences, Statistics',
        'Erickson Coaching International — professional coaching training and license',
        'Erickson Coaching International Level 2',
        'Team Coaching license',
        'Marilyn Atkinson — Training of Trainers',
        'NLP and personal development trainings',
        'Hypnosis license',
        'Access Bars and Access Consciousness® trainings',
        'Eckhart Tolle — School of Awakening',
        'Psych-K® license',
      ],
    },
    relatedServices: [
      { label: { tr: 'Bireysel Koçluk', en: 'Personal Coaching' }, href: '/hizmetler/bireysel-kocluk' },
      { label: { tr: 'Takım Koçluğu', en: 'Team Coaching' }, href: '/hizmetler/kurumsal-egitim' },
      { label: { tr: 'Kariyer Koçluğu', en: 'Career Coaching' }, href: '/hizmetler/bireysel-kocluk' },
      { label: { tr: 'Öğrenci / Gençlik Koçluğu', en: 'Student / Youth Coaching' }, href: '/hizmetler/ogrenci-koclugu' },
    ],
    primaryCtaLabel: { tr: 'Çiğdem Karavelioğlu ile Ön Görüşme Talep Et', en: 'Request an Introductory Call with Çiğdem Karavelioğlu' },
    secondaryCta: { label: { tr: 'Bireysel Koçluğu İncele', en: 'Explore Personal Coaching' }, href: '/hizmetler/bireysel-kocluk' },
    seoTitle: { tr: 'Çiğdem Karavelioğlu | Profesyonel Koç, Takım Koçu & Eğitmen', en: 'Çiğdem Karavelioğlu | Professional Coach, Team Coach & Trainer' },
    seoDescription: {
      tr: 'Çiğdem Karavelioğlu; finans sektörü deneyimini bireysel koçluk, takım koçluğu, kariyer ve gençlik çalışmalarıyla birleştirir.',
      en: 'Çiğdem Karavelioğlu combines her experience in finance with personal coaching, team coaching, career, and youth work.',
    },
  },

  'hatice-yildirim': {
    slug: 'hatice-yildirim',
    heroShort: {
      tr: 'Eğitim yönetimi, kurumsal liderlik, profesyonel koçluk ve NLP uzmanlığını stratejik dönüşüm, liyakat ve liderlik akademisi tasarımıyla birleştirir.',
      en: 'Combines education management, corporate leadership, professional coaching, and NLP expertise with strategic transformation, merit-based systems, and leadership academy design.',
    },
    bio: {
      tr: [
        'Hatice Yıldırım kendini öğretmenlik, eğitim yönetimi, kurumsal liderlik ve profesyonel koçluk alanlarında 30 yılı aşkın deneyime sahip bir dönüşüm tasarımcısı olarak konumlandırır. Yönetim ve Denetim üzerine tamamladığı yüksek lisans birikimini Erickson International (ICF) profesyonel koçluk ve NLP uzmanlığıyla birleştirerek bireylerin ve kurumların içindeki insan cevherini ortaya çıkarmaya odaklanır.',
        'Teknopark ekosistemi gibi inovasyonun merkezinde yer alan yapılar için farklı kuşakların sinerjisini yönetebilen, liyakat esaslı liderlik modelleri tasarlayan ve kurumsal başarı kültürünü geliştiren bir çözüm ortağıdır.',
        'Uzun yıllar Orion Vakfı Piri Reis Okulları, SEV ve UKEB gibi prestijli eğitim kurumlarında yöneticilik ve koordinatörlük yaparak binlerce bireyin gelişim yolculuğuna liderlik etmiştir. 2022’den bu yana Erickson metodolojisiyle bireylerin ve kurumların kimliklerindeki ışığı görmelerini sağlayan bir yaşam yoldaşlığı yürütmektedir.',
        '1999’dan beri sürdürdüğü gönüllü eğitim projeleriyle insan odaklı toplumsal dönüşüm çalışmalarında aktif rol alır.',
      ],
      en: [
        'Hatice Yıldırım describes herself as a transformation designer with more than 30 years of experience in teaching, education management, corporate leadership, and professional coaching. She combines her graduate background in Management and Supervision with Erickson International (ICF) professional coaching and NLP expertise, focusing on bringing out the human potential within individuals and organizations.',
        'For innovation-centered structures such as Teknopark ecosystems, she acts as a solution partner who manages cross-generational synergy, designs merit-based leadership models, and develops a culture of sustainable success.',
        'She has led the development journey of thousands of individuals through long-standing management and coordination roles in prestigious educational institutions such as Orion Foundation Piri Reis Schools, SEV, and UKEB. Since 2022, she has been working with the Erickson methodology to help individuals and institutions see the light within their identities.',
        'Through volunteer education projects since 1999, she actively contributes to human-centered social transformation.',
      ],
    },
    timeline: [
      {
        period: { tr: '30+ yıl', en: '30+ years' },
        title: { tr: 'Eğitim, yönetim ve liderlik deneyimi', en: 'Education, management, and leadership experience' },
        description: { tr: 'Öğretmenlik, eğitim yönetimi, kurumsal liderlik ve koordinasyon alanlarında uzun soluklu deneyim kazandı.', en: 'Built long-standing experience in teaching, education management, corporate leadership, and coordination.' },
      },
      {
        period: { tr: 'Eğitim kurumları', en: 'Educational institutions' },
        title: { tr: 'Orion Vakfı Piri Reis Okulları, SEV, UKEB', en: 'Orion Foundation Piri Reis Schools, SEV, UKEB' },
        description: { tr: 'Prestijli eğitim kurumlarında yöneticilik ve koordinatörlük yaparak binlerce bireyin gelişim yolculuğuna liderlik etti.', en: 'Led the development journey of thousands through management and coordination roles in prestigious educational institutions.' },
      },
      {
        period: { tr: '1999-güncel', en: '1999-current' },
        title: { tr: 'Gönüllü eğitim projeleri', en: 'Volunteer education projects' },
        description: { tr: 'Okuma-yazma seferberliklerinden yaz okulu koordinatörlüğüne kadar geniş bir alanda öğrenimi kolaylaştırma misyonunu sürdürmektedir.', en: 'Continues a mission of facilitating learning across a broad range of volunteer education projects, from literacy initiatives to summer school coordination.' },
      },
      {
        period: { tr: '2022-güncel', en: '2022-current' },
        title: { tr: 'Profesyonel koçluk ve NLP', en: 'Professional coaching and NLP' },
        description: { tr: 'Erickson metodolojisiyle bireylerin ve kurumların kimliklerindeki ışığı görmelerini sağlayan koçluk çalışmaları yürütmektedir.', en: 'Runs coaching work through the Erickson methodology, helping individuals and organizations see the light within their identities.' },
      },
    ],
    audience: {
      tr: [
        'Kurumlar ve Teknopark ekosistemleri',
        'Liderler ve yöneticiler',
        'Eğitim kurumları',
        'Liyakat temelli liderlik sistemi kurmak isteyen yapılar',
        'Kuşaklar arası uyum ve sinerji ihtiyacı olan ekipler',
        'Kimlik dönüşümü ve potansiyel yönetimi arayan bireyler',
      ],
      en: [
        'Organizations and Teknopark ecosystems',
        'Leaders and managers',
        'Educational institutions',
        'Structures seeking merit-based leadership systems',
        'Teams needing cross-generational alignment and synergy',
        'Individuals seeking identity transformation and potential management',
      ],
    },
    expertise: {
      tr: ['Stratejik Dönüşüm ve Liyakat', 'Liderlik Akademisi Tasarımı', 'Kimlik Dönüşümü', 'Potansiyel Yönetimi', 'Kuşaklar Arası Sinerji', 'Eğitim Yönetimi', 'Profesyonel Koçluk ve NLP'],
      en: ['Strategic Transformation and Merit', 'Leadership Academy Design', 'Identity Transformation', 'Potential Management', 'Cross-Generational Synergy', 'Education Management', 'Professional Coaching and NLP'],
    },
    approach: {
      tr: 'Hatice Yıldırım’ın yaklaşımı, her insanı kendi öz ışığını üreten ve çevresinden aldığı ışığı yansıtabilen bir pırlanta olarak görür. Kurumların sürdürülebilir başarısının liderlerin kimlik dönüşümüyle mümkün olduğuna inanır; bireysel dehayı kurumsal vizyonla birleştiren, çevik ve geleceği kucaklayan ekosistemler inşa etmeyi hedefler.',
      en: 'Hatice Yıldırım’s approach sees every person as a diamond that both generates its own light and reflects the light it receives. She believes sustainable organizational success becomes possible through leaders’ identity transformation, aiming to build agile, future-embracing ecosystems where individual brilliance meets institutional vision.',
    },
    credentials: {
      tr: [
        'Dokuz Eylül Üniversitesi — Eğitim Yönetimi ve Denetçiliği yüksek lisansı',
        'Dokuz Eylül Üniversitesi Buca Eğitim Fakültesi — lisans',
        'Erickson International — ICF akredite koçluk diploması, Modül 1-4',
        'Erickson International — Certified NLP Practitioner',
        'Çoklu Zeka Kuramı, Pass Teorisi, Yaratıcı Drama, Mind Lab sertifikaları',
      ],
      en: [
        'Dokuz Eylül University — MA in Educational Management and Supervision',
        'Dokuz Eylül University Buca Faculty of Education — undergraduate degree',
        'Erickson International — ICF-accredited coaching diploma, Modules 1-4',
        'Erickson International — Certified NLP Practitioner',
        'Certificates in Multiple Intelligences Theory, PASS Theory, Creative Drama, and Mind Lab',
      ],
    },
    relatedServices: [
      { label: { tr: 'Kurumsal Eğitim', en: 'Corporate Training' }, href: '/hizmetler/kurumsal-egitim' },
      { label: { tr: 'Yönetici Koçluğu', en: 'Executive Coaching' }, href: '/hizmetler/yonetici-koclugu' },
      { label: { tr: 'Öğrenci Koçluğu', en: 'Student Coaching' }, href: '/hizmetler/ogrenci-koclugu' },
      { label: { tr: 'Liderlik Gelişimi', en: 'Leadership Development' }, href: '/hizmetler/yonetici-koclugu' },
    ],
    primaryCtaLabel: { tr: 'Hatice Yıldırım ile Ön Görüşme Talep Et', en: 'Request an Introductory Call with Hatice Yıldırım' },
    secondaryCta: { label: { tr: 'Kurumsal Eğitimleri İncele', en: 'Explore Corporate Training' }, href: '/hizmetler/kurumsal-egitim' },
    seoTitle: { tr: 'Hatice Yıldırım | Eğitim Yöneticisi, Liderlik ve Dönüşüm Koçu', en: 'Hatice Yıldırım | Education Manager, Leadership and Transformation Coach' },
    seoDescription: {
      tr: 'Hatice Yıldırım; eğitim yönetimi, kurumsal liderlik, stratejik dönüşüm, liyakat ve profesyonel koçluk alanlarında 30 yılı aşkın deneyime sahiptir.',
      en: 'Hatice Yıldırım has more than 30 years of experience in education management, corporate leadership, strategic transformation, merit-based systems, and professional coaching.',
    },
  },

  'secil-ozbayir': {
    slug: 'secil-ozbayir',
    heroShort: {
      tr: '20 yılı aşkın insan kaynakları, liderlik gelişimi, organizasyonel dönüşüm ve koçluk deneyimini wellbeing, yoga ve uluslararası geçiş süreçleriyle birleştirir.',
      en: 'Combines more than 20 years of HR, leadership development, organizational transformation, and coaching experience with wellbeing, yoga, and international transition work.',
    },
    bio: {
      tr: [
        'Seçil Özbayır; Dönüşüm ve Kariyer Koçu, NLP Uzmanı, Hatha & Yin Yoga Eğitmeni, HR ve kurumsal sürdürülebilirlik alanlarında çalışan çok yönlü bir gelişim profesyonelidir. 20 yılı aşkın profesyonel deneyimini İnsan Kaynakları, liderlik gelişimi, organizasyonel dönüşüm ve koçluk alanlarında birleştirir.',
        'Makine, tekstil, yapı malzemeleri ve çimento sektörlerinde farklı görevler üstlenmiş; son olarak 14 yıl boyunca İnsan Kaynakları Müdürlüğü görevini yürütmüştür. 2022 yılından itibaren çalışmalarını profesyonel koçluk, liderlik gelişimi, kariyer danışmanlığı, kurumsal eğitim ve wellbeing projelerine yoğunlaştırmıştır.',
        'Bugün bireylerin ve kurumların dönüşüm süreçlerine liderlik gelişimi, değişim yönetimi, çalışan deneyimi, takım gelişimi ve farkındalık temelli gelişim programlarıyla destek verir. Türkiye’deki güçlü kurumsal deneyimini Hollanda’daki uluslararası yaşam deneyimiyle birleştirerek özellikle değişim, yeniden yapılanma ve geçiş süreçlerinde bireylere ve ekiplere rehberlik eder.',
        '2024 Ekim ayında Hollanda’ya taşınması, kariyer geçişi ve yeni bir ülkede yaşam kurma sürecini bizzat deneyimlemesine; Transitional Intelligence (TQ) alanında derinleşmesine vesile olmuştur.',
      ],
      en: [
        'Seçil Özbayır is a transformation and career coach, NLP specialist, Hatha & Yin yoga instructor, and a multidimensional development professional working across HR and corporate sustainability. She combines more than 20 years of professional experience in Human Resources, leadership development, organizational transformation, and coaching.',
        'She held roles across machinery, textile, building materials, and cement sectors, most recently serving for 14 years as Human Resources Manager. Since 2022, she has focused her work on professional coaching, leadership development, career consulting, corporate training, and wellbeing projects.',
        'Today, she supports individual and organizational transformation through leadership development, change management, employee experience, team development, and awareness-based development programs. She combines her strong corporate experience in Türkiye with her international life experience in the Netherlands, guiding individuals and teams especially through change, restructuring, and transition processes.',
        'Moving to the Netherlands in October 2024 allowed her to personally experience career transition and building a life in a new country, deepening her work in Transitional Intelligence (TQ).',
      ],
    },
    timeline: [
      {
        period: { tr: '20+ yıl', en: '20+ years' },
        title: { tr: 'Kurumsal deneyim', en: 'Corporate experience' },
        description: { tr: 'Makine, tekstil, yapı malzemeleri ve çimento sektörlerinde farklı görevler üstlendi.', en: 'Held various roles across machinery, textile, building materials, and cement sectors.' },
      },
      {
        period: { tr: '14 yıl', en: '14 years' },
        title: { tr: 'İnsan Kaynakları Müdürlüğü', en: 'Human Resources Manager' },
        description: { tr: 'Kurumsal yapıda insan kaynakları, çalışan deneyimi ve organizasyonel gelişim süreçlerini yönetti.', en: 'Managed HR, employee experience, and organizational development processes in a corporate environment.' },
      },
      {
        period: { tr: '2022-güncel', en: '2022-current' },
        title: { tr: 'Koçluk, liderlik gelişimi ve wellbeing', en: 'Coaching, leadership development, and wellbeing' },
        description: { tr: 'Profesyonel koçluk, kariyer danışmanlığı, kurumsal eğitim ve wellbeing projelerine odaklandı.', en: 'Focused on professional coaching, career consulting, corporate training, and wellbeing projects.' },
      },
      {
        period: { tr: '2024', en: '2024' },
        title: { tr: 'Hollanda ve Transitional Intelligence', en: 'Netherlands and Transitional Intelligence' },
        description: { tr: 'Hollanda’ya taşınmasıyla kariyer geçişi, yeni ülkede yaşam kurma ve TQ alanında derinleşti.', en: 'Moved to the Netherlands, deepening her work in career transition, building life in a new country, and TQ.' },
      },
    ],
    audience: {
      tr: [
        'Kariyer değişimi yaşayan profesyoneller',
        'Liderler ve yöneticiler',
        'İnsan kaynakları ve organizasyonel dönüşüm ekipleri',
        'Yeni ülke / yeni kariyer geçişi yaşayan bireyler',
        'Wellbeing ve farkındalık temelli gelişim arayan kişiler',
        'Kurumlar, takımlar ve yeniden yapılanma süreçleri',
      ],
      en: [
        'Professionals going through career change',
        'Leaders and managers',
        'Human resources and organizational transformation teams',
        'Individuals transitioning to a new country or a new career',
        'People seeking wellbeing- and awareness-based development',
        'Organizations, teams, and restructuring processes',
      ],
    },
    expertise: {
      tr: ['Liderlik ve Yönetici Gelişimi', 'Profesyonel Koçluk', 'Kariyer Koçluğu', 'Organizasyonel Dönüşüm', 'İnsan Kaynakları Danışmanlığı', 'Kurumsal Eğitim', 'Wellbeing', 'Mindfulness', 'Yoga', 'Transitional Intelligence'],
      en: ['Leadership and Executive Development', 'Professional Coaching', 'Career Coaching', 'Organizational Transformation', 'Human Resources Consulting', 'Corporate Training', 'Wellbeing', 'Mindfulness', 'Yoga', 'Transitional Intelligence'],
    },
    approach: {
      tr: 'Seçil Özbayır’ın yaklaşımı, kurumsal sistem bakışı ile bireysel dönüşüm ihtiyacını birlikte ele alır. Mühendislik altyapısı, insan kaynakları yöneticiliği, koçluk, wellbeing ve yoga çalışmalarını birleştirerek kişinin hem profesyonel hedeflerini hem de sürdürülebilir gelişim kapasitesini destekler.',
      en: 'Seçil Özbayır’s approach brings together a systemic organizational view and the need for individual transformation. Combining engineering, HR management, coaching, wellbeing, and yoga, she supports both professional goals and sustainable development capacity.',
    },
    credentials: {
      tr: [
        'Yıldız Teknik Üniversitesi — Endüstri Mühendisliği',
        'İstanbul Üniversitesi — MBA, İngilizce',
        'Boğaziçi Üniversitesi — İnsan Kaynakları Yönetimi',
        'Harvard University — Leadership Program',
        'PERYÖN — HR Masters Program',
        'Koç Üniversitesi — Senior Executive Development Program',
        'University of Crete & Alba Graduate Business School — Corporate Social Responsibility Diploma',
        'House of Human — RLAC, Recognized Leader as a Coach',
        'Erickson International — Modül 1-4 Profesyonel Erickson Koçluk Programı',
        'Erickson International — V. Modül Seviye 2 ACTP, NLP Practitioner, Dönüşümsel Eğiticinin Eğitimi, Deep Coaching',
        'Gestalt Coaching — Helping People Get Out of Their Own Way',
        'Yoga Alliance — 200 saat Hatha Yoga ve 50 saat Yin Yoga eğitmenliği',
        'Colaborix — AI Champion Accelerator',
      ],
      en: [
        'Yıldız Technical University — Industrial Engineering',
        'Istanbul University — MBA in English',
        'Boğaziçi University — Human Resources Management',
        'Harvard University — Leadership Program',
        'PERYÖN — HR Masters Program',
        'Koç University — Senior Executive Development Program',
        'University of Crete & Alba Graduate Business School — Corporate Social Responsibility Diploma',
        'House of Human — RLAC, Recognized Leader as a Coach',
        'Erickson International — Modules 1-4 Professional Erickson Coaching Program',
        'Erickson International — Module V Level 2 ACTP, NLP Practitioner, Transformational Training of Trainers, Deep Coaching',
        'Gestalt Coaching — Helping People Get Out of Their Own Way',
        'Yoga Alliance — 200-hour Hatha Yoga and 50-hour Yin Yoga instructor training',
        'Colaborix — AI Champion Accelerator',
      ],
    },
    relatedServices: [
      { label: { tr: 'Kariyer Koçluğu', en: 'Career Coaching' }, href: '/hizmetler/bireysel-kocluk' },
      { label: { tr: 'Yönetici Koçluğu', en: 'Executive Coaching' }, href: '/hizmetler/yonetici-koclugu' },
      { label: { tr: 'Kurumsal Eğitim', en: 'Corporate Training' }, href: '/hizmetler/kurumsal-egitim' },
      { label: { tr: 'Global Uyum ve Kariyer Koçluğu', en: 'Global Adaptation and Career Coaching' }, href: '/hizmetler/ogrenci-koclugu' },
      { label: { tr: 'Bireysel Koçluk', en: 'Personal Coaching' }, href: '/hizmetler/bireysel-kocluk' },
    ],
    primaryCtaLabel: { tr: 'Seçil Özbayır ile Ön Görüşme Talep Et', en: 'Request an Introductory Call with Seçil Özbayır' },
    secondaryCta: { label: { tr: 'Kariyer Koçluğunu İncele', en: 'Explore Career Coaching' }, href: '/hizmetler/bireysel-kocluk' },
    seoTitle: { tr: 'Seçil Özbayır | Dönüşüm ve Kariyer Koçu, HR & Wellbeing Uzmanı', en: 'Seçil Özbayır | Transformation and Career Coach, HR & Wellbeing Specialist' },
    seoDescription: {
      tr: 'Seçil Özbayır; insan kaynakları, liderlik gelişimi, organizasyonel dönüşüm, kariyer koçluğu, wellbeing ve Transitional Intelligence alanlarında çalışır.',
      en: 'Seçil Özbayır works in human resources, leadership development, organizational transformation, career coaching, wellbeing, and Transitional Intelligence.',
    },
  },

  'seda-sen': {
    slug: 'seda-sen',
    heroShort: {
      tr: '20 yılı aşkın denizcilik ve lojistik deneyimini kariyer koçluğu, yönetici koçluğu, kurumsal eğitim, öğrenci gelişimi ve göç süreçleriyle birleştirir.',
      en: 'Combines more than 20 years of maritime and logistics experience with career coaching, executive coaching, corporate training, student development, and relocation support.',
    },
    bio: {
      tr: [
        'Seda Şen, 20 yılı aşkın denizcilik ve lojistik deneyimini kariyer koçluğu, yönetici koçluğu ve kurumsal eğitim tasarımıyla birleştirir. Öğrencilerin, iş insanlarının ve göçmenlerin değişen dünyada ne istediklerini netleştirmelerine; kişisel farkındalık ve çözüm odaklı yaklaşımla stratejilerini belirleyerek sorumluluk alıp hedeflerine ilerlemelerine eşlik eder.',
        '2000-2022 yılları arasında denizcilik ve lojistik sektöründe satış, pazarlama, müşteri ilişkileri, satın alma, lojistik ve ekip yönetimi alanlarında çalışmıştır. Catoni Deniz İşleri A.Ş.’de İzmir Şube Müdürlüğü, Türkiye Satış Pazarlama Yöneticiliği ve Türkiye & Karadeniz Hat Yöneticiliği görevlerinde hedef, bütçe, takım yönetimi ve uluslararası koordinasyon süreçlerini yönetmiştir.',
        '2023-2026 yılları arasında Step Up Coaching çatısı altında takım liderleri, yöneticiler, profesyoneller ve üniversite öğrencileriyle bireysel koçluk, yönetici koçluğu, kariyer koçluğu, mentorluk ve gelişim eğitimleri yürütmüştür.',
        'Hollanda’da yaşayan Seda Şen, göçmenlere yönelik “Yeni Bir Ülke Yeni Bir Ben” programını tasarlayan ekipte yer alır. UTİKAD Üniversiteler Odak Grubu ve DEFMED Yönetim Kurulu üyelikleriyle gençlerin ve sektör profesyonellerinin gelişimine destek verir.',
      ],
      en: [
        'Seda Şen combines more than 20 years of maritime and logistics experience with career coaching, executive coaching, and corporate training design. She helps students, businesspeople, and migrants clarify what they truly want in a changing world, define strategies with personal awareness and a solution-focused approach, take responsibility, and move toward their goals.',
        'Between 2000 and 2022, she worked in maritime and logistics across sales, marketing, customer relations, procurement, logistics, and team management. At Catoni Deniz İşleri A.Ş., she managed goals, budgets, teams, and international coordination as İzmir Branch Manager, Türkiye Sales and Marketing Manager, and Türkiye & Black Sea Line Manager.',
        'Between 2023 and 2026, under Step Up Coaching, she worked with team leaders, managers, professionals, and university students through individual coaching, executive coaching, career coaching, mentoring, and development trainings.',
        'Based in the Netherlands, Seda Şen is part of the team that designed the “A New Country, A New Me” program for migrants. Through UTİKAD Universities Focus Group and DEFMED Board memberships, she supports the development of young people and sector professionals.',
      ],
    },
    timeline: [
      {
        period: { tr: '2000-2022', en: '2000-2022' },
        title: { tr: 'Denizcilik ve lojistik kariyeri', en: 'Maritime and logistics career' },
        description: { tr: 'Satış, pazarlama, müşteri ilişkileri, satın alma, lojistik ve ekip yönetimi alanlarında çalıştı.', en: 'Worked across sales, marketing, customer relations, procurement, logistics, and team management.' },
      },
      {
        period: { tr: 'Catoni', en: 'Catoni' },
        title: { tr: 'Yönetim ve strateji rolleri', en: 'Management and strategy roles' },
        description: { tr: 'İzmir Şube Müdürlüğü, Türkiye Satış Pazarlama Yöneticiliği ve Türkiye & Karadeniz Hat Yöneticiliği görevlerinde hedef, bütçe, takım ve uluslararası koordinasyon süreçlerini yönetti.', en: 'Managed goals, budgets, teams, and international coordination as İzmir Branch Manager, Türkiye Sales and Marketing Manager, and Türkiye & Black Sea Line Manager.' },
      },
      {
        period: { tr: '2023-2026', en: '2023-2026' },
        title: { tr: 'Step Up Coaching', en: 'Step Up Coaching' },
        description: { tr: 'Takım liderleri, yöneticiler, profesyoneller ve üniversite öğrencileriyle koçluk, mentorluk ve gelişim eğitimleri yürüttü.', en: 'Worked with team leaders, managers, professionals, and university students through coaching, mentoring, and development trainings.' },
      },
      {
        period: { tr: 'Hollanda', en: 'Netherlands' },
        title: { tr: 'Yeni Bir Ülke Yeni Bir Ben', en: 'A New Country, A New Me' },
        description: { tr: 'Göçmenlere yönelik yaşam, kariyer ve kimlik yönlerini yeniden yapılandıran programı tasarlayan ekipte yer alır.', en: 'Part of the team designing a program that helps migrants rebuild life, career, and identity directions in a new country.' },
      },
      {
        period: { tr: 'Sektörel katkı', en: 'Sector contribution' },
        title: { tr: 'UTİKAD ve DEFMED', en: 'UTİKAD and DEFMED' },
        description: { tr: 'UTİKAD Üniversiteler Odak Grubu ve DEFMED Yönetim Kurulu üyelikleriyle gençlerin ve sektör profesyonellerinin gelişimine katkı sunar.', en: 'Supports young people and sector professionals through UTİKAD Universities Focus Group and DEFMED Board memberships.' },
      },
    ],
    audience: {
      tr: [
        'Yöneticiler ve takım liderleri',
        'Kariyer yönünü netleştirmek isteyen profesyoneller',
        '16-18 yaş kariyer farkındalığına ihtiyaç duyan gençler',
        'Üniversite ve kariyer inşası sürecindeki öğrenciler',
        'Yeni ülkeye uyum sürecindeki bireyler ve göçmenler',
        'Kurumsal eğitim ve liderlik gelişimi ihtiyacı olan ekipler',
      ],
      en: [
        'Managers and team leaders',
        'Professionals wanting to clarify career direction',
        'Young people aged 16-18 needing career awareness',
        'Students building university and career paths',
        'Individuals and migrants adapting to a new country',
        'Teams needing corporate training and leadership development',
      ],
    },
    expertise: {
      tr: ['Kariyer Koçluğu', 'Yönetici Koçluğu', 'Kurumsal Eğitim', '16-18 Yaş Kariyer Farkındalığı', 'Üniversite ve Kariyer İnşası', 'Göç Süreçleri', 'Liderlik Gelişimi', 'NLP'],
      en: ['Career Coaching', 'Executive Coaching', 'Corporate Training', 'Career Awareness Ages 16-18', 'University and Career Building', 'Relocation Processes', 'Leadership Development', 'NLP'],
    },
    approach: {
      tr: 'Seda Şen’in yaklaşımı, kişinin iç kaynaklarını, değerlerini ve potansiyelini fark ederek yaşamında ve işinde daha bilinçli seçimler yapmasını kolaylaştırır. Gençlerin, girişimcilerin ve yöneticilerin hızlı değişen dünyada yönlerini bulmalarına; güçlü yönleri, motivasyon alanları ve dünyanın ihtiyaçları arasında köprü kurmalarına alan açar.',
      en: 'Seda Şen’s approach helps people recognize inner resources, values, and potential so they can make more conscious choices in life and work. She creates space for young people, entrepreneurs, and managers to find direction in a fast-changing world and connect strengths, motivation, and the needs of the world.',
    },
    credentials: {
      tr: [
        'İzmir Ekonomi Üniversitesi — MBA, İşletme ve Yönetim yüksek lisansı, İngilizce',
        'Dokuz Eylül Üniversitesi — Deniz İşletmeciliği ve Yönetimi, İngilizce',
        'Bornova Anadolu Lisesi — Almanca',
        'İleri İngilizce, B1 Hollandaca',
        'Profesyonel Koçluk Level 2 mezunu, 2026; ICF PCC unvanlanma sürecinde',
        'Executive & Career Coaching — Yönetici ve Kariyer Koçluğu',
        'Denge Merkezi — NLP Uygulayıcısı Eğitimi',
        'House of Human Coaching — ICF akredite profesyonel koçluk',
        'Marmara Üniversitesi — Eğiticinin Eğitimi',
        'Michigan Üniversitesi — Pozitif Psikoloji',
        'TA Derneği — Transaksiyonel Analiz',
        'Marefidelis — Gestalt temelli adaptif problem çözme',
        'Coursera — Yöneticiler için Koçluk Becerileri',
      ],
      en: [
        'Izmir University of Economics — MBA in Business and Management, English',
        'Dokuz Eylül University — Maritime Business Administration and Management, English',
        'Bornova Anatolian High School — German',
        'Advanced English, B1 Dutch',
        'Professional Coaching Level 2 graduate, 2026; in ICF PCC credentialing process',
        'Executive & Career Coaching',
        'Denge Merkezi — NLP Practitioner Training',
        'House of Human Coaching — ICF-accredited professional coaching',
        'Marmara University — Training of Trainers',
        'University of Michigan — Positive Psychology',
        'Transactional Analysis Association — Transactional Analysis',
        'Marefidelis — Gestalt-based adaptive problem solving',
        'Coursera — Coaching Skills for Managers',
      ],
    },
    relatedServices: [
      { label: { tr: 'Kariyer Koçluğu', en: 'Career Coaching' }, href: '/hizmetler/bireysel-kocluk' },
      { label: { tr: 'Yönetici Koçluğu', en: 'Executive Coaching' }, href: '/hizmetler/yonetici-koclugu' },
      { label: { tr: 'Öğrenci Koçluğu', en: 'Student Coaching' }, href: '/hizmetler/ogrenci-koclugu' },
      { label: { tr: 'Kurumsal Eğitim', en: 'Corporate Training' }, href: '/hizmetler/kurumsal-egitim' },
      { label: { tr: 'Global Uyum ve Kariyer Koçluğu', en: 'Global Adaptation and Career Coaching' }, href: '/hizmetler/ogrenci-koclugu' },
    ],
    primaryCtaLabel: { tr: 'Seda Şen ile Ön Görüşme Talep Et', en: 'Request an Introductory Call with Seda Şen' },
    secondaryCta: { label: { tr: 'Öğrenci Koçluğunu İncele', en: 'Explore Student Coaching' }, href: '/hizmetler/ogrenci-koclugu' },
    seoTitle: { tr: 'Seda Şen | Kariyer & Yönetici Koçu, Kurumsal Eğitmen', en: 'Seda Şen | Career & Executive Coach, Corporate Trainer' },
    seoDescription: {
      tr: 'Seda Şen; kariyer koçluğu, yönetici koçluğu, kurumsal eğitim, öğrenci gelişimi, göç süreçleri ve global uyum alanlarında çalışan AURIX uzmanıdır.',
      en: 'Seda Şen is an AURIX expert working in career coaching, executive coaching, corporate training, student development, relocation processes, and global adaptation.',
    },
  },

  'ayse-kiremitci': {
    slug: 'ayse-kiremitci',
    heroShort: {
      tr: 'Eğitim yönetimi ve kurumsal insan kaynakları deneyimini profesyonel koçluk ve Erickson yaklaşımıyla birleştiren Ayşe Kiremitçi; öğrencilere kariyer danışmanlığı, mesleki eğilim analizi ve sınav sürecinde rehberlik sunar.',
      en: 'Combining education management and corporate human resources experience with professional coaching and the Erickson approach, Ayşe Kiremitçi offers students career counseling, vocational tendency analysis, and exam-year guidance.',
    },
    bio: {
      tr: [
        'Ayşe Kiremitçi, 1972 yılında Antalya’da doğdu. Ankara Üniversitesi Eğitim Bilimleri Fakültesi Yetişkin Eğitimi bölümünden mezun olan Kiremitçi, eğitim uzmanı olarak 30 yılı aşkın süredir iş hayatının içinde yer almaktadır.',
        'Kurumsal kariyerine 1996 yılında Antalya’da ATAÇ grubunun eğitim ve personel yönetimi bölümlerinde başlamıştır. 2000-2019 yılları arasında, önceki adı Telsim olan ve sonrasında Vodafone olarak devam eden GSM firmasında Antalya-İzmir Bölge Ofis Yöneticisi ve İnsan Kaynakları ve İdari İşler Sorumlusu olarak görev almış; 2019 yılında kurumsal iş hayatından emekli olmuştur.',
        'Eğitimin hayatın her aşamasında vazgeçilmez bir gereklilik olduğunu düşünen Kiremitçi, mesleki ve kişisel gelişimine katkı sağlamak amacıyla 2020 yılında Profesyonel Koçluk ve Eğitim Koçluğu eğitimlerini tamamlamış, Erickson Koçluk Okulu’ndan mezun olmuştur.',
        '2020 yılından bu yana kurucusu olduğu 3Xacademy Eğitim & Danışmanlık çatısı altında öğrencilere, gençlere ve kurumlara eğitim ve kariyer danışmanlığı hizmeti sunmaktadır. Çalışmalarını öğrencilerin performans ve gelişimlerini desteklemek, gençlerin azimli, kararlı ve güçlü iletişim becerilerine sahip bireyler olarak gelişmelerine eşlik etmek amacıyla yürütür.',
      ],
      en: [
        'Ayşe Kiremitçi was born in Antalya in 1972. A graduate of Adult Education at Ankara University’s Faculty of Educational Sciences, she has worked as an education specialist for more than 30 years.',
        'She began her corporate career in 1996 in Antalya, in the education and personnel management departments of the ATAÇ group. Between 2000 and 2019, she worked at the GSM operator formerly known as Telsim and later Vodafone, serving as Antalya-İzmir Regional Office Manager and Human Resources and Administrative Affairs Officer; she retired from her corporate career in 2019.',
        'Believing that education is indispensable at every stage of life, she completed her Professional Coaching and Education Coaching training in 2020 to further her own professional and personal development, and graduated from the Erickson Coaching School.',
        'Since 2020, through 3Xacademy Eğitim & Danışmanlık, which she founded, she has provided education and career counseling services to students, young people, and institutions. Her work focuses on supporting students’ performance and development, and accompanying young people as they grow into determined, resolute individuals with strong communication skills.',
      ],
    },
    timeline: [
      {
        period: { tr: '1996', en: '1996' },
        title: { tr: 'ATAÇ Grubu', en: 'ATAÇ Group' },
        description: { tr: 'Antalya’da eğitim ve personel yönetimi bölümlerinde çalışmaya başladı.', en: 'Began working in the education and personnel management departments in Antalya.' },
      },
      {
        period: { tr: '2000-2019', en: '2000-2019' },
        title: { tr: 'Telsim / Vodafone', en: 'Telsim / Vodafone' },
        description: { tr: 'Antalya-İzmir Bölge Ofis Yöneticisi ve İnsan Kaynakları ve İdari İşler Sorumlusu olarak görev yaptı.', en: 'Served as Antalya-İzmir Regional Office Manager and Human Resources and Administrative Affairs Officer.' },
      },
      {
        period: { tr: '2019', en: '2019' },
        title: { tr: 'Emeklilik', en: 'Retirement' },
        description: { tr: 'Kurumsal iş hayatından emekli oldu.', en: 'Retired from her corporate career.' },
      },
      {
        period: { tr: '2020', en: '2020' },
        title: { tr: 'Profesyonel Koçluk ve Erickson Koçluk Okulu', en: 'Professional Coaching and Erickson Coaching School' },
        description: { tr: 'Profesyonel Koçluk ve Eğitim Koçluğu eğitimlerini tamamlayarak Erickson Koçluk Okulu’ndan mezun oldu.', en: 'Completed Professional Coaching and Education Coaching training and graduated from the Erickson Coaching School.' },
      },
      {
        period: { tr: '2020-güncel', en: '2020-current' },
        title: { tr: '3Xacademy Eğitim & Danışmanlık', en: '3Xacademy Eğitim & Danışmanlık' },
        description: { tr: 'Kurucusu olarak öğrencilere, gençlere ve kurumlara eğitim ve kariyer danışmanlığı hizmeti sunmaktadır.', en: 'As founder, provides education and career counseling services to students, young people, and institutions.' },
      },
    ],
    audience: {
      tr: [
        'Lise öğrencileri ve aileleri',
        'YKS sınav sürecindeki 12. sınıf ve mezun öğrenciler',
        'Meslek seçimi ve kariyer yönünü netleştirmek isteyen gençler',
        'Mesleki eğilim analizi almak isteyenler',
        'Öğrenci gelişimi konusunda destek arayan kurumlar',
      ],
      en: [
        'High school students and their families',
        '12th-grade and gap-year students preparing for national university exams',
        'Young people looking to clarify their profession choice and career direction',
        'Those who want a vocational tendency analysis',
        'Institutions seeking support in student development',
      ],
    },
    expertise: {
      tr: ['Kariyer Danışmanlığı', 'Mesleki Eğilim Analizi', 'YKS Rehberlik ve Mentörlük', 'Eğitim Koçluğu', 'Öğrenci Gelişimi'],
      en: ['Career Counseling', 'Vocational Tendency Analysis', 'Exam-Year Guidance and Mentoring', 'Education Coaching', 'Student Development'],
    },
    approach: {
      tr: 'Ayşe Kiremitçi’nin yaklaşımı, kariyerin lise yıllarında şekillendiği fikrine dayanır. Öğrencilerin akademik başarılarının yanında ilgi alanlarını, güçlü yönlerini ve motivasyon kaynaklarını fark etmelerine eşlik ederek, uzun vadeli hedeflerine uygun bir yol haritası oluşturmalarına destek olur.',
      en: 'Ayşe Kiremitçi’s approach rests on the idea that a career takes shape during the high school years. Alongside academic achievement, she accompanies students in recognizing their interests, strengths, and sources of motivation, supporting them in building a roadmap suited to their long-term goals.',
    },
    credentials: {
      tr: [
        'Ankara Üniversitesi Eğitim Bilimleri Fakültesi — Yetişkin Eğitimi',
        'Profesyonel Koçluk ve Eğitim Koçluğu sertifikaları (2020)',
        'Erickson Koçluk Okulu mezuniyeti',
        '3Xacademy Eğitim & Danışmanlık kurucusu',
        '200’den fazla öğrenciye Mesleki Eğilim Analizi uygulama deneyimi',
      ],
      en: [
        'Ankara University Faculty of Educational Sciences — Adult Education',
        'Professional Coaching and Education Coaching certificates (2020)',
        'Erickson Coaching School graduate',
        'Founder of 3Xacademy Eğitim & Danışmanlık',
        'Experience administering Vocational Tendency Analysis to more than 200 students',
      ],
    },
    relatedServices: [
      { label: { tr: 'Öğrenci Mentörlüğü ve Sınav Stratejisi', en: 'Student Mentoring and Exam Strategy' }, href: '/hizmetler/ogrenci-mentorlugu-sinav-stratejisi' },
      { label: { tr: 'Gençler için Kariyer Farkındalığı', en: 'Career Awareness for Young People' }, href: '/hizmetler/genclerde-kariyer-farkindaligi' },
      { label: { tr: 'Öğrenci Koçluğu', en: 'Student Coaching' }, href: '/hizmetler/ogrenci-koclugu' },
      { label: { tr: 'Kariyer Koçluğu', en: 'Career Coaching' }, href: '/hizmetler/kariyer-koclugu' },
    ],
    primaryCtaLabel: { tr: 'Ayşe Kiremitçi ile Ön Görüşme Talep Et', en: 'Request an Introductory Call with Ayşe Kiremitçi' },
    secondaryCta: { label: { tr: 'Öğrenci Mentörlüğünü İncele', en: 'Explore Student Mentoring' }, href: '/hizmetler/ogrenci-mentorlugu-sinav-stratejisi' },
    seoTitle: { tr: 'Ayşe Kiremitçi | Eğitim ve Kariyer Danışmanı, Profesyonel Koç', en: 'Ayşe Kiremitçi | Education and Career Consultant, Professional Coach' },
    seoDescription: {
      tr: 'Ayşe Kiremitçi; kariyer danışmanlığı, mesleki eğilim analizi ve YKS sınav sürecinde rehberlik sunan eğitim uzmanı ve profesyonel koçtur.',
      en: 'Ayşe Kiremitçi is an education specialist and professional coach offering career counseling, vocational tendency analysis, and guidance through the national university exam process.',
    },
  },

  'iskender-dasdemir': {
    slug: 'iskender-dasdemir',
    heroShort: {
      tr: 'Ege Üniversitesi Eğitim Fakültesi öğretim üyesi olan Doç. Dr. İskender Daşdemir; eğitim bilimleri, liderlik gelişimi, organizasyonel dönüşüm, öğrenci koçluğu ve eğitim psikolojisi alanlarındaki akademik birikimini yirmi yıla yakın saha deneyimiyle birleştirir.',
      en: 'A faculty member at Ege University’s Faculty of Education, Doç. Dr. İskender Daşdemir combines his academic background in education sciences, leadership development, organizational transformation, student coaching, and education psychology with nearly twenty years of hands-on field experience.',
    },
    bio: {
      tr: [
        'Doç. Dr. İskender Daşdemir, Ege Üniversitesi Eğitim Fakültesi Türkçe ve Sosyal Bilimler Eğitimi Bölümü Sosyal Bilgiler Eğitimi Anabilim Dalında öğretim üyesi olarak akademik çalışmalarını sürdürmektedir. Eğitim bilimleri, sosyal bilgiler eğitimi, program geliştirme, vatandaşlık eğitimi, eğitim teknolojileri ve eğitim psikolojisi alanlarında araştırmalar yürütürken, özel sektörde edindiği yöneticilik deneyimini kurumsal danışmanlık, liderlik gelişimi ve organizasyonel dönüşüm uygulamalarıyla bütünleştirmektedir.',
        'Yaklaşık yirmi yıllık profesyonel kariyeri boyunca üniversitelerde akademisyen, eğitim kurumlarında yönetici, araştırma projelerinde yürütücü ve danışman olarak görev almış; bilimsel bilgi ile uygulama deneyimini bir araya getiren eğitim modelleri geliştirmiştir.',
        'Akademik üretimini bilimsel yayınlarla sınırlamayan Daşdemir; eğitim kurumları, özel okullar, kolejler ve ulusal/uluslararası kuruluşlarda liderlik gelişimi, kurumsal iletişim, eğitim psikolojisi, organizasyonel gelişim ve insan odaklı dönüşüm alanlarında eğitim ve danışmanlık hizmetleri sunmaktadır.',
        '2008 yılından itibaren eğitim kurumlarının kuruluşu, akademik yapılanması ve yönetimi, KPSS ve merkezi sınav hazırlık sistemleri, kariyer planlama, öğrenci koçluğu ve eğitim psikolojisi alanlarında çalışmalar yürütmüş; üniversiteler, kolejler, kamu kurumları ve özel kuruluşlara eğitim ve danışmanlık hizmeti sunmuştur.',
      ],
      en: [
        'Doç. Dr. İskender Daşdemir continues his academic work as a faculty member in the Department of Social Studies Education, within the Turkish and Social Sciences Education division of Ege University’s Faculty of Education. While conducting research in education sciences, social studies education, curriculum development, citizenship education, educational technology, and education psychology, he integrates his management experience from the private sector with organizational consulting, leadership development, and organizational transformation practices.',
        'Over a professional career of nearly twenty years, he has served as an academic at universities, a manager at educational institutions, and a principal investigator and consultant on research projects, developing education models that bring together scientific knowledge and applied experience.',
        'Not limiting his academic output to scientific publications, Daşdemir provides education and consulting services in leadership development, corporate communication, education psychology, organizational development, and human-centered transformation to educational institutions, private schools, colleges, and national and international organizations.',
        'Since 2008, he has worked on the founding, academic structuring, and management of educational institutions, national exam preparation systems, career planning, student coaching, and education psychology, providing education and consulting services to universities, colleges, public institutions, and private organizations.',
      ],
    },
    timeline: [
      {
        period: { tr: 'Akademik görev', en: 'Academic post' },
        title: { tr: 'Ege Üniversitesi Eğitim Fakültesi', en: 'Ege University Faculty of Education' },
        description: { tr: 'Sosyal Bilgiler Eğitimi Anabilim Dalında öğretim üyesi olarak lisans/lisansüstü eğitim, tez danışmanlığı ve araştırma projeleri yürütüyor.', en: 'Serves as a faculty member in the Department of Social Studies Education, teaching at undergraduate and graduate levels, supervising theses, and leading research projects.' },
      },
      {
        period: { tr: '2008-güncel', en: '2008-current' },
        title: { tr: 'Eğitim kurumu yöneticiliği', en: 'Educational institution management' },
        description: { tr: 'Eğitim kurumlarının kuruluşu, akademik yapılanması ve yönetimi ile kariyer planlama ve öğrenci koçluğu alanlarında görev aldı.', en: 'Took an active role in the founding, academic structuring, and management of educational institutions, as well as in career planning and student coaching.' },
      },
      {
        period: { tr: 'KPSS koordinasyonu', en: 'Civil-service exam coordination' },
        title: { tr: 'Kariyer ve öğrenci gelişimi', en: 'Career and student development' },
        description: { tr: 'KPSS hazırlık programlarının akademik koordinasyonunu yürüttü; öğretmen adaylarının kariyer planlama süreçlerine rehberlik etti.', en: 'Coordinated the academic side of civil-service exam preparation programs, guiding prospective teachers through career planning.' },
      },
      {
        period: { tr: 'İzmir, Ankara, İstanbul', en: 'İzmir, Ankara, İstanbul' },
        title: { tr: 'Kurumsal danışmanlık', en: 'Organizational consulting' },
        description: { tr: 'Özel eğitim kurumları, kolejler ve şirketlerle liderlik gelişimi, kurumsal iletişim ve organizasyonel gelişim alanlarında çalıştı.', en: 'Worked with private educational institutions, colleges, and companies in leadership development, corporate communication, and organizational development.' },
      },
      {
        period: { tr: 'Güncel', en: 'Current' },
        title: { tr: 'Akademik üretkenlik', en: 'Academic output' },
        description: { tr: 'Uluslararası hakemli dergilerde makaleler, bilimsel kitaplar ve araştırma projeleriyle eğitim bilimleri literatürüne katkı sağlıyor.', en: 'Contributes to the education sciences literature through articles in international peer-reviewed journals, academic books, and research projects.' },
      },
    ],
    audience: {
      tr: [
        'Eğitim kurumları ve akademik kurumlar',
        'Liderlik gelişimi arayan yöneticiler',
        'Öğrenci koçluğu ve sınav kaygısı yönetimi arayan öğrenciler',
        'Kariyer planlama sürecindeki gençler ve öğretmen adayları',
        'Kurum kültürünü ve organizasyonel gelişimini güçlendirmek isteyen şirketler',
        'Ergen ve ebeveyn danışmanlığı arayan aileler',
      ],
      en: [
        'Educational and academic institutions',
        'Managers seeking leadership development',
        'Students seeking student coaching and exam anxiety management',
        'Young people and prospective teachers in the career-planning process',
        'Companies looking to strengthen their culture and organizational development',
        'Families seeking adolescent and parental guidance and consulting',
      ],
    },
    expertise: {
      tr: [
        'Eğitim Liderliği ve Akademik Yönetim',
        'Organizasyonel Gelişim',
        'Liderlik Geliştirme',
        'Kurumsal İletişim',
        'Eğitim Psikolojisi',
        'Öğrenci Koçluğu',
        'Kariyer Planlama',
        'Ergen ve Ebeveyn Psikolojisi',
        'Eğitim Teknolojileri ve Yapay Zekâ Destekli Öğrenme',
        'Bilimsel Araştırma ve Proje Yönetimi',
      ],
      en: [
        'Education Leadership and Academic Management',
        'Organizational Development',
        'Leadership Development',
        'Corporate Communication',
        'Education Psychology',
        'Student Coaching',
        'Career Planning',
        'Adolescent and Parental Psychology',
        'Educational Technology and AI-Supported Learning',
        'Scientific Research and Project Management',
      ],
    },
    approach: {
      tr: 'Doç. Dr. İskender Daşdemir’in yaklaşımı, eğitimi yalnızca bilgi aktarma süreci değil; bireyin potansiyelini keşfetmesini sağlayan, kurumların gelişim kültürünü güçlendiren ve toplumun geleceğini şekillendiren stratejik bir dönüşüm alanı olarak görmeye dayanır. Bilimsel bilgi ile uygulamayı bir araya getirerek bireylerin ve kurumların sürdürülebilir gelişimine katkı sunmayı hedefler.',
      en: 'Doç. Dr. İskender Daşdemir’s approach treats education not merely as a process of transmitting information, but as a strategic field of transformation that helps individuals discover their potential, strengthens organizations’ development culture, and shapes the future of society. He aims to bring scientific knowledge together with practice to contribute to the sustainable development of both individuals and institutions.',
    },
    credentials: {
      tr: [
        'Ege Üniversitesi Eğitim Fakültesi — Doçent, Sosyal Bilgiler Eğitimi',
        'Sosyal bilgiler eğitimi, vatandaşlık eğitimi, eğitim teknolojileri, yapay zekâ, dijital vatandaşlık, program okuryazarlığı, Coğrafi Bilgi Sistemleri ve eğitim psikolojisi alanlarında akademik yayınlar',
        'Ulusal ve uluslararası hakemli dergilerde editörlük ve hakemlik',
        'Liderlik, organizasyonel gelişim, kurumsal iletişim, sınav psikolojisi, öğrenci koçluğu ve kariyer planlama alanlarında profesyonel gelişim sertifikaları',
        '2008’den bu yana eğitim kurumu yöneticiliği ve kurumsal danışmanlık deneyimi',
      ],
      en: [
        'Ege University Faculty of Education — Associate Professor, Social Studies Education',
        'Academic publications in social studies education, citizenship education, educational technology, AI, digital citizenship, curriculum literacy, Geographic Information Systems, and education psychology',
        'Editorial and peer-review roles in national and international journals',
        'Professional development certificates in leadership, organizational development, corporate communication, exam psychology, student coaching, and career planning',
        'Educational institution management and organizational consulting experience since 2008',
      ],
    },
    relatedServices: [
      { label: { tr: 'Kurumsal Eğitimler', en: 'Corporate Training' }, href: '/hizmetler/kurumsal-egitim' },
      { label: { tr: 'Yönetici Koçluğu', en: 'Executive Coaching' }, href: '/hizmetler/yonetici-koclugu' },
      { label: { tr: 'Öğrenci Koçluğu', en: 'Student Coaching' }, href: '/hizmetler/ogrenci-koclugu' },
      { label: { tr: 'Öğrenci Mentörlüğü ve Sınav Stratejisi', en: 'Student Mentoring and Exam Strategy' }, href: '/hizmetler/ogrenci-mentorlugu-sinav-stratejisi' },
      { label: { tr: 'Gençler için Kariyer Farkındalığı', en: 'Career Awareness for Young People' }, href: '/hizmetler/genclerde-kariyer-farkindaligi' },
    ],
    primaryCtaLabel: { tr: 'İskender Daşdemir ile Ön Görüşme Talep Et', en: 'Request an Introductory Call with İskender Daşdemir' },
    secondaryCta: { label: { tr: 'Kurumsal Eğitimleri İncele', en: 'Explore Corporate Training' }, href: '/hizmetler/kurumsal-egitim' },
    seoTitle: { tr: 'Doç. Dr. İskender Daşdemir | Eğitim Stratejisti ve Organizasyonel Gelişim Danışmanı', en: 'Doç. Dr. İskender Daşdemir | Education Strategist and Organizational Development Consultant' },
    seoDescription: {
      tr: 'Doç. Dr. İskender Daşdemir; eğitim liderliği, organizasyonel gelişim, öğrenci koçluğu ve eğitim psikolojisi alanlarında akademik birikimini saha deneyimiyle birleştiren AURIX uzmanıdır.',
      en: 'Doç. Dr. İskender Daşdemir is an AURIX expert who combines his academic background with field experience in education leadership, organizational development, student coaching, and education psychology.',
    },
  },

}
