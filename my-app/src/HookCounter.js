import React, { useCallback, useState } from "react";

export function UseCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue);

    const handleCounterIncrement = useCallback(function handleCounterIncrement(){
        setCounter((count) => count + 1)
    }, [])

    const handleCounterDecrement = useCallback(function handleCounterDecrement(){
        setCounter((count) => count - 1)
    }, [])

    const handleCounterReset = useCallback(function handleCounterReset(){
        setCounter(initialValue);
    }, [initialValue])

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    };
}

export function HookCounter({ initialValue = 0 }) {
    const { counter, onIncrement, onDecrement, onReset } = UseCounter(initialValue);

    return (
        <div>
            <h1>Count: {counter}</h1>
            <div>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    );
}