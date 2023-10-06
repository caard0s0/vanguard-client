import axios from 'axios'
import { userCookie } from '../utils/userCookie'
import { UserSignIn } from '../(auth)/signin/page'
import { UserSignUp } from '../(auth)/signup/page'
import { UserTransfer } from '../transfer/page'
import { Currency } from '../currency/page'

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

export const createAccount = async (currency: Currency) => {
  const accessToken = await userCookie()

  const response = await axios.post(
    `${process.env.HTTP_SERVER_ADDRESS}/accounts`,
    currency,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  if (response.status === 200) return response.data

  return undefined
}

export const listAccounts = async () => {
  const accessToken = await userCookie()

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
  const accessToken = await userCookie()

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
