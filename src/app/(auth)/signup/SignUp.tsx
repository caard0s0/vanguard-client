'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { createUser } from '@/api/routes'
import { useRouter } from 'next/navigation'
import { FormHeader } from '@/components/Form/FormHeader'
import { Form } from '@/components/Form'

export interface UserSignUp {
  username: string
  password: string
  full_name: string
  email: string
}

export function SignUp() {
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
      <FormHeader text="Sign Up Form" />

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
          <Form.Input
            handleChange={handleChange}
            inputName="full_name"
            inputValue={user.full_name}
            inputType="text"
            text="Enter your Full Name"
          />
          <Form.Input
            handleChange={handleChange}
            inputName="email"
            inputValue={user.email}
            inputType="text"
            text="Enter your Email"
          />
          <Form.Button text="Create User" />
        </Form.Root>
      </div>
    </div>
  )
}
