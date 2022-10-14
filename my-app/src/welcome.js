import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.name 
                        ? <p>Welcome, {this.props.name}!</p>
                        : <p>Welcome, user!</p>
                }
            </>
        )
    }
}