import { render } from '@testing-library/react'
import React from 'react'
import EmptyState from './index'

describe('EmptyState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmptyState onClick={jest.fn} />)
    expect(baseElement).toBeTruthy()
  })
})
