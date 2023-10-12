'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { listAccounts, loginUser } from '@/api/routes'
import { FormHeader } from '@/components/Form/FormHeader'
import { Form } from '@/components/Form'

export interface UserSignIn {
  username: string
  password: string
}

export function SignIn() {
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
        router.push('/view_account')
      } else {
        router.push('/create_account')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex h-screen flex-col items-center bg-[linear-gradient(215deg,_#171d26_15%,_#000_85%)]">
      <FormHeader text="Sign In Form" />

      <div className="mt-5 bg-[#1c2026] p-10">
        <Form.Root handleSubmit={handleSubmit}>
          <Form.Input
            handleChange={handleChange}
            inputName="username"
            inputValue={user.username}
            inputType="text"
            text="Enter your Username"
          />
          <Form.Input
            handleChange={handleChange}
            inputName="password"
            inputValue={user.password}
            inputType="password"
            text="Enter your Password"
          />
          <Form.Button text="Login User" />
        </Form.Root>
      </div>
    </div>
  )
}
