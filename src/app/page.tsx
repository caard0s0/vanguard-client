import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/account">Account</Link>
      <Link href="/signin">Signin</Link>
      <Link href="/signup">Signup</Link>
    </div>
  )
}
