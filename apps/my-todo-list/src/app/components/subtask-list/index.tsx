import { Disclosure } from '@headlessui/react'
import { ISubtask } from '@todolist/shared'
import React, { VFC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Input from '../input'
import SubtaskItem from '../subtask-item'

const { Panel } = Disclosure

export interface SubtaskListProps {
  subtasks: ISubtask[]
}

const SubtaskList: VFC<SubtaskListProps> = (props) => {
  const { subtasks } = props

  return (
    <Panel className="w-6/12 mx-auto my-6">
      <div className="flow-root">
        <ul className="-my-6">
          {subtasks.map((subtask) => {
            const id = uuidv4()
            return <SubtaskItem key={id} subtask={subtask} />
          })}
          <li>
            <Input
              id="subtask"
              label="Subtask"
              placeholder="Press enter to add a subtask"
              type="text"
            />
          </li>
        </ul>
      </div>
    </Panel>
  )
}

export default SubtaskList
