import { ISubtask } from '@todolist/shared'
import React, { VFC } from 'react'

export interface SubtaskItemProps {
  subtask: ISubtask
}

const SubtaskItem: VFC<SubtaskItemProps> = (props) => {
  const { subtask } = props

  return (
    <li className="py-4 border px-6 py-6 border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-500 truncate">{subtask.title}</p>
        </div>
      </div>
    </li>
  )
}

export default SubtaskItem
