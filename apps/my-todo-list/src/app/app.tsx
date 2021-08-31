import React, { useEffect, useState } from 'react'

const App = () => {
  const [m, setMessage] = useState<string>('')

  /* useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []); */

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to my-todo-list!</h1>
      <img
        alt="something"
        src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
        width="450"
      />
    </div>
  )
}

export default App
