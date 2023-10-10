import { Metadata } from 'next'
import { SignUp } from './SignUp'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Page() {
  return (
    <>
      <SignUp />
    </>
  )
}
