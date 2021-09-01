import React from 'react'
import { render } from '../../test-utils'
import TodoList from './index'

describe('TodoList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoList todos={[]} />)
    expect(baseElement).toBeTruthy()
  })
})
