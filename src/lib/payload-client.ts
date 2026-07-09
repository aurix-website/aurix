import net from 'node:net'
import type { getPayload as getPayloadFn } from 'payload'

let payloadClientPromise: ReturnType<typeof getPayloadFn> | null = null
let dbReachabilityPromise: Promise<boolean> | null = null
let dbReachabilityCache: {
  endpointKey: string | null
  checkedAt: number
  reachable: boolean
} = {
  endpointKey: null,
  checkedAt: 0,
  reachable: false,
}

const DB_REACHABILITY_CACHE_MS = Number(process.env.PAYLOAD_DB_CHECK_CACHE_MS ?? 30_000)
const DB_CONNECT_TIMEOUT_MS = Number(process.env.PAYLOAD_DB_CONNECT_TIMEOUT_MS ?? 120)

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

function getEndpointKey(endpoint: { host: string; port: number } | null): string | null {
  return endpoint ? `${endpoint.host}:${endpoint.port}` : null
}

function isPayloadDisabled(): boolean {
  return process.env.PAYLOAD_DISABLED === 'true'
}

function canReadPayloadFromPublicPages(): boolean {
  return process.env.PAYLOAD_PUBLIC_READS === 'true'
}

function probeDatabase(endpoint: { host: string; port: number }): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = net.createConnection(endpoint)
    let settled = false

    const done = (v: boolean) => {
      if (settled) return
      settled = true
      socket.removeAllListeners()
      socket.destroy()
      resolve(v)
    }

    socket.setTimeout(DB_CONNECT_TIMEOUT_MS)
    socket.once('connect', () => done(true))
    socket.once('error', () => done(false))
    socket.once('timeout', () => done(false))
  })
}

function canReachDatabase({ force = false }: { force?: boolean } = {}): Promise<boolean> {
  if (isPayloadDisabled()) return Promise.resolve(false)

  const endpoint = getDatabaseEndpoint()
  if (!endpoint) return Promise.resolve(false)

  const endpointKey = getEndpointKey(endpoint)
  const now = Date.now()

  if (
    !force &&
    dbReachabilityCache.endpointKey === endpointKey &&
    now - dbReachabilityCache.checkedAt < DB_REACHABILITY_CACHE_MS
  ) {
    return Promise.resolve(dbReachabilityCache.reachable)
  }

  if (!force && dbReachabilityPromise) return dbReachabilityPromise

  dbReachabilityPromise = probeDatabase(endpoint)
    .then((reachable) => {
      dbReachabilityCache = {
        endpointKey,
        checkedAt: Date.now(),
        reachable,
      }
      return reachable
    })
    .finally(() => {
      dbReachabilityPromise = null
    })

  return dbReachabilityPromise
}

export async function isPayloadAvailable(): Promise<boolean> {
  return canReachDatabase()
}

export const getPayloadClient = async () => {
  if (!payloadClientPromise) {
    const [{ getPayload }, { default: configPromise }] = await Promise.all([
      import('payload'),
      import('@payload-config'),
    ])
    payloadClientPromise = getPayload({ config: configPromise })
    payloadClientPromise.catch(() => {
      payloadClientPromise = null
    })
  }
  return payloadClientPromise
}

export const getOptionalPayloadClient = async (
  options: { forceCheck?: boolean; allowPublicReadDisabled?: boolean } = {},
) => {
  try {
    if (!options.allowPublicReadDisabled && !canReadPayloadFromPublicPages()) {
      return null
    }
    const reachable = await canReachDatabase({ force: options.forceCheck })
    if (!reachable) return null
    return await getPayloadClient()
  } catch {
    return null
  }
}
