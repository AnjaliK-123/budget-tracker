import React, { useState } from 'react';
import axios from 'axios';

const BudgetEntry = () => {
    // state variables
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // handle submission 
        try {
            // used axios as middleware to post data to backend
            const response = await axios.post('http://localhost:5001/api/budget', {
                amount,
                category,
                description
            });
            // handle success
            setSuccess(response.data);
            setError(null);

        } catch (error) {
            // handle error
            setError(error.response?.data || 'Entry failed');
            setSuccess(null);
        }
    }

    return (
        <div>
            <h2>Budget Entry</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}  required/>
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <button type="submit">Add Entry</button>
            </form>  
              {/* display error and success message */}
              {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
        </div>
    );
}

export default BudgetEntry;