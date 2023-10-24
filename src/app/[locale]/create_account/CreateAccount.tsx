'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { createAccount } from '@/api/routes'
import { FormHeader } from '@/components/Form/FormHeader'
import { Form } from '@/components/Form'
import { FormButton } from '@/components/Form/FormButton'
import { FormClose } from '@/components/Form/FormClose'
import { useTranslations } from 'next-intl'

export interface UserCurrency {
  currency: string
}

export function CreateAccount() {
  const router = useRouter()
  const [userCurrency, setUserCurrency] = useState<UserCurrency>({
    currency: '',
  })

  const headerFormContent = useTranslations('header_form')
  const selectFormContent = useTranslations('select_form')
  const buttonFormContent = useTranslations('button_form')

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setUserCurrency({ ...userCurrency, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const accountData = await createAccount(userCurrency)
      if (accountData) {
        router.push('/view_account')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="relative flex h-screen flex-col items-center bg-dark-blue">
      <FormClose link="/" />

      <FormHeader text={headerFormContent('create_account')} />

      <div className="mt-5 bg-form p-10">
        <Form.Root handleSubmit={handleSubmit}>
          <Form.Select
            handleChange={handleChange}
            selectName="currency"
            selectValue={userCurrency.currency}
            text={selectFormContent('currency')}
          />
          <FormButton text={buttonFormContent('create_account')} />
        </Form.Root>
      </div>
    </div>
  )
}
