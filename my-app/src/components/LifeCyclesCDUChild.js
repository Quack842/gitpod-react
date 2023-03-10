import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {
    constructor (props) {
        super(props)

        this.state = {
            greetings: 'Well, Hello there...',
        }
    }

    updateGreeting = () => {
        console.log('Child Updateding Greetings Called')
        this.setState((prevState) => {
            return {
                greetings: prevState.greetings === 'Well, Hello there...' ? 'Bye, now' : 'Well, Hello there...',
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Child Component Updated!')
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        if (prevProps.parentGreeting !== this.props.parentGreeting) {
            console.log('Parent Greeting has changed')
        }
    }

  render() {
    console.log('Child Render Method Called!')
    return (
      <div>
        <h1>{this.state.greetings}</h1>
        <button onClick={this.updateGreeting}>Update Child Greeting</button>
      </div>
    )
  }
}

export default LifeCyclesCDUChild