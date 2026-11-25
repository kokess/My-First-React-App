import { useState } from 'react'
import './App.css'

function Greeting({ name }) {
  if (!name.trim()) {
    return null
  }

  return (
    <p style={{ color: '#e57373' }}>
      Hello, {name.trim()}! Welcome to my React app.
    </p>
  )
}

function Footer({ year }) {
  return (
    <footer>
      <p>&copy; {year} My First React App</p>
    </footer>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const isEven = count % 2 === 0
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <h1>My First React App</h1>
      <p>
        I&apos;m a software development student and digital marketer learning
        how to build interactive web apps with React.
      </p>

      <h2>Counter: {count}</h2>

      <p>{isEven ? 'Even number' : 'Odd number'}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase
      </button>

      <button onClick={() => setCount((prev) => prev - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <br /><br />

      <label htmlFor="name">Enter your name:</label>

      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
      />

      <Greeting name={name} />

      <Footer year={currentYear} />
    </div>
  )
}

export default App