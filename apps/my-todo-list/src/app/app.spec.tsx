import React from 'react'
import App from './app'
import { render } from './test-utils'

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />)
    expect(baseElement).toBeTruthy()
  })
})
