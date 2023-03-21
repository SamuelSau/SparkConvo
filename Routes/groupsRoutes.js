const express = require('express');
const router = express.Router();
const groupsController = require('../controllers/groupsController');

// GET /api/groups - Returns a list of all groups
router.get('/', groupsController.getAllGroups);

// GET /api/groups/:id - Returns information about a specific group
router.get('/:id', groupsController.getGroupsById);

// GET /api/groups/:id/members - Returns a list of members in a specific group
router.get('/:id/members', groupsController.getMembersByGroupId);

//POST /api/groups - Creates a group
router.post('/', groupsController.createGroup);

// POST /api/groups/:id/members - Adds a new member to a specific group
router.post('/:id/members', groupsController.addMemberToGroup);

// PUT /api/groups/:id - Updates information about a specific group
router.put('/:id', groupsController.updateGroupById);

// PUT /api/groups/:id/members/:user_id - Updates information about a specific member in a specific group
router.put('/:id/members/:user_id', groupsController.updateMemberInGroup);

// DELETE /api/groups/:id - Deletes a specific group
router.delete('/:id', groupsController.deleteGroupById);

// DELETE /api/groups/:id/members/:user_id - Removes a specific member from a specific group
router.delete('/:id/members/:user_id', groupsController.removeMemberFromGroup);

module.exports = router;