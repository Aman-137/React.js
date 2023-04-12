import { render } from '@testing-library/react'
import React, {useEffect, useRef, useState} from 'react'

const UseRef = () => {

    const [name, setName] = useState("")
    const renderCount = useRef(1)
    //console.log(renderCount)
    const inputRef = useRef()
    const prevName = useRef('')

    

    const focus = () => {
        inputRef.current.focus()
       
    }
    
    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    useEffect(() => {
        prevName.current = name
    }, [name])

    return (
        <div>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <div>My name is {name}</div>
            <button onClick={focus}>Focus</button>
            <div>I rendered {renderCount.current} times</div>
            <div>My name is -  {name}, and it used to be {prevName.current}</div>
        </div>
    )
}

export default UseRef
