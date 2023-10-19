import axios from 'axios'
import { getUserCookie } from '@/utils/userCookie'
import { UserSignIn } from '@/app/[locale]/(auth)/signin/SignIn'
import { UserSignUp } from '@/app/[locale]/(auth)/signup/SignUp'
import { UserTransfer } from '@/app/[locale]/send_transfer/SendTransfer'
import { UserCurrency } from '@/app/[locale]/create_account/CreateAccount'

export const createUser = async (user: UserSignUp) => {
  const { data } = await axios.post(
    `${process.env.HTTP_SERVER_ADDRESS}/users`,
    user,
  )

  return data
}

export const loginUser = async (user: UserSignIn) => {
  const { data } = await axios.post(
    `${process.env.HTTP_SERVER_ADDRESS}/users/login`,
    user,
    {
      withCredentials: true,
    },
  )

  return data
}

export const createAccount = async (currency: UserCurrency) => {
  const accessToken = await getUserCookie()

  const response = await axios.post(
    `${process.env.HTTP_SERVER_ADDRESS}/accounts`,
    currency,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  if (response.status === 201) return response.data

  return undefined
}

export const listAccounts = async () => {
  const accessToken = await getUserCookie()

  const { data } = await axios.get(
    `${process.env.HTTP_SERVER_ADDRESS}/accounts?page_id=1&page_size=5`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
  if (data.length === 0) {
    return undefined
  }
  return data
}

export const createTransfer = async (transfer: UserTransfer) => {
  const accessToken = await getUserCookie()

  const { data } = await axios.post(
    `${process.env.HTTP_SERVER_ADDRESS}/transfers`,
    transfer,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  return data
}
