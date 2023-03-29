import React, {useState} from 'react'

const HookCounter = () => {

    // old methods of using hooks(useState)

    // const fullName = useState("Aman Kumar");
    // const name = fullName[0];
    // const setName = fullName[1];

    // ES6 Destructuring method of using useState() hook
    const [name, setName] = useState("Name");
    const [profession, setProfession] = useState("Profession");

    const stateHandler = () => {
        //fullName[1]("Saket Kumar");
        setName("Aman Kumar");
        setProfession("Software Engineer");
    }

    return (
        <div>
            <h1>{name}</h1>
            <h2>{profession}</h2>
            <button onClick={stateHandler}>Click Me</button>
        </div>
    )
}

export default HookCounter
