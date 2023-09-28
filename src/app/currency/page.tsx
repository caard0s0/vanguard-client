'use client'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { createAccount } from '../api/routes'

export interface Currency {
  currency: string
}

export default function Currency() {
  const router = useRouter()
  const [currency, setCurrency] = useState<Currency>({
    currency: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCurrency({ ...currency, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const accountData = await createAccount(currency)
      if (accountData) {
        router.push('/accounts')
      }
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
