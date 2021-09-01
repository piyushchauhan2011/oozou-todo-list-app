import React, { createRef } from 'react'

import { render } from '../../test-utils'
import Topbar from './index'

describe('Topbar', () => {
  it('should render successfully', () => {
    const topBarInputRef = createRef<HTMLInputElement>()
    const { baseElement } = render(<Topbar inputRef={topBarInputRef} />)
    expect(baseElement).toBeTruthy()
  })
})
