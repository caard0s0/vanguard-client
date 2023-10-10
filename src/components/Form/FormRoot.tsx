import { FormEvent, ReactNode } from 'react'

interface FormRootProps {
  children: ReactNode
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function FormRoot({ children, handleSubmit }: FormRootProps) {
  return (
    <form className=" flex flex-col gap-6 text-white" onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
