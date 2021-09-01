import React from 'react'
import { render } from '../../test-utils'

import SubtaskList from './index'

describe('SubtaskList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SubtaskList subtasks={[]} todoId={1} todoIndex={1} />
    )
    expect(baseElement).toBeTruthy()
  })
})
