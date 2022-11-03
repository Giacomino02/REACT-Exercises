import React, { useState } from "react";

export function useForm() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    });

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target;

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            };
        });
    }

    return {
        username: data.username,
        password: data.password,
        remember: data.remember,
        onInputChange: handleInputChange
    };

}

export function HookForm() {
    const { username, password, remember, onInputChange } = useForm({
        username: '',
        password: '',
        remember: false
    });

    return (
        <form style={{margin: 10}}>
            <label>
                Username
                <input name="username" type="text" value={username} onChange={onInputChange} />
            </label>

            <label>
                Password
                <input name="password" type="password" value={password} onChange={onInputChange} />
            </label>
            <label>
                Remember me
                <input name="remember" type="checkbox" checked={remember} onChange={onInputChange} />
            </label>

            <button name="login" type="button">Login</button>
        </form>
    );
}