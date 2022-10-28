import React from "react";

export class DisplayLanguage extends React.Component {
    state = {};

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    };

    render(){
        return (
            <select value={this.state.language} onChange={this.handleLanguageChange}>
                <option value="en">English</option>
				<option value="it">Italiano</option>
            </select>
        )
    }
}