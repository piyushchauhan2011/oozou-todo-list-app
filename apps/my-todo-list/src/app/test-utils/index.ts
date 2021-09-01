import { RenderOptions, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ReactElement } from 'react'
import RootProvider from '../providers/root.provider'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: RootProvider, ...options })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
