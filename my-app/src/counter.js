import React, { useEffect, useState } from 'react';
import CounterDisplay from './counterDisplay';

function Counter({ incrementInterval = 1000, incrementAmount = 1 }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((count) => count + incrementAmount);
        }, incrementInterval);

        return () => {
            clearInterval(timer);
        };
    },
        [count, incrementAmount, incrementInterval]
    );

    return <CounterDisplay count={count} />

}
export default Counter;