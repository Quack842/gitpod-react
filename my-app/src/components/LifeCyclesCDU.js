import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        super(props)
        this.state = {
            greetings: 'Well, hello there...'
        }
    }
    updateGreeting = () => {
        console.log('Updated Greeting Called')
        this.setState(prevState => {
            return {
                greetings: prevState.greetings === 'Well, hello there...' ? 'Goodbye, then' : 'Well, hello there...'
            }
        })
    }
    componentDidUpdate() {
        console.log('Component updated')
    }
  render() {
    console.log('Render Method Called')
    return (
      <div>
        <h1>{this.state.greetings}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
        <LifeCyclesCDUChild parentGreeting={this.state.greetings} />
      </div>
    )
  }
}

export default LifeCyclesCDU