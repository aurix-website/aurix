import type { Locale } from './types'

/**
 * Chrome / shared UI copy (nav, footer, common CTAs, homepage sections that
 * don't come from a src/lib/*-data.ts file). Page-specific long-form content
 * lives next to each page instead of growing this file unboundedly.
 */
export const dictionary = {
  tr: {
    nav: {
      services: 'Hizmetler',
      experts: 'Uzmanlar',
      about: 'Hakkımızda',
      journal: 'Journal',
      faq: 'SSS',
      contact: 'İletişim',
      requestCall: 'Ön Görüşme Talep Et',
      whatsapp: 'WhatsApp',
      whatsappWrite: 'WhatsApp ile Yaz',
      menuOpen: 'Menüyü aç',
      menuClose: 'Menüyü kapat',
      homeAria: 'AURIX — Ana sayfaya git',
      tagline: 'Koçluk & Danışmanlık',
      mainNavAria: 'Ana navigasyon',
      mobileMenuAria: 'Mobil navigasyon menüsü',
      mobileNavAria: 'Mobil navigasyon',
    },
    footer: {
      ariaLabel: 'Site alt bilgisi',
      tagline:
        'Profesyonel gelişim, kariyer netliği ve liderlik dönüşümü için çok uzmanlı danışmanlık ekosistemi.',
      locationLine: 'İzmir · Online · Yüz yüze',
      contactHeading: 'İletişim',
      socialHeading: 'Sosyal',
      copyright: 'AURIX Danışmanlık. Tüm hakları saklıdır.',
      kvkk: 'KVKK Aydınlatma Metni',
      privacy: 'Gizlilik Politikası',
      cookies: 'Çerez Politikası',
      legalNavAria: 'Yasal metinler',
      socialFallbackLabel: 'Sosyal medya',
      homeAria: 'AURIX — Ana sayfaya git',
    },
    common: {
      exploreServices: 'Hizmetleri İncele',
      requestCall: 'Ön Görüşme Talep Et',
      messageWhatsapp: 'WhatsApp ile Yaz',
      viewAll: 'Tümünü gör',
      viewDetails: 'Detayları Gör',
      explore: 'İncele',
      close: 'Kapat',
      whatsappFloatingAria: 'WhatsApp üzerinden AURIX ile iletişime geç',
    },
    hero: {
      eyebrow: 'Koçluk · Kariyer · Liderlik',
      heading:
        'Daha net kararlar, güçlü yönelimler ve sürdürülebilir gelişim için profesyonel koçluk ve danışmanlık.',
      body: 'AURIX, Kaan Yazıcı liderliğinde; bireysel gelişim, yönetici koçluğu, kurumsal eğitim ve öğrenci koçluğu alanlarında uzman kadrosuyla yapılandırılmış gelişim süreçleri sunar.',
      subBody: 'Her danışan için doğru hizmeti, doğru uzmanı ve doğru süreci birlikte belirliyoruz.',
      ariaLabel: 'Anasayfa başlığı',
      accordionAriaLabel: 'Hizmet görseli galerisi',
      accordionPanels: ['Bireysel Koçluk', 'Liderlik', 'Kurumsal', 'Gençler', 'Global Uyum'],
      stats: [
        { value: 200, suffix: '+', label: 'Saat Koçluk', duration: 1800 },
        { value: 7, suffix: '', label: 'Uzman', duration: 800 },
        { value: 100, suffix: '%', label: 'Erickson Sertifikalı', duration: 1400 },
      ],
    },
    manifesto: {
      eyebrow: 'AURIX Felsefesi',
      headingPrefix: 'AURIX, gelişim yolculuğunuzu',
      headingAccent: 'tesadüfe bırakmaz.',
      body: 'Koçluk ve danışmanlık sürecini yalnızca bir görüşme deneyimi olarak değil; ihtiyaç analizi, uzman eşleşmesi, hedef netliği ve sürdürülebilir aksiyon adımlarından oluşan yapılandırılmış bir gelişim süreci olarak ele alır.',
      cta: 'AURIX Yaklaşımını İncele',
      imageAlt: 'AURIX yaklaşımını temsil eden yön ve netlik odaklı masa kompozisyonu',
      promiseCards: [
        {
          title: 'Netlik',
          description: 'Hedeflerinizi, önceliklerinizi ve mevcut durumunuzu daha berrak görmenize yardımcı oluruz.',
        },
        {
          title: 'Yön',
          description: 'Size uygun hizmet alanını ve uzmanı belirleyerek süreci daha doğru bir başlangıçla tasarlarız.',
        },
        {
          title: 'Gelişim',
          description:
            'Görüşmeleri yalnızca farkındalıkla sınırlı bırakmadan, uygulanabilir adımlara dönüştürmeye odaklanırız.',
        },
      ],
    },
    trustBand: {
      ariaLabel: 'Uzman kadro',
      heading: 'Farklı disiplinlerden uzmanlar, ortak bir yaklaşım çerçevesinde çalışır.',
      areasAriaLabel: 'Uzmanlık alanları',
      pillars: [
        'Eğitim ve öğrenme psikolojisi',
        'İnsan kaynakları ve organizasyon',
        'Uluslararası kariyer geçişi',
        'Kurumsal liderlik gelişimi',
      ],
    },
    persona: {
      eyebrow: 'KİMLER İÇİN',
      heading: 'Kimler İçin?',
      body: 'AURIX, farklı gelişim ihtiyaçlarına göre yapılandırılmış bir ekip sunar.',
      ariaLabel: 'Hedef kitleler',
      items: [
        {
          id: 'profesyonel',
          title: 'Profesyonel Birey',
          description: 'Kariyer geçişlerinde, hedef belirsizliğinde veya yeni bir role hazırlanırken.',
        },
        {
          id: 'lider',
          title: 'Lider ve Yönetici',
          description: 'Karar süreçlerini güçlendirmek, iletişimi ve ekip performansını geliştirmek için.',
        },
        {
          id: 'kurum',
          title: 'Kurum ve İnsan Kaynakları',
          description: 'Takım koçluğu, kurumsal eğitim programları ve liderlik akademisi tasarımı.',
        },
        {
          id: 'genç',
          title: 'Genç, Öğrenci ve Veli',
          description: 'Kariyer farkındalığı, üniversite ve bölüm seçimi, sınav stratejisi.',
        },
        {
          id: 'yurtdisi',
          title: 'Yurtdışı Geçiş Yapan Birey',
          description: 'Küresel kariyer uyumu, yeni çevreye adaptasyon ve kimlik geçişi.',
        },
      ],
    },
    disciplines: {
      eyebrow: 'YAKLAŞIMIMIZ',
      heading: 'Farklı disiplinlerden uzmanlar, ortak bir çerçevede çalışır.',
      body: 'Her danışanın ihtiyacı farklıdır. Bu yüzden tek bir metodoloji değil, birbirini tamamlayan uzmanlık alanlarından oluşan bir ekosistem sunuyoruz.',
      cta: 'Yaklaşımımızı öğren',
      items: [
        'Eğitim ve Öğrenme Psikolojisi',
        'Uluslararası Kariyer Geçişi',
        'İnsan Kaynakları ve Organizasyon',
        'Kurumsal Liderlik Gelişimi',
        'Nörobilim ve Davranış Tasarımı',
        'Koçluk Metodolojisi',
        'Kariyer Yönelimi',
        'Takım Dinamikleri',
      ],
    },
    finalCTA: {
      eyebrow: 'İletişime Geçin',
      heading: 'İhtiyacınıza uygun uzmanla ön görüşme planlamak için başvurun.',
    },
    servicesPreview: {
      eyebrow: 'Hizmetler',
      heading: 'Uzmanlık Alanlarımız',
      viewAllAria: 'hizmetini incele',
      categories: [
        {
          value: 'bireysel-kocluk-kariyer',
          label: 'Bireysel Koçluk & Kariyer',
          description: 'Kariyer geçişleri, hedef netliği ve bireysel gelişim için yapılandırılmış koçluk.',
          code: '01',
          overline: 'BİREYSEL',
        },
        {
          value: 'liderlik-yonetici',
          label: 'Liderlik & Yönetici Gelişimi',
          description: 'Liderlik koçluğu ve yönetici gelişimi programları.',
          code: '02',
          overline: 'LİDERLİK',
        },
        {
          value: 'kurumsal-takim',
          label: 'Kurumsal & Takım Koçluğu',
          description: 'Ekip performansını destekleyen kurumsal eğitim ve takım koçluğu.',
          code: '03',
          overline: 'KURUMSAL',
        },
        {
          value: 'gencler-kuresel',
          label: 'Gençler & Küresel Uyum',
          description: 'Öğrenci koçluğu, sınav stratejisi ve küresel kariyer uyumu.',
          code: '04',
          overline: 'GENÇLER',
        },
      ],
    },
  },
  en: {
    nav: {
      services: 'Services',
      experts: 'Experts',
      about: 'About',
      journal: 'Journal',
      faq: 'FAQ',
      contact: 'Contact',
      requestCall: 'Request an Introductory Call',
      whatsapp: 'WhatsApp',
      whatsappWrite: 'Message on WhatsApp',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      homeAria: 'AURIX — go to homepage',
      tagline: 'Coaching & Consulting',
      mainNavAria: 'Main navigation',
      mobileMenuAria: 'Mobile navigation menu',
      mobileNavAria: 'Mobile navigation',
    },
    footer: {
      ariaLabel: 'Site footer',
      tagline: 'A multi-expert consulting ecosystem for professional growth, career clarity, and leadership transformation.',
      locationLine: 'Izmir · Online · In person',
      contactHeading: 'Contact',
      socialHeading: 'Social',
      copyright: 'AURIX Consulting. All rights reserved.',
      kvkk: 'Privacy Notice',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      legalNavAria: 'Legal notices',
      socialFallbackLabel: 'Social media',
      homeAria: 'AURIX — go to homepage',
    },
    common: {
      exploreServices: 'Explore Services',
      requestCall: 'Request an Introductory Call',
      messageWhatsapp: 'Message on WhatsApp',
      viewAll: 'View all',
      viewDetails: 'View Details',
      explore: 'Explore',
      close: 'Close',
      whatsappFloatingAria: 'Contact AURIX on WhatsApp',
    },
    hero: {
      eyebrow: 'Coaching · Career · Leadership',
      heading:
        'Professional coaching and consulting for clearer decisions, stronger direction, and sustainable growth.',
      body: 'Led by Kaan Yazıcı, AURIX offers structured development processes with an expert team across personal growth, executive coaching, corporate training, and student coaching.',
      subBody: 'For every client, we define the right service, the right expert, and the right process together.',
      ariaLabel: 'Homepage header',
      accordionAriaLabel: 'Service imagery gallery',
      accordionPanels: ['Personal Coaching', 'Leadership', 'Corporate', 'Youth', 'Global Adaptation'],
      stats: [
        { value: 200, suffix: '+', label: 'Hours of Coaching', duration: 1800 },
        { value: 7, suffix: '', label: 'Experts', duration: 800 },
        { value: 100, suffix: '%', label: 'Erickson Certified', duration: 1400 },
      ],
    },
    manifesto: {
      eyebrow: 'AURIX Philosophy',
      headingPrefix: 'AURIX does not leave your development journey',
      headingAccent: 'to chance.',
      body: 'We approach coaching and consulting not as a single meeting, but as a structured development process built on needs analysis, expert matching, goal clarity, and sustainable action steps.',
      cta: 'Explore the AURIX Approach',
      imageAlt: 'A composition representing the AURIX approach of direction and clarity',
      promiseCards: [
        {
          title: 'Clarity',
          description: 'We help you see your goals, priorities, and current situation more clearly.',
        },
        {
          title: 'Direction',
          description: 'We design the process from the right starting point by identifying the service area and expert that fit your needs.',
        },
        {
          title: 'Growth',
          description: 'We focus on turning insight into practical, actionable steps rather than stopping at awareness.',
        },
      ],
    },
    trustBand: {
      ariaLabel: 'Expert team',
      heading: 'Experts from different disciplines work within one shared approach.',
      areasAriaLabel: 'Areas of expertise',
      pillars: [
        'Education and learning psychology',
        'Human resources and organization',
        'International career transitions',
        'Corporate leadership development',
      ],
    },
    persona: {
      eyebrow: 'WHO WE SERVE',
      heading: 'Who Is AURIX For?',
      body: 'AURIX offers a team structured around different development needs.',
      ariaLabel: 'Target audiences',
      items: [
        {
          id: 'profesyonel',
          title: 'Working Professional',
          description: 'Navigating career transitions, unclear goals, or preparing for a new role.',
        },
        {
          id: 'lider',
          title: 'Leader and Manager',
          description: 'Strengthening decision-making, communication, and team performance.',
        },
        {
          id: 'kurum',
          title: 'Organizations and HR',
          description: 'Team coaching, corporate training programs, and leadership academy design.',
        },
        {
          id: 'genç',
          title: 'Students and Parents',
          description: 'Career awareness, choosing a university and major, exam strategy.',
        },
        {
          id: 'yurtdisi',
          title: 'Individuals Moving Abroad',
          description: 'Global career adaptation, adjusting to a new environment, and identity transition.',
        },
      ],
    },
    disciplines: {
      eyebrow: 'OUR APPROACH',
      heading: 'Experts from different disciplines work within one shared framework.',
      body: 'Every client’s need is different. That’s why we offer an ecosystem of complementary areas of expertise instead of a single methodology.',
      cta: 'Learn about our approach',
      items: [
        'Education and Learning Psychology',
        'International Career Transition',
        'Human Resources and Organization',
        'Corporate Leadership Development',
        'Neuroscience and Behavior Design',
        'Coaching Methodology',
        'Career Direction',
        'Team Dynamics',
      ],
    },
    finalCTA: {
      eyebrow: 'Get in Touch',
      heading: 'Apply to schedule an introductory call with the expert who fits your needs.',
    },
    servicesPreview: {
      eyebrow: 'Services',
      heading: 'Our Areas of Expertise',
      viewAllAria: 'Explore the',
      categories: [
        {
          value: 'bireysel-kocluk-kariyer',
          label: 'Personal Coaching & Career',
          description: 'Structured coaching for career transitions, goal clarity, and personal growth.',
          code: '01',
          overline: 'PERSONAL',
        },
        {
          value: 'liderlik-yonetici',
          label: 'Leadership & Executive Development',
          description: 'Leadership coaching and executive development programs.',
          code: '02',
          overline: 'LEADERSHIP',
        },
        {
          value: 'kurumsal-takim',
          label: 'Corporate & Team Coaching',
          description: 'Corporate training and team coaching that supports team performance.',
          code: '03',
          overline: 'CORPORATE',
        },
        {
          value: 'gencler-kuresel',
          label: 'Youth & Global Adaptation',
          description: 'Student coaching, exam strategy, and global career adaptation.',
          code: '04',
          overline: 'YOUTH',
        },
      ],
    },
  },
} as const

export function t(locale: Locale) {
  return dictionary[locale]
}
