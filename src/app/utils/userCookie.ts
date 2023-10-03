'use server'

import { cookies } from 'next/headers'

export const userCookie = async () => {
  const userCookie = cookies().get('accessToken')?.value
  return userCookie
}
