'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { createUser } from '@/api/routes'
import { useRouter } from 'next/navigation'
import { FormHeader } from '@/components/Form/FormHeader'
import { Form } from '@/components/Form'
import { FormClose } from '@/components/Form/FormClose'
import { useTranslations } from 'next-intl'

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

  const headerFormContent = useTranslations('header_form')
  const inputFormContent = useTranslations('input_form')
  const buttonFormContent = useTranslations('button_form')

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
    <div className="relative flex h-screen flex-col items-center bg-dark-blue">
      <FormClose link="/" />

      <FormHeader text={headerFormContent('open_account')} />

      <div className="mt-5 bg-form p-10">
        <Form.Root handleSubmit={handleSubmit}>
          <Form.Input
            handleChange={handleChange}
            inputName="username"
            inputValue={user.username}
            inputType="text"
            text={inputFormContent('username')}
          />
          <Form.Input
            handleChange={handleChange}
            inputName="password"
            inputValue={user.password}
            inputType="password"
            text={inputFormContent('password')}
          />
          <Form.Input
            handleChange={handleChange}
            inputName="full_name"
            inputValue={user.full_name}
            inputType="text"
            text={inputFormContent('full_name')}
          />
          <Form.Input
            handleChange={handleChange}
            inputName="email"
            inputValue={user.email}
            inputType="text"
            text={inputFormContent('email')}
          />

          <Form.Button text={buttonFormContent('create_user')} />
        </Form.Root>
      </div>
    </div>
  )
}
