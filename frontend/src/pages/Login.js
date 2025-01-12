import React, { useState } from 'react';
import axios from 'axios';

// Login component
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // handle form submission

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //axios middleware to handle middleware
            const response = await axios.post('http://localhost:5001/api/auth/login', {
                username,
                password
            });

            // storing token in local storage
            localStorage.setItem('token', response.data.token);
            setSuccess('Login successful');
            setError(null);
        } catch (error) {
            setError(error.response?.data || 'Login failed.');
            setSuccess(null);
        }
    }

    // render login form
    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
                <input type="text" placeHolder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeHolder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
             {/* display error and success message */}
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
        </div>
    );
    
}

// export login component
export default Login;