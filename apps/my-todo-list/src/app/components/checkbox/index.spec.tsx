import { render } from '@testing-library/react'
import React from 'react'

import Checkbox from './index'

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Checkbox />)
    expect(baseElement).toBeTruthy()
  })
})
