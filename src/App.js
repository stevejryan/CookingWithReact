import React, { useState } from 'react'
import Counter from './Counter'
// Functional React Component
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()
// Provider vs. Consumer


function App() {
  console.log('Render app')
  const [theme, setTheme] = useState('red')
  // Traditional way
  // Problematic because no protection from HTML injection attacks
  // const ele = document.createElement('h1')
  // ele.innerText= "hello storp"
  // REACT / JSX approach - cleans itself, safe from injection attacks

  // return <h1>Hello Meep</h1>
  // Use of parens lets us put multiple lines
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter with Class
      <Counter initialCount={0} />
      Counter with Hooks
      <CounterHooks initialCount={-1} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}> Toggle Theme </button>
    </ThemeContext.Provider>
  )
}

export default App;
