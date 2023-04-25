import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const [posts, setPosts] = useState({
        title: '',
        body: ''
    })

    
    const handleChange = (e) => {
        setPosts({...posts, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', {posts})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })


    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <label>Title</label>
                <input type='text' name="title" onChange={handleChange} /><br />
                <label>Body</label>
                <input type='text' name="body" onChange={handleChange} /><br />
                
                <button>Submit</button>
            </form>
        </div>
    )
}

export default FetchApi
