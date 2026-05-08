import path from 'path'
import fs from 'fs'

const dataPath = path.join(process.cwd(), 'data', 'social.json')

const ALLOWED_KEYS = ['instagram', 'youtube', 'facebook', 'tiktok']

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    return Response.json(data)
  } catch {
    return Response.json({ instagram: '123k', youtube: '+4', facebook: '0', tiktok: '0' })
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

    const current = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    const updated = { ...current }
    for (const key of ALLOWED_KEYS) {
      if (fields[key] !== undefined && fields[key] !== '') {
        updated[key] = fields[key]
      }
    }
    fs.writeFileSync(dataPath, JSON.stringify(updated, null, 2))

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Erro interno' }, { status: 500 })
  }
}
