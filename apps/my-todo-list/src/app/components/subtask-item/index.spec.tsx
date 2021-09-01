import { Status } from '@todolist/shared'
import React from 'react'
import { render } from '../../test-utils'
import SubtaskItem from './index'

describe('SubtaskItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SubtaskItem
        subtask={{ id: 1, title: 'foo', status: Status.Pending }}
        subtaskIndex={1}
        todoIndex={1}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
