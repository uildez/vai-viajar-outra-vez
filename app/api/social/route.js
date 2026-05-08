import path from 'path'
import fs from 'fs'

const dataPath = path.join(process.cwd(), 'data', 'social.json')

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    return Response.json(data)
  } catch {
    return Response.json({ instagram: '123k' })
  }
}

export async function POST(request) {
  try {
    const { password, instagram } = await request.json()
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

    if (password !== adminPassword) {
      return Response.json({ error: 'Senha incorreta' }, { status: 401 })
    }

    const current = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
    const updated = { ...current, ...(instagram !== undefined && { instagram }) }
    fs.writeFileSync(dataPath, JSON.stringify(updated, null, 2))

    return Response.json({ success: true })
  } catch {
    return Response.json({ error: 'Erro interno' }, { status: 500 })
  }
}
