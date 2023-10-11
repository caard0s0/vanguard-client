import Image from 'next/image'

interface FormHeaderProps {
  text: string
}

export function FormHeader({ text }: FormHeaderProps) {
  return (
    <div className="mt-4 grid place-items-center">
      <Image
        priority={true}
        src="/united_atomic_bank_logo_white.svg"
        alt="United Atomic Bank Logo"
        width={90}
        height={90}
      />
      <h1 className="text-xl text-white">{text}</h1>
    </div>
  )
}
