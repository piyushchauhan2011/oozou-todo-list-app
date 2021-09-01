import {
  ISubtask,
  ITodo,
  Status,
  UPDATE_SUBTASK_STATUS,
} from '@todolist/shared'
import produce from 'immer'
import React, { VFC } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import fetchApi from '../../api/config'
import Checkbox from '../checkbox'

export interface SubtaskItemProps {
  subtask: ISubtask
  todoIndex: number
  subtaskIndex: number
}

const SubtaskItem: VFC<SubtaskItemProps> = (props) => {
  const { subtask, todoIndex, subtaskIndex } = props
  const { status, title, id } = subtask

  const queryClient = useQueryClient()

  const { mutate } = useMutation<ISubtask, string, void>(
    () => fetchApi<ISubtask>(UPDATE_SUBTASK_STATUS(id), 'PUT'),
    {
      async onSuccess(data) {
        await queryClient.cancelQueries('todos')
        const previousTodo = queryClient.getQueryData<ITodo[]>('todos')
        const nextState = produce(previousTodo, (draft) => {
          draft[todoIndex].subtasks[subtaskIndex] = data
          draft[todoIndex] = {
            ...data.todoId,
            subtasks: draft[todoIndex].subtasks,
          }
        })
        queryClient.setQueryData('todos', nextState)
      },
    }
  )

  return (
    <li className="border px-3 py-3 border-gray-200">
      <div className="flex items-center space-x-4">
        <Checkbox status={status} onChange={mutate}>
          <div className="flex-1 min-w-0 ml-3">
            <p
              className={`text-sm truncate ${
                status === Status.Pending
                  ? 'text-gray-500'
                  : 'line-through text-gray-300'
              }`}
            >
              {title}
            </p>
          </div>
        </Checkbox>
      </div>
    </li>
  )
}

export default SubtaskItem
