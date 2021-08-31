import { Disclosure } from '@headlessui/react'
import { ITodo } from '@todolist/shared'
import React, { VFC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import SubtaskList from '../subtask-list'
import TodoItem from '../todo-item'

interface TodoListProps {
  todos: ITodo[]
}

const TodoList: VFC<TodoListProps> = (props) => {
  const { todos } = props

  return (
    <div className="bg-white overflow-hidden sm:rounded-md">
      <ul>
        {todos.map((todo) => {
          const id = uuidv4()
          return (
            <Disclosure key={id} as="li">
              {({ open }) => (
                <>
                  <TodoItem open={open} title={todo.title} />
                  <SubtaskList subtasks={todo.subtasks} />
                </>
              )}
            </Disclosure>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
