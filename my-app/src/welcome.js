import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.name 
                        ? <p className="welcome">Welcome, {this.props.name}!</p>
                        : <p>Welcome, user!</p>
                }
                {this.props.age > 18 && <Age age={this.props.age}/> || <p>You're very young!</p>}
            </>
        )
    }
}