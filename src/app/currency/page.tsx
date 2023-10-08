'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { createAccount } from '@/api/routes'
import Image from 'next/image'

export interface Currency {
  currency: string
}

export default function Currency() {
  const router = useRouter()
  const [currency, setCurrency] = useState<Currency>({
    currency: '',
  })

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
    <div className="flex h-screen flex-col items-center bg-[linear-gradient(215deg,_#171d26_15%,_#000_85%)]">
      <header className="mt-4 grid place-items-center">
        <Image
          src="/united_atomic_bank_logo_white.svg"
          alt="United Atomic Bank Logo"
          width={90}
          height={90}
        />
        <h1 className="text-xl text-white">Create Account&apos;s Form</h1>
      </header>

      <main>
        <div className="mt-5 bg-[#1c2026] p-10">
          <form
            className=" flex flex-col gap-6 text-white"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm text-white opacity-80">
                Choose your country&apos;s currency
              </label>
              <select
                value={currency.currency}
                onChange={handleChange}
                name="currency"
                className="min-w-full bg-transparent py-2 outline-0"
                required
              >
                <option className="bg-[#1c2026]" value="">
                  --Please choose an option--
                </option>
                <option className="bg-[#1c2026]" value="BRL">
                  BRL
                </option>
                <option className="bg-[#1c2026]" value="USD">
                  USD
                </option>
                <option className="bg-[#1c2026]" value="EUR">
                  EUR
                </option>
                <option className="bg-[#1c2026]" value="CAD">
                  CAD
                </option>
              </select>
            </div>

            <button
              className="mt-2 min-w-full rounded bg-gray-500 px-4 py-2 text-black transition-all hover:bg-gray-400"
              type="submit"
            >
              Create Account
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
