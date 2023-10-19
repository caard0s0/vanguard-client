'use client'

import { deleteUserCookie, getUserCookie } from '@/utils/userCookie'
import {
  Eye,
  EyeClosed,
  DotOutline,
  DotsThreeOutline,
} from '@phosphor-icons/react'
import axios from 'axios'
import { LogOut } from 'lucide-react'
import { useFormatter, useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

interface Transfer {
  id: number
  from_account_owner: string
  to_account_owner: string
  amount: number
  created_at: string
}

export interface ViewAccountProps {
  id: number
  balance: number
  owner: string
  currency: string
}

export function ViewAccount({
  id,
  balance,
  owner,
  currency,
}: ViewAccountProps) {
  const [toggleHideBalance, setToggleHideBalance] = useState(true)
  const [transfers, setTransfers] = useState<Transfer[]>([])
  const format = useFormatter()

  useEffect(() => {
    ;(async function () {
      const accessToken = await getUserCookie()

      const { data } = await axios.get(
        `${process.env.HTTP_SERVER_ADDRESS}/transfers?page_id=1&page_size=5`,
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
    <div className="flex h-screen max-w-md flex-col overflow-scroll bg-[linear-gradient(215deg,_#171d26_15%,_#000_85%)]">
      <div className="mx-12">
        <header className="mt-10 flex items-center justify-between">
          {toggleHideBalance ? (
            <Eye
              size={32}
              className="cursor-pointer"
              color="white"
              onClick={() => setToggleHideBalance(false)}
            />
          ) : (
            <EyeClosed
              size={32}
              className="cursor-pointer"
              color="white"
              onClick={() => setToggleHideBalance(true)}
            />
          )}
          <h1 className="text-4xl font-semibold text-white">UAB</h1>
          <a onClick={() => deleteUserCookie()} href="/signin">
            <LogOut className="cursor-pointer" size={32} color="white" />
          </a>
        </header>

        <div className="mb-8 mt-16 rounded-3xl bg-white p-5">
          <div className="mt-2 flex items-center">
            <DotOutline size={38} weight="fill" className="mt-1" />
            <strong className="text-xl text-black">{id}</strong>
          </div>

          <div className="ml-4 mt-20">
            <h2 className="text-xl font-bold text-gray-950">
              {viewAccountContent('balance')}
            </h2>
            {toggleHideBalance ? (
              <strong className="mt-3 block text-3xl text-black">
                {format.number(balance, {
                  style: 'currency',
                  currency,
                })}
              </strong>
            ) : (
              <DotsThreeOutline size={48} weight="fill" />
            )}

            <strong className="mt-7 block font-extrabold text-gray-800">
              {owner}
            </strong>
          </div>
          <a
            href="/send_transfer"
            className="mt-10 block min-w-full rounded-2xl bg-black p-6 text-center text-white hover:bg-gray-950"
          >
            {viewAccountContent('send_money')}
          </a>
        </div>

        <div>
          <h2 className="mb-1 text-xl font-bold text-white">
            {viewAccountContent('history')}
          </h2>
          {transfers.map((transfer) => {
            return (
              <div
                key={transfer.id}
                className="my-3 rounded-3xl bg-white px-6 py-3"
              >
                <div>
                  <div className="flex justify-between">
                    <span className="text-xs font-bold uppercase text-black">
                      Transfer sent
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
                      {transfer.to_account_owner}
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
        </div>
      </div>
    </div>
  )
}
