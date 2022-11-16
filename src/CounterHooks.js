import React, { useState } from 'react'

export default function CounterHooks({ initialCount }) {
// function receives props as argument - here we deconstruct it

    // First argument is the default value, which gets ignored if its been updated
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    )
    // const [state, setState] = useState({ count: initialCount })
    // return (
    //     <div>
    //         <button onClick={() => setState(prevState => {
    //             return { count: prevState.count - 1 }})}>-</button>
    //         <span>{state.count}</span>
    //         <button onClick={() => setState(prevState => {
    //             return { count: prevState.count + 1}})}>+</button>
    //     </div>
    // )
}