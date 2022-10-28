import React from "react";

export function Sum({numbers}){
    const result = numbers.reduce((a, b) => a + b)
    return (
        <div>
            {numbers[0]} + {numbers[1]} + {numbers[2]} = {result}
        </div>
    )
}