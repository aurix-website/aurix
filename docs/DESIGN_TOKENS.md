# AURIX — DESIGN_TOKENS.md

> **Yön:** "Silver-teal, sessiz güven." Renkler logodan örneklenerek türetildi (tahmin değil).
> **İlke:** Premium = algılanan özen × bilgiye erişim hızı × tutarlılık. Turkuaz = vurgu, yüzeyin
> **%10'undan azında.** Altın = meta-etiket ve ikincil aksan — dominant değil, hiyerarşi aracı.
> Gösteriş yok; sükûnet, boşluk, kusursuz tipografi.
>
> **Kullanım:** Claude Code bu token'ların dışına çıkmaz. Yeni renk/efekt eklemek bir geçittir,
> onaysız yapılmaz.

---

## 1. Renk paleti

| Token | Hex | Rol |
|---|---|---|
| `--color-ink` | `#1A1C1E` | Ana metin (gövde). |
| `--color-surface-dark` | `#2E2E30` | Koyu yüzey — hero, footer. |
| `--color-surface` | `#F6F7F1` | Birincil açık yüzey — sıcak kırık beyaz. |
| `--color-surface-elevated` | `#FCFDF9` | Kartlar / yükseltilmiş bloklar. |
| `--color-surface-subtle` | `#F9FBFB` | Alternatif section arka planı (section zebra). |
| `--color-accent` | `#1A9CA0` | Turkuaz — birincil CTA, linkler, focus ring. |
| `--color-accent-deep` | `#14797C` | Hover / active / CTA zemin (kontrast AA). |
| `--color-gold` | `#C5A059` | Overline etiket, ikincil ikon vurgusu, meta-bilgi. |
| `--color-gold-muted` | `#C5A059` / %10 opacity | Gold etiket arka planı (`bg-[#C5A059]/10`). |
| `--color-silver` | `#D7DEE4` | İkincil yüzey, ince ayırıcılar. |
| `--color-border` | `#E2E5DE` | Hairline border. |
| `--color-border-subtle` | `#E8F1F2` | Card içi bölücüler, subtle separatörler. |
| `--color-muted` | `#5B6168` | İkincil metin. |

### CSS değişkenleri

```css
:root {
  --color-ink:              #1A1C1E;
  --color-surface-dark:     #2E2E30;
  --color-surface:          #F6F7F1;
  --color-surface-elevated: #FCFDF9;
  --color-surface-subtle:   #F9FBFB;
  --color-accent:           #1A9CA0;
  --color-accent-deep:      #14797C;
  --color-gold:             #C5A059;
  --color-silver:           #D7DEE4;
  --color-border:           #E2E5DE;
  --color-border-subtle:    #E8F1F2;
  --color-muted:            #5B6168;
}
```

### Renk kullanım kuralları

- **Turkuaz (`--color-accent`):** Tüm yüzeyin <%10'u. CTA zemin, link, focus ring, tek bir
  vurgu noktası. Gövde metni rengi olarak **kullanılmaz.**
