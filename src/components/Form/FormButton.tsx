interface FormButtonProps {
  text: string
}

export function FormButton({ text }: FormButtonProps) {
  return (
    <button
      className="mt-2 min-w-full rounded bg-gray-500 px-4 py-2 text-black transition-all hover:bg-gray-400"
      type="submit"
    >
      {text}
    </button>
  )
}
