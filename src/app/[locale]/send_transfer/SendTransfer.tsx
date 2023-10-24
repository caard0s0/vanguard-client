'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { createTransfer } from '@/api/routes'
import { useRouter } from 'next/navigation'
import { FormHeader } from '@/components/Form/FormHeader'
import { Form } from '@/components/Form'
import { FormClose } from '@/components/Form/FormClose'
import { useTranslations } from 'next-intl'

export interface UserTransfer {
  from_account_id: number
  from_account_owner: string
  to_account_id: number
  to_account_owner: string
  amount: number
  currency: string
}

interface SendTransferProps {
  id: number
  owner: string
  currency: string
}

export function SendTransfer({ id, owner, currency }: SendTransferProps) {
  const router = useRouter()
  const [transfer, setTransfer] = useState<UserTransfer>({
    from_account_id: id,
    from_account_owner: owner,
    to_account_id: 0,
    to_account_owner: '',
    amount: 0,
    currency,
  })

  const headerFormContent = useTranslations('header_form')
  const inputFormContent = useTranslations('input_form')
  const buttonFormContent = useTranslations('button_form')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, valueAsNumber, value } = e.target
    setTransfer({
      ...transfer,
      [name]: isNaN(valueAsNumber) ? value : valueAsNumber,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await createTransfer(transfer)

      router.push('/view_account')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="bg-dark-blue relative flex h-screen flex-col items-center">
      <FormClose link="/view_account" />

      <FormHeader text={headerFormContent('transfer_form')} />

      <div className="bg-form mt-5 p-10">
        <Form.Root handleSubmit={handleSubmit}>
          <Form.Input
            handleChange={handleChange}
            inputName="to_account_id"
            inputValue={transfer.to_account_id}
            inputType="number"
            text={inputFormContent("recipient's_id")}
          />
          <Form.Input
            handleChange={handleChange}
            inputName="to_account_owner"
            inputValue={transfer.to_account_owner}
            inputType="text"
            text={inputFormContent("recipient's_owner")}
          />
          <Form.Input
            handleChange={handleChange}
            inputName="amount"
            inputValue={transfer.amount}
            inputType="number"
            text={inputFormContent('amount')}
          />

          <Form.Button text={buttonFormContent('send_transfer')} />
        </Form.Root>
      </div>
    </div>
  )
}
