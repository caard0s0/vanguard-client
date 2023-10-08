'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { listAccounts, loginUser } from '@/api/routes'
import Image from 'next/image'

export interface UserSignIn {
  username: string
  password: string
}

export default function SignIn() {
  const router = useRouter()
  const [user, setUser] = useState<UserSignIn>({
    username: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await loginUser(user)
      const accountData = await listAccounts()
      if (accountData) {
        router.push('/accounts')
      } else {
        router.push('/currency')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex h-screen flex-col items-center bg-[linear-gradient(215deg,_#171d26_15%,_#000_85%)]">
      <header className="mt-6 grid place-items-center">
        <Image
          src="/united_atomic_bank_logo_white.svg"
          alt="United Atomic Bank Logo"
          width={100}
          height={100}
        />
        <h1 className="mt-2 text-xl text-white">Sign In Form</h1>
      </header>

      <main>
        <div className="mt-5 bg-[#1c2026] p-10">
          <form
            className=" flex flex-col gap-6 text-white"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm text-white opacity-80">
                Enter your Username
              </label>
              <input
                className="border-b-2 border-[#78777f] bg-transparent py-2 text-base outline-0 focus:border-[#00ffff] focus:transition-all"
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                placeholder="Enter your Username"
                autoComplete="off"
                spellCheck="false"
                required
                autoFocus
                size={42}
                minLength={4}
                maxLength={256}
              />
            </div>
            <div>
              <label className="block text-sm text-white opacity-80">
                Enter your Password
              </label>
              <input
                className="border-b-2 border-[#78777f] bg-transparent py-2 text-base outline-0 focus:border-[#00ffff] focus:transition-all"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                autoComplete="off"
                spellCheck="false"
                required
                size={42}
                minLength={4}
                maxLength={256}
              />
            </div>

            <button
              className="mt-2 min-w-full rounded bg-gray-500 px-4 py-2 text-black transition-all hover:bg-gray-400"
              type="submit"
            >
              Login User
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
