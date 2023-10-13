import { X } from 'lucide-react'
import Link from 'next/link'

interface FormCloseProps {
  link: string
}

export function FormClose({ link }: FormCloseProps) {
  return (
    <div className="absolute left-5 top-5">
      <Link href={link}>
        <X className="cursor-pointer" size={33} color="white" />
      </Link>
    </div>
  )
}
