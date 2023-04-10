import React, {useState, useEffect} from 'react'

const UseEffect = () => {

    // const [resourceType, setResourceType] = useState('posts')
    // const [items, setItems] = useState([])
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    //console.log('render')

    //useEffect(() => {
        //console.log('resource changed')
        // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        //     .then(response => response.json())
        //     .then(json => setItems(json))

        // return () => {
        //     console.log('return from resource change')
        // }
    //}, [resourceType])

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            {/* <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
            <h1>{resourceType}</h1>
            {items.map(item => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>
            })} */}

            {windowWidth}
        </div>
    )
}

export default UseEffect
