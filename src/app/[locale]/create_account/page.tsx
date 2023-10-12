import { Metadata } from 'next'
import { CreateAccount } from './CreateAccount'

export const metadata: Metadata = {
  title: 'Create Account',
}

export default function Page() {
  return (
    <>
      <CreateAccount />
    </>
  )
}
