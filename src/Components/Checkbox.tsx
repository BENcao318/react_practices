import React from 'react'

export const Checkbox = ({
  label,
  checked,
  onChange,
  className,
}: {
  label?: string
  checked?: boolean
  onChange?: Function
  className?: string
}) => {
  const handleChange = (e: any) => {
    onChange && onChange(e.target.checked)
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e)}
      />
      <label className="ml-2">{label}</label>
    </div>
  )
}
