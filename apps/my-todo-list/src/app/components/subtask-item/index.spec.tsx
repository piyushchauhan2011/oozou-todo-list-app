import { render } from '@testing-library/react'
import { Status } from '@todolist/shared'
import React from 'react'
import SubtaskItem from './index'

describe('SubtaskItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SubtaskItem
        subtask={{ id: 1, title: 'foo', todoId: 1, status: Status.Pending }}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
