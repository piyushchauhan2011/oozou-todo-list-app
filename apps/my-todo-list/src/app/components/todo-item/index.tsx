import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/solid'
import React, { VFC } from 'react'
import Checkbox from '../checkbox'

const { Button } = Disclosure

interface TodoItemProps {
  open: boolean
  title: string
}

const TodoItem: VFC<TodoItemProps> = (props) => {
  const { open, title } = props

  return (
    <Button
      as="a"
      className="block hover:bg-gray-50 border border-gray-200"
      href="#"
    >
      <div className="px-4 py-4 flex items-center sm:px-6">
        <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="truncate pl-2">
            <Checkbox>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-700" htmlFor="comments">
                  {title}
                </label>
                <p className="text-gray-500" id="comments-description">
                  3 of 5 completed
                </p>
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
    </Button>
  )
}

export default TodoItem
