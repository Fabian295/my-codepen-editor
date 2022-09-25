
import React, { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1)
  } 

  return (
    <div>
      <h1>Working with React</h1>
      App, Hello World!
    
      <p>{counter}</p>
      <p>
        <button onClick={increment}>Increment</button>
      </p>
    
    </div>
  )
}

export default App