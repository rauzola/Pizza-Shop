import { api } from '@/lib/axios'

export interface UpadateProfileBody {
  name: string
  description: string | null
}

export async function upadateProfile({
  name,
  description,
}: UpadateProfileBody) {
  await api.put('/profile', { name, description })
}
