import React, { useState } from 'react'
import axios from 'axios'


const DataPost = () => {

    const [post, setPost] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/users', {post})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input type='text' name='name' onChange={handleChange} /><br />
        Email: <input type='text' name='email' onChange={handleChange} /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default DataPost
