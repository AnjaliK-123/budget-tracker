// setup express module 
const express = require('express');
// setup moongoose module 
const moongoose = require('moongose');
// setup middleware 
const cors = require('cors');
// instance of express 
const app = express(); 
// instace of middleware 
app.use(cors());
app.use(express.json());
// database connection 
moongoose.connect(
    process.env.MONGODB_URI, {
    usenewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));

