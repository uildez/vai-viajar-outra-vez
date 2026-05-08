import path from 'path'
import fs from 'fs'

const ALLOWED_KEYS = ['instagram', 'youtube', 'facebook', 'tiktok']
const DEFAULTS = { instagram: '123k', youtube: '+4', facebook: '0', tiktok: '0' }

async function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN
  if (!url || !token) return null
  try {
    const { Redis } = await import('@upstash/redis')
    return new Redis({ url, token })
  } catch (e) {
    console.error('[social] Redis init error:', e.message)
    return null
  }
}

async function readData() {
  const redis = await getRedis()
  if (redis) {
    try {
      const data = await redis.hgetall('social')
      return data && Object.keys(data).length > 0 ? data : DEFAULTS
    } catch (e) {
      console.error('[social] Redis read error:', e.message)
      return DEFAULTS
    }
  }
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'social.json'), 'utf-8'))
  } catch {
    return DEFAULTS
  }
}

async function writeData(fields) {
  const redis = await getRedis()
  if (redis) {
    const updates = {}
    for (const key of ALLOWED_KEYS) {
      if (fields[key] !== undefined && fields[key] !== '') updates[key] = fields[key]
    }
    if (Object.keys(updates).length > 0) {
      await redis.hset('social', updates)
    }
    return
  }

  if (process.env.NODE_ENV === 'production') {
    throw new Error('Redis não configurado. Adicione UPSTASH_REDIS_REST_URL e UPSTASH_REDIS_REST_TOKEN nas variáveis de ambiente do Vercel.')
  }

  const dataPath = path.join(process.cwd(), 'data', 'social.json')
  const current = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
  const updated = { ...current }
  for (const key of ALLOWED_KEYS) {
    if (fields[key] !== undefined && fields[key] !== '') updated[key] = fields[key]
  }
  fs.writeFileSync(dataPath, JSON.stringify(updated, null, 2))
}

export async function GET() {
  try {
    return Response.json(await readData())
  } catch {
    return Response.json(DEFAULTS)
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { password, ...fields } = body
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

    if (password !== adminPassword) {
      return Response.json({ error: 'Senha incorreta' }, { status: 401 })
    }

    await writeData(fields)
    return Response.json({ success: true })
  } catch (e) {
    console.error('[social] POST error:', e.message)
    return Response.json({ error: e.message || 'Erro interno' }, { status: 500 })
  }
}
