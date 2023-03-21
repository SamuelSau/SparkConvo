const mongoose = require('mongoose');

const groupsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    created_by: {
        type: Number,
        required: true,
        ref: 'User',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    is_admin: {
        type: Boolean,
        default: false,
        ref: 'User',
    },
    is_owner: {
        type: Boolean,
        default: false,
        ref: 'User',
    },
});

const Groups = mongoose.model('Groups', groupsSchema);

module.exports = Groups;
