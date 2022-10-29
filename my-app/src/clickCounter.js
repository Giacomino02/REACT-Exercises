import React, { useState } from "react";

function ClickCounter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)
    function handleCounterIncrement(){
        setCounter(counter + 1);
    }

    return (
        <>
            <h2>Count: {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </>
    )
}

export default ClickCounter;