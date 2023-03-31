import React, {useState} from 'react'

const HookObject = () => {

    const [name, setName] = useState({firstName:'', lastName:''});

    const handleSubmit = (e) => {
        alert(`${name.firstName} ${name.lastName}`);
        e.preventDefault();
    }

    return (
        <div>
            Hook Object
            <form onSubmit={handleSubmit}>
                <input type="text" value={name.firstName} onChange={e => {setName({...name, firstName: e.target.value})}}></input>
                <input type="text" value={name.lastName} onChange={e => {setName({...name, lastName: e.target.value})}}></input>
                <button>Click Me</button>
            </form>
            {name.firstName}
            {name.lastName}
            {JSON.stringify(name)}
        </div>
    )
}

export default HookObject
