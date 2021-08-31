import { render } from '@testing-library/react'
import React from 'react'

import SubtaskList from './index'

describe('SubtaskList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubtaskList subtasks={[]} />)
    expect(baseElement).toBeTruthy()
  })
})
