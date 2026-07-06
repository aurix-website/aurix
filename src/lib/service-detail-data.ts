export interface ServiceDetailNeed {
  title: string
  description: string
}

export interface ServiceDetailStep {
  number: string
  title: string
  description: string
}

export interface ServiceDetailExtra {
  heading: string
  body: string
}

export interface ServiceDetail {
  slug: string
  serviceId: string
  eyebrow: string
  h1: string
  heroSubtitle: string
  introText: string
  primaryCta: string
  secondaryCta: string
  audienceHeading: string
  audienceIntro: string
  audience: string[]
  needsHeading: string
  needs: ServiceDetailNeed[]
  extra?: ServiceDetailExtra
  processHeading: string
  processIntro: string
  processSteps: ServiceDetailStep[]
  expertsHeading: string
  expertSlugs: string[]
  expertsNote: string
  ctaHeading: string
  ctaText: string
  ctaButton: string
  seoTitle: string
  seoDescription: string
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'bireysel-kocluk': {
    slug: 'bireysel-kocluk',
    serviceId: 'bireysel',
    eyebrow: 'Bireysel Koçluk',
    h1: 'Bireysel Koçluk',
    heroSubtitle:
      'Yaşamınızda daha fazla netlik, denge ve yön arıyorsanız, bireysel koçluk süreci hedeflerinizi yapılandırmanıza ve iç kaynaklarınızı daha bilinçli kullanmanıza destek olur.',
    introText:
      'AURIX’te bireysel koçluk, hazır cevaplar sunan bir yönlendirme süreci değildir. Kişinin kendi hedeflerini, değerlerini, güçlü yönlerini ve karar alanlarını daha berrak görmesine eşlik eden yapılandırılmış bir gelişim sürecidir.',
    primaryCta: 'Ön Görüşme Talep Et',
    secondaryCta: 'Bireysel Koçluk Sürecini Keşfet',
    audienceHeading: 'Bireysel koçluk kimler için uygundur?',
    audienceIntro:
      'Bireysel koçluk; yaşamında yeni bir yön arayan, karar süreçlerinde daha fazla netlik isteyen veya kişisel hedeflerini daha yapılandırılmış biçimde ele almak isteyen bireyler için uygundur.',
    audience: [
      'Kişisel hedeflerini netleştirmek isteyenler',
      'Karar vermekte zorlananlar',
      'Yaşamında yeni bir başlangıç arayanlar',
      'Daha dengeli ve bilinçli ilerlemek isteyenler',
      'Kendini daha iyi tanımak isteyenler',
      'İç kaynaklarını ve güçlü yönlerini fark etmek isteyenler',
      'Yaşam geçişlerinde profesyonel destek arayanlar',
    ],
    needsHeading: 'Bireysel koçluk hangi ihtiyaçlara destek olur?',
    needs: [
      {
        title: 'Hedef Netliği',
        description:
          'Ne istediğinizi, hangi yöne ilerlemek istediğinizi ve hangi hedeflerin sizin için anlamlı olduğunu daha berrak görmenize yardımcı olur.',
      },
      {
        title: 'Karar Farkındalığı',
        description:
          'Karar süreçlerinizi etkileyen düşünce kalıplarını, önceliklerinizi ve seçeneklerinizi daha bilinçli değerlendirmenizi destekler.',
      },
      {
        title: 'Kişisel Farkındalık',
        description:
          'Güçlü yönlerinizi, değerlerinizi, motivasyon kaynaklarınızı ve gelişim alanlarınızı fark etmenize alan açar.',
      },
      {
        title: 'Yaşam Geçişleri',
        description:
          'Yeni bir dönem, kariyer değişimi, şehir/ülke değişimi veya kişisel dönüşüm sürecinde yönünüzü daha sağlıklı belirlemenize destek olur.',
      },
      {
        title: 'Uygulanabilir Adımlar',
        description:
          'Süreci yalnızca farkındalıkla sınırlı bırakmaz; hedeflerinize uygun somut ve uygulanabilir adımlar oluşturmanıza yardımcı olur.',
      },
    ],
    processHeading: 'Bireysel koçluk süreci nasıl ilerler?',
    processIntro: '',
    processSteps: [
      {
        number: '01',
        title: 'Ön Görüşme',
        description: 'İhtiyacınızı, beklentinizi ve destek almak istediğiniz alanı anlamaya odaklanırız.',
      },
      {
        number: '02',
        title: 'İhtiyaç ve Hedef Analizi',
        description: 'Mevcut durumunuzu, hedeflerinizi ve öncelikli gelişim alanlarınızı birlikte netleştiririz.',
      },
      {
        number: '03',
        title: 'Uygun Uzman Eşleşmesi',
        description: 'İhtiyacınıza ve beklentinize göre size en uygun AURIX uzmanını belirleriz.',
      },
      {
        number: '04',
        title: 'Yol Haritası',
        description: 'Görüşme sıklığı, süreç hedefleri ve odak alanları birlikte planlanır.',
      },
      {
        number: '05',
        title: 'Koçluk Görüşmeleri',
        description: 'Farkındalık, hedef netliği ve uygulanabilir gelişim adımları üzerine çalışılır.',
      },
      {
        number: '06',
        title: 'Değerlendirme',
        description: 'Süreç sonunda kazanımlar, ilerleme alanları ve devam adımları gözden geçirilir.',
      },
    ],
    expertsHeading: 'Bireysel koçlukta çalışabileceğiniz uzmanlar',
    expertSlugs: ['kaan-yazici', 'cigdem-karavelioglu', 'secil-ozbayir', 'hatice-yildirim'],
    expertsNote:
      'Kaan Yazıcı’nın sağlık alanındaki geçmişi, kamu yönetimi eğitimi, Erickson koçluk metodolojisi ve takım koçluğu uzmanlığı; bireysel koçluk sayfasında bütünsel gelişim ve insan odaklı dönüşüm anlatısını destekler. Çiğdem Karavelioğlu’nun Erickson Coaching International eğitimi, gençlerle kariyer koçluğu deneyimi, takım koçluğu ve bireysel seans geçmişi de bireysel gelişim alanında kullanılabilir.',
    ctaHeading: 'Kendi sürecinizi netleştirmek ister misiniz?',
    ctaText:
      'Hangi konuda destek almak istediğinizden emin değilseniz, kısa bir ön görüşme ile ihtiyacınızı birlikte değerlendirebilir ve size uygun bireysel koçluk sürecini belirleyebiliriz.',
    ctaButton: 'Bireysel Koçluk İçin Ön Görüşme Talep Et',
    seoTitle: 'Bireysel Koçluk',
    seoDescription:
      'AURIX bireysel koçluk süreci; hedef netliği, karar farkındalığı, kişisel gelişim ve yaşam geçişlerinde yapılandırılmış destek sunar.',
  },

