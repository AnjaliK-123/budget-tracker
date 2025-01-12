// import mongoose library for schema
const mongoose = require('mongoose');
// create user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
// export user model
module.exports = mongoose.model('User', userSchema);
