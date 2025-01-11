import React, { useState } from 'react';

const BudgetEntry = () => {
    // state variables
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle submission        
    }

    return (
        <div>
            <h2>Budget Entry</h2>
            <form>
                <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}  required/>
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                <button type="submit" onclick={handleSubmit}>Add Entry</button>
            </form>       
        </div>
    );
}

export default BudgetEntry;