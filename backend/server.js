// load env variables from .env file
require('dotenv').config();
// setup express module 
const express = require('express');
// setup mongoose module 
const mongoose = require('mongoose');
// setup middleware 
const cors = require('cors');
// instance of express 
const app = express(); 
// instance of middleware 
app.use(cors());
app.use(express.json());
// database connection 
mongoose.connect(
    process.env.MONGODB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// listen on port
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
