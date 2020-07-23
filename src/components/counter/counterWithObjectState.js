import React, {useState} from 'react'

function CounterWithObjectState() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <form>
            <h1>Enter your firstName and lastname</h1>
            <input value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
            <input value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default CounterWithObjectState
