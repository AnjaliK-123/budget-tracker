// import ongoose library for schema
const mongoose = require('mongoose');
// create budget schema
const budgetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    }
});
// export budget model

module.exports = mongoose.model('Budget',budgetSchema);