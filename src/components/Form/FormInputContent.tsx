import { ChangeEvent } from 'react'

interface FormInputContentProps {
  text: string
  inputType: string
  inputName: string
  inputValue: string | number
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function FormInputContent({
  text,
  handleChange,
  inputType,
  inputName,
  inputValue,
}: FormInputContentProps) {
  return (
    <div>
      <label className="block text-sm text-white opacity-80">{text}</label>
      <input
        className="min-w-full border-b-2 border-[#78777f] bg-transparent py-2 text-base outline-0 focus:border-[#00ffff] focus:transition-all"
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={handleChange}
        placeholder={text}
        autoComplete="off"
        spellCheck="false"
        required
        size={42}
        maxLength={256}
      />
    </div>
  )
}
