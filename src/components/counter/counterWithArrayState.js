import React, { useState } from 'react'

function CounterWithArrayState() {
    const [items, seItmes] = useState([])

    const addItem = () => {
        seItmes([...items, {
            id: items.length,
            count: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <h1>Add Items </h1>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {
                    items.map(item =>
                        <li key={item.id} >{item.count}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default CounterWithArrayState
