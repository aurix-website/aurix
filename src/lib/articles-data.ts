export type ArticleCategory =
  | 'bireysel-kocluk-kariyer'
  | 'liderlik-yonetici'
  | 'kurumsal-takim'
  | 'gencler-kuresel'

export interface ArticleSection {
  heading?: string
  paragraphs: string[]
}

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: ArticleCategory
  isCornerstone: boolean
  publishedDate: string
  body: ArticleSection[]
  seoTitle: string
  seoDescription: string
}

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  'bireysel-kocluk-kariyer': 'Kariyer',
  'liderlik-yonetici': 'Liderlik',
  'kurumsal-takim': 'Kurumsal',
  'gencler-kuresel': 'Gençler',
}

export const ARTICLES: Article[] = [
  {
    slug: 'kocluk-nedir-danismanlik-terapiden-farki',
    title: 'Koçluk nedir, danışmanlık ve terapiden nasıl ayrılır?',
    excerpt:
      'Koçluk, danışmanlık ve terapi sık sık birbirinin yerine kullanılır. Oysa üçü farklı ihtiyaçlara, farklı yöntemlerle cevap verir.',
    category: 'bireysel-kocluk-kariyer',
    isCornerstone: true,
    publishedDate: '2026-01-12',
    seoTitle: 'Koçluk nedir, danışmanlık ve terapiden nasıl ayrılır?',
    seoDescription:
      'Koçluk, danışmanlık ve terapi arasındaki farkı; kapsam, yöntem ve amaç üzerinden açıklayan bir rehber.',
    body: [
      {
        paragraphs: [
          'Koçluk, danışmanlık ve terapi kelimeleri günlük dilde çoğu zaman birbirinin yerine kullanılır. Ancak bu üç alan farklı sorulara, farklı yöntemlerle cevap verir. Karışıklık, hangi desteğin ne zaman uygun olduğunu belirsizleştirir.',
        ],
      },
      {
        heading: 'Terapi: geçmişi ve iyileşmeyi merkeze alır',
        paragraphs: [
          'Terapi, ruh sağlığı alanında lisanslı bir uzman tarafından yürütülen klinik bir süreçtir. Amaç, bir tanı çerçevesinde iyileşmeyi desteklemektir. Terapi genellikle geçmişe, duygusal örüntülere ve psikolojik iyi oluşa odaklanır.',
        ],
      },
      {
        heading: 'Danışmanlık: uzmanlık bilgisiyle çözüm önerir',
        paragraphs: [
          'Danışmanlık, belirli bir alanda uzmanlaşmış bir kişinin, somut bir soruna teknik bilgiyle çözüm önermesidir. Danışman, çoğunlukla "ne yapmalısınız" sorusuna doğrudan cevap verir.',
        ],
      },
      {
        heading: 'Koçluk: geleceği ve harekete geçmeyi merkeze alır',
        paragraphs: [
          'Koçluk ise klinik bir müdahale değildir. Amaç, kişinin kendi hedeflerini, önceliklerini ve karar alanlarını daha net görmesine eşlik etmektir. Koç, hazır cevap vermek yerine doğru soruları sorar; danışanın kendi cevabını bulmasına alan açar.',
          'Koçluk süreci geleceğe, hedeflere ve uygulanabilir adımlara odaklanır. Bir koç, danışanın yerine karar vermez; kararın arkasındaki netliği güçlendirir.',
        ],
      },
      {
        heading: 'Hangi destek ne zaman uygun olur?',
        paragraphs: [
          'Bir kişi klinik düzeyde bir zorluk yaşıyorsa (yoğun kaygı, depresif belirtiler, travma sonrası süreçler gibi) doğru adres terapidir. Somut, teknik bir uzmanlık sorusu varsa (hukuki, mali, kariyer stratejisi gibi) danışmanlık daha uygundur. Kişi zaten işlevsel durumdaysa ama hedeflerini netleştirmek, karar almak veya potansiyelini daha bilinçli kullanmak istiyorsa koçluk doğru araçtır.',
          'AURIX’te koçluk ve danışmanlık süreçleri; psikoterapi, tıbbi tedavi veya klinik müdahalenin yerine geçmez. İhtiyacın farklı bir uzmanlık alanına yönlendirme gerektirdiği durumlarda, bu sınırlar açık ve sorumlu biçimde gözetilir.',
        ],
      },
    ],
  },

  {
    slug: 'yonetici-koclugu-hangi-durumlarda-ise-yarar',
    title: 'Yönetici koçluğu hangi durumlarda gerçekten işe yarar?',
    excerpt:
      'Yönetici koçluğu her sorunun çözümü değildir. İşe yaradığı durumlar kadar, uygun olmadığı durumları bilmek de önemlidir.',
    category: 'liderlik-yonetici',
    isCornerstone: true,
    publishedDate: '2026-02-03',
    seoTitle: 'Yönetici koçluğu hangi durumlarda gerçekten işe yarar?',
    seoDescription:
      'Yönetici koçluğunun gerçekten fark yarattığı durumlar ve doğru araç olmadığı durumlar üzerine bir değerlendirme.',
    body: [
      {
        paragraphs: [
          'Yönetici koçluğu son yıllarda yaygınlaştı; ama bu yaygınlık, her liderlik sorununun koçlukla çözüleceği anlamına gelmiyor. Koçluğun gerçekten katkı sağladığı durumları netleştirmek, yatırımın doğru yere gitmesini sağlar.',
        ],
      },
      {
        heading: 'İşe yaradığı durumlar',
        paragraphs: [
          'Yeni bir liderlik rolüne geçiş: Bir yönetici ilk kez ekip yönetmeye başladığında veya daha büyük bir sorumluluk aldığında, koçluk yeni rolün gerektirdiği davranış değişimini hızlandırır.',
          'Karar yorgunluğu: Yoğun tempoda çalışan liderler, önceliklendirme ve karar alma konusunda netlik kaybedebilir. Koçluk bu netliği geri kazandırır.',
          'Ekip içi iletişim sorunları: Geri bildirim vermekte zorlanan veya ekibiyle güven ilişkisi kurmakta güçlük çeken liderler için koçluk, iletişim örüntülerini görünür kılar.',
          'Değişim dönemleri: Yeniden yapılanma, büyüme veya kriz dönemlerinde liderlik etkisini korumak isteyen yöneticiler için koçluk yapılandırılmış bir destek sunar.',
        ],
      },
      {
        heading: 'İşe yaramadığı veya yeterli olmadığı durumlar',
        paragraphs: [
          'Koçluk, teknik bir yetkinlik eksikliğinin (örneğin finansal analiz veya hukuki bilgi) yerini tutmaz; bu durumda doğru adres eğitim veya danışmanlıktır.',
          'Kurumsal yapı veya süreç sorunları (belirsiz roller, çelişen hedefler gibi) bireysel koçlukla değil, organizasyonel düzeyde ele alınmalıdır.',
          'Kişi değişime gerçekten açık değilse, koçluk süreci zorlama bir egzersize dönüşür ve beklenen etkiyi yaratmaz.',
        ],
      },
      {
        heading: 'Doğru zamanlama neden önemli?',
        paragraphs: [
          'Yönetici koçluğunun etkisi, doğru ihtiyaçla, doğru zamanda başlatıldığında ortaya çıkar. Bu yüzden AURIX’te süreç, doğrudan bir koçluk programına yönlendirmeden önce ihtiyacın gerçekten koçlukla mı, yoksa başka bir destekle mi karşılanacağını anlamakla başlar.',
        ],
      },
    ],
  },

  {
    slug: 'gencler-icin-kariyer-farkindaligi',
    title: 'Gençler için kariyer farkındalığı: bölüm seçiminden önce sorular',
    excerpt:
      'Üniversite bölümü seçimi, çoğu zaman aile beklentisi veya puan sınırıyla belirlenir. Oysa birkaç doğru soru, kararı daha bilinçli hale getirir.',
    category: 'gencler-kuresel',
    isCornerstone: true,
    publishedDate: '2026-02-20',
    seoTitle: 'Gençler için kariyer farkındalığı: bölüm seçiminden önce sorular',
    seoDescription:
      'Üniversite ve bölüm seçimi öncesinde gençlerin kendilerine sorması gereken sorular üzerine bir kariyer farkındalığı rehberi.',
    body: [
      {
        paragraphs: [
          'Bölüm seçimi, genellikle sınav puanı, aile beklentisi veya "iyi bir meslek" algısı etrafında şekillenir. Bu etkenler tamamen göz ardı edilemez; ama tek başlarına yeterli bir karar zemini oluşturmazlar. Kariyer farkındalığı, kararı bu üç etkenin ötesine taşımakla ilgilidir.',
        ],
      },
      {
        heading: 'Kendine sorulacak sorular',
        paragraphs: [
          'Hangi konularda, kimse zorlamadan zaman ayırdığımı fark ediyorum? İlgi, çoğu zaman zorunluluktan önce gelen bir ipucudur.',
          'Hangi tür problemleri çözmekten keyif alıyorum — sayısal mı, sözel mi, görsel mi, insan ilişkileri mi?',
          'Bu bölümü seçersem, mezun olduktan sonra günlük hayatım nasıl görünür? Somut bir gün tahayyül etmek, soyut bir unvandan daha fazla bilgi verir.',
          'Bu kararı kim için veriyorum — kendim için mi, yoksa bir beklentiyi karşılamak için mi?',
        ],
      },
      {
        heading: 'Puan değil, yön sorusu',
        paragraphs: [
          '"Puanım hangi bölüme yeter?" sorusu ile "Bu alan bana uygun mu?" sorusu farklı kararlar üretir. Kariyer farkındalığı çalışmaları, gencin puanından önce yönünü netleştirmesine odaklanır.',
        ],
      },
      {
        heading: 'Yanlış seçim, geri dönüşü olmayan bir hata değildir',
        paragraphs: [
          'Bölüm seçimi önemlidir ama geri dönüşü olmayan bir karar değildir. Kariyer yolları nadiren doğrusaldır. Bu farkındalık, gencin karar üzerindeki baskıyı daha sağlıklı taşımasını sağlar.',
          'AURIX’te öğrenci koçluğu, hazır bir bölüm önerisi sunmaz; gencin kendi ilgisini, güçlü yönlerini ve önceliklerini görmesine eşlik eder.',
        ],
      },
    ],
  },

  {
    slug: 'kariyer-gecislerinde-zihinsel-netlik',
    title: 'Kariyer geçişlerinde zihinsel netlik: yeni rol, yeni ülke, yeni kimlik',
    excerpt:
      'Yeni bir rol, yeni bir ülke veya yeni bir kimlik — her kariyer geçişi, benzer bir zihinsel netlik ihtiyacı doğurur.',
    category: 'bireysel-kocluk-kariyer',
    isCornerstone: true,
    publishedDate: '2026-03-08',
    seoTitle: 'Kariyer geçişlerinde zihinsel netlik: yeni rol, yeni ülke, yeni kimlik',
    seoDescription:
      'Kariyer geçişlerinde ortaya çıkan belirsizlik ve zihinsel netlik ihtiyacı üzerine bir değerlendirme.',
    body: [
      {
        paragraphs: [
          'Yeni bir role terfi etmek, yeni bir şirkette işe başlamak, yeni bir ülkeye taşınmak veya kariyerde tamamen farklı bir alana geçmek — görünüşte farklı bu durumların ortak bir noktası vardır: hepsi geçici bir belirsizlik dönemi ve zihinsel netlik ihtiyacı yaratır.',
        ],
      },
      {
        heading: 'Geçiş dönemlerinin ortak yapısı',
        paragraphs: [
          'Her geçişte üç unsur aynı anda değişir: rol (ne yaptığımız), bağlam (nerede ve kimlerle çalıştığımız) ve kimlik (kendimizi nasıl tanımladığımız). Bu üç unsur birlikte değiştiğinde, kişi geçici bir yönsüzlük hissi yaşayabilir. Bu, bir eksiklik değil; geçiş sürecinin doğal bir parçasıdır.',
        ],
      },
      {
        heading: 'Zihinsel netlik neden zorlaşır?',
        paragraphs: [
          'Geçiş döneminde kişi hem eski referans noktalarını hem de yeni beklentileri aynı anda taşır. Bu, karar alma kapasitesini geçici olarak yorar. Netlik kaybı, çoğu zaman yetersizlik değil; fazla bilgiyi aynı anda işleme çabasının bir sonucudur.',
        ],
      },
      {
        heading: 'Netliği geri kazanmanın yapı taşları',
        paragraphs: [
          'Değişmeyeni tanımlamak: Rol, ülke veya bağlam değişse bile kişinin değerleri ve güçlü yönleri genellikle sabit kalır. Bunları görünür kılmak, zemin duygusunu güçlendirir.',
          'Yeni beklentileri somutlaştırmak: "Bu yeni rolde/ülkede/hayatta başarı neye benziyor?" sorusuna somut bir cevap aramak, soyut kaygıyı azaltır.',
          'Küçük, uygulanabilir adımlarla ilerlemek: Geçişin tamamını bir anda çözmeye çalışmak yerine, bir sonraki adıma odaklanmak sürdürülebilir ilerleme sağlar.',
        ],
      },
      {
        heading: 'Destek almanın doğru zamanı',
        paragraphs: [
          'Kariyer koçluğu, bu tür geçiş dönemlerinde kişinin kendi netliğini yeniden kurmasına yapılandırılmış bir çerçevede eşlik eder. Amaç, geçişi hızlandırmak değil; geçişi daha bilinçli ve daha az yıpratıcı hale getirmektir.',
        ],
      },
    ],
  },

  {
    slug: 'takim-koclugu-egitim-farki',
    title: 'Takım koçluğu ile eğitim arasındaki fark nedir?',
    excerpt:
      'Bir ekibe bilgi aktarmak ile o ekibin birlikte çalışma biçimini değiştirmek aynı şey değildir. Bu, takım koçluğu ile eğitim arasındaki temel farktır.',
    category: 'kurumsal-takim',
    isCornerstone: true,
    publishedDate: '2026-03-24',
    seoTitle: 'Takım koçluğu ile eğitim arasındaki fark nedir?',
    seoDescription:
      'Kurumsal eğitim ile takım koçluğu arasındaki farkı; amaç, yöntem ve beklenen çıktı üzerinden ele alan bir rehber.',
    body: [
      {
        paragraphs: [
          'Kurumlar genellikle "ekibimize bir şeyler yapalım" ihtiyacıyla yola çıkar. Ancak bu ihtiyacın eğitimle mi, takım koçluğuyla mı karşılanacağı, beklenen sonucu doğrudan etkiler.',
        ],
      },
      {
        heading: 'Eğitim: bilgi ve beceri aktarımı',
        paragraphs: [
          'Eğitim, belirli bir konuda bilgi veya beceri aktarmayı amaçlar. İçerik önceden tasarlanır, katılımcılar genellikle alıcı konumdadır. Eğitimin başarısı, bilginin doğru aktarılıp aktarılmadığıyla ölçülür.',
        ],
      },
      {
        heading: 'Takım koçluğu: birlikte çalışma biçimini ele alır',
        paragraphs: [
          'Takım koçluğu ise bilgi aktarmaktan çok, ekibin kendi dinamiklerini — iletişim örüntülerini, güven düzeyini, ortak hedefe hizalanmasını, sorumluluk paylaşımını — birlikte fark etmesine ve geliştirmesine odaklanır. Süreç, ekibin kendi cevaplarını üretmesine alan açar; hazır bir içerik sunmaz.',
        ],
      },
      {
        heading: 'Hangi ihtiyaç hangi yaklaşımı gerektirir?',
        paragraphs: [
          'Ekip belirli bir beceriyi (yeni bir araç, bir metodoloji, bir süreç) öğrenmeye ihtiyaç duyuyorsa, doğru araç eğitimdir.',
          'Ekip teknik olarak yetkin ama birlikte çalışma biçiminde sürtünme, güven eksikliği veya hizalanma sorunu yaşıyorsa, doğru araç takım koçluğudur.',
          'Çoğu zaman ikisi birbirini tamamlar: önce eğitimle ortak bir dil kurulur, ardından takım koçluğuyla bu dilin gerçek çalışma pratiğine yansıması desteklenir.',
        ],
      },
      {
        heading: 'Karıştırmanın bedeli',
        paragraphs: [
          'Bir güven sorununu eğitimle çözmeye çalışmak, ya da bir beceri eksikliğini takım koçluğuyla kapatmaya çalışmak, kaynağın yanlış yere harcanmasına yol açar. Bu yüzden AURIX’te kurumsal süreç, önce ihtiyacın hangi kategoriye ait olduğunu netleştirmekle başlar.',
        ],
      },
    ],
  },

  {
    slug: 'kurumsal-egitimde-kalici-etki',
    title: 'Kurumsal eğitimlerde kalıcı etki nasıl oluşturulur?',
    excerpt:
      'Bir eğitim günü iyi geçebilir; ama asıl soru, o günün ekibin gerçek çalışma biçimine ne kadar yansıdığıdır.',
    category: 'kurumsal-takim',
    isCornerstone: true,
    publishedDate: '2026-04-14',
    seoTitle: 'Kurumsal eğitimlerde kalıcı etki nasıl oluşturulur?',
    seoDescription:
      'Kurumsal eğitimlerin tek seferlik bir bilgi aktarımından öteye geçip kalıcı davranış değişikliği yaratması için gereken unsurlar.',
    body: [
      {
        paragraphs: [
          'Katılımcı memnuniyeti yüksek bir eğitim günü, her zaman kalıcı bir etki anlamına gelmez. Eğitimden birkaç hafta sonra hiçbir şey değişmemişse, o eğitim iyi bir deneyim olsa da kurumsal açıdan sınırlı bir yatırım getirisi sağlamış demektir.',
        ],
      },
      {
        heading: 'Kalıcılığı engelleyen yaygın hatalar',
        paragraphs: [
          'İhtiyaç analizi yapılmadan, hazır bir içeriğin doğrudan uygulanması.',
          'Eğitimin tek seferlik bir etkinlik olarak tasarlanması; takip veya pekiştirme adımı bulunmaması.',
          'İçeriğin, katılımcıların gerçek iş bağlamından kopuk, genel geçer örneklerle anlatılması.',
        ],
      },
      {
        heading: 'Kalıcı etki için gereken unsurlar',
        paragraphs: [
          'Önce ihtiyaç, sonra içerik: Eğitim programı, kurumun mevcut yapısı ve hedef kitlesi analiz edildikten sonra tasarlanmalıdır.',
          'Uygulanabilir çerçeveler: Katılımcıların eğitim bitiminde "yarın işe döndüğümde ne yapacağım?" sorusuna somut bir cevabı olmalıdır.',
          'Takip ve pekiştirme: Tek oturumluk eğitimler yerine, birkaç hafta arayla planlanan kısa pekiştirme oturumları, öğrenilenin çalışma pratiğine yerleşmesini destekler.',
          'Liderlik desteği: Eğitimde öğrenilenler, yöneticiler tarafından da benimsenip günlük çalışma diline yansıtılmazsa, etki hızla söner.',
        ],
      },
      {
        heading: 'Ölçüm olmadan kalıcılık iddia edilemez',
        paragraphs: [
          'Bir eğitimin kalıcı etki yaratıp yaratmadığı, katılımcı anketleriyle değil; birkaç ay sonra gözlemlenen davranış ve süreç değişiklikleriyle anlaşılır. AURIX’te kurumsal eğitim süreci, bu nedenle program tasarımı kadar değerlendirme ve takip adımını da içerir.',
        ],
      },
    ],
  },

  {
    slug: 'ogrenci-koclugu-sinav-basarisindan-fazlasi',
    title: 'Öğrenci koçluğu sınav başarısından daha fazlasıdır',
    excerpt:
      'Öğrenci koçluğu yalnızca sınav stratejisiyle sınırlı değildir; hedef belirleme, motivasyon ve zaman yönetimi aynı sürecin parçasıdır.',
    category: 'gencler-kuresel',
    isCornerstone: true,
    publishedDate: '2026-05-05',
    seoTitle: 'Öğrenci koçluğu sınav başarısından daha fazlasıdır',
    seoDescription:
      'Öğrenci koçluğunun sınav stratejisinin ötesinde hedef belirleme, motivasyon ve zaman yönetimini nasıl kapsadığı üzerine bir yazı.',
    body: [
      {
        paragraphs: [
          'Öğrenci koçluğu denince akla ilk olarak sınav stratejisi gelir. Oysa sınav yalnızca daha geniş bir sürecin görünen kısmıdır. Asıl çalışma, öğrencinin kendi hedefini, motivasyon kaynağını ve çalışma düzenini fark etmesiyle ilgilidir.',
        ],
      },
      {
        heading: 'Sınav stratejisinin ötesi',
        paragraphs: [
          'Bir öğrenci, doğru çalışma tekniklerini bilse bile; hedefi belirsizse, motivasyonu dalgalıysa veya zamanını nasıl yöneteceğini bilmiyorsa, bu teknikler beklenen sonucu vermez. Öğrenci koçluğu, bu üç alanı sınav stratejisinden önce ele alır.',
        ],
      },
      {
        heading: 'Hedef belirleme',
        paragraphs: [
          'Bir öğrencinin "iyi not almak" gibi genel bir hedefi olması, harekete geçmesi için yeterli değildir. Hedefin, öğrencinin kendi diliyle, somut ve anlamlı hale getirilmesi gerekir.',
        ],
      },
      {
        heading: 'Motivasyon: dışarıdan değil içeriden',
        paragraphs: [
          'Aileden veya öğretmenden gelen baskı kısa süreli bir motivasyon yaratabilir; ama sürdürülebilir değildir. Öğrenci koçluğu, öğrencinin kendi nedenlerini — neden çalıştığını, neyi önemsediğini — fark etmesine alan açar.',
        ],
      },
      {
        heading: 'Zaman yönetimi ve çalışma düzeni',
        paragraphs: [
          'Ders, sınav hazırlığı, sosyal yaşam ve dinlenme arasında sürdürülebilir bir denge kurmak, tek başına bir beceridir ve genellikle kimse tarafından açıkça öğretilmez. Öğrenci koçluğu bu dengeyi yapılandırılmış biçimde ele alır.',
          'Bu üç alan — hedef, motivasyon, zaman yönetimi — birlikte çalıştığında, sınav stratejisi zaten daha sağlam bir zemine oturur.',
        ],
      },
    ],
  },

  {
    slug: 'yurtdisinda-yeni-kariyer-global-uyum',
    title: 'Yurtdışında yeni bir kariyer: global uyum sürecinde nelere dikkat edilir?',
    excerpt:
      'Yeni bir ülkede kariyer kurmak, yalnızca dil veya belge meselesi değildir. Kimlik ve profesyonel özgüven de aynı süreçte yeniden şekillenir.',
    category: 'gencler-kuresel',
    isCornerstone: true,
    publishedDate: '2026-06-02',
    seoTitle: 'Yurtdışında yeni bir kariyer: global uyum sürecinde nelere dikkat edilir?',
    seoDescription:
      'Yurtdışına taşınan profesyoneller için kariyer ve kimlik açısından global uyum sürecinde dikkat edilmesi gereken noktalar.',
    body: [
      {
        paragraphs: [
          'Yeni bir ülkeye taşınan bir profesyonel için en görünür zorluklar dil, oturum izni veya iş bulma süreciyle ilgilidir. Ancak bu görünür zorlukların altında, daha az konuşulan bir katman vardır: kimlik ve profesyonel özgüvenin yeniden şekillenmesi.',
        ],
      },
      {
        heading: 'Statü kaybı hissi',
        paragraphs: [
          'Eski ülkesinde deneyimli ve tanınan bir profesyonel, yeni ülkede sıfırdan bir güven inşa etmek durumunda kalabilir. Bu, gerçek bir yetkinlik kaybı değildir; ama öyle hissedilebilir. Bu hissi isimlendirmek, onunla baş etmenin ilk adımıdır.',
        ],
      },
      {
        heading: 'Kariyer kimliğini yeniden tanımlamak',
        paragraphs: [
          '"Ben kimim, ne yapıyorum" sorusunun cevabı, yeni bir çalışma kültüründe farklı görünebilir. Global uyum süreci, kişinin geçmiş deneyimini yeni bağlama nasıl taşıyacağını netleştirmesini gerektirir.',
        ],
      },
      {
        heading: 'Dikkat edilmesi gereken noktalar',
        paragraphs: [
          'Yeni çalışma kültürünün yazılı olmayan kurallarını (iletişim tarzı, hiyerarşi algısı, geri bildirim kültürü) gözlemlemek, teknik yetkinlik kadar önemlidir.',
          'Geçmiş deneyimi, yeni bağlamın diliyle yeniden anlatabilmek — bir CV’nin ötesinde, kendini tanıtma biçiminde de geçerlidir.',
          'Uyum sürecini bir "başarısızlık" değil, doğal bir öğrenme eğrisi olarak görmek, sürecin yıpratıcılığını azaltır.',
        ],
      },
      {
        heading: 'Yalnız yürünmesi gerekmeyen bir süreç',
        paragraphs: [
          'Global uyum ve kariyer koçluğu, bu geçişi yaşayan kişilerin hem pratik hem de kimlik düzeyindeki sorularını birlikte ele almasına destek olur. Amaç, süreci hızlandırmak değil; süreci daha bilinçli ve daha az yalnız yürümesini sağlamaktır.',
        ],
      },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug)
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug)
  if (!current) return ARTICLES.slice(0, limit)
  return ARTICLES.filter((a) => a.slug !== slug && a.category === current.category).slice(0, limit)
}
