import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET() {
  try {
    const payload = await getPayload({ config })

    const existing = await payload.find({
      collection: 'users',
      where: { email: { equals: 'bektas.sari@gmail.com' } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'users',
        id: existing.docs[0].id,
        data: { password: '12345' },
        overrideAccess: true,
      })
      return NextResponse.json({ ok: true, action: 'updated', email: 'bektas.sari@gmail.com' })
    }

    await payload.create({
      collection: 'users',
      data: { email: 'bektas.sari@gmail.com', password: '12345' },
    })
    return NextResponse.json({ ok: true, action: 'created', email: 'bektas.sari@gmail.com' })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
