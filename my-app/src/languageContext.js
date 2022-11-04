import React, { createContext } from "react";
import { DisplayLanguage } from "./displayLanguage";


export const LanguageContext = createContext("en")

export class LanguageComponent extends React.Component{
    state= {
        language: "en"
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    render(){
        return (
            <>
                <select value= {this.state.language} onChange={this.handleLanguageChange}>
                    <option value="en">ENGLISH</option>
                    <option value="it">ITALIANO</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </>
    
        )
    }

}