  'yonetici-koclugu': {
    slug: 'yonetici-koclugu',
    serviceId: 'liderlik',
    eyebrow: 'Yönetici Koçluğu',
    h1: 'Yönetici Koçluğu',
    heroSubtitle:
      'Liderlik rolünüzü daha bilinçli yönetmek, karar alma kalitenizi artırmak ve ekiplerinizle daha etkili çalışmak için yapılandırılmış koçluk süreci.',
    introText:
      'AURIX yönetici koçluğu, liderlerin yalnızca hedeflerine değil; karar alma biçimlerine, iletişim kalitelerine, ekipleriyle kurdukları güven ilişkisine ve değişim dönemlerindeki liderlik etkilerine odaklanır.',
    primaryCta: 'Yönetici Koçluğu İçin Görüşme Planla',
    secondaryCta: 'AURIX Yaklaşımını İncele',
    audienceHeading: 'Yönetici koçluğu kimler için uygundur?',
    audienceIntro:
      'Yönetici koçluğu; liderlik rolünde daha bilinçli, etkili ve sürdürülebilir bir etki oluşturmak isteyen profesyoneller için uygundur.',
    audience: [
      'Yöneticiler',
      'Ekip liderleri',
      'Girişimciler',
      'Kurucu ortaklar',
      'Karar vericiler',
      'Yeni liderlik rolüne geçen profesyoneller',
      'Ekip performansını güçlendirmek isteyen liderler',
      'Kriz veya değişim döneminde ekip yöneten profesyoneller',
    ],
    needsHeading: 'Yönetici koçluğu hangi alanlarda destek sağlar?',
    needs: [
      {
        title: 'Liderlik Tarzı',
        description: 'Liderin kendi yönetim tarzını, güçlü yönlerini ve gelişim alanlarını daha bilinçli fark etmesini sağlar.',
      },
      {
        title: 'Karar Alma Kalitesi',
        description: 'Belirsizlik, yoğunluk veya baskı altında daha net ve tutarlı karar süreçleri geliştirmeye destek olur.',
      },
      {
        title: 'Ekip İletişimi',
        description: 'Liderin ekip üyeleriyle kurduğu iletişimi, geri bildirim dilini ve güven ilişkisini güçlendirmeye odaklanır.',
      },
      {
        title: 'Önceliklendirme',
        description: 'Stratejik hedefler, günlük operasyon ve ekip ihtiyaçları arasında daha sağlıklı öncelikler oluşturmayı destekler.',
      },
      {
        title: 'Değişim Yönetimi',
        description: 'Kurumsal değişim, büyüme, yeniden yapılanma veya kriz dönemlerinde liderlik etkisini güçlendirmeye yardımcı olur.',
      },
      {
        title: 'Sürdürülebilir Performans',
        description: 'Kısa vadeli performans baskısından öte, liderin ve ekibin sürdürülebilir çalışma ritmini oluşturmasına katkı sağlar.',
      },
    ],
    processHeading: 'Yönetici koçluğu süreci nasıl ilerler?',
    processIntro: '',
    processSteps: [
      {
        number: '01',
        title: 'Liderlik Ön Görüşmesi',
        description: 'Yöneticinin rolü, sorumlulukları, ekip yapısı ve öncelikli ihtiyaçları anlaşılır.',
      },
      {
        number: '02',
        title: 'Liderlik İhtiyaç Analizi',
        description: 'Karar alma, iletişim, önceliklendirme, ekip güveni ve performans alanları değerlendirilir.',
      },
      {
        number: '03',
        title: 'Hedef Belirleme',
        description: 'Süreçte çalışılacak liderlik hedefleri netleştirilir.',
      },
      {
        number: '04',
        title: 'Uygun Uzman Eşleşmesi',
        description: 'Yöneticinin ihtiyacına uygun AURIX uzmanı belirlenir.',
      },
      {
        number: '05',
        title: 'Koçluk Görüşmeleri',
        description: 'Liderlik farkındalığı, karar kalitesi, ekip ilişkileri ve uygulanabilir aksiyonlar üzerinde çalışılır.',
      },
      {
        number: '06',
        title: 'Süreç Değerlendirmesi',
        description: 'İlerleme, kazanımlar ve sürdürülebilir gelişim alanları gözden geçirilir.',
      },
    ],
    expertsHeading: 'Yönetici koçluğunda öne çıkan uzmanlarımız',
    expertSlugs: ['hulya-aksu-spizuoco', 'seda-sen', 'secil-ozbayir', 'hatice-yildirim', 'kaan-yazici'],
    expertsNote:
      'Hülya Aksu Spizuoco’nun Koçbank, Dow Jones Telerate ve ISI Emerging Markets New York gibi kurumlarda üst düzey yöneticilik yapmış olması; liderlik, kariyer ve global perspektif için güçlü bir arka plan sunar. Seda Şen’in 20 yılı aşkın denizcilik ve lojistik deneyimi, ekip yönetimi, satış/pazarlama liderliği, yönetici koçluğu ve kurumsal eğitim alanları bu hizmet sayfasında doğrudan değerlendirilebilir. Seçil Özbayır’ın insan kaynakları, liderlik gelişimi, organizasyonel dönüşüm ve kurumsal eğitim geçmişi de yönetici koçluğu tarafını güçlendirir.',
    ctaHeading: 'Liderlik sürecinizi daha bilinçli yönetmek ister misiniz?',
    ctaText:
      'Ön görüşmede liderlik rolünüzü, ekip yapınızı ve öncelikli gelişim ihtiyacınızı birlikte değerlendirerek size uygun yönetici koçluğu sürecini belirleyebiliriz.',
    ctaButton: 'Yönetici Koçluğu İçin Ön Görüşme Talep Et',
    seoTitle: 'Yönetici Koçluğu',
    seoDescription:
      'AURIX yönetici koçluğu; liderlik, karar alma, ekip iletişimi, önceliklendirme ve sürdürülebilir performans alanlarında profesyonel destek sunar.',
  },

