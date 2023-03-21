import axios from 'axios'
import React, {useState, useEffect} from 'react'

function HTTPHooks() {
    const [posts, setPosts] = useState ([]);
    const [error, setError] = useState (null);
    const [postMessage, setPostMessage] = useState (null);
    const postToApi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
        {
            title: 'Hello Wold!',
            body: 'This is a working thingy',
            userId: 279,
        } ).then(responce => {
            setPostMessage(responce.status === 201 
            ? `Success! Title: ${responce.data.title}`
            : 'Failed' )
        })
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            const data = Array.isArray(response.data)
            ? response.data
            : [response.data]
            setPosts(data);
        })
        .catch(error => {
            setError(error.message)
        })
    }, [])
    return (
        <div>
            <button onClick={postToApi}>
                Create Post
            </button>
            <h2>Post: </h2>
            {
                posts.length ? (
                    posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.id} {post.title}</h2>
                            <h4>By User ID: {post.userId}</h4>
                            <p>{post.body}</p>
                            <hr/>
                        </div>
                    ))
                ) : (
                    error
                    ? <p>{error}</p>
                    : <h4>Loading Post...</h4>
                )
            }
        </div>
        )
    }

export default HTTPHooks