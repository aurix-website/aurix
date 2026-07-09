import type { Localized } from './i18n/types'

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
  title: Localized<string>
  excerpt: Localized<string>
  category: ArticleCategory
  isCornerstone: boolean
  publishedDate: string
  body: Localized<ArticleSection[]>
  seoTitle: Localized<string>
  seoDescription: Localized<string>
}

export const CATEGORY_LABELS: Record<ArticleCategory, Localized<string>> = {
  'bireysel-kocluk-kariyer': { tr: 'Kariyer', en: 'Career' },
  'liderlik-yonetici': { tr: 'Liderlik', en: 'Leadership' },
  'kurumsal-takim': { tr: 'Kurumsal', en: 'Corporate' },
  'gencler-kuresel': { tr: 'Gençler', en: 'Youth' },
}

export const ARTICLES: Article[] = [
  {
    slug: 'kocluk-nedir-danismanlik-terapiden-farki',
    title: {
      tr: 'Koçluk nedir, danışmanlık ve terapiden nasıl ayrılır?',
      en: 'What is coaching, and how does it differ from consulting and therapy?',
    },
    excerpt: {
      tr: 'Koçluk, danışmanlık ve terapi sık sık birbirinin yerine kullanılır. Oysa üçü farklı ihtiyaçlara, farklı yöntemlerle cevap verir.',
      en: 'Coaching, consulting, and therapy are often used interchangeably. Yet each responds to a different need, with a different method.',
    },
    category: 'bireysel-kocluk-kariyer',
    isCornerstone: true,
    publishedDate: '2026-01-12',
    seoTitle: {
      tr: 'Koçluk nedir, danışmanlık ve terapiden nasıl ayrılır?',
      en: 'What is coaching, and how does it differ from consulting and therapy?',
    },
    seoDescription: {
      tr: 'Koçluk, danışmanlık ve terapi arasındaki farkı; kapsam, yöntem ve amaç üzerinden açıklayan bir rehber.',
      en: 'A guide explaining the difference between coaching, consulting, and therapy in terms of scope, method, and purpose.',
    },
    body: {
      tr: [
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
      en: [
        {
          paragraphs: [
            'In everyday language, coaching, consulting, and therapy are often used interchangeably. But these three fields answer different questions, with different methods. The confusion makes it unclear which kind of support is right, and when.',
          ],
        },
        {
          heading: 'Therapy: centered on the past and on healing',
          paragraphs: [
            'Therapy is a clinical process carried out by a licensed mental health professional. Its purpose is to support healing within a diagnostic framework. Therapy generally focuses on the past, emotional patterns, and psychological wellbeing.',
          ],
        },
        {
          heading: 'Consulting: offers solutions through specialist knowledge',
          paragraphs: [
            'Consulting is when someone with expertise in a specific area proposes a solution to a concrete problem using technical knowledge. A consultant most often answers the question "what should you do" directly.',
          ],
        },
        {
          heading: 'Coaching: centered on the future and on taking action',
          paragraphs: [
            'Coaching, by contrast, is not a clinical intervention. Its purpose is to accompany a person toward a clearer view of their own goals, priorities, and areas of decision. Rather than giving ready-made answers, a coach asks the right questions and creates space for the client to find their own answer.',
            'A coaching process is oriented toward the future, toward goals, and toward actionable steps. A coach does not decide on the client’s behalf; they strengthen the clarity behind the decision.',
          ],
        },
        {
          heading: 'Which support is right, and when?',
          paragraphs: [
            'If someone is experiencing a clinical-level difficulty (intense anxiety, depressive symptoms, post-traumatic processes, and the like), therapy is the right place to start. If there is a concrete, technical question requiring expertise (legal, financial, career strategy, and so on), consulting is more appropriate. If the person is already functioning well but wants to clarify their goals, make a decision, or use their potential more consciously, coaching is the right tool.',
            'At AURIX, coaching and consulting processes do not replace psychotherapy, medical treatment, or clinical intervention. When a need calls for a different area of expertise, these boundaries are observed openly and responsibly.',
          ],
        },
      ],
    },
  },

  {
    slug: 'yonetici-koclugu-hangi-durumlarda-ise-yarar',
    title: {
      tr: 'Yönetici koçluğu hangi durumlarda gerçekten işe yarar?',
      en: 'When does executive coaching actually make a difference?',
    },
    excerpt: {
      tr: 'Yönetici koçluğu her sorunun çözümü değildir. İşe yaradığı durumlar kadar, uygun olmadığı durumları bilmek de önemlidir.',
      en: 'Executive coaching is not a solution to every problem. Knowing where it doesn’t fit matters as much as knowing where it works.',
    },
    category: 'liderlik-yonetici',
    isCornerstone: true,
    publishedDate: '2026-02-03',
    seoTitle: {
      tr: 'Yönetici koçluğu hangi durumlarda gerçekten işe yarar?',
      en: 'When does executive coaching actually make a difference?',
    },
    seoDescription: {
      tr: 'Yönetici koçluğunun gerçekten fark yarattığı durumlar ve doğru araç olmadığı durumlar üzerine bir değerlendirme.',
      en: 'An assessment of when executive coaching genuinely makes a difference, and when it is not the right tool.',
    },
    body: {
      tr: [
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
      en: [
        {
          paragraphs: [
            'Executive coaching has become more widespread in recent years — but that popularity doesn’t mean every leadership problem can be solved through coaching. Clarifying where coaching genuinely helps ensures the investment goes to the right place.',
          ],
        },
        {
          heading: 'Where it works',
          paragraphs: [
            'Transitioning into a new leadership role: When a manager first begins leading a team, or takes on greater responsibility, coaching accelerates the behavioral shift the new role requires.',
            'Decision fatigue: Leaders working at a demanding pace can lose clarity in prioritizing and deciding. Coaching restores that clarity.',
            'Communication issues within a team: For leaders who struggle to give feedback or to build trust with their team, coaching makes communication patterns visible.',
            'Periods of change: For managers wanting to preserve their leadership impact during restructuring, growth, or a crisis, coaching offers structured support.',
          ],
        },
        {
          heading: 'Where it doesn’t work, or isn’t enough',
          paragraphs: [
            'Coaching does not substitute for a missing technical competency (financial analysis or legal knowledge, for instance); training or consulting is the right address there.',
            'Structural or process problems within an organization (unclear roles, conflicting goals) should be addressed at the organizational level, not through individual coaching.',
            'If a person is not genuinely open to change, the coaching process becomes a forced exercise and does not produce the expected impact.',
          ],
        },
        {
          heading: 'Why timing matters',
          paragraphs: [
            'The impact of executive coaching emerges when it begins with the right need, at the right time. That is why, at AURIX, the process begins by understanding whether the need is genuinely met by coaching — or by a different kind of support — before referring anyone directly into a coaching program.',
          ],
        },
      ],
    },
  },

  {
    slug: 'gencler-icin-kariyer-farkindaligi',
    title: {
      tr: 'Gençler için kariyer farkındalığı: bölüm seçiminden önce sorular',
      en: 'Career awareness for young people: questions before choosing a major',
    },
    excerpt: {
      tr: 'Üniversite bölümü seçimi, çoğu zaman aile beklentisi veya puan sınırıyla belirlenir. Oysa birkaç doğru soru, kararı daha bilinçli hale getirir.',
      en: 'Choosing a university major is often shaped by family expectations or exam-score cutoffs. A few well-chosen questions can make the decision far more conscious.',
    },
    category: 'gencler-kuresel',
    isCornerstone: true,
    publishedDate: '2026-02-20',
    seoTitle: {
      tr: 'Gençler için kariyer farkındalığı: bölüm seçiminden önce sorular',
      en: 'Career awareness for young people: questions before choosing a major',
    },
    seoDescription: {
      tr: 'Üniversite ve bölüm seçimi öncesinde gençlerin kendilerine sorması gereken sorular üzerine bir kariyer farkındalığı rehberi.',
      en: 'A career-awareness guide to the questions young people should ask themselves before choosing a university and a major.',
    },
    body: {
      tr: [
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
      en: [
        {
          paragraphs: [
            'Choosing a major is usually shaped by an exam score, family expectations, or the perception of a "good profession." These factors can’t be ignored entirely, but on their own they don’t form sufficient ground for a decision. Career awareness is about carrying the decision beyond these three factors.',
          ],
        },
        {
          heading: 'Questions to ask yourself',
          paragraphs: [
            'What do I notice myself spending time on without anyone pushing me to? Interest is often a clue that arrives before obligation does.',
            'What kind of problems do I enjoy solving — numerical, verbal, visual, or interpersonal?',
            'If I choose this major, what does my daily life look like after graduation? Picturing a concrete day tells you more than an abstract job title does.',
            'Who am I making this decision for — myself, or to meet someone else’s expectation?',
          ],
        },
        {
          heading: 'A question of direction, not of score',
          paragraphs: [
            'The question "which major does my score qualify me for?" produces a different decision than "is this field right for me?" Career-awareness work focuses on helping a young person clarify their direction before their score.',
          ],
        },
        {
          heading: 'A wrong choice is not an irreversible mistake',
          paragraphs: [
            'Choosing a major matters, but it is not an irreversible decision. Career paths are rarely linear. This awareness helps a young person carry the pressure of the decision in a healthier way.',
            'At AURIX, student coaching does not hand over a ready-made choice of major; it accompanies the young person toward seeing their own interests, strengths, and priorities.',
          ],
        },
      ],
    },
  },

  {
    slug: 'kariyer-gecislerinde-zihinsel-netlik',
    title: {
      tr: 'Kariyer geçişlerinde zihinsel netlik: yeni rol, yeni ülke, yeni kimlik',
      en: 'Mental clarity in career transitions: new role, new country, new identity',
    },
    excerpt: {
      tr: 'Yeni bir rol, yeni bir ülke veya yeni bir kimlik — her kariyer geçişi, benzer bir zihinsel netlik ihtiyacı doğurur.',
      en: 'A new role, a new country, or a new identity — every career transition creates a similar need for mental clarity.',
    },
    category: 'bireysel-kocluk-kariyer',
    isCornerstone: true,
    publishedDate: '2026-03-08',
    seoTitle: {
      tr: 'Kariyer geçişlerinde zihinsel netlik: yeni rol, yeni ülke, yeni kimlik',
      en: 'Mental clarity in career transitions: new role, new country, new identity',
    },
    seoDescription: {
      tr: 'Kariyer geçişlerinde ortaya çıkan belirsizlik ve zihinsel netlik ihtiyacı üzerine bir değerlendirme.',
      en: 'An assessment of the uncertainty that arises during career transitions, and the resulting need for mental clarity.',
    },
    body: {
      tr: [
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
      en: [
        {
          paragraphs: [
            'Being promoted into a new role, starting at a new company, moving to a new country, or switching to an entirely different field — these situations look different on the surface, but they share a common thread: each creates a temporary period of uncertainty and a need for mental clarity.',
          ],
        },
        {
          heading: 'The shared structure of transitions',
          paragraphs: [
            'In every transition, three things change at once: role (what we do), context (where and with whom we work), and identity (how we define ourselves). When these three shift together, a person can experience a temporary sense of disorientation. That is not a deficiency — it is a natural part of the transition process.',
          ],
        },
        {
          heading: 'Why mental clarity becomes harder',
          paragraphs: [
            'During a transition, a person carries both their old reference points and their new expectations at the same time. This temporarily strains their capacity to decide. A loss of clarity is most often not a sign of inadequacy, but a result of processing too much information at once.',
          ],
        },
        {
          heading: 'Building blocks for regaining clarity',
          paragraphs: [
            'Naming what stays the same: Even when the role, country, or context changes, a person’s values and strengths generally remain constant. Making these visible strengthens a sense of ground.',
            'Making new expectations concrete: Seeking a concrete answer to "what does success look like in this new role/country/life?" reduces abstract anxiety.',
            'Moving forward in small, actionable steps: Rather than trying to resolve the entire transition at once, focusing on the next step supports sustainable progress.',
          ],
        },
        {
          heading: 'The right time to seek support',
          paragraphs: [
            'Career coaching accompanies a person, within a structured framework, in rebuilding their own clarity during these kinds of transitions. The goal is not to speed up the transition, but to make it more conscious and less wearing.',
          ],
        },
      ],
    },
  },

  {
    slug: 'takim-koclugu-egitim-farki',
    title: {
      tr: 'Takım koçluğu ile eğitim arasındaki fark nedir?',
      en: 'What is the difference between team coaching and training?',
    },
    excerpt: {
      tr: 'Bir ekibe bilgi aktarmak ile o ekibin birlikte çalışma biçimini değiştirmek aynı şey değildir. Bu, takım koçluğu ile eğitim arasındaki temel farktır.',
      en: 'Transferring knowledge to a team and changing how that team works together are not the same thing. That is the core difference between team coaching and training.',
    },
    category: 'kurumsal-takim',
    isCornerstone: true,
    publishedDate: '2026-03-24',
    seoTitle: {
      tr: 'Takım koçluğu ile eğitim arasındaki fark nedir?',
      en: 'What is the difference between team coaching and training?',
    },
    seoDescription: {
      tr: 'Kurumsal eğitim ile takım koçluğu arasındaki farkı; amaç, yöntem ve beklenen çıktı üzerinden ele alan bir rehber.',
      en: 'A guide to the difference between corporate training and team coaching, in terms of purpose, method, and expected outcome.',
    },
    body: {
      tr: [
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
      en: [
        {
          paragraphs: [
            'Organizations usually start from a need to "do something with our team." But whether that need is met through training or through team coaching directly shapes the outcome to expect.',
          ],
        },
        {
          heading: 'Training: transferring knowledge and skill',
          paragraphs: [
            'Training aims to transfer knowledge or skill on a specific topic. The content is designed in advance, and participants are generally in a receiving position. The success of training is measured by whether the knowledge was transferred correctly.',
          ],
        },
        {
          heading: 'Team coaching: addresses how a team works together',
          paragraphs: [
            'Team coaching, by contrast, is less about transferring knowledge and more about helping a team notice and develop its own dynamics — communication patterns, level of trust, alignment around a shared goal, and how responsibility is shared. The process creates space for the team to produce its own answers rather than offering ready-made content.',
          ],
        },
        {
          heading: 'Which need calls for which approach?',
          paragraphs: [
            'If a team needs to learn a specific skill (a new tool, a methodology, a process), the right tool is training.',
            'If a team is technically competent but experiencing friction, a lack of trust, or misalignment in how they work together, the right tool is team coaching.',
            'Often the two complement each other: training first establishes a shared language, and team coaching then supports that language showing up in real working practice.',
          ],
        },
        {
          heading: 'The cost of confusing the two',
          paragraphs: [
            'Trying to resolve a trust problem through training, or trying to close a skill gap through team coaching, means the investment is spent in the wrong place. That is why, at AURIX, the corporate process begins by clarifying which category the need actually belongs to.',
          ],
        },
      ],
    },
  },

  {
    slug: 'kurumsal-egitimde-kalici-etki',
    title: {
      tr: 'Kurumsal eğitimlerde kalıcı etki nasıl oluşturulur?',
      en: 'How do corporate training programs create lasting impact?',
    },
    excerpt: {
      tr: 'Bir eğitim günü iyi geçebilir; ama asıl soru, o günün ekibin gerçek çalışma biçimine ne kadar yansıdığıdır.',
      en: 'A training day can go well — but the real question is how much of it carries over into the team’s actual way of working.',
    },
    category: 'kurumsal-takim',
    isCornerstone: true,
    publishedDate: '2026-04-14',
    seoTitle: {
      tr: 'Kurumsal eğitimlerde kalıcı etki nasıl oluşturulur?',
      en: 'How do corporate training programs create lasting impact?',
    },
    seoDescription: {
      tr: 'Kurumsal eğitimlerin tek seferlik bir bilgi aktarımından öteye geçip kalıcı davranış değişikliği yaratması için gereken unsurlar.',
      en: 'What corporate training needs in order to go beyond a one-off knowledge transfer and create lasting behavioral change.',
    },
    body: {
      tr: [
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
      en: [
        {
          paragraphs: [
            'A training day with high participant satisfaction does not always mean lasting impact. If nothing has changed a few weeks after the training, then even a well-received session has delivered a limited return on the organization’s investment.',
          ],
        },
        {
          heading: 'Common mistakes that prevent lasting impact',
          paragraphs: [
            'Applying ready-made content directly, without a needs analysis.',
            'Designing training as a one-off event, with no follow-up or reinforcement step.',
            'Delivering content through generic examples disconnected from participants’ actual work context.',
          ],
        },
        {
          heading: 'What lasting impact requires',
          paragraphs: [
            'Need first, then content: A training program should be designed only after analyzing the organization’s current structure and target audience.',
            'Actionable frameworks: By the end of the training, participants should have a concrete answer to "what will I do when I’m back at work tomorrow?"',
            'Follow-up and reinforcement: Rather than a single session, short reinforcement sessions planned a few weeks apart help what was learned settle into daily working practice.',
            'Leadership support: If what was learned in training isn’t also adopted by managers and reflected in everyday working language, the impact fades quickly.',
          ],
        },
        {
          heading: 'Lasting impact cannot be claimed without measurement',
          paragraphs: [
            'Whether a training program creates lasting impact is understood not through participant surveys, but through behavioral and process changes observed months later. That is why, at AURIX, the corporate training process includes an evaluation and follow-up step alongside program design.',
          ],
        },
      ],
    },
  },

  {
    slug: 'ogrenci-koclugu-sinav-basarisindan-fazlasi',
    title: {
      tr: 'Öğrenci koçluğu sınav başarısından daha fazlasıdır',
      en: 'Student coaching is more than exam success',
    },
    excerpt: {
      tr: 'Öğrenci koçluğu yalnızca sınav stratejisiyle sınırlı değildir; hedef belirleme, motivasyon ve zaman yönetimi aynı sürecin parçasıdır.',
      en: 'Student coaching is not limited to exam strategy; goal-setting, motivation, and time management are all part of the same process.',
    },
    category: 'gencler-kuresel',
    isCornerstone: true,
    publishedDate: '2026-05-05',
    seoTitle: {
      tr: 'Öğrenci koçluğu sınav başarısından daha fazlasıdır',
      en: 'Student coaching is more than exam success',
    },
    seoDescription: {
      tr: 'Öğrenci koçluğunun sınav stratejisinin ötesinde hedef belirleme, motivasyon ve zaman yönetimini nasıl kapsadığı üzerine bir yazı.',
      en: 'An article on how student coaching goes beyond exam strategy to cover goal-setting, motivation, and time management.',
    },
    body: {
      tr: [
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
      en: [
        {
          paragraphs: [
            'Exam strategy is usually the first thing that comes to mind with student coaching. Yet the exam is only the visible part of a much broader process. The real work is about a student recognizing their own goal, source of motivation, and study routine.',
          ],
        },
        {
          heading: 'Beyond exam strategy',
          paragraphs: [
            'Even if a student knows the right study techniques, those techniques won’t produce the expected result if the goal is unclear, motivation is inconsistent, or the student doesn’t know how to manage their time. Student coaching addresses these three areas before exam strategy.',
          ],
        },
        {
          heading: 'Setting goals',
          paragraphs: [
            'Having a general goal like "getting good grades" is not enough for a student to take action. The goal needs to be made concrete and meaningful, in the student’s own words.',
          ],
        },
        {
          heading: 'Motivation: from within, not from outside',
          paragraphs: [
            'Pressure from family or teachers can create short-term motivation, but it isn’t sustainable. Student coaching creates space for the student to recognize their own reasons — why they’re studying, what they actually care about.',
          ],
        },
        {
          heading: 'Time management and study routine',
          paragraphs: [
            'Building a sustainable balance between classes, exam preparation, social life, and rest is a skill in its own right, and it usually isn’t taught explicitly by anyone. Student coaching addresses this balance in a structured way.',
            'Once these three areas — goal, motivation, time management — are working together, exam strategy already rests on much firmer ground.',
          ],
        },
      ],
    },
  },

  {
    slug: 'yurtdisinda-yeni-kariyer-global-uyum',
    title: {
      tr: 'Yurtdışında yeni bir kariyer: global uyum sürecinde nelere dikkat edilir?',
      en: 'A new career abroad: what to pay attention to during global adaptation',
    },
    excerpt: {
      tr: 'Yeni bir ülkede kariyer kurmak, yalnızca dil veya belge meselesi değildir. Kimlik ve profesyonel özgüven de aynı süreçte yeniden şekillenir.',
      en: 'Building a career in a new country is not just a matter of language or paperwork. Identity and professional confidence are reshaped in the same process.',
    },
    category: 'gencler-kuresel',
    isCornerstone: true,
    publishedDate: '2026-06-02',
    seoTitle: {
      tr: 'Yurtdışında yeni bir kariyer: global uyum sürecinde nelere dikkat edilir?',
      en: 'A new career abroad: what to pay attention to during global adaptation',
    },
    seoDescription: {
      tr: 'Yurtdışına taşınan profesyoneller için kariyer ve kimlik açısından global uyum sürecinde dikkat edilmesi gereken noktalar.',
      en: 'What professionals moving abroad should pay attention to, in terms of career and identity, during global adaptation.',
    },
    body: {
      tr: [
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
      en: [
        {
          paragraphs: [
            'For a professional moving to a new country, the most visible challenges concern language, residence permits, or finding a job. But beneath these visible challenges lies a less-discussed layer: the reshaping of identity and professional confidence.',
          ],
        },
        {
          heading: 'A feeling of lost status',
          paragraphs: [
            'A professional who was experienced and recognized in their previous country may find themselves having to rebuild credibility from scratch in the new one. This is not a genuine loss of competence — but it can feel like one. Naming this feeling is the first step in working with it.',
          ],
        },
        {
          heading: 'Redefining a career identity',
          paragraphs: [
            'The answer to "who am I, what do I do" can look different within a new working culture. The global adaptation process requires clarifying how to carry past experience into the new context.',
          ],
        },
        {
          heading: 'Points worth paying attention to',
          paragraphs: [
            'Observing the unwritten rules of the new working culture — communication style, sense of hierarchy, feedback culture — matters as much as technical competence.',
            'Being able to retell past experience in the language of the new context — this applies beyond a CV, to how one introduces themselves as well.',
            'Seeing the adaptation process as a natural learning curve rather than a "failure" reduces how wearing the process feels.',
          ],
        },
        {
          heading: 'A process no one has to walk alone',
          paragraphs: [
            'Global adaptation and career coaching supports people going through this transition in addressing both the practical and identity-level questions together. The goal is not to speed up the process, but to make it more conscious, and less solitary.',
          ],
        },
      ],
    },
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
