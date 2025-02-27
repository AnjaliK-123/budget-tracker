// import express
const express = require('express');
// import jwt
const jwt = require('jsonwebtoken');
// import router
const router = express.Router();
// import budget model
const budget = require('../models/budgetEntry');

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    //get auth header value
    const token = req.headers['authorization']?.split(' ')[1];
    console.log(req.headers);
    // if token invalid
    if (!token) {
        // uauthorized
        return res.sendStatus(401);
    }
    // verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            // forbidden
            return res.sendStatus(403);
        }
        // assign decode user to user property of request body  
        req.user = user;
        // proceed to next middleware
        next();
    });
}

// Add Budget Entry
router.post('/', authenticateToken, async (req, res) => {
    // get budget details
    const { amount, category, description } = req.body;
    // create instance of budget model
    const newEntry = new budget({
        userId: req.user.id,
        amount,
        category,
        description
    });
    try {
        // save entry
        await newEntry.save();
        // send response with new entry
        res.status(201).json(newEntry);
    } catch (error) {
        //send error response
        console.error('Error adding budget entry', error);
        res.status(400).send('Error adding budget entry');
    }
});

// Get Budget Entries
router.get('/', authenticateToken, async (req, res) => {
    // retirieves all budget entries for authenticated user
    const entries = await budget.find({ userId: req.user.id });
    // send respense in json format
    res.json(entries);
});
// Delete Budget Entry
router.delete('/:id', authenticateToken, async (req, res) => {
    // fetch and delete budget entry
    await budget.findByIdAndDelete(req.params.id);
    // send scuccess response
    res.status(204).send();
});

// export router 
module.exports = router;