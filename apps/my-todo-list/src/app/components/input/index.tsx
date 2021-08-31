import React, { InputHTMLAttributes, VFC } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
}

const Input: VFC<InputProps> = (props) => {
  const { label, id, ...rest } = props

  return (
    <div className="relative">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        id={id}
        {...rest}
      />
      <div className="absolute inset-y-0 right-0 flex py-2 pr-1.5">
        <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
          Enter
        </kbd>
      </div>
    </div>
  )
}

export default Input
