import { ITodo } from '@todolist/shared'
import React, { useState, VFC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import SubtaskList from '../subtask-list'
import TodoItem from '../todo-item'

interface TodoListProps {
  todos: ITodo[]
}

const TodoList: VFC<TodoListProps> = (props) => {
  const { todos } = props

  const [isShowSubtasks, setIsShowSubtasks] = useState<boolean>(false)
  const [showIndex, setShowIndex] = useState<number>()

  const handleClick = (todoIndex: number) => {
    setIsShowSubtasks(!isShowSubtasks)
    setShowIndex(todoIndex)
  }

  return (
    <div className="bg-white overflow-hidden sm:rounded-md">
      <ul>
        {todos.map((todo, todoIndex) => {
          const id = uuidv4()
          return (
            <li key={id}>
              <TodoItem
                open={isShowSubtasks}
                todo={todo}
                todoIndex={todoIndex}
                onClick={() => handleClick(todoIndex)}
              />
              {isShowSubtasks && todoIndex === showIndex && (
                <SubtaskList
                  subtasks={todo.subtasks}
                  todoId={todo.id}
                  todoIndex={todoIndex}
                />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
