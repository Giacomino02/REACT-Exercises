// import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from "react";


// class Login extends React.Component {
//     state = {
//         username: '',
//         password: '',
//         checkbox: false
//     };

//     handleInputEvent = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         const checked = event.target.checked;
//         const type = event.target.type;
//         this.setState({
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     clickLoginButton = () => {
//         this.props.onLogin(this.state);
//     }

//     clickResetButton = () => {
//         this.setState({
//             username: '',
//             password: '',
//             checkbox: false
//         })
//     }

//     render() {
//         return (
//             <form>
//                 <label>
//                     Name
//                     <input type='text' name='username' value={this.state.username} onChange={this.handleInputEvent} />
//                 </label>

//                 <label>
//                     Password
//                     <input type='password' name='password' value={this.state.password} onChange={this.handleInputEvent} />
//                 </label>

//                 <label>
//                     Remember me
//                     <input type='checkbox' name='checkbox' checked={this.state.checkbox} onChange={this.handleInputEvent} />
//                 </label>

//                 <button type="button" name="login" onClick={this.clickLoginButton} disabled={this.state.username === '' && this.state.password === ''} style={{backgroundColor: this.state.password.length < 8 ? 'red' : 'green', /* also added color */ color: this.state.password.length > 8 ? 'white' : 'black'}}>Login</button>

//                 <button type="button" name="reset" onClick={this.clickResetButton}>Reset</button>
//             </form>
//         );
//     }
// }

function Login() {
    const [form, setForm] = useState({
        username: '',
        password: '',
        checkbox: false
    })

    function handleInputEvent(event) {
        const { name, value, checked, type } = event.target;
        setForm((form) => {
            return {
                ...form, [name]: type === 'checkbox' ? checked : value
            };
        })
    }
    function resetState() {
        setForm({
            username: '',
            password: '',
            checkbox: false
        });
    };

    return (
        <form>
            <label>
                Name
                <input type='text' name='username' value={form.username} onChange={handleInputEvent} />
            </label>

            <label>
                Password
                <input type='password' name='password' value={form.password} onChange={handleInputEvent} />
            </label>

            <label>
                Remember me
                <input type='checkbox' name='checkbox' checked={form.checkbox} onChange={handleInputEvent} />
            </label>

            <button type="button" name="login" disabled={form.username === '' && form.password === ''} style={{ backgroundColor: form.password.length < 8 ? 'red' : 'green', /* also added color */ color: form.password.length > 8 ? 'white' : 'black' }}>Login</button>
            <button type="button" name="reset" onClick={resetState}>Reset</button>
        </form>
    )
}

export default Login