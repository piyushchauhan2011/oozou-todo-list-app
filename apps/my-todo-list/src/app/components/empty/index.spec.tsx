import React from 'react'
import { render } from '../../test-utils'
import EmptyState from './index'

describe('EmptyState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmptyState onClick={jest.fn} />)
    expect(baseElement).toBeTruthy()
  })
})
