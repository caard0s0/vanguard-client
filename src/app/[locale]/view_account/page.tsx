import { Metadata } from 'next'
import { ViewAccount } from './ViewAccount'
import { listAccounts } from '@/api/routes'

export const metadata: Metadata = {
  title: 'View Account',
}

export default async function Page() {
  const [accountData] = await listAccounts()

  return (
    <>
      <ViewAccount
        id={accountData.id}
        balance={accountData.balance}
        owner={accountData.owner}
        currency={accountData.currency}
      />
    </>
  )
}
