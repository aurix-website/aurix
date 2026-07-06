/**
 * Yerel geliştirme için admin kullanıcısı oluşturur veya günceller.
 * Kullanım: pnpm tsx scripts/seed-admin.ts
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'

const EMAIL = 'bektas.sari@gmail.com'
const PASSWORD = '12345'

async function main() {
  console.log('Payload bağlanıyor...')
  const payload = await getPayload({ config })

  const existing = await payload.find({
    collection: 'users',
    where: { email: { equals: EMAIL } },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    const id = existing.docs[0].id
    await payload.update({
      collection: 'users',
      id,
      data: { password: PASSWORD },
    })
    console.log(`✓ Mevcut kullanıcı güncellendi: ${EMAIL}`)
  } else {
    await payload.create({
      collection: 'users',
      data: { email: EMAIL, password: PASSWORD },
    })
    console.log(`✓ Yeni kullanıcı oluşturuldu: ${EMAIL}`)
  }

  console.log('Tamamlandı.')
  process.exit(0)
}

main().catch((err) => {
  console.error('Hata:', err)
  process.exit(1)
})
