// import { type } from '@testing-library/user-event/dist/type';
import React from "react";


class Login extends React.Component {
    state = {
        username: '',
        password: '',
        checkbox: false
    };

    handleInputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;
        this.setState({
            [name]: type === 'checkbox' ? checked : value
        });
    };

    clickLoginButton = () => {
        this.props.onLogin(this.state);
    }

    clickResetButton = () => {
        this.setState({
            username: '',
            password: '',
            checkbox: false
        })
    }

    render() {
        return (
            <form>
                <label>
                    Name
                    <input type='text' name='username' value={this.state.username} onChange={this.handleInputEvent} />
                </label>

                <label>
                    Password
                    <input type='password' name='password' value={this.state.password} onChange={this.handleInputEvent} />
                </label>

                <label>
                    Remember me
                    <input type='checkbox' name='checkbox' checked={this.state.checkbox} onChange={this.handleInputEvent} />
                </label>

                <button type="button" name="login" onClick={this.clickLoginButton} disabled={this.state.username === '' && this.state.password === ''} style={{backgroundColor: this.state.password.length < 8 ? 'red' : 'green', /* also added color */ color: this.state.password.length > 8 ? 'white' : 'black'}}>Login</button>

                <button type="button" name="reset" onClick={this.clickResetButton}>Reset</button>
            </form>
        );
    }
}

export default Login