import Counter from './Counter'
// Functional React Component
import CounterHooks from './CounterHooks'
function App() {
  console.log('Render app')
  // Traditional way
  // Problematic because no protection from HTML injection attacks
  // const ele = document.createElement('h1')
  // ele.innerText= "hello storp"
  // REACT / JSX approach - cleans itself, safe from injection attacks

  // return <h1>Hello Meep</h1>
  // Use of parens lets us put multiple lines
  return (
    <>
    Counter with Class
    <Counter initialCount={0} />
    Counter with Hooks
    <CounterHooks initialCount={-1} />
    </>
  )
}

export default App;
