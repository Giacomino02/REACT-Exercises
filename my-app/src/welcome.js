import React from "react";
import { Age } from "./age";

export function Welcome(props) {
    return (
        <>

            <p className="welcome">Welcome, {props.name}!</p>
            <p>Welcome, user!</p>

            {props.age > 18 && <Age age={props.age} /> || <p>You're very young!</p>}
        </>
    )
}
