'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import { createAccount } from '@/api/routes'
import { FormHeader } from '@/components/Form/FormHeader'
import { Form } from '@/components/Form'
import { FormButton } from '@/components/Form/FormButton'

export interface UserCurrency {
  currency: string
}

export function CreateAccount() {
  const router = useRouter()
  const [userCurrency, setUserCurrency] = useState<UserCurrency>({
    currency: '',
  })

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
    <div className="flex h-screen flex-col items-center bg-[linear-gradient(215deg,_#171d26_15%,_#000_85%)]">
      <FormHeader text="Create Account's Form" />

      <div className="mt-5 bg-[#1c2026] p-10">
        <Form.Root handleSubmit={handleSubmit}>
          <Form.Select
            handleChange={handleChange}
            selectName="currency"
            selectValue={userCurrency.currency}
            text="Choose your country's currency"
          />
          <FormButton text="Create Account" />
        </Form.Root>
      </div>
    </div>
  )
}
