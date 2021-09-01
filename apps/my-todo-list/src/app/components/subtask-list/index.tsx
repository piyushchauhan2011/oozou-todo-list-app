import {
  CreateSubtaskRequest,
  CreateSubtaskResponse,
  ISubtask,
  ITodo,
  CREATE_SUBTASK,
} from '@todolist/shared'
import produce from 'immer'
import React, { KeyboardEvent, VFC } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { v4 as uuidv4 } from 'uuid'
import fetchApi from '../../api/config'
import Input from '../input'
import SubtaskItem from '../subtask-item'

export interface SubtaskListProps {
  subtasks: ISubtask[]
  todoIndex: number
  todoId: number
}

const SubtaskList: VFC<SubtaskListProps> = (props) => {
  const { subtasks, todoIndex, todoId } = props

  const queryClient = useQueryClient()

  const { mutate } = useMutation<
    CreateSubtaskResponse,
    string,
    CreateSubtaskRequest
  >(
    (request) =>
      fetchApi<CreateSubtaskResponse>(CREATE_SUBTASK, 'POST', request),
    {
      async onSuccess(data) {
        await queryClient.cancelQueries('todos')
        const previousTodo = queryClient.getQueryData<ITodo[]>('todos')
        const nextState = produce(previousTodo, (draft) => {
          draft[todoIndex].subtasks = [
            ...previousTodo[todoIndex].subtasks,
            { id: data.id, title: data.title, status: data.status },
          ]
        })
        queryClient.setQueryData('todos', nextState)
      },
    }
  )

  const handlePressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    const { value: title } = event.currentTarget
    if (title && event.key === 'Enter') {
      event.preventDefault()
      mutate({ title, todoId })
      event.currentTarget.value = ''
    }
  }

  return (
    <div className="w-6/12 mx-auto my-3">
      <div className="flow-root">
        <ul className="-my-3">
          {subtasks.map((subtask, subtaskIndex) => {
            const id = uuidv4()
            return (
              <SubtaskItem
                key={id}
                subtask={subtask}
                subtaskIndex={subtaskIndex}
                todoIndex={todoIndex}
              />
            )
          })}
          <li>
            <Input
              id="subtask"
              label="Subtask"
              placeholder="Press enter to add a subtask"
              type="text"
              onKeyPress={handlePressEnter}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SubtaskList
