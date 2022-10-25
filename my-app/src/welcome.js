import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.name 
                        ? <p>Welcome, {this.props.name}!</p>
                        : <p>Welcome, user!</p>
                }
                {this.props.age && <Age age={this.props.age}/>}
            </>
        )
    }
}