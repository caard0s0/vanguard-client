'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { listAccounts, loginUser } from '@/api/routes'
import { FormHeader } from '@/components/Form/FormHeader'
import { Form } from '@/components/Form'
import Link from 'next/link'
import { FormClose } from '@/components/Form/FormClose'
import { useTranslations } from 'next-intl'

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

  const headerFormContent = useTranslations('header_form')
  const inputFormContent = useTranslations('input_form')
  const buttonFormContent = useTranslations('button_form')
  const linkFormContent = useTranslations('link_form')

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
    <div className="relative flex h-screen flex-col items-center bg-dark-blue">
      <FormClose link="/" />

      <FormHeader text={headerFormContent('access_account')} />

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
          <Form.Button text={buttonFormContent('login_user')} />
        </Form.Root>
      </div>

      <div className="mt-2">
        <Link
          className="text-lg font-semibold text-white underline-offset-4 transition-all hover:text-[#00ffff] hover:underline"
          href="/signup"
        >
          {linkFormContent('link_to_create_user')}
        </Link>
      </div>
    </div>
  )
}
