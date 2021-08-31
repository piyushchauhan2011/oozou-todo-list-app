import { render } from '@testing-library/react'
import React from 'react'

import RootProvider from './root.provider'

describe('RootProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RootProvider />)
    expect(baseElement).toBeTruthy()
  })
})
