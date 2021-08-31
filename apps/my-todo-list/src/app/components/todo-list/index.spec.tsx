import { render } from '@testing-library/react'
import React from 'react'
import TodoList from './index'

describe('TodoList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoList />)
    expect(baseElement).toBeTruthy()
  })
})
