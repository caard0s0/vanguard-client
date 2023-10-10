import { Metadata } from 'next'
import { SendTransfer } from './SendTransfer'
import { listAccounts } from '@/api/routes'

export const metadata: Metadata = {
  title: 'Send Transfer',
}

export default async function Page() {
  const [accountData] = await listAccounts()

  return (
    <>
      <SendTransfer id={accountData.id} currency={accountData.currency} />
    </>
  )
}
