import { render } from '@testing-library/react'
import React from 'react'

import TodoItem from './index'

describe('TodoItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoItem open title="foo_bar" />)
    expect(baseElement).toBeTruthy()
  })
})
