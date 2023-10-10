'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { createTransfer } from '@/api/routes'
import { useRouter } from 'next/navigation'
import { FormHeader } from '@/components/Form/FormHeader'
import { Form } from '@/components/Form'

export interface UserTransfer {
  from_account_id: number
  to_account_id: number
  amount: number
  currency: string
}

interface SendTransferProps {
  id: number
  currency: string
}

export function SendTransfer({ id, currency }: SendTransferProps) {
  const router = useRouter()
  const [transfer, setTransfer] = useState<UserTransfer>({
    from_account_id: id,
    to_account_id: 0,
    amount: 0,
    currency,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, valueAsNumber } = e.target
    setTransfer({ ...transfer, [name]: valueAsNumber })
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
    <div className="flex h-screen flex-col items-center bg-[linear-gradient(215deg,_#171d26_15%,_#000_85%)]">
      <FormHeader text="Transfer Form" />

      <div className="mt-5 bg-[#1c2026] p-10">
        <Form.Root handleSubmit={handleSubmit}>
          <Form.Input
            handleChange={handleChange}
            inputName="to_account_id"
            inputValue={transfer.to_account_id}
            inputType="number"
            text="Enter the recipient's ID"
          />
          <Form.Input
            handleChange={handleChange}
            inputName="amount"
            inputValue={transfer.amount}
            inputType="number"
            text="Enter the Amount"
          />

          <Form.Button text="Send Transfer" />
        </Form.Root>
      </div>
    </div>
  )
}