  'kurumsal-egitim': {
    slug: 'kurumsal-egitim',
    serviceId: 'kurumsal',
    eyebrow: 'Kurumsal Eğitimler',
    h1: 'Kurumsal Eğitimler',
    heroSubtitle:
      'Liderlik, takım gelişimi, iletişim, değişim yönetimi ve çalışan deneyimi alanlarında kurumlara özel gelişim programları.',
    introText:
      'AURIX kurumsal eğitimleri, hazır paketlerden oluşan standart sunumlar olarak değil; kurumun ihtiyacına, hedef kitlesine ve gelişim beklentisine göre tasarlanan yapılandırılmış öğrenme ve gelişim süreçleri olarak ele alınır.',
    primaryCta: 'Kurumsal İhtiyaç Analizi Talep Et',
    secondaryCta: 'Program Alanlarını İncele',
    audienceHeading: 'Kurumsal eğitimler kimler için uygundur?',
    audienceIntro:
      'Kurumsal eğitimler; ekiplerinin gelişimini desteklemek, liderlik kapasitesini güçlendirmek, iletişim kalitesini artırmak ve değişim süreçlerini daha sağlıklı yönetmek isteyen kurumlar için uygundur.',
    audience: [
      'Şirketler',
      'İK departmanları',
      'Eğitim ve gelişim ekipleri',
      'Yönetici ekipleri',
      'Takımlar',
      'Girişim merkezleri',
      'Teknoparklar',
      'Kurumsal dönüşüm sürecindeki organizasyonlar',
      'Yeni liderlik yapısı kuran şirketler',
    ],
    needsHeading: 'Kurumsal program alanları',
    needs: [
      {
        title: 'Liderlik Gelişimi',
        description: 'Yöneticilerin liderlik tarzlarını, karar alma becerilerini, iletişim etkilerini ve ekip yönetimi kapasitelerini güçlendirmeye odaklanır.',
      },
      {
        title: 'Takım Gelişimi',
        description: 'Ekip içi güven, ortak hedef, sorumluluk kültürü ve iş birliği kalitesini artırmaya yönelik çalışmalar içerir.',
      },
      {
        title: 'Kurumsal İletişim',
        description: 'Kurum içi iletişim, geri bildirim, çatışma yönetimi ve iş birliği dilini geliştirmeye destek olur.',
      },
      {
        title: 'Değişim Yönetimi',
        description: 'Kurumsal dönüşüm, yeniden yapılanma, büyüme veya belirsizlik dönemlerinde ekiplerin uyum kapasitesini güçlendirir.',
      },
      {
        title: 'Kuşaklar Arası İletişim',
        description: 'Farklı kuşakların bir arada çalıştığı kurumlarda ortak değer, iletişim ve üretkenlik alanlarını güçlendirmeye odaklanır.',
      },
      {
        title: 'Çalışan Deneyimi ve Wellbeing',
        description: 'Çalışanların iş yaşamında sürdürülebilir performans, farkındalık, denge ve iyi oluş alanlarını destekler.',
      },
      {
        title: 'Kariyer Gelişimi',
        description: 'Çalışanların kariyer yönlerini, güçlü yönlerini ve gelişim hedeflerini daha bilinçli ele almalarına destek olur.',
      },
      {
        title: 'Global Çalışma Kültürü',
        description: 'Farklı ülkeler, kültürler veya uluslararası ekiplerle çalışan kurumlarda uyum, iletişim ve kariyer farkındalığını destekler.',
      },
    ],
    extra: {
      heading: 'Program formatları',
      body: 'Tek günlük eğitim · Yarım günlük atölye · Çok oturumlu gelişim programı · Yönetici gelişim programı · Takım koçluğu destekli eğitim · Online eğitim · Hibrit eğitim · Kuruma özel liderlik akademisi',
    },
    processHeading: 'Kurumsal eğitim süreci nasıl tasarlanır?',
    processIntro: '',
    processSteps: [
      {
        number: '01',
        title: 'Kurumsal Ön Görüşme',
        description: 'Kurumun ihtiyacı, hedef kitlesi ve gelişim beklentisi anlaşılır.',
      },
      {
        number: '02',
        title: 'İhtiyaç Analizi',
        description: 'Kurumun mevcut yapısı, ekip profili ve öncelikli gelişim alanları değerlendirilir.',
      },
      {
        number: '03',
        title: 'Program Tasarımı',
        description: 'İhtiyaca göre eğitim, atölye, koçluk veya hibrit gelişim programı oluşturulur.',
      },
      {
        number: '04',
        title: 'Uzman / Eğitmen Eşleşmesi',
        description: 'Programın içeriğine uygun AURIX uzmanları belirlenir.',
      },
      {
        number: '05',
        title: 'Uygulama',
        description: 'Eğitim, atölye veya koçluk süreci kurumla planlanan formatta gerçekleştirilir.',
      },
      {
        number: '06',
        title: 'Değerlendirme',
        description: 'Program çıktıları, katılımcı geri bildirimleri ve devam önerileri gözden geçirilir.',
      },
    ],
    expertsHeading: 'Kurumsal eğitimlerde öne çıkan uzmanlarımız',
    expertSlugs: ['hatice-yildirim', 'secil-ozbayir', 'seda-sen', 'hulya-aksu-spizuoco', 'cigdem-karavelioglu', 'kaan-yazici'],
    expertsNote:
      'Hatice Yıldırım’ın 30 yılı aşkın öğretmenlik, eğitim yönetimi, kurumsal liderlik ve profesyonel koçluk deneyimi; özellikle stratejik dönüşüm, liyakat, liderlik akademisi tasarımı ve kuşaklar arası sinerji başlıklarında kurumsal eğitim sayfası için güçlü bir kaynak oluşturur. Seçil Özbayır’ın 20 yılı aşkın profesyonel deneyimi, 14 yıllık insan kaynakları müdürlüğü, organizasyonel dönüşüm, liderlik gelişimi, kurumsal eğitim ve wellbeing alanları bu hizmeti destekler.',
    ctaHeading: 'Kurumunuz için özel bir gelişim programı tasarlayalım.',
    ctaText:
      'Liderlik, takım gelişimi, iletişim, değişim yönetimi veya çalışan deneyimi alanlarında kurumunuzun ihtiyacını birlikte değerlendirebiliriz.',
    ctaButton: 'Kurumsal Görüşme Talep Et',
    seoTitle: 'Kurumsal Eğitimler',
    seoDescription:
      'AURIX kurumsal eğitimleri; liderlik gelişimi, takım koçluğu, iletişim, değişim yönetimi ve çalışan deneyimi alanlarında kuruma özel programlar sunar.',
  },

