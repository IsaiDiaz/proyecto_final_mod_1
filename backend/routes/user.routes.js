const express = require('express');
const router = express.Router();
const { createUser, getUserById, updateUser, authPassword } = require('../controllers/user.controller');

router.post('/user', createUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);
router.post('/auth_password', authPassword)

module.exports = router;