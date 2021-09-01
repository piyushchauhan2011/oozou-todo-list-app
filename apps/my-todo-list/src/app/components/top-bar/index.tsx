import { PlusCircleIcon } from '@heroicons/react/outline'
import { CREATE_TODO, CreateTodoRequest, ITodo } from '@todolist/shared'
import React, { KeyboardEvent, RefObject, VFC } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import fetchApi from '../../api/config'

interface TopbarProps {
  inputRef: RefObject<HTMLInputElement>
}

const Topbar: VFC<TopbarProps> = (props) => {
  const { inputRef } = props

  const queryClient = useQueryClient()

  const { mutate } = useMutation<
    Omit<ITodo, 'subtasks'>,
    string,
    CreateTodoRequest
  >(
    (request) =>
      fetchApi<Omit<ITodo, 'subtasks'>>(CREATE_TODO, 'POST', request),
    {
      async onSuccess(data) {
        await queryClient.cancelQueries('todos')
        const previousTodo = queryClient.getQueryData<ITodo[]>('todos')
        queryClient.setQueryData('todos', [
          ...previousTodo,
          { ...data, subtasks: [] },
        ])
      },
    }
  )

  const handlePressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    const { value: title } = event.currentTarget
    if (title && event.key === 'Enter') {
      event.preventDefault()
      mutate({ title })
      event.currentTarget.value = ''
    }
  }

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <form action="#" className="w-full flex md:ml-0" method="GET">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="sr-only" htmlFor="task">
              Press &quot;enter&quot; to add a todo
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <PlusCircleIcon aria-hidden="true" className="h-5 w-5" />
              </div>
              <input
                ref={inputRef}
                className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                id="task"
                name="task"
                placeholder="Press 'enter' to add a todo"
                type="text"
                onKeyPress={handlePressEnter}
              />
              <div className="absolute inset-y-0 right-0 flex py-4 pr-1.5">
                <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
                  Enter
                </kbd>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Topbar
