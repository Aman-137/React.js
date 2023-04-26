import axios from 'axios'
import React, { useState, useEffect } from 'react'

const FetchApi = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.post('https://jsonplaceholder.typicode.com/users', {
            name: 'Aman',
            email: 'abc@gmail.com'
        })
            .then(res => {
                console.log(res)
                // setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => {
                        return <li key={post.id}>{post.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default FetchApi
