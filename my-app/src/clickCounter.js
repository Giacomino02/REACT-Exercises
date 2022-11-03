import React, { useEffect, useState } from "react";

function ClickCounter({onCounterChange}){
    const [counter, setCounter] = useState(0)

    useEffect(() => onCounterChange(counter), [counter, onCounterChange])
    function counterIncrement(){
        setCounter((count) => count + 1)
    }
    // function handleCounterIncrement(){
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h2>Count: {counter}</h2>
            <button onClick={counterIncrement}>Increment</button>
        </>
    )
}

export default ClickCounter;