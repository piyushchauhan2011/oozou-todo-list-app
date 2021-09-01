import { Status } from '@todolist/shared'
import React, { FC, useState } from 'react'
import { UseMutateFunction } from 'react-query'

export interface CheckboxProps<T = unknown> {
  status: Status
  onChange: UseMutateFunction<T, string, void, unknown>
}

const Checkbox: FC<CheckboxProps> = (props) => {
  const { status, children, onChange } = props

  const [isChecked, setIsChecked] = useState<boolean>(
    status === Status.Complete
  )

  return (
    <fieldset>
      <legend className="sr-only">Todo</legend>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            aria-describedby="done-description"
            checked={isChecked}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            id="done"
            name="done"
            type="checkbox"
            onChange={() => {
              setIsChecked((prevState) => !prevState)
              onChange()
            }}
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
