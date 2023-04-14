import React, { useState } from 'react'
import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'

export const ThemeContext = React.createContext()

function UseContext() {

    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }
    
    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ClassContextComponent />
                <FunctionContextComponent />
            </ThemeContext.Provider>
        </>
    )
}

export default UseContext
