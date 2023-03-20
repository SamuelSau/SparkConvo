//Import Messages model
const Message = require('../Models/messages');

// GET /api/messages - Returns a list of all messages
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
        res.status(200).json({ message: 'All messages retrieved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// GET /api/messages/:id - Returns information about a specific message
exports.getMessageById = async (req, res) => {
    const validId = /^[0-9a-fA-F]{24}$/; // Regular expression to check for valid ObjectId
    if (!validId.test(req.params.id)) {
        return res.status(404).json({ message: 'Message not found!' });
    }
    try {
        const message = await Message.findById(req.params.id);
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.json(message); //if message found, then return message
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

//POST /api/messages
exports.createMessage = async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.json(message);
        res.status(201).json({ message: 'Message created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// PUT /api/messages/:id - Updates information about a specific message
exports.updateMessageById = async (req, res) => {
    try{
        const message = await Message.findById(req.params.id);
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }
        res.json(message);
        res.status(200).json({ message: 'Message updated successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

};

// DELETE /api/messages/:id - Deletes a specific message
exports.deleteMessageById = async (req, res) => {
    try{
        const message = await Message.findById(req.params.id);
    if (!message) {
        return res.status(404).json({ message: 'Message not found' });
    }
    res.json(message);
    res.status(204).json({ message: 'Message deleted successfully' });
    }
    catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
    
};