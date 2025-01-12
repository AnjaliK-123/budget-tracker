// import express 
const express = require('express');
// import bcrypt for hashing password
const bcrypt = require('bcryptjs');
// import jwt for creating session token
const jwt = require('jsonwebtoken');
//import user model
const User = require('../models/user');
// import routter
const router = express.Router();

// register user
// using post route for user registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Username and password are required.");
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).send("User registered successfully.");
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(400).send("Error registering user.");
    }
});

//login user
// using post route for login
router.post('/login', async (req, res) => {
    // get the username and password
    const { username, password } = req.body;
    // find the user by username
    const user = await User.findOne({ username });
    // if user does not exists or incorrect password
    if (!user || !(await bcrypt.compare(password, user.password))) {
        // return error message
        return res.status(401).send('Invalid credentials');
    }
    //create session token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // response with json token
    res.json({token});
});
// export router
module.exports = router;