- **CTA zemini:** `--color-accent-deep` (#14797C) kullan — beyaz metin üstünde AA kontrast sağlar.
  (#1A9CA0 üstünde beyaz ≈ 2.8:1, yetersiz.)
- **Altın (`--color-gold`):** Yalnızca overline etiketler, ikincil ikon vurguları ve meta-bilgi
  etiketleri. Dominant kullanım yasak — hiçbir zaman büyük yüzey rengi, heading rengi, CTA zemin
  olmaz.
- **Gövde metni:** Açık yüzeyde `--color-ink`; koyu yüzeyde `#F6F7F1`.

---

## 2. Tipografi

| Rol | Font | Kullanım |
|---|---|---|
| Başlık / display | **Newsreader** (serif, variable) | Sıcak, otoriter, editoryal. Section başlıkları, hero. |
| Gövde / UI | **Inter** | Paragraflar, buton etiketleri, form alanları. |
| Meta / etiket | **JetBrains Mono** | Overline etiketler, veri etiketleri, badge'ler. |
| Alternatifler | Source Serif 4 / Spectral (başlık) · IBM Plex Sans (gövde) | Swap edilebilir. |

### Google Fonts import

```html
<link href="https://fonts.googleapis.com/css2?
  family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700
  &family=Inter:wght@300;400;500;600;700
  &family=JetBrains+Mono:wght@400;500;700
  &display=swap" rel="stylesheet">
```

### Tip ölçeği (8pt tabanlı, akıcı)

```css
--text-display: clamp(2.5rem, 5vw, 4rem);   /* hero başlık — Newsreader */
--text-h1:      clamp(2rem, 3.5vw, 3rem);
--text-h2:      clamp(1.5rem, 2.5vw, 2rem);
--text-h3:      1.25rem;
--text-body:    1.0625rem;                   /* 17px — okunabilirlik */
--text-small:   0.875rem;
--text-label:   0.6875rem;                   /* 11px — overline etiket */

--leading-body:  1.6;
--leading-tight: 1.15;   /* başlıklar */
```

### Overline etiket pattern (bileşen şablonu)

Her section'ın üstündeki küçük meta-etiket. **Bu pattern AURIX'in tipografi imzasıdır.**

```tsx
// Overline + Başlık ikilisi — her section'da tutarlı kullan
<span className="text-[11px] font-mono tracking-widest text-[--color-gold] font-bold uppercase block">
  BÖLÜM ETIKETI
</span>
<h2 className="font-serif text-3xl text-[--color-ink] tracking-tight">
  Section Başlığı
</h2>
```

Tailwind config'de:
- `font-mono` → JetBrains Mono
- `font-serif` → Newsreader
- `font-sans` → Inter

---

## 3. Boşluk, radius, çizgi

```css
--space-unit:        0.5rem;    /* 8pt sistem: 8/16/24/32/48/64/96 */
--radius-sm:         4px;       /* kartlar, butonlar, input — varsayılan */
--radius-md:         8px;       /* maksimum — çok yuvarlak kart yok */
--border-hairline:   1px solid var(--color-border);
--border-subtle:     1px solid var(--color-border-subtle);
--container-max:     1200px;
--section-padding-y: clamp(4rem, 8vw, 8rem);   /* premium = bol dikey boşluk */
```

**Radius disiplini:** Tüm kartlar, butonlar ve input'lar `--radius-sm` (4px) kullanır.
`rounded-sm` = 4px, Tailwind'de bu `rounded` değil `rounded-sm`'dir. Dikkat.
Sadece avatar/profil görseli `rounded-full` kullanabilir.

---

## 4. Bileşen kuralları

### CTA Butonlar

```tsx
// Birincil CTA — sayfada sadece bir tane
<button className="bg-[#14797C] hover:bg-[#0f5f62] text-white px-6 py-3.5 
                   text-sm font-semibold rounded-sm transition-all duration-200
                   inline-flex items-center gap-2">
  Randevu Al
  <ArrowRight className="h-4 w-4 text-[#C5A059]" />
</button>

// İkincil CTA
<button className="bg-transparent border border-[#14797C] text-[#14797C] 
                   hover:bg-[#14797C]/5 px-6 py-3.5 text-sm font-semibold 
                   rounded-sm transition-all duration-200">
  Daha Fazla Bilgi
</button>
```

### Kart

```tsx
<div className="bg-[#FCFDF9] border border-[#E2E5DE] rounded-sm p-6 space-y-4">
  {/* Gölge yok. Glassmorphism/glow yok. */}
</div>
```

### Section Separator

```tsx
// Bölümler arası geçiş — dekoratif element yok, sadece hairline + boşluk
<section className="border-t border-[#E2E5DE] pt-16 mt-16">
```

### Hizmet Kartı (01/02/03 pattern)

```tsx
<div className="bg-[#F9FBFB] border border-[#E8F1F2] rounded-sm p-6 space-y-3">
  <span className="text-xs font-mono font-bold text-[#C5A059]">01 / BİREYSEL</span>
  <h3 className="font-serif text-xl text-[#1A1C1E]">Bireysel Koçluk & Kariyer</h3>
  <p className="text-sm text-[#5B6168] leading-relaxed font-sans">
    Açıklama metni.
  </p>
  <a href="/hizmetler/bireysel" className="text-xs text-[#14797C] hover:text-[#C5A059] 
                                           font-bold inline-flex items-center gap-1.5 
                                           transition-all">
    <span>Detayları Gör</span>
    <ArrowRight className="h-3 w-3" />
  </a>
</div>
```

### Founder / Uzman Fotoğraf Kartı

```tsx
// Hafif skew + hover'da düzelme — premium micro-interaction
<div className="bg-white border border-[#E2E5DE] rounded-sm p-3 
                skew-y-1 hover:skew-y-0 transition-transform duration-500 
                max-w-sm">
  <img
    src={portrait}
    alt="Kaan Yazıcı"
    className="w-full h-[380px] object-cover rounded-sm 
               grayscale-[25%] hover:grayscale-0 transition-all duration-300"
  />
  <div className="mt-3 text-center">
    <span className="font-serif text-lg text-[#1A1C1E] block">Kaan Yazıcı</span>
    <span className="text-[10px] font-mono text-[#5B6168] uppercase tracking-widest">
      KURUCU & BAŞ KOÇLUK DANIŞMANI
    </span>
  </div>
</div>
```

### Lider Profil / Uzman Badge

```tsx
// Overline etiket — tüm section başlıklarında tutarlı
<div className="inline-flex items-center gap-2 bg-[#14797C]/10 
                px-3 py-1 rounded-sm border border-[#14797C]/20">
  <Sparkles className="h-3.5 w-3.5 text-[#C5A059]" />
  <span className="text-xs font-mono tracking-widest text-[#14797C] font-bold uppercase">
    SERTİFİKALI ERICKSON KOÇU
  </span>
</div>
```

---

## 5. Animasyon (Motion)

Motion (eski Framer Motion) yüklü. Kullanım kısıtlı ve kasıtlı.

**İzinli:**
- `fadeInUp` — section bileşenleri sayfa yüklenirken (stagger: 0.1s)
- Yumuşak hover transitions (`duration-200`, `duration-300`)
- `skew-y` founder fotoğrafı micro-interaction (bkz. Uzman Fotoğraf Kartı)
- `grayscale` hover geçişi (fotoğraflar)
- Progress bar dolum animasyonu (`transition-all duration-1000 ease-out`)

**Yasak:**
- Bouncy / spring animasyonlar
- Parallax
- Ağır entry animasyonları (kayan başlık, yazı makinesi efekti)
- `prefers-reduced-motion` dikkate alınmadan herhangi bir animasyon

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Yasaklı görsel kalıplar

- Büyük stok-fotoğraf gülümsemeleri
- Yoga/spa/wellness estetiği
- Aşırı gradient, glow, glassmorphism
- Her yerde altın çizgi (turkuaz-gümüş yön korunur; altın sadece meta-etiket)
- `rounded-lg` / `rounded-xl` kartlar — köşeler fazla yuvarlak
- "AI template" hissi veren jenerik düzenler (koyu zemin + yeşil neon accent)
- Sahte hero görsel kutusu (boş placeholder)
- Italik başlık + dark zemin = dark SaaS — bunu anasayfada kullanma

---

## 7. Erişilebilirlik (geçit)

- Tüm metin/zemin çiftleri WCAG AA (≥ 4.5:1 gövde, ≥ 3:1 büyük başlık).
- CTA zemini `--color-accent-deep` (#14797C) — beyaz metin üstünde kontrast AA sağlar.
- Odak halkaları görünür: `outline-2 outline-offset-2 outline-[#1A9CA0]`
- `alt` metni boş bırakılmaz; dekoratif görseller `alt=""`
- Hedef: Lighthouse Accessibility = 100.