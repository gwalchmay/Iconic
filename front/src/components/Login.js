import React, { useState } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import { login } from '../utils/login';

const APP_URL = process.env.REACT_APP_API_URL;

function Login() {
    const [user, setUser] = useState();
    const [redirect, setRedirect] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${APP_URL}/api/auth/login`,
            user)
            .then((res) => {
                if (res.status === 200) {
                    login(res.data.token);

                    alert(res.data.message);
                    setRedirect(true);
                }
            })
            .catch((err) => alert(err.response.data.message));
    };
    return (
        <div>
            {redirect && <Redirect to="/admin" />}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label for='Username'>Username</label>
                <input type='text' name='username' id='Username' onChange={handleChange}/>
                <label for='Password'>Password</label>
                <input type='password' name='password' id='Password' onChange={handleChange}/>
                <button type="submit">Login</button>
            </form>
        </div>

    );
}


export default Login;
