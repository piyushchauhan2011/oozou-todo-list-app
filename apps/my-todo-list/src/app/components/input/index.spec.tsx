import React from 'react'
import { render } from '../../test-utils'
import Input from './index'

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input id="foo" label="bar" />)
    expect(baseElement).toBeTruthy()
  })
})
