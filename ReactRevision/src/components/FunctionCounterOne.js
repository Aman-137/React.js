import React, { useEffect, useState } from 'react'

const FunctionCounterOne = () => {

    const [count, setCount] = useState(0);
    const[name, setName] = useState('');

    useEffect(() => {
        console.log("use Effect");
        document.title = `Function Clicked ${count} times`;
    }, [name])// the value we enter in this array, the useEffect works only for that.


    return (
        <div>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}></input>
            <button onClick={() => {setCount(count + 1)}}>Function Click {count}</button>
        </div>
    )
}

export default FunctionCounterOne
