import React, { useEffect, useState } from 'react'

const FetchPost = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'My name is Aman',
                body: 'I am a good boy'

            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                //setPosts(data)
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
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default FetchPost
