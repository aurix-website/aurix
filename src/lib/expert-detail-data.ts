export interface ExpertRelatedService {
  label: string
  href: string
}

export interface ExpertDetail {
  slug: string
  heroShort: string
  bio: string[]
  audience: string[]
  expertise: string[]
  approach: string
  credentials: string[]
  relatedServices: ExpertRelatedService[]
  primaryCtaLabel: string
  secondaryCta: { label: string; href: string }
  seoTitle: string
  seoDescription: string
}

export const EXPERT_DETAILS: Record<string, ExpertDetail> = {
  'kaan-yazici': {
    slug: 'kaan-yazici',
    heroShort:
      'Sağlık alanındaki profesyonel deneyimini, kamu yönetimi perspektifi ve Erickson koçluk yaklaşımıyla birleştiren Kaan Yazıcı; bireylerin ve takımların potansiyellerini daha bilinçli şekilde ortaya çıkarmalarına eşlik eder.',
    bio: [
      'Kaan Yazıcı’nın profesyonel yolculuğu, insanı yalnızca fiziksel sağlıkla değil; zihinsel, duygusal ve sosyal bütünlüğüyle ele alma fikri üzerine şekillenmiştir. Diş hekimliği mesleğinde insanlarla kurduğu derin bağlar, onu koçluk yaklaşımına yönlendirmiş; zamanla bireysel gelişim ve takım koçluğu alanlarında uzmanlaşmıştır.',
      'AURIX’in kurucusu olarak amacı, farklı uzmanlık alanlarından gelen profesyonelleri tek bir gelişim çatısı altında buluşturmak ve danışanlara yapılandırılmış, etik ve ihtiyaca uygun koçluk süreçleri sunmaktır.',
    ],
    audience: [
      'Bireysel gelişim sürecinde netlik arayan bireyler',
      'Yaşamında yeni bir yön oluşturmak isteyenler',
      'Takımlar ve ekip liderleri',
      'Potansiyelini daha bilinçli kullanmak isteyen danışanlar',
      'AURIX yaklaşımını tanımak isteyen ilk danışanlar',
    ],
    expertise: [
      'Bireysel Koçluk',
      'Takım Koçluğu',
      'Yaşam Geçişleri',
      'Potansiyel Farkındalığı',
      'Kurucu Vizyon ve Süreç Tasarımı',
    ],
    approach:
      'Kaan Yazıcı’nın yaklaşımı, kişiye hazır cevaplar vermekten çok, danışanın kendi hedeflerini, iç kaynaklarını ve karar alanlarını daha net görmesine eşlik etmeye dayanır. AURIX çatısı altında bu yaklaşım, doğru ihtiyaç analizi ve doğru uzman eşleşmesiyle desteklenir.',
    credentials: [
      'Ege Üniversitesi Diş Hekimliği mezuniyeti',
      'Kamu Yönetimi eğitimi',
      'Erickson koçluk metodolojisi',
      'Profesyonel takım koçluğu uzmanlığı',
    ],
    relatedServices: [
      { label: 'Bireysel Koçluk', href: '/hizmetler/bireysel-kocluk' },
      { label: 'Takım Koçluğu', href: '/hizmetler#kurumsal' },
      { label: 'Yönetici Koçluğu', href: '/hizmetler/yonetici-koclugu' },
      { label: 'Ön Görüşme', href: '/iletisim' },
    ],
    primaryCtaLabel: 'Kaan Yazıcı ile Ön Görüşme Talep Et',
    secondaryCta: { label: 'AURIX Yaklaşımını İncele', href: '/#approach-heading' },
    seoTitle: 'Kaan Yazıcı | Kurucu, Profesyonel Koç & Takım Koçu',
    seoDescription:
      'Kaan Yazıcı; sağlık alanındaki deneyimini Erickson koçluk yaklaşımı ve takım koçluğu uzmanlığıyla birleştiren AURIX kurucusudur.',
  },

  'hulya-aksu-spizuoco': {
    slug: 'hulya-aksu-spizuoco',
    heroShort:
      'Uluslararası eğitim, üst düzey yöneticilik, girişimcilik ve global yaşam deneyimini liderlik, kariyer ve jeopolitik perspektifle birleştirir.',
    bio: [
      'Hülya Aksu Spizuoco, ekonomi, siyaset bilimi, uluslararası ilişkiler ve liderlik alanlarındaki eğitim geçmişini; banka, medya/veri, uluslararası pazarlar ve akademik çalışmalarla şekillenen çok yönlü deneyimiyle birleştirir.',
      'Amerika’da yaşamını sürdüren Hülya Aksu Spizuoco; liderlik, kariyer, siyaset iletişimi, jeopolitik bakış ve global uyum alanlarında bireylere ve kurumlara katkı sunar.',
    ],
    audience: [
      'Liderler ve yöneticiler',
      'Kariyer yönünü global ölçekte değerlendirmek isteyen profesyoneller',
      'Uluslararası perspektif arayan danışanlar',
      'Siyaset iletişimi ve liderlik alanında gelişmek isteyen kişiler',
      'Global yaşam ve kariyer geçişi yaşayan bireyler',
    ],
    expertise: [
      'Liderlik Koçluğu',
      'Yönetici Koçluğu',
      'Kariyer Koçluğu',
      'Siyaset İletişimi',
      'Jeopolitik Perspektif',
      'Global Uyum',
    ],
    approach:
      'Hülya Aksu Spizuoco’nun yaklaşımı, liderlik ve kariyer kararlarını yalnızca bireysel hedefler üzerinden değil; toplumsal, kültürel, ekonomik ve global bağlamlar içinde değerlendirmeye dayanır. Bu yönüyle AURIX’in uluslararası ve stratejik bakışını güçlendirir.',
    credentials: [
      'Marmara Üniversitesi, İngilizce İktisat',
      'University of San Diego, yüksek lisans',
      'Harvard Kennedy School eğitimi',
      'Koçbank, Dow Jones Telerate ve ISI Emerging Markets New York — üst düzey yöneticilik deneyimi',
    ],
    relatedServices: [
      { label: 'Yönetici Koçluğu', href: '/hizmetler/yonetici-koclugu' },
      { label: 'Kariyer Koçluğu', href: '/hizmetler#bireysel' },
      { label: 'Global Uyum ve Kariyer Koçluğu', href: '/hizmetler#gencler' },
      { label: 'Kurumsal Eğitimler', href: '/hizmetler/kurumsal-egitim' },
    ],
    primaryCtaLabel: 'Hülya Aksu Spizuoco ile Ön Görüşme Talep Et',
    secondaryCta: { label: 'Global Kariyer Desteğini İncele', href: '/hizmetler#gencler' },
    seoTitle: 'Hülya Aksu Spizuoco | Liderlik, Kariyer ve Global Perspektif',
    seoDescription:
      'Hülya Aksu Spizuoco; uluslararası eğitim, üst düzey yöneticilik ve global yaşam deneyimini liderlik, kariyer ve siyaset iletişimi alanlarında sunar.',
  },

  'cigdem-karavelioglu': {
    slug: 'cigdem-karavelioglu',
    heroShort:
      'Finans ve yöneticilik deneyimini koçluk, takım gelişimi, gençlik ve bireysel dönüşüm alanlarıyla birleştirir.',
    bio: [
      'Çiğdem Karavelioğlu, ODTÜ İstatistik eğitiminin ardından finans ve yatırım sektöründe uzun yıllar görev almış; yöneticilik deneyimiyle iş dünyasında güçlü bir profesyonel arka plan oluşturmuştur.',
      'Daha sonra koçluk ve kişisel gelişim alanlarına yönelerek Erickson Coaching International’dan koçluk eğitimi almış, gençlerle kariyer ve hayat amaçları üzerine çalışmış, takım koçluğu alanında uzmanlaşmıştır.',
    ],
    audience: [
      'Bireysel gelişim sürecindeki danışanlar',
      'Gençler ve kariyer yönünü arayan bireyler',
      'Takımlar ve ekipler',
      'Kariyer geçişi yaşayan profesyoneller',
      'Kişisel farkındalık ve dönüşüm arayan kişiler',
    ],
    expertise: [
      'Bireysel Koçluk',
      'Takım Koçluğu',
      'Kariyer Koçluğu',
      'Gençlik ve Kariyer Farkındalığı',
      'Kişisel Dönüşüm',
    ],
    approach:
      'Çiğdem Karavelioğlu’nun yaklaşımı, bireyin değişim ihtiyacını fark etmesine, güçlü yönlerini görmesine ve kendi hedefleri doğrultusunda daha bilinçli adımlar atmasına alan açar. Takım koçluğu tarafında ise ekiplerin ortak hedef, iletişim ve ilerleme alanlarına odaklanır. Koçluk, farkındalık ve bireysel dönüşüm çalışmalarını bir araya getiren destekleyici bir yaklaşım sunar.',
    credentials: [
      'ODTÜ, İstatistik',
      'Erickson Coaching International — profesyonel koçluk eğitimi',
      'Takım koçluğu uzmanlığı',
    ],
    relatedServices: [
      { label: 'Bireysel Koçluk', href: '/hizmetler/bireysel-kocluk' },
      { label: 'Takım Koçluğu', href: '/hizmetler#kurumsal' },
      { label: 'Kariyer Koçluğu', href: '/hizmetler#bireysel' },
      { label: 'Öğrenci / Gençlik Koçluğu', href: '/hizmetler/ogrenci-koclugu' },
    ],
    primaryCtaLabel: 'Çiğdem Karavelioğlu ile Ön Görüşme Talep Et',
    secondaryCta: { label: 'Bireysel Koçluğu İncele', href: '/hizmetler/bireysel-kocluk' },
    seoTitle: 'Çiğdem Karavelioğlu | Profesyonel Koç, Takım Koçu & Eğitmen',
    seoDescription:
      'Çiğdem Karavelioğlu; finans sektörü deneyimini bireysel koçluk, takım koçluğu, kariyer ve gençlik çalışmalarıyla birleştirir.',
  },

  'hatice-yildirim': {
    slug: 'hatice-yildirim',
    heroShort:
      'Eğitim yönetimi, kurumsal liderlik ve profesyonel koçluk deneyimiyle bireylerin ve kurumların dönüşüm süreçlerine eşlik eder.',
    bio: [
      'Hatice Yıldırım, öğretmenlik, eğitim yönetimi, kurumsal liderlik ve profesyonel koçluk alanlarında 30 yılı aşkın deneyime sahiptir. Yönetim ve denetim alanındaki yüksek lisans birikimini, Erickson International koçluk ve NLP uzmanlığıyla birleştirerek bireylerin ve kurumların potansiyelini ortaya çıkarmaya odaklanır.',
      'Liderlik akademisi tasarımı, stratejik dönüşüm, liyakat, kuşaklar arası sinerji ve kurumsal gelişim alanları AURIX içindeki en güçlü katkı alanlarıdır.',
    ],
    audience: [
      'Kurumlar',
      'Yöneticiler',
      'Eğitim kurumları',
      'Liderlik gelişimi isteyen profesyoneller',
      'Kuşaklar arası iletişim ve dönüşüm ihtiyacı olan ekipler',
      'Öğrenci ve eğitim odaklı gelişim süreçleri',
    ],
    expertise: [
      'Kurumsal Eğitim',
      'Liderlik Akademisi',
      'Stratejik Dönüşüm',
      'Eğitim Yönetimi',
      'Kuşaklar Arası İletişim',
      'Potansiyel Yönetimi',
    ],
    approach:
      'Hatice Yıldırım’ın yaklaşımı, bireysel potansiyeli kurumsal gelişimle birlikte ele alır. Eğitim, liderlik ve organizasyonel dönüşüm deneyimini kullanarak kurumların daha bilinçli, liyakat odaklı ve insan merkezli gelişim süreçleri tasarlamasına katkı sunar.',
    credentials: [
      'Yönetim ve denetim alanında yüksek lisans',
      'Erickson International — profesyonel koçluk eğitimi',
      'NLP uzmanlığı',
    ],
    relatedServices: [
      { label: 'Kurumsal Eğitim', href: '/hizmetler/kurumsal-egitim' },
      { label: 'Yönetici Koçluğu', href: '/hizmetler/yonetici-koclugu' },
      { label: 'Öğrenci Koçluğu', href: '/hizmetler/ogrenci-koclugu' },
      { label: 'Liderlik Gelişimi', href: '/hizmetler/yonetici-koclugu' },
    ],
    primaryCtaLabel: 'Hatice Yıldırım ile Ön Görüşme Talep Et',
    secondaryCta: { label: 'Kurumsal Eğitimleri İncele', href: '/hizmetler/kurumsal-egitim' },
    seoTitle: 'Hatice Yıldırım | Eğitim Yöneticisi, Liderlik ve Dönüşüm Koçu',
    seoDescription:
      'Hatice Yıldırım; eğitim yönetimi, kurumsal liderlik, stratejik dönüşüm ve profesyonel koçluk alanlarında 30 yılı aşkın deneyime sahiptir.',
  },

  'secil-ozbayir': {
    slug: 'secil-ozbayir',
    heroShort:
      'İnsan kaynakları, liderlik gelişimi, organizasyonel dönüşüm, kariyer danışmanlığı ve wellbeing alanlarındaki deneyimini bireysel ve kurumsal gelişim süreçlerine taşır.',
    bio: [
      'Seçil Özbayır, 20 yılı aşkın profesyonel deneyimini insan kaynakları, liderlik gelişimi, organizasyonel dönüşüm ve koçluk alanlarında birleştirir. Endüstri mühendisliği altyapısı, MBA eğitimi, insan kaynakları yönetimi ve kurumsal sürdürülebilirlik deneyimiyle bireylerin ve kurumların gelişim süreçlerine sistemli bir bakış sunar.',
      'Türkiye’deki kurumsal yöneticilik deneyimini Hollanda’daki uluslararası yaşam deneyimiyle birleştirerek özellikle kariyer geçişleri, değişim, yeniden yapılanma, wellbeing ve global uyum alanlarında danışanlara eşlik eder.',
    ],
    audience: [
      'Kariyer değişimi yaşayan profesyoneller',
      'Liderler ve yöneticiler',
      'İnsan kaynakları ve organizasyonel dönüşüm ekipleri',
      'Yeni ülke / yeni kariyer geçişi yaşayan bireyler',
      'Wellbeing ve farkındalık temelli gelişim arayan kişiler',
      'Kurumlar ve ekipler',
    ],
    expertise: [
      'Kariyer Koçluğu',
      'Liderlik ve Yönetici Gelişimi',
      'Organizasyonel Dönüşüm',
      'İnsan Kaynakları Danışmanlığı',
      'Kurumsal Eğitim',
      'Wellbeing',
      'Global Uyum',
    ],
    approach:
      'Seçil Özbayır’ın yaklaşımı, kurumsal sistem bakışı ile bireysel dönüşüm ihtiyacını birlikte ele alır. Kariyer, liderlik ve wellbeing alanlarında kişinin hem profesyonel hedeflerini hem de sürdürülebilir gelişim kapasitesini destekleyen bir çerçeve sunar.',
    credentials: ['Endüstri Mühendisliği lisans eğitimi', 'MBA', '14 yıl İnsan Kaynakları Müdürlüğü deneyimi'],
    relatedServices: [
      { label: 'Kariyer Koçluğu', href: '/hizmetler#bireysel' },
      { label: 'Yönetici Koçluğu', href: '/hizmetler/yonetici-koclugu' },
      { label: 'Kurumsal Eğitim', href: '/hizmetler/kurumsal-egitim' },
      { label: 'Global Uyum ve Kariyer Koçluğu', href: '/hizmetler#gencler' },
      { label: 'Bireysel Koçluk', href: '/hizmetler/bireysel-kocluk' },
    ],
    primaryCtaLabel: 'Seçil Özbayır ile Ön Görüşme Talep Et',
    secondaryCta: { label: 'Kariyer Koçluğunu İncele', href: '/hizmetler#bireysel' },
    seoTitle: 'Seçil Özbayır | Dönüşüm ve Kariyer Koçu, HR & Wellbeing Uzmanı',
    seoDescription:
      'Seçil Özbayır; insan kaynakları, liderlik gelişimi, organizasyonel dönüşüm, kariyer koçluğu ve wellbeing alanlarında uzmanlaşmıştır.',
  },

  'seda-sen': {
    slug: 'seda-sen',
    heroShort:
      'Denizcilik ve lojistik sektöründeki 20 yılı aşkın deneyimini kariyer, yönetici koçluğu, kurumsal eğitim, öğrenci gelişimi ve göç süreçleriyle birleştirir.',
    bio: [
      'Seda Şen, denizcilik ve lojistik sektöründeki 20 yılı aşkın profesyonel deneyimini kariyer koçluğu, yönetici koçluğu ve kurumsal eğitim tasarımıyla birleştirir. Satış, pazarlama, müşteri ilişkileri, satın alma, lojistik ve ekip yönetimi alanlarında görev almış; yöneticiler, profesyoneller, öğrenciler ve göçmenlerle koçluk ve eğitim çalışmaları yürütmüştür.',
      'Hollanda’da yaşayan Seda Şen, özellikle gençlerin kariyer farkındalığı, üniversite ve kariyer inşası, liderlik gelişimi ve yeni ülkeye uyum süreçlerinde AURIX’in güçlü uzmanlarından biridir.',
    ],
    audience: [
      'Yöneticiler',
      'Kariyer yönünü netleştirmek isteyen profesyoneller',
      'Lise ve üniversite öğrencileri',
      'Yeni ülkeye uyum sürecindeki bireyler',
      'Göçmenler',
      'Kurumsal eğitim ihtiyacı olan ekipler',
      'Genç profesyoneller',
    ],
    expertise: [
      'Kariyer Koçluğu',
      'Yönetici Koçluğu',
      'Kurumsal Eğitim',
      'Öğrenci ve Gençlik Koçluğu',
      'Global Uyum',
      'Göç Süreçleri',
      'Liderlik Gelişimi',
    ],
    approach:
      'Seda Şen’in yaklaşımı, kişinin kendi değerlerini, güçlü yönlerini ve hedeflerini netleştirerek daha bilinçli seçimler yapmasına alan açmaya dayanır. Gençler, profesyoneller, yöneticiler ve göç sürecindeki bireyler için hedef odaklı ve çözüm odaklı bir gelişim yaklaşımı sunar.',
    credentials: [
      '20 yılı aşkın denizcilik ve lojistik sektörü deneyimi',
      '“Yeni Bir Ülke Yeni Bir Ben” programı — göç ve uyum süreçleri',
    ],
    relatedServices: [
      { label: 'Kariyer Koçluğu', href: '/hizmetler#bireysel' },
      { label: 'Yönetici Koçluğu', href: '/hizmetler/yonetici-koclugu' },
      { label: 'Öğrenci Koçluğu', href: '/hizmetler/ogrenci-koclugu' },
      { label: 'Kurumsal Eğitim', href: '/hizmetler/kurumsal-egitim' },
      { label: 'Global Uyum ve Kariyer Koçluğu', href: '/hizmetler#gencler' },
    ],
    primaryCtaLabel: 'Seda Şen ile Ön Görüşme Talep Et',
    secondaryCta: { label: 'Öğrenci Koçluğunu İncele', href: '/hizmetler/ogrenci-koclugu' },
    seoTitle: 'Seda Şen | Kariyer & Yönetici Koçu, Kurumsal Eğitmen',
    seoDescription:
      'Seda Şen; kariyer koçluğu, yönetici koçluğu, kurumsal eğitim, öğrenci gelişimi ve global uyum alanlarında çalışan AURIX uzmanıdır.',
  },
}
