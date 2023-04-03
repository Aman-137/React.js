import React, {useState, useEffect} from 'react'

const FunctionMouse = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect");
        window.addEventListener('mousemove', logMousePosition);
    },[])

    return (
        <div>
            Function - X = {x} Y = {y}
        </div>
    )
}

export default FunctionMouse
