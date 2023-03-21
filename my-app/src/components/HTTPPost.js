import axios from 'axios'
import React, { Component } from 'react'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        apiResponse: null
      }
    }
    postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
            title: 'Hello Wold!',
            body: 'This is a working thingy',
            userId: 279,
        } ).then(responce => {
            this.setState ({
                apiResponse: responce.data
            })
        })
    }
    render() {
        const {apiResponse} = this.state
        return (
        <div>
            <button onClick={this.postToApi}>
                Create Post
            </button>
            {
                apiResponse
                ? (
                    <div>
                        <h1>{apiResponse.title}</h1>
                        <p>Post ID: {apiResponse.id}</p>
                        <p>{apiResponse.body}</p>
                        <p>user ID: {apiResponse.userId}</p>
                    </div>
                )
                : (<p>Please Click The button!</p>)
            }
        </div>
        )
    }
    }

export default HTTPPost