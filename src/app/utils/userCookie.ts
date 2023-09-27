'use server'

import { cookies } from 'next/headers'

export const userCookie = async () => {
  const userCookie = cookies().get('token')?.value
  return userCookie
}
