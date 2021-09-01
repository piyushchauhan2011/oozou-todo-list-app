import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const RootProvider: FC = (props) => {
  const { children } = props

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: false,
        retry: 3,
        refetchOnWindowFocus: false,
        onError(msg: string) {
          alert(msg)
        },
      },
      mutations: {
        onError(msg: string) {
          alert(msg)
        },
      },
    },
  })

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default RootProvider
