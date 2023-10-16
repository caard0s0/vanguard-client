import { useTranslations } from 'next-intl'
import { ChangeEvent } from 'react'

interface FormSelectContentProps {
  text: string
  selectName: string
  selectValue: string
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export function FormSelectContent({
  text,
  handleChange,
  selectName,
  selectValue,
}: FormSelectContentProps) {
  const selectFormContent = useTranslations('select_form')

  return (
    <div>
      <label className="block text-sm text-white opacity-80">{text}</label>
      <select
        name={selectName}
        onChange={handleChange}
        value={selectValue}
        className="min-w-full bg-transparent py-2 outline-0"
        required
      >
        <option className="bg-[#1c2026]" value="">
          {selectFormContent('option')}
        </option>
        <option className="bg-[#1c2026]" value="BRL">
          BRL
        </option>
        <option className="bg-[#1c2026]" value="USD">
          USD
        </option>
        <option className="bg-[#1c2026]" value="EUR">
          EUR
        </option>
        <option className="bg-[#1c2026]" value="CAD">
          CAD
        </option>
      </select>
    </div>
  )
}
