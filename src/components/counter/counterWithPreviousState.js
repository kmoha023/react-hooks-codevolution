import React, { useState } from 'react'

function CounterWithPreviousState() {
    const initialState = 0
    const [count, setCount] = useState(initialState)

    const incrementByFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevState => prevState + 1)
    
        }
    }

    return (
        <div>
            PrevStateCount {count}
            <button onClick={() => setCount(prevState => prevState + 1)} >increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)} >Decrement</button>
            <button onClick={incrementByFive} >incrementBy 5</button>

        </div>
    )
}

export default CounterWithPreviousState
