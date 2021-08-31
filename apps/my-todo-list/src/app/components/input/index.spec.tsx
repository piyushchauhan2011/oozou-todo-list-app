import Input from './index'
import { render } from '@testing-library/react'

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input id="foo" label="bar" />)
    expect(baseElement).toBeTruthy()
  })
})
