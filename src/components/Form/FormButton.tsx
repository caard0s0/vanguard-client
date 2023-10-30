import { ArrowRight } from 'lucide-react'

interface FormButtonProps {
  text: string
}

export function FormButton({ text }: FormButtonProps) {
  return (
    <button
      className="mt-2 flex min-w-full justify-center gap-2 rounded-full bg-white px-4 py-2 text-black transition-all hover:bg-gray-300"
      type="submit"
    >
      {text}
      <ArrowRight color="green" size={22} className="mt-[2px]" />
    </button>
  )
}
