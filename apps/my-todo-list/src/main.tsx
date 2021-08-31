import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import RootProvider from './app/providers/root.provider'

ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
