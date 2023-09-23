'use client'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { createAccount } from '../api/routes'

export default function Currency() {
  const router = useRouter()
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
      await createAccount(currency)

      router.push('http://localhost:3000/account')
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
