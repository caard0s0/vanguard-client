interface FormButtonProps {
  text: string
}

export function FormButton({ text }: FormButtonProps) {
  return (
    <button
      className="mt-2 min-w-full rounded-full bg-white px-4 py-2 text-black transition-all hover:bg-gray-300"
      type="submit"
    >
      {text}
    </button>
  )
}
