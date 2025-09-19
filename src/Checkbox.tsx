import React from 'react'

type CheckboxProps = {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
}

export default function Checkbox({
  id,
  checked,
  onChange,
  label,
}: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  return (
    <div>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  )
}
