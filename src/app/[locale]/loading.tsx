'use client'

import { CircleNotch } from '@phosphor-icons/react'

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[linear-gradient(215deg,_#171d26_15%,_#000_85%)]">
      <CircleNotch
        className="animate-spin"
        color="white"
        size={60}
        weight="light"
      />
    </div>
  )
}
