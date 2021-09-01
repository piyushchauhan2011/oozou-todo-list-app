import { MinusIcon, PlusIcon } from '@heroicons/react/solid'
import { ITodo, Status, UPDATE_TODO_STATUS } from '@todolist/shared'
import produce from 'immer'
import React, { MouseEventHandler, useMemo, VFC } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import fetchApi from '../../api/config'
import Checkbox from '../checkbox'

interface TodoItemProps {
  open: boolean
  todo: ITodo
  todoIndex: number
  onClick: MouseEventHandler<HTMLAnchorElement>
}

const TodoItem: VFC<TodoItemProps> = (props) => {
  const { open, todo, todoIndex, onClick } = props
  const { subtasks, title, status, id } = todo

  const queryClient = useQueryClient()

  const { mutate } = useMutation<ITodo, string, void>(
    () => fetchApi<ITodo>(UPDATE_TODO_STATUS(id), 'PUT'),
    {
      async onSuccess(data) {
        await queryClient.cancelQueries('todos')
        const previousTodo = queryClient.getQueryData<ITodo[]>('todos')
        const nextState = produce(previousTodo, (draft) => {
          draft[todoIndex] = data
        })
        queryClient.setQueryData('todos', nextState)
      },
    }
  )

  const completedCount = useMemo<number>(
    () =>
      subtasks.reduce(
        (count, subtask) =>
          subtask.status === Status.Complete ? count + 1 : count,
        0
      ),
    [subtasks]
  )

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      className="block hover:bg-gray-50 border border-gray-200"
      href="#"
      onClick={onClick}
    >
      <div className="px-4 py-4 flex items-center sm:px-6">
        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="truncate pl-2">
            <Checkbox status={status} onChange={mutate}>
              <div className="ml-3 text-sm">
                <label
                  className={`font-medium ${
                    status === Status.Pending
                      ? 'text-gray-700'
                      : 'line-through text-gray-500'
                  }`}
                  htmlFor="comments"
                >
                  {title}
                </label>
                {subtasks.length !== 0 && (
                  <p className="text-gray-500" id="comments-description">
                    {completedCount} of {subtasks.length} completed
                  </p>
                )}
              </div>
            </Checkbox>
          </div>
        </div>
        <div className="ml-5 flex-shrink-0">
          {open ? (
            <MinusIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          ) : (
            <PlusIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          )}
        </div>
      </div>
    </a>
  )
}

export default TodoItem
