import React from "react";

export function Sum({numbers=[2, 5, 10]}){
    const result = numbers.reduce((a, b) => a + b)
    return (
        <div>
            {numbers[0]} + {numbers[1]} + {numbers[2]} = {result}
        </div>
    )
}