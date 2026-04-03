
import { useState } from 'react'
import './App.css'

function App() {
   const [input, setInput] = useState('') ;

  return (

   
    <>

      <div>
        <h1>My ToDo App</h1>
        <h1>This is for eid day 3</h1>
        <h2>This is another eid day 3</h2>
        <h2>This is another eid day 4</h2>
        <h2>This is for day after assignment 6</h2>
        <h2>This is for day two after assignment 6</h2>

        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a task..' type="text" />

        <p>You typed: {input}</p>
      </div>

    </>
  )
}

export default App
