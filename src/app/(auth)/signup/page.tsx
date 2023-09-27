'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { createUser } from '@/app/api/routes'
import { useRouter } from 'next/navigation'

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

      router.push('http://localhost:3000/signin')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Enter your password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Enter your full name</label>
          <input
            type="name"
            name="full_name"
            value={user.full_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Enter your email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
