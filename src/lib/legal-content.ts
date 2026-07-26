import type { Localized, Locale } from './i18n/types'
import { CONTACT_EMAIL, WHATSAPP_DISPLAY } from './contact-channels'

export type LegalSection = {
  heading: Localized<string>
  body?: Localized<string>
  items?: Localized<string[]>
}

export type LegalPageContent = {
  slug: string
  title: Localized<string>
  description: Localized<string>
  eyebrow: Localized<string>
  updatedAt: Localized<string>
  intro: Localized<string>
  sections: LegalSection[]
}

const COMPANY_NAME = 'AURIX Koçluk ve Danışmanlık'

export const LEGAL_PAGES = {
  kvkk: {
    slug: 'kvkk',
    title: {
      tr: 'KVKK Aydınlatma Metni',
      en: 'Privacy Notice under Turkish Data Protection Law',
    },
    description: {
      tr: 'AURIX web sitesi, iletişim ve ön görüşme talepleri kapsamında kişisel verilerin işlenmesine ilişkin aydınlatma metni.',
      en: 'Privacy notice for personal data processed through the AURIX website, contact forms, and introductory call requests.',
    },
    eyebrow: { tr: 'Kişisel Verilerin Korunması', en: 'Personal Data Protection' },
    updatedAt: { tr: 'Son güncelleme: 9 Temmuz 2026', en: 'Last updated: July 9, 2026' },
    intro: {
      tr: `${COMPANY_NAME} olarak kişisel verilerinizi 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili ikincil mevzuata uygun şekilde, ölçülü, sınırlı ve şeffaf biçimde işlemeye özen gösteriyoruz. Bu metin, web sitesi üzerinden bizimle iletişime geçtiğinizde veya ön görüşme talebi oluşturduğunuzda hangi verilerin hangi amaçlarla işlendiğini açıklamak için hazırlanmıştır.`,
      en: `${COMPANY_NAME} processes personal data in accordance with Turkish Law No. 6698 on the Protection of Personal Data and related secondary legislation. This notice explains how personal data is processed when you contact us through the website or request an introductory call.`,
    },
    sections: [
      {
        heading: { tr: '1. Veri Sorumlusu', en: '1. Data Controller' },
        body: {
          tr: `Kişisel verileriniz bakımından veri sorumlusu ${COMPANY_NAME}'dır. KVKK kapsamındaki başvurularınız ve gizlilik talepleriniz için ${CONTACT_EMAIL} adresinden bizimle iletişime geçebilirsiniz.`,
          en: `The data controller for your personal data is ${COMPANY_NAME}. You may contact us at ${CONTACT_EMAIL} for privacy requests and data subject applications.`,
        },
      },
      {
        heading: { tr: '2. İşlenen Kişisel Veriler', en: '2. Personal Data Processed' },
        body: {
          tr: 'Web sitesi üzerinden ilettiğiniz talebin niteliğine göre aşağıdaki veri kategorileri işlenebilir:',
          en: 'Depending on the nature of your request, the following categories of data may be processed:',
        },
        items: {
          tr: [
            'Kimlik ve iletişim bilgileri: ad soyad, e-posta adresi, telefon/WhatsApp bilgisi.',
            'Talep bilgileri: ilgilendiğiniz hizmet alanı, tercih ettiğiniz uzman, görüşme tercihi, mesaj içeriği.',
            'İşlem güvenliği ve teknik bilgiler: IP adresi, cihaz/tarayıcı bilgisi, form gönderim zamanı, güvenlik kayıtları.',
            'Pazarlama kaynak bilgileri: kampanya veya yönlendirme bağlantısından gelmeniz halinde UTM bilgileri.',
          ],
          en: [
            'Identity and contact data: full name, email address, phone/WhatsApp information.',
            'Request data: service area of interest, preferred expert, meeting preference, and message content.',
            'Transaction security and technical data: IP address, device/browser information, submission time, and security logs.',
            'Marketing source data: UTM parameters if you arrive through a campaign or referral link.',
          ],
        },
      },
      {
        heading: { tr: '3. Kişisel Verilerin İşlenme Amaçları', en: '3. Purposes of Processing' },
        items: {
          tr: [
            'İletişim veya ön görüşme talebinizi almak, değerlendirmek ve size geri dönüş yapmak.',
            'İhtiyacınıza uygun hizmet alanı ve uzman eşleşmesini ön değerlendirme düzeyinde yapabilmek.',
            'Randevu, görüşme ve takip süreçlerini yönetmek.',
            'Hizmet kalitesini, site güvenliğini ve kullanıcı deneyimini iyileştirmek.',
            'Yasal yükümlülüklerin yerine getirilmesi, uyuşmazlıkların önlenmesi ve hakların korunması.',
          ],
          en: [
            'Receiving, evaluating, and responding to your contact or introductory call request.',
            'Making an initial assessment of the service area and expert match that may fit your need.',
            'Managing appointment, meeting, and follow-up processes.',
            'Improving service quality, website security, and user experience.',
            'Complying with legal obligations, preventing disputes, and protecting rights.',
          ],
        },
      },
      {
        heading: { tr: '4. Hukuki Sebepler', en: '4. Legal Grounds' },
        body: {
          tr: 'Kişisel verileriniz KVKK madde 5 kapsamında; bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, veri sorumlusunun meşru menfaati, hukuki yükümlülüklerin yerine getirilmesi ve gerekli hallerde açık rızanız hukuki sebeplerine dayanılarak işlenebilir.',
          en: 'Your personal data may be processed based on legal grounds including necessity for establishing or performing a contract, legitimate interest of the data controller, compliance with legal obligations, and, where required, your explicit consent.',
        },
      },
      {
        heading: { tr: '5. Aktarım ve Hizmet Sağlayıcılar', en: '5. Transfers and Service Providers' },
        body: {
          tr: 'Verileriniz; e-posta iletim altyapısı, web sitesi barındırma hizmeti, güvenlik ve teknik bakım hizmetleri gibi sınırlı amaçlarla hizmet aldığımız tedarikçilerle paylaşılabilir. Web sitesi altyapısı için Vercel, form e-postalarının iletilmesi için Resend, alan adı/DNS için Cloudflare, kurumsal e-posta hizmeti için Zoho Mail veya Google Workspace gibi sağlayıcılar kullanılabilir. Yurt dışı kaynaklı hizmet sağlayıcılar kullanılması halinde ilgili mevzuat kapsamındaki aktarım şartlarına uygun hareket edilir.',
          en: 'Your data may be shared with service providers for limited purposes such as email delivery, website hosting, security, and technical maintenance. Providers may include Vercel for website infrastructure, Resend for form email delivery, Cloudflare for domain/DNS, and Zoho Mail or Google Workspace for business email. Where international service providers are used, transfer requirements under applicable law are taken into account.',
        },
      },
      {
        heading: { tr: '6. Saklama Süresi', en: '6. Retention Period' },
        body: {
          tr: 'İletişim ve ön görüşme talepleriniz, talebin sonuçlandırılması ve makul takip sürecinin yürütülmesi için gerekli süre boyunca saklanır. Hukuki yükümlülük veya uyuşmazlık ihtimali bulunan hallerde veriler ilgili zamanaşımı süreleri boyunca saklanabilir. Saklama amacı sona erdiğinde kişisel veriler silinir, yok edilir veya anonim hale getirilir.',
          en: 'Contact and introductory call requests are retained for the period necessary to evaluate and follow up on the request. Where legal obligations or potential disputes exist, data may be retained for applicable limitation periods. When the retention purpose ends, personal data is deleted, destroyed, or anonymized.',
        },
      },
      {
        heading: { tr: '7. İlgili Kişi Hakları', en: '7. Data Subject Rights' },
        body: {
          tr: `KVKK madde 11 kapsamındaki haklarınızı kullanmak için ${CONTACT_EMAIL} adresinden bize başvurabilirsiniz. Başvurunuzun kimliğinizi doğrulayacak bilgileri içermesi gerekir. Talepleriniz mevzuatta öngörülen süreler içinde değerlendirilir.`,
          en: `You may contact us at ${CONTACT_EMAIL} to exercise your rights under Article 11 of Turkish Law No. 6698. Your request should include sufficient information to verify your identity. Requests are evaluated within the periods required by applicable law.`,
        },
      },
    ],
  },
  gizlilik: {
    slug: 'gizlilik-politikasi',
    title: { tr: 'Gizlilik Politikası', en: 'Privacy Policy' },
    description: {
      tr: 'AURIX web sitesinin gizlilik, güvenlik, iletişim ve üçüncü taraf hizmet sağlayıcı kullanımına ilişkin politikası.',
      en: 'Privacy policy for the AURIX website, including confidentiality, security, contact, and third-party service providers.',
    },
    eyebrow: { tr: 'Gizlilik', en: 'Privacy' },
    updatedAt: { tr: 'Son güncelleme: 9 Temmuz 2026', en: 'Last updated: July 9, 2026' },
    intro: {
      tr: 'AURIX web sitesi, ziyaretçilerin ve danışan adaylarının güvenli, saygılı ve şeffaf bir dijital deneyim yaşaması amacıyla tasarlanmıştır. Bu politika, site kullanımı sırasında verilerin nasıl ele alındığını ve iletişim süreçlerinin nasıl yönetildiğini açıklar.',
      en: 'The AURIX website is designed to provide visitors and prospective clients with a secure, respectful, and transparent digital experience. This policy explains how data is handled during website use and communication processes.',
    },
    sections: [
      {
        heading: { tr: '1. Gizlilik Yaklaşımımız', en: '1. Our Privacy Approach' },
        body: {
          tr: 'Koçluk ve danışmanlık hizmetleri kişisel ve kurumsal güvene dayanır. Bu nedenle web sitesi üzerinden paylaşılan bilgiler yalnızca talebin değerlendirilmesi, iletişim kurulması ve hizmet sürecinin planlanması amacıyla kullanılır.',
          en: 'Coaching and consulting services rely on personal and professional trust. Information shared through the website is used only to evaluate requests, communicate with you, and plan service processes.',
        },
      },
      {
        heading: { tr: '2. İletişim Formları ve WhatsApp', en: '2. Contact Forms and WhatsApp' },
        body: {
          tr: `Form gönderdiğinizde bilgileriniz AURIX yetkililerine e-posta olarak iletilir. WhatsApp üzerinden iletişime geçtiğinizde, WhatsApp'ın kendi gizlilik koşulları da geçerli olabilir. WhatsApp hattı: ${WHATSAPP_DISPLAY}.`,
          en: `When you submit a form, your information is emailed to AURIX representatives. If you contact us through WhatsApp, WhatsApp's own privacy terms may also apply. WhatsApp line: ${WHATSAPP_DISPLAY}.`,
        },
      },
      {
        heading: { tr: '3. Üçüncü Taraf Hizmetler', en: '3. Third-Party Services' },
        body: {
          tr: 'Site performansı, güvenliği, alan adı yönetimi, e-posta iletimi ve kurumsal e-posta kullanımı için profesyonel hizmet sağlayıcılardan yararlanılabilir. Bu sağlayıcılar yalnızca hizmetin gerektirdiği ölçüde veri işler.',
          en: 'Professional service providers may be used for site performance, security, domain management, email delivery, and business email. These providers process data only to the extent required for their services.',
        },
      },
      {
        heading: { tr: '4. Güvenlik', en: '4. Security' },
        body: {
          tr: 'Web sitesi HTTPS üzerinden yayınlanır. Form verilerinin yalnızca yetkili kişilerce görülmesi, gereksiz veri toplanmaması ve teknik erişimlerin sınırlı tutulması esastır.',
          en: 'The website is served over HTTPS. Form data is intended to be accessible only by authorized persons; unnecessary data collection is avoided and technical access is limited.',
        },
      },
      {
        heading: { tr: '5. Politika Değişiklikleri', en: '5. Policy Changes' },
        body: {
          tr: 'Bu politika, hizmet kapsamı, kullanılan teknik altyapı veya mevzuat değişikliklerine göre güncellenebilir. Güncel versiyon her zaman bu sayfada yayımlanır.',
          en: 'This policy may be updated due to changes in services, technical infrastructure, or legislation. The current version is always published on this page.',
        },
      },
    ],
  },
  cerez: {
    slug: 'cerez-politikasi',
    title: { tr: 'Çerez Politikası', en: 'Cookie Policy' },
    description: {
      tr: 'AURIX web sitesinde kullanılan zorunlu ve isteğe bağlı çerezlere ilişkin bilgilendirme.',
      en: 'Information about strictly necessary and optional cookies used on the AURIX website.',
    },
    eyebrow: { tr: 'Çerezler', en: 'Cookies' },
    updatedAt: { tr: 'Son güncelleme: 9 Temmuz 2026', en: 'Last updated: July 9, 2026' },
    intro: {
      tr: 'Bu çerez politikası, AURIX web sitesinde çerez ve benzeri teknolojilerin hangi amaçlarla kullanılabileceğini açıklar. Mevcut yapıda site deneyimi için zorunlu teknik çerezler dışında pazarlama veya reklam amaçlı çerez kullanımı hedeflenmemektedir.',
      en: 'This cookie policy explains how cookies and similar technologies may be used on the AURIX website. In the current setup, the site does not aim to use marketing or advertising cookies beyond strictly necessary technical cookies.',
    },
    sections: [
      {
        heading: { tr: '1. Çerez Nedir?', en: '1. What Are Cookies?' },
        body: {
          tr: 'Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilebilen küçük metin dosyalarıdır. Site güvenliği, oturum yönetimi, tercihlerin hatırlanması veya ölçümleme gibi amaçlarla kullanılabilir.',
          en: 'Cookies are small text files that may be stored on your device through your browser when you visit a website. They may be used for security, session management, remembering preferences, or analytics.',
        },
      },
      {
        heading: { tr: '2. Kullanılan Çerez Türleri', en: '2. Types of Cookies Used' },
        items: {
          tr: [
            'Zorunlu çerezler: Sitenin güvenli ve düzgün çalışması için gerekli teknik çerezlerdir.',
            'Tercih çerezleri: Dil veya kullanıcı tercihlerinin hatırlanması için kullanılabilir.',
            'Analitik çerezler: İleride site performansını ölçmek için kullanılmak istenirse ayrıca değerlendirilir.',
            'Pazarlama çerezleri: Mevcut başlangıç yapısında reklam veya yeniden hedefleme çerezi kullanılmaması önerilir.',
          ],
          en: [
            'Strictly necessary cookies: technical cookies required for secure and proper operation of the site.',
            'Preference cookies: may be used to remember language or user preferences.',
            'Analytics cookies: may be considered separately if performance measurement is introduced later.',
            'Marketing cookies: advertising or retargeting cookies are not recommended in the initial setup.',
          ],
        },
      },
      {
        heading: { tr: '3. Açık Rıza Gerektiren Çerezler', en: '3. Cookies Requiring Consent' },
        body: {
          tr: 'Zorunlu olmayan analitik, pazarlama veya reklam çerezleri kullanılmaya başlanırsa kullanıcıdan çerez tercihini yönetebileceği ayrı bir onay mekanizması alınmalıdır. Bu tür çerezler kullanıcı onayı olmadan etkinleştirilmemelidir.',
          en: 'If non-essential analytics, marketing, or advertising cookies are introduced, a separate consent mechanism should allow users to manage their cookie preferences. Such cookies should not be activated without user consent.',
        },
      },
      {
        heading: { tr: '4. Çerezleri Yönetme', en: '4. Managing Cookies' },
        body: {
          tr: 'Tarayıcı ayarlarınız üzerinden çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi halinde sitenin bazı bölümleri beklendiği gibi çalışmayabilir.',
          en: 'You can delete or block cookies through your browser settings. Blocking strictly necessary cookies may prevent some parts of the site from working as expected.',
        },
      },
      {
        heading: { tr: '5. İletişim', en: '5. Contact' },
        body: {
          tr: `Çerez politikası veya kişisel verilerinizle ilgili sorularınız için ${CONTACT_EMAIL} adresinden bizimle iletişime geçebilirsiniz.`,
          en: `For questions about this cookie policy or your personal data, you may contact us at ${CONTACT_EMAIL}.`,
        },
      },
    ],
  },
  etik: {
    slug: 'etik-ilkeler',
    title: { tr: 'Etik İlkeler', en: 'Code of Ethics' },
    description: {
      tr: 'AURIX’in koçluk ve danışmanlık süreçlerinde uyguladığı temel değerler ile etik ve profesyonel sınırlar.',
      en: 'The core values and the ethical and professional boundaries AURIX applies across its coaching and consulting processes.',
    },
    eyebrow: { tr: 'Etik ve Değerler', en: 'Ethics and Values' },
    updatedAt: { tr: 'Son güncelleme: 26 Temmuz 2026', en: 'Last updated: July 26, 2026' },
    intro: {
      tr: 'AURIX’te koçluk ve danışmanlık süreçleri, aşağıdaki temel değerler ve etik, profesyonel sınırlar çerçevesinde yürütülür. Bu ilkeler, danışanlarımıza ve kurumsal paydaşlarımıza karşı taşıdığımız sorumluluğun temelini oluşturur.',
      en: 'AURIX’s coaching and consulting processes are carried out within the framework of the core values and the ethical, professional boundaries below. These principles form the basis of the responsibility we carry toward our clients and institutional stakeholders.',
    },
    sections: [
      {
        heading: { tr: '1. AURIX Değerleri', en: '1. AURIX Values' },
        items: {
          tr: [
            'Netlik: Her sürecin başlangıcında danışanın gerçek ihtiyacını ve hedefini anlamaya odaklanırız.',
            'Güven: Koçluk ve danışmanlık sürecinde açıklık, gizlilik ve etik sınırlar bizim için temel ilkedir.',
            'Uygun Eşleşme: Her danışanı aynı hizmete yönlendirmek yerine, ihtiyacına en uygun uzman ve süreçle buluştururuz.',
            'Sürdürülebilir Gelişim: Kısa süreli motivasyon yerine, uygulanabilir ve sürdürülebilir gelişim adımlarına odaklanırız.',
            'Çok Disiplinli Bakış: Farklı mesleki deneyimleri tek bir gelişim çatısı altında birleştiririz.',
          ],
          en: [
            'Clarity: At the start of every process, we focus on understanding the client’s real need and goal.',
            'Trust: Openness, confidentiality, and ethical boundaries are fundamental to our coaching and consulting process.',
            'The Right Match: Instead of directing every client to the same service, we connect each one with the expert and process best suited to their need.',
            'Sustainable Growth: Rather than short-lived motivation, we focus on actionable and sustainable steps for growth.',
            'A Multidisciplinary View: We bring different professional experiences together under a single framework for growth.',
          ],
        },
      },
      {
        heading: { tr: '2. Etik ve Profesyonel Sınırlar', en: '2. Ethical and Professional Boundaries' },
        body: {
          tr: 'AURIX’te koçluk ve danışmanlık süreçleri; bireyin veya kurumun gelişim hedeflerine eşlik eden profesyonel süreçlerdir. Bu süreçler psikoterapi, tıbbi tedavi veya klinik müdahalenin yerine geçmez. Danışanın ihtiyacının farklı bir uzmanlık alanına yönlendirme gerektirdiği durumlarda, bu sınırlar açık ve sorumlu biçimde gözetilir. Gizlilik, açıklık ve profesyonel sorumluluk AURIX yaklaşımının ayrılmaz parçalarıdır.',
          en: 'At AURIX, coaching and consulting processes are professional processes that accompany the growth goals of an individual or organization. These processes do not replace psychotherapy, medical treatment, or clinical intervention. Where a client’s need calls for referral to a different area of expertise, these boundaries are observed openly and responsibly. Confidentiality, openness, and professional accountability are inseparable parts of the AURIX approach.',
        },
      },
    ],
  },
} satisfies Record<string, LegalPageContent>

export function getLegalPath(key: keyof typeof LEGAL_PAGES, locale: Locale): string {
  const path = `/${LEGAL_PAGES[key].slug}`
  return locale === 'en' ? `/en${path}` : path
}
