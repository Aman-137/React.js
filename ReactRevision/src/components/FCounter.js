import React, {useState} from 'react'

const FCounter = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Functional Counter</h2>
            <button onClick={handleClick}>F Counter: {count}</button>
        </div>
    )
}

export default FCounter
