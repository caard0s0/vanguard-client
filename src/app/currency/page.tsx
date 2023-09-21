'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

export default function Currency() {
  const router = useRouter()
  const token = window.localStorage.getItem('token')
  const [currency, setCurrency] = useState({
    currency: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCurrency({ ...currency, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { data } = await axios.post(
        'http://localhost:8080/accounts',
        currency,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      router.push('http://localhost:3000/account')
      return data
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your currency</label>
          <input
            type="text"
            name="currency"
            value={currency.currency}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
