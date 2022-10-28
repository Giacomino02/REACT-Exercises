import React from "react";

export class Container extends React.Component{
    render(){
        return <div className="container">{this.props.title}{this.props.children}</div>
    }
}