import React, { useState, useReducer } from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {
                count: state.count + 1
            }
        
        case ACTIONS.DECREMENT:
            return {
                count: state.count - 1
            }

        default: return state
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, { count : 0 })

    //const [count, setCount] = useState(0)

    const incrementCount = () => {
        dispatch({ type: ACTIONS.INCREMENT })
    }

    const decrementCount = () => {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    
    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span>{state.count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default UseReducer
