import React from "react";

class UncontrolledLogin extends React.Component {
    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const checkbox = event.target.elements.remember.checked

        console.log({
            username,
            password,
            checkbox
        });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleFormSubmit}>
                    <input name="username" required />
                    <input name="password" type="password" required />
                    <input name="remember" type="checkbox" />
                    <button type="submit" >Login</button>
                    <button type="reset">Reset</button>
                </form>
            </>
        )
    }
}

export default UncontrolledLogin