'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import { createTransfer } from '@/app/api/routes'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export interface UserTransfer {
  from_account_id: number
  to_account_id: number
  amount: number
  currency: string
}

export default function Transfer() {
  const router = useRouter()
  const [transfer, setTransfer] = useState<UserTransfer>({
    from_account_id: 0,
    to_account_id: 0,
    amount: 0,
    currency: 'BRL',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, valueAsNumber } = e.target
    setTransfer({ ...transfer, [name]: valueAsNumber })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await createTransfer(transfer)

      router.push('/accounts')
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
        <h1 className="text-xl text-white">Transfer Form</h1>
      </header>

      <main>
        <div className="mt-5 bg-[#1c2026] p-10">
          <form
            className=" flex flex-col gap-6 text-white"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm text-white opacity-80">
                Enter your ID
              </label>
              <input
                className="min-w-full border-b-2 border-[#78777f] bg-transparent py-2 text-base outline-0 focus:border-[#00ffff] focus:transition-all"
                type="number"
                name="from_account_id"
                value={transfer.from_account_id}
                onChange={handleChange}
                placeholder="Enter your ID"
                autoComplete="off"
                spellCheck="false"
                required
                autoFocus
                size={42}
                maxLength={256}
              />
            </div>
            <div>
              <label className="block text-sm text-white opacity-80">
                Enter the recipient&apos;s ID
              </label>
              <input
                className="min-w-full border-b-2 border-[#78777f] bg-transparent py-2 text-base outline-0 focus:border-[#00ffff] focus:transition-all"
                type="number"
                name="to_account_id"
                value={transfer.to_account_id}
                onChange={handleChange}
                placeholder="Enter the recipient's ID"
                autoComplete="off"
                spellCheck="false"
                required
                size={42}
                maxLength={256}
              />
            </div>
            <div>
              <label className="block text-sm text-white opacity-80">
                Enter the Amount
              </label>
              <input
                className="min-w-full border-b-2 border-[#78777f] bg-transparent py-2 text-base outline-0 focus:border-[#00ffff] focus:transition-all"
                type="number"
                name="amount"
                value={transfer.amount}
                onChange={handleChange}
                placeholder="Enter the Amount"
                autoComplete="off"
                spellCheck="false"
                required
                size={42}
                maxLength={256}
              />
            </div>
            <div>
              <label className="block text-sm text-white opacity-80">
                Enter your country&apos;s currency
              </label>
              <input
                className="border-b-2 border-[#78777f] bg-transparent py-2 text-base outline-0 focus:border-[#00ffff] focus:transition-all"
                type="text"
                name="currency"
                value={transfer.currency}
                onChange={handleChange}
                placeholder="Enter your country's currency"
                autoComplete="off"
                spellCheck="false"
                required
                size={42}
                maxLength={256}
              />
            </div>

            <button
              className="mt-2 min-w-full rounded bg-gray-500 px-4 py-2 text-black transition-all hover:bg-gray-400"
              type="submit"
            >
              Transfer
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
