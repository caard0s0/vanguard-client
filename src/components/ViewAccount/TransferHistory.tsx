import { listTransfers } from '@/api/routes'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useFormatter, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

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
  const [search, setSearch] = useState('')
  const transfersOrderedTopBottom = [...transfers].sort((a, b) => b.id - a.id)

  useEffect(() => {
    ;(async () => {
      const transferData = await listTransfers()
      setTransfers(transferData)
    })()
  }, [])

  const filteredTransfers =
    search.length > 0
      ? transfersOrderedTopBottom.filter(
          (transfer) =>
            transfer.from_account_owner.includes(search) ||
            transfer.to_account_owner.includes(search),
        )
      : []

  const viewAccountContent = useTranslations('view_account')

  return (
    <>
      <h2 className="mb-2 mt-16 text-xl font-bold text-black">
        {viewAccountContent('history')}
      </h2>
      <div className="mb-6 mt-3 flex items-center gap-3 rounded-2xl bg-gray-100 p-2">
        <MagnifyingGlass size={18} />
        <input
          className="bg-gray-100 text-sm placeholder-black"
          name="search"
          type="text"
          placeholder={viewAccountContent('search')}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      {search.length > 0 ? (
        <ul>
          {filteredTransfers.map((transfer) => {
            return (
              <div
                id="transfer-history"
                key={transfer.id}
                className="my-2 border-b-2 border-gray-200 bg-white py-3"
              >
                <div>
                  <div className="flex items-center justify-between">
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
        </ul>
      ) : (
        <ul>
          {transfersOrderedTopBottom.map((transfer) => {
            return (
              <div
                id="transfer-history"
                key={transfer.id}
                className="my-2 border-b-2 border-gray-200 bg-white py-3"
              >
                <div>
                  <div className="flex items-center justify-between">
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
        </ul>
      )}
    </>
  )
}
