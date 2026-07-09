import crypto from 'node:crypto'

import { CONTACT_EMAIL } from './contact-channels'
import type { Locale } from './i18n/types'

export type LeadEmailInput = {
  fullName: string
  email: string
  phone?: string
  sourcePage: 'iletisim' | 'on-gorusme'
  contactReason?: string
  interestArea: string
  preferredLanguage: string
  meetingPreference?: string
  selectedExpert?: string
  message: string
  locale: Locale
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

type ResendSendResult =
  | { ok: true; id?: string }
  | { ok: false; reason: 'not-configured' | 'send-failed'; detail?: unknown }

const RESEND_API_URL = 'https://api.resend.com/emails'

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function line(label: string, value?: string): string {
  if (!value) return ''
  return `<tr><td style="padding:8px 12px;color:#596466;width:190px">${label}</td><td style="padding:8px 12px;color:#162224;font-weight:600">${escapeHtml(value)}</td></tr>`
}

function buildEmailHtml(input: LeadEmailInput): string {
  const sourceLabel = input.sourcePage === 'on-gorusme' ? 'Ön Görüşme Formu' : 'İletişim Formu'
  const submittedAt = new Intl.DateTimeFormat('tr-TR', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/Istanbul',
  }).format(new Date())

  return `<!doctype html>
<html lang="tr">
  <body style="margin:0;background:#f5f7f7;font-family:Arial,sans-serif;color:#162224">
    <div style="max-width:680px;margin:0 auto;padding:28px">
      <div style="background:#ffffff;border:1px solid #dde5e4;padding:28px">
        <p style="margin:0 0 8px;color:#14797C;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase">AURIX web sitesi</p>
        <h1 style="margin:0 0 20px;font-size:24px;line-height:1.25">${sourceLabel}</h1>
        <table style="width:100%;border-collapse:collapse;border-top:1px solid #edf1f1;border-bottom:1px solid #edf1f1">
          ${line('Ad Soyad', input.fullName)}
          ${line('E-posta', input.email)}
          ${line('Telefon / WhatsApp', input.phone)}
          ${line('Form Kaynağı', sourceLabel)}
          ${line('İletişim Nedeni', input.contactReason)}
          ${line('İlgi Alanı', input.interestArea)}
          ${line('Tercih Edilen Dil', input.preferredLanguage)}
          ${line('Görüşme Tercihi', input.meetingPreference)}
          ${line('Tercih Edilen Uzman', input.selectedExpert)}
          ${line('Site Dili', input.locale)}
          ${line('Gönderim Zamanı', submittedAt)}
          ${line('UTM Source', input.utmSource)}
          ${line('UTM Medium', input.utmMedium)}
          ${line('UTM Campaign', input.utmCampaign)}
        </table>
        <h2 style="margin:24px 0 10px;font-size:16px">Mesaj</h2>
        <div style="white-space:pre-wrap;border-left:4px solid #14797C;background:#f5fbfb;padding:14px 16px;line-height:1.6">${escapeHtml(input.message)}</div>
        <p style="margin:24px 0 0;color:#596466;font-size:13px">Bu e-posta AURIX web sitesindeki form üzerinden otomatik oluşturuldu.</p>
      </div>
    </div>
  </body>
</html>`
}

function buildPlainText(input: LeadEmailInput): string {
  return [
    `AURIX web sitesi - ${input.sourcePage === 'on-gorusme' ? 'Ön Görüşme Formu' : 'İletişim Formu'}`,
    `Ad Soyad: ${input.fullName}`,
    `E-posta: ${input.email}`,
    input.phone ? `Telefon / WhatsApp: ${input.phone}` : '',
    input.contactReason ? `İletişim Nedeni: ${input.contactReason}` : '',
    `İlgi Alanı: ${input.interestArea}`,
    `Tercih Edilen Dil: ${input.preferredLanguage}`,
    input.meetingPreference ? `Görüşme Tercihi: ${input.meetingPreference}` : '',
    input.selectedExpert ? `Tercih Edilen Uzman: ${input.selectedExpert}` : '',
    `Site Dili: ${input.locale}`,
    input.utmSource ? `UTM Source: ${input.utmSource}` : '',
    input.utmMedium ? `UTM Medium: ${input.utmMedium}` : '',
    input.utmCampaign ? `UTM Campaign: ${input.utmCampaign}` : '',
    '',
    'Mesaj:',
    input.message,
  ]
    .filter(Boolean)
    .join('\n')
}

function createIdempotencyKey(input: LeadEmailInput): string {
  const fingerprint = [
    input.email,
    input.fullName,
    input.sourcePage,
    input.message,
    new Date().toISOString().slice(0, 16),
  ].join('|')

  return `aurix-lead-${crypto.createHash('sha256').update(fingerprint).digest('hex').slice(0, 32)}`
}

export async function sendLeadEmail(input: LeadEmailInput): Promise<ResendSendResult> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return { ok: false, reason: 'not-configured' }

  const from = process.env.LEAD_EMAIL_FROM || 'AURIX Web <onboarding@resend.dev>'
  const to = process.env.LEAD_EMAIL_TO || CONTACT_EMAIL
  const subject =
    input.sourcePage === 'on-gorusme'
      ? `Yeni ön görüşme talebi: ${input.fullName}`
      : `Yeni iletişim talebi: ${input.fullName}`

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': createIdempotencyKey(input),
    },
    body: JSON.stringify({
      from,
      to: to.split(',').map((item) => item.trim()).filter(Boolean),
      reply_to: input.email,
      subject,
      html: buildEmailHtml(input),
      text: buildPlainText(input),
    }),
  })

  const result = (await response.json().catch(() => null)) as { id?: string } | unknown

  if (!response.ok) {
    return { ok: false, reason: 'send-failed', detail: result }
  }

  return { ok: true, id: typeof result === 'object' && result && 'id' in result ? String(result.id) : undefined }
}
