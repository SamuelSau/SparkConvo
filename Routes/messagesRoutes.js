const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController');

// GET /api/messages - Returns a list of all messages
router.get('/', messagesController.getAllMessages);

// GET /api/messages/:id - Returns information about a specific message
router.get('/:id', messagesController.getMessageById);

//POST /api/messages
router.post('/', messagesController.createMessage);

// PUT /api/messages/:id - Updates information about a specific message
router.put('/:id', messagesController.updateMessageById);

// DELETE /api/messages/:id - Deletes a specific message
router.delete('/:id', messagesController.deleteMessageById);

module.exports = router;