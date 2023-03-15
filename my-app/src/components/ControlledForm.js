import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            selectCategory: 'website',
            comments: ''
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleSelect = (event) => {
        this.setState({
            selectCategory: event.target.value
        })
    }
    handleComment = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
        <div>
            <h2>Please Fill Out the Form Below</h2>
            <hr />
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='id-name'>Your Name: </label>
                    <input 
                        value={this.state.name} 
                        onChange={this.handleNameChange}
                        id='id-name' 
                        type='text' 
                        name='name'/>
                </div>
                <div>
                    <label htmlFor='id-category'>Query Category: </label>
                    <select 
                        id='id-category' 
                        name='category' 
                        onChange={this.handleSelect}
                        value={this.state.selectCategory} >
                        <option>Website Issue</option>
                        <option>Order Issue</option>
                        <option>General Inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='id-comments'>Comments: </label>
                    <textarea 
                        id='id-comments' 
                        name='comments' 
                        onChange={this.handleComment}
                        value={this.state.comments} />
                </div>
                <hr/>
                <input type='submit' value='Submit' />
            </form>
        </div>
        )
    }
}

export default ControlledForm