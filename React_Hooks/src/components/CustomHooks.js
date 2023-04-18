import React, { useState } from 'react'
import useLocalStorage from './custom/useLocalStorage'
import useUpdateLogger from './custom/useUpdateLogger'

const CustomHooks = () => {

    const [name, setName] = useLocalStorage('name', '')
    
    useUpdateLogger(name)

    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default CustomHooks
