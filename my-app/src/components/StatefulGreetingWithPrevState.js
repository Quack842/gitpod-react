import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            countButton: 0,
        };
    }

    handleClick(){
        this.setState((prevState, prevProps) => {
            console.log('Previous State: ', prevState)
            console.log('Previous Props: ', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        });
    }

    countClick(){
        this.setState((prevState, prevProps) => {
            console.log('Previous State: ', prevState)
            console.log('Previous Props: ', prevProps)
            return {
                countButton: prevState.countButton + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.countClick()}>Click Me!</button>
                <h3>You Have clicked {this.state.countButton} times!</h3>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;