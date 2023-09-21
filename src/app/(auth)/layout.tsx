import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <h1>Auth</h1>
      {children}
    </div>
  )
}