  'ogrenci-koclugu': {
    slug: 'ogrenci-koclugu',
    serviceId: 'gencler',
    eyebrow: 'Öğrenci Koçluğu',
    h1: 'Öğrenci Koçluğu',
    heroSubtitle:
      'Öğrencilerin hedef belirleme, sınav stratejisi, motivasyon, zaman yönetimi ve kariyer farkındalığı süreçlerine yapılandırılmış destek.',
    introText:
      'AURIX öğrenci koçluğu, öğrencinin yalnızca akademik performansına değil; hedeflerini netleştirmesine, çalışma düzenini oluşturmasına, güçlü yönlerini fark etmesine ve geleceğe dair daha bilinçli seçimler yapmasına odaklanır.',
    primaryCta: 'Öğrenci Koçluğu İçin Bilgi Al',
    secondaryCta: 'Ön Görüşme Talep Et',
    audienceHeading: 'Öğrenci koçluğu kimler için uygundur?',
    audienceIntro: '',
    audience: [
      'Lise öğrencileri',
      'Üniversite öğrencileri',
      'Sınav sürecindeki gençler',
      'Hedef belirlemekte zorlanan öğrenciler',
      'Çalışma düzeni oluşturmak isteyen öğrenciler',
      'Kariyer yönünü belirlemek isteyen gençler',
      'Bölüm ve meslek seçimi sürecindeki öğrenciler',
      'Çocuğu için profesyonel destek arayan veliler',
    ],
    needsHeading: 'Öğrenci koçluğu hangi alanlarda destek sağlar?',
    needs: [
      {
        title: 'Hedef Belirleme',
        description: 'Öğrencinin kısa, orta ve uzun vadeli hedeflerini daha bilinçli ve gerçekçi şekilde oluşturmasına destek olur.',
      },
      {
        title: 'Sınav Stratejisi',
        description: 'Sınav sürecinde çalışma planı, önceliklendirme ve sürdürülebilir hazırlık düzeni oluşturulmasına katkı sağlar.',
      },
      {
        title: 'Motivasyon',
        description: 'Öğrencinin kendi nedenlerini, değerlerini ve ilerleme kaynaklarını fark etmesine yardımcı olur.',
      },
      {
        title: 'Zaman Yönetimi',
        description: 'Ders, sınav, sosyal yaşam ve dinlenme alanları arasında daha sağlıklı bir denge kurulmasını destekler.',
      },
      {
        title: 'Kariyer Farkındalığı',
        description: 'Öğrencinin ilgi alanlarını, güçlü yönlerini ve gelecek seçeneklerini daha bilinçli değerlendirmesine alan açar.',
      },
      {
        title: 'Güçlü Yönleri Keşfetme',
        description: 'Öğrencinin yalnızca eksiklerine değil, potansiyeline ve güçlü yönlerine de odaklanır.',
      },
    ],
    extra: {
      heading: 'Veliler için güvenilir ve yapılandırılmış destek',
      body: 'Öğrenci koçluğu, öğrencinin yerine karar vermek veya ona hazır çözümler sunmak değildir. Amaç, öğrencinin kendi hedeflerini, sorumluluk alanlarını ve güçlü yönlerini daha bilinçli fark etmesine destek olmaktır. AURIX’te süreç, öğrencinin yaşı, ihtiyacı, hedefleri ve gelişim alanları dikkate alınarak yapılandırılır. Veliler için bu süreç; çocuğun akademik ve kişisel gelişimine profesyonel, etik ve sistemli bir destek alanı sunar.',
    },
    processHeading: 'Öğrenci koçluğu süreci nasıl ilerler?',
    processIntro: '',
    processSteps: [
      {
        number: '01',
        title: 'Ön Görüşme',
        description: 'Öğrenci ve/veya veli ile temel ihtiyaç ve beklenti anlaşılır.',
      },
      {
        number: '02',
        title: 'Öğrenci İhtiyaç Analizi',
        description: 'Hedefler, çalışma alışkanlıkları, motivasyon alanları ve öncelikler değerlendirilir.',
      },
      {
        number: '03',
        title: 'Uygun Uzman Eşleşmesi',
        description: 'Öğrencinin ihtiyacına uygun AURIX uzmanı belirlenir.',
      },
      {
        number: '04',
        title: 'Hedef ve Çalışma Planı',
        description: 'Öğrenciyle birlikte gerçekçi hedefler ve uygulanabilir gelişim adımları oluşturulur.',
      },
      {
        number: '05',
        title: 'Koçluk Görüşmeleri',
        description: 'Hedef takibi, farkındalık, çalışma düzeni ve kariyer yönelimi üzerine çalışılır.',
      },
      {
        number: '06',
        title: 'Değerlendirme',
        description: 'Süreçteki ilerleme ve devam ihtiyacı birlikte gözden geçirilir.',
      },
    ],
    expertsHeading: 'Öğrenci koçluğunda öne çıkan uzmanlarımız',
    expertSlugs: ['seda-sen', 'cigdem-karavelioglu', 'hatice-yildirim'],
    expertsNote:
      'Seda Şen’in 16–18 yaş kariyer farkındalığı, üniversite ve kariyer inşası başlıkları öğrenci koçluğu sayfası için doğrudan kullanılabilecek güçlü içeriklerdir. Çiğdem Karavelioğlu’nun 16–25 yaş grubuna hayat amaçları ve kariyer koçluğu verdiği bilgisi bu alanda destekleyici bir uzmanlık sunar. Hatice Yıldırım’ın eğitim yönetimi ve öğretmenlik alanındaki uzun deneyimi de öğrenci ve eğitim odaklı danışmanlık tarafını güçlendirir.',
    ctaHeading: 'Öğrenciniz için doğru destek alanını birlikte belirleyelim.',
    ctaText:
      'Ön görüşmede öğrencinin ihtiyacını, hedeflerini ve mevcut durumunu değerlendirerek uygun öğrenci koçluğu sürecini birlikte planlayabiliriz.',
    ctaButton: 'Öğrenci Koçluğu İçin Ön Görüşme Talep Et',
    seoTitle: 'Öğrenci Koçluğu',
    seoDescription:
      'AURIX öğrenci koçluğu; hedef belirleme, sınav stratejisi, motivasyon, zaman yönetimi ve kariyer farkındalığı alanlarında yapılandırılmış destek sunar.',
  },
}
