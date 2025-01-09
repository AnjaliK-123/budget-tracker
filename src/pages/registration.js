import React, { useState } from 'react';
import axios from 'axios';


const Registration = () => {
    // state varibles
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // handle form submission
    const handleSubmit = async (e) => {
        // prevent page refresh
        e.preventDefault();
        try {
            // used axios as middleware to post data to backend
            const response = await axios.post('http://localhost:5001/api/auth/register', {
                username,
                password
            });
            // handle success
            setSuccess(response.data);
            setError(null);

        } catch (error) {
            // handle error
            setError(error.response?.data || 'Registration failed.');
            setSuccess(null);
        }
        
    };

    return (
        <div className="registration-form">
            <h2>
                Register
            </h2>
            <form onSubmit={handleSubmit}>
                {/* input fields  */}
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Register</button>
            </form>
            {/* display error and success message */}
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
        </div>
    );

};

export default Registration;