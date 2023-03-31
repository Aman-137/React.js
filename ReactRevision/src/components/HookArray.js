import React, { useState } from 'react'

const HookArray = () => {

    const [items, setItems] = useState([]);

    const addItems = () => {
        setItems([...items, {
            value: Math.floor(Math.random() * 10)
        }])
    }

    
    return (
        <div>
            <button onClick={addItems}>Add a Random number</button>
            <ul>
                {items.map(item => (<li key={item.value}>{item.value}</li>))}
            </ul>
        </div>
    )
}

export default HookArray
