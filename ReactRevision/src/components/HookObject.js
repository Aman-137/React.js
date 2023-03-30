import React, {useState} from 'react'

const HookObject = () => {

    const [name, setName] = useState({firstName:'', lastName:''});

    // const handleChange = (e) => {
    //     setName({
    //         firstName: e.target.value,
    //         lastName: e.target.value
    //     });
    // }

    return (
        <div>
            Hook Object
            <form>
                <input type="text" value={name.firstName} onChange={e => {setName({...name, firstName: e.target.value})}}></input>
                <input type="text" value={name.lastName} onChange={e => {setName({...name, lastName: e.target.value})}}></input>
            </form>
            {name.firstName}
            {name.lastName}
            {JSON.stringify(name)}
        </div>
    )
}

export default HookObject
