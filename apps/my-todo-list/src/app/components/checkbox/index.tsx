import React, { FC } from 'react'

/* eslint-disable-next-line */
export interface CheckboxProps {}

const Checkbox: FC<CheckboxProps> = (props) => {
  const { children } = props

  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">Todo</legend>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            aria-describedby="comments-description"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            id="comments"
            name="comments"
            type="checkbox"
            onClick={(e) => {
              e.stopPropagation()
            }}
          />
        </div>
        {children}
      </div>
    </fieldset>
  )
}

export default Checkbox
