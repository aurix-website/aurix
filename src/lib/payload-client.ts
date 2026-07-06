import { getPayload } from 'payload'
import configPromise from '@payload-config'
import net from 'node:net'

// Payload singleton — reset on failure so next request retries
let payloadClientPromise: ReturnType<typeof getPayload> | null = null

function getDatabaseEndpoint(): { host: string; port: number } | null {
  const url = process.env.DATABASE_URL
  if (!url) return null
  try {
    const parsed = new URL(url)
    return { host: parsed.hostname, port: Number(parsed.port || 5432) }
  } catch {
    return null
  }
}

function canReachDatabase(): Promise<boolean> {
  const endpoint = getDatabaseEndpoint()
  if (!endpoint) return Promise.resolve(false)

  return new Promise((resolve) => {
    const socket = net.createConnection(endpoint)
    const done = (v: boolean) => {
      socket.removeAllListeners()
      socket.destroy()
      resolve(v)
    }
    socket.setTimeout(400)
    socket.once('connect', () => done(true))
    socket.once('error', () => done(false))
    socket.once('timeout', () => done(false))
  })
}

export async function isPayloadAvailable(): Promise<boolean> {
  return canReachDatabase()
}

export const getPayloadClient = async () => {
  if (!payloadClientPromise) {
    payloadClientPromise = getPayload({ config: configPromise })
    // Reset singleton if initialization fails so future requests retry
    payloadClientPromise.catch(() => {
      payloadClientPromise = null
    })
  }
  return payloadClientPromise
}

export const getOptionalPayloadClient = async () => {
  try {
    const reachable = await canReachDatabase()
    if (!reachable) return null
    return await getPayloadClient()
  } catch {
    return null
  }
}
