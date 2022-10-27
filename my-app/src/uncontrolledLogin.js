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
                    <label>
                        Nome
                        <input name="username" required autoFocus/>
                    </label>

                    <label>
                        Password
                        <input name="password" type="password" required />
                    </label>

                    <label>
                        Remember me
                        <input name="remember" type="checkbox" />
                    </label>

                    <button type="submit" >Login</button>
                    <button type="reset">Reset</button>
                </form>
            </>
        )
    }
}

export default UncontrolledLogin