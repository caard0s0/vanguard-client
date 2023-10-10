'use client'

import { User2, Eye, Dot } from 'lucide-react'

export interface ViewAccountProps {
  id: number
  balance: number
  owner: string
}

export function ViewAccount({ id, balance, owner }: ViewAccountProps) {
  return (
    <div className="flex h-screen flex-col overflow-scroll bg-[linear-gradient(215deg,_#171d26_15%,_#000_85%)]">
      <div className="mx-12">
        <header className="mt-10 flex items-center justify-between">
          <Eye size={30} color="white" />
          <h1 className="text-4xl font-semibold text-white">UAB</h1>
          <User2 size={30} color="white" />
        </header>

        <div className="mb-8 mt-16 rounded-3xl bg-white p-5">
          <div className="mt-2 flex items-center">
            <Dot size={40} className="mt-1" color="black" />
            <strong className="text-xl text-black">{id}</strong>
          </div>

          <div className="ml-4 mt-20">
            <h2 className="text-xl font-bold text-gray-950">Balance</h2>
            <strong className="mt-3 block text-3xl text-black">
              $ {balance},00
            </strong>
            <strong className="mt-7 block font-extrabold text-gray-800">
              {owner}
            </strong>
          </div>
          <a
            href="/send_transfer"
            className="mt-10 block min-w-full rounded-2xl bg-black p-6 text-center text-white hover:bg-gray-950"
          >
            Send Money
          </a>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Transactions</h2>
          <div className="my-3 rounded-3xl bg-white px-6 py-3">
            <div className="flex items-center justify-between">
              <strong className="text-lg">João Pedro</strong>
              <strong className="text-lg">$ 5.99</strong>
            </div>
            <span className="text-sm">20 FEV 2023</span>
          </div>
        </div>
      </div>
    </div>
  )
}
