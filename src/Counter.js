import React, { Component } from 'react'
// import Component from 'react'
// React lets us write JSX
// - Interesting, that's what Kyle said, but sometimes this works without that import statement
// Component lets us write the Component class

import { ThemeContext } from './App'

export default class Counter extends Component {
    // All of the code in this class is a renderable React component
    constructor(props) {
        // this lets us override the constructor. 
        // has to take props as an argument
        // Necessary to call super() to make sure props get init'd correctly
        super(props)

        this.state = {
            // Keep track of the count state of the component
            count: props.initialCount
        }
    }

    render() {
        // whatever we return here is what is rendered
        // this.props is a JS object containing anything we pass in
        console.log("render element")
        return (
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        <button style={style} onClick = {() => this.changeCount(-1)} >-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick = {() => this.changeCount(+1)} >+</button>
                        <div>{JSON.stringify(this.props, null, 4)}</div>
                    </div>                    
            )}
            </ThemeContext.Consumer>
            
        )
    }

    changeCount(amount) {
        // This way of using setState is a little more complex, 
        // but more reliable if we're modifying state multiple times
        // I think this setState() call triggers some of the re-rendering
        this.setState(prevState => {
            return {count: prevState.count + amount}
        })
        // // All React components have a setState() method
        // // Overwrites any keys we send it, leaves other keys unmodified
        // // This method is actually asynchronous though, so it batches up
        // // calls and runs them together
        // this.setState({ count: this.state.count + amount})
        // // running it twice should cause it to go by double amount
        // // but it doesn't because when the second one is evaluated
        // // this.state.count hasn't been updated yet
        // this.setState({ count: this.state.count + amount})

    }
}