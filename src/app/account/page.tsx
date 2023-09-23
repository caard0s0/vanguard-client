import axios from 'axios'
import { getAccount } from '../api/routes'
import { data } from 'autoprefixer'

export default async function Account() {
  //   const token = window.localStorage.getItem('token')
  //   const id = window.localStorage.getItem('id')
  //   const { data } = await axios.post(`http://localhost:8080/accounts/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  const accountData = await getAccount()

  return (
    <div>
      <pre>{JSON.stringify(accountData, null, 2)}</pre>
    </div>
  )
}
