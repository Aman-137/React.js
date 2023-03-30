import React, {useEffect, useState} from 'react'

const HookCounter = () => {

    // old methods of using hooks(useState)

    // const fullName = useState("Aman Kumar");
    // const name = fullName[0];
    // const setName = fullName[1];

    // ES6 Destructuring method of using useState() hook
    const [name, setName] = useState("Name");
    const [profession, setProfession] = useState("Profession");
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(0);

    const stateHandler = () => {
        //fullName[1]("Saket Kumar");
        setName("Aman Kumar");
        setProfession("Software Engineer");
    }
    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter1(counter1 - 1);
    }

    const incremented = () => {
        for (let i=0; i<10; i++) {
            setCounter(prevCount => prevCount + 1);
        }
    }

    useEffect(() => {
        console.log("Aman Kumar Singh");
    },[counter])

    return (
        <div>
            <h1>{name}</h1>
            <h2>{profession}</h2>
            <button onClick={stateHandler}>Click Me</button>
            <button onClick={increment}>Increment: {counter}</button>
            <button onClick={decrement}>Decrement: {counter1}</button>
            <button onClick={incremented}>Incremented by 10 - {counter}</button>
        </div>
    )
}

export default HookCounter
