import React, { useDeferredValue, useEffect, useMemo } from 'react'


const DeferredList = ({ input }) => {
    
    const LIST_SIZE = 20000

    const deferredInput = useDeferredValue(input)

    const list = useMemo(() => {
        const l = []
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l
    }, [deferredInput])

    useEffect(() => {
        console.log(`Input: ${input}\nDeferred: ${deferredInput}`)
    }, [input, deferredInput])
    
    return list
}

export default DeferredList
