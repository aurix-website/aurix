# CLAUDE.md — AURIX Proje Anayasası

> Bu dosya, Claude Code / Codex / Antigravity'nin **her oturumun başında okuması zorunlu**
> olan anayasadır. Buradaki kurallar ve geçitler ihlal edilemez. Yeni bir karar gerektiğinde
> kod yazmadan önce sor.

---

## 0. Proje özeti

**AURIX**, çok uzmanlı bir koçluk ve danışmanlık şirketinin premium web platformudur.
Bir broşür değil; ölçülebilir bir **güven makinesi** inşa ediyoruz.

- **Domain (canonical):** `aurixdanismanlik.com` (`aurixkocluk.com` → redirect)
- **Dil:** TR varsayılan, EN'e hazır altyapı (içerik fazlı gelir)
- **Tek cümlelik test:** Her karar şunu geçmeli — *"Bu, şüpheci ve yüksek değerli bir danışanın,
  hiç tanımadığı bir uzman ekibine güvenmesini kolaylaştırıyor mu?"*

## 1. Premium tanımı (operasyonel)

Premium = **algılanan özen × bilgiye erişim hızı × tutarlılık.** Lüks/altın estetiği değil;
sessiz güven. Gösteriş yok, boşluk var. Bu tanım, tüm tasarım ve kod kararlarının ölçütüdür.

## 2. Teknik stack (sabit)

| Katman | Karar |
|---|---|
| Frontend | Next.js (App Router) + TypeScript (strict) + Tailwind CSS |
| CMS | Payload 3 — Next.js içinde, tek app (headless ayrı servis DEĞİL) |
| Veritabanı | PostgreSQL |
| Medya | Cloudflare R2 (S3 uyumlu) |
| Hosting | Railway (kalıcı container) — Vercel serverless'ta Payload çalıştırma |
| CDN/DNS | Cloudflare |
| Animasyon | Motion (eski adı Framer Motion) — kontrollü, az |

**Neden Railway, Vercel değil:** Payload'ın admin/DB işlemleri serverless cold-start ve timeout
sorunları yaşar. Birleşik app kalıcı container ister.

## 3. Referans dosyalar (bunlar da bağlayıcıdır)

- `BRAND_STRATEGY.md` — konumlandırma, hedef kitle, mesaj mimarisi, 4 hizmet kategorisi
- `EDITORIAL_VOICE.md` — ses, yasaklı dil, modalite filtresi, uzman profili şablonu
- `DESIGN_TOKENS.md` — renk, tipografi, boşluk, bileşen ve yasaklı görsel kalıpları

Metin üretmeden önce `EDITORIAL_VOICE.md`, görsel/stil üretmeden önce `DESIGN_TOKENS.md`
okunur. Bu bir geçittir.

## 4. Kodlama kuralları

- TypeScript `strict: true`. `any` yasak; gerekiyorsa `unknown` + daraltma.
- Sunucu bileşeni varsayılan; `'use client'` yalnızca gerçekten gerektiğinde.
- Tasarım token'larının dışına çıkma. Hardcoded hex/px yok — `DESIGN_TOKENS.md` değişkenleri.
- Erişilebilirlik birinci sınıf: semantik HTML, görünür focus, alt metinleri, WCAG AA.
- Görseller daima `next/image`, doğru boyut/öncelik. Layout shift (CLS) sıfıra yakın.
- Form: server action / route handler + KVKK rıza checkbox + aydınlatma metni linki.
- Sır yok: API anahtarları yalnızca env. `.env.example` güncel tutulur.
- Component tekrarı yok; tek kaynak (single source of truth) prensibi.

## 5. Ölçülebilir kabul kriterleri (geçit)

- Lighthouse: Performance ≥ 95, SEO ≥ 95, Best Practices ≥ 95, **Accessibility = 100**
- Core Web Vitals: LCP < 2.5s · INP < 200ms · CLS < 0.1
- ESLint sıfır error · TypeScript sıfır error
- Tüm sayfalar mobilde test edildi (360px tabandan yukarı)

## 6. SEO / GEO (2026)

- `schema.org` yapısal verisi: Organization, Person (her uzman), Service, Article, FAQPage.
- `aurix` çıplak araması Infineon vb. nedeniyle kayıp; hedef terimler: "AURIX koçluk",
  "AURIX danışmanlık", hizmet + şehir sorguları. SEO'yu marka adına değil bu terimlere kur.
- FAQ blokları gerçek soru-cevap formatında (AI motorlarının çıkarabileceği biçimde).
- `sitemap.xml`, `robots.txt`, OG görselleri, `llms.txt`.

## 7. Çok dillilik

- Payload localization: `tr` (default) + `en`. Yerelleştirilebilir alanlar şemada `localized: true`.
- EN içerik zorunlu değil; altyapı hazır, içerik Faz 1.5'te gelir.
- URL: `/` (TR) ve `/en/...` (EN sub-path).

## 8. Görev parçalama (tek prompt'la "siteyi yap" YASAK)

Sırayla, her biri ayrı görev + ayrı onay:
1. Project scaffold (Next + Payload + Postgres bağlantısı) → 2. Design tokens (Tailwind theme)
→ 3. Layout + Header/Footer → 4. Payload şemaları (bkz. `payload.config.ts`) → 5. Home bölümleri
→ 6. Service (kategori) sayfaları → 7. Expert sayfaları → 8. Journal (blog) → 9. İletişim/form
→ 10. SEO/schema → 11. Responsive pass → 12. A11y pass → 13. Performance pass.

## 9. Denetim döngüsü

Her büyük parça sonrası ikinci asistana (Codex/Antigravity) senior frontend rolü:
"Gereksiz complexity, a11y hataları, hydration sorunları, component tekrarı, TypeScript
gevşekliği, mobil problemler bul." Sonra insan kontrolü (marka zevki + mesaj hassasiyeti).

## 10. Yasaklar (özet)

- `EDITORIAL_VOICE.md`'deki yasaklı dil (sağlık iddiası, doğrulanamayan sonuç sayısı, vb.)
- `DESIGN_TOKENS.md`'deki yasaklı görsel kalıplar (glow, ağır gradient, stok-gülümseme, vb.)
- `localStorage`/`sessionStorage`'a gereksiz bağımlılık; durum sunucu/DB'de.
- Modalite filtresi: enerji/hipnoz menüde hizmet veya başlıkta iddia olarak ASLA.

## 11. Skills
- frontend-design: UI/bileşen inşasında kullanılır (zanaat + tipografi). DESIGN_TOKENS.md ve
  ART_DIRECTION.md'ye TABİDİR; kendi renk/yön kararını DAYATMAZ.
- motion: animasyon için; KONTROLLÜ ve AZ (premium = sessiz güven). İzin: ince scroll-reveal,
  yumuşak hover, sayfa geçişi. Yasak: bouncy/parallax/ağır hareket. prefers-reduced-motion zorunlu.