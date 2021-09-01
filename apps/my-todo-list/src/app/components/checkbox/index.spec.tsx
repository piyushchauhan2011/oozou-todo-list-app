import { Status } from '@todolist/shared'
import React from 'react'
import { render } from '../../test-utils'

import Checkbox from './index'

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Checkbox status={Status.Complete} onChange={jest.fn} />
    )
    expect(baseElement).toBeTruthy()
  })
})
