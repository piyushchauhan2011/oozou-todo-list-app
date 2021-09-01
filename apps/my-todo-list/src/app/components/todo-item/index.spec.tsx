import { ITodo } from '@todolist/shared'
import React from 'react'
import { render } from '../../test-utils'

import TodoItem from './index'

describe('TodoItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TodoItem open todo={{} as ITodo} todoIndex={1} onClick={jest.fn} />
    )
    expect(baseElement).toBeTruthy()
  })
})
