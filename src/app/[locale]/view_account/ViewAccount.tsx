'use client'

import { TransferHistory } from '@/components/ViewAccount/TransferHistory'
import { deleteUserCookie } from '@/utils/userCookie'
import {
  Eye,
  EyeClosed,
  DotOutline,
  DotsThreeOutline,
} from '@phosphor-icons/react'
import { LogOut, ArrowLeftRight } from 'lucide-react'
import { useFormatter, useTranslations } from 'next-intl'
import { useState } from 'react'

export interface ViewAccountProps {
  id: number
  owner: string
  balance: number
  currency: string
}

export function ViewAccount({
  id,
  balance,
  owner,
  currency,
}: ViewAccountProps) {
  const [toggleHideBalance, setToggleHideBalance] = useState(true)
  const format = useFormatter()

  const viewAccountContent = useTranslations('view_account')

  return (
    <div className="flex h-screen max-w-md flex-col overflow-scroll bg-dark-blue">
      <div>
        <header className="mx-10 mt-10 flex items-center justify-between">
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
          <a onClick={async () => await deleteUserCookie()} href="/signin">
            <LogOut className="cursor-pointer" size={32} color="white" />
          </a>
        </header>

        <div className="mt-16 bg-white p-10">
          <div className="flex items-center">
            <DotOutline size={38} weight="fill" />
            <strong className="text-xl text-black">{id}</strong>
          </div>

          <div className="mt-20">
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
            className="mt-10 flex justify-center gap-2 rounded-2xl bg-black p-6 text-white hover:bg-gray-950"
          >
            <ArrowLeftRight color="green" className="mt-[2px]" />
            {viewAccountContent('send_money')}
          </a>
          <TransferHistory owner={owner} currency={currency} />
          <div className="mt-14"></div>
        </div>
      </div>
    </div>
  )
}
