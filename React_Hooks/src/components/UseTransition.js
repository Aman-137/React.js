import React, { useState, useTransition } from 'react'

const UseTransition = () => {

    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const LIST_SIZE = 20000

    const handleChange = (e) => {
        setInput(e.target.value)
        startTransition(() => {
            const l = []
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })

    }

    return (
        <div>
            <input type='text' value={input} onChange={handleChange} />
            {isPending ? 'Loading...' : list.map((item, index) => {
                    return <div key={index}>{item}</div>
            })}
        </div>
    )
}

export default UseTransition
