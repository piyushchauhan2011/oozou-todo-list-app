import { render } from '@testing-library/react'
import React from 'react'
import MainLayout from './main.layout'

describe('MainLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MainLayout>
        <p>foo_bar</p>
      </MainLayout>
    )
    expect(baseElement).toBeTruthy()
  })
})
