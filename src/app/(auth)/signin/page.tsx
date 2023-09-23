'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { loginUser } from '@/app/api/routes'

export default function SignUp() {
  const router = useRouter()
  const [user, setUser] = useState({
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

      router.push('http://localhost:3000/currency')
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

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
