// payload.config.ts — AURIX Payload 3 şema iskeleti
// Not: Bu bir BAŞLANGIÇ iskeletidir. Production'da koleksiyonları
// src/collections/*.ts altına bölün. Alanlar genişletilebilir; isimler İngilizce
// (standart), etiketler/içerik TR. localized:true olan alanlar TR/EN içerik tutar.

import { buildConfig } from 'payload'
import type { CollectionConfig, GlobalConfig, Field } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// --- TR-aware slug yardımcıları -------------------------------------------
const TR_MAP: Record<string, string> = {
  ç: 'c', Ç: 'c', ş: 's', Ş: 's', ğ: 'g', Ğ: 'g',
  ı: 'i', İ: 'i', ö: 'o', Ö: 'o', ü: 'u', Ü: 'u',
}
const formatSlug = (val: string): string =>
  val
    .split('').map((c) => TR_MAP[c] ?? c).join('')
    .toLowerCase().trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')

const slugField = (from = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  index: true,
  unique: true,
  admin: { position: 'sidebar' },
  hooks: {
    beforeValidate: [
      ({ value, data }) =>
        value || (data?.[from] ? formatSlug(String(data[from])) : value),
    ],
  },
})

// Basit SEO grubu (alternatif: @payloadcms/plugin-seo)
const seoField: Field = {
  name: 'seo',
  type: 'group',
  admin: { position: 'sidebar' },
  fields: [
    { name: 'title', type: 'text', localized: true },
    { name: 'description', type: 'textarea', localized: true },
    { name: 'ogImage', type: 'upload', relationTo: 'media' },
  ],
}

const SERVICE_CATEGORIES = [
  { label: 'Bireysel Koçluk ve Kariyer', value: 'bireysel-kocluk-kariyer' },
  { label: 'Liderlik ve Yönetici Gelişimi', value: 'liderlik-yonetici' },
  { label: 'Kurumsal Eğitim ve Takım Koçluğu', value: 'kurumsal-takim' },
  { label: 'Gençler, Öğrenciler ve Yurtdışı Uyumu', value: 'gencler-kuresel' },
]

// --- Koleksiyonlar ---------------------------------------------------------
const Users: CollectionConfig = {
  slug: 'users',
  admin: { useAsTitle: 'email' },
  auth: true,
  fields: [],
}

const Media: CollectionConfig = {
  slug: 'media',
  access: { read: () => true },
  upload: {
    // R2/S3 adapter config payload.config eklenti tarafında bağlanır
    imageSizes: [
      { name: 'thumb', width: 400 },
      { name: 'portrait', width: 800, height: 1000, crop: 'center' }, // 4:5 uzman portresi
      { name: 'cover', width: 1600 },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [{ name: 'alt', type: 'text', localized: true, required: true }],
}

const Experts: CollectionConfig = {
  slug: 'experts',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'title', 'featured', 'order'] },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    slugField('name'),
    { name: 'title', type: 'text', localized: true, required: true }, // ör. "Yönetici Koçu"
    { name: 'photo', type: 'upload', relationTo: 'media', required: true },
    { name: 'shortBio', type: 'textarea', localized: true }, // 2-3 cümle konumlandırma
    { name: 'longBio', type: 'richText', editor: lexicalEditor(), localized: true },
    { name: 'expertiseAreas', type: 'array', localized: true, fields: [{ name: 'item', type: 'text' }] },
    { name: 'worksWith', type: 'array', localized: true, fields: [{ name: 'item', type: 'text' }] },
    { name: 'education', type: 'array', fields: [{ name: 'item', type: 'text', localized: true }] },
    { name: 'certifications', type: 'array', fields: [
      { name: 'name', type: 'text', localized: true },
      { name: 'verifyUrl', type: 'text' }, // doğrulanabilir kanıt (ICF/Erickson)
    ] },
    { name: 'languages', type: 'array', fields: [{ name: 'item', type: 'text' }] },
    { name: 'location', type: 'text' },
    { name: 'linkedin', type: 'text' },
    { name: 'relatedServices', type: 'relationship', relationTo: 'services', hasMany: true },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'order', type: 'number', defaultValue: 0 }, // alfabetik/öne çıkan sıralama
    seoField,
  ],
}

