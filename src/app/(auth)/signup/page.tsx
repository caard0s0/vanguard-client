'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { createUser } from '@/app/api/routes'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export interface UserSignUp {
  username: string
  password: string
  full_name: string
  email: string
}

export default function SignUp() {
  const router = useRouter()
  const [user, setUser] = useState<UserSignUp>({
    username: '',
    password: '',
    full_name: '',
    email: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await createUser(user)

      router.push('/signin')
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
        <h1 className="text-xl text-white">Sign Up Form</h1>
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
            <div>
              <label className="block text-sm text-white opacity-80">
                Enter your Full Name
              </label>
              <input
                className="border-b-2 border-[#78777f] bg-transparent py-2 text-base outline-0 focus:border-[#00ffff] focus:transition-all"
                type="text"
                name="full_name"
                value={user.full_name}
                onChange={handleChange}
                placeholder="Enter your Full Name"
                autoComplete="off"
                spellCheck="false"
                required
                size={42}
                minLength={4}
                maxLength={256}
              />
            </div>
            <div>
              <label className="block text-sm text-white opacity-80">
                Enter your Email
              </label>
              <input
                className="border-b-2 border-[#78777f] bg-transparent py-2 text-base outline-0 focus:border-[#00ffff] focus:transition-all"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your Email"
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
              Create User
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
