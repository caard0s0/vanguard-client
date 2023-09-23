import axios from 'axios'
import { userCookie } from '../utils/userCookie'

export const createUser = async (user: any) => {
  const { data } = await axios.post('http://localhost:8080/users', user)

  return data
}

export const loginUser = async (user: any) => {
  const { data } = await axios.post('http://localhost:8080/users/login', user, {
    withCredentials: true,
  })

  return data
}

export const createAccount = async (currency: any) => {
  const accessToken = await userCookie()

  const { data } = await axios.post(
    'http://localhost:8080/accounts',
    currency,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  const id = data.id
  return id
}

// export const getAccount = async () => {
//   const token = await getCookies()
//   const id = await createAccount()

//   const { data } = await axios.get(`http://localhost:8080/accounts/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     withCredentials: true,
//   })
//   return data
// }
