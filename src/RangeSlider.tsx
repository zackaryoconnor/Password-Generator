import React from 'react'

type RangeSliderProps = {
  id?: string
  min?: number
  max?: number
  value: number
  step?: number
  onChange: (value: number) => void
  label?: string
  className?: string
}

export default function RangeSlider({
  id,
  min = 8,
  max = 32,
  value,
  step = 1,
  onChange,
  label,
  className,
}: RangeSliderProps) {
  const handleRangeSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value))
  }

  return (
    <div className={className}>
      {label ? <label htmlFor={id}>{label}</label> : <></>}
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleRangeSlider}
      />
      <label>{value}</label>
    </div>
  )
}
