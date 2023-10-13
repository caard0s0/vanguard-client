'use server'

import { cookies } from 'next/headers'

export const getUserCookie = async () => {
  const userCookie = cookies().get('accessToken')?.value
  return userCookie
}

export const deleteUserCookie = async () => {
  cookies().delete('accessToken')
}
