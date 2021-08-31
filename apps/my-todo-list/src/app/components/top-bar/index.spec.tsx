import { render } from '@testing-library/react'
import { createRef } from 'react'
import Topbar from './index'

describe('Topbar', () => {
  it('should render successfully', () => {
    const topBarInputRef = createRef<HTMLInputElement>()
    const { baseElement } = render(
      <Topbar
        inputRef={topBarInputRef}
        onEnterPress={jest.fn}
        setSidebarOpen={jest.fn}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
