// import express 
const express = require('express');
// import bcrypt for hashing password
const bcrypt = require('bcryptjs');
// import jwt for creating session token
const jwt = require('jsonwebtoken');
//import user model
const user = require('../models/user');
// import routter
const router = express.Router();

// register user
// using post route for user registration
router.post('/register', async (req, res) => {
    // get username and password of user
    const { username, password } = req.body;
    // hashes the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({ username, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).send("User registered successfully.");
    } catch (error) {
        res.status(400).send("Error registering user.");
    }
});

//login user
// using post route for login
router.post('/login', async (req, res) => {
    // get the username and password
    const { username, password } = req.body;
    // find the user by username
    const user = await user.findOne({ username });
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