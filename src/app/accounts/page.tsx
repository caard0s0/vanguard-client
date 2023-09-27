import { listAccounts } from '../api/routes'

export default async function Accounts() {
  const accountData = await listAccounts()

  return <div>{<pre>{JSON.stringify(accountData, null, 2)}</pre>}</div>
}
