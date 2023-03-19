const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /api/users - Returns a list of all users
router.get('/', userController.getAllUsers);

// GET /api/users/:id - Returns information about a specific user
router.get('/:id', userController.getUserById);

// PUT /api/users/:id - Updates information about a specific user
router.put('/:id', userController.updateUserById);

// DELETE /api/users/:id - Deletes a specific user
router.delete('/:id', userController.deleteUserById);

module.exports = router;
