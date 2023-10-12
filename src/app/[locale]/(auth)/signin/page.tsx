import { Metadata } from 'next'
import { SignIn } from './SignIn'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function Page() {
  return (
    <>
      <SignIn />
    </>
  )
}
