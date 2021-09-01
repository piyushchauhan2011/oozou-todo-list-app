import { GET_ALL_TODO, ITodo } from '@todolist/shared'
import React, { createRef } from 'react'
import { useQuery } from 'react-query'
import fetchApi from './api/config'
import { Topbar, Empty, TodoList } from './components'
import MainLayout from './layouts/main.layout'

const App = () => {
  const topBarInputRef = createRef<HTMLInputElement>()
  const { data } = useQuery<unknown, string, ITodo[]>(
    'todos',
    () => fetchApi<ITodo[]>(GET_ALL_TODO, 'GET'),
    { initialData: [] }
  )

  return (
    <MainLayout>
      <Topbar inputRef={topBarInputRef} />
      {data.length === 0 ? (
        <Empty onClick={() => topBarInputRef.current?.focus()} />
      ) : (
        <TodoList todos={data} />
      )}
    </MainLayout>
  )
}

export default App
