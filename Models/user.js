const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    created_at:{
        type: Date,
        default: Date.now,
    },
    is_admin: {
        type: Boolean,
        default: false,
        ref: 'Groups',
    },
    is_owner: {
        type: Boolean,
        default: false,
        ref: 'Groups',
    },
});

module.exports = mongoose.model('User', userSchema);