const Services: CollectionConfig = {
  slug: 'services',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'category'] },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', localized: true, required: true },
    slugField('title'),
    { name: 'category', type: 'select', options: SERVICE_CATEGORIES, required: true },
    { name: 'shortDescription', type: 'textarea', localized: true },
    { name: 'longDescription', type: 'richText', editor: lexicalEditor(), localized: true },
    { name: 'whoIsItFor', type: 'array', localized: true, fields: [{ name: 'item', type: 'text' }] },
    { name: 'outcomes', type: 'array', localized: true, fields: [{ name: 'item', type: 'text' }] },
    { name: 'relatedExperts', type: 'relationship', relationTo: 'experts', hasMany: true },
    { name: 'faqs', type: 'array', localized: true, fields: [
      { name: 'question', type: 'text' },
      { name: 'answer', type: 'textarea' },
    ] }, // FAQPage schema + GEO için
    seoField,
  ],
}

const Articles: CollectionConfig = {
  slug: 'articles',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'category', 'publishedDate'] },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', localized: true, required: true },
    slugField('title'),
    { name: 'excerpt', type: 'textarea', localized: true },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
    { name: 'author', type: 'relationship', relationTo: 'experts' },
    { name: 'category', type: 'select', options: SERVICE_CATEGORIES },
    { name: 'isCornerstone', type: 'checkbox', defaultValue: false }, // 8 köşe-taşı işareti
    { name: 'body', type: 'richText', editor: lexicalEditor(), localized: true },
    { name: 'relatedServices', type: 'relationship', relationTo: 'services', hasMany: true },
    { name: 'publishedDate', type: 'date', defaultValue: () => new Date() },
    seoField,
  ],
}

const Programs: CollectionConfig = {
  slug: 'programs',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'date', 'format'] },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', localized: true, required: true },
    slugField('title'),
    { name: 'date', type: 'date' },
    { name: 'format', type: 'select', options: [
      { label: 'Online', value: 'online' },
      { label: 'Yüz yüze', value: 'in-person' },
      { label: 'Hibrit', value: 'hybrid' },
    ] },
    { name: 'trainer', type: 'relationship', relationTo: 'experts', hasMany: true },
    { name: 'description', type: 'richText', editor: lexicalEditor(), localized: true },
    { name: 'applicationLink', type: 'text' },
  ],
}

// --- Global: Site ayarları -------------------------------------------------
const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: { read: () => true },
  fields: [
    { name: 'logoLight', type: 'upload', relationTo: 'media' }, // koyu zemin için
    { name: 'logoDark', type: 'upload', relationTo: 'media' },  // açık zemin için
    { name: 'contactEmail', type: 'email' },
    { name: 'whatsappNumber', type: 'text' },
    { name: 'socialLinks', type: 'array', fields: [
      { name: 'platform', type: 'text' },
      { name: 'url', type: 'text' },
    ] },
    { name: 'kvkkUrl', type: 'text' }, // aydınlatma metni linki
    { name: 'defaultSeo', type: 'group', fields: [
      { name: 'title', type: 'text', localized: true },
      { name: 'description', type: 'textarea', localized: true },
      { name: 'ogImage', type: 'upload', relationTo: 'media' },
    ] },
  ],
}

// --- Config ----------------------------------------------------------------
export default buildConfig({
  admin: { user: 'users' }, // auth için ayrı Users koleksiyonu scaffold'da eklenir
  editor: lexicalEditor(),
  collections: [Users, Media, Experts, Services, Articles, Programs],
  globals: [SiteSettings],
  localization: {
    locales: [
      { label: 'Türkçe', code: 'tr' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'tr',
    fallback: true, // EN içerik yoksa TR'ye düş
  },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL },
    push: process.env.NODE_ENV !== 'production',
  }),
  sharp,
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  secret: process.env.PAYLOAD_SECRET || '',
})