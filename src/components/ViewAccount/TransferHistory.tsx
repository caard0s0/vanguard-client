import { getUserCookie } from '@/utils/userCookie'
import axios from 'axios'
import { useFormatter, useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

interface TransferHistoryProps {
  owner: string
  currency: string
}

interface Transfer {
  id: number
  from_account_owner: string
  to_account_owner: string
  amount: number
  created_at: string
}

export function TransferHistory({ owner, currency }: TransferHistoryProps) {
  const format = useFormatter()
  const [transfers, setTransfers] = useState<Transfer[]>([])
  const transfersOrderedTopBottom = [...transfers].sort((a, b) => b.id - a.id)

  useEffect(() => {
    ;(async function () {
      const accessToken = await getUserCookie()

      const { data } = await axios.get(
        `${process.env.HTTP_SERVER_ADDRESS}/transfers?page_id=1&page_size=50`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )

      setTransfers(data)
    })()
  }, [])

  const viewAccountContent = useTranslations('view_account')

  return (
    <>
      {transfersOrderedTopBottom.map((transfer) => {
        return (
          <div
            id="transfer-history"
            key={transfer.id}
            className="my-3 rounded-3xl bg-white px-6 py-3"
          >
            <div>
              <div className="flex justify-between">
                <span className="text-xs font-bold uppercase text-black">
                  {transfer.from_account_owner === owner
                    ? viewAccountContent('transfer_sent')
                    : viewAccountContent('transfer_received')}
                </span>
                <span className="text-sm uppercase text-gray-900">
                  {format.dateTime(new Date(transfer.created_at), {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-md uppercase text-gray-900">
                  {transfer.to_account_owner === owner
                    ? transfer.from_account_owner
                    : transfer.to_account_owner}
                </span>
                <span className="text-lg text-gray-900">
                  {format.number(transfer.amount, {
                    style: 'currency',
                    currency,
                  })}
                </span>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
