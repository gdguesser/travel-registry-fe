import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

interface Props {
    // any props you need to pass to the component
}

const Login: React.FC<Props> = ({}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Your login logic here
        // You can use the `username` and `password` state variables to
        // check against your authentication system
        // If the login is successful, you can redirect the user to the
        // homepage using the `history.push('/')` method
        // If the login is unsuccessful, you can display an error message
        // to the user
        if (username === 'admin' && password === 'password') {
            localStorage.setItem("isLoggedIn", "true");
            history("/");
        } else {
            alert("Invalid username or password");
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
