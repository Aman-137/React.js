import React, { useEffect, useState } from 'react'

const FunctionCounterOne = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("use Effect");
        document.title = `Function Clicked ${count} times`;
    },[count])


    return (
        <div>
            <button onClick={() => {setCount(count + 1)}}>Function Click {count}</button>
        </div>
    )
}

export default FunctionCounterOne
