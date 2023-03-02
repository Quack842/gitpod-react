import React from "react";

class StatefulGreetingWithCallback extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    handleClick(){
        this.setState({
            introduction: "Goodbye! My Friend",
            buttonText: "Enter",
        }, () =>{
            console.log('New State', this.state.introduction);
            console.log('New State', this.state.buttonText);
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;