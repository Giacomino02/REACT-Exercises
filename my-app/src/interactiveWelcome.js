import React from "react";
import { Welcome } from "./welcome";

class Interactivewelcome extends React.Component{
    state= {
        username: ''
    }

    setNameInput = (event) => {
        this.setState(() => {
            return {
                username: event.target.value
            };
        });
    };

    render(){
        return(
            <>
                <input value={this.state.username} onChange={this.setNameInput}/>
                <Welcome name={this.state.username}/>
            </>
        )
    }
}

export default Interactivewelcome