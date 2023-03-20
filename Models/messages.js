const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  sent_by: {
    type: Number,
    required: true,
    ref: 'User',
  },
  sent_at: {
    type: Date,
    default: Date.now,
  },
  group_id: {
    type: Number,
    required: true,
    ref: 'Group',
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
