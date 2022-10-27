import React from "react";

class ClickTracker extends React.Component{
    state = {
        button: ''
    }

    addEventButton = (event) => {
        this.setState(() => {
            return{
                button: event.target.name
            };
        });
    };

    render(){
        return (
            <>
                <button name='btn1' onClick={this.addEventButton}></button>
                <button name='btn2' onClick={this.addEventButton}></button>
                <button name='btn3' onClick={this.addEventButton}></button>
                <h1>{this.state.button}</h1>
            </>
        )
    }
}

export default ClickTracker