
import { useState } from 'react'
import './App.css'

function App() {
   const [input, setInput] = useState('') ;

  return (

   
    <>

      <div>
        <h1>My ToDo App</h1>

        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a task..' type="text" />

        <p>You typed: {input}</p>
      </div>

    </>
  )
}

export